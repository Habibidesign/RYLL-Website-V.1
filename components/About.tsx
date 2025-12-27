import React from 'react';
import { Skull, HeartHandshake, Target } from 'lucide-react';

const ManifestoCard = () => (
    <div className="w-full max-w-md mx-auto aspect-[3/4] bg-[#0A0A0A] rounded-[1.5rem] p-8 text-white relative overflow-hidden flex flex-col justify-between shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500 border border-white/5 ring-1 ring-black/5 group cursor-default">

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
            <div className="w-full h-full bg-gradient-to-br from-[#FF5F1F]/20 to-purple-900/20 opacity-50" />
            <div className="w-48 h-48 bg-[#FF5F1F]/10 rounded-full blur-[60px] group-hover:bg-[#FF5F1F]/20 transition-colors duration-700" />
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
                Est. 2024
            </span>
        </div>
    </div>
);

const About: React.FC = () => {
    return (
        <section id="about" className="py-24 md:py-32 bg-[#F2F2F0] border-t border-black/10">
            <div className="max-w-[1600px] mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Text Content */}
                    <div className="order-2 lg:order-1">
                        <div className="flex items-center gap-2 mb-6">
                            <div className="w-2 h-2 bg-[#FF5F1F] rounded-full animate-pulse" />
                            <span className="font-mono text-xs uppercase tracking-widest text-black/60">Filosofi Kita</span>
                        </div>

                        <h2 className="font-display font-bold text-6xl md:text-8xl text-black leading-[0.85] uppercase tracking-tighter mb-8">
                            Matiin<br />Basa-Basi.
                        </h2>

                        <div className="space-y-6 max-w-lg font-mono text-sm md:text-base text-black/80 leading-relaxed uppercase tracking-wide border-l-2 border-black/10 pl-6 hover:border-[#FF5F1F] transition-colors">
                            <p>
                                Jujur, kita cape liat lo pada main HP pas lagi nongkrong bareng.
                            </p>
                            <p>
                                Nongkrong sekarang tuh basi, superficial banget. Kita mau bikin kekacauan yang seru, biar lo bisa deep talk beneran, ketawa lepas, atau malah nangis bareng (seru kan).
                            </p>
                            <p className="font-bold text-black">
                                Ini bukan cuma game. Ini senjata sosial lo.
                            </p>
                        </div>

                        <div className="mt-12 flex flex-wrap gap-8 md:gap-12">
                            <div className="flex flex-col gap-1">
                                <span className="font-display font-bold text-4xl md:text-5xl text-[#FF5F1F]">100+</span>
                                <span className="font-mono text-xs uppercase opacity-60 tracking-wider">Topik Deep</span>
                            </div>
                            <div className="flex flex-col gap-1">
                                <span className="font-display font-bold text-4xl md:text-5xl text-[#FF5F1F]">0%</span>
                                <span className="font-mono text-xs uppercase opacity-60 tracking-wider">No Filter</span>
                            </div>
                            <div className="flex flex-col gap-1">
                                <span className="font-display font-bold text-4xl md:text-5xl text-[#FF5F1F]">4.9</span>
                                <span className="font-mono text-xs uppercase opacity-60 tracking-wider">Tingkat Chaos</span>
                            </div>
                        </div>
                    </div>

                    {/* Visuals */}
                    <div className="order-1 lg:order-2 relative perspective-1000">
                        {/* Decorative background shape */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-white rounded-full blur-3xl opacity-60 -z-10" />
                        <ManifestoCard />
                    </div>

                </div>
            </div>
        </section>
    )
}

export default About;