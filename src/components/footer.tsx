import Link from "next/link";
import { Button } from "./ui/button";

const menuItems = [
    { name: "Home", href: "#link" },
    { name: "Services", href: "#link" },
    { name: "Merch", href: "#link" },
    { name: "Contact", href: "#link" },
];

export default function FooterSection() {
    return (
        <footer className="bg-background pt-20">
            <div className="mx-auto max-w-5xl px-6">
                <div className="grid gap-12 md:grid-cols-5">
                    <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit">
                        <ul className="flex gap-1">
                            {menuItems.map((item, index) => (
                                <li key={index}>
                                    <Button asChild variant="ghost" size="sm">
                                        <Link
                                            href={item.href}
                                            className="text-base"
                                        >
                                            <span>{item.name}</span>
                                        </Link>
                                    </Button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="mt-12 flex flex-wrap items-end justify-between gap-6 border-t border-gray-400 py-6">
                    <span className="text-muted-foreground order-last block text-center text-sm md:order-first">
                        &copy; {new Date().getFullYear()}{" "}
                        <span className="text-primary font-semibold">
                            Dream Fitness
                        </span>{" "}
                        | Built by{" "}
                        <a
                            href="https://psychdevs.site"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary font-semibold hover:underline"
                        >
                            PsychDevs
                        </a>{" "}
                        ✌️
                    </span>
                    <div className="order-first flex flex-wrap justify-center gap-6 text-sm md:order-last">
                        <Link
                            href="https://www.facebook.com/dreamfitnessbysenura"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Facebook"
                            className="text-muted-foreground hover:text-primary block"
                        >
                            <svg
                                className="size-6"
                                xmlns="http://www.w3.org/2000/svg"
                                width="1em"
                                height="1em"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    fill="currentColor"
                                    d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95"
                                ></path>
                            </svg>
                        </Link>
                        <Link
                            href="https://www.instagram.com/d.fitnessbysenura"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Instagram"
                            className="text-muted-foreground hover:text-primary block"
                        >
                            <svg
                                className="size-6"
                                xmlns="http://www.w3.org/2000/svg"
                                width="1em"
                                height="1em"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    fill="currentColor"
                                    d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"
                                ></path>
                            </svg>
                        </Link>
                        <Link
                            href="https://www.tiktok.com/@dreamfitnessbysenura"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="TikTok"
                            className="text-muted-foreground hover:text-primary block"
                        >
                            <svg
                                className="size-6"
                                xmlns="http://www.w3.org/2000/svg"
                                width="1em"
                                height="1em"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    fill="currentColor"
                                    d="M16.6 5.82s.51.5 0 0A4.28 4.28 0 0 1 15.54 3h-3.09v12.4a2.59 2.59 0 0 1-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.6c0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64c0 3.33 2.76 5.7 5.69 5.7c3.14 0 5.69-2.55 5.69-5.7V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3s-1.88.09-3.24-1.48"
                                ></path>
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
