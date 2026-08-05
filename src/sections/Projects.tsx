import { ArrowUpRight, Github, Play } from "lucide-react";

interface Project {
    number: string;
    category: string;
    title: string;
    description: string;
    role: string;
    tags: string[];
    image: string;
    mediaUrl?: string;
    github: string | null;
    demo: string | null;
    demoLabel: string;
    status: "Live" | "Professional work";
}

const projects: Project[] = [
    {
        number: "01",
        category: "Professional work",
        title: "The Genesis Platform UI",
        description:
            "UI lead for portfolio-management and trade-creation workflows across SS&C’s Genesis platform, supporting trading, analytics, accounting, and reporting.",
        role: "Senior UI Engineer",
        tags: ["React", "TypeScript", "Redux", "Web Components"],
        image: "images/genesis.jpeg",
        github: null,
        demo: "https://www.advent.com/genesis/",
        demoLabel: "Product overview",
        status: "Professional work",
    },
    {
        number: "02",
        category: "Independent project",
        title: "Score Island",
        description:
            "Live sports scores in a draggable Dynamic Island overlay, without leaving the page you’re on.",
        role: "Design and development",
        tags: ["React", "TypeScript", "Chrome Extension", "Cloudflare Workers"],
        image: "https://i.ytimg.com/vi/2ohyGmZjGzY/sddefault.jpg",
        mediaUrl: "https://www.youtube.com/watch?v=2ohyGmZjGzY",
        github: null,
        demo: "https://chromewebstore.google.com/detail/score-island-live-sports/ohbnnnjjpgcekodkajamnocfbedmeknh",
        demoLabel: "Chrome Web Store",
        status: "Live",
    },
    {
        number: "03",
        category: "Independent project",
        title: "PolyDiscover",
        description:
            "Highlight anything on the web and find related prediction markets in two clicks.",
        role: "Design and development",
        tags: ["React", "TypeScript", "Chrome Extension"],
        image: "https://i.ytimg.com/vi/cXLsZNLs-pU/maxresdefault.jpg",
        mediaUrl: "https://www.youtube.com/watch?v=cXLsZNLs-pU",
        github: null,
        demo: "https://chromewebstore.google.com/detail/polydiscover-%E2%80%93-polymarket/agebcajnepddkkdigcloncjdfnacmaji",
        demoLabel: "Chrome Web Store",
        status: "Live",
    },
];

export const Projects = () => {
    const [featuredProject, ...independentProjects] = projects;

    return (
        <section
            id="projects"
            className="deferred-section bg-gray-50 py-24 dark:bg-dark-900 md:py-24"
        >
            <div className="mx-auto max-w-7xl px-6">
                <header className="flex items-end justify-between border-black/15 pb-6 dark:border-white/15">
                    <h2 className="text-3xl tracking-tight text-gray-900 dark:text-white md:text-4xl">
                        Projects
                    </h2>
                </header>

                <FeaturedProject project={featuredProject} />

                <div className="grid border-black/15 dark:border-white/15 md:grid-cols-2">
                    {independentProjects.map((project, index) => (
                        <SecondaryProject
                            key={project.title}
                            project={project}
                            isSecond={index === 1}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

const FeaturedProject = ({ project }: { project: Project }) => {
    return (
        <article className="group border-b border-black/15 py-12 dark:border-white/15 md:py-16">
            <div className="grid gap-10 md:grid-cols-12 md:gap-14">
                <div className="md:col-span-7">
                    <ProjectMedia project={project} priority />
                </div>

                <div className="flex flex-col md:col-span-5">
                    <ProjectEyebrow project={project} />

                    <h3 className="mt-5 text-3xl tracking-tight text-gray-900 dark:text-white md:text-4xl">
                        {project.title}
                    </h3>

                    <p className="mt-5 max-w-xl leading-relaxed text-gray-600 dark:text-gray-400">
                        {project.description}
                    </p>

                    <ProjectMetadata project={project} />

                    <ProjectLinks project={project} />
                </div>
            </div>
        </article>
    );
};

const SecondaryProject = ({
    project,
    isSecond,
}: {
    project: Project;
    isSecond: boolean;
}) => {
    return (
        <article
            className={[
                "group py-12 md:py-16",
                isSecond
                    ? "border-t border-black/15 dark:border-white/15 md:border-l md:border-t-0 md:pl-10"
                    : "md:pr-10",
            ].join(" ")}
        >
            <ProjectMedia project={project} />

            <div className="mt-8">
                <ProjectEyebrow project={project} />

                <h3 className="mt-4 text-2xl tracking-tight text-gray-900 dark:text-white md:text-3xl">
                    {project.title}
                </h3>

                <p className="mt-4 max-w-xl leading-relaxed text-gray-600 dark:text-gray-400">
                    {project.description}
                </p>

                <ProjectMetadata project={project} compact />

                <ProjectLinks project={project} />
            </div>
        </article>
    );
};

const ProjectMedia = ({
    project,
    priority = false,
}: {
    project: Project;
    priority?: boolean;
}) => {
    const image = (
        <img
            src={project.image}
            alt={`${project.title} preview`}
            loading={priority ? "eager" : "lazy"}
            decoding="async"
            className="h-full w-full object-cover transition-transform duration-500 motion-safe:group-hover:scale-[1.01]"
        />
    );

    if (!project.mediaUrl) {
        return (
            <div className="aspect-video overflow-hidden rounded-[2px] border border-black/10 bg-gray-100 dark:border-white/10 dark:bg-gray-900">
                {image}
            </div>
        );
    }

    return (
        <a
            href={project.mediaUrl}
            target="_blank"
            rel="noreferrer"
            aria-label={`Watch the ${project.title} demo`}
            className="relative block aspect-video overflow-hidden rounded-[2px] border border-black/10 bg-gray-100 dark:border-white/10 dark:bg-gray-900"
        >
            {image}

            <span className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-[2px] bg-gray-950 px-3 py-2 text-[11px] uppercase tracking-[0.14em] text-white">
                <Play size={13} fill="currentColor" />
                Play
            </span>
        </a>
    );
};

const ProjectEyebrow = ({ project }: { project: Project }) => {
    return (
        <p className="text-[11px] uppercase tracking-[0.18em]">
            <span className="text-primary">{project.number}</span>
            <span className="mx-2 text-gray-300 dark:text-gray-700">/</span>
            <span className="text-gray-500 dark:text-gray-400">
                {project.category}
            </span>
        </p>
    );
};

const ProjectMetadata = ({
    project,
    compact = false,
}: {
    project: Project;
    compact?: boolean;
}) => {
    return (
        <dl
            className={[
                "grid grid-cols-[5rem_1fr] gap-x-4 gap-y-3",
                compact ? "mt-7" : "mt-8",
            ].join(" ")}
        >
            <dt className="text-[10px] uppercase tracking-[0.16em] text-gray-400">
                Role
            </dt>
            <dd className="text-gray-700 dark:text-gray-300">{project.role}</dd>

            <dt className="text-[10px] uppercase tracking-[0.16em] text-gray-400">
                Stack
            </dt>
            <dd className="text-gray-700 dark:text-gray-300">
                {project.tags.join(" · ")}
            </dd>

            <dt className="text-[10px] uppercase tracking-[0.16em] text-gray-400">
                Status
            </dt>
            <dd className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                {project.status === "Live" && (
                    <span
                        className="h-1.5 w-1.5 rounded-full bg-emerald-500"
                        aria-hidden="true"
                    />
                )}
                {project.status}
            </dd>
        </dl>
    );
};

const ProjectLinks = ({ project }: { project: Project }) => {
    return (
        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
            {project.github && (
                <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 border-b border-current pb-0.5 text-sm text-gray-900 transition-colors hover:text-primary dark:text-white dark:hover:text-primary-light"
                >
                    <Github size={15} />
                    View code
                </a>
            )}

            {project.demo && (
                <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 border-b border-current pb-0.5 text-sm text-gray-900 transition-colors hover:text-primary dark:text-white dark:hover:text-primary-light"
                >
                    {project.demoLabel}
                    <ArrowUpRight size={15} />
                </a>
            )}
        </div>
    );
};
