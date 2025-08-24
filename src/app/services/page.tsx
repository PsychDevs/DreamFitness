import FooterSection from "@/components/footer";
import { HeroHeader } from "@/components/header";
import PackagesSection from "@/components/packages-section";
import ServicesSection from "@/components/services-section";
import FitnessCtaSection from "@/components/fitness-cta-section";
import { SectionImage } from "@/components/ui/section-image";

export default function ServicesPage() {
    return (
        <>
            <HeroHeader />
            <main className="relative bg-background min-h-screen flex flex-col gap-24 pb-24 overflow-x-hidden">
                {/* Decorative background gradients */}
                <div className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 z-0 w-[120vw] h-[60vh] bg-gradient-to-br from-indigo-900/40 via-indigo-700/20 to-transparent rounded-full blur-3xl opacity-60" />
                <div className="pointer-events-none absolute top-1/2 right-0 z-0 w-[60vw] h-[40vh] bg-gradient-to-tl from-indigo-500/20 via-indigo-400/10 to-transparent rounded-full blur-2xl opacity-40" />

                <section className="relative z-10 pt-16 pb-8">
                    <div className="max-w-6xl mx-auto rounded-3xl bg-background/80 shadow-xl border border-zinc-800 px-4 md:px-12 py-12">
                        <PackagesSection />
                        <SectionImage
                            src="/fitness-group.jpg"
                            alt="Group training session"
                        />
                    </div>
                </section>

                <div className="flex justify-center my-8">
                    <div className="h-2 w-32 rounded-full bg-gradient-to-r from-indigo-400/40 via-indigo-600/60 to-indigo-400/40 opacity-60" />
                </div>

                <section className="relative z-10 py-8">
                    <div className="max-w-4xl mx-auto rounded-3xl bg-background/80 shadow-xl border border-zinc-800 px-4 md:px-12 py-12">
                        <FitnessCtaSection />
                        <SectionImage
                            src="/fitness-cta.jpg"
                            alt="Personal coaching"
                            className="my-16"
                        />
                    </div>
                </section>

                <div className="flex justify-center my-8">
                    <div className="h-2 w-32 rounded-full bg-gradient-to-r from-indigo-400/40 via-indigo-600/60 to-indigo-400/40 opacity-60" />
                </div>

                <section className="relative z-10 py-8">
                    <div className="max-w-6xl mx-auto rounded-3xl bg-background/80 shadow-xl border border-zinc-800 px-4 md:px-12 py-12">
                        <ServicesSection />
                        <SectionImage
                            src="/nutrition.jpg"
                            alt="Healthy nutrition guidance"
                            className="my-16"
                        />
                    </div>
                </section>
            </main>
            <FooterSection />
        </>
    );
}
