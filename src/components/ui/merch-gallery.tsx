import React from "react";

const galleryImages = [
    {
        src: "/track-bottom.jpg",
        alt: "Track Bottom - Dream Fitness Merch",
    },
    {
        src: "/arm-cut-top.jpg",
        alt: "Arm Cut Top - Dream Fitness Merch",
    },
];

export function MerchGallery() {
    return (
        <div className="w-full flex flex-col items-center mb-16">
            <h2 className="text-2xl font-bold mb-6 text-center">Gallery</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full max-w-3xl">
                {galleryImages.map((img, i) => (
                    <div
                        key={i}
                        className="rounded-2xl overflow-hidden shadow-lg bg-muted flex items-center justify-center p-4 hover:scale-105 transition-transform duration-200"
                    >
                        <img
                            src={img.src}
                            alt={img.alt}
                            className="object-contain w-full h-64 sm:h-72 md:h-80 transition-transform duration-200"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
