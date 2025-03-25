"use client";
import FadeIn from "@/components/FadeIn";

export default function CTASection() {
    return (
        <section className="bg-brand-beige py-28 px-4">
            <FadeIn>
                <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg px-8 py-16 text-center">
                    <h2 className="text-[30px] md:text-[42px] font-playfair text-brand.gray leading-snug">
                        La verdad es esta: mereces una vida profesional que te encienda el alma — y puedes crearla.
                    </h2>
                    <p className="mt-6 text-lg text-brand.gray leading-relaxed">
                        Hagámoslo juntas. Estoy aquí para acompañarte a construir lo que sí te hace sentido.
                    </p>
                    <div className="mt-10">
                        <a
                            href="#contacto"
                            className="inline-block bg-black text-white px-8 py-4 rounded-full text-base font-semibold hover:bg-gray-800 transition"
                        >
                            Agendar una llamada de claridad
                        </a>
                    </div>
                </div>
            </FadeIn>
        </section>
    );
}
