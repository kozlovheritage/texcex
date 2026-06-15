import { Router, type IRouter } from "express";

const router: IRouter = Router();

interface Lead {
  name: string;
  phone: string;
  email?: string;
  telegram?: string;
}

async function notifyTelegram(lead: Lead): Promise<void> {
  const token = process.env["TELEGRAM_BOT_TOKEN"];
  const chatId = process.env["TELEGRAM_CHAT_ID"];
  if (!token || !chatId) return;

  const lines = [
    "🔔 <b>Новая заявка с сайта ТЕХЦЕХ</b>",
    "",
    `👤 <b>Имя:</b> ${lead.name}`,
    `📱 <b>Телефон:</b> ${lead.phone}`,
  ];
  if (lead.email) lines.push(`📧 <b>Email:</b> ${lead.email}`);
  if (lead.telegram) lines.push(`💬 <b>Telegram:</b> ${lead.telegram}`);

  await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ chat_id: chatId, text: lines.join("\n"), parse_mode: "HTML" }),
  });
}

router.post("/leads", async (req, res) => {
  const { name, phone, email, telegram } = req.body as Record<string, unknown>;

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
  };

  req.log.info({ lead }, "New lead received");

  notifyTelegram(lead).catch((err) => {
    req.log.warn({ err }, "Failed to send Telegram notification");
  });

  res.json({ ok: true });
});

export default router;
