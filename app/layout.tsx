// app/layout.tsx
import "./globals.css";
import type { ReactNode } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Playfair_Display, Inter } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"], weight: ["400", "700"] });
const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "700"] });

export const metadata = {
    title: "Landing de Liderazgo Digital",
    description: "Transforma tu carrera y lidera con propósito.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="es">
        <body className={`${inter.className} antialiased`}>
        <Header />
        <main className="pt-20">{children}</main>
        <Footer />
        </body>
        </html>
    );
}
