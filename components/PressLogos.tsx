// components/PressLogos.js
import { Newspaper, Mic, Tv, Globe, UserCircle2 } from "lucide-react";

const pressItems = [
    { name: "Líderes Digitales", icon: <UserCircle2 className="w-6 h-6" /> },
    { name: "Revista Emprende", icon: <Newspaper className="w-6 h-6" /> },
    { name: "Podcast Poder Femenino", icon: <Mic className="w-6 h-6" /> },
    { name: "TV Mujer Visionaria", icon: <Tv className="w-6 h-6" /> },
    { name: "Women On Web", icon: <Globe className="w-6 h-6" /> },
];

export default function PressLogos() {
    return (
        <section className="bg-black py-20">
            <div className="max-w-6xl mx-auto px-6 text-center">
                <h3 className="text-2xl md:text-3xl font-bold text-white tracking-wide mb-10 animate-fade-in">
                    Han hablado de mí en...
                </h3>
                <div className="flex flex-wrap justify-center items-center gap-8 md:gap-14 text-white/90">
                    {pressItems.map((item, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center gap-2 hover:text-accent transition-all duration-300"
                        >
                            <div className="bg-white/10 p-4 rounded-full shadow-md hover:scale-105 transition-transform duration-300">
                                {item.icon}
                            </div>
                            <span className="text-sm font-medium tracking-wide">{item.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
