import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lock, Play, Sparkles, ChevronLeft, ChevronRight, RefreshCw } from 'lucide-react';
import { Deck } from '../types';

const decks: Deck[] = [
  {
    id: 'd1',
    title: 'DEEP TALK',
    description: 'Buka hati tanpa baper.',
    color: '#FF5F1F',
    gradient: 'from-orange-500 to-red-600',
    questionCount: 658,
    questions: ['Apa ketakutan terbesar lo saat ini?', 'Siapa orang yang paling lo kangenin?', 'Hal apa yang lo sesalin tahun ini?']
  },
  {
    id: 'd2',
    title: 'BUCIN ERA',
    description: 'Khusus buat yang lagi dimabuk asmara.',
    color: '#8A2BE2',
    gradient: 'from-purple-600 to-indigo-600',
    questionCount: 420,
    questions: ['Hal paling bucin yang pernah lo lakuin?', 'Lagu apa yang ingetin lo sama doi?', 'First date ideal lo kayak gimana?']
  },
  {
    id: 'd3',
    title: 'TOXIC TRAITS',
    description: 'Red flag lo apa? Jujur aja.',
    color: '#84cc16',
    gradient: 'from-lime-500 to-green-600',
    questionCount: 112,
    questions: ['Lo orangnya pendendam gak?', 'Sifat toxic lo yang susah ilang?', 'Pernah ghosting orang? Kenapa?']
  },
  {
    id: 'd4',
    title: 'CAREER MODE',
    description: 'Ngomongin masa depan dan cuan.',
    color: '#3b82f6',
    gradient: 'from-blue-500 to-cyan-500',
    questionCount: 89,
    questions: ['Pekerjaan impian lo pas kecil?', 'Gaji gede tapi stress atau gaji pas tapi santai?', 'Goals lo 5 tahun lagi?']
  },
  {
    id: 'd5',
    title: 'MIDNIGHT',
    description: 'Obrolan jam 2 pagi yang random.',
    color: '#111111',
    gradient: 'from-gray-800 to-black',
    questionCount: 333,
    questions: ['Kalau lo bisa ulang waktu, lo mau ke momen apa?', 'Apa arti kebahagiaan buat lo?', 'Hal mistis yang pernah lo alamin?']
  },
  {
    id: 'd6',
    title: '18+ UNSENSORED',
    description: 'Bahaya. Jangan main sama keluarga.',
    color: '#ec4899',
    gradient: 'from-pink-500 via-rose-500 to-pink-600',
    questionCount: 69,
    questions: [],
    isComingSoon: true
  }
];

const DeckCarousel: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Handle Resize for Responsive Spacing
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Auto-rotate questions for the active card
  useEffect(() => {
    const interval = setInterval(() => {
      setQuestionIndex((prev) => (prev + 1) % 3); // Cycle through first 3 questions
    }, 3000);
    return () => clearInterval(interval);
  }, [activeIndex]);

  const nextCard = () => {
    setActiveIndex((prev) => (prev + 1) % decks.length);
    setQuestionIndex(0);
  };

  const prevCard = () => {
    setActiveIndex((prev) => (prev - 1 + decks.length) % decks.length);
    setQuestionIndex(0);
  };

  const handleDragEnd = (event: any, info: any) => {
    if (info.offset.x < -50) nextCard();
    else if (info.offset.x > 50) prevCard();
  };

  const getIndex = (i: number) => {
    const len = decks.length;
    return ((i % len) + len) % len;
  };

  return (
    <section id="decks" className="py-24 relative overflow-hidden transition-colors duration-700 bg-cream">
      
      {/* Dynamic Background Blob */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
         <motion.div 
            animate={{ backgroundColor: decks[activeIndex].color }}
            className="w-[600px] h-[600px] rounded-full blur-[150px] opacity-10 transition-colors duration-700"
         />
      </div>

      <div className="max-w-7xl mx-auto px-6 mb-12 relative z-10">
        <div className="text-center">
           <span className="text-ryllOrange font-bold tracking-widest text-xs uppercase mb-4 block">
             KOLEKSI DECK
           </span>
           <h2 className="font-display font-semibold text-4xl md:text-6xl leading-tight text-ryllBlack mb-4">
             Pilih Mood Lo.
           </h2>
           <p className="text-stone-500 text-lg max-w-2xl mx-auto">
             Swipe kartu buat pilih topik obrolan hari ini.
           </p>
        </div>
      </div>

      {/* CAROUSEL AREA */}
      <div className="relative h-[600px] md:h-[680px] flex items-center justify-center w-full perspective-1000">
        
        {/* CARDS */}
        <div className="relative w-full max-w-5xl h-full flex items-center justify-center">
           {[-2, -1, 0, 1, 2].map((offset) => {
              const index = getIndex(activeIndex + offset);
              const deck = decks[index];
              const isActive = offset === 0;
              
              // Spacing Configuration
              // Desktop Card Width: 380px -> Spacing 410px (Gap 30px)
              // Mobile Card Width: 320px -> Spacing 340px (Gap 20px)
              const spacing = isMobile ? 340 : 410;
              const xOffset = offset * spacing;
              
              const scale = isActive ? 1 : Math.max(0.85 - Math.abs(offset) * 0.05, 0.6); // Subtle scaling
              const opacity = isActive ? 1 : Math.max(0.7 - Math.abs(offset) * 0.15, 0);
              const rotateY = offset * -5; // Subtle rotation for cleaner gaps
              const zIndex = 50 - Math.abs(offset);

              return (
                <motion.div
                  key={`${deck.id}-${index}`}
                  className="absolute top-1/2 left-1/2"
                  initial={false}
                  animate={{
                    x: `calc(-50% + ${xOffset}px)`,
                    y: '-50%',
                    scale,
                    rotateY,
                    zIndex,
                    opacity,
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  drag={isActive ? "x" : false}
                  dragConstraints={{ left: 0, right: 0 }}
                  onDragEnd={handleDragEnd}
                  onClick={() => { if (offset !== 0) setActiveIndex(getIndex(activeIndex + offset)); }}
                  style={{ transformStyle: 'preserve-3d', cursor: isActive ? 'grab' : 'pointer' }}
                >
                   {/* THE CARD */}
                   <div className={`
                      w-[320px] md:w-[380px] h-[520px] md:h-[600px] 
                      rounded-[3.5rem] p-8 
                      flex flex-col justify-between relative overflow-hidden
                      bg-gradient-to-br ${deck.gradient} shadow-2xl
                      transition-all duration-500 border-[8px] border-white/10
                   `}>
                      
                      {/* Card Texture/Noise */}
                      <div className="absolute inset-0 bg-white opacity-5 mix-blend-overlay" 
                           style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.8\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")' }} 
                      />

                      {/* Top: Icon & Count */}
                      <div className="flex justify-between items-start relative z-10 text-white">
                         <div className="w-16 h-16 rounded-[1.5rem] bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/20 shadow-lg">
                            {deck.isComingSoon ? <Lock size={28} /> : <Sparkles size={28} />}
                         </div>
                         <div className="px-4 py-2 rounded-full bg-black/20 backdrop-blur-md text-xs font-bold border border-white/10 tracking-wider">
                            {deck.questionCount} KARTU
                         </div>
                      </div>

                      {/* Middle: Title & Description */}
                      <div className="relative z-10 text-white mt-8 mb-4">
                         <h3 className="font-display font-bold text-5xl md:text-6xl leading-[0.9] mb-4 drop-shadow-sm tracking-tight">
                           {deck.title}
                         </h3>
                         <p className="text-white/90 text-sm font-medium leading-relaxed max-w-[260px]">
                           {deck.description}
                         </p>
                      </div>

                      {/* Bottom: Dynamic Content (Questions or CTA) */}
                      <div className="relative z-10 mt-auto">
                         {!deck.isComingSoon && isActive ? (
                           <div className="bg-white/10 backdrop-blur-md rounded-[2.5rem] p-6 border border-white/20 min-h-[160px] flex flex-col justify-center">
                              <div className="flex items-center gap-2 mb-3 opacity-60">
                                 <RefreshCw size={14} className="animate-spin-slow" />
                                 <span className="text-[10px] font-bold tracking-widest uppercase">Preview Pertanyaan</span>
                              </div>
                              <AnimatePresence mode="wait">
                                <motion.p 
                                  key={questionIndex}
                                  initial={{ opacity: 0, y: 10 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  exit={{ opacity: 0, y: -10 }}
                                  className="text-white font-medium text-xl leading-snug"
                                >
                                  "{deck.questions[questionIndex]}"
                                </motion.p>
                              </AnimatePresence>
                           </div>
                         ) : (
                           // Inactive or Locked State
                           <div className="min-h-[160px] flex items-end">
                              {deck.isComingSoon ? (
                                <div className="w-full py-5 bg-black/20 rounded-[2rem] text-center text-white/60 font-bold text-sm border border-white/5 backdrop-blur-sm">
                                  Segera Hadir
                                </div>
                              ) : (
                                <button className="w-full bg-white text-ryllBlack py-5 rounded-[2rem] font-bold text-base hover:scale-[1.02] active:scale-95 transition-all shadow-xl flex items-center justify-center gap-2">
                                  <Play size={20} fill="currentColor" /> Buka Deck Ini
                                </button>
                              )}
                           </div>
                         )}
                      </div>

                   </div>
                </motion.div>
              );
           })}
        </div>

        {/* Controls */}
        <div className="absolute bottom-0 md:bottom-auto md:top-1/2 left-0 right-0 flex justify-center md:justify-between px-4 md:px-12 pointer-events-none z-50">
           <button 
             onClick={prevCard}
             className="w-14 h-14 rounded-full bg-white text-ryllBlack shadow-xl flex items-center justify-center hover:bg-stone-50 transition-all pointer-events-auto mr-4 md:mr-0 group"
           >
             <ChevronLeft size={28} className="group-hover:-translate-x-1 transition-transform" />
           </button>
           <button 
             onClick={nextCard}
             className="w-14 h-14 rounded-full bg-white text-ryllBlack shadow-xl flex items-center justify-center hover:bg-stone-50 transition-all pointer-events-auto ml-4 md:ml-0 group"
           >
             <ChevronRight size={28} className="group-hover:translate-x-1 transition-transform" />
           </button>
        </div>

      </div>
    </section>
  );
};

export default DeckCarousel;