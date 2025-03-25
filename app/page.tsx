import Hero from "@/components/Hero";
import PressLogos from "@/components/PressLogos";
import AboutVision from "@/components/AboutVision";
import CTASection from "@/components/CTASection";
import AboutMe from "@/components/AboutMe";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import SundayScariesCTA from "@/components/SundayScariesCTA";
import ReminderBanner from "@/components/ReminderBanner";
import FinalQuote from "@/components/FinalQuote";
import Contact from "@/components/Contact";

export default function Home() {
    return (
        <>
            <Hero />
            <PressLogos />
            <AboutVision />
            <CTASection />
            <AboutMe />
            <Testimonials />
            <Services />
            <SundayScariesCTA />
            <Contact />

        </>
    );
}
