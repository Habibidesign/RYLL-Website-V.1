import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { RefreshCcw, Layers, Lock } from 'lucide-react';
import { Deck } from '../types';

// Data derived from user request
const decks: Deck[] = [
  {
    id: 'd1',
    title: 'DEEP TALK',
    description: 'Buka hati tanpa baper.',
    color: '#FF5F1F',
    gradient: 'from-orange-600 to-red-600',
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
    color: '#bef264',
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
  return (
    <section id="decks" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 mb-8 flex flex-col md:flex-row justify-between items-center md:items-end text-center md:text-left">
         <div>
            <span className="text-ryllOrange font-bold tracking-widest text-xs uppercase mb-4 block">
              KOLEKSI DECK
            </span>
            <h2 className="font-display font-semibold text-4xl md:text-6xl mb-4 leading-tight text-ryllBlack">Pilih Mood Lo.</h2>
            <p className="text-stone-500 text-lg">Swipe buat pilih mood nongkrong lo.</p>
         </div>
         <div className="hidden md:flex gap-2">
            <span className="text-sm font-mono text-stone-400">GESER →</span>
         </div>
      </div>

      {/* 
          FIX: Added 'py-16' instead of 'pb-12' to give vertical breathing room 
          for the 3D rotation so corners don't get clipped by overflow-x-auto.
      */}
      <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 px-6 py-16 scrollbar-hide">
        {decks.map((deck) => (
          <DeckCard key={deck.id} deck={deck} />
        ))}
        {/* Spacer for scroll */}
        <div className="w-6 shrink-0" />
      </div>
    </section>
  );
};

const DeckCard: React.FC<{ deck: Deck }> = ({ deck }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    if (deck.isComingSoon) return;
    setIsFlipped(!isFlipped);
  };

  return (
    <div 
      className={`relative shrink-0 w-[85vw] md:w-[380px] h-[520px] snap-center perspective-1000 group ${deck.isComingSoon ? 'cursor-not-allowed' : 'cursor-pointer'}`}
      onClick={handleFlip}
    >
      <motion.div
        className="relative w-full h-full preserve-3d"
        // FIX: Removed CSS transition-transform to avoid conflict with Framer Motion
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }} // Smooth "spring-like" ease
        style={{ transformStyle: 'preserve-3d' }} // Explicitly ensure 3D context
      >
        {/* Front */}
        <div className={`absolute inset-0 w-full h-full rounded-[32px] bg-gradient-to-br ${deck.gradient || 'from-stone-800 to-black'} p-8 flex flex-col justify-between text-white shadow-xl group-hover:shadow-2xl backface-hidden border border-white/10`}>
          
          <div className="flex justify-between items-start relative z-10">
             <div className="bg-white/20 backdrop-blur-md px-3 py-1.5 rounded-full flex items-center gap-2 text-xs font-bold tracking-widest uppercase border border-white/20">
               {deck.isComingSoon ? <Lock size={12} /> : <Layers size={12} />}
               {deck.questionCount} Kartu
             </div>
             {!deck.isComingSoon && <RefreshCcw size={20} className="text-white/70" />}
          </div>
          
          <div className="relative z-10">
            <h3 className="font-display font-bold text-5xl mb-4 leading-none tracking-tight">{deck.title}</h3>
            <p className="text-white/90 text-lg font-medium">{deck.description}</p>
          </div>

          <div className={`w-full text-center py-4 rounded-2xl backdrop-blur-sm text-sm font-semibold border border-white/20 transition-colors relative z-10 ${deck.isComingSoon ? 'bg-white/10 cursor-not-allowed text-white/80' : 'bg-white/10 hover:bg-white/20'}`}>
             {deck.isComingSoon ? 'Segera Hadir' : 'Tap buat Intip'}
          </div>
        </div>

        {/* Back */}
        <div className="absolute inset-0 w-full h-full rounded-[32px] bg-white border border-stone-200 p-8 flex flex-col shadow-xl backface-hidden rotate-y-180">
           <div className="mb-6 pb-6 border-b border-stone-100 flex justify-between items-center">
             <span className="text-stone-400 font-mono text-xs font-bold tracking-widest">PREVIEW</span>
             <div className={`w-4 h-4 rounded-full bg-gradient-to-br ${deck.gradient}`} />
           </div>
           
           <div className="flex-1 flex flex-col gap-3 overflow-y-auto scrollbar-hide">
             {deck.questions.map((q: string, i: number) => (
               <div key={i} className="bg-stone-50 p-4 rounded-xl border border-stone-100 text-ryllBlack font-medium text-sm leading-relaxed">
                 "{q}"
               </div>
             ))}
           </div>
           
           <div className="mt-6 pt-4 text-center text-stone-400 text-xs font-medium border-t border-stone-50">
             Tap lagi buat tutup
           </div>
        </div>
      </motion.div>
    </div>
  );
};

export default DeckCarousel;