import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import markDark from '@assets/08-mark-dark_1_1778575188506.png';

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: '-4%' }}
          transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center gap-6"
          style={{ background: 'hsl(var(--bg-dark))' }}
        >
          {/* Mark from brand identity — clipped to rounded square */}
          <motion.div
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-2xl overflow-hidden"
            style={{ width: 80, height: 80 }}
          >
            <img
              src={markDark}
              alt="ТЕХЦЕХ"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Wordmark */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.55 }}
            className="flex flex-col items-center gap-1"
          >
            <span className="font-heading font-bold text-4xl text-white tracking-tight">ТЕХЦЕХ</span>
            <span className="text-xs font-body tracking-[0.14em] text-white/40 uppercase">Технический отдел для вашего бизнеса</span>
          </motion.div>

          {/* Loading bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="absolute bottom-12 left-1/2 -translate-x-1/2 w-32 h-0.5 rounded-full overflow-hidden"
            style={{ background: 'rgba(255,255,255,0.1)' }}
          >
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: '100%' }}
              transition={{ duration: 1.2, delay: 0.9, ease: 'easeInOut' }}
              className="h-full w-full rounded-full"
              style={{ background: 'hsl(var(--accent-warm))' }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
