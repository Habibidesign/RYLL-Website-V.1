import React from 'react';
import { Skull, HeartHandshake, ArrowRight } from 'lucide-react';

const ManifestoCard = () => (
    <div className="w-full max-w-md mx-auto aspect-[3/4] bg-[#0A0A0A] rounded-[1.5rem] p-8 text-white relative overflow-hidden flex flex-col justify-between shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500 border border-white/10 ring-1 ring-white/5 group cursor-default">

        {/* Corner Indices */}
        <div className="absolute top-6 left-6 flex flex-col items-center leading-none opacity-50 group-hover:opacity-100 transition-opacity group-hover:text-[#FF5F1F]">
            <span className="font-display text-2xl font-bold">R</span>
            <Skull size={16} className="mt-1" />
        </div>
        <div className="absolute bottom-6 right-6 flex flex-col items-center leading-none opacity-50 rotate-180 group-hover:opacity-100 transition-opacity group-hover:text-[#FF5F1F]">
            <span className="font-display text-2xl font-bold">R</span>
            <Skull size={16} className="mt-1" />
        </div>

        {/* Background Visuals */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-full h-full bg-gradient-to-br from-[#FF5F1F]/10 to-purple-900/10 opacity-50" />
            <div className="w-48 h-48 bg-[#FF5F1F]/5 rounded-full blur-[60px] group-hover:bg-[#FF5F1F]/10 transition-colors duration-700" />
        </div>

        {/* Content Center */}
        <div className="relative z-10 flex-1 flex flex-col justify-center text-center mt-4">
            <div className="w-16 h-16 bg-white text-black rounded-full flex items-center justify-center mx-auto mb-6 shadow-[0_0_20px_rgba(255,255,255,0.2)] group-hover:text-[#FF5F1F] transition-colors">
                <HeartHandshake size={32} />
            </div>
            <h3 className="font-display font-bold text-3xl mb-4 uppercase leading-none">
                The Ryll<br />Manifesto
            </h3>
            <p className="font-mono text-xs md:text-sm text-white/60 leading-relaxed max-w-[85%] mx-auto uppercase tracking-wide">
                Pertanyaan "Apa kabar?" dilarang keras. Kita di sini buat bikin huru-hara, bukan basa-basi busuk.
            </p>
        </div>

        {/* Bottom Label */}
        <div className="relative z-10 text-center pb-2">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/30 border border-white/10 px-3 py-1 rounded-full bg-white/5 group-hover:border-[#FF5F1F]/50 group-hover:text-[#FF5F1F] transition-colors">
                Est. 2025
            </span>
        </div>
    </div>
);

const StatsCard = () => (
    <div className="w-full aspect-[3/4] bg-[#0A0A0A] rounded-[1.5rem] p-8 text-white relative overflow-hidden flex flex-col justify-between shadow-2xl border border-white/10 ring-1 ring-white/5 group cursor-default">
        {/* Corner Indices */}
        <div className="absolute top-6 left-6 flex flex-col items-center leading-none opacity-50 group-hover:opacity-100 transition-opacity group-hover:text-[#FF5F1F]">
            <span className="font-display text-2xl font-bold">S</span>
            <Skull size={16} className="mt-1" />
        </div>
        <div className="absolute bottom-6 right-6 flex flex-col items-center leading-none opacity-50 rotate-180 group-hover:opacity-100 transition-opacity group-hover:text-[#FF5F1F]">
            <span className="font-display text-2xl font-bold">S</span>
            <Skull size={16} className="mt-1" />
        </div>

        {/* Background Visuals */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-full h-full bg-gradient-to-br from-purple-900/10 to-[#FF5F1F]/10 opacity-50" />
            <div className="w-48 h-48 bg-purple-900/5 rounded-full blur-[60px] group-hover:bg-purple-900/10 transition-colors duration-700" />
        </div>

        {/* Content Center */}
        <div className="relative z-10 flex-1 flex flex-col justify-center text-center mt-4">
            <div className="w-16 h-16 bg-white text-black rounded-full flex items-center justify-center mx-auto mb-6 shadow-[0_0_20px_rgba(255,255,255,0.2)] group-hover:text-purple-700 transition-colors">
                <HeartHandshake size={32} />
            </div>
            <h3 className="font-display font-bold text-3xl mb-4 uppercase leading-none">
                The Ryll<br />Stats
            </h3>
            <div className="flex flex-wrap gap-8 justify-center font-mono text-sm md:text-base text-white/70 leading-relaxed uppercase tracking-wide">
                <div className="flex flex-col gap-2 items-center">
                    <span className="font-display font-bold text-4xl md:text-5xl text-[#FF5F1F]">100+</span>
                    <span className="font-mono text-[10px] md:text-xs uppercase text-white/60 tracking-[0.2em] font-medium">Topik Deep</span>
                </div>
                <div className="flex flex-col gap-2 items-center">
                    <span className="font-display font-bold text-4xl md:text-5xl text-[#FF5F1F]">0%</span>
                    <span className="font-mono text-[10px] md:text-xs uppercase text-white/60 tracking-[0.2em] font-medium">No Filter</span>
                </div>
                <div className="flex flex-col gap-2 items-center">
                    <span className="font-display font-bold text-4xl md:text-5xl text-[#FF5F1F]">4.9</span>
                    <span className="font-mono text-[10px] md:text-xs uppercase text-white/60 tracking-[0.2em] font-medium">Tingkat Chaos</span>
                </div>
            </div>
        </div>

        {/* Bottom Label */}
        <div className="relative z-10 text-center pb-2">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/30 border border-white/10 px-3 py-1 rounded-full bg-white/5 group-hover:border-purple-700/50 group-hover:text-purple-700 transition-colors">
                Data
            </span>
        </div>
    </div>
);

const About: React.FC = () => {
    return (
        <section id="about" className="py-24 md:py-32 bg-[#0A0A0A] border-t border-white/10 overflow-hidden relative">

            <div className="max-w-[1400px] mx-auto px-6 flex flex-col items-center relative z-10">

                {/* 1. The Pitch (Centered Editorial) */}
                <div className="text-center max-w-4xl mx-auto flex flex-col items-center">
                    <div className="flex items-center gap-3 mb-8 justify-center">
                        <span className="w-8 h-[1px] bg-[#FF5F1F]" />
                        <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#FF5F1F]">Filosofi Kita</span>
                        <span className="w-8 h-[1px] bg-[#FF5F1F]" />
                    </div>

                    <h2 className="font-display font-bold text-7xl md:text-8xl lg:text-[120px] text-white leading-[0.85] tracking-tighter mb-8 text-center">
                        MATIIN<br />
                        <span className="text-[#FF5F1F]">BASA-BASI.</span>
                    </h2>

                    <div className="space-y-6 font-mono text-sm md:text-base leading-relaxed text-white/70 max-w-2xl mx-auto text-center">
                        <p>
                            <span className="text-white font-bold">Jujur, kita cape.</span> Liat lo pada main HP pas lagi nongkrong bareng.
                            Nongkrong sekarang tuh basi, superficial banget.
                        </p>
                        <p>
                            RYLL ada buat bikin kekacauan yang seru. Biar lo bisa deep talk beneran, ketawa lepas, atau malah nangis bareng.
                            Ini bukan cuma game. <span className="text-white border-b border-[#FF5F1F]">Ini senjata sosial lo.</span>
                        </p>
                    </div>

                    <div className="mt-10">
                        <a href="#decks" className="group flex items-center gap-3 bg-white/5 hover:bg-white/10 text-white px-8 py-4 rounded-full border border-white/10 transition-all hover:scale-105 hover:border-[#FF5F1F]/50">
                            <span className="font-display font-bold text-lg uppercase tracking-tight">Show The Collection</span>
                            <ArrowRight size={20} className="transform group-hover:translate-x-1 transition-transform" />
                        </a>
                    </div>
                </div>

                {/* 2. The Hand (Visual Fan) */}
                <div className="relative w-full max-w-5xl h-[500px] md:h-[600px] mt-24 md:mt-32 flex justify-center isolate">
                    {/* Glow */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-[#FF5F1F]/10 rounded-full blur-[120px] pointer-events-none z-[-1]" />

                    {/* Stats Card (Left/Back) */}
                    <div className="absolute left-1/2 top-12 z-0 w-[280px] md:w-[360px] transform -translate-x-[70%] md:-translate-x-[65%] rotate-[-12deg] group hover:z-20 hover:rotate-[-6deg] hover:scale-105 transition-all duration-500 ease-out origin-bottom-right">
                        <StatsCard />
                    </div>

                    {/* Manifesto Card (Right/Front) */}
                    <div className="absolute left-1/2 top-0 z-10 w-[280px] md:w-[380px] transform -translate-x-[30%] md:-translate-x-[35%] rotate-[6deg] shadow-2xl group hover:z-30 hover:rotate-0 hover:scale-105 transition-all duration-500 ease-out origin-bottom-left">
                        <ManifestoCard />
                    </div>

                    {/* Sticker Accent */}
                    <div className="absolute top-[-20px] right-[10%] md:right-[20%] z-20">
                        <div className="bg-[#e4ff00] text-black px-4 py-2 font-display font-bold text-sm md:text-xl uppercase border-2 border-white shadow-xl rotate-12 animate-pulse hover:rotate-0 transition-transform cursor-help">
                            Est. 2025
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default About;