const skills = {
    Languages: ["JavaScript", "TypeScript", "Python", "SQL", "HTML", "CSS"],
    Frameworks: [
        "React",
        "Redux Toolkit",
        "Node.js",
        "Express",
        "Tailwind CSS",
        "Flask",
        "GraphQL",
    ],
    Tools: ["Git", "Docker", "AWS", "Jenkins", "Firebase", "Kubernetes"],
};

export const Skills = () => {
    return (
        <section
            id="skills"
            className="deferred-section bg-white py-20 dark:bg-[#0a0a0a] md:py-24"
        >
            <div className="mx-auto max-w-7xl px-6">
                <div className="grid gap-8 md:grid-cols-[140px_minmax(0,1fr)] md:gap-12">
                    <h2 className="text-2xl text-gray-900 dark:text-white md:text-3xl">
                        Skills
                    </h2>

                    <div className="divide-y divide-black/10 border-y border-black/10 dark:divide-white/10 dark:border-white/10">
                        {Object.entries(skills).map(([category, items]) => (
                            <div
                                key={category}
                                className="grid gap-4 py-6 sm:grid-cols-[120px_minmax(0,1fr)] sm:gap-6"
                            >
                                <h3 className="text-sm text-gray-500 dark:text-gray-500">
                                    {category}
                                </h3>

                                <ul className="flex flex-wrap gap-x-6 gap-y-2">
                                    {items.map((skill) => (
                                        <li
                                            key={skill}
                                            className="text-sm text-gray-800 dark:text-gray-300"
                                        >
                                            {skill}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
