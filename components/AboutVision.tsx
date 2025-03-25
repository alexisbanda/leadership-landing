// components/AboutVision.tsx
import Image from "next/image";
import FadeIn from "@/components/FadeIn";

export default function AboutVision() {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                {/* Imagen */}
                <FadeIn delay={0.1}>
                <div className="relative w-full h-96 md:h-[500px]">
                    <Image
                        src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80"
                        alt="Inspiración de vida profesional"
                        fill
                        className="object-cover rounded-xl shadow-md"
                        priority
                    />
                </div>
                </FadeIn>
                {/* Texto */}
                <FadeIn delay={0.2}>
                    <div>
                        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 leading-snug">
                            No viniste a este mundo solo para cumplir horarios.
                        </h2>
                        <p className="mt-6 text-gray-700 text-lg leading-relaxed">
                            Mereces más que esperar al viernes. Creo en una vida diseñada desde tu propósito, no desde la rutina. Acompaño a mujeres decididas a reinventarse, tomar el control de su historia y vivir con intención cada día.
                        </p>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}
