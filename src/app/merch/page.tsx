"use client";

import FooterSection from "@/components/footer";
import { HeroHeader } from "@/components/header";
import React, { useState } from "react";
import { MerchProductCard } from "@/components/ui/merch-product-card";
import { MerchOrderForm } from "@/components/ui/merch-order-form";

const products = [
    {
        name: "Track Bottom",
        description:
            "Comfortable, stylish, and perfect for workouts or casual wear.",
        price: "$39",
        image: "/track-bottom.jpeg",
        highlights: [
            "Premium stretch fabric",
            "Tapered fit for style & movement",
            "Breathable & sweat-wicking",
            "Unisex sizing",
        ],
    },
    {
        name: "Arm Cut Top",
        description: "Show off your gains with this breathable, athletic top.",
        price: "$29",
        image: "/arm-cut-top.jpg",
        highlights: [
            "Ultra-lightweight & cool",
            "Freedom of movement",
            "Bold, athletic cut",
            "Unisex sizing",
        ],
    },
];

export default function MerchPage() {
    const [selected, setSelected] = useState(products[0].name);
    const selectedProduct =
        products.find((p) => p.name === selected) || products[0];
    return (
        <div
            className="min-h-screen w-full"
            style={{
                background: "linear-gradient(135deg, #1d1d1d 0%, #000000 100%)",
            }}
        >
            <HeroHeader />
            <main className="flex flex-col items-center py-0">
                {/* Hero Merch Banner */}
                <section className="w-full flex flex-col items-center justify-center min-h-[100vh] py-16 md:py-24 mb-0">
                    <h1 className="text-5xl md:text-6xl font-extrabold text-white text-center tracking-tight uppercase mb-4 drop-shadow-lg">
                        Dream Fitness Merch
                    </h1>
                    <p className="text-white text-xl md:text-2xl mb-8 text-center max-w-2xl mx-auto">
                        Limited edition apparel for athletes & dreamers. Shop
                        the look. Own the vibe.
                    </p>
                </section>

                {/* Product Highlights & Selection */}
                <section className="max-w-6xl w-full mx-auto px-4 py-16 flex flex-col gap-16">
                    <div className="flex flex-col md:flex-row gap-12 items-center justify-center">
                        <div className="flex-1 flex flex-col gap-8">
                            <div className="flex flex-col gap-4">
                                <h2 className="text-3xl font-bold text-white mb-2">
                                    {selectedProduct.name}
                                </h2>
                                <p className="text-muted-foreground text-lg mb-2">
                                    {selectedProduct.description}
                                </p>
                                <ul className="list-disc pl-6 text-white text-base space-y-1">
                                    {selectedProduct.highlights?.map((h, i) => (
                                        <li key={i}>{h}</li>
                                    ))}
                                </ul>
                                <div
                                    className="text-3xl font-extrabold text-red-600 mt-4"
                                    style={{ color: "#ff1400" }}
                                >
                                    {selectedProduct.price}
                                </div>
                            </div>
                            <div className="flex gap-4 mt-2">
                                {products.map((product) => (
                                    <button
                                        key={product.name}
                                        className={`rounded-xl border-2 p-2 bg-background shadow hover:scale-105 transition-all duration-200 ${
                                            selected === product.name
                                                ? "border-indigo-400"
                                                : "border-zinc-700"
                                        }`}
                                        onClick={() =>
                                            setSelected(product.name)
                                        }
                                    >
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            className="w-20 h-20 object-contain"
                                        />
                                    </button>
                                ))}
                            </div>
                        </div>
                        <div className="flex-1 flex items-center justify-center">
                            <MerchProductCard
                                {...selectedProduct}
                                selected={true}
                                onSelect={() => {}}
                            />
                        </div>
                    </div>
                    <div className="flex justify-center mt-8">
                        <MerchOrderForm
                            products={products}
                            selected={selected}
                            onSelect={setSelected}
                        />
                    </div>
                </section>
            </main>
            <FooterSection />
        </div>
    );
}
