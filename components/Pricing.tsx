import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, X, Zap, Crown } from 'lucide-react';

const Pricing: React.FC = () => {
   const [isYearly, setIsYearly] = useState(false);

   return (
      <section id="pricing" className="py-24 px-6 max-w-7xl mx-auto">
         <div className="text-center mb-16">
            <span className="text-ryllOrange font-bold tracking-widest text-xs uppercase mb-4 block">
               MEMBERSHIP
            </span>
            <h2 className="font-display font-semibold text-4xl md:text-6xl mb-6 leading-tight text-ryllBlack">
               Investasi Pertemanan.
            </h2>
            <p className="text-stone-500 text-lg mb-8">
               Pilih paket yang cocok buat gaya nongkrong lo.
            </p>

            {/* Toggle Switch */}
            <div className="flex items-center justify-center gap-4">
               <span className={`text-sm font-bold ${!isYearly ? 'text-ryllBlack' : 'text-stone-400'}`}>Bulanan</span>
               <button
                  onClick={() => setIsYearly(!isYearly)}
                  className="w-16 h-8 bg-stone-200 rounded-full p-1 relative transition-colors duration-300 focus:outline-none"
               >
                  <motion.div
                     layout
                     className="w-6 h-6 bg-white rounded-full shadow-md"
                     animate={{ x: isYearly ? 32 : 0 }}
                     transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
               </button>
               <span className={`text-sm font-bold ${isYearly ? 'text-ryllBlack' : 'text-stone-400'}`}>
                  Tahunan <span className="text-ryllOrange text-xs ml-1">(Hemat 20%)</span>
               </span>
            </div>
         </div>

         {/* Changed items-start to items-stretch to ensure equal height */}
         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">

            {/* FREE TIER - Compact Card */}
            <div className="bg-white p-8 rounded-[2.5rem] border border-stone-200 shadow-sm flex flex-col h-full hover:border-stone-300 transition-colors">
               <div className="mb-6">
                  <div className="w-14 h-14 bg-stone-100 rounded-2xl flex items-center justify-center mb-6">
                     <Zap size={28} className="text-stone-600" />
                  </div>
                  <h3 className="font-display text-4xl font-bold text-ryllBlack mb-4">Si Mampir</h3>
                  <p className="text-stone-500 text-base leading-relaxed mb-6">Buat yang cuma iseng main.</p>
               </div>

               <div className="mb-8">
                  <span className="text-5xl font-display font-bold text-ryllBlack">Rp 0</span>
                  <span className="text-stone-400 text-sm font-medium"> / selamanya</span>
               </div>

               <ul className="space-y-4 mb-8 flex-1">
                  <li className="flex gap-3 text-sm text-stone-600"><Check size={18} className="text-green-500 shrink-0" /> 3 Deck Dasar (Lite)</li>
                  <li className="flex gap-3 text-sm text-stone-600"><Check size={18} className="text-green-500 shrink-0" /> 3 Kredit AI / Hari</li>
                  <li className="flex gap-3 text-sm text-stone-400"><X size={18} className="text-stone-300 shrink-0" /> Akses Deck Premium</li>
                  <li className="flex gap-3 text-sm text-stone-400"><X size={18} className="text-stone-300 shrink-0" /> Mode Tanpa Iklan</li>
               </ul>

               <button className="w-full py-4 rounded-full font-bold border-2 border-stone-100 text-ryllBlack hover:border-ryllBlack hover:bg-ryllBlack hover:text-white transition-all duration-300">
                  Main Gratis
               </button>
            </div>

            {/* PREMIUM TIER - Featured Wide Card */}
            <div className="lg:col-span-2 bg-ryllBlack text-white p-8 md:p-12 rounded-[3rem] shadow-2xl relative overflow-hidden flex flex-col md:flex-row gap-12 group h-full">

               {/* Background Effects */}
               <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-bl from-ryllOrange/30 to-transparent rounded-full blur-[100px] pointer-events-none" />
               <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-ryllPurple/20 rounded-full blur-[80px] pointer-events-none" />

               {/* Left Content: Value Prop */}
               <div className="flex-1 flex flex-col justify-between relative z-10">
                  <div>
                     <div className="w-14 h-14 bg-gradient-to-br from-ryllOrange to-red-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-orange-500/30">
                        <Crown size={28} className="text-white" />
                     </div>
                     <h3 className="font-display text-4xl font-bold mb-4">Warga Tetap</h3>
                     <p className="text-stone-400 leading-relaxed mb-6">
                        Unlock potensi nongkrong maksimal. Akses semua deck, tanpa batas, tanpa gangguan. Jadi raja tongkrongan.
                     </p>
                  </div>

                  <div>
                     <div className="flex items-baseline gap-2 mb-2">
                        <span className="text-5xl md:text-6xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-stone-400">
                           {isYearly ? 'Rp 290k' : 'Rp 29k'}
                        </span>
                        <span className="text-stone-500 font-medium">
                           /{isYearly ? 'tahun' : 'bulan'}
                        </span>
                     </div>
                     {isYearly && <p className="text-green-400 text-sm font-bold">Hemat Rp 58.000 per tahun!</p>}
                  </div>
               </div>

               {/* Right Content: Features List & CTA */}
               {/* Added pt-20 to prevent badge overlap */}
               <div className="flex-1 flex flex-col justify-between relative z-10 bg-white/5 rounded-3xl p-6 pt-20 border border-white/10 backdrop-blur-sm h-full">

                  {/* Badge moved inside here */}
                  <div className="absolute top-6 right-6 bg-white text-ryllBlack text-xs font-bold px-4 py-2 rounded-full shadow-lg z-20 flex items-center gap-2">
                     <Crown size={14} className="text-ryllOrange fill-ryllOrange" /> POPULAR CHOICE
                  </div>

                  <ul className="space-y-4 mb-8">
                     <li className="flex items-start gap-3">
                        <div className="bg-ryllOrange/20 p-1 rounded-full"><Check size={14} className="text-ryllOrange" /></div>
                        <span className="text-sm text-stone-200">Akses <strong className="text-white">Semua 50+ Deck</strong> Premium</span>
                     </li>
                     <li className="flex items-start gap-3">
                        <div className="bg-ryllOrange/20 p-1 rounded-full"><Check size={14} className="text-ryllOrange" /></div>
                        <span className="text-sm text-stone-200">Generate Topik AI <strong className="text-white">Unlimited</strong></span>
                     </li>
                     <li className="flex items-start gap-3">
                        <div className="bg-ryllOrange/20 p-1 rounded-full"><Check size={14} className="text-ryllOrange" /></div>
                        <span className="text-sm text-stone-200">Mode <strong className="text-white">Tanpa Iklan</strong> (No Ads)</span>
                     </li>
                     <li className="flex items-start gap-3">
                        <div className="bg-ryllOrange/20 p-1 rounded-full"><Check size={14} className="text-ryllOrange" /></div>
                        <span className="text-sm text-stone-200">Update Deck Baru Tiap Minggu</span>
                     </li>
                     <li className="flex items-start gap-3">
                        <div className="bg-ryllOrange/20 p-1 rounded-full"><Check size={14} className="text-ryllOrange" /></div>
                        <span className="text-sm text-stone-200">Badge "Donatur" di Profil</span>
                     </li>
                  </ul>

                  <button className="w-full py-4 rounded-full font-bold bg-gradient-to-r from-ryllOrange to-red-500 text-white shadow-lg shadow-orange-500/25 hover:scale-[1.02] hover:shadow-orange-500/40 transition-all duration-300 mt-auto">
                     {isYearly ? 'Beli Paket Tahunan' : 'Langganan Sekarang'}
                  </button>
               </div>

            </div>

         </div>
      </section>
   );
};

export default Pricing;