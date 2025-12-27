import React from 'react';
import { Instagram, Twitter, Linkedin, ArrowUpRight } from 'lucide-react';

const FooterLink = ({ href, label }: { href: string; label: string }) => (
  <a href={href} className="group flex items-center gap-1 text-stone-400 hover:text-[#FF5F1F] transition-colors font-mono text-sm uppercase tracking-wide">
    {label}
    <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity -translate-y-1 translate-x-1" />
  </a>
);

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0A0A0A] text-white pt-24 pb-8 px-6">
      <div className="max-w-[1600px] mx-auto">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-24 border-b border-white/10 pb-24">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h1 className="font-display font-bold text-6xl md:text-8xl tracking-tighter uppercase mb-6 leading-none">
              RYLL.
            </h1>
            <p className="text-stone-500 font-mono text-sm uppercase tracking-wide max-w-xs leading-relaxed">
              Game kartu sosial buat lo yang enek sama basa-basi. Dibuat dengan penuh tekanan di Jakarta Selatan.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6 uppercase">Jalan Tikus</h4>
            <ul className="space-y-3">
              <li><FooterLink href="#shop" label="Shop Decks" /></li>
              <li><FooterLink href="#features" label="Fitur" /></li>
              <li><FooterLink href="#testimonials" label="Kata Netizen" /></li>
              <li><FooterLink href="#about" label="Tentang Kita" /></li>
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6 uppercase">Sosmed</h4>
            <ul className="space-y-3">
              <li><FooterLink href="#" label="Instagram" /></li>
              <li><FooterLink href="#" label="Twitter / X" /></li>
              <li><FooterLink href="#" label="LinkedIn" /></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-6">
          <p className="font-mono text-xs text-stone-600 uppercase tracking-widest">
            © 2024 RYLL Cards. Hak Cipta Dilindungi (Santai).
          </p>
          <p className="font-display font-bold text-[10vw] md:text-[8vw] text-stone-800/30 leading-none select-none pointer-events-none">
            GILIRAN LO
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;