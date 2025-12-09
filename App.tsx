import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BentoGrid from './components/BentoGrid';
import DeckCarousel from './components/DeckCarousel';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-cream font-sans selection:bg-ryllOrange selection:text-white">
      {/* Updated subtle noise using CSS class instead of hardcoded opacity here */}
      <div className="bg-noise fixed inset-0 z-50 pointer-events-none"></div>
      
      <Navbar />
      
      <main>
        <Hero />
        <BentoGrid />
        
        {/* Play Anywhere / Logos Section */}
        <div className="py-12 overflow-hidden bg-ryllOrange border-y border-orange-500">
           <div className="flex gap-12 animate-marquee whitespace-nowrap">
              {[...Array(10)].map((_, i) => (
                <span key={i} className="text-4xl font-display font-bold mx-8 text-white">
                  MAIN DI MANA AJA. GAK PAKE LOGIN. ASYIK TERUS.
                </span>
              ))}
           </div>
        </div>

        <DeckCarousel />
        <Testimonials />
        <Pricing />
      </main>

      <Footer />
    </div>
  );
};

export default App;