import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import React from "react";

interface MerchProductCardProps {
    name: string;
    description: string;
    price: string;
    image: string;
    selected: boolean;
    onSelect: () => void;
}

export function MerchProductCard({
    name,
    description,
    price,
    image,
    selected,
    onSelect,
}: MerchProductCardProps) {
    return (
        <div
            className={`group relative rounded-3xl border bg-[#1d1d1d] p-6 shadow-lg flex flex-col items-center transition-all duration-200 hover:scale-[1.03] hover:shadow-2xl cursor-pointer ${
                selected ? "ring-2 ring-red-600" : ""
            }`}
            style={{ borderColor: selected ? "#ff1400" : "#ffffff" }}
            onClick={onSelect}
        >
            <div className="absolute top-4 right-4">
                {selected && (
                    <span
                        className="bg-red-600 text-xs text-white px-2 py-1 rounded-full"
                        style={{ backgroundColor: "#ff1400", color: "#ffffff" }}
                    >
                        Selected
                    </span>
                )}
            </div>
            <div className="w-48 h-48 flex items-center justify-center bg-black rounded-2xl mb-4 overflow-hidden">
                <img
                    src={image}
                    alt={name}
                    className="object-contain w-full h-full group-hover:scale-110 transition-transform duration-200"
                />
            </div>
            <h3 className="font-bold text-2xl mb-1 text-center text-white">
                {name}
            </h3>
            <p className="mb-2 text-center text-base text-white">
                {description}
            </p>
            <div
                className="text-2xl font-bold mb-4 text-red-600"
                style={{ color: "#ff1400" }}
            >
                {price}
            </div>
            <Button
                variant={selected ? "default" : "outline"}
                className={`mt-auto flex items-center gap-2 ${
                    selected
                        ? "bg-red-600 text-white border-none"
                        : "bg-black text-white border-white"
                }`}
                style={
                    selected
                        ? {
                              backgroundColor: "#ff1400",
                              color: "#ffffff",
                              border: "none",
                          }
                        : {
                              backgroundColor: "#000000",
                              color: "#ffffff",
                              borderColor: "#ffffff",
                          }
                }
                tabIndex={-1}
            >
                <ShoppingCart className="size-4" style={{ color: "#ffffff" }} />
                {selected ? "Selected" : "Select"}
            </Button>
        </div>
    );
}
