import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function LogoMark({ color = 'hsl(var(--accent-blue))' }: { color?: string }) {
  return (
    <svg width="32" height="32" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="2" width="36" height="36" rx="4" stroke={color} strokeWidth="2" fill="none" />
      <path
        d="M13 13 L13 20 L20 20"
        stroke="hsl(var(--accent-warm))"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <circle cx="13" cy="13" r="2" fill="hsl(var(--accent-warm))" />
    </svg>
  );
}

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
      transition={{ delay: 2.2, duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'backdrop-blur-md border-b border-[hsl(var(--bg-secondary))]'
          : 'bg-transparent'
      }`}
      style={scrolled ? { background: 'rgba(245,247,250,0.85)' } : {}}
    >
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-2.5 group" data-testid="link-nav-logo">
          <LogoMark />
          <span className="font-heading font-bold text-xl text-[hsl(var(--accent-blue))] tracking-tight">
            ТЕХЦЕХ
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  data-testid={`link-nav-${link.name.toLowerCase()}`}
                  className="text-sm font-medium text-[hsl(var(--text-secondary))] hover:text-[hsl(var(--accent-blue))] transition-colors"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#cta"
            data-testid="button-nav-cta"
            className="px-5 py-2.5 bg-[hsl(var(--accent-blue))] text-white text-sm font-medium rounded hover:bg-[#2B4F7F] transition-colors"
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
          <span className={`w-6 h-0.5 bg-[hsl(var(--accent-blue))] transition-all ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`w-6 h-0.5 bg-[hsl(var(--accent-blue))] transition-all ${mobileOpen ? 'opacity-0' : ''}`} />
          <span className={`w-6 h-0.5 bg-[hsl(var(--accent-blue))] transition-all ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
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
            style={{ background: 'rgba(245,247,250,0.97)', backdropFilter: 'blur(12px)' }}
          >
            <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-base font-medium text-[hsl(var(--text-primary))] hover:text-[hsl(var(--accent-blue))] transition-colors py-1"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#cta"
                onClick={() => setMobileOpen(false)}
                className="mt-2 px-5 py-3 bg-[hsl(var(--accent-blue))] text-white text-sm font-medium rounded text-center hover:bg-[#2B4F7F] transition-colors"
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
