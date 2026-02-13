export interface Project {
    slug: string;
    name: string;
    type: string;
    index: string;
    description: string;
    fullDescription: string;
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
        fullDescription: "Pankhuri brings the power of social commerce to a distinctly Indian demographic — local, community-driven, and built on trust. By providing a robust technical foundation of automated order management and secure payment gateways, we enable thousands of women to scale their micro-businesses from home. The platform focuses on high-performance scalability using Docker and Google Cloud Platform, ensuring that peak traffic during social events remains seamless.",
        service: "Social Commerce & Full Stack Engineering",
        realm: "E-Commerce",
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
        fullDescription: "Learn Space redefines the digital classroom into a fluid, adaptive environment where AI acts as a personal tutor. By integrating Large Language Models directly into the learning path, the platform identifies knowledge gaps in real-time and generates custom remedial content. Built with a focus on collaborative mechanics, it allows students to co-create knowledge bases, blurring the lines between static curriculum and dynamic community wisdom.",
        service: "EdTech & Generative AI Integration",
        realm: "Education",
        essence: "Adaptive, Collaborative, Intelligent — the future of self-paced learning.",
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
        fullDescription: "A playground for digital expression, Portfolio V1 was an exploration into high-frequency motion and brutalist layouts. It served as a technical proof-of-concept for custom Framer Motion variants and complex SVG mask animations. While the aesthetic was raw and experimental, the underlying architecture remained strictly component-driven, favoring modularity and performance even in a highly animated environment.",
        service: "Personal Branding & Creative Development",
        realm: "Design",
        essence: "Experimental, Bold, Kinetic — testing the boundaries of web motion.",
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
        fullDescription: "A streamlined B2B platform designed to automate the heavy lifting of content strategy. By leveraging OpenAI's APIs and custom fine-tuned models, this SaaS provides high-fidelity copy generation and predictive performance analytics. The challenge was creating a dashboard that felt powerful yet simple enough for non-technical users to navigate, focusing on low-latency responses and intuitive prompt engineering.",
        service: "SaaS Dev & Prompt Engineering",
        realm: "Technology",
        essence: "Efficient, Insightful, Minimal — AI as a tool for human creativity.",
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
