import { PackageCard } from "@/components/ui/package-card";

const packages = [
    {
        title: "Starter Plan",
        description: "Perfect for beginners starting their fitness journey",
        price: "$49",
        features: [
            "2 training sessions per week",
            "Basic workout plans",
            "Nutrition guidelines",
            "Email support",
        ],
    },
    {
        title: "Pro Plan",
        description: "Ideal for dedicated fitness enthusiasts",
        price: "$99",
        features: [
            "4 training sessions per week",
            "Customized workout plans",
            "Detailed nutrition coaching",
            "Priority support",
        ],
    },
    {
        title: "Elite Plan",
        description: "Maximum results with personalized attention",
        price: "$199",
        features: [
            "Unlimited training sessions",
            "Fully customized programs",
            "24/7 personal support",
            "Progress tracking",
        ],
    },
];

export default function PackagesSection() {
    return (
        <section className="py-20 bg-background">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-2">
                    Training Packages
                </h2>
                <p className="text-muted-foreground text-center mb-12">
                    Choose the perfect plan for your fitness journey
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-center">
                    {packages.map((pkg, i) => (
                        <PackageCard key={i} {...pkg} />
                    ))}
                </div>
            </div>
        </section>
    );
}
