import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { value: '150+', label: 'Проектов запущено' },
  { value: '3 дня', label: 'Средний старт' },
  { value: '24/7', label: 'Поддержка' },
];

/*
  Circuit animation — traces running through the right-side cards area.
  3 base layers of traces at different opacities + 5 animated pulses
  with random-feeling delays and durations to look organic.
*/
function CircuitWow() {
  const pulses = [
    /* path, dasharray, duration, delay, strokeWidth */
    { d: 'M640,160 L780,160 L810,190 L1020,190 L1050,160 L1280,160', len: 700, dur: 5.2, delay: 0,    w: 1.5 },
    { d: 'M1280,310 L1100,310 L1070,340 L820,340 L790,310 L640,310',  len: 700, dur: 7.1, delay: 1.8,  w: 1.5 },
    { d: 'M640,480 L760,480 L790,450 L980,450 L1010,480 L1280,480',  len: 700, dur: 6.4, delay: 0.7,  w: 1.5 },
    { d: 'M1020,190 L1020,450',                                        len: 280, dur: 4.3, delay: 2.9,  w: 1   },
    { d: 'M810,310 L810,480',                                          len: 200, dur: 3.8, delay: 1.3,  w: 1   },
    { d: 'M1280,420 L1150,420 L1120,390 L1020,390 L1020,450',         len: 300, dur: 5.8, delay: 3.5,  w: 1   },
    { d: 'M640,230 L720,230 L750,260 L820,260 L820,340',              len: 280, dur: 6.9, delay: 0.4,  w: 1   },
  ];

  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1280 800"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <radialGradient id="heroGlow2" cx="75%" cy="50%" r="38%">
          <stop offset="0%" stopColor="#0B2B5E" stopOpacity="0.1" />
          <stop offset="100%" stopColor="#0B2B5E" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Ambient glow around the cards */}
      <ellipse cx="960" cy="390" rx="360" ry="280" fill="url(#heroGlow2)" className="glow-pulse" />

      {/* ── Static background traces — right side, faint grid ── */}
      <g opacity="0.08" stroke="#0B2B5E" strokeWidth="1" fill="none">
        <path d="M640,160 L780,160 L810,190 L1020,190 L1050,160 L1280,160" />
        <path d="M640,310 L790,310 L820,340 L1070,340 L1100,310 L1280,310" />
        <path d="M640,480 L760,480 L790,450 L980,450 L1010,480 L1280,480" />
        <path d="M1020,190 L1020,450" />
        <path d="M810,190 L810,340" />
        <path d="M640,230 L720,230 L750,260 L820,260" />
        <path d="M1280,420 L1150,420 L1120,390 L1020,390" />
        {/* Node dots */}
        <circle cx="810"  cy="190" r="2.5" fill="#0B2B5E" />
        <circle cx="1020" cy="190" r="2.5" fill="#0B2B5E" />
        <circle cx="820"  cy="340" r="2.5" fill="#0B2B5E" />
        <circle cx="1020" cy="450" r="2.5" fill="#0B2B5E" />
        <circle cx="790"  cy="450" r="2.5" fill="#0B2B5E" />
        <circle cx="810"  cy="310" r="2.5" fill="#0B2B5E" />
      </g>

      {/* ── Warm copper pulse animations ── */}
      {pulses.map((p, i) => (
        <path
          key={i}
          d={p.d}
          fill="none"
          stroke="#B8964A"
          strokeWidth={p.w}
          strokeLinecap="round"
          opacity="0"
          style={{
            strokeDasharray: p.len,
            strokeDashoffset: p.len,
            animation: `traceLoop ${p.dur}s ${p.delay}s linear infinite`,
          }}
        />
      ))}

      {/* ── Copper connector nodes — always visible, subtle ── */}
      <g fill="#B8964A" opacity="0.28">
        <circle cx="810"  cy="190" r="3.5" />
        <circle cx="1020" cy="190" r="3.5" />
        <circle cx="820"  cy="340" r="3.5" />
        <circle cx="1070" cy="340" r="3.5" />
        <circle cx="790"  cy="450" r="3.5" />
        <circle cx="1010" cy="480" r="3.5" />
        <circle cx="1020" cy="390" r="3.5" />
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
