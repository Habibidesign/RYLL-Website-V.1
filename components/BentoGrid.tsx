import React from 'react';
import { Star, Zap, Smartphone, Users, Smile, Club, Diamond } from 'lucide-react';

const FeatureCard = ({
   children,
   className = "",
   icon: Icon,
   label,
   index
}: {
   children: React.ReactNode;
   className?: string;
   icon?: any;
   label: string;
   index: string;
}) => (
   <div className={`bg-[#0A0A0A] rounded-[1.5rem] p-8 md:p-10 text-white relative overflow-hidden group border border-white/5 ${className}`}>

      {/* Card Corners */}
      <div className="absolute top-6 left-6 text-white/30 font-mono text-xs uppercase tracking-widest group-hover:text-[#FF5F1F] transition-colors">
         {index}
      </div>
      <div className="absolute top-6 right-6 text-white/30 group-hover:text-[#FF5F1F] transition-colors">
         <Icon size={16} />
      </div>
      <div className="absolute bottom-6 right-6 text-white/10 rotate-180 group-hover:text-[#FF5F1F]/30 transition-colors">
         <Icon size={16} />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-end">
         <div className="mb-auto pt-8">
            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-6 text-white group-hover:bg-[#FF5F1F] group-hover:text-white group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(255,95,31,0.5)] transition-all duration-300">
               <Icon size={24} />
            </div>
         </div>

         <h3 className="font-display font-bold text-3xl md:text-4xl mb-4 leading-tight uppercase">
            {children}
         </h3>
         <p className="font-mono text-sm text-white/50 uppercase tracking-wide leading-relaxed border-t border-white/10 pt-4">
            {label}
         </p>
      </div>

      {/* Hover Gradient */}
      <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-white/5 rounded-full blur-[80px] group-hover:bg-[#FF5F1F]/20 transition-colors pointer-events-none" />
   </div>
);

const BentoGrid: React.FC = () => {
   return (
      <section id="features" className="py-24 md:py-32 bg-white">
         <div className="max-w-[1600px] mx-auto px-6 md:px-12">

            <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
               <h2 className="font-display font-bold text-6xl md:text-8xl text-black leading-[0.85] uppercase tracking-tighter">
                  Bukan Cuma<br />Game Biasa.
               </h2>
               <p className="font-mono text-sm text-black/60 max-w-sm uppercase tracking-wide text-right hidden md:block">
                  Kita bikin Ryll biar lo nggak canggung pas nongkrong. Bye awkward silence.
               </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[400px]">

               {/* Card 1 */}
               <FeatureCard index="01" icon={Users} label="Penyelamat tongkrongan garing." className="md:col-span-2">
                  25k+ Circle<br />Udah Join
               </FeatureCard>

               {/* Card 2 */}
               <FeatureCard index="02" icon={Zap} label="Topik deep hasil AI. Relate parah." className="bg-[#151515]">
                  AI-nya<br />Pinter
               </FeatureCard>

               {/* Card 3 */}
               <FeatureCard index="03" icon={Smartphone} label="Design buat kaum scroll. Sat set.">
                  Jempol<br />Friendly
               </FeatureCard>

               {/* Card 4 - Large */}
               <FeatureCard index="04" icon={Smile} label="Garansi ngakak atau uang kembali (nggak deng)." className="md:col-span-2 relative overflow-hidden">
                  <span className="text-6xl md:text-7xl block mb-2 text-[#FF5F1F]">99%</span>
                  Anti-Krik Guarantee
               </FeatureCard>

            </div>
         </div>
      </section>
   );
};

export default BentoGrid;