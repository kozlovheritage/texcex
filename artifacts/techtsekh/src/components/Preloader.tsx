import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
          className="fixed inset-0 z-50 overflow-hidden"
        >
          {/* Wallpaper — Ken Burns slow zoom from centre */}
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

          {/* Loading bar — only UI element on top of the wallpaper */}
          <motion.div
            className="absolute bottom-12 left-1/2 -translate-x-1/2 w-40 h-0.5 rounded-full overflow-hidden z-10"
            style={{ background: 'rgba(255,255,255,0.12)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <motion.div
              className="h-full w-full rounded-full"
              style={{ background: 'hsl(var(--accent-warm))' }}
              initial={{ x: '-100%' }}
              animate={{ x: '100%' }}
              transition={{ duration: 1.4, delay: 0.6, ease: 'easeInOut' }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
