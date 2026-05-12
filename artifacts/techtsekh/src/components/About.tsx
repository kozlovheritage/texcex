import React from 'react';
import { motion } from 'framer-motion';
import { LogoIcon } from './LogoMark';

/* Full brand identity showcase for the About section */
function BrandShowcase() {
  return (
    <div className="relative w-full h-full rounded-2xl overflow-hidden flex flex-col items-center justify-center gap-10 p-10"
      style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.7) 0%, rgba(225,229,235,0.4) 100%)', backdropFilter: 'blur(20px)', border: '1px solid rgba(255,255,255,0.6)' }}
    >
      {/* Faint circuit traces behind */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.07]" viewBox="0 0 400 500" preserveAspectRatio="xMidYMid slice">
        <g stroke="#1F3A5F" strokeWidth="1" fill="none">
          <path d="M0,120 L100,120 L120,140 L300,140 L320,120 L400,120" />
          <path d="M0,250 L80,250 L100,230 L200,230 L220,250 L400,250" />
          <path d="M0,380 L150,380 L170,360 L300,360 L320,380 L400,380" />
          <path d="M120,140 L120,360" />
          <path d="M300,140 L300,360" />
          <circle cx="120" cy="140" r="3" fill="#B8964A" stroke="none" />
          <circle cx="300" cy="140" r="3" fill="#B8964A" stroke="none" />
          <circle cx="120" cy="360" r="3" fill="#B8964A" stroke="none" />
          <circle cx="300" cy="360" r="3" fill="#B8964A" stroke="none" />
        </g>
        {/* Animated trace */}
        <path d="M-20,250 L80,250 L100,230 L200,230 L220,250 L420,250"
          fill="none" stroke="#B8964A" strokeWidth="1.5"
          style={{ strokeDasharray: 500, strokeDashoffset: 500, animation: 'traceLoop 5s linear infinite' }} />
      </svg>

      {/* Light version (on white bg) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center gap-4 z-10"
      >
        <div className="p-6 rounded-2xl bg-white/80 shadow-lg shadow-[hsl(var(--accent-blue))]/8 border border-white">
          <LogoIcon size={72} />
        </div>
        <div className="text-center">
          <div className="font-heading font-bold text-3xl text-[hsl(var(--accent-blue))] tracking-tight">ТЕХЦЕХ</div>
          <div className="text-xs font-body tracking-[0.12em] text-[hsl(var(--text-secondary))] mt-1 uppercase">Технический отдел для вашего бизнеса</div>
        </div>
      </motion.div>

      {/* Divider */}
      <div className="w-16 h-px bg-[hsl(var(--accent-warm))]/40 z-10" />

      {/* Dark version */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex flex-col items-center gap-4 z-10"
      >
        <div className="p-6 rounded-2xl shadow-lg border border-white/10 flex flex-col items-center gap-3"
          style={{ background: '#1F3A5F' }}>
          <LogoIcon size={64} squareColor="white" />
          <div className="font-heading font-bold text-2xl text-white tracking-tight">ТЕХЦЕХ</div>
          <div className="text-[10px] font-body tracking-[0.12em] text-white/50 uppercase">Технический отдел для вашего бизнеса</div>
        </div>
      </motion.div>
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="py-24 bg-[hsl(var(--bg-secondary))]">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="h-[520px] lg:h-[640px]"
          >
            <BrandShowcase />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-[hsl(var(--text-primary))] mb-8">
              ТЕХЦЕХ — это...
            </h2>
            <div className="space-y-6 text-[hsl(var(--text-secondary))] font-body text-lg leading-relaxed">
              <p>
                Симбиоз продюсерского подхода и инженерной точности. Мы не просто пишем код — мы создаём механизмы, которые приносят прибыль.
                Мы понимаем бизнес-метрики, конверсии и воронки продаж так же хорошо, как архитектуру сервисов и надёжность инфраструктуры.
              </p>
              <p>
                Наша команда — это технический отдел, который не нужно нанимать в штат. Мы забираем на себя всю цифровую часть: от первого экрана до сложных интеграций — чтобы вы могли фокусироваться на продукте и маркетинге.
              </p>
            </div>

            <blockquote className="mt-12 pl-6 border-l-4 border-[hsl(var(--accent-warm))]">
              <p className="text-2xl md:text-3xl font-heading font-semibold italic text-[hsl(var(--accent-blue))] leading-tight">
                «Делаем то, что работает. Не сдаём проект, пока он не даёт результат»
              </p>
            </blockquote>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
