import React from "react";

interface PackageCardProps {
    title: string;
    description: string;
    price: string;
    features: string[];
    onClick?: () => void;
}

export function PackageCard({
    title,
    description,
    price,
    features,
    onClick,
}: PackageCardProps) {
    return (
        <div className="rounded-xl border bg-background p-6 shadow-sm flex flex-col gap-4 min-h-[280px]">
            <h3 className="font-bold text-lg mb-1">{title}</h3>
            <p className="text-muted-foreground text-sm mb-2">{description}</p>
            <div className="text-3xl font-bold mb-1">
                {price}
                <span className="text-base font-normal text-muted-foreground">
                    /month
                </span>
            </div>
            <ul className="text-sm text-muted-foreground mb-4 flex flex-col gap-1">
                {features.map((f, i) => (
                    <li key={i} className="flex items-start gap-2">
                        <span className="text-lg">›</span>
                        {f}
                    </li>
                ))}
            </ul>
            <button
                className="mt-auto w-full rounded bg-foreground text-background py-2 font-medium hover:bg-foreground/90 transition"
                onClick={onClick}
            >
                Get Started
            </button>
        </div>
    );
}
