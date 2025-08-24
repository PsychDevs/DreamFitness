import { Button } from "@/components/ui/button";
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
            className="bg-muted rounded-2xl p-8 shadow max-w-lg mx-auto w-full flex flex-col gap-4 border mt-8"
        >
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
                onChange={(e) => onSelect(e.target.value)}
            >
                {products.map((product) => (
                    <option key={product.name} value={product.name}>
                        {product.name}
                    </option>
                ))}
            </select>
            <Button type="submit" className="w-full mt-2" disabled={loading}>
                {loading ? "Placing Order..." : "Place Order"}
            </Button>
        </form>
    );
}
