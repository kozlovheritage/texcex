import React from 'react';
import { motion } from 'framer-motion';
import { useContactModal } from '@/hooks/use-contact-modal';

export default function CTA() {
  const { openModal } = useContactModal();

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

          <button
            onClick={openModal}
            data-testid="button-cta-main"
            className="inline-block px-10 py-5 bg-[hsl(var(--accent-warm))] text-[hsl(var(--bg-dark))] text-lg font-bold rounded hover:bg-[#A3823D] transition-colors shadow-lg shadow-[hsl(var(--accent-warm))]/20 cursor-pointer"
          >
            Обсудить проект
          </button>
        </motion.div>
      </div>
    </section>
  );
}
