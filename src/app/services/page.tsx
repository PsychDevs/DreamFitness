import FooterSection from "@/components/footer";
import { HeroHeader } from "@/components/header";
import PackagesSection from "@/components/packages-section";
import ServicesSection from "@/components/services-section";
import FitnessCtaSection from "@/components/fitness-cta-section";

export default function ServicesPage() {
    return (
        <>
            <HeroHeader />
            <main className="bg-background min-h-screen">
                <PackagesSection />
                <FitnessCtaSection />
                <ServicesSection />
            </main>
            <FooterSection />
        </>
    );
}
