import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Lock, ArrowRight, Spade, Heart, Club, Diamond } from 'lucide-react';
import { Deck } from '../types';

const decks: Deck[] = [
  {
    id: '01',
    title: 'DEEP TALK',
    description: 'Spill the tea.',
    color: 'bg-purple-600',
    questions: [],
    questionCount: 658
  },
  {
    id: '02',
    title: 'BUCIN ERA',
    description: 'Si paling bucin.',
    color: 'bg-pink-600',
    questions: [],
    questionCount: 420
  },
  {
    id: '03',
    title: 'TOXIC',
    description: 'Khusus yang toxic.',
    color: 'bg-green-500',
    questions: [],
    questionCount: 112
  },
  {
    id: '04',
    title: 'CAREER',
    description: 'Kerja terooos.',
    color: 'bg-blue-600',
    questions: [],
    questionCount: 89
  },
  {
    id: '05',
    title: 'MIDNIGHT',
    description: 'Overthinking mode.',
    color: 'bg-orange-500',
    questions: [],
    questionCount: 333
  },
  {
    id: '06',
    title: '18+ NSFW',
    description: 'Jangan dimainin.',
    color: 'bg-red-600',
    questions: [],
    questionCount: 69,
    isComingSoon: true
  }
];

const DeckCard: React.FC<{ deck: Deck; index: number }> = ({ deck, index }) => {
  const SuitIcon = [Spade, Heart, Club, Diamond][index % 4];

  return (
    <div className="group relative w-[300px] md:w-[340px] aspect-[2.5/3.5] shrink-0 cursor-pointer snap-center">
      {/* Card Container */}
      <div className="w-full h-full bg-[#0A0A0A] rounded-[1.5rem] relative overflow-hidden text-white p-6 flex flex-col justify-between transition-all duration-500 group-hover:-translate-y-4 shadow-lg hover:shadow-2xl ring-1 ring-black/5 border border-white/5">

        {/* Top Index */}
        <div className="flex justify-between items-start opacity-60">
          <div className="flex flex-col items-center leading-none group-hover:text-[#FF5F1F] transition-colors">
            <span className="font-display text-2xl font-bold">{index + 1}</span>
            <SuitIcon size={16} className="mt-1" />
          </div>
          <span className="font-mono text-[10px] uppercase tracking-widest border border-white/20 px-2 py-1 rounded-full group-hover:border-[#FF5F1F] group-hover:text-[#FF5F1F] transition-colors">
            {deck.questionCount} Kartu
          </span>
        </div>

        {/* Central Visual */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className={`w-40 h-40 rounded-full blur-[80px] opacity-40 ${deck.color} group-hover:opacity-60 transition-opacity duration-700`} />
        </div>

        {/* Content */}
        <div className="relative z-10 mt-auto">
          <h3 className="font-display font-bold text-4xl mb-2 leading-none uppercase tracking-tight">
            {deck.title}
          </h3>
          <p className="font-mono text-xs text-white/50 mb-6 uppercase tracking-wide group-hover:text-white transition-colors">
            {deck.description}
          </p>

          {deck.isComingSoon ? (
            <div className="w-full py-3 border border-white/10 rounded-lg flex items-center justify-center gap-2 text-white/40 font-mono text-xs uppercase">
              <Lock size={12} /> Belom Rilis
            </div>
          ) : (
            <button className="w-full py-3 bg-white text-black rounded-lg font-bold font-mono text-xs uppercase hover:bg-[#FF5F1F] hover:text-white transition-all duration-300 flex items-center justify-center gap-2 shadow-lg">
              Sikat Deck <ArrowRight size={12} />
            </button>
          )}
        </div>

        {/* Bottom Index (Inverted) */}
        <div className="absolute bottom-6 right-6 opacity-60 rotate-180 pointer-events-none group-hover:text-[#FF5F1F] transition-colors">
          <div className="flex flex-col items-center leading-none">
            <span className="font-display text-2xl font-bold">{index + 1}</span>
            <SuitIcon size={16} className="mt-1" />
          </div>
        </div>
      </div>
    </div>
  );
};

const DeckCarousel: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section id="decks" className="bg-[#F2F2F0] py-24 md:py-32 overflow-hidden border-t border-black/10">

      {/* Header */}
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 mb-12 flex flex-col md:flex-row items-end justify-between gap-6">
        <div>
          <p className="font-mono text-xs md:text-sm text-[#FF5F1F] uppercase tracking-widest mb-4 font-bold">
            Drop 001
          </p>
          <h2 className="font-display font-bold text-6xl md:text-8xl text-black leading-[0.85] tracking-tighter uppercase">
            Pilih Racun<br />Lo Sekarang.
          </h2>
        </div>
        <div className="hidden md:block">
          <p className="font-mono text-xs text-black/60 max-w-xs text-right uppercase tracking-tight">
            Swipe buat cari masalah<br />(canda masalah).
          </p>
        </div>
      </div>

      {/* Horizontal Scroll */}
      <div
        ref={containerRef}
        className="flex overflow-x-auto pt-10 pb-12 px-6 md:px-12 gap-6 snap-x snap-mandatory scrollbar-hide"
      >
        {decks.map((deck, i) => (
          <DeckCard key={deck.id} deck={deck} index={i} />
        ))}

        {/* Bundle Card */}
        <div className="snap-center shrink-0 w-[300px] md:w-[340px] aspect-[2.5/3.5] flex items-center justify-center">
          <div className="text-center group cursor-pointer w-full h-full rounded-[1.5rem] hover:bg-white/50 transition-colors flex flex-col items-center justify-center">
            <div className="w-24 h-24 bg-black group-hover:bg-[#FF5F1F] rounded-full flex items-center justify-center text-white mb-6 mx-auto group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(255,95,31,0.4)] transition-all duration-300">
              <ArrowRight size={32} />
            </div>
            <h3 className="font-display font-bold text-4xl text-black uppercase mb-2 group-hover:text-[#FF5F1F] transition-colors">
              All Access
            </h3>
            <p className="font-mono text-xs text-black/60 uppercase tracking-widest">
              Ambil Semua Bundle
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default DeckCarousel;