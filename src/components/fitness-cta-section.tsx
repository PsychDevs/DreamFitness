import { Button } from "@/components/ui/button";

export default function FitnessCtaSection() {
    return (
        <section className="py-16 bg-muted rounded-xl mx-2 md:mx-auto max-w-5xl mt-12">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-2xl md:text-3xl font-bold mb-2">
                    Your Fitness Journey Starts Here
                </h2>
                <p className="text-muted-foreground mb-6">
                    Take the first step towards a stronger, healthier you
                </p>
                <Button className="rounded-xl px-8 py-3 text-base font-semibold shadow-lg bg-indigo-500 hover:bg-indigo-600 text-white border-none focus:ring-2 focus:ring-indigo-400 focus:outline-none transition-all duration-200">
                    Contact Us
                </Button>
            </div>
        </section>
    );
}
