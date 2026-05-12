import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[hsl(var(--footer-bg))] noise-bg relative border-t border-white/5 py-12">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start gap-2">
            <span className="font-heading font-bold text-2xl text-white tracking-tight">ТЕХЦЕХ</span>
            <span className="text-sm font-body text-gray-400">Технический отдел для вашего бизнеса</span>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500 font-body">
            <a href="#" className="hover:text-[hsl(var(--accent-warm))] transition-colors">Политика конфиденциальности</a>
            <a href="#" className="hover:text-[hsl(var(--accent-warm))] transition-colors">Договор</a>
          </div>
          
          <div className="text-sm font-body text-gray-500">
            © 2026 ТЕХЦЕХ
          </div>
        </div>
      </div>
    </footer>
  );
}
