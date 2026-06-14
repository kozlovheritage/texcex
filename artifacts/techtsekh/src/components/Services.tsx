import React from 'react';
import { motion } from 'framer-motion';
import { Monitor } from 'lucide-react';

const services = [
  {
    id: 'sites',
    title: 'Сайты',
    price: 'от 10 000 ₽',
    term: 'от 2 дней',
    description: 'Многостраничные порталы, корпоративные сайты и высококонверсионные лендинги. Полный цикл от прототипа до релиза и поддержка после запуска.',
    icon: <Monitor className="w-6 h-6" strokeWidth={1.5} />,
    large: true,
  },
  {
    id: 'bots',
    title: 'Чат-боты',
    price: 'от 5 000 ₽',
    description: 'Автоматизация общения в Telegram, WhatsApp, ВКонтакте. Воронки, рассылки, квизы, интеграция\u00a0с\u00a0CRM.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
      </svg>
    ),
    large: false,
  },
  {
    id: 'automation',
    title: 'Автоматизация и ИИ',
    price: 'от 5 000 ₽',
    description: 'Внедряем ИИ и нейросети в бизнес-процессы: Make, n8n, ChatGPT API. Интеграции между сервисами, CRM, API-подключения — рутина уходит, прибыль остаётся.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    large: false,
  },
  {
    id: 'mailings',
    title: 'Рассылки',
    price: 'от 1 000 ₽',
    description: 'Email и мессенджер-рассылки с сегментацией. Настройка, шаблоны, аналитика открытий и кликов.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    large: false,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-[hsl(var(--bg-secondary))]">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-[hsl(var(--text-primary))]">Что мы делаем</h2>
        </motion.div>

        {/* Bento grid: left col = Сайты (tall) + Чат-боты; right col = Автоматизация + Рассылки */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* LEFT COLUMN */}
          <div className="flex flex-col gap-5">
            {/* Large: Сайты */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="glass-card rounded-2xl p-8 flex flex-col justify-between"
              style={{ minHeight: '320px' }}
              data-testid="card-service-sites"
            >
              <div>
                <div className="w-12 h-12 border border-[hsl(var(--accent-warm))] rounded-lg flex items-center justify-center mb-6 bg-white/40 text-[hsl(var(--accent-warm))]">
                  {services[0].icon}
                </div>
                <h3 className="text-3xl font-heading font-bold text-[hsl(var(--accent-blue))] mb-4">{services[0].title}</h3>
                <p className="text-[hsl(var(--text-secondary))] text-base mb-6 leading-relaxed">
                  {services[0].description}
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="font-mono text-sm bg-[hsl(var(--bg-primary))] px-3 py-1 rounded text-[hsl(var(--accent-blue))] border border-[hsl(var(--accent-blue))]/10">
                    {services[0].price}
                  </span>
                  <span className="font-mono text-sm bg-[hsl(var(--bg-primary))] px-3 py-1 rounded text-[hsl(var(--accent-blue))] border border-[hsl(var(--accent-blue))]/10">
                    {services[0].term}
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Medium: Чат-боты */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass-card rounded-2xl p-6 flex flex-col justify-between"
              style={{ minHeight: '200px' }}
              data-testid="card-service-bots"
            >
              <div>
                <div className="w-10 h-10 border border-[hsl(var(--accent-warm))] rounded-lg flex items-center justify-center mb-4 bg-white/40 text-[hsl(var(--accent-warm))]">
                  {services[1].icon}
                </div>
                <h3 className="text-xl font-heading font-bold text-[hsl(var(--accent-blue))] mb-2">{services[1].title}</h3>
                <p className="text-[hsl(var(--text-secondary))] text-sm leading-relaxed">{services[1].description}</p>
              </div>
              <div className="font-mono text-sm text-[hsl(var(--accent-blue))] mt-4">{services[1].price}</div>
            </motion.div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="flex flex-col gap-5">
            {/* Medium: Автоматизация */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="glass-card rounded-2xl p-6 flex flex-col justify-between"
              style={{ minHeight: '200px' }}
              data-testid="card-service-automation"
            >
              <div>
                <div className="w-10 h-10 border border-[hsl(var(--accent-warm))] rounded-lg flex items-center justify-center mb-4 bg-white/40 text-[hsl(var(--accent-warm))]">
                  {services[2].icon}
                </div>
                <h3 className="text-xl font-heading font-bold text-[hsl(var(--accent-blue))] mb-2">{services[2].title}</h3>
                <p className="text-[hsl(var(--text-secondary))] text-sm leading-relaxed">{services[2].description}</p>
              </div>
              <div className="font-mono text-sm text-[hsl(var(--accent-blue))] mt-4">{services[2].price}</div>
            </motion.div>

            {/* Medium: Рассылки */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="glass-card rounded-2xl p-6 flex flex-col justify-between"
              style={{ minHeight: '200px' }}
              data-testid="card-service-mailings"
            >
              <div>
                <div className="w-10 h-10 border border-[hsl(var(--accent-warm))] rounded-lg flex items-center justify-center mb-4 bg-white/40 text-[hsl(var(--accent-warm))]">
                  {services[3].icon}
                </div>
                <h3 className="text-xl font-heading font-bold text-[hsl(var(--accent-blue))] mb-2">{services[3].title}</h3>
                <p className="text-[hsl(var(--text-secondary))] text-sm leading-relaxed">{services[3].description}</p>
              </div>
              <div className="font-mono text-sm text-[hsl(var(--accent-blue))] mt-4">{services[3].price}</div>
            </motion.div>

            {/* Extra tall fill card to balance the left Сайты block */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="glass-card rounded-2xl p-6 flex flex-col justify-center items-start border-l-2 border-[hsl(var(--accent-warm))] flex-1"
            >
              <p className="text-base font-heading font-semibold text-[hsl(var(--accent-blue))] mb-2">
                Не знаете, что вам нужно?
              </p>
              <p className="text-sm text-[hsl(var(--text-secondary))] font-body leading-relaxed mb-5">
                Опишите задачу — подберём оптимальный набор инструментов и рассчитаем стоимость за 24 часа.
              </p>
              <a
                href="https://t.me/andrey_aw"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-[hsl(var(--accent-blue))] border border-[hsl(var(--accent-blue))]/30 px-4 py-2 rounded hover:bg-[hsl(var(--accent-blue))] hover:text-white transition-all"
              >
                Обсудить задачу
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
