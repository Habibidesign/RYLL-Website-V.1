import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

// Updated data with details text to fill whitespace
const testimonials = [
  { 
    id: 1,
    text: "Gara-gara app ini gue tau rahasia pacar gue yang udah dipendem 2 tahun.", 
    details: "Awalnya iseng main pas lagi bosen di cafe, eh pertanyaan 'Deep Talk'-nya mancing banget. Kita jadi ngobrolin hal yang selama ini gak berani diomongin. Endingnya malah makin nempel dan lega banget.",
    author: "Sarah Amalia", 
    role: "Mahasiswa UI", 
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop"
  },
  { 
    id: 2,
    text: "Jujur, nongkrong jadi gak canggung lagi. Life saver banget buat introvert.", 
    details: "Biasanya abis makan tuh diem-dieman main HP masing-masing atau bingung mau bahas apa. Pake RYLL, sekarang malah rebutan mau jawab kartu. Suasana cair instan tanpa harus awkward basa-basi.",
    author: "Dimas Saputra", 
    role: "Creative Lead", 
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop" 
  },
  { 
    id: 3,
    text: "Isinya relate banget sama anak muda Jakarta. Gak cringe kayak game jadul.", 
    details: "Pertanyaannya gak kaku dan bahasanya luwes banget, berasa kayak ngobrol sama temen sendiri. Topiknya update, dari soal karir, mental health, sampe percintaan yang rumit. Deep tapi tetep fun.",
    author: "Kezia Putri", 
    role: "Content Creator", 
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=928&auto=format&fit=crop" 
  },
  { 
    id: 4,
    text: "Gue pake ini pas first date, langsung dapet second date.", 
    details: "Kalo lo bingung mau ngomong apa pas nge-date dan takut kehabisan topik, download ini sekarang. Gue main ini berjam-jam sampe lupa waktu, dan dia bilang ini date paling seru yang pernah dia alamin.",
    author: "Anton Wijaya", 
    role: "Software Engineer", 
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1887&auto=format&fit=crop" 
  }
];

const Testimonials: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkDesktop = () => setIsDesktop(window.innerWidth >= 768);
    checkDesktop();
    window.addEventListener('resize', checkDesktop);
    return () => window.removeEventListener('resize', checkDesktop);
  }, []);

  return (
    <section className="py-24 bg-cream relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
             <span className="text-ryllOrange font-bold tracking-widest text-xs uppercase">Love Letters</span>
          </div>
          <h2 className="font-display font-semibold text-4xl md:text-6xl leading-tight text-ryllBlack mb-4">
            Bacotan Jujur <br />
            User Kita.
          </h2>
          <p className="text-stone-500 max-w-xl mx-auto">
            Review asli dari mereka yang udah nyoba nyairin suasana pake RYLL.
          </p>
        </div>

        {/* 
            Layout: Two Columns with Fixed Height on Desktop 
            Using min-h-[580px] to ensure consistency and prevent layout jumping.
            Right card follows left column's total height structure.
        */}
        <div className="flex flex-col md:flex-row gap-6 justify-center md:h-[580px]">
          
          {/* 
            Left Side: Avatar Selector 
            Desktop: Vertical Stack, Fixed Container Height
            Mobile: Horizontal scroll with Fixed Size items (No resizing)
          */}
          <div className="flex flex-row md:flex-col gap-3 overflow-x-auto md:overflow-hidden pb-4 md:pb-0 scrollbar-hide w-full md:w-[280px] shrink-0 h-auto md:h-full justify-start md:justify-start">
            {testimonials.map((t, index) => {
              const isActive = activeTab === index;
              return (
                <motion.button
                  layout
                  key={t.id}
                  onClick={() => setActiveTab(index)}
                  className={`
                    relative flex-shrink-0 rounded-2xl overflow-hidden transition-all duration-500 border-2
                    ${isActive 
                      ? 'border-ryllOrange opacity-100 grayscale-0 shadow-lg z-10' 
                      : 'border-transparent opacity-40 grayscale hover:opacity-80 hover:grayscale-0'
                    }
                  `}
                  // Fixed Calculations for Desktop: 
                  // Total H = 580px. Gap = 3 * 12 = 36px. 
                  // Inactive = 80px * 3 = 240px. 
                  // Active = 580 - 240 - 36 = 304px.
                  //
                  // Mobile Logic:
                  // Force fixed size (80px) on mobile so it doesn't jump.
                  animate={{
                    width: isDesktop 
                        ? '100%' 
                        : 80, // Mobile: Always 80px square
                    height: isDesktop 
                        ? (isActive ? 304 : 80) 
                        : 80, // Mobile: Always 80px square
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                  <img 
                    src={t.image} 
                    alt={t.author} 
                    className={`w-full h-full object-cover object-top transition-transform duration-700 ${isActive ? 'scale-100' : 'scale-110'}`}
                  />
                  
                  {/* Name Label on Image (Only visible on Active + Desktop for style) */}
                  {isActive && (
                      <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 to-transparent p-4 text-left hidden md:block"
                      >
                          <p className="text-white font-bold text-sm">{t.author}</p>
                          <p className="text-white/80 text-[10px]">{t.role}</p>
                      </motion.div>
                  )}
                </motion.button>
              );
            })}
          </div>

          {/* Right Side: Main Card */}
          <div className="flex-1 w-full max-w-2xl h-full">
            <div className="bg-white rounded-[32px] p-8 md:p-10 border border-stone-200 h-full flex flex-col relative overflow-hidden">
              
              {/* Giant Quote Mark Decoration */}
              <Quote className="absolute top-6 right-6 text-stone-100 w-24 h-24 rotate-12" strokeWidth={0} fill="currentColor" />

              <AnimatePresence mode='wait'>
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="relative z-10 flex flex-col h-full"
                >
                  {/* Top Content */}
                  <div>
                    <div className="flex gap-1 mb-6">
                      {[1,2,3,4,5].map(i => (
                        <Star key={i} size={20} className="fill-ryllOrange text-ryllOrange" />
                      ))}
                    </div>

                    <h3 className="font-display text-2xl md:text-4xl font-bold leading-tight text-ryllBlack mb-6">
                      "{testimonials[activeTab].text}"
                    </h3>

                    <p className="text-stone-500 leading-relaxed text-lg md:text-xl mb-8">
                      {testimonials[activeTab].details}
                    </p>
                  </div>

                  {/* Bottom Content: Pushed to bottom */}
                  <div className="mt-auto pt-6 border-t border-dashed border-stone-100">
                    <div className="flex items-center gap-4">
                       {/* Mobile Only: Small circle avatar */}
                       <div className="md:hidden w-10 h-10 rounded-full overflow-hidden border border-stone-200 shrink-0">
                          <img src={testimonials[activeTab].image} className="w-full h-full object-cover" alt="" />
                       </div>
                       <div className="flex flex-col">
                          <span className="font-bold text-xl text-ryllBlack">{testimonials[activeTab].author}</span>
                          <span className="text-stone-500 text-base font-medium">{testimonials[activeTab].role}</span>
                       </div>
                    </div>
                  </div>

                </motion.div>
              </AnimatePresence>
            </div>
          </div>

        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
            <p className="text-stone-400 text-sm mb-4">Penasaran se-seru apa?</p>
            <button className="px-8 py-3 bg-ryllOrange text-white rounded-full font-bold hover:bg-stone-800 transition-colors shadow-lg shadow-black/20">
                Coba Sekarang
            </button>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;