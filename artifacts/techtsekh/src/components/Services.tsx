import React from 'react';
import { motion } from 'framer-motion';

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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px]">
          {/* Main Large Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="glass-card rounded-2xl p-8 md:col-span-2 md:row-span-2 flex flex-col justify-between group"
          >
            <div>
              <div className="w-12 h-12 border border-[hsl(var(--accent-warm))] rounded-lg flex items-center justify-center mb-6 bg-white/40">
                <svg className="w-6 h-6 text-[hsl(var(--accent-warm))]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>
              </div>
              <h3 className="text-3xl font-heading font-bold text-[hsl(var(--accent-blue))] mb-4">Сайты</h3>
              <p className="text-[hsl(var(--text-secondary))] text-lg max-w-md mb-6">
                Многостраничные порталы, корпоративные сайты и высококонверсионные лендинги. Полный цикл от прототипа до релиза.
              </p>
              <div className="flex gap-4 font-mono text-sm">
                <span className="bg-[hsl(var(--bg-primary))] px-3 py-1 rounded text-[hsl(var(--accent-blue))] border border-[hsl(var(--accent-blue))/10]">от 10 000 ₽</span>
                <span className="bg-[hsl(var(--bg-primary))] px-3 py-1 rounded text-[hsl(var(--accent-blue))] border border-[hsl(var(--accent-blue))/10]">от 2 дней</span>
              </div>
            </div>
            <div className="mt-8">
              <button className="px-6 py-3 border border-[hsl(var(--accent-blue))] text-[hsl(var(--accent-blue))] font-medium rounded hover:bg-[hsl(var(--accent-blue))] hover:text-white transition-colors">
                Подробнее
              </button>
            </div>
          </motion.div>

          {/* Medium Card 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card rounded-2xl p-6 flex flex-col justify-between"
          >
            <div>
              <div className="w-10 h-10 border border-[hsl(var(--accent-warm))] rounded-lg flex items-center justify-center mb-4 bg-white/40">
                <svg className="w-5 h-5 text-[hsl(var(--accent-warm))]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>
              </div>
              <h3 className="text-xl font-heading font-bold text-[hsl(var(--accent-blue))] mb-2">Чат-боты</h3>
              <p className="text-[hsl(var(--text-secondary))] text-sm">Автоматизация общения в Telegram, WhatsApp, ВК.</p>
            </div>
            <div className="font-mono text-sm text-[hsl(var(--accent-blue))]">от 5 000 ₽</div>
          </motion.div>

          {/* Medium Card 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="glass-card rounded-2xl p-6 flex flex-col justify-between"
          >
            <div>
              <div className="w-10 h-10 border border-[hsl(var(--accent-warm))] rounded-lg flex items-center justify-center mb-4 bg-white/40">
                <svg className="w-5 h-5 text-[hsl(var(--accent-warm))]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              </div>
              <h3 className="text-xl font-heading font-bold text-[hsl(var(--accent-blue))] mb-2">Автоматизация</h3>
              <p className="text-[hsl(var(--text-secondary))] text-sm">Интеграции CRM, настройка бизнес-процессов.</p>
            </div>
            <div className="font-mono text-sm text-[hsl(var(--accent-blue))]">от 5 000 ₽</div>
          </motion.div>

          {/* Small Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="glass-card rounded-2xl p-6 flex items-center justify-between md:col-span-3 lg:col-span-1"
          >
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 border border-[hsl(var(--accent-warm))] rounded-lg flex items-center justify-center bg-white/40">
                <svg className="w-5 h-5 text-[hsl(var(--accent-warm))]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              </div>
              <div>
                <h3 className="font-heading font-bold text-[hsl(var(--accent-blue))]">Рассылки</h3>
                <div className="font-mono text-sm text-[hsl(var(--text-secondary))]">от 1 000 ₽</div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
