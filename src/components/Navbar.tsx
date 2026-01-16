import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Github, Linkedin } from "lucide-react";
import clsx from "clsx";

const navLinks = [
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                className={clsx(
                    "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
                    isScrolled
                        ? "bg-black/50 backdrop-blur-md border-white/10 py-4"
                        : "bg-transparent py-6"
                )}
            >
                <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                    <a href="#" className="text-2xl font-bold tracking-tighter text-white">
                        Ryan<span className="text-primary">.</span>
                    </a>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
                            >
                                {link.name}
                            </a>
                        ))}
                        <div className="h-4 w-px bg-gray-700" />
                        <div className="flex items-center space-x-4">
                            <SocialLink href="https://github.com/ryan-skeans" icon={<Github size={18} />} label="GitHub" />
                            <SocialLink href="https://www.linkedin.com/in/ryanskeans/" icon={<Linkedin size={18} />} label="LinkedIn" />
                            <a
                                href="/files/Resume.pdf"
                                target="_blank"
                                className="flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-black bg-primary hover:bg-primary-hover rounded-full transition-all"
                            >
                                Resume
                            </a>
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-white"
                        onClick={() => setIsMobileMenuOpen(true)}
                    >
                        <Menu />
                    </button>
                </div>
            </motion.nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: "100%" }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: "100%" }}
                        transition={{ type: "tween" }}
                        className="fixed inset-0 z-[60] bg-black flex flex-col items-center justify-center space-y-8"
                    >
                        <button
                            className="absolute top-6 right-6 text-white"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            <X size={32} />
                        </button>
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-2xl font-bold text-white"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {link.name}
                            </a>
                        ))}
                        <a
                            href="/files/Resume.pdf"
                            target="_blank"
                            className="px-6 py-3 text-sm font-bold text-black bg-primary rounded-full"
                        >
                            Resume
                        </a>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

const SocialLink = ({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) => (
    <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className="text-gray-400 hover:text-white transition-colors"
        aria-label={label}
    >
        {icon}
    </a>
);
