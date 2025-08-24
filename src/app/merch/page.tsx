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
    },
    {
        name: "Arm Cut Top",
        description: "Show off your gains with this breathable, athletic top.",
        price: "$29",
        image: "/arm-cut-top.jpg",
    },
];

export default function MerchPage() {
    const [selected, setSelected] = useState(products[0].name);
    return (
        <>
            <HeroHeader />
            <main className="bg-background min-h-screen flex flex-col items-center py-20">
                <section className="max-w-5xl w-full mx-auto px-4 py-10">
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-2 text-center tracking-tight uppercase">
                        Dream Fitness Merch
                    </h1>
                    <p className="text-muted-foreground text-lg mb-12 text-center">
                        Elevate your style and performance with our exclusive
                        gear. Select your favorite and order online!
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
                        {products.map((product) => (
                            <MerchProductCard
                                key={product.name}
                                {...product}
                                selected={selected === product.name}
                                onSelect={() => setSelected(product.name)}
                            />
                        ))}
                    </div>
                    <MerchOrderForm
                        products={products}
                        selected={selected}
                        onSelect={setSelected}
                    />
                </section>
            </main>
            <FooterSection />
        </>
    );
}
