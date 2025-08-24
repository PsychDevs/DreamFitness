import React from "react";

interface ServiceCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
}

export function ServiceCard({ icon, title, description }: ServiceCardProps) {
    return (
        <div className="rounded-xl border bg-background p-6 shadow-sm flex flex-col gap-4 items-start min-h-[180px]">
            <div className="text-3xl">{icon}</div>
            <h3 className="font-semibold text-lg">{title}</h3>
            <p className="text-sm text-muted-foreground text-left">
                {description}
            </p>
        </div>
    );
}
