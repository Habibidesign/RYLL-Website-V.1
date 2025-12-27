import React from 'react';
import { Quote, Star } from 'lucide-react';

const reviews = [
  { text: "Rahasia doi kebongkar dalam 5 menit. Nangis.", author: "Sarah A.", role: "USER" },
  { text: "First date gue selamat dari hening cipta.", author: "Dimas S.", role: "USER" },
  { text: "Akhirnya ada game yang nggak cringe. Slay.", author: "Kezia P.", role: "GEN Z" },
  { text: "Lebih murah daripada ke psikolog.", author: "Anton W.", role: "DEV" },
  { text: "Nyokap gue sampe ngakak dong.", author: "Budi", role: "BOOMER" },
  { text: "Valid banget. Gue kena mental.", author: "Putri", role: "SADGIRL" },
];

const ReviewCard: React.FC<{ data: typeof reviews[0] }> = ({ data }) => (
  <div className="w-[300px] h-[400px] bg-[#0A0A0A] rounded-[1.5rem] p-8 flex flex-col justify-between shrink-0 border border-white/5 relative group">

    {/* Decorative corners */}
    <div className="absolute top-4 left-4 text-white/20 group-hover:text-[#FF5F1F] transition-colors"><Quote size={12} className="rotate-180" /></div>
    <div className="absolute bottom-4 right-4 text-white/20 group-hover:text-[#FF5F1F] transition-colors"><Quote size={12} /></div>

    <div className="flex gap-1 justify-center opacity-40 group-hover:opacity-100 transition-opacity">
      {[1, 2, 3, 4, 5].map(i => <Star key={i} size={12} fill="currentColor" className="text-[#FF5F1F]" />)}
    </div>

    <p className="font-display font-bold text-2xl text-center text-white leading-tight uppercase group-hover:scale-105 transition-transform duration-300">
      "{data.text}"
    </p>

    <div className="text-center border-t border-white/10 pt-4">
      <p className="font-display font-bold text-white uppercase">{data.author}</p>
      <p className="font-mono text-[10px] text-white/50 uppercase tracking-widest">{data.role}</p>
    </div>

    {/* Hover effect */}
    <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#FF5F1F]/30 rounded-[1.5rem] transition-colors pointer-events-none" />
  </div>
);

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 md:py-32 bg-[#F2F2F0] border-t border-black/10 overflow-hidden">

      <div className="max-w-[1600px] mx-auto px-6 md:px-12 mb-16 text-center">
        <h2 className="font-display font-bold text-6xl md:text-8xl text-black uppercase tracking-tighter leading-none mb-4">
          Jujurly...
        </h2>
        <p className="font-mono text-xs text-black/60 uppercase tracking-widest">
          Apa kata netizen maha benar
        </p>
      </div>

      {/* Marquee */}
      <div className="flex overflow-hidden group">
        <div className="flex gap-6 animate-marquee shrink-0 pl-6 group-hover:[animation-play-state:paused] will-change-transform">
          {[...reviews, ...reviews].map((review, i) => (
            <ReviewCard key={`a-${i}`} data={review} />
          ))}
        </div>
        <div className="flex gap-6 animate-marquee shrink-0 pl-6 group-hover:[animation-play-state:paused] will-change-transform">
          {[...reviews, ...reviews].map((review, i) => (
            <ReviewCard key={`b-${i}`} data={review} />
          ))}
        </div>
      </div>

    </section>
  );
};

export default Testimonials;