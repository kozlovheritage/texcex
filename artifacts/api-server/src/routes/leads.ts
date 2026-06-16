import { Router, type IRouter } from "express";
import type { Logger } from "pino";

const router: IRouter = Router();

interface Lead {
  name: string;
  phone: string;
  email?: string;
  telegram?: string;
  comment?: string;
}

async function notifyTelegram(lead: Lead, log: Logger): Promise<void> {
  const token = process.env["TELEGRAM_BOT_TOKEN"];
  const chatId = process.env["TELEGRAM_CHAT_ID"];
  if (!token || !chatId) {
    log.warn("TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID not set — skipping Telegram notification");
    return;
  }

  const lines = [
    "🔔 <b>Новая заявка с сайта ТЕХЦЕХ</b>",
    "",
    `👤 <b>Имя:</b> ${lead.name}`,
    `📱 <b>Телефон:</b> ${lead.phone}`,
  ];
  if (lead.email) lines.push(`📧 <b>Email:</b> ${lead.email}`);
  if (lead.telegram) lines.push(`💬 <b>Telegram:</b> ${lead.telegram}`);
  if (lead.comment) lines.push(`\n💬 <b>Комментарий:</b> ${lead.comment}`);

  async function send(cid: string): Promise<Response> {
    return fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: cid, text: lines.join("\n"), parse_mode: "HTML" }),
    });
  }

  let res = await send(chatId);

  if (!res.ok) {
    const body = await res.text().catch(() => "(unreadable)");
    type TgError = { parameters?: { migrate_to_chat_id?: number } };
    let parsed: TgError = {};
    try { parsed = JSON.parse(body) as TgError; } catch { /* ignore */ }

    const migratedId = parsed.parameters?.migrate_to_chat_id;
    if (migratedId) {
      const newChatId = String(migratedId);
      log.info({ oldChatId: chatId, newChatId }, "Group migrated to supergroup, retrying");
      res = await send(newChatId);
      if (!res.ok) {
        const retryBody = await res.text().catch(() => "(unreadable)");
        throw new Error(`Telegram API error ${res.status} (after migration): ${retryBody}`);
      }
      log.info({ chatId: newChatId }, "Telegram notification sent");
    } else {
      throw new Error(`Telegram API error ${res.status}: ${body}`);
    }
  } else {
    log.info({ chatId }, "Telegram notification sent");
  }
}

router.post("/leads", async (req, res) => {
  const { name, phone, email, telegram, comment } = req.body as Record<string, unknown>;

  if (!name || typeof name !== "string" || name.trim().length === 0) {
    res.status(400).json({ error: "name is required" });
    return;
  }
  if (!phone || typeof phone !== "string" || phone.trim().length < 4) {
    res.status(400).json({ error: "phone is required" });
    return;
  }

  const lead: Lead = {
    name: (name as string).trim(),
    phone: (phone as string).trim(),
    email: typeof email === "string" && email.trim() ? email.trim() : undefined,
    telegram: typeof telegram === "string" && telegram.trim() ? telegram.trim() : undefined,
    comment: typeof comment === "string" && comment.trim() ? comment.trim() : undefined,
  };

  req.log.info({ lead }, "New lead received");

  notifyTelegram(lead, req.log).catch((err: unknown) => {
    req.log.error({ err }, "Failed to send Telegram notification");
  });

  res.json({ ok: true });
});

export default router;
