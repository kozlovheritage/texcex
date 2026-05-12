import React from 'react';
import { motion } from 'framer-motion';

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
            className="relative h-[400px] lg:h-[600px] rounded-2xl overflow-hidden bg-gradient-to-br from-white/60 to-white/10 backdrop-blur-xl border border-white/40 flex items-center justify-center"
          >
            {/* Abstract Illustration of Robotized Workshop */}
            <svg viewBox="0 0 400 400" className="w-full h-full max-w-[80%] opacity-80">
              <defs>
                <linearGradient id="beam" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="hsl(var(--accent-blue))" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="transparent" stopOpacity="0" />
                </linearGradient>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>
              <polygon points="200,50 350,150 350,300 200,400 50,300 50,150" fill="url(#beam)" />
              <path d="M200,50 L200,400 M50,150 L350,300 M50,300 L350,150" stroke="hsl(var(--accent-blue))" strokeWidth="1" opacity="0.3" />
              <circle cx="200" cy="225" r="40" fill="white" filter="url(#glow)" />
              <circle cx="200" cy="225" r="15" fill="hsl(var(--accent-warm))" />
              <path d="M100,100 Q200,200 300,100" fill="none" stroke="hsl(var(--accent-warm))" strokeWidth="2" strokeDasharray="4,4" />
            </svg>
            
            <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--bg-secondary))] to-transparent opacity-50" />
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
                Симбиоз продюсерского подхода и инженерной точности. Мы не просто пишем код — мы создаем механизмы, которые приносят прибыль. 
                Мы понимаем бизнес-метрики, конверсии и воронки продаж так же хорошо, как архитектуру баз данных и чистоту кода.
              </p>
              <p>
                Наша команда — это технический отдел, который не нужно нанимать в штат. Мы забираем на себя всю цифровую рутину: от верстки первого экрана до сложнейших интеграций по API, чтобы вы могли сфокусироваться на продукте и маркетинге.
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
