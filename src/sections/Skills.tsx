import { useState } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";

const skills = {
    Languages: [
        { name: "JavaScript", icon: "javascript" },
        { name: "TypeScript", icon: "typescript" },
        { name: "Python", icon: "python" },
        { name: "SQL", icon: "mysql" },
        { name: "HTML5", icon: "html5" },
        { name: "CSS3", icon: "css3" },
    ],
    Frameworks: [
        { name: "React", icon: "react" },
        { name: "Node.js", icon: "nodedotjs" },
        { name: "Express", icon: "express" },
        { name: "Tailwind", icon: "tailwindcss" },
        { name: "Flask", icon: "flask" },
        { name: "GraphQL", icon: "graphql" },
    ],
    Tools: [
        { name: "AWS", icon: "amazonaws" },
        { name: "Docker", icon: "docker" },
        { name: "Firebase", icon: "firebase" },
        { name: "Jenkins", icon: "jenkins" },
        { name: "Git", icon: "github" }, // generic github octocat for git
    ]
};

const allTabs = ["Languages", "Frameworks", "Tools"];

export const Skills = () => {
    const [activeTab, setActiveTab] = useState("Languages");

    return (
        <section id="skills" className="py-32 relative bg-white dark:bg-[#0a0a0a]">
            {/* Background gradient */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-20 pointer-events-none">
                <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[80px] will-change-transform" />
            </div>

            <div className="relative z-10 max-w-5xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Technical Arsenal</h2>
                    <p className="text-gray-600 dark:text-gray-400">The tools I use to bring ideas to life.</p>
                </div>

                <div className="flex justify-center mb-12">
                    <div className="flex p-1 bg-gray-100 dark:bg-white/5 rounded-full backdrop-blur-sm border border-black/5 dark:border-white/5">
                        {allTabs.map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={clsx(
                                    "relative px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300",
                                    activeTab === tab ? "text-white" : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200"
                                )}
                            >
                                {activeTab === tab && (
                                    <motion.div
                                        layoutId="activeTab"
                                        className="absolute inset-0 bg-primary rounded-full shadow-lg shadow-primary/25"
                                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                    />
                                )}
                                <span className="relative z-10">{tab}</span>
                            </button>
                        ))}
                    </div>
                </div>

                <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.4 }}
                    className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6"
                >
                    {skills[activeTab as keyof typeof skills].map((skill) => (
                        <SkillCard key={skill.name} skill={skill} />
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

const SkillCard = ({ skill }: { skill: { name: string, icon: string } }) => {
    // Determine icon URL (using simpleicons CDN as before)
    const iconUrl = `https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/${skill.icon}.svg`;

    return (
        <motion.div
            whileHover={{ y: -5 }}
            className="flex flex-col items-center p-6 bg-gray-50 dark:bg-white/5 border border-black/5 dark:border-white/5 rounded-xl hover:bg-gray-100 dark:hover:bg-white/10 hover:border-primary/30 transition-all duration-300 group"
        >
            <img
                src={iconUrl}
                alt={skill.name}
                className="w-10 h-10 mb-4 dark:invert opacity-70 group-hover:opacity-100 transition-opacity"
            />
            <span className="text-sm font-medium text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">{skill.name}</span>
        </motion.div>
    )
}
