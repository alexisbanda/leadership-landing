// components/Testimonials.tsx
import Image from "next/image";
import FadeIn from "@/components/FadeIn";

const testimonials = [
    {
        name: "Laura M.",
        quote: "Después de trabajar con Eliana dejé un trabajo que me drenaba y lancé mi primer programa online. Hoy vivo de lo que amo.",
        avatar: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=80&q=80",
    },
    {
        name: "Jessica K.",
        quote: "Eliana me ayudó a reconectar conmigo misma. Volví a creer en mi voz, lancé mi marca personal y recuperé mi energía.",
        avatar: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=80&q=80",
    },
    {
        name: "Maya R.",
        quote: "Gracias a su mentoría tomé decisiones que había postergado por años. Hoy me siento en paz y en propósito.",
        avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=80&q=80",
    },
];


export default function Testimonials() {
    return (
        <section className="py-20 px-4 bg-brand-beige">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-12">
                    Lo que dicen mis clientes
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((t, idx) => (
                        <FadeIn key={idx} delay={0.1 * idx}>
                        <div
                            key={idx}
                            className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center"
                        >
                            <div className="relative w-16 h-16 mb-4">
                                <Image
                                    src={t.avatar}
                                    alt={t.name}
                                    fill
                                    className="rounded-full object-cover"
                                />
                            </div>
                            <p className="text-gray-700 text-sm italic">"{t.quote}"</p>
                            <p className="mt-4 font-semibold text-gray-900">{t.name}</p>
                        </div>
                        </FadeIn>

                    ))}
                </div>
            </div>
        </section>
    );
}
