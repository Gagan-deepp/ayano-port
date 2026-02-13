export interface Project {
    slug: string;
    name: string;
    type: string;
    index: string;
    description: string;
    myRole: string;
    service: string;
    realm: string;
    essence: string;
    images: string[];
    github: string;
    live: string;
    year: string;
}

export const projects: Project[] = [
    {
        slug: "pankhuri",
        name: "Pankhuri",
        type: "Next.js + Docker + GCP",
        index: "01",
        year: "2023",
        description: "Pankhuri is a women-centric social commerce platform that empowers resellers to build their own online businesses.",
        myRole: "I acted as the orchestrator for the backend architecture and end-to-end deployment pipelines. My work focused on creating a steady, high-performance foundation—handling everything from automated video transcoding to large-scale data migrations. It was about building a technical heartbeat that remains quiet and reliable while the platform scales.",
        service: "Backend Orchestration & System Flow",
        realm: "Social Commerce",
        essence: "Empowering, Community-driven, Scalable — micro-entrepreneurship at scale.",
        images: [
            "/works/pankhuri/mock_1.svg",
            "/works/pankhuri/mock_phonee.png",
            "/works/pankhuri/mock_2.svg",
        ],
        github: "#",
        live: "#",
    },
    {
        slug: "learn-space",
        name: "Learn Space",
        type: "Next.js + GenAI",
        index: "02",
        year: "2024",
        description: "Learn Space is revolutionizing education through AI-powered personalization and community collaboration.",
        myRole: "Designed as my major collegiate project, Learn Space is a digital habitat for student community. I integrated Generative AI to provide a more intuitive experience—shaping profile analysis and career recommendations into personalized guides. It’s a project that explores the balance between technical intelligence and a soft, human-centric social structure.",
        service: "AI Synthesis & Community Habitats",
        realm: "Student Ecosystem",
        essence: "Shared Wisdom. Gentle Guidance.",
        images: [
            "/works/learn_space/mock_1.svg",
            "/works/learn_space/mock_2.svg",
            "/works/learn_space/mock_3.svg",
        ],
        github: "#",
        live: "https://learn-space-chi.vercel.app/",
    },
    {
        slug: "portfolio-v1",
        name: "Portfolio V1",
        type: "React + Framer Motion",
        index: "03",
        year: "2022",
        description: "My previous portfolio website focusing on experimental typography and motion.",
        myRole: "My first dedicated sandbox for creative engineering. This project was a deep dive into the quiet secrets of frontend design, where I tested how layout and motion can communicate design thoughts. It was the starting point for my minimalist philosophy—learning to blend technical precision with a soft, intentional touch.",
        service: "Creative Development & Visual Play",
        realm: "Design Sandbox",
        essence: "Pure Curiosity. Fluid Motion.",
        images: [
            "/works/portfolio_v1/mock_1.svg",
            "/works/portfolio_v1/mock_phonee.png",
            "/works/portfolio_v1/mock_2.svg"
        ],
        github: "#",
        live: "https://ayano-nu.vercel.app/",
    },
    {
        slug: "ai-saas",
        name: "AI SaaS",
        type: "Python + OpenAI",
        index: "04",
        year: "2023",
        description: "Generative AI platform for content creators and marketing teams.",
        myRole: "A streamlined B2B platform designed to automate the heavy lifting of content strategy. By leveraging OpenAI's APIs and custom fine-tuned models, this SaaS provides high-fidelity copy generation and predictive performance analytics. The challenge was creating a dashboard that felt powerful yet simple enough for non-technical users to navigate, focusing on low-latency responses and intuitive prompt engineering.",
        service: "SaaS Strategy & Machine Intelligence",
        realm: "Digital Tool",
        essence: "Quiet Efficiency. Clear Insight.",
        images: [
            "/abt_02.png",
            "/abt_02.png",
            "/abt_02.png"
        ],
        github: "#",
        live: "#",
    }
];

export const getProjectBySlug = (slug: string) => {
    return projects.find(p => p.slug === slug);
};
