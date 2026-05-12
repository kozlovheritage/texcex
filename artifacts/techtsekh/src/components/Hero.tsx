import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { value: '150+', label: 'Проектов запущено' },
  { value: '3 дня', label: 'Средний старт' },
  { value: '24/7', label: 'Поддержка' },
];

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[hsl(var(--bg-primary))]">
      <div className="absolute inset-0 z-0 opacity-[0.15] pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M10,10 L30,10 L40,20 L40,80 L50,90 L90,90" fill="none" stroke="hsl(var(--accent-warm))" strokeWidth="1" />
              <circle cx="10" cy="10" r="2" fill="hsl(var(--accent-warm))" />
              <circle cx="90" cy="90" r="2" fill="hsl(var(--accent-warm))" />
              <path d="M60,10 L80,10 L90,20 L90,40" fill="none" stroke="hsl(var(--accent-warm))" strokeWidth="1" opacity="0.5" />
              <circle cx="60" cy="10" r="1.5" fill="hsl(var(--accent-warm))" />
              <path d="M10,50 L20,50 L30,60 L60,60" fill="none" stroke="hsl(var(--accent-warm))" strokeWidth="1" opacity="0.4" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit)" />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2.4 }}
        >
          <p className="text-sm font-body tracking-[0.08em] text-[hsl(var(--accent-blue))] uppercase border border-[hsl(var(--accent-blue))]/20 inline-block px-3 py-1 rounded-full mb-6">
            Технический отдел для вашего бизнеса
          </p>
          <h1 className="text-5xl md:text-6xl lg:text-[64px] font-bold font-heading text-[hsl(var(--text-primary))] leading-[1.1] mb-6">
            Сайты, боты и рассылки, которые{' '}
            <span className="text-[hsl(var(--accent-blue))]">продают</span>{' '}
            даже в кризис
          </h1>
          <p className="text-lg md:text-xl text-[hsl(var(--text-secondary))] font-body mb-10 max-w-xl">
            Разрабатываем, собираем в систему и поддерживаем. Вы — получаете заявки, мы — техническую сторону.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#cta"
              data-testid="button-hero-cta-primary"
              className="px-8 py-4 bg-[hsl(var(--accent-blue))] text-white font-medium rounded hover:bg-[#2B4F7F] transition-all hover:-translate-y-1 shadow-lg shadow-[hsl(var(--accent-blue))]/20"
            >
              Рассчитать проект
            </a>
            <a
              href="#cases"
              data-testid="button-hero-cta-secondary"
              className="px-8 py-4 border border-[hsl(var(--accent-blue))] text-[hsl(var(--accent-blue))] font-medium rounded hover:bg-[hsl(var(--accent-blue))] hover:text-white transition-all hover:-translate-y-1"
            >
              Смотреть кейсы
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 2.6 }}
          className="hidden lg:flex flex-col gap-5"
        >
          <div className="glass-card rounded-2xl p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-[hsl(var(--accent-blue))]/5 rounded-full blur-3xl pointer-events-none" />
            <p className="text-lg font-heading font-semibold text-[hsl(var(--accent-blue))] mb-2">
              «Из унылого сайта-2005 — в инструмент продаж»
            </p>
            <p className="text-[hsl(var(--text-secondary))] font-body text-sm leading-relaxed">
              Беремся за проекты любой сложности: от простого лендинга до экосистемы автоматизации. Без лишних слов — только результат.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-4">
            {stats.map((stat) => (
              <div key={stat.label} className="glass-card rounded-2xl p-5 flex flex-col items-start">
                <div className="text-3xl font-mono font-bold text-[hsl(var(--accent-blue))] mb-1">{stat.value}</div>
                <div className="text-xs text-[hsl(var(--text-secondary))] font-body leading-snug">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="glass-card rounded-2xl p-6 flex items-center gap-5 border-l-2 border-[hsl(var(--accent-warm))]">
            <div className="w-10 h-10 flex-shrink-0 rounded-full border border-[hsl(var(--accent-warm))]/50 flex items-center justify-center">
              <svg className="w-5 h-5 text-[hsl(var(--accent-warm))]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <p className="text-sm text-[hsl(var(--text-secondary))] font-body">
              Сдаём проект только тогда, когда он начинает давать результат — не раньше.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
