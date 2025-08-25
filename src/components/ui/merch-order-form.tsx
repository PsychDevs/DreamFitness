import { Button } from "@/components/ui/button";
import { User, Mail, MapPin, ShoppingBag } from "lucide-react";
import React, { useState } from "react";

interface MerchOrderFormProps {
    products: { name: string }[];
    selected: string;
    onSelect: (name: string) => void;
}

export function MerchOrderForm({
    products,
    selected,
    onSelect,
}: MerchOrderFormProps) {
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setSubmitted(true);
        }, 1200);
    }

    if (submitted) {
        return (
            <div className="bg-background rounded-2xl p-8 shadow max-w-lg mx-auto w-full flex flex-col items-center border text-center">
                <h2 className="text-2xl font-semibold mb-2 text-center text-green-500">
                    Thank you for your order!
                </h2>
                <p className="text-muted-foreground mb-2">
                    We'll contact you soon to confirm your order and shipping
                    details.
                </p>
                <Button className="mt-4" onClick={() => setSubmitted(false)}>
                    Order Another
                </Button>
            </div>
        );
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="bg-background/80 rounded-3xl p-10 shadow-2xl max-w-xl mx-auto w-full flex flex-col gap-6 border border-zinc-700 mt-8 backdrop-blur"
        >
            <h2 className="text-3xl font-extrabold mb-4 text-center text-white flex items-center gap-2 justify-center">
                <ShoppingBag
                    className="size-7 text-red-600"
                    style={{ color: "#ff1400" }}
                />{" "}
                Order Now
            </h2>
            <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-white size-5" />
                <input
                    type="text"
                    placeholder="Name"
                    className="pl-12 pr-4 py-3 rounded-lg border border-zinc-700 bg-background w-full text-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none transition"
                    required
                />
            </div>
            <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-white size-5" />
                <input
                    type="email"
                    placeholder="Email"
                    className="pl-12 pr-4 py-3 rounded-lg border border-zinc-700 bg-background w-full text-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none transition"
                    required
                />
            </div>
            <div className="relative">
                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-white size-5" />
                <input
                    type="text"
                    placeholder="Shipping Address"
                    className="pl-12 pr-4 py-3 rounded-lg border border-zinc-700 bg-background w-full text-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none transition"
                    required
                />
            </div>
            <div className="relative">
                <ShoppingBag className="absolute left-4 top-1/2 -translate-y-1/2 text-white size-5" />
                <select
                    className="pl-12 pr-4 py-3 rounded-lg border border-zinc-700 bg-background w-full text-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none transition appearance-none"
                    value={selected}
                    onChange={(e) => onSelect(e.target.value)}
                >
                    {products.map((product) => (
                        <option key={product.name} value={product.name}>
                            {product.name}
                        </option>
                    ))}
                </select>
            </div>
            <Button
                type="submit"
                className="w-full mt-2 py-6 text-lg font-semibold rounded-xl bg-red-600 hover:bg-red-700 text-white shadow-lg transition-all duration-200 border-none focus:ring-2 focus:ring-red-400 focus:outline-none"
                style={{ backgroundColor: "#ff1400", color: "#ffffff" }}
                disabled={loading}
            >
                {loading ? "Placing Order..." : "Place Order"}
            </Button>
        </form>
    );
}
