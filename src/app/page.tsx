import FooterSection from "@/components/footer";
import { HeroHeader } from "@/components/header";
import HeroSection from "@/components/hero-section";
import ServicesSection from "@/components/services-section";
import TestimonialSection from "@/components/testimonials";

export default function Home() {
    return (
        <>
            <HeroHeader />
            <HeroSection />
            <ServicesSection />
            <TestimonialSection />
            <FooterSection />
        </>
    );
}
