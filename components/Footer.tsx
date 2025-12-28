import React from 'react';
import { Instagram, Twitter, Linkedin, ArrowUpRight, Ghost, Skull, Heart, Spade, Club, Diamond, Zap, Smile, Crown, Gamepad2 } from 'lucide-react';

const Footer: React.FC = () => {
  // Icons pool for the visual pile
  const icons = [
    Ghost, Skull, Heart, Spade, Club, Diamond, Zap, Smile, Crown, Gamepad2,
    Ghost, Skull, Heart, Spade, Club, Diamond, Zap, Smile, Crown, Gamepad2
  ];

  return (
    <footer className="relative bg-[#0A0A0A] text-white min-h-screen flex flex-col overflow-hidden pt-32 border-t border-white/10">

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col items-center justify-center relative z-10 px-6 pb-48 md:pb-32">
        <div className="text-center">
          <p className="font-mono text-xs md:text-sm text-[#FF5F1F] uppercase tracking-[0.2em] mb-6 animate-pulse">
            Udah, Pulang Sana.
          </p>
          <h1 className="font-display font-bold text-[14vw] md:text-[11vw] leading-[0.8] tracking-tighter uppercase select-none mix-blend-difference">
            Bikin<br />
            Tongkrongan<br />
            <span className="text-outline-white text-transparent lg:text-[#FF5F1F] lg:text-opacity-100 lg:text-fill-current">Lebih Seru</span>
          </h1>
        </div>
      </div>

      {/* Desktop: Grouped Container for Social & Gamepad (Space Between) */}
      {/* Mobile: Absolute positioning preserved via wrapper allowing absolute children */}
      <div className="absolute z-30 inset-x-0 bottom-0 pointer-events-none md:h-auto md:bottom-44 md:left-12 md:right-12 md:flex md:justify-between md:items-center px-6 md:px-0">

        {/* Social Pill */}
        <div className="absolute bottom-52 left-0 right-0 pointer-events-auto md:static md:w-auto">
          <div className="flex items-center justify-between md:justify-start w-full md:w-auto gap-4 bg-white/5 backdrop-blur-xl border border-white/10 p-2 pr-6 rounded-full shadow-2xl shadow-orange-500/5 hover:border-[#FF5F1F]/30 transition-colors duration-500">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="w-10 h-10 md:w-12 md:h-12 bg-white text-black rounded-full flex items-center justify-center hover:bg-[#FF5F1F] hover:text-white hover:scale-110 transition-all duration-300">
              <Instagram size={20} />
            </a>

            <div className="flex flex-1 justify-between md:justify-start items-center md:gap-4 ml-4 md:ml-2">
              <a href="#" className="group flex items-center gap-1 font-mono text-xs uppercase tracking-wider hover:text-[#FF5F1F] transition-colors">
                X <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 -translate-y-1 translate-x-1 transition-all" />
              </a>
              <a href="#" className="group flex items-center gap-1 font-mono text-xs uppercase tracking-wider hover:text-[#FF5F1F] transition-colors">
                LinkedIn <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 -translate-y-1 translate-x-1 transition-all" />
              </a>
              <a href="mailto:hello@ryll.co" className="group flex items-center gap-1 font-mono text-xs uppercase tracking-wider hover:text-[#FF5F1F] transition-colors">
                Contact <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 -translate-y-1 translate-x-1 transition-all" />
              </a>
            </div>
          </div>
        </div>

        {/* Hand Sign / Gamepad */}
        <div className="absolute bottom-72 right-0 z-20 animate-bounce duration-[2000ms] pointer-events-auto md:static">
          <Gamepad2 size={64} md:size={96} strokeWidth={1} className="text-[#FF5F1F]" />
        </div>

      </div>


      {/* The Pile of Icons - Bottom */}
      <div className="relative w-full h-32 md:h-48 mt-auto overflow-hidden z-20">
        <div className="absolute bottom-0 left-0 w-full flex items-end translate-y-[40%]">
          {/* Marquee Effect - Double Track for seamless Infinity Loop */}
          <div className="flex animate-[marquee_40s_linear_infinite] hover:[animation-play-state:paused] shrink-0">
            {[...icons, ...icons].map((Icon, i) => (
              <div
                key={`a-${i}`}
                className="w-24 h-24 md:w-40 md:h-40 bg-[#0A0A0A] border-[3px] md:border-4 border-white rounded-full flex items-center justify-center shrink-0 -ml-6 md:-ml-10 hover:-translate-y-10 hover:border-[#FF5F1F] hover:bg-[#FF5F1F] hover:text-white transition-all duration-300 group cursor-pointer relative hover:z-50"
              >
                <Icon
                  size={40}
                  className="md:w-16 md:h-16 text-white group-hover:text-white transition-colors"
                  strokeWidth={1.5}
                />
              </div>
            ))}
          </div>
          <div className="flex animate-[marquee_40s_linear_infinite] hover:[animation-play-state:paused] shrink-0">
            {[...icons, ...icons].map((Icon, i) => (
              <div
                key={`b-${i}`}
                className="w-24 h-24 md:w-40 md:h-40 bg-[#0A0A0A] border-[3px] md:border-4 border-white rounded-full flex items-center justify-center shrink-0 -ml-6 md:-ml-10 hover:-translate-y-10 hover:border-[#FF5F1F] hover:bg-[#FF5F1F] hover:text-white transition-all duration-300 group cursor-pointer relative hover:z-50"
              >
                <Icon
                  size={40}
                  className="md:w-16 md:h-16 text-white group-hover:text-white transition-colors"
                  strokeWidth={1.5}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar items (Copyright & Top) */}
      <div className="absolute bottom-36 md:bottom-12 left-6 right-6 md:left-12 md:right-12 flex justify-between items-end z-40 pointer-events-none mix-blend-exclusion">
        <p className="font-mono text-[10px] uppercase tracking-widest text-white/50">
          © 2025 RYLL Cards.
        </p>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="pointer-events-auto font-mono text-[10px] uppercase tracking-widest text-white/50 hover:text-[#FF5F1F] transition-colors flex items-center gap-2"
        >
          Back to Top <ArrowUpRight size={10} />
        </button>
      </div>

    </footer>
  );
};

export default Footer;