import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
    return (
        <>
            <video
                className="absolute inset-0 z-0 h-full w-full object-cover"
                autoPlay
                loop
                muted
                playsInline
            >
                <source src="/gymVid.mp4" type="video/mp4" />
            </video>
            {/* Mask overlay for video */}
            <div
                className="absolute inset-0 z-0 h-full w-full pointer-events-none"
                style={{
                    background:
                        "linear-gradient(to bottom, rgba(0,0,0,0.7) 100%, rgba(0,0,0,0.7) 100%)",
                }}
            />
            <main className="[--color-primary:var(--color-indigo-500)] ">
                <section className="flex h-screen w-full items-center justify-center text-white">
                    <div className="relative text-center ">
                        <h1 className="mx-auto max-w-3xl text-balance text-5xl font-extrabold tracking-tight drop-shadow-lg md:text-7xl uppercase">
                            Dream Fitness
                        </h1>
                        <p className="mx-auto my-8 max-w-2xl text-balance text-lg md:text-2xl font-medium text-white/90 drop-shadow-sm">
                            Join the Movement | Level Up | Build your Best Self
                        </p>
                        <div className="flex flex-col items-center justify-center gap-3 *:w-full sm:flex-row sm:*:w-auto ">
                            <Button
                                key={2}
                                asChild
                                size="lg"
                                variant="outline"
                                className="hover:bg-gray-500 hover:text-black"
                            >
                                <Link href="#link">
                                    <span className="text-nowrap text-lg text-">
                                        Try a Free Class
                                    </span>
                                </Link>
                            </Button>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
