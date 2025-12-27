import React, { useState } from 'react';
import { Sparkles, Zap, Heart, Skull, Ghost, Club, Diamond, Spade, RotateCw } from 'lucide-react';

const cards = [
  {
    id: '01',
    label: 'DEEP TALK',
    suit: <Spade size={16} className="fill-current" />,
    val: 'A',
    visual: 'bg-purple-600',
    desc: 'Spill rahasia lo',
    question: "Apa ketakutan terbesar lo yang gak pernah lo ceritain ke siapa-siapa?"
  },
  {
    id: '02',
    label: 'BUCIN ERA',
    suit: <Heart size={16} className="fill-current" />,
    val: 'K',
    visual: 'bg-pink-600',
    desc: 'Cinta itu buta',
    question: "Kalo doi selingkuh tapi nyesel sambil nangis darah, maafin or nah? Alesannya?"
  },
  {
    id: '03',
    label: 'TOXIC',
    suit: <Diamond size={16} className="fill-current" />,
    val: 'Q',
    visual: 'bg-green-500',
    desc: 'Red flag berjalan',
    question: "Sebut satu sifat temen di sebelah lo yang paling bikin lo elus dada."
  },
  {
    id: '04',
    label: 'CAREER',
    suit: <Club size={16} className="fill-current" />,
    val: 'J',
    visual: 'bg-blue-600',
    desc: 'Budak korporat',
    question: "Gaji gede tapi mental breakdance, atau gaji UMR tapi idup santuy? Pilih."
  },
  {
    id: '05',
    label: 'MIDNIGHT',
    suit: <Sparkles size={16} className="fill-current" />,
    val: '10',
    visual: 'bg-orange-500',
    desc: 'Galau jam 3 pagi',
    question: "Lo sebenernya bahagia, atau cuma pura-pura sibuk biar gak ngerasa sepi?"
  },
  {
    id: '06',
    label: 'GHOSTING',
    suit: <Ghost size={16} className="fill-current" />,
    val: '9',
    visual: 'bg-gray-500',
    desc: 'Ilang tanpa jejak',
    question: "Kenapa lo ghosting orang terakhir yang lo deketin? Jujur, jangan klise."
  },
  {
    id: '07',
    label: 'DIGITAL',
    suit: <Zap size={16} className="fill-current" />,
    val: '8',
    visual: 'bg-cyan-500',
    desc: 'Full senyum bestie',
    question: "Buka galeri HP lo, foto ke-10 adalah gambaran masa depan lo. Spill fotonya."
  },
];

const PlayingCard: React.FC<{ data: typeof cards[0] }> = ({ data }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="group/card w-[240px] md:w-[280px] h-[336px] md:h-[392px] shrink-0 cursor-pointer perspective-1000 z-10"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div
        className={`relative w-full h-full transition-all duration-700 preserve-3d ${isFlipped ? 'rotate-y-180' : ''}`}
      >

        {/* === FRONT SIDE === */}
        <div className="absolute inset-0 backface-hidden bg-[#0A0A0A] rounded-[1rem] shadow-xl">
          {/* Card Label */}
          <div className="absolute -top-8 left-0 right-0 flex justify-between items-center text-[10px] font-mono uppercase tracking-widest text-black/60 border-b border-black/10 pb-2 mx-2">
            <span className="group-hover/card:text-[#FF5F1F] transition-colors">{data.label}</span>
            <span>{data.id}</span>
          </div>

          <div className="w-full h-full relative overflow-hidden text-white p-5 flex flex-col justify-between ring-1 ring-black/5 rounded-[1rem]">

            {/* Top Index */}
            <div className="flex flex-col items-center leading-none opacity-60 group-hover/card:opacity-100 transition-opacity self-start group-hover/card:text-[#FF5F1F]">
              <span className="font-display text-2xl font-bold">{data.val}</span>
              <span className="mt-1">{data.suit}</span>
            </div>

            {/* Center Visual */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
              {/* Background Blur - Absolutely positioned to not disrupt flex layout */}
              <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 md:w-32 md:h-32 rounded-full blur-[40px] md:blur-[60px] opacity-50 ${data.visual} group-hover/card:scale-150 group-hover/card:opacity-70 transition-all duration-700`} />

              {/* Visual Cue Instruction - Now perfectly centered */}
              <div className="relative z-10 flex flex-col items-center justify-center gap-2 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 translate-y-4 group-hover/card:translate-y-0 text-center">
                <div className="bg-[#FF5F1F]/20 p-3 rounded-full backdrop-blur-sm animate-pulse">
                  <RotateCw size={24} className="text-[#FF5F1F]" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#FF5F1F]">
                  Tap to Flip
                </span>
              </div>
            </div>

            {/* Bottom Index (Rotated) */}
            <div className="flex flex-col items-center leading-none opacity-60 group-hover/card:opacity-100 transition-opacity rotate-180 self-end group-hover/card:text-[#FF5F1F]">
              <span className="font-display text-2xl font-bold">{data.val}</span>
              <span className="mt-1">{data.suit}</span>
            </div>
          </div>

          {/* Hover Description (Outside Card) */}
          <p className="absolute -bottom-8 left-0 right-0 text-xs font-medium text-black/50 text-center leading-tight opacity-0 group-hover/card:opacity-100 transition-opacity duration-300">
            {data.desc}
          </p>
        </div>

        {/* === BACK SIDE (Question) === */}
        <div className="absolute inset-0 backface-hidden rotate-y-180 bg-white rounded-[1rem] shadow-xl">
          {/* Card Label Back */}
          <div className="absolute -top-8 left-0 right-0 flex justify-between items-center text-[10px] font-mono uppercase tracking-widest text-[#FF5F1F] border-b border-[#FF5F1F]/30 pb-2 mx-2">
            <span>QUESTION</span>
            <span>{data.id}</span>
          </div>

          <div className="w-full h-full relative overflow-hidden text-black p-6 flex flex-col justify-between ring-1 ring-black/5 border-2 border-[#FF5F1F] rounded-[1rem]">

            {/* Top Index Back */}
            <div className="flex justify-start items-center gap-2 opacity-30">
              <span className="font-display text-xl font-bold">{data.val}</span>
              <span className="font-mono text-[10px]">RYLL</span>
            </div>

            {/* Question Text */}
            <div className="flex-1 flex items-center justify-center">
              <p className="font-display font-bold text-xl md:text-2xl text-center leading-tight uppercase text-[#1A1A1A]">
                "{data.question}"
              </p>
            </div>

            {/* Bottom Branding */}
            <div className="flex justify-center opacity-100">
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#FF5F1F] border border-[#FF5F1F]/20 px-2 py-1 rounded-full">
                Giliran Lo
              </span>
            </div>

            {/* Decorative Background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-[#FF5F1F] blur-[80px] opacity-10 pointer-events-none" />
          </div>
        </div>

      </div>
    </div>
  );
};

const Hero: React.FC = () => {
  return (
    <section className="relative w-full min-h-[100dvh] bg-[#F2F2F0] text-black overflow-hidden flex flex-col justify-between pt-16 md:pt-32 pb-8 md:pb-12">

      {/* Top Section: Marquee */}
      <div className="w-full relative z-10 flex-1 flex flex-col justify-center py-4 md:py-12">
        {/* Marquee Container */}
        <div className="flex overflow-hidden group">
          {/* 
                NOTE: 'will-change-transform' is kept here on the parent for smooth scrolling,
                but removed from individual cards to ensure flipping works.
             */}
          <div className="flex gap-6 md:gap-8 animate-marquee min-w-full shrink-0 pl-6 md:pl-8 py-10 group-hover:[animation-play-state:paused] will-change-transform">
            {[...cards, ...cards].map((card, i) => (
              <PlayingCard key={`a-${i}`} data={card} />
            ))}
          </div>
          <div className="flex gap-6 md:gap-8 animate-marquee min-w-full shrink-0 pl-6 md:pl-8 py-10 group-hover:[animation-play-state:paused] will-change-transform">
            {[...cards, ...cards].map((card, i) => (
              <PlayingCard key={`b-${i}`} data={card} />
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Section: Typography */}
      <div className="w-full max-w-[1600px] mx-auto px-6 md:px-12 mt-4 relative z-20">

        <div className="flex flex-col md:flex-row items-end justify-between gap-6 mb-4 md:mb-6 border-t border-black/10 pt-6">
          <div className="max-w-xs hidden md:block">
            <p className="text-xs md:text-sm font-medium text-black/60 leading-relaxed font-mono uppercase tracking-tight">
              Bikin tongkrongan lo nggak garing lagi.<br />Jujurly seru abis.
            </p>
          </div>

          <div className="text-center w-full md:w-auto">
            <p className="text-sm md:text-lg font-display font-medium text-black flex items-center justify-center gap-2">
              The Power of
            </p>
          </div>

          <div className="max-w-xs text-right hidden md:block">
            <p className="text-xs md:text-sm font-medium text-black/60 leading-relaxed font-mono uppercase tracking-tight">
              Kartu wajib buat lo yang<br />anti 'krik krik' club.
            </p>
          </div>
        </div>

        <h1 className="text-[15vw] md:text-[13vw] leading-[0.8] font-display font-bold text-center tracking-tighter uppercase text-black mix-blend-multiply select-none">
          CIRCLE LO
        </h1>
      </div>

    </section>
  );
};

export default Hero;