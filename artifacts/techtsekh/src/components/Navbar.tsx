import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logoLight from '@assets/03-horizontal-nodesc-light_1_1778575163721.png';

const navLinks = [
  { name: 'Для кого', href: '#for-whom' },
  { name: 'Услуги', href: '#services' },
  { name: 'Кейсы', href: '#cases' },
  { name: 'Процесс', href: '#process' },
  { name: 'О нас', href: '#about' },
  { name: 'FAQ', href: '#faq' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ delay: 2.2, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled ? 'border-b border-[hsl(var(--bg-secondary))]' : 'bg-transparent'
      }`}
      style={scrolled ? { background: 'rgba(245,247,250,0.92)', backdropFilter: 'blur(14px)' } : {}}
    >
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <a href="#hero" data-testid="link-nav-logo" className="group">
          <img
            src={logoLight}
            alt="ТЕХЦЕХ"
            className="h-10 w-auto object-contain"
          />
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  data-testid={`link-nav-${link.name.toLowerCase()}`}
                  className="text-sm font-medium text-[hsl(var(--text-secondary))] hover:text-[hsl(var(--accent-blue))] transition-colors relative after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-[1px] after:bg-[hsl(var(--accent-warm))] after:transition-all hover:after:w-full"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#cta"
            data-testid="button-nav-cta"
            className="px-5 py-2.5 bg-[#0B2B5E] text-white text-sm font-medium rounded hover:bg-[hsl(var(--accent-blue))] transition-all hover:-translate-y-0.5 shadow-md shadow-[#0B2B5E]/20"
          >
            Рассчитать проект
          </a>
        </div>

        {/* Mobile burger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Меню"
          data-testid="button-nav-mobile"
        >
          <span className={`w-6 h-0.5 bg-[#0B2B5E] transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`w-6 h-0.5 bg-[#0B2B5E] transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`} />
          <span className={`w-6 h-0.5 bg-[#0B2B5E] transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden border-t border-[hsl(var(--bg-secondary))]"
            style={{ background: 'rgba(245,247,250,0.97)', backdropFilter: 'blur(14px)' }}
          >
            <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="text-base font-medium text-[hsl(var(--text-primary))] hover:text-[#0B2B5E] transition-colors py-1"
                >
                  {link.name}
                </motion.a>
              ))}
              <a
                href="#cta"
                onClick={() => setMobileOpen(false)}
                className="mt-2 px-5 py-3 bg-[#0B2B5E] text-white text-sm font-medium rounded text-center hover:bg-[hsl(var(--accent-blue))] transition-colors"
              >
                Рассчитать проект
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
