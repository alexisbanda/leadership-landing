// components/Footer.tsx
import Link from "next/link";
import { Instagram, Linkedin } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-black text-white py-14 px-6">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-sm">

                {/* Marca / Bio */}
                <div>
                    <h3 className="text-xl font-bold mb-4 uppercase tracking-wide">DA</h3>
                    <p className="text-gray-400 leading-relaxed">
                        Mentora en liderazgo personal y propósito. Ayudo a mujeres a reconectar con su esencia y transformar su vida profesional.
                    </p>
                </div>

                {/* Navegación */}
                <div className="flex flex-col gap-2">
                    <span className="uppercase font-semibold text-white mb-2">Explora</span>
                    <Link href="#about" className="text-gray-400 hover:text-white transition">Sobre mí</Link>
                    <Link href="#results" className="text-gray-400 hover:text-white transition">Resultados</Link>
                    <Link href="#courses" className="text-gray-400 hover:text-white transition">Cursos</Link>
                    <Link href="#shop" className="text-gray-400 hover:text-white transition">Tienda</Link>
                    <Link href="/blog" className="text-gray-400 hover:text-white transition">Blog</Link>
                </div>

                {/* Redes sociales */}
                <div>
                    <span className="uppercase font-semibold text-white mb-2 block">Conecta</span>
                    <div className="flex gap-4 mt-2">
                        <a href="#" aria-label="Instagram" className="hover:text-white transition">
                            <Instagram size={20} />
                        </a>
                        <a href="#" aria-label="LinkedIn" className="hover:text-white transition">
                            <Linkedin size={20} />
                        </a>
                    </div>
                </div>
            </div>

            <div className="mt-10 text-center text-xs text-gray-500">
                © {new Date().getFullYear()} EG Coaching. Todos los derechos reservados.
            </div>
        </footer>
    );
}
