import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Fitur', href: '#features' },
    { label: 'Kartu', href: '#decks' },
    { label: 'Harga', href: '#pricing' },
    { label: 'Tentang', href: '#about' },
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300`}>
        <div 
          className={`
            mx-auto transition-all duration-300 flex items-center justify-between
            ${isScrolled 
              ? 'max-w-7xl mt-4 px-6 py-3 bg-white/90 backdrop-blur-xl border border-white/20 shadow-lg shadow-black/5 rounded-full' 
              : 'w-full px-6 md:px-12 lg:px-20 xl:px-24 py-6 bg-transparent'
            }
          `}
        >
          {/* Logo - Always Dark as it sits on Cream (Left) */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-ryllBlack rounded-lg flex items-center justify-center rotate-3">
              <span className="text-white font-display font-bold text-lg">R</span>
            </div>
            <span className="font-display font-bold text-xl tracking-tight text-ryllBlack hidden sm:block">
              RYLL
            </span>
          </div>

          {/* Desktop Nav - Context Aware Colors */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((item) => (
              <a 
                key={item.label} 
                href={item.href}
                className={`
                  text-sm font-bold transition-colors
                  ${isScrolled 
                    ? 'text-stone-600 hover:text-ryllOrange' 
                    : 'text-stone-600 lg:text-white/90 lg:hover:text-white' // Dark on tablet (cream bg), White on Desktop (orange bg)
                  }
                `}
              >
                {item.label}
              </a>
            ))}

            {/* CTA Section */}
            <div className="flex items-center gap-4">
               <button className={`
                 text-sm font-bold transition-colors
                 ${isScrolled ? 'text-ryllBlack' : 'text-ryllBlack lg:text-white hover:text-white/80'}
               `}>
                Masuk
               </button>
               
               {/* Primary CTA - Black Button as requested */}
               <button className="bg-ryllBlack text-white px-6 py-2.5 rounded-full text-sm font-bold shadow-md hover:scale-105 transition-transform flex items-center gap-2">
                 Main Sekarang
               </button>
            </div>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden text-ryllBlack p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-cream/95 backdrop-blur-xl pt-32 px-6 md:hidden"
          >
            <div className="flex flex-col gap-6 items-center">
              {navLinks.map((item) => (
                <a 
                  key={item.label}
                  href={item.href}
                  className="text-2xl font-display font-bold text-ryllBlack"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
               <button className="w-full bg-ryllOrange text-white py-4 rounded-2xl text-lg font-bold shadow-xl mt-8">
                 Mulai Main Sekarang
               </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;