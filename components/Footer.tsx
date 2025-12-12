import React from 'react';
import { Instagram, Twitter, Linkedin, ArrowRight, Globe } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-cream py-6 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4">
        
        {/* LEFT CARD: Brand & CTA */}
        <div className="bg-ryllBlack rounded-[2.5rem] p-8 md:p-12 flex flex-col justify-between min-h-[500px] relative overflow-hidden group">
           {/* Background Gradient/Texture */}
           <div className="absolute top-[-20%] right-[-10%] w-96 h-96 bg-ryllOrange/20 blur-[120px] rounded-full pointer-events-none" />
           
           <div className="relative z-10">
             <p className="text-stone-500 text-xs font-bold tracking-[0.2em] uppercase mb-6 flex items-center gap-2">
               <span className="w-2 h-2 rounded-full bg-ryllOrange animate-pulse"></span>
               Join The Circle
             </p>
             <h2 className="font-display font-bold text-4xl md:text-5xl text-white leading-[1.1] max-w-md">
               RYLL: Game kartu sosial <br/>
               <span className="text-stone-500">paling seru.</span>
             </h2>
           </div>

           {/* Big Logo Center */}
           <div className="flex-1 flex items-center justify-center py-12">
              <div className="w-32 h-32 bg-ryllOrange rounded-[2.5rem] flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-2xl shadow-orange-500/20 rotate-3">
                 <span className="font-display font-bold text-7xl text-white">R</span>
              </div>
           </div>

           {/* Buttons */}
           <div className="flex flex-col sm:flex-row gap-4 relative z-10">
              {/* Updated to rounded-full */}
              <button className="flex-1 px-8 py-4 bg-white text-ryllBlack rounded-full font-bold text-sm hover:bg-stone-200 transition-colors flex items-center justify-center gap-2 shadow-lg">
                Download Now
              </button>
              {/* Updated to rounded-full */}
              <button className="flex-1 px-8 py-4 bg-white/10 text-white border border-white/10 rounded-full font-bold text-sm hover:bg-white/20 transition-colors flex items-center justify-center gap-2 backdrop-blur-sm">
                Akses Web App
              </button>
           </div>
        </div>

        {/* RIGHT CARD: Navigation */}
        <div className="bg-ryllBlack rounded-[2.5rem] p-8 md:p-12 flex flex-col justify-between min-h-[500px] relative overflow-hidden">
           
           {/* Decorative Grid Lines */}
           <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
                style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
           </div>

           <div className="relative z-10">
              {/* Top: Legal Links */}
              <div className="flex flex-wrap gap-x-8 gap-y-2 text-[10px] font-bold tracking-widest text-stone-500 uppercase mb-16 border-b border-white/10 pb-8">
                  <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                  <a href="#" className="hover:text-white transition-colors">Terms</a>
                  <a href="#" className="hover:text-white transition-colors">Cookies</a>
                  <a href="#" className="hover:text-white transition-colors">Brand Kit</a>
              </div>

              {/* Middle: Main Links */}
              <div className="space-y-6">
                  <FooterRow title="Product" links={['Overview', 'Fitur Utama', 'Security', 'Cara Main']} />
                  <FooterRow title="Resources" links={['Blog', 'Community', 'Help Center']} />
                  <FooterRow title="Company" links={['About', 'Careers', 'Contact']} />
              </div>
           </div>

           {/* Bottom: Social Icons */}
           <div className="mt-16 flex justify-between items-end relative z-10">
              <div className="flex gap-3">
                 <SocialButton icon={<Instagram size={18}/>} />
                 <SocialButton icon={<Twitter size={18}/>} />
                 <SocialButton icon={<Linkedin size={18}/>} />
                 <SocialButton icon={<Globe size={18}/>} />
              </div>
              <p className="text-stone-600 text-[10px] text-right leading-tight">
                COPYRIGHT © 2024 RYLL.<br/>ALL RIGHTS RESERVED.
              </p>
           </div>
        </div>

      </div>
    </footer>
  );
};

const FooterRow = ({ title, links }: { title: string, links: string[] }) => (
  <div className="flex flex-col md:flex-row md:items-start justify-between border-b border-white/5 pb-4 last:border-0 hover:pl-2 transition-all duration-300 group">
     <h4 className="text-stone-500 text-xs font-bold tracking-widest uppercase mb-2 md:mb-0 md:w-32 pt-1 group-hover:text-ryllOrange transition-colors">{title}</h4>
     <div className="flex flex-col items-start md:items-end gap-2">
        {links.map(link => (
          <a key={link} href="#" className="text-white font-medium text-lg hover:text-ryllOrange transition-colors">
            {link}
          </a>
        ))}
     </div>
  </div>
);

const SocialButton = ({ icon }: { icon: React.ReactNode }) => (
  <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-ryllBlack transition-all hover:scale-110">
    {icon}
  </a>
)

export default Footer;