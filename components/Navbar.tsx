import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ShoppingBag, Gamepad2 } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Shop', href: '#decks' },
    { label: 'Fitur', href: '#features' },
    { label: 'Kata Netizen', href: '#testimonials' },
    { label: 'Tentang Kita', href: '#about' },
  ];

  return (
    <>
      <nav
        className={`
          fixed top-0 left-0 right-0 z-[999] transition-all duration-300
          ${isScrolled ? 'bg-black py-4 shadow-lg text-white' : 'bg-transparent py-6 text-black'}
        `}
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex items-center justify-between relative">

          {/* Logo */}
          <div className="flex items-center gap-2">
            <span className="font-display font-bold text-2xl tracking-tighter hover:text-[#FF5F1F] transition-colors cursor-pointer">
              RYLL
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-bold uppercase tracking-wide hover:text-[#FF5F1F] hover:underline decoration-[#FF5F1F] decoration-2 underline-offset-4 transition-all"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="flex items-center gap-4 md:gap-6">
            {/* Shopping Bag */}
            <button className="hidden md:flex items-center gap-2 text-sm font-bold uppercase tracking-wide group">
              <ShoppingBag size={20} className="group-hover:text-[#FF5F1F] transition-colors" />
              <span className={`text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-bold bg-[#FF5F1F] text-white group-hover:scale-110 transition-transform`}>0</span>
            </button>

            {/* Play Now Button (Desktop) */}
            <button className="hidden md:flex items-center gap-2 bg-[#FF5F1F] text-white px-6 py-2.5 rounded-full font-bold font-mono text-xs uppercase tracking-wider hover:bg-[#1A1A1A] hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 shadow-md shadow-orange-500/20">
              <Gamepad2 size={16} />
              Main Sekarang
            </button>

            {/* Mobile Toggle */}
            <button
              className="md:hidden p-1 hover:text-[#FF5F1F] transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white/95 backdrop-blur-md pt-24 px-6 md:hidden border-t border-black/5"
          >
            <div className="flex flex-col gap-6 items-start h-full pb-10">
              <div className="flex flex-col gap-6 w-full">
                {navLinks.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="text-4xl font-display font-bold text-black hover:text-[#FF5F1F] transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
              </div>

              <div className="mt-auto w-full space-y-4">
                <button className="w-full bg-[#FF5F1F] text-white py-4 rounded-full text-xl font-bold shadow-xl shadow-orange-500/30 uppercase font-display tracking-tight hover:scale-[1.02] transition-transform flex items-center justify-center gap-2">
                  <Gamepad2 size={24} /> Main Sekarang
                </button>
                <button className="w-full bg-black text-white py-4 rounded-full text-sm font-bold shadow-lg uppercase font-mono tracking-widest hover:bg-black/80 transition-colors">
                  Lihat Shop
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;