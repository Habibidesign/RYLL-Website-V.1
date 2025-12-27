import React from 'react';
import { Check, X, Crown, Ghost } from 'lucide-react';

const PricingCard = ({
   title,
   price,
   features,
   isPremium = false
}: {
   title: string;
   price: string;
   features: { label: string; included: boolean }[];
   isPremium?: boolean;
}) => (
   <div className={`
     relative rounded-[2rem] p-8 md:p-12 flex flex-col items-start text-left h-full border-2 transition-all duration-300
     ${isPremium ? 'bg-[#0A0A0A] border-[#0A0A0A] text-white shadow-2xl shadow-orange-500/10' : 'bg-white border-black text-black hover:border-[#FF5F1F]'}
  `}>
      {/* Card Header - Icon Left, Label Right */}
      <div className="w-full flex justify-between items-start mb-8">
         <div className={`p-4 rounded-full ${isPremium ? 'bg-[#FF5F1F] text-white shadow-[0_0_15px_rgba(255,95,31,0.4)]' : 'bg-black/5 text-black'}`}>
            {isPremium ? <Crown size={32} /> : <Ghost size={32} />}
         </div>
         <div className="font-mono text-xs uppercase tracking-[0.2em] opacity-60 border border-current px-3 py-1 rounded-full mt-2">
            {isPremium ? 'Full Access' : 'Basic'}
         </div>
      </div>

      {/* Title & Price - Left Aligned */}
      <div className="mb-10 flex flex-col items-start w-full">
         <h3 className="font-display font-bold text-4xl mb-2 uppercase tracking-tight">{title}</h3>
         <div className="flex items-baseline gap-2">
            <span className={`font-display font-bold text-6xl tracking-tighter ${isPremium ? 'text-[#FF5F1F]' : ''}`}>{price}</span>
            {price !== 'Free' && <span className="font-mono text-sm opacity-60">/BULAN</span>}
         </div>
      </div>

      {/* Features List - Left Aligned */}
      <ul className="space-y-4 mb-12 flex-1 w-full">
         {features.map((f, i) => (
            <li key={i} className={`flex items-center gap-3 font-mono text-sm uppercase ${f.included ? 'opacity-100' : 'opacity-40 line-through'}`}>
               <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${f.included ? (isPremium ? 'bg-[#FF5F1F] text-white' : 'bg-black text-white') : 'bg-transparent border border-current'}`}>
                  {f.included ? <Check size={10} strokeWidth={4} /> : <X size={10} />}
               </div>
               <span>{f.label}</span>
            </li>
         ))}
      </ul>

      {/* CTA */}
      <button className={`
        w-full py-5 rounded-xl font-bold font-mono text-sm uppercase tracking-wider border-2 transition-all hover:-translate-y-1 shadow-lg
        ${isPremium
            ? 'bg-[#FF5F1F] text-white border-[#FF5F1F] hover:bg-[#FF5F1F] hover:shadow-[0_0_30px_rgba(255,95,31,0.6)]'
            : 'bg-black text-white border-black hover:bg-white hover:text-black'}
     `}>
         {isPremium ? 'Gas Premium' : 'Mulai Gratisan'}
      </button>
   </div>
);

const Pricing: React.FC = () => {
   return (
      <section id="pricing" className="py-24 md:py-32 bg-white border-t border-black/10">
         <div className="max-w-[1400px] mx-auto px-6 md:px-12">

            {/* Header Section - Centered */}
            <div className="flex flex-col items-center text-center mb-20 gap-6">
               <h2 className="font-display font-bold text-6xl md:text-8xl text-black leading-[0.85] uppercase tracking-tighter">
                  Bayar Kalo<br />Mampu.
               </h2>
               <p className="font-mono text-xs md:text-sm text-black/60 max-w-lg uppercase tracking-wide">
                  Kalo lo sultan, bantu server kita idup. Kalo lagi kanker, yaudah main yang gratisan aja.
               </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">

               <PricingCard
                  title="Si Numpang Lewat"
                  price="Gratis"
                  features={[
                     { label: "3 Deck Dasar (Lumayan)", included: true },
                     { label: "Iklan Mengganggu (Nasib)", included: true },
                     { label: "Deck Premium (Mimpi)", included: false },
                     { label: "Update Baru", included: false },
                  ]}
               />

               <PricingCard
                  title="Anak Sini"
                  price="29rb"
                  isPremium={true}
                  features={[
                     { label: "Buka Semua 50+ Deck", included: true },
                     { label: "Bebas Iklan Selamanya", included: true },
                     { label: "Akses Deck Premium", included: true },
                     { label: "Update Tiap Minggu", included: true },
                  ]}
               />

            </div>

         </div>
      </section>
   );
};

export default Pricing;