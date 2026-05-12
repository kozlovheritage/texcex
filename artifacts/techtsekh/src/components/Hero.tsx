import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  const [typedText, setTypedText] = useState("");
  const fullText = "const result = await build({ quality: 100 });\nreturn result.success;";

  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < fullText.length) {
        setTypedText(prev => prev + fullText.charAt(i));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, 50);
    return () => clearInterval(typingInterval);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[hsl(var(--bg-primary))]">
      {/* SVG Circuit Background */}
      <div className="absolute inset-0 z-0 opacity-[0.15] pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M10,10 L30,10 L40,20 L40,80 L50,90 L90,90" fill="none" stroke="hsl(var(--accent-warm))" strokeWidth="1" />
              <circle cx="10" cy="10" r="2" fill="hsl(var(--accent-warm))" />
              <circle cx="90" cy="90" r="2" fill="hsl(var(--accent-warm))" />
              <path d="M60,10 L80,10 L90,20 L90,40" fill="none" stroke="hsl(var(--accent-warm))" strokeWidth="1" opacity="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit)" />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2.4 }}
          className="max-w-2xl"
        >
          <div className="mb-6">
            <span className="inline-block text-sm font-body tracking-[0.08em] text-[hsl(var(--accent-blue))] uppercase border border-[hsl(var(--accent-blue))/20] px-3 py-1 rounded-full mb-4">
              Технический отдел для вашего бизнеса
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-heading text-[hsl(var(--text-primary))] leading-[1.1] mb-6">
            Сайты, боты и рассылки, которые <span className="text-[hsl(var(--accent-blue))]">продают</span> даже в кризис
          </h1>
          <p className="text-lg md:text-xl text-[hsl(var(--text-secondary))] font-body mb-10 max-w-xl">
            Разрабатываем, собираем в систему и поддерживаем. Вы — получаете заявки, мы — техническую сторону.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#cta" className="px-8 py-4 bg-[hsl(var(--accent-blue))] text-white font-medium rounded hover:bg-[#2B4F7F] transition-all hover:-translate-y-1 shadow-lg shadow-[hsl(var(--accent-blue))/20]">
              Рассчитать проект
            </a>
            <a href="#cases" className="px-8 py-4 border border-[hsl(var(--accent-blue))] text-[hsl(var(--accent-blue))] font-medium rounded hover:bg-[hsl(var(--accent-blue))] hover:text-white transition-all hover:-translate-y-1">
              Смотреть кейсы
            </a>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 2.6 }}
          className="hidden lg:grid grid-cols-2 gap-4 h-[500px]"
        >
          <div className="col-span-2 glass-card rounded-2xl p-6 flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[hsl(var(--accent-blue))/5] rounded-full blur-3xl" />
            <h3 className="font-heading font-semibold text-[hsl(var(--accent-blue))] mb-2">High-Precision Code</h3>
            <div className="bg-[#1A1D23] rounded-lg p-4 font-mono text-sm leading-relaxed text-[hsl(var(--accent-warm))] h-32 overflow-hidden shadow-inner">
              {typedText}
              <span className="animate-pulse">_</span>
            </div>
          </div>
          
          <div className="glass-card rounded-2xl p-6 flex flex-col items-start justify-between">
            <div className="w-10 h-10 rounded-full border border-[hsl(var(--accent-warm))] flex items-center justify-center mb-4">
              <svg className="w-5 h-5 text-[hsl(var(--accent-warm))]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
            </div>
            <div>
              <div className="text-3xl font-mono text-[hsl(var(--accent-blue))] font-bold">99.9%</div>
              <div className="text-sm text-[hsl(var(--text-secondary))]">Uptime</div>
            </div>
          </div>

          <div className="glass-card rounded-2xl p-6 flex flex-col items-start justify-between">
            <div className="w-10 h-10 rounded-full border border-[hsl(var(--accent-warm))] flex items-center justify-center mb-4">
              <svg className="w-5 h-5 text-[hsl(var(--accent-warm))]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" /></svg>
            </div>
            <div>
              <div className="text-3xl font-mono text-[hsl(var(--accent-blue))] font-bold">24/7</div>
              <div className="text-sm text-[hsl(var(--text-secondary))]">Support</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
