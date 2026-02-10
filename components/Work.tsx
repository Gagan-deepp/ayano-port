"use client";

import { motion } from "framer-motion";

const projects = [
    {
        name: "Pankhuri",
        type: "Next.js + Docker + GCP",
        slug: "pankhuri",
        index: "01",
        description: "Pankhuri is a women-centric social commerce platform that empowers resellers to build their own online businesses.",
        github: "#",
        live: "#",
    },
    {
        name: "Learn Space",
        slug: "learn-space",
        type: "Next.js + GenAI",
        index: "02",
        description: "Learn Space is revolutionizing education through AI-powered personalization and community collaboration.",
        github: "#",
        live: "https://learn-space-chi.vercel.app/",
    },
    {
        name: "Portfolio V1",
        slug: "portfolio-v1",
        type: "React + Framer Motion",
        index: "03",
        description: "My previous portfolio website.",
        github: "#",
        live: "https://ayano-nu.vercel.app/",
    },
    {
        name: "AI SaaS",
        slug: "ai-saas",
        type: "Python + OpenAI",
        index: "04",
        description: "Generative AI platform for content creators.",
        github: "#",
        live: "#",
    }
];

const Work = () => {

    return (
        <section className="min-h-screen py-32 bg-[#1a1a1a] relative overflow-hidden" id="work">
            <div className="container mx-auto ">

                {/* Heading with Mask Animation */}
                <div className="mb-24 md:mb-32 px-12">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-6xl md:text-8xl lg:text-9xl font-bold font-heading text-white/90 leading-[0.85] tracking-tighter overflow-hidden">
                            <motion.span
                                initial={{ y: "100%" }}
                                whileInView={{ y: 0 }}
                                transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }} // smooth ease
                                className="block"
                            >
                                MY
                            </motion.span>
                            <motion.span
                                initial={{ y: "100%" }}
                                whileInView={{ y: 0 }}
                                transition={{ duration: 0.8, delay: 0.1, ease: [0.33, 1, 0.68, 1] }}
                                className="block text-white/20 italic font-serif font-light"
                            >
                                WORKS
                            </motion.span>
                        </h2>
                    </motion.div>
                </div>

                {/* Project List */}
                <div className="flex flex-col gap-8 ">
                    {projects.map((project, idx) => (
                        <motion.a
                            key={project.index}
                            href={`/work/${project.slug}`}
                            rel="noopener noreferrer"
                            initial="initial"
                            whileInView="animate"
                            viewport={{ margin: "-50px" }}
                            whileHover={{
                                scale: 1.02,
                                y: -5,
                                backgroundColor: "rgba(255, 255, 255, 0.03)",
                                borderRadius: "16px",
                                backdropFilter: "blur(2px)",
                                boxShadow: "0 20px 40px -10px rgba(0,0,0,0.3)",
                                transition: { duration: 0.3, ease: "easeOut" }
                            }}
                            className="group relative flex flex-col md:flex-row md:items-center justify-between py-12 md:px-8 border-b border-white/10 hover:border-transparent transition-all duration-500 cursor-pointer"
                        >
                            {/* Left: Index & Name */}
                            <div className="flex items-baseline gap-6 md:gap-12 relative z-10 transition-transform duration-500 group-hover:translate-x-2">
                                {/* Index Mask */}
                                <div className="overflow-hidden">
                                    <motion.span
                                        variants={{
                                            initial: { y: "100%" },
                                            animate: { y: 0, transition: { duration: 0.6, ease: [0.33, 1, 0.68, 1], delay: idx * 0.1 } }
                                        }}
                                        className="block text-sm md:text-base font-heading text-white/30 tracking-widest"
                                    >
                                        ({project.index})
                                    </motion.span>
                                </div>

                                <div className="flex flex-col gap-1">
                                    {/* Name Mask */}
                                    <div className="overflow-hidden">
                                        <motion.h3
                                            variants={{
                                                initial: { y: "100%" },
                                                animate: { y: 0, transition: { duration: 0.6, ease: [0.33, 1, 0.68, 1], delay: idx * 0.1 + 0.05 } }
                                            }}
                                            className="block text-4xl md:text-6xl lg:text-7xl font-bold font-heading text-white/80 group-hover:text-white transition-colors duration-500 leading-tight pb-2 md:pb-0"
                                        >
                                            {project.name}
                                        </motion.h3>
                                    </div>

                                    {/* Type Mask */}
                                    <div className="overflow-hidden">
                                        <motion.span
                                            variants={{
                                                initial: { y: "100%" },
                                                animate: { y: 0, transition: { duration: 0.6, ease: [0.33, 1, 0.68, 1], delay: idx * 0.1 + 0.1 } }
                                            }}
                                            className="block text-xs md:text-sm font-sans text-white/40 tracking-widest uppercase group-hover:text-white/60 transition-colors duration-500"
                                        >
                                            {project.type}
                                        </motion.span>
                                    </div>
                                </div>
                            </div>

                            {/* Right: Icons & Interaction - Reveal with opacity/scale */}
                            <motion.div
                                variants={{
                                    initial: { opacity: 0, scale: 0.8 },
                                    animate: { opacity: 1, scale: 1, transition: { duration: 0.6, delay: idx * 0.1 + 0.2 } }
                                }}
                                className="flex items-center gap-8 mt-6 md:mt-0 relative z-10 transition-transform duration-500 group-hover:-translate-x-2"
                            >
                                {/* Github Icon */}
                                <motion.div
                                    whileHover={{ scale: 1.1, rotate: 10 }}
                                    className="p-3 rounded-full bg-white/5 text-white/40 hover:bg-white/10 hover:text-white transition-all duration-300"
                                >
                                    <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                                </motion.div>

                                {/* Live Project Icon - Arrow */}
                                <motion.div
                                    whileHover={{ scale: 1.1, x: 5 }}
                                    className="p-3 rounded-full bg-white/5 text-white/40 hover:bg-white/10 hover:text-white transition-all duration-300"
                                >
                                    <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                                    </svg>
                                </motion.div>
                            </motion.div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Work;