import React from 'react';
import { SiTelegram } from 'react-icons/si';

function MaxIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.5 7.5l-1.5 7-3-3-2 2-1-4.5 7.5-1.5z" />
    </svg>
  );
}

const legalLinks = [
  { label: 'Реквизиты', href: '#' },
  { label: 'ПОПД', href: '#', title: 'Политика обработки персональных данных' },
  { label: 'Согласие на обработку ПД', href: '#' },
  { label: 'Согласие на рассылку', href: '#' },
];

const socials = [
  {
    label: 'Telegram',
    href: '#',
    icon: <SiTelegram className="w-5 h-5" />,
  },
  {
    label: 'Max',
    href: '#',
    icon: <MaxIcon />,
  },
  {
    label: 'Email',
    href: 'mailto:info@techtsekh.ru',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="noise-bg relative border-t border-white/5" style={{ background: 'hsl(var(--footer-bg))' }}>
      <div className="container mx-auto px-6 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <svg width="28" height="28" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="2" y="2" width="36" height="36" rx="4" stroke="white" strokeWidth="2" fill="none" />
                <path d="M13 13 L13 20 L20 20" stroke="hsl(var(--accent-warm))" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                <circle cx="13" cy="13" r="2" fill="hsl(var(--accent-warm))" />
              </svg>
              <span className="font-heading font-bold text-2xl text-white tracking-tight">ТЕХЦЕХ</span>
            </div>
            <span className="text-sm font-body text-white/40">Технический отдел для вашего бизнеса</span>
            <span className="text-xs font-body text-white/30 mt-1">ИП Козлов Андрей Олегович</span>
          </div>

          {/* Legal links */}
          <div className="flex flex-col gap-3">
            <span className="text-xs font-mono text-white/30 uppercase tracking-widest mb-1">Документы</span>
            {legalLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                title={link.title}
                data-testid={`link-footer-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                className="text-sm font-body text-white/50 hover:text-[hsl(var(--accent-warm))] transition-colors w-fit"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Socials */}
          <div className="flex flex-col gap-3">
            <span className="text-xs font-mono text-white/30 uppercase tracking-widest mb-1">Связаться</span>
            <div className="flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  data-testid={`link-social-${s.label.toLowerCase()}`}
                  className="w-10 h-10 rounded-lg flex items-center justify-center text-[hsl(var(--accent-warm))] border border-[hsl(var(--accent-warm))]/20 hover:border-[hsl(var(--accent-warm))]/60 hover:bg-[hsl(var(--accent-warm))]/10 transition-all"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-6 flex flex-col md:flex-row justify-between items-center gap-3">
          <span className="text-xs font-body text-white/25">© 2026 ТЕХЦЕХ. Все права защищены.</span>
          <span className="text-xs font-body text-white/20">ИП Козлов Андрей Олегович</span>
        </div>
      </div>
    </footer>
  );
}
