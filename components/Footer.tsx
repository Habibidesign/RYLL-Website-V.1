import React from 'react';
import { Instagram, Twitter, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-cream pt-20 pb-10 px-6 border-t border-stone-200">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end gap-12">
        <div>
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 bg-ryllBlack rounded-lg flex items-center justify-center rotate-3">
              <span className="text-white font-display font-bold text-lg">R</span>
            </div>
            <span className="font-display font-bold text-2xl tracking-tight text-ryllBlack">RYLL</span>
          </div>
          <div className="flex gap-4">
             <a href="#" className="w-10 h-10 rounded-full border border-stone-200 flex items-center justify-center hover:bg-stone-200 transition-colors"><Instagram size={18}/></a>
             <a href="#" className="w-10 h-10 rounded-full border border-stone-200 flex items-center justify-center hover:bg-stone-200 transition-colors"><Twitter size={18}/></a>
             <a href="#" className="w-10 h-10 rounded-full border border-stone-200 flex items-center justify-center hover:bg-stone-200 transition-colors"><Linkedin size={18}/></a>
          </div>
        </div>

        <div className="text-right">
          <h2 className="font-display font-bold text-4xl md:text-6xl text-stone-300 mb-4 hover:text-ryllOrange transition-colors cursor-pointer">
            Siap Main?
          </h2>
          <div className="text-stone-400 text-sm">
            © 2024 RYLL. Dibuat dengan ☕ di Jakarta Selatan.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;