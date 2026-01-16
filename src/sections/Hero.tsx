import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Background Elements */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-primary/30 blur-[100px]" />
                <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-black/20 dark:bg-primary/20 blur-[120px]" />
            </div>

            <div className="relative z-10 max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-6"
                >
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="inline-block px-3 py-1 rounded-full bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10 text-primary-light text-sm font-medium"
                    >
                        Software Engineer
                    </motion.div>
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 dark:text-white leading-[1.1]">
                        Building User-First Digital Products.
                    </h1>
                    <p className="text-lg text-gray-600 dark:text-gray-400 max-w-lg leading-relaxed">
                        I’m Ryan Skeans. A frontend-leaning product engineer who collaborates across teams to ship clean, intuitive experiences at scale.
                    </p>

                    <div className="flex flex-wrap gap-4 pt-4">
                        <a
                            href="#projects"
                            className="px-8 py-4 bg-primary hover:bg-primary-hover text-white dark:text-gray-900 font-semibold rounded-full transition-all shadow-lg shadow-primary/25"
                        >
                            View Work
                        </a>
                        <a
                            href="#contact"
                            className="px-8 py-4 bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 border border-black/5 dark:border-white/10 text-gray-900 dark:text-white font-semibold rounded-full transition-all"
                        >
                            Contact Me
                        </a>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4, duration: 1 }}
                    className="relative flex justify-center md:justify-end"
                >
                    <div className="relative w-72 h-72 md:w-96 md:h-96">
                        <img
                            src="images/IMG_4031.PNG"
                            alt="Ryan Skeans"
                            className="relative w-full h-full object-cover rounded-full"
                        />
                    </div>
                </motion.div>
            </div>

            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="hidden md:block absolute bottom-10 left-1/2 transform -translate-x-1/2 text-gray-500"
            >
                <ArrowDown size={24} />
            </motion.div>
        </section>
    );
};
