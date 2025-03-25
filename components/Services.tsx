// components/Services.tsx
import FadeIn from "@/components/FadeIn";
const services = [
    {
        title: "Mentorías 1:1",
        description:
            "Acompañamiento personalizado para ayudarte a reconectar con tu propósito, tomar decisiones con claridad y liderar tu vida con seguridad.",
    },
    {
        title: "Cursos Online",
        description:
            "Programas a tu ritmo para reinventarte, elevar tu mentalidad y construir un camino profesional alineado con quien realmente eres.",
    },
    {
        title: "Charlas & Eventos",
        description:
            "Conferencias transformadoras para inspirar a más mujeres a liderar con autenticidad y empoderarse desde su historia.",
    },
];


export default function Services() {
    return (
        <section className="py-20 px-4 bg-white">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-12">
                    Como puedo ayudarte
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {services.map((service, idx) => (
                        <FadeIn key={idx} delay={0.1 * idx}>
                        <div key={idx} className="bg-gray-50 p-8 rounded-xl shadow-md hover:shadow-lg transition">
                            <h3 className="text-xl font-bold text-gray-800 mb-4">
                                {service.title}
                            </h3>
                            <p className="text-gray-700 text-base">{service.description}</p>
                        </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
}
