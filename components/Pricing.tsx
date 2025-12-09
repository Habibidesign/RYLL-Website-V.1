import React from 'react';
import { Check } from 'lucide-react';

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 px-6 max-w-5xl mx-auto">
       <div className="text-center mb-16">
          <span className="text-ryllOrange font-bold tracking-widest text-xs uppercase mb-4 block">
            MEMBERSHIP
          </span>
          <h2 className="font-display font-semibold text-4xl md:text-6xl mb-4 leading-tight text-ryllBlack">Pilih Menu Lo.</h2>
          <p className="text-stone-500">Mulai gratis, upgrade kalo ketagihan.</p>
       </div>

       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Free Tier */}
          <div className="bg-white p-8 rounded-[32px] border border-stone-200 shadow-sm flex flex-col relative overflow-hidden">
             <div className="border-b-2 border-dashed border-stone-100 pb-6 mb-6">
                <h3 className="font-display text-2xl font-bold mb-2">Si Mampir</h3>
                <div className="text-4xl font-display font-bold">Rp 0</div>
                <p className="text-stone-400 text-sm mt-2">Gratis selamanya.</p>
             </div>
             <ul className="space-y-4 mb-8 flex-1">
                <li className="flex gap-3 text-stone-600"><Check size={20} className="text-green-500"/> 3 Deck Dasar</li>
                <li className="flex gap-3 text-stone-600"><Check size={20} className="text-green-500"/> 3 Kredit AI / Hari</li>
                <li className="flex gap-3 text-stone-600"><Check size={20} className="text-green-500"/> Ada Iklan</li>
             </ul>
             <button className="w-full py-4 rounded-xl font-bold border-2 border-stone-900 text-stone-900 hover:bg-stone-900 hover:text-white transition-colors">
                Main Gratis
             </button>
          </div>

          {/* Paid Tier */}
          <div className="bg-ryllBlack text-white p-8 rounded-[32px] shadow-2xl shadow-purple-500/20 flex flex-col relative overflow-hidden">
             {/* Holographic effect */}
             <div className="absolute top-0 right-0 bg-gradient-to-bl from-ryllPurple to-ryllOrange w-32 h-32 blur-[60px] opacity-60"></div>
             
             <div className="absolute top-6 right-6 rotate-12 bg-white text-ryllBlack text-xs font-bold px-3 py-1 rounded-full shadow-lg z-10">
               PALING WORTH IT
             </div>

             <div className="border-b-2 border-dashed border-stone-700 pb-6 mb-6 relative z-10">
                <h3 className="font-display text-2xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-orange-300 to-purple-300">Warga Tetap</h3>
                <div className="text-4xl font-display font-bold">Rp 29k<span className="text-lg text-stone-500 font-normal">/bln</span></div>
                <p className="text-stone-400 text-sm mt-2">Buat yang serius nongkrong.</p>
             </div>
             <ul className="space-y-4 mb-8 flex-1 relative z-10">
                <li className="flex gap-3 text-stone-300"><Check size={20} className="text-ryllOrange"/> Buka Semua 50+ Deck</li>
                <li className="flex gap-3 text-stone-300"><Check size={20} className="text-ryllOrange"/> AI Unlimited</li>
                <li className="flex gap-3 text-stone-300"><Check size={20} className="text-ryllOrange"/> Tanpa Iklan</li>
                <li className="flex gap-3 text-stone-300"><Check size={20} className="text-ryllOrange"/> Akses Fitur Baru Duluan</li>
             </ul>
             <button className="w-full py-4 rounded-xl font-bold bg-gradient-to-r from-ryllOrange to-red-500 text-white shadow-lg hover:scale-[1.02] transition-transform relative z-10">
                Buka Semuanya
             </button>
          </div>
       </div>
    </section>
  );
};

export default Pricing;