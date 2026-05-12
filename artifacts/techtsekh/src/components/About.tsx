import React from 'react';
import { motion } from 'framer-motion';
import macbookMockup from '@assets/image_1778577162416.png';
import iphoneMockup from '@assets/image_1778577180477.png';
import wallpaperDesktop from '@assets/13-wallpaper-desktop-light_1_1778575971489.png';
import wallpaperPhone from '@assets/16-wallpaper-iphone-dark_1_1778575971491.png';

/*
  Device mockups using the provided PNG frames.

  MacBook: wallpaper behind + frame on top with mix-blend-mode: multiply
    → white screen area becomes transparent, black bezels stay black.

  iPhone: frame as base + wallpaper absolutely positioned over the screen area
    with mix-blend-mode: screen → dark screen area shows wallpaper.
*/
function DeviceMockup() {
  return (
    <div
      className="relative w-full flex items-end justify-center gap-4 select-none"
      style={{ height: 420 }}
    >
      {/* ── MacBook ── */}
      <div className="relative flex-shrink-0" style={{ width: 320 }}>
        {/* Wallpaper sits behind the frame, sized to match the screen hole */}
        <img
          src={wallpaperDesktop}
          alt=""
          aria-hidden
          className="absolute object-cover"
          style={{
            top: '3.2%',
            left: '8%',
            width: '84%',
            height: '57%',
            zIndex: 0,
          }}
        />
        {/* MacBook frame on top — multiply makes white screen transparent */}
        <img
          src={macbookMockup}
          alt="MacBook с обоями ТЕХЦЕХ"
          className="relative w-full drop-shadow-2xl"
          style={{ zIndex: 1, mixBlendMode: 'multiply' }}
        />
      </div>

      {/* ── iPhone ── */}
      <div
        className="relative flex-shrink-0"
        style={{ width: 110, marginBottom: 24 }}
      >
        {/* iPhone frame as base */}
        <img
          src={iphoneMockup}
          alt="iPhone с обоями ТЕХЦЕХ"
          className="relative w-full drop-shadow-2xl"
          style={{ zIndex: 2, position: 'relative' }}
        />
        {/* Wallpaper over the screen — screen blend makes the black screen show the wallpaper */}
        <img
          src={wallpaperPhone}
          alt=""
          aria-hidden
          className="absolute object-cover"
          style={{
            top: '5%',
            left: '4.5%',
            width: '91%',
            height: '88%',
            zIndex: 3,
            mixBlendMode: 'screen',
            borderRadius: '14px',
          }}
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
                Мы не просто пишем код — мы создаём механизмы, которые
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
