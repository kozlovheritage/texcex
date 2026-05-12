import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { value: '150+', label: 'Проектов запущено' },
  { value: '3 дня', label: 'Средний старт' },
  { value: '24/7', label: 'Поддержка' },
];

/* Subtle animated circuit traces — right half only, 3 traces max */
function CircuitWow() {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1280 800"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <radialGradient id="heroGlow" cx="75%" cy="50%" r="35%">
          <stop offset="0%" stopColor="#0B2B5E" stopOpacity="0.08" />
          <stop offset="100%" stopColor="#0B2B5E" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Subtle right-side glow */}
      <ellipse
        cx="960" cy="400" rx="340" ry="260"
        fill="url(#heroGlow)"
        className="glow-pulse"
      />

      {/* ── Static grid traces — right 55% of viewport only ── */}
      <g opacity="0.07" stroke="#0B2B5E" strokeWidth="1" fill="none">
        <path d="M680,180 L900,180 L930,210 L1280,210" />
        <path d="M700,400 L850,400 L880,370 L1100,370 L1130,400 L1280,400" />
        <path d="M750,600 L950,600 L980,570 L1280,570" />
        <path d="M900,180 L900,570" />
        <path d="M1100,210 L1100,570" />
        <circle cx="900"  cy="180" r="3" fill="#0B2B5E" opacity="1" />
        <circle cx="1100" cy="400" r="3" fill="#0B2B5E" opacity="1" />
        <circle cx="900"  cy="570" r="3" fill="#0B2B5E" opacity="1" />
      </g>

      {/* ── Animated copper pulses — 3 traces, right side only ── */}
      {/* Pulse 1 — upper rail */}
      <path
        d="M650,180 L900,180 L930,210 L1300,210"
        fill="none" stroke="#B8964A" strokeWidth="1.5" opacity="0"
        style={{
          strokeDasharray: 800,
          strokeDashoffset: 800,
          animation: 'traceLoop 6s linear infinite',
          animationDelay: '0s',
        }}
      />
      {/* Pulse 2 — mid rail */}
      <path
        d="M1300,400 L1130,400 L1100,370 L880,370 L850,400 L680,400"
        fill="none" stroke="#B8964A" strokeWidth="1.5" opacity="0"
        style={{
          strokeDasharray: 800,
          strokeDashoffset: 800,
          animation: 'traceLoop 7.5s linear infinite',
          animationDelay: '2.5s',
        }}
      />
      {/* Pulse 3 — vertical connector */}
      <path
        d="M900,180 L900,570"
        fill="none" stroke="#B8964A" strokeWidth="1" opacity="0"
        style={{
          strokeDasharray: 400,
          strokeDashoffset: 400,
          animation: 'traceLoop 5s linear infinite',
          animationDelay: '1.2s',
        }}
      />

      {/* Connector node dots */}
      <g fill="#B8964A" opacity="0.3">
        <circle cx="930"  cy="210" r="4" />
        <circle cx="1100" cy="370" r="4" />
        <circle cx="880"  cy="370" r="4" />
        <circle cx="900"  cy="570" r="4" />
      </g>
    </svg>
  );
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: 2.4 + i * 0.15, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[hsl(var(--bg-primary))]"
    >
      {/* Circuit board — right side only */}
      <CircuitWow />

      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left: copy */}
        <div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 2.35 }}
            className="text-sm font-body tracking-[0.08em] text-[#0B2B5E] uppercase border border-[#0B2B5E]/20 inline-block px-3 py-1 rounded-full mb-6"
          >
            Технический отдел для вашего бизнеса
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 2.45, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl md:text-6xl lg:text-[64px] font-bold font-heading text-[#0B2B5E] leading-[1.08] mb-6"
          >
            Сайты, боты и рассылки,{' '}
            которые{' '}
            <span style={{ color: 'hsl(var(--accent-warm))' }}>продают</span>{' '}
            даже в кризис
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 2.6 }}
            className="text-lg md:text-xl text-[hsl(var(--text-secondary))] font-body mb-10 max-w-xl"
          >
            Разрабатываем, собираем в систему и поддерживаем. Вы&nbsp;— получаете заявки, мы&nbsp;— техническую сторону.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 2.75 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#cta"
              data-testid="button-hero-cta-primary"
              className="px-8 py-4 bg-[#0B2B5E] text-white font-medium rounded hover:bg-[hsl(var(--accent-blue))] transition-all hover:-translate-y-1 shadow-lg shadow-[#0B2B5E]/20"
            >
              Рассчитать проект
            </a>
            <a
              href="#cases"
              data-testid="button-hero-cta-secondary"
              className="px-8 py-4 border border-[#0B2B5E] text-[#0B2B5E] font-medium rounded hover:bg-[#0B2B5E] hover:text-white transition-all hover:-translate-y-1"
            >
              Смотреть кейсы
            </a>
          </motion.div>
        </div>

        {/* Right: floating cards */}
        <div className="hidden lg:flex flex-col gap-5">
          <motion.div
            custom={0}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            className="glass-card rounded-2xl p-8 relative overflow-hidden float-y"
            style={{ animationDelay: '0s' }}
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-[#0B2B5E]/5 rounded-full blur-3xl pointer-events-none" />
            <p className="text-lg font-heading font-semibold text-[#0B2B5E] mb-2">
              «Из унылого сайта-2005 — в инструмент продаж»
            </p>
            <p className="text-[hsl(var(--text-secondary))] font-body text-sm leading-relaxed">
              Беремся за проекты любой сложности: от простого лендинга до экосистемы автоматизации. Без лишних слов — только результат.
            </p>
          </motion.div>

          <div className="grid grid-cols-3 gap-4">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                custom={i + 1}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                className="glass-card rounded-2xl p-5 flex flex-col items-start float-y"
                style={{ animationDelay: `${i * 0.4}s` }}
              >
                <div className="text-3xl font-mono font-bold text-[#0B2B5E] mb-1">{stat.value}</div>
                <div className="text-xs text-[hsl(var(--text-secondary))] font-body leading-snug">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          <motion.div
            custom={4}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            className="glass-card rounded-2xl p-6 flex items-center gap-5 border-l-2 border-[hsl(var(--accent-warm))]"
          >
            <div className="w-10 h-10 flex-shrink-0 rounded-full border border-[hsl(var(--accent-warm))]/50 flex items-center justify-center">
              <svg className="w-5 h-5" fill="none" stroke="hsl(var(--accent-warm))" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <p className="text-sm text-[hsl(var(--text-secondary))] font-body">
              Сдаём проект только тогда, когда он начинает давать результат — не раньше.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
