"use client";
import Image from "next/image";
import FadeIn from "@/components/FadeIn";

export default function Hero() {
    return (
        <section className="bg-white py-16">
            <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                {/* Imagen animada */}
                <FadeIn delay={0.1} y={-30}>
                    <div className="relative w-full h-80 md:h-[500px]">
                        <Image
                            src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=800&q=80"
                            alt="Coach profesional"
                            fill
                            className="rounded-lg object-cover shadow-lg"
                            priority
                        />
                    </div>
                </FadeIn>

                {/* Texto animado */}
                <FadeIn delay={0.2} y={30}>
                    <div>
                        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
                            ¿Y si este fuera el momento de crear una vida que realmente ames?
                        </h1>
                        <p className="mt-6 text-lg text-gray-700">
                            Te acompaño a redescubrir tu propósito, elevar tu liderazgo y transformar tu carrera en algo que te llene de verdad.
                        </p>
                        <div className="mt-8">
                            <a
                                href="#contacto"
                                className="inline-block bg-black text-white px-6 py-3 rounded-full text-lg hover:bg-gray-800 transition-all duration-300"
                            >
                                Quiero dar el primer paso
                            </a>
                        </div>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}
