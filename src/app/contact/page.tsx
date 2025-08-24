import { Mail, MapPin, Phone, User, MessageSquare } from "lucide-react";
import FooterSection from "@/components/footer";
import { HeroHeader } from "@/components/header";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
    return (
        <>
            <HeroHeader />
            <main className="bg-background min-h-screen flex flex-col items-center py-24">
                <section className="max-w-6xl w-full mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
                        {/* Contact Form */}
                        <div className="md:col-span-2 bg-background rounded-3xl p-12 shadow-xl border border-zinc-700 flex flex-col gap-8">
                            <div>
                                <h2 className="text-3xl font-extrabold mb-2 text-white flex items-center gap-2">
                                    <span>Get in Touch</span>
                                </h2>
                                <p className="text-muted-foreground mb-8 text-lg">
                                    Fill out the form below and I'll get back to
                                    you soon
                                </p>
                            </div>
                            <form className="flex flex-col gap-6">
                                <div className="relative">
                                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground size-6" />
                                    <input
                                        type="text"
                                        placeholder="Your Name"
                                        className="pl-12 pr-4 py-3 rounded-lg border border-zinc-700 bg-background w-full text-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none transition"
                                        required
                                    />
                                </div>
                                <div className="relative">
                                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground size-6" />
                                    <input
                                        type="email"
                                        placeholder="Your Email"
                                        className="pl-12 pr-4 py-3 rounded-lg border border-zinc-700 bg-background w-full text-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none transition"
                                        required
                                    />
                                </div>
                                <div className="relative">
                                    <MessageSquare className="absolute left-4 top-4 text-muted-foreground size-6" />
                                    <textarea
                                        placeholder="Your Message"
                                        className="pl-12 pr-4 py-3 rounded-lg border border-zinc-700 bg-background w-full text-lg min-h-[120px] focus:ring-2 focus:ring-indigo-500 focus:outline-none transition resize-none"
                                        required
                                    />
                                </div>
                                <Button
                                    type="submit"
                                    className="w-full mt-2 py-6 text-lg font-semibold rounded-xl bg-indigo-500 hover:bg-indigo-600 text-white shadow-lg transition-all duration-200 border-none focus:ring-2 focus:ring-indigo-400 focus:outline-none"
                                >
                                    Send Message
                                </Button>
                            </form>
                        </div>
                        {/* Contact Details */}
                        <div className="bg-background rounded-3xl p-12 shadow-xl border border-zinc-700 flex flex-col gap-8">
                            <h3 className="text-2xl font-extrabold mb-4 text-white">
                                Contact Details
                            </h3>
                            <div className="flex items-start gap-4 border-b border-zinc-700 pb-6">
                                <Phone className="size-6 mt-1 text-indigo-400" />
                                <div>
                                    <div className="font-semibold text-white">
                                        Phone
                                    </div>
                                    <div className="text-muted-foreground text-base mt-1">
                                        +94 (75) 235-8494
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-start gap-4 border-b border-zinc-700 pb-6">
                                <Mail className="size-6 mt-1 text-indigo-400" />
                                <div>
                                    <div className="font-semibold text-white">
                                        Email
                                    </div>
                                    <div className="text-muted-foreground text-base mt-1">
                                        trainer@dreamfitness.com
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <MapPin className="size-6 mt-1 text-indigo-400" />
                                <div>
                                    <div className="font-semibold text-white">
                                        Location
                                    </div>
                                    <div className="text-muted-foreground text-base mt-1">
                                        Kandy, Sri Lanka
                                        <br />
                                        (Available Online)
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <FooterSection />
        </>
    );
}
