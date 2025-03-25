"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setIsScrolled(window.scrollY > 10);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
                isScrolled
                    ? "bg-white/50 backdrop-blur-md shadow-sm"
                    : "bg-gradient-to-r from-[#fdf8f3] via-[#f9f3ee] to-[#f5ede6] shadow-md"
            }`}
        >
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

                {/* Logo */}
                <div className="text-2xl font-bold text-black tracking-wide uppercase font-display">
                    DA
                </div>

                {/* Navegación */}
                <nav className="hidden md:flex items-center gap-8 text-sm font-semibold uppercase tracking-wide text-gray-800 font-playfair">
                    <NavItem href="#about">Sobre mí</NavItem>
                    <NavItem href="#results">Resultados</NavItem>
                    <NavItem href="#courses">Cursos</NavItem>
                    <NavItem href="#shop">Tienda</NavItem>
                </nav>

                {/* Botón Blog */}
                <Link
                    href="/blog"
                    className="ml-4 inline-block px-5 py-2 border-2 border-black text-black text-sm rounded-full font-bold uppercase tracking-wide hover:bg-black hover:text-white transition"
                >
                    Mi Blog
                </Link>

            </div>
        </header>
    );
}

function NavItem({ href, children }: { href: string; children: React.ReactNode }) {
    return (
        <Link
            href={href}
            className="relative hover:text-black transition-colors duration-200
            after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px]
            after:w-0 hover:after:w-full after:bg-black after:transition-all after:duration-300"
        >
            {children}
        </Link>
    );
}
