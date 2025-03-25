"use client";
import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface FadeInProps {
    children: ReactNode;
    delay?: number;
    y?: number;
    duration?: number;
}

export default function FadeIn({
                                   children,
                                   delay = 0.1,
                                   y = 20,
                                   duration = 0.6,
                               }: FadeInProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay, duration, ease: "easeOut" }}
        >
            {children}
        </motion.div>
    );
}
