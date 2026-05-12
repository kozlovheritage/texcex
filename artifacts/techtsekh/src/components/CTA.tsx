import React from 'react';
import { motion } from 'framer-motion';
import { SiTelegram } from 'react-icons/si';

function MaxIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.5 7.5l-1.5 7-3-3-2 2-1-4.5 7.5-1.5z" />
    </svg>
  );
}

export default function CTA() {
  return (
    <section id="cta" className="py-32 bg-[hsl(var(--bg-dark))] noise-bg relative overflow-hidden">
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
          backgroundSize: '30px 30px',
        }}
      />

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white leading-tight mb-12">
            Готовы превратить идею в работающий механизм?
          </h2>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a
              href="#"
              data-testid="button-cta-main"
              className="w-full sm:w-auto px-10 py-5 bg-[hsl(var(--accent-warm))] text-[hsl(var(--bg-dark))] text-lg font-bold rounded hover:bg-[#A3823D] transition-colors shadow-lg shadow-[hsl(var(--accent-warm))]/20"
            >
              Обсудить проект
            </a>

            <div className="flex items-center gap-4">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Telegram"
                data-testid="link-cta-telegram"
                className="w-14 h-14 rounded-full border border-[hsl(var(--accent-warm))] flex items-center justify-center text-[hsl(var(--accent-warm))] hover:bg-[hsl(var(--accent-warm))] hover:text-[hsl(var(--bg-dark))] transition-colors"
              >
                <SiTelegram className="w-6 h-6" />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Max"
                data-testid="link-cta-max"
                className="w-14 h-14 rounded-full border border-[hsl(var(--accent-warm))] flex items-center justify-center text-[hsl(var(--accent-warm))] hover:bg-[hsl(var(--accent-warm))] hover:text-[hsl(var(--bg-dark))] transition-colors"
              >
                <MaxIcon />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
