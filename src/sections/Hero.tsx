import { ArrowDown } from "lucide-react";
import { HandDrawnFace } from "../components/HandDrawnFace";

export const Hero = () => {
    return (
        <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden pt-20">
            {/* Background Elements */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                <div
                    className="hidden md:block absolute top-[-20%] left-[-10%] w-[500px] h-[500px] rounded-sm bg-primary/20 blur-[80px] will-change-transform animate-pulse"
                    style={{ animationDuration: "4s" }}
                />
                <div className="hidden md:block absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] rounded-sm bg-black/10 dark:bg-primary/10 blur-[80px] will-change-transform" />
            </div>

            <div className="relative z-10 max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <h1 className="text-5xl md:text-7xl tracking-tight text-gray-900 dark:text-white leading-[1.1]">
                        Ryan Skeans
                    </h1>
                    <p className="text-lg text-gray-600 dark:text-gray-400 max-w-lg leading-relaxed">
                        Software Engineer in San Diego. Currently at SS&C
                        Technologies.
                    </p>

                    <div className="flex flex-wrap gap-4 pt-4">
                        <a
                            href="#projects"
                            className="px-4 py-2 bg-primary hover:bg-primary-hover text-white dark:text-gray-900 rounded-sm transition-all"
                        >
                            Projects
                        </a>
                        <a
                            href="#contact"
                            className="px-4 py-2 bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 border border-black/5 dark:border-white/10 text-gray-900 dark:text-white rounded-sm transition-all"
                        >
                            Contact
                        </a>
                    </div>
                </div>

                <div className="relative flex justify-center md:justify-end">
                    <div className="relative w-72 h-72 md:w-96 md:h-96">
                        <HandDrawnFace />
                    </div>
                </div>
            </div>

            <div className="hidden md:block desktop-bounce absolute bottom-10 left-1/2 transform -translate-x-1/2 text-gray-500">
                <ArrowDown size={24} />
            </div>
        </section>
    );
};
