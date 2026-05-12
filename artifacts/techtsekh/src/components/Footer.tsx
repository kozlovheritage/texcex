import React from 'react';
import { SiTelegram } from 'react-icons/si';
import logoDarkNobg from '@/assets/logo-dark-nobg.png';
import maxIconPng from '@assets/image_1778576107523.png';

const legalLinks = [
  { label: 'Реквизиты', href: '#', title: '' },
  { label: 'ПОПД', href: '#', title: 'Политика обработки персональных данных' },
  { label: 'Согласие на обработку ПД', href: '#', title: '' },
  { label: 'Согласие на рассылку', href: '#', title: '' },
];

const socials = [
  {
    label: 'Telegram',
    href: '#',
    icon: <SiTelegram className="w-5 h-5" />,
    isImg: false,
  },
  {
    label: 'Max',
    href: '#',
    img: maxIconPng,
    isImg: true,
  },
  {
    label: 'Email',
    href: 'mailto:info@techtsekh.ru',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    isImg: false,
  },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5" style={{ background: 'hsl(var(--footer-bg))' }}>
      <div className="container mx-auto px-6 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div className="flex flex-col gap-3">
            <img
              src={logoDarkNobg}
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
                title={link.title || undefined}
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
                  className="w-10 h-10 rounded-lg flex items-center justify-center overflow-hidden border border-[hsl(var(--accent-warm))]/20 hover:border-[hsl(var(--accent-warm))]/60 hover:scale-105 transition-all"
                  style={s.isImg ? {} : { color: 'hsl(var(--accent-warm))' }}
                >
                  {s.isImg ? (
                    <img src={(s as { img: string }).img} alt={s.label} className="w-full h-full object-cover" />
                  ) : (
                    s.icon
                  )}
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
