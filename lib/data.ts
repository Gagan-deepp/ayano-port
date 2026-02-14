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
        type: "Next.js + Docker + Google Cloud (Pub Sub, Schedulers, Cloud Run, Cloud Storage, EventArc) ",
        index: "01",
        year: "2025",
        description: "Pankhuri is a women-centric social commerce platform that empowers resellers to build their own online businesses.",
        myRole: "I served as the orchestrator for infrastructural integrity, orchestrating the transition to Google Cloud Run and building semi-autonomous CI/CD pipelines. My focus was on creating a 'quiet' system one that handles automated video transcoding and massive data migrations with the same invisible reliability as a heartbeat. It was about ensuring the platform scales without friction.",
        service: "DevOps & Backend Flow",
        realm: "Social Commerce",
        essence: "Empowering, Community-driven, Scalable — micro-entrepreneurship at scale.",
        images: [
            "/works/pankhuri/mock_1.svg",
            "/works/pankhuri/mock_phonee.png",
            "/works/pankhuri/mock_2.svg",
        ],
        github: "https://github.com/Panthar-InfoHub/Pankhuri-web",
        live: "https://pankhuri.co",
    },
    {
        slug: "learn-space",
        name: "Learn Space",
        type: "Next.js + GenAI",
        index: "02",
        year: "2024",
        description: "Learn Space is revolutionizing education through AI-powered personalization and community collaboration.",
        myRole: "Designed as my major collegiate project, Learn Space is a digital habitat for student community. I integrated Generative AI to provide a more intuitive experience, while ensuring the underlying deployment logic on AWS kept the habitat responsive and stable. It’s a project that explores the balance between technical intelligence and a soft, human-centric social structure.",
        service: "AI Synthesis & Infrastructure Logic",
        realm: "Student Ecosystem",
        essence: "Shared Wisdom. Gentle Guidance.",
        images: [
            "/works/learn_space/mock_1.svg",
            "/works/learn_space/mock_2.svg",
            "/works/learn_space/mock_3.svg",
        ],
        github: "https://github.com/Gagan-deepp/Learn-Space",
        live: "https://learn-space-chi.vercel.app/",
    },
    {
        slug: "suraksha-kawach",
        name: "Suraksha Kawach",
        type: "Next.js + GCP + Docker + Express + Python",
        index: "03",
        year: "2025",
        description: "An AI-enhanced SOS safety ecosystem that captures and analyzes environmental data in real-time.",
        myRole: "I focused on the reliability of the SOS dashboard and the real-time synchronization between edge triggers and emergency responders. By leveraging Docker and GCP, I built a resilient backbone where data capturing and AI analysis remain stable even in high-pressure scenarios. My work was about ensuring that critical information reaches help centres without a single second of delay.",
        service: "Real-time Sync & GCP Infrastructure",
        realm: "Safety / AI-Ops",
        essence: "Alert. Analyze. Protect — when logic becomes a lifeline.",
        images: [
            "/works/pankhuri/mock_1.svg",
            "/works/pankhuri/mock_phonee.png",
            "/works/pankhuri/mock_2.svg",
        ],
        github: "#",
        live: "https://www.surakshakawach.co.in/",
    },
    {
        slug: "rynox",
        name: "Rynox",
        type: "Node.js + Express + AWS",
        index: "04",
        year: "2025",
        description: "Rynox is a high-performance POS and ERP management ecosystem designed for organizational franchise scaling and real-time business intelligence.",
        myRole: "I served as a Full Stack Engineer, architecting a resilient backend to handle complex franchise hierarchies. My work focused on the integration of a high-fidelity POS system and the backend server that handles real-time customer metrics and churn reports. It was about creating a steady system flow that remains silent and stable under the pressure of real-world business operations.",
        service: "ERP Architecture & System Flow",
        realm: "Enterprise / FinTech",
        essence: "Logic. Performance. Resilience — translating scale into technical stability.",
        images: [
            "/works/pankhuri/mock_1.svg",
            "/works/pankhuri/mock_phonee.png",
            "/works/pankhuri/mock_2.svg",
        ],
        github: "#",
        live: "https://rynox.io/",
    },
    {
        slug: "portfolio-v1",
        name: "Portfolio V1",
        type: "React + Framer Motion",
        index: "05",
        year: "2023",
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
        github: "https://github.com/Gagan-deepp/newPortfolio",
        live: "https://ayano-nu.vercel.app/",
    },
];

export const getProjectBySlug = (slug: string) => {
    return projects.find(p => p.slug === slug);
};

export const fetchProjectBySlug = async (slug: string) => {
    return projects.find(p => p.slug === slug);
};
