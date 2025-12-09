import React from 'react';
import { motion } from 'framer-motion';
import { Play, ArrowRight, Star } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-40 pb-20 md:pt-48 md:pb-32 px-6 max-w-7xl mx-auto overflow-hidden">
      {/* Background Mesh Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-br from-orange-200/40 to-purple-200/40 rounded-full blur-3xl -z-10 animate-pulse" />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Left: Content */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center lg:items-start text-center lg:text-left z-10"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-stone-200 shadow-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-xs font-bold tracking-widest uppercase text-stone-500">Versi 1.0 Udah Rilis</span>
          </div>
          
          <h1 className="font-display font-semibold text-5xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight text-ryllBlack mb-6">
            SIAP <br />
            <span className="text-ryllOrange">NONGKRONG?</span> <br />
            ANTI BASI.
          </h1>
          
          <p className="text-lg md:text-xl text-stone-600 max-w-md mb-8 leading-relaxed font-sans">
            Aplikasi pencair suasana buat pasangan, tongkrongan, dan keluarga. <br className="hidden md:block"/>
            Gak perlu login. Murni seru-seruan.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-8 py-4 bg-ryllOrange text-white rounded-full font-bold text-lg shadow-xl shadow-orange-500/20 flex items-center justify-center gap-3 group"
            >
              Mulai Main
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </motion.button>
            
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-8 py-4 bg-white border-2 border-stone-100 text-ryllBlack rounded-full font-bold text-lg flex items-center justify-center gap-3 hover:border-ryllBlack transition-colors"
            >
              <Play size={20} fill="currentColor" />
              Demo
            </motion.button>
          </div>

          <div className="mt-12 flex items-center gap-4 text-sm text-stone-500 font-medium">
             <div className="flex -space-x-2">
               {[1,2,3,4].map(i => (
                 <img key={i} src={`https://picsum.photos/32/32?random=${i}`} className="w-8 h-8 rounded-full border-2 border-cream" alt="user" />
               ))}
             </div>
             <div>
                <div className="flex text-yellow-500"><Star size={12} fill="currentColor"/><Star size={12} fill="currentColor"/><Star size={12} fill="currentColor"/><Star size={12} fill="currentColor"/><Star size={12} fill="currentColor"/></div>
                <span>Dipake 10.000+ tongkrongan</span>
             </div>
          </div>
        </motion.div>

        {/* Right: Visual 3D Stack */}
        <div className="relative h-[500px] w-full flex items-center justify-center perspective-1000">
           {/* Decorative elements behind */}
           <div className="absolute inset-0 bg-gradient-to-tr from-ryllOrange/10 to-transparent rounded-full blur-3xl" />
           
           {/* Card Stack */}
           <div className="relative w-64 h-96 md:w-80 md:h-[420px]">
              {/* Back Card */}
              <motion.div 
                animate={{ rotate: -10, y: -20 }}
                transition={{ duration: 4, repeat: Infinity, repeatType: 'mirror' }}
                className="absolute inset-0 bg-ryllPurple rounded-[32px] shadow-2xl border border-white/10 flex items-center justify-center p-8 transform origin-bottom-left opacity-60"
              >
              </motion.div>

              {/* Middle Card */}
              <motion.div 
                animate={{ rotate: 5, y: -10 }}
                transition={{ duration: 5, repeat: Infinity, repeatType: 'mirror' }}
                className="absolute inset-0 bg-stone-900 rounded-[32px] shadow-2xl border border-white/10 flex items-center justify-center p-8 transform origin-bottom-right opacity-80"
              >
              </motion.div>

              {/* Front Card */}
              <motion.div 
                initial={{ y: 0, rotate: 0 }}
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 bg-white rounded-[32px] shadow-[0_35px_60px_-15px_rgba(0,0,0,0.1)] border border-stone-100 flex flex-col justify-between p-8 overflow-hidden"
              >
                 <div className="flex justify-between items-start">
                   <div className="w-10 h-10 rounded-full bg-ryllOrange/10 flex items-center justify-center text-ryllOrange font-bold text-sm">
                     #1
                   </div>
                   <span className="text-xs font-bold uppercase tracking-widest text-stone-400">Deep Talk</span>
                 </div>
                 
                 <div className="font-display font-semibold text-3xl leading-tight text-ryllBlack">
                   Kapan terakhir kali lo nangis, dan kenapa?
                 </div>

                 <div className="flex justify-between items-end">
                    <div className="text-xs text-stone-400 font-medium">ryll.fun</div>
                    <div className="w-12 h-8 rounded-full border-2 border-stone-100 flex items-center justify-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-ryllBlack"></div>
                    </div>
                 </div>
              </motion.div>

              {/* Floating Element: Badge */}
              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -right-8 top-20 bg-white/80 backdrop-blur-md px-4 py-3 rounded-2xl shadow-xl border border-white/50 z-20"
              >
                <div className="text-xs font-bold text-stone-500">PEMAIN</div>
                <div className="text-xl font-bold text-ryllBlack">2 - 8 Orang</div>
              </motion.div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;