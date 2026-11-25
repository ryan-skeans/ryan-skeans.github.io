import React, { useState, useEffect } from "react";
import { ArrowUpRight, Menu, X, Github, Linkedin, Sun, Moon } from "lucide-react";
import { HandDrawnFace } from "./HandDrawnFace";

const navLinks = [
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const [theme, setTheme] = useState(() => {
        if (typeof window !== "undefined" && window.localStorage) {
            return (
                localStorage.getItem("theme") ||
                (window.matchMedia("(prefers-color-scheme: dark)").matches
                    ? "dark"
                    : "light")
            );
        }
        return "light";
    });

    useEffect(() => {
        const root = window.document.documentElement;
        if (theme === "dark") {
            root.classList.add("dark");
        } else {
            root.classList.remove("dark");
        }
        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prev) => (prev === "light" ? "dark" : "light"));
    };

    return (
        <>
            <nav aria-label="Main" className="sticky top-0 z-50 border-b border-black/10 bg-gray-50 dark:border-white/10 dark:bg-[#050505]">
                <div className="mx-auto flex min-h-[4.5rem] max-w-7xl items-center justify-between px-6">
                    <a
                        href="#top"
                        aria-label="Ryan Skeans, home"
                        className="inline-flex h-12 w-12 items-center rounded-md text-gray-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary dark:text-white sm:w-14"
                    >
                        <HandDrawnFace />
                    </a>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-8">
                        <div className="flex items-center gap-8">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-sm text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-white transition-colors"
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>

                        <div className="flex items-center gap-1 border-l border-gray-200 pl-5 dark:border-white/10">
                            <button
                                onClick={toggleTheme}
                                className="flex h-9 w-9 items-center justify-center rounded-md text-gray-600 transition-colors hover:bg-gray-100 hover:text-primary dark:text-gray-300 dark:hover:bg-white/10 dark:hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                                aria-label="Toggle theme"
                            >
                                {theme === "light" ? (
                                    <Moon size={18} />
                                ) : (
                                    <Sun size={18} />
                                )}
                            </button>

                            <SocialLink
                                href="https://github.com/ryan-skeans"
                                icon={<Github size={18} />}
                                label="GitHub"
                            />
                            <SocialLink
                                href="https://www.linkedin.com/in/ryanskeans/"
                                icon={<Linkedin size={18} />}
                                label="LinkedIn"
                            />

                            <a
                                href="/files/Resume.pdf"
                                target="_blank"
                                rel="noreferrer"
                                className="ml-3 inline-flex min-h-9 items-center gap-1 text-sm text-gray-900 underline decoration-gray-400 underline-offset-4 hover:decoration-current dark:text-gray-100 dark:decoration-gray-500"
                            >
                                Resume
                                <ArrowUpRight size={13} aria-hidden="true" />
                            </a>
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="-mr-2.5 flex h-11 w-11 items-center justify-center rounded-md text-gray-900 dark:text-white md:hidden"
                        onClick={() => setIsMobileMenuOpen(true)}
                        aria-label="Open menu"
                        aria-expanded={isMobileMenuOpen}
                    >
                        <Menu />
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="fixed inset-0 z-[60] bg-white dark:bg-black flex flex-col items-center justify-center space-y-8">
                    <button
                        className="absolute right-3.5 top-3.5 flex h-11 w-11 items-center justify-center rounded-md text-gray-900 dark:text-white"
                        onClick={() => setIsMobileMenuOpen(false)}
                        aria-label="Close menu"
                    >
                        <X size={32} />
                    </button>
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-2xl text-gray-900 dark:text-white"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {link.name}
                        </a>
                    ))}
                    <a
                        href="/files/Resume.pdf"
                        target="_blank"
                        rel="noreferrer"
                        className="px-6 py-3 text-sm text-white dark:text-black bg-primary rounded-sm mb-8"
                    >
                        Resume
                    </a>

                    <button
                        onClick={toggleTheme}
                        className="flex items-center gap-2 text-gray-900 dark:text-white"
                    >
                        {theme === "light" ? (
                            <>
                                <Moon size={24} /> <span>Dark Mode</span>
                            </>
                        ) : (
                            <>
                                <Sun size={24} /> <span>Light Mode</span>
                            </>
                        )}
                    </button>
                </div>
            )}
        </>
    );
};

const SocialLink = ({
    href,
    icon,
    label,
}: {
    href: string;
    icon: React.ReactNode;
    label: string;
}) => (
    <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className="flex h-9 w-9 items-center justify-center rounded-md text-gray-600 transition-colors hover:bg-gray-100 hover:text-primary dark:text-gray-300 dark:hover:bg-white/10 dark:hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
        aria-label={label}
    >
        {icon}
    </a>
);
