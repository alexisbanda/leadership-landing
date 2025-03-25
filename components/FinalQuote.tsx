// components/FinalQuote.tsx
import Image from "next/image";
import FadeIn from "@/components/FadeIn";

export default function FinalQuote() {
    return (
        <FadeIn>
        <section className="py-20 px-4 bg-neutral-100">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                {/* Imagen */}
                <div className="relative w-full h-80 md:h-[500px]">
                    <Image
                        src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80"
                        alt="Coach final portrait"
                        fill
                        className="object-cover rounded-xl shadow-lg"
                    />
                </div>

                {/* Frase */}
                <div className="text-gray-800">
                    <p className="text-xl md:text-2xl font-medium mb-6 leading-relaxed">
                        Creo profundamente que ninguna mujer debería resignarse a una vida que no la hace vibrar.
                    </p>
                    <p className="text-xl md:text-2xl font-medium mb-8 leading-relaxed">
                        Hay otro camino. Uno donde te eliges, te lideras y te expandes. Y estoy aquí para acompañarte a transitarlo.
                    </p>
                    <a
                        href="#cta"
                        className="inline-block bg-black text-white px-6 py-3 rounded-full text-lg hover:bg-gray-800 transition"
                    >
                        Tomar ese camino juntas
                    </a>
                </div>
            </div>
        </section>
        </ FadeIn>
            );
}
