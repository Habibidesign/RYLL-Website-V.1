import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Zap, MessageCircle, Heart } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen w-full bg-cream overflow-hidden">

      {/* Grid Container: Split 50/50 on Desktop, Stacked on Mobile */}
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen w-full">

        {/* --- LEFT COLUMN: Content --- */}
        <div className="flex flex-col justify-center px-6 md:px-12 lg:px-20 xl:px-24 pt-32 lg:pt-20 pb-12 lg:min-h-screen relative z-10 order-1 lg:order-1">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Brand Tag */}
            <div className="inline-block mb-4">
              <h4 className="font-display font-bold text-ryllOrange text-sm tracking-widest uppercase bg-orange-100 px-3 py-1 rounded-md">
                THE SOCIAL CARD GAME
              </h4>
            </div>

            {/* Headline */}
            <h1 className="font-display font-bold text-5xl sm:text-6xl md:text-7xl xl:text-8xl leading-[1.1] text-ryllBlack mb-6 tracking-tight">
              Ubah <br className="hidden md:block" />
              <span className="text-stone-400">Basa-basi</span> <br />
              Jadi <span className="text-ryllOrange">Koneksi.</span>
            </h1>

            <p className="font-sans text-lg md:text-xl text-stone-500 max-w-lg leading-relaxed mb-8">
              Cara baru buat nongkrong. Hubungkan akun sosmed lo atau main sebagai guest.
              Kita siapin topik biar lo gak mati gaya.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <button className="px-8 py-4 bg-ryllOrange text-white rounded-full font-bold text-lg shadow-xl shadow-orange-500/20 hover:scale-105 transition-transform flex items-center gap-2">
                Mulai Main <ArrowRight size={20} />
              </button>
              <button className="px-6 py-4 text-ryllBlack font-bold text-lg hover:bg-stone-100 rounded-full transition-colors flex items-center gap-2">
                Lihat Demo
              </button>
            </div>

            {/* Partners (No Border) */}
            <div>
              <p className="text-stone-400 text-xs font-bold uppercase tracking-wider mb-4">Our most loved partners</p>
              <div className="flex flex-wrap gap-x-8 gap-y-4 opacity-50 grayscale hover:grayscale-0 transition-all">
                <span className="font-display font-bold text-xl text-stone-600">Spotify</span>
                <span className="font-display font-bold text-xl text-stone-600">Discord</span>
                <span className="font-display font-bold text-xl text-stone-600">Starbucks</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* --- RIGHT COLUMN: Orange Card Container --- */}
        <div className="relative order-2 lg:order-2 h-[600px] lg:h-screen w-full p-3.5 lg:pl-0 flex flex-col">

          {/* The Orange Card Itself */}
          <div className="relative w-full h-full bg-ryllOrange rounded-[2.5rem] lg:rounded-[3rem] overflow-hidden flex flex-col items-center justify-center">

            {/* 1. Background Pattern (Dot Grid) */}
            <div
              className="absolute inset-0 opacity-20 pointer-events-none"
              style={{
                backgroundImage: 'radial-gradient(circle, #ffffff 2px, transparent 2.5px)',
                backgroundSize: '24px 24px'
              }}
            />

            {/* 2. Background Texture Overlay */}
            <div className="absolute inset-0 opacity-10 mix-blend-overlay pointer-events-none">
              <img
                src="https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=2070&auto=format&fit=crop"
                alt="Texture"
                className="w-full h-full object-cover grayscale"
              />
            </div>

            {/* Floating Content Wrapper */}
            <div className="relative w-full max-w-sm lg:max-w-md z-10 flex flex-col gap-6 px-6">

              {/* --- DECORATIVE FLOATING ELEMENTS (New) --- */}

              {/* Floating Avatar Top Right */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-12 -right-4 lg:-right-12 z-0 hidden sm:flex items-center gap-2 bg-white/90 backdrop-blur-sm p-2 pr-4 rounded-full shadow-lg"
              >
                <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=100&auto=format&fit=crop" className="w-8 h-8 rounded-full border border-white" alt="User" />
                <span className="text-xs font-bold text-ryllBlack">Seru abis! 🔥</span>
              </motion.div>

              {/* Floating Avatar Bottom Left */}
              <motion.div
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-8 -left-4 lg:-left-16 z-0 hidden sm:flex items-center gap-2 bg-white/90 backdrop-blur-sm p-2 pr-4 rounded-full shadow-lg"
              >
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop" className="w-8 h-8 rounded-full border border-white" alt="User" />
                <span className="text-xs font-bold text-ryllBlack">Join dong 👋</span>
              </motion.div>

              {/* SVG Connector Lines (Background) */}
              <svg className="absolute inset-0 w-full h-full -z-10 pointer-events-none opacity-40 overflow-visible">
                {/* Line to top right */}
                <path d="M 200 100 Q 250 50 320 -20" fill="none" stroke="white" strokeWidth="2" strokeDasharray="6 6" />
                {/* Line to bottom left */}
                <path d="M 100 400 Q 50 450 -20 480" fill="none" stroke="white" strokeWidth="2" strokeDasharray="6 6" />
              </svg>


              {/* --- MAIN CARDS --- */}

              {/* CARD 1: Session Status */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="bg-white rounded-[2rem] p-6 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] relative z-10"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-5xl font-display font-bold text-ryllBlack leading-none mb-1">100%</h3>
                    <span className="text-stone-400 text-xs font-bold uppercase tracking-wider">MOOD LEVEL</span>
                  </div>
                  {/* Changed Badge Color to Orange */}
                  <div className="bg-ryllOrange text-white px-4 py-1.5 rounded-full text-xs font-bold shadow-sm flex items-center gap-1">
                    <Heart size={12} fill="white" /> Chill Mode
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-stone-100 flex items-center gap-4">
                  <div className="flex -space-x-3">
                    {[1, 2, 3].map(i => (
                      <div key={i} className="w-10 h-10 rounded-full bg-stone-100 border-4 border-white shadow-sm overflow-hidden">
                        <img src={`https://picsum.photos/100/100?random=${i + 20}`} alt="Player" className="w-full h-full object-cover" />
                      </div>
                    ))}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-ryllBlack">Active Session</p>
                    <p className="text-xs text-stone-500">3 Players joined</p>
                  </div>
                </div>
              </motion.div>

              {/* CARD 2: Quick Topic Starter */}
              <motion.div
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="bg-white rounded-[2rem] p-6 lg:p-8 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] relative lg:left-8 z-20"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-ryllPurple/10 p-2.5 rounded-xl">
                    <Zap className="text-ryllPurple fill-ryllPurple" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl text-ryllBlack leading-none">Mulai Topik Apa?</h4>
                    <span className="text-xs text-stone-400">Pilih deck favorit lo</span>
                  </div>
                </div>

                <div className="flex gap-2 flex-wrap mb-8">
                  <span className="bg-stone-50 border border-stone-100 px-4 py-2 rounded-full text-sm font-bold text-stone-600 hover:bg-stone-100 cursor-pointer transition-colors">Deep Talk</span>
                  <span className="bg-stone-50 border border-stone-100 px-4 py-2 rounded-full text-sm font-bold text-stone-600 hover:bg-stone-100 cursor-pointer transition-colors">Spicy</span>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-2xl font-display font-bold text-ryllBlack">Gratis</p>
                  </div>
                  {/* Changed Button Color to Orange */}
                  <button className="bg-ryllOrange text-white px-6 py-3 rounded-full font-bold hover:bg-orange-600 transition-colors shadow-lg shadow-orange-500/30 text-sm flex items-center gap-2">
                    Gas Main <ArrowRight size={16} />
                  </button>
                </div>
              </motion.div>

              {/* Abstract Illustration Behind */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-gradient-to-tr from-white/20 to-transparent rounded-full blur-3xl -z-10 pointer-events-none" />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;