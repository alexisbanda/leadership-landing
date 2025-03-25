// components/ReminderBanner.tsx
export default function ReminderBanner() {
    return (
        <section className="bg-white py-16 px-4 text-center">
            <div className="max-w-3xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 leading-snug">
                    Necesitabas una señal... <br /> Aquí está: sí mereces algo mejor.
                </h2>
                <div className="mt-6">
                    <a
                        href="#cta"
                        className="inline-block bg-black text-white px-6 py-3 rounded-full text-lg hover:bg-gray-800 transition"
                    >
                        Trabajemos juntas
                    </a>
                </div>
            </div>
        </section>
    );
}
