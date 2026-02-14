import { fetchProjectBySlug, projects } from "@/lib/data";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import ProjectContent from "./ProjectContent";

interface PageProps {
    params: Promise<{ slug: string }>;
}

export const revalidate = 3600; // ISR: Revalidate once per hour

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const project = await fetchProjectBySlug(slug);

    if (!project) return {};

    return {
        title: project.name,
        description: project.description,
        openGraph: {
            title: project.name,
            description: project.description,
            images: [project.images[0]],
        },
    };
}

export async function generateStaticParams() {
    return projects.map((project) => ({
        slug: project.slug,
    }));
}

const WorkDetail = async ({ params }: PageProps) => {
    const { slug } = await params;
    const project = await fetchProjectBySlug(slug);

    if (!project) {
        notFound();
    }

    // Find next project for navigation
    const currentIndex = projects.findIndex(p => p.slug === slug);
    const nextProject = projects[(currentIndex + 1) % projects.length];

    return <ProjectContent project={project} nextProject={nextProject} />;
};

export default WorkDetail;
