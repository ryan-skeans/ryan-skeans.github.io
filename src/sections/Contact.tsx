import { motion } from "framer-motion";
import { Mail, Linkedin, Github } from "lucide-react";

export const Contact = () => {
    return (
        <section id="contact" className="py-24 relative overflow-hidden bg-black border-t border-white/10">
            <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Let's build something amazing.</h2>
                    <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
                        Whether you have a question, a project idea, or just want to say hi, I'd love to hear from you.
                    </p>

                    <a
                        href="mailto:ryanskeans@gmail.com"
                        className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-primary/10 hover:scale-105 transition-all duration-300"
                    >
                        <Mail size={20} />
                        Get in Touch
                    </a>
                </motion.div>

                <div className="flex justify-center items-center gap-8 mb-12">
                    <SocialLink href="https://github.com/ryan-skeans" icon={<Github size={24} />} />
                    <SocialLink href="https://www.linkedin.com/in/ryanskeans/" icon={<Linkedin size={24} />} />
                </div>

                <p className="text-sm text-gray-600">
                    &copy; {new Date().getFullYear()} Ryan Skeans. All rights reserved.
                </p>
            </div>

            {/* Soft subtle glow at bottom */}
            <div className="absolute bottom-[-20%] left-1/2 transform -translate-x-1/2 w-[800px] h-[300px] bg-primary/10 blur-[100px] rounded-full point-events-none" />
        </section>
    );
};

const SocialLink = ({ href, icon }: { href: string; icon: React.ReactNode }) => (
    <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className="p-3 bg-white/5 rounded-full text-gray-400 hover:text-white hover:bg-primary transition-all duration-300"
    >
        {icon}
    </a>
)
