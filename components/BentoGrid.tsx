import React from 'react';
import { motion } from 'framer-motion';
import { Star, ArrowUpRight, Zap, Smartphone, Users, ArrowRight } from 'lucide-react';

const BentoGrid: React.FC = () => {
  return (
    <section id="features" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="mb-16 text-center md:text-left">
        <span className="text-ryllOrange font-bold tracking-widest text-xs uppercase mb-4 block">
          FITUR UNGGULAN
        </span>
        <h2 className="font-display font-semibold text-4xl md:text-6xl mb-4 leading-tight text-ryllBlack">
          Bukan cuma fitur—<br />
          senjata anti basi lo.
        </h2>
        <p className="text-stone-500 text-lg max-w-2xl">
           Dari AI canggih sampe mode offline, semuanya didesain biar lo gak mati gaya pas nongkrong.
        </p>
      </div>

      {/* Grid Layout: 3 Columns. Left & Middle columns contain 2 stacked cards each. Right column is 1 tall card. */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
        
        {/* Column 1: Social Proof & Big Stat */}
        <div className="flex flex-col gap-6 h-full">
           {/* Card 1: Users */}
           <motion.div 
             whileHover={{ y: -2 }}
             className="bg-[#F0FDF4] p-8 rounded-[32px] flex flex-col items-center justify-center text-center border border-green-100 flex-1"
           >
              <div className="flex -space-x-3 mb-4">
                 {[1,2,3,4,5].map(i => (
                   <img key={i} src={`https://picsum.photos/40/40?random=${i+10}`} className="w-10 h-10 rounded-full border-2 border-white" alt="user" />
                 ))}
              </div>
              <h3 className="font-display font-bold text-3xl text-green-900">25.000+</h3>
              <p className="text-green-700 font-medium">Tongkrongan terselamatkan</p>
           </motion.div>

           {/* Card 2: Percentage Stat */}
           <motion.div 
             whileHover={{ y: -2 }}
             className="bg-white p-8 rounded-[32px] flex flex-col items-center justify-center text-center border border-stone-200 flex-1 relative overflow-hidden"
           >
              <h3 className="font-display font-bold text-6xl text-ryllBlack mb-2 relative z-10">99%</h3>
              <p className="text-stone-500 font-medium relative z-10">Anti Krik Krik.<br/><span className="text-xs opacity-60">Garansi uang kembali kalo temen lo diem aja.</span></p>
              
              {/* Decorative Background */}
              <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-stone-50 rounded-full z-0" />
           </motion.div>
        </div>

        {/* Column 2: Features & Mockup */}
        <div className="flex flex-col gap-6 h-full">
           {/* Card 3: Intelligent Features */}
           <motion.div 
             whileHover={{ y: -2 }}
             className="bg-white p-8 rounded-[32px] border border-stone-200 flex flex-col items-center justify-center flex-1"
           >
              <div className="text-center mb-6">
                 <h3 className="font-display font-bold text-lg text-ryllBlack">Dibackup AI</h3>
                 <p className="text-xs text-stone-400">Topik spesifik, gak pasaran.</p>
              </div>
              
              <div className="flex flex-col gap-3 w-full max-w-[200px]">
                 <div className="flex items-center justify-between bg-stone-50 px-4 py-3 rounded-2xl border border-stone-100">
                    <span className="text-sm font-bold text-stone-600">Deep Talk</span>
                    <div className="bg-green-100 p-1 rounded-full"><ArrowUpRight size={14} className="text-green-600"/></div>
                 </div>
                 <div className="flex items-center justify-between bg-stone-50 px-4 py-3 rounded-2xl border border-stone-100">
                    <span className="text-sm font-bold text-stone-600">Spicy Mode</span>
                    <div className="bg-green-100 p-1 rounded-full"><ArrowUpRight size={14} className="text-green-600"/></div>
                 </div>
              </div>
           </motion.div>

           {/* Card 4: Mobile Mockup */}
           <motion.div 
             whileHover={{ y: -2 }}
             className="bg-[#FFFBF5] pt-8 px-8 rounded-[32px] border border-orange-100 flex flex-col items-center justify-end flex-1 relative overflow-hidden"
           >
              <div className="text-center mb-6">
                 <h3 className="font-display font-bold text-lg text-ryllOrange mb-1">Mobile First</h3>
                 <p className="text-xs text-orange-800/60">Desain buat jempol lo.</p>
              </div>
              
              <div className="w-[140px] bg-white rounded-t-[2rem] border-4 border-white h-24 relative top-1">
                 <div className="w-full h-full bg-stone-100 rounded-t-[1.7rem] p-3 flex flex-col gap-2">
                    <div className="w-full h-16 bg-ryllOrange rounded-xl opacity-80"></div>
                 </div>
              </div>
           </motion.div>
        </div>

        {/* Column 3: The Big CTA Card (Right) */}
        <div className="h-full">
            <motion.div 
            whileHover={{ scale: 1.01 }}
            className="bg-ryllBlack rounded-[32px] p-8 md:p-12 text-white flex flex-col justify-between relative overflow-hidden h-full"
            >
            {/* Header */}
            <div className="relative z-10 text-center md:text-left">
                <div className="flex justify-center md:justify-start gap-1 mb-4 text-green-400">
                    <Star fill="currentColor" size={24} />
                    <Star fill="currentColor" size={24} />
                    <Star fill="currentColor" size={24} />
                    <Star fill="currentColor" size={24} />
                    <Star fill="currentColor" size={24} />
                </div>
                <h3 className="font-display font-bold text-6xl mb-2">5.0</h3>
                <p className="text-stone-400 text-lg">Rating sempurna di hati user.</p>
            </div>

            {/* Icons */}
            <div className="flex justify-center md:justify-start gap-6 mt-8 relative z-10 opacity-80">
                <Smartphone size={32} />
                <Zap size={32} />
                <Users size={32} />
            </div>

            {/* CTA Button */}
            <div className="mt-12 relative z-10 flex flex-col items-center md:items-start">
                <p className="text-stone-400 mb-6 leading-relaxed text-center md:text-left">
                    Akhirnya ada game yang bikin lo berhenti main HP dan mulai ngobrol beneran. Smooth, cepet, gratis.
                </p>
                <button className="w-full bg-white text-ryllBlack py-4 rounded-full font-bold text-lg hover:bg-stone-200 transition-colors flex items-center justify-center gap-2 group">
                    Main Sekarang - GRATIS
                    <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                </button>
            </div>

            {/* Giant Background Arrow Decoration - Fixed with fill-none */}
            <div className="absolute bottom-[-10%] right-[-10%] w-[120%] h-[120%] pointer-events-none opacity-[0.05] text-white">
                <svg 
                    viewBox="0 0 24 24" 
                    className="w-full h-full fill-none stroke-current" 
                    strokeWidth="1.5" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                >
                    <path d="M 7 17 L 17 7" />
                    <path d="M 7 7 H 17 V 17" />
                </svg>
            </div>
            </motion.div>
        </div>

      </div>
    </section>
  );
};

export default BentoGrid;