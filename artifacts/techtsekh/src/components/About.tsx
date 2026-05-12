import React from 'react';
import { motion } from 'framer-motion';
import wallpaperDesktop from '@assets/13-wallpaper-desktop-light_1_1778575971489.png';
import wallpaperPhone from '@assets/16-wallpaper-iphone-dark_1_1778575971491.png';

/* MacBook + iPhone device mockup showing brand wallpapers */
function DeviceMockup() {
  return (
    <div className="relative w-full flex items-end justify-center gap-6 select-none" style={{ height: 420 }}>

      {/* MacBook */}
      <div className="relative flex flex-col items-center" style={{ width: 340 }}>
        {/* Screen */}
        <div
          className="relative rounded-t-xl overflow-hidden shadow-2xl shadow-[#0B2B5E]/25"
          style={{
            width: 340,
            height: 212,
            background: '#1a1a1a',
            border: '8px solid #2a2a2a',
            borderBottom: 'none',
            borderRadius: '12px 12px 0 0',
          }}
        >
          {/* Camera notch */}
          <div
            className="absolute top-2 left-1/2 -translate-x-1/2 z-10 rounded-full"
            style={{ width: 6, height: 6, background: '#444' }}
          />
          {/* Wallpaper */}
          <img
            src={wallpaperDesktop}
            alt="ТЕХЦЕХ desktop wallpaper"
            className="w-full h-full object-cover"
          />
        </div>
        {/* Hinge / chin */}
        <div
          style={{
            width: 340,
            height: 10,
            background: 'linear-gradient(to bottom, #2a2a2a, #1a1a1a)',
            borderRadius: '0 0 2px 2px',
          }}
        />
        {/* Base */}
        <div
          style={{
            width: 370,
            height: 14,
            background: 'linear-gradient(to bottom, #d0d0d0, #b8b8b8)',
            borderRadius: '0 0 8px 8px',
            boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
          }}
        >
          {/* Trackpad hint */}
          <div
            className="mx-auto mt-2 rounded"
            style={{ width: 80, height: 6, background: 'rgba(0,0,0,0.1)' }}
          />
        </div>
        {/* Base shadow */}
        <div
          className="rounded-full"
          style={{
            width: 400,
            height: 6,
            background: 'rgba(0,0,0,0.12)',
            filter: 'blur(8px)',
            marginTop: 2,
          }}
        />
      </div>

      {/* iPhone */}
      <div
        className="relative rounded-[36px] overflow-hidden shadow-2xl shadow-[#0B2B5E]/30 flex-shrink-0"
        style={{
          width: 100,
          height: 210,
          background: '#111',
          border: '6px solid #2a2a2a',
          marginBottom: 14,
        }}
      >
        {/* Dynamic Island */}
        <div
          className="absolute top-2.5 left-1/2 -translate-x-1/2 z-10 rounded-full"
          style={{ width: 28, height: 8, background: '#000' }}
        />
        {/* Side button */}
        <div
          className="absolute rounded-r"
          style={{ right: -8, top: 48, width: 3, height: 28, background: '#333' }}
        />
        {/* Volume buttons */}
        <div
          className="absolute rounded-l"
          style={{ left: -8, top: 40, width: 3, height: 20, background: '#333' }}
        />
        <div
          className="absolute rounded-l"
          style={{ left: -8, top: 66, width: 3, height: 20, background: '#333' }}
        />
        {/* Wallpaper */}
        <img
          src={wallpaperPhone}
          alt="ТЕХЦЕХ iPhone wallpaper"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="py-24 bg-[hsl(var(--bg-secondary))]">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: device showcase */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center"
          >
            <DeviceMockup />
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
