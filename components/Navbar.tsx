import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Menu, X, Sparkles } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  
  const width = useTransform(scrollY, [0, 100], ['90%', '60%']);
  const top = useTransform(scrollY, [0, 100], ['2rem', '1rem']);

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
      <motion.nav
        style={{ width:  window.innerWidth > 768 ? width : '90%', top }}
        className={`fixed left-1/2 -translate-x-1/2 z-[100] transition-all duration-300 ease-out`}
      >
        <div className={`
          relative flex items-center justify-between px-6 py-3 rounded-full
          bg-white/70 backdrop-blur-xl border border-white/20 shadow-lg shadow-black/5
          ${isScrolled ? 'py-3' : 'py-4'}
        `}>
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-ryllOrange rounded-lg flex items-center justify-center rotate-3">
              <span className="text-white font-display font-bold text-lg">R</span>
            </div>
            <span className="font-display font-bold text-xl tracking-tight text-ryllBlack hidden sm:block">RYLL</span>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((item) => (
              <a 
                key={item.label} 
                href={item.href}
                className="text-sm font-medium text-gray-600 hover:text-ryllOrange transition-colors relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-ryllOrange transition-all group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-4">
             <button className="text-sm font-semibold text-ryllBlack hover:text-ryllOrange transition-colors">
              Masuk
             </button>
             <button className="bg-ryllOrange text-white px-5 py-2.5 rounded-full text-sm font-bold shadow-lg shadow-orange-500/20 hover:scale-105 transition-transform flex items-center gap-2">
               Main Sekarang <Sparkles size={14} />
             </button>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden text-ryllBlack p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
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
    </>
  );
};

export default Navbar;