import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { LogoMark } from './LogoMark';

const stats = [
  { value: '150+', label: 'Проектов запущено' },
  { value: '3 дня', label: 'Средний старт' },
  { value: '24/7', label: 'Поддержка' },
];

/* Animated SVG circuit board overlay — electricity pulses along traces */
function CircuitWow() {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1280 800"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        {/* Radial glow in centre */}
        <radialGradient id="heroGlow" cx="62%" cy="50%" r="40%">
          <stop offset="0%" stopColor="#1F3A5F" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#1F3A5F" stopOpacity="0" />
        </radialGradient>
        {/* Warm copper pulse gradient along a trace */}
        <linearGradient id="pulse1" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%"   stopColor="#B8964A" stopOpacity="0" />
          <stop offset="50%"  stopColor="#B8964A" stopOpacity="1" />
          <stop offset="100%" stopColor="#B8964A" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Subtle centre glow — pulsing */}
      <ellipse
        cx="800" cy="400" rx="380" ry="260"
        fill="url(#heroGlow)"
        className="glow-pulse"
      />

      {/* ── Static background grid traces (very faint) ── */}
      <g opacity="0.09" stroke="#1F3A5F" strokeWidth="1" fill="none">
        {/* Horizontal rails */}
        <path d="M0,200 L400,200 L430,230 L900,230 L930,200 L1280,200" />
        <path d="M0,400 L200,400 L230,370 L600,370 L640,400 L1100,400 L1130,370 L1280,370" />
        <path d="M0,600 L350,600 L380,570 L800,570 L830,600 L1280,600" />
        {/* Vertical stubs */}
        <path d="M200,230 L200,370" />
        <path d="M600,370 L600,570" />
        <path d="M900,230 L900,570" />
        <path d="M400,200 L400,570" />
        <path d="M1100,200 L1100,600" />
        {/* Connector dots */}
        <circle cx="200"  cy="230" r="3" fill="#1F3A5F" opacity="1" />
        <circle cx="400"  cy="200" r="3" fill="#1F3A5F" opacity="1" />
        <circle cx="600"  cy="370" r="3" fill="#1F3A5F" opacity="1" />
        <circle cx="900"  cy="230" r="3" fill="#1F3A5F" opacity="1" />
        <circle cx="1100" cy="400" r="3" fill="#1F3A5F" opacity="1" />
      </g>

      {/* ── Animated copper electricity pulses ── */}
      {/* Pulse 1 — main horizontal rail */}
      <path
        d="M-20,200 L400,200 L430,230 L900,230 L930,200 L1300,200"
        fill="none" stroke="#B8964A" strokeWidth="1.5" opacity="0"
        style={{
          strokeDasharray: 1300,
          strokeDashoffset: 1300,
          animation: 'traceLoop 5s linear infinite',
          animationDelay: '0s',
        }}
      />
      {/* Pulse 2 — mid rail */}
      <path
        d="M1300,400 L1100,400 L1130,370 L640,370 L600,400 L230,400 L200,370 L-20,370"
        fill="none" stroke="#B8964A" strokeWidth="1.5" opacity="0"
        style={{
          strokeDasharray: 1300,
          strokeDashoffset: 1300,
          animation: 'traceLoop 6s linear infinite',
          animationDelay: '1.8s',
        }}
      />
      {/* Pulse 3 — lower rail */}
      <path
        d="M-20,600 L350,600 L380,570 L800,570 L830,600 L1300,600"
        fill="none" stroke="#B8964A" strokeWidth="1.5" opacity="0"
        style={{
          strokeDasharray: 1300,
          strokeDashoffset: 1300,
          animation: 'traceLoop 7s linear infinite',
          animationDelay: '0.9s',
        }}
      />
      {/* Pulse 4 — vertical stub left */}
      <path
        d="M400,600 L400,200"
        fill="none" stroke="#B8964A" strokeWidth="1" opacity="0"
        style={{
          strokeDasharray: 400,
          strokeDashoffset: 400,
          animation: 'traceLoop 4s linear infinite',
          animationDelay: '2.4s',
        }}
      />
      {/* Pulse 5 — vertical stub right */}
      <path
        d="M900,200 L900,570"
        fill="none" stroke="#B8964A" strokeWidth="1" opacity="0"
        style={{
          strokeDasharray: 400,
          strokeDashoffset: 400,
          animation: 'traceLoop 4.5s linear infinite',
          animationDelay: '3.1s',
        }}
      />

      {/* ── Connector node dots (copper, always visible but faint) ── */}
      <g fill="#B8964A" opacity="0.35">
        <circle cx="200"  cy="370" r="4" />
        <circle cx="400"  cy="570" r="4" />
        <circle cx="600"  cy="570" r="4" />
        <circle cx="900"  cy="570" r="4" />
        <circle cx="1100" cy="370" r="4" />
        <circle cx="640"  cy="400" r="4" />
        <circle cx="830"  cy="600" r="4" />
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
      {/* WOW: animated circuit board */}
      <CircuitWow />

      {/* Subtle scanline shimmer across the hero */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          background:
            'linear-gradient(180deg, transparent 0%, rgba(31,58,95,0.025) 50%, transparent 100%)',
        }}
      />

      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left: copy */}
        <div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 2.35 }}
            className="text-sm font-body tracking-[0.08em] text-[hsl(var(--accent-blue))] uppercase border border-[hsl(var(--accent-blue))]/20 inline-block px-3 py-1 rounded-full mb-6"
          >
            Технический отдел для вашего бизнеса
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 2.45, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl md:text-6xl lg:text-[64px] font-bold font-heading text-[hsl(var(--text-primary))] leading-[1.08] mb-6"
          >
            Сайты, боты и рассылки,{' '}
            которые{' '}
            <span className="text-[hsl(var(--accent-blue))]">продают</span>{' '}
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
            <div className="absolute top-0 right-0 w-40 h-40 bg-[hsl(var(--accent-blue))]/5 rounded-full blur-3xl pointer-events-none" />
            <p className="text-lg font-heading font-semibold text-[hsl(var(--accent-blue))] mb-2">
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
                <div className="text-3xl font-mono font-bold text-[hsl(var(--accent-blue))] mb-1">{stat.value}</div>
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
              <svg className="w-5 h-5 text-[hsl(var(--accent-warm))]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
