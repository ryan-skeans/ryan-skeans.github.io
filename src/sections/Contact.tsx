import { Mail, Linkedin, Github } from "lucide-react";

export const Contact = () => {
    return (
        <section
            id="contact"
            className="deferred-section py-24 relative overflow-hidden bg-gray-50 dark:bg-black border-t border-black/5 dark:border-white/10"
        >
            <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
                <div className="mb-12">
                    <a
                        href="mailto:ryanskeans@gmail.com"
                        className="inline-flex items-center gap-3 px-8 py-4 bg-gray-900 text-white dark:bg-white dark:text-black rounded-sm hover:bg-primary hover:text-white dark:hover:bg-primary dark:hover:text-white dark:hover:scale-105 transition-all duration-300"
                    >
                        <Mail size={20} />
                        Email
                    </a>
                </div>

                <div className="flex justify-center items-center gap-8 mb-12">
                    <SocialLink
                        href="https://github.com/ryan-skeans"
                        icon={<Github size={24} />}
                    />
                    <SocialLink
                        href="https://www.linkedin.com/in/ryanskeans/"
                        icon={<Linkedin size={24} />}
                    />
                </div>

                <p className="text-sm text-gray-600">
                    &copy; {new Date().getFullYear()} Ryan Skeans. All rights
                    reserved.
                </p>
            </div>

            {/* Soft subtle glow at bottom */}
            <div className="hidden md:block absolute bottom-[-20%] left-1/2 transform -translate-x-1/2 w-[800px] h-[300px] bg-primary/10 blur-[80px] rounded-sm pointer-events-none will-change-transform" />
        </section>
    );
};

const SocialLink = ({
    href,
    icon,
}: {
    href: string;
    icon: React.ReactNode;
}) => (
    <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className="p-3 bg-black/5 dark:bg-white/5 rounded-sm text-gray-600 dark:text-gray-400 hover:text-white hover:bg-primary transition-all duration-300"
    >
        {icon}
    </a>
);
