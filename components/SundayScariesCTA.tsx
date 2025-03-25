// components/SundayScariesCTA.tsx
import FadeIn from "@/components/FadeIn";
export default function SundayScariesCTA() {
    return (
        <FadeIn>
            <section className="bg-brand-beige py-20 px-4 text-center">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-semibold text-gray-800">
                        ¿Angustia de domingo?
                    </h2>
                    <p className="mt-4 text-lg text-gray-700 leading-relaxed">
                        Si cada domingo sientes ansiedad por volver a tu semana, eso no es normal. Es una señal de que mereces algo diferente.
                    </p>
                    <p className="mt-4 text-lg text-gray-700 leading-relaxed">
                        Salir de ese ciclo no es una locura. Es una decisión valiente y alineada con la vida que realmente deseas.
                    </p>
                </div>
            </section>
        </FadeIn>
    );
}
