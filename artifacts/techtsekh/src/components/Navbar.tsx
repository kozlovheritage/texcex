import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Для кого', href: '#for-whom' },
    { name: 'Услуги', href: '#services' },
    { name: 'Кейсы', href: '#cases' },
    { name: 'Процесс', href: '#process' },
    { name: 'О нас', href: '#about' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ delay: 2.2, duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled ? 'bg-[hsl(var(--bg-primary))/80] backdrop-blur-md border-b border-[hsl(var(--bg-secondary))]' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-2 group">
          <span className="font-heading font-bold text-2xl text-[hsl(var(--accent-blue))] tracking-tight">ТЕХЦЕХ</span>
          <span className="w-2 h-2 rounded-full bg-[hsl(var(--accent-warm))] group-hover:scale-150 transition-transform" />
        </a>

        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.href}
                  className="text-sm font-medium text-[hsl(var(--text-secondary))] hover:text-[hsl(var(--accent-blue))] transition-colors"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#cta"
            className="px-5 py-2.5 bg-[hsl(var(--accent-blue))] text-white text-sm font-medium rounded hover:bg-[#2B4F7F] transition-colors"
          >
            Рассчитать проект
          </a>
        </div>
      </div>
    </motion.nav>
  );
}
