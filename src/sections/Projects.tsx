import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

interface Project {
    title: string;
    description: string;
    tags: string[];
    image: string;
    github: string | null;
    demo: string | null;
    status?: string;
}

const projects: Project[] = [
    {
        title: "Facebook Clone",
        description: "A social media platform where users can post, comment, like, and customize their profile.",
        tags: ["React", "Firebase", "CSS"],
        image: "images/facebook.png",
        github: null,
        demo: null,
        status: "Construction"
    },
    {
        title: "Padres Analysis Dashboard",
        description: "Full-stack analytics dashboard for Padres stats, built with React, Flask & MySQL.",
        tags: ["React", "Flask", "MySQL"],
        image: "images/baseball.png",
        github: "https://github.com/ryan-skeans/baseball-data-analysis-app",
        demo: null,
    },
    {
        title: "iOS Market Data App",
        description: "Native iOS app fetching live stock-market data using swift and Xcode.",
        tags: ["Swift", "Stock API", "Xcode"],
        image: "images/ios_app.png",
        github: "https://github.com/ryan-skeans/stock-app",
        demo: null,
    },
    {
        title: "Python Mock Backend",
        description: "API endpoints serving Airbnb data. Practice in backend design and data modeling.",
        tags: ["Python", "Flask", "MySQL"],
        image: "images/python-project.png",
        github: "https://github.com/ryan-skeans/python-backend-project",
        demo: null,
    },
];

export const Projects = () => {
    return (
        <section id="projects" className="py-24 bg-dark-900 relative">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured Projects</h2>
                    <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

const ProjectCard = ({ project, index }: { project: Project, index: number }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group relative bg-[#1A1A1A] rounded-2xl overflow-hidden border border-white/5 hover:border-primary/30 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10"
        >
            <div className="aspect-video overflow-hidden bg-gray-800">
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
            </div>

            <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary-light transition-colors">
                    {project.title}
                </h3>
                <p className="text-gray-400 mb-6 leading-relaxed">
                    {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map(tag => (
                        <span key={tag} className="px-3 py-1 text-xs font-semibold bg-white/5 text-gray-300 rounded-full border border-white/5">
                            {tag}
                        </span>
                    ))}
                </div>

                <div className="flex items-center gap-4">
                    {project.github ? (
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center gap-2 text-sm font-medium text-white hover:text-primary-light transition-colors"
                        >
                            <Github size={18} />
                            View Code
                        </a>
                    ) : (
                        <span className="flex items-center gap-2 text-sm font-medium text-gray-600 cursor-not-allowed">
                            <Github size={18} />
                            Private / WIP
                        </span>
                    )}

                    {project.demo && (
                        <a
                            href={project.demo}
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center gap-2 text-sm font-medium text-white hover:text-primary-light transition-colors"
                        >
                            <ExternalLink size={18} />
                            Live Demo
                        </a>
                    )}
                </div>
            </div>
        </motion.div>
    );
};
