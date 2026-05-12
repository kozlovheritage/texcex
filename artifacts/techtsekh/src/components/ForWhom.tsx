import React from 'react';
import { motion } from 'framer-motion';

export default function ForWhom() {
  return (
    <section id="for-whom" className="py-24 bg-[hsl(var(--bg-primary))]">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 max-w-3xl"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-[hsl(var(--text-primary))]">
            Мы работаем с теми, кто хочет системный результат
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="glass-card rounded-2xl p-8 md:p-12 flex flex-col h-full group"
          >
            <div className="w-14 h-14 border border-[hsl(var(--accent-warm))] rounded flex items-center justify-center mb-8 bg-white/50">
              <svg className="w-6 h-6 text-[hsl(var(--accent-warm))]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
              </svg>
            </div>
            <h3 className="text-2xl font-heading font-bold text-[hsl(var(--accent-blue))] mb-4">Инфобизнес</h3>
            <p className="text-[hsl(var(--text-secondary))] font-body mb-8 flex-grow text-lg">
              Лендинги, чат-боты, автоворонки. Техническая упаковка под запуски, которая работает при любых блокировках и нагрузках.
            </p>
            <a href="#services" className="inline-flex items-center text-[hsl(var(--accent-blue))] font-medium group-hover:text-[hsl(var(--accent-warm))] transition-colors">
              Смотреть решения для экспертов
              <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card rounded-2xl p-8 md:p-12 flex flex-col h-full group"
          >
            <div className="w-14 h-14 border border-[hsl(var(--accent-warm))] rounded flex items-center justify-center mb-8 bg-white/50">
              <svg className="w-6 h-6 text-[hsl(var(--accent-warm))]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m3-4h1m-1 4h1m-5 8h8" />
              </svg>
            </div>
            <h3 className="text-2xl font-heading font-bold text-[hsl(var(--accent-blue))] mb-4">Производство и B2B</h3>
            <p className="text-[hsl(var(--text-secondary))] font-body mb-8 flex-grow text-lg">
              Современные сайты и ребрендинг для заводов, туризма и малого бизнеса. Из унылого сайта-2005 в инструмент продаж.
            </p>
            <a href="#services" className="inline-flex items-center text-[hsl(var(--accent-blue))] font-medium group-hover:text-[hsl(var(--accent-warm))] transition-colors">
              Смотреть решения для бизнеса
              <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
