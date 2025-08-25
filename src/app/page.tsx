import FooterSection from "@/components/footer";
import { HeroHeader } from "@/components/header";
import HeroSection from "@/components/hero-section";
import ServicesSection from "@/components/services-section";
import TestimonialSection from "@/components/testimonials";

export default function Home() {
    return (
        <div
            className="min-h-screen w-full"
            style={{
                background: "linear-gradient(135deg, #1d1d1d 0%, #000000 100%)",
            }}
        >
            <HeroHeader />
            <HeroSection />
            <ServicesSection />
            <TestimonialSection />
            <FooterSection />
        </div>
    );
}
