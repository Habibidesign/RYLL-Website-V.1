import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
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
        <About />
        <BentoGrid />

        {/* Marquee Removed - Logos integrated into Hero */}

        <DeckCarousel />
        <Testimonials />
        <Pricing />
      </main>

      <Footer />
    </div>
  );
};

export default App;