import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import markDark from '@assets/08-mark-dark_1_1778575188506.png';
import wallpaperDark from '@assets/14-wallpaper-desktop-dark_1_1778578328496.png';

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
          className="fixed inset-0 z-50 flex flex-col items-center justify-center gap-6 overflow-hidden"
        >
          {/* Animated desktop wallpaper background — slow Ken Burns zoom */}
          <motion.div
            className="absolute inset-0"
            initial={{ scale: 1.08 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <img
              src={wallpaperDark}
              alt=""
              aria-hidden
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Subtle overlay to keep text crisp */}
          <div className="absolute inset-0 bg-black/30" />

          {/* Logo mark */}
          <motion.div
            className="relative z-10"
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <div
              className="rounded-[20px] overflow-hidden"
              style={{ width: 80, height: 80, background: '#0B2B5E' }}
            >
              <img
                src={markDark}
                alt="ТЕХЦЕХ"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Wordmark */}
          <motion.div
            className="relative z-10 flex flex-col items-center gap-1"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.55 }}
          >
            <span className="font-heading font-bold text-4xl text-white tracking-tight drop-shadow-lg">ТЕХЦЕХ</span>
            <span className="text-xs font-body tracking-[0.14em] text-white/50 uppercase">
              Технический отдел для вашего бизнеса
            </span>
          </motion.div>

          {/* Loading bar */}
          <motion.div
            className="absolute bottom-12 left-1/2 -translate-x-1/2 w-32 h-0.5 rounded-full overflow-hidden z-10"
            style={{ background: 'rgba(255,255,255,0.12)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <motion.div
              className="h-full w-full rounded-full"
              style={{ background: 'hsl(var(--accent-warm))' }}
              initial={{ x: '-100%' }}
              animate={{ x: '100%' }}
              transition={{ duration: 1.2, delay: 0.9, ease: 'easeInOut' }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
