"use client";
import Image from "next/image";
import FadeIn from "@/components/FadeIn";

export default function AboutMe() {
    return (
        <section className="py-28 px-4 bg-white">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 items-center gap-12">
                {/* Imagen */}
                <FadeIn delay={0.1}>
                    <div className="w-full flex justify-center">
                        <Image
                            src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80"
                            alt="Eliana, career coach"
                            width={300}
                            height={400}
                            className="rounded-xl shadow-xl object-cover"
                            priority
                        />
                    </div>
                </FadeIn>

                {/* Texto */}
                <FadeIn delay={0.2}>
                    <div className="text-brand-gray">
                        <h2 className="text-3xl md:text-4xl font-playfair mb-6">
                            Soy Diana,
                        </h2>
                        <p className="text-lg leading-relaxed mb-6">
                            Coach de propósito y liderazgo personal. Trabajo con mujeres decididas a dejar de sobrevivir para comenzar a liderar su vida con intención.
                        </p>
                        <p className="text-lg leading-relaxed mb-8">
                            Si te sientes estancada, abrumada o desconectada de lo que realmente deseas, estás en el lugar correcto. He acompañado a cientos de mujeres a reconectar con su esencia, descubrir su voz auténtica y diseñar una vida profesional que sí se sienta suya.
                        </p>
                        <a
                            href="#cta"
                            className="inline-block bg-brand-black text-white px-6 py-3 rounded-full text-base font-medium hover:bg-gray-800 transition"
                        >
                            Quiero empezar mi transformación
                        </a>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}
