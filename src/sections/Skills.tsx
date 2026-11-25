const skills = {
    Frontend: [
        "React",
        "TypeScript",
        "Next.js",
        "React Native",
        "Web Components",
        "Microfrontends",
        "HTML",
        "CSS",
        "Sass",
        "Tailwind CSS",
    ],
    "AI & Automation": [
        "Claude Code",
        "Agent orchestration",
        "Multimodal LLMs",
        "GitHub Actions",
    ],
    "Backend & Cloud": [
        "Node.js",
        "Python",
        "Flask",
        "SQL",
        "PostgreSQL",
        "REST APIs",
        "GraphQL",
        "Serverless functions",
        "Kubernetes",
    ],
    "Testing & Tools": ["Playwright", "MSW", "Cypress", "Jest", "Git"],
};

export const Skills = () => {
    return (
        <section
            id="skills"
            className="deferred-section pb-16 md:pb-24"
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
