import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div 
          initial={{ y: 0 }}
          exit={{ y: '-100%' }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[hsl(var(--bg-dark))]"
        >
          <div className="relative flex items-center justify-center w-32 h-32">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="absolute w-8 h-8 border-2 border-[hsl(var(--accent-warm))] transform rotate-45"
              style={{ left: '20px' }}
            />
            <motion.div
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="absolute w-8 h-8 border-2 border-[hsl(var(--accent-warm))] transform rotate-45"
              style={{ top: '20px' }}
            />
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="absolute w-8 h-8 bg-[hsl(var(--accent-warm))] transform rotate-45"
              style={{ right: '20px' }}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: [0, 1, 0], scale: [0.8, 1.2, 1] }}
              transition={{ duration: 0.8, delay: 1 }}
              className="absolute inset-0 bg-[hsl(var(--accent-warm))] blur-xl opacity-20"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
