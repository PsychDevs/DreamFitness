import React from "react";

interface SectionImageProps {
    src: string;
    alt: string;
    className?: string;
}

export function SectionImage({ src, alt, className = "" }: SectionImageProps) {
    return (
        <div className={`w-full flex justify-center my-12 ${className}`}>
            <img
                src={src}
                alt={alt}
                className="rounded-2xl shadow-xl object-cover max-h-72 w-full md:w-3/4 lg:w-2/3 border border-zinc-800"
                loading="lazy"
            />
        </div>
    );
}
