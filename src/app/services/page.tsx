import FooterSection from "@/components/footer";
import { HeroHeader } from "@/components/header";
import PackagesSection from "@/components/packages-section";
import ServicesSection from "@/components/services-section";
import FitnessCtaSection from "@/components/fitness-cta-section";
import { Button } from "@/components/ui/button";

export default function ServicesPage() {
    return (
        <div
            className="min-h-screen w-full flex flex-col"
            style={{
                background: "linear-gradient(135deg, #1d1d1d 0%, #000000 100%)",
            }}
        >
            <HeroHeader />
            <section className="relative flex flex-col items-center justify-center text-center min-h-[60vh] md:min-h-[100vh] py-12 px-4 md:py-0 flex-1">
                <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 drop-shadow-lg uppercase tracking-tight animate-fade-in">
                    Elevate Your Fitness
                </h1>
                <p className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto mb-8 animate-fade-in delay-200">
                    Discover world-class training, expert nutrition, and a
                    community that pushes you to be your best.
                    <br />
                    Choose your path below.
                </p>
                <Button
                    size="lg"
                    className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-7 rounded-xl text-xl shadow-lg animate-fade-in delay-400 border-none cursor-pointer"
                    style={{ backgroundColor: "#ff1400", color: "#fff" }}
                >
                    Start Your Journey
                </Button>
            </section>

            {/* Services Section */}
            <section className="py-16 px-4">
                <ServicesSection />
            </section>

            {/* Packages Section */}
            <section className="py-16 px-4 bg-[#1d1d1d] rounded-3xl mx-2 md:mx-auto max-w-6xl shadow-2xl border border-[#222] animate-fade-in-up">
                <PackagesSection />
            </section>

            <FooterSection />
        </div>
    );
}
