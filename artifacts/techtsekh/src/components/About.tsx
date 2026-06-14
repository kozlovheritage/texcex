import React from 'react';
import { motion } from 'framer-motion';
import squareLogo from '../assets/square-dark.png';

export default function About() {
  return (
    <section id="about" className="py-24 bg-[hsl(var(--bg-secondary))]">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: brand square logo */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center"
          >
            <img
              src={squareLogo}
              alt="ТЕХЦЕХ — технический отдел для вашего бизнеса"
              className="w-full max-w-sm rounded-2xl shadow-2xl shadow-[#0B2B5E]/20"
              draggable={false}
            />
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
                Не просто готовый код для заказчика — мы создаём механизмы, которые
                приносят прибыль. Понимаем бизнес-метрики, конверсии и
                воронки продаж так же хорошо, как архитектуру сервисов
                и надёжность инфраструктуры.
              </p>
              <p>
                Наша команда — это технический отдел, который не нужно
                нанимать в штат. Мы забираем на себя всю цифровую часть:
                от первого экрана до сложных интеграций — чтобы вы могли
                фокусироваться на продукте и маркетинге.
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
