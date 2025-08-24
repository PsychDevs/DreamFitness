import { Dumbbell, Users, Apple } from "lucide-react";
import { ServiceCard } from "@/components/ui/service-card";

const services = [
    {
        icon: <Dumbbell className="size-8" />,
        title: "Personal Training",
        description:
            "Customized workout plans tailored to your goals and fitness level. Get one-on-one attention and expert guidance.",
    },
    {
        icon: <Users className="size-8" />,
        title: "Group Sessions",
        description:
            "High-energy group workouts that combine motivation and results. Join our community of fitness enthusiasts.",
    },
    {
        icon: <Apple className="size-8" />,
        title: "Nutrition Guidance",
        description:
            "Expert dietary advice for optimal results. Learn how to fuel your body for maximum performance.",
    },
];

export default function ServicesSection() {
    return (
        <section className="py-20 bg-background">
            <div className="container mx-auto px-4 text-center">
                <h2 className="mx-auto my-10 text-4xl font-extrabold md:text-4xl uppercase">
                    Our Services
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-center">
                    {services.map((service, i) => (
                        <ServiceCard key={i} {...service} />
                    ))}
                </div>
            </div>
        </section>
    );
}
