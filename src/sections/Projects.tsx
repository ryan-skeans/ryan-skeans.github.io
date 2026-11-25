import { ArrowUpRight } from "lucide-react";

const projects = [
    {
        title: "The Genesis Platform UI",
        description:
            "Led UI development for portfolio management and trade creation on SS&C’s Genesis platform.",
        role: "Senior UI Engineer at SS&C Technologies",
        stack: "React · TypeScript · Redux · Web Components",
        image: "images/genesis.jpeg",
        imageAlt: "Portfolio management dashboard in Genesis",
        links: [
            { label: "Product overview", href: "https://www.advent.com/genesis/" },
        ],
    },
    {
        title: "Score Island",
        description:
            "Live sports scores in a draggable, Dynamic Island–style browser overlay.",
        role: "Independent design and development",
        stack: "React · TypeScript · Chrome Extension · Cloudflare Workers",
        image: "https://i.ytimg.com/vi/2ohyGmZjGzY/sddefault.jpg",
        imageAlt: "Score Island’s live scores overlay on a web page",
        links: [
            {
                label: "Chrome Web Store",
                href: "https://chromewebstore.google.com/detail/score-island-live-sports/ohbnnnjjpgcekodkajamnocfbedmeknh",
            },
            { label: "Watch demo", href: "https://www.youtube.com/watch?v=2ohyGmZjGzY" },
        ],
    },
    {
        title: "PolyDiscover",
        description:
            "Highlight anything on the web and find related prediction markets in two clicks.",
        role: "Independent design and development",
        stack: "React · TypeScript · Chrome Extension",
        image: "https://i.ytimg.com/vi/cXLsZNLs-pU/maxresdefault.jpg",
        imageAlt: "PolyDiscover showing related prediction markets in its browser popup",
        links: [
            {
                label: "Chrome Web Store",
                href: "https://chromewebstore.google.com/detail/polydiscover-%E2%80%93-polymarket/agebcajnepddkkdigcloncjdfnacmaji",
            },
            { label: "Watch demo", href: "https://www.youtube.com/watch?v=cXLsZNLs-pU" },
        ],
    },
];

export const Projects = () => {
    return (
        <section id="projects" className="pb-16 md:pb-24">
            <div className="mx-auto grid max-w-7xl gap-6 px-6 md:grid-cols-[140px_minmax(0,1fr)] md:gap-12">
                <h2 className="text-2xl text-gray-900 dark:text-white md:pt-7 md:text-3xl">
                    Projects
                </h2>

                <div className="divide-y divide-black/10 border-y border-black/10 dark:divide-white/10 dark:border-white/10">
                    {projects.map((project) => (
                        <article
                            key={project.title}
                            className="grid gap-5 py-7 sm:grid-cols-[minmax(0,1fr)_minmax(9rem,28%)] sm:items-start sm:gap-8"
                        >
                            <div>
                                <h3 className="text-2xl font-medium leading-tight tracking-tight text-gray-900 dark:text-white">
                                    {project.title}
                                </h3>
                                <p className="mt-2 max-w-lg leading-relaxed text-gray-700 dark:text-gray-300">
                                    {project.description}
                                </p>

                                <div className="mt-3 space-y-0.5 text-sm text-gray-600 dark:text-gray-400">
                                    <p>{project.role}</p>
                                    <p>{project.stack}</p>
                                </div>

                                <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm">
                                    {project.links.map(({ label, href }) => (
                                        <a
                                            key={href}
                                            href={href}
                                            target="_blank"
                                            rel="noreferrer"
                                            aria-label={`${label} for ${project.title}`}
                                            className="inline-flex items-center gap-1 underline decoration-gray-400 underline-offset-4 hover:decoration-current dark:decoration-gray-500"
                                        >
                                            {label}
                                            <ArrowUpRight size={13} aria-hidden="true" />
                                        </a>
                                    ))}
                                </div>
                            </div>

                            <img
                                src={project.image}
                                alt={project.imageAlt}
                                loading="lazy"
                                decoding="async"
                                className="aspect-video w-full rounded-md border border-black/10 bg-gray-100 object-cover dark:border-white/10 dark:bg-gray-900"
                            />
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};
