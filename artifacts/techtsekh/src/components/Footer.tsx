import React from 'react';
import logoLight from '@/assets/logo-light-nobg.png';

const legalLinks = [
  { label: 'Реквизиты', href: '#' },
  { label: 'ПОПД', href: '#' },
  { label: 'Согласие на обработку ПД', href: '#' },
  { label: 'Согласие на рассылку', href: '#' },
];

const contacts = [
  { label: 'Telegram', href: 'https://t.me/techtsekh' },
  { label: 'MAX', href: 'https://max.ru/techtsekh' },
  { label: 'info@techtsekh.ru', href: 'mailto:info@techtsekh.ru' },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5" style={{ background: 'hsl(var(--footer-bg))' }}>
      <div className="container mx-auto px-6 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand — use screen blend mode so the dark PNG background disappears on dark footer */}
          <div className="flex flex-col gap-3">
            <img
              src={logoLight}
              alt="ТЕХЦЕХ"
              className="h-10 w-auto object-contain object-left"
            />
            <span className="text-xs font-body text-white/25 mt-1">ИП Козлов Андрей Олегович</span>
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
                data-testid={`link-footer-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                className="text-sm font-body text-white/50 hover:text-[hsl(var(--accent-warm))] transition-colors w-fit"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Contacts — plain text links */}
          <div className="flex flex-col gap-3">
            <span className="text-xs font-mono text-white/30 uppercase tracking-widest mb-1">Связаться</span>
            {contacts.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                data-testid={`link-social-${c.label.toLowerCase()}`}
                className="text-sm font-body text-white/60 hover:text-[hsl(var(--accent-warm))] transition-colors w-fit"
              >
                {c.label}
              </a>
            ))}
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
