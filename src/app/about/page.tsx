"use client";
import FooterSection from "@/components/footer";
import { HeroHeader } from "@/components/header";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";

const products = [
    {
        name: "Track Bottom",
        description:
            "Comfortable, stylish, and perfect for workouts or casual wear.",
        price: "$39",
        image: "/track-bottom.jpg", // Add this image to your public folder
    },
    {
        name: "Arm Cut Top",
        description: "Show off your gains with this breathable, athletic top.",
        price: "$29",
        image: "/arm-cut-top.jpg", // Add this image to your public folder
    },
];

export default function MerchPage() {
    const [selected, setSelected] = useState(products[0].name);
    return (
        <>
            <HeroHeader />
            <main className="bg-background min-h-screen flex flex-col items-center justify-center py-20">
                <section className="max-w-4xl mx-auto w-full">
                    <h1 className="text-4xl font-bold mb-2 text-center">
                        Dream Fitness Merch
                    </h1>
                    <p className="text-muted-foreground text-lg mb-8 text-center">
                        Order your exclusive Dream Fitness gear online!
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                        {products.map((product) => (
                            <div
                                key={product.name}
                                className={`rounded-xl border bg-background p-6 shadow flex flex-col items-center ${
                                    selected === product.name
                                        ? "ring-2 ring-indigo-400"
                                        : ""
                                }`}
                                onClick={() => setSelected(product.name)}
                                style={{ cursor: "pointer" }}
                            >
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="mb-4 w-40 h-40 object-contain bg-muted rounded"
                                />
                                <h3 className="font-bold text-xl mb-1">
                                    {product.name}
                                </h3>
                                <p className="text-muted-foreground mb-2 text-center">
                                    {product.description}
                                </p>
                                <div className="text-2xl font-bold mb-2">
                                    {product.price}
                                </div>
                                <Button
                                    variant={
                                        selected === product.name
                                            ? "default"
                                            : "outline"
                                    }
                                    className="mt-auto"
                                >
                                    Select
                                </Button>
                            </div>
                        ))}
                    </div>
                    <form className="bg-muted rounded-xl p-8 shadow max-w-lg mx-auto w-full flex flex-col gap-4">
                        <h2 className="text-2xl font-semibold mb-2 text-center">
                            Order Now
                        </h2>
                        <input
                            type="text"
                            placeholder="Name"
                            className="rounded border bg-background px-4 py-2"
                            required
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            className="rounded border bg-background px-4 py-2"
                            required
                        />
                        <input
                            type="text"
                            placeholder="Shipping Address"
                            className="rounded border bg-background px-4 py-2"
                            required
                        />
                        <select
                            className="rounded border bg-background px-4 py-2"
                            value={selected}
                            onChange={(e) => setSelected(e.target.value)}
                        >
                            {products.map((product) => (
                                <option key={product.name} value={product.name}>
                                    {product.name}
                                </option>
                            ))}
                        </select>
                        <Button type="submit" className="w-full mt-2">
                            Place Order
                        </Button>
                    </form>
                </section>
            </main>
            <FooterSection />
        </>
    );
}
