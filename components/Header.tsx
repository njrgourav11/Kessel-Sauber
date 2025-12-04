"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 glass bg-black/80 text-white">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <Link href="/" className="flex items-center gap-2">
                    <span className="text-2xl font-bold tracking-tighter">
                        KESSEL <span className="text-accent">SAUBER</span>
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-8">
                    <Link href="#services" className="hover:text-accent transition-colors">
                        Services
                    </Link>
                    <Link href="#about" className="hover:text-accent transition-colors">
                        About Us
                    </Link>
                    <Link href="#contact" className="hover:text-accent transition-colors">
                        Contact
                    </Link>
                    <Link
                        href="#contact"
                        className="bg-accent hover:bg-orange-600 text-white px-5 py-2 rounded-full font-medium transition-colors"
                    >
                        Get a Quote
                    </Link>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        {isOpen ? (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        ) : (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        )}
                    </svg>
                </button>
            </div>

            {/* Mobile Navigation */}
            {isOpen && (
                <div className="md:hidden bg-black border-t border-white/10">
                    <div className="flex flex-col p-4 space-y-4">
                        <Link
                            href="#services"
                            className="hover:text-accent transition-colors"
                            onClick={() => setIsOpen(false)}
                        >
                            Services
                        </Link>
                        <Link
                            href="#about"
                            className="hover:text-accent transition-colors"
                            onClick={() => setIsOpen(false)}
                        >
                            About Us
                        </Link>
                        <Link
                            href="#contact"
                            className="hover:text-accent transition-colors"
                            onClick={() => setIsOpen(false)}
                        >
                            Contact
                        </Link>
                        <Link
                            href="#contact"
                            className="bg-accent hover:bg-orange-600 text-white px-5 py-2 rounded-full font-medium transition-colors text-center"
                            onClick={() => setIsOpen(false)}
                        >
                            Get a Quote
                        </Link>
                    </div>
                </div>
            )}
        </header>
    );
}
