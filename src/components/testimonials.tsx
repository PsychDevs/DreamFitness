"use client";
import React, { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
    {
        quote: "Using Tailark has been like unlocking a secret design superpower. It's the perfect fusion of simplicity and versatility, enabling us to create UIs that are as stunning as they are user-friendly.",
        name: "Théo Balick",
        handle: "@theo_b",
        avatar: "https://avatars.githubusercontent.com/u/68236786?v=4",
        fallback: "T",
    },
    {
        quote: "Dream Fitness helped me find my confidence and community. Every session is motivating and fun!",
        name: "Alex Morgan",
        handle: "@alexm_fit",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg",
        fallback: "A",
    },
    {
        quote: "The trainers here genuinely care about your progress. I’ve never felt stronger!",
        name: "Jamie Lee",
        handle: "@jamielee",
        avatar: "https://randomuser.me/api/portraits/women/44.jpg",
        fallback: "J",
    },
];

export default function TestimonialSection() {
    const [index, setIndex] = useState(0);
    const testimonial = testimonials[index];

    const prev = () =>
        setIndex((i) => (i === 0 ? testimonials.length - 1 : i - 1));
    const next = () =>
        setIndex((i) => (i === testimonials.length - 1 ? 0 : i + 1));

    return (
        <section>
            <div className="bg-muted py-24">
                <div className="mx-auto w-full max-w-2xl px-6 text-center">
                    <h2 className="mx-auto my-10 text-4xl font-extrabold md:text-4xl uppercase">
                        Happy Clients
                    </h2>
                    <div className="max-w-xl mx-auto relative flex items-center">
                        {/* Left Arrow */}
                        <button
                            aria-label="Previous testimonial"
                            onClick={prev}
                            className="absolute left-[-15rem] top-1/2 -translate-y-1/2 rounded-full p-2 hover:bg-muted-foreground/10 transition z-10 hidden md:block"
                        >
                            <ChevronLeft className="size-20 cursor-pointer text-gray-500" />
                        </button>
                        {/* Testimonial Content */}
                        <div className="flex-1 text-center">
                            <Quote className="fill-background stroke-background mx-auto size-8 drop-shadow-sm" />
                            <blockquote className="mt-6 min-h-[120px] transition-all duration-300">
                                <p className="text-foreground text-xl">
                                    {testimonial.quote}
                                </p>
                                <footer className="mt-6 flex flex-col items-center justify-center">
                                    <Avatar className="ring-foreground/10 size-12 border border-transparent shadow ring-1">
                                        <AvatarImage
                                            src={testimonial.avatar}
                                            alt={testimonial.name}
                                        />
                                        <AvatarFallback>
                                            {testimonial.fallback}
                                        </AvatarFallback>
                                    </Avatar>
                                    <cite className="text-foreground mt-2 text-lg font-medium">
                                        {testimonial.name}
                                    </cite>
                                    <span className="text-muted-foreground">
                                        {testimonial.handle}
                                    </span>
                                </footer>
                            </blockquote>
                        </div>
                        {/* Right Arrow */}
                        <button
                            aria-label="Next testimonial"
                            onClick={next}
                            className="absolute right-[-15rem] top-1/2 -translate-y-1/2 rounded-full p-2 hover:bg-muted-foreground/10 transition z-10 hidden md:block"
                        >
                            <ChevronRight className="size-20 cursor-pointer text-gray-500" />
                        </button>
                    </div>
                    {/* Carousel Dots Below */}
                    <div className="mt-8 flex items-center justify-center gap-2">
                        {testimonials.map((_, i) => (
                            <span
                                key={i}
                                className={`inline-block h-3 w-3 rounded-full transition-all duration-200 cursor-pointer ${
                                    i === index
                                        ? "bg-gray-500"
                                        : "bg-none hover:bg-gray-500 border hover:border-none"
                                }`}
                            />
                        ))}
                    </div>
                    {/* Mobile arrows below dots */}
                    <div className="mt-4 flex items-center justify-center gap-8 md:hidden">
                        <button
                            aria-label="Previous testimonial"
                            onClick={prev}
                            className="rounded-full p-2 hover:bg-muted-foreground/10 transition"
                        >
                            <ChevronLeft className="size-6" />
                        </button>
                        {/* Carousel Dots Below */}
                        <div className="mt-8 flex items-center justify-center gap-2">
                            {testimonials.map((_, i) => (
                                <span
                                    key={i}
                                    className={`inline-block h-3 w-3 rounded-full transition-all duration-200 cursor-pointer ${
                                        i === index
                                            ? "bg-gray-500"
                                            : "bg-none hover:bg-gray-500 border hover:border-none"
                                    }`}
                                />
                            ))}
                        </div>
                        <button
                            aria-label="Next testimonial"
                            onClick={next}
                            className="rounded-full p-2 hover:bg-muted-foreground/10 transition"
                        >
                            <ChevronRight className="size-6" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
