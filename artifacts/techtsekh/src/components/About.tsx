import React from 'react';
import { motion } from 'framer-motion';
import logoLight from '@assets/01-horizontal-light_1_1778575163720.png';

export default function About() {
  return (
    <section id="about" className="py-24 bg-[hsl(var(--bg-secondary))]">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: logo showcase */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center"
          >
            <div
              className="w-full rounded-2xl flex items-center justify-center p-12"
              style={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0.85) 0%, rgba(225,229,240,0.5) 100%)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255,255,255,0.7)',
                boxShadow: '0 8px 40px rgba(11,43,94,0.08)',
                minHeight: '320px',
              }}
            >
              <img
                src={logoLight}
                alt="ТЕХЦЕХ — Технический отдел для вашего бизнеса"
                className="w-full max-w-sm object-contain"
              />
            </div>
          </motion.div>

          {/* Right: text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-[#0B2B5E] mb-8">
              ТЕХЦЕХ — это...
            </h2>
            <div className="space-y-6 text-[hsl(var(--text-secondary))] font-body text-lg leading-relaxed">
              <p>
                Мы не просто пишем код — мы создаём механизмы, которые приносят прибыль.
                Понимаем бизнес-метрики, конверсии и воронки продаж так же хорошо, как архитектуру сервисов и надёжность инфраструктуры.
              </p>
              <p>
                Наша команда — это технический отдел, который не нужно нанимать в штат. Мы забираем на себя всю цифровую часть: от первого экрана до сложных интеграций — чтобы вы могли фокусироваться на продукте и маркетинге.
              </p>
            </div>

            <blockquote className="mt-12 pl-6 border-l-4 border-[hsl(var(--accent-warm))]">
              <p className="text-2xl md:text-3xl font-heading font-semibold italic text-[#0B2B5E] leading-tight">
                «Симбиоз продюсерского подхода и инженерной точности»
              </p>
            </blockquote>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
