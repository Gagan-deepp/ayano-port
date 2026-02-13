"use client";

import { motion, Variants } from "framer-motion";
import LenisDiv from "@/components/LenisDiv";
import Image from "next/image";

// Animation Variants
const revealVariants: Variants = {
    hidden: { y: "110%" },
    visible: {
        y: "0%",
        transition: {
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
        }
    }
};

const skillCategories = [
    {
        id: "01",
        title: "Frontend",
        skills: [
            "React.js / Next.js",
            "TypeScript / JavaScript",
            "Tailwind CSS / SCSS",
            "Framer Motion / GSAP",
            "Three.js (Basics)",
            "Responsive Strategy"
        ]
    },
    {
        id: "02",
        title: "Backend & Systems",
        skills: [
            "Node.js / Express",
            "Python / Django",
            "PostgreSQL / MongoDB",
            "REST / GraphQL APIs",
            "System Architecture",
            "Database Design"
        ]
    },
    {
        id: "03",
        title: "DevOps & Tools",
        skills: [
            "Docker / Kubernetes",
            "CI / CD Pipelines",
            "AWS / Vercel / GCP",
            "Git / GitHub Actions",
            "Testing (Jest / Cypress)",
            "Performance Optimization"
        ]
    },
    {
        id: "04",
        title: "Design & UX",
        skills: [
            "Figma / Adobe Suite",
            "Visual Storytelling",
            "Typography & Layout",
            "Motion Design",
            "Aesthetic Engineering",
            "User-Centric Research"
        ]
    }
];

const SkillsPage = () => {
    return (
        <LenisDiv>
            <section className="min-h-screen pt-32 pb-20 bg-[#1a1a1a] relative overflow-hidden">
                <div className="container mx-auto px-6 md:px-12">

                    {/* Header Section */}
                    <div className="mb-24 md:mb-32">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                        >
                            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold font-heading text-white/90 leading-[0.85] tracking-tighter">
                                <span className="block overflow-hidden pb-2">
                                    <motion.span variants={revealVariants} className="block">MY</motion.span>
                                </span>
                                <span className="block overflow-hidden">
                                    <motion.span variants={revealVariants} className="block text-white/20 italic font-serif font-light">SKILLS</motion.span>
                                </span>
                            </h1>
                        </motion.div>

                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            className="mt-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-8 border-b border-white/10 pb-12"
                        >
                            <div className="overflow-hidden">
                                <motion.p variants={revealVariants} className="max-w-md text-white/40 font-sans text-sm md:text-base leading-relaxed uppercase tracking-widest">
                                    A compilation of technical tools and creative methodologies I use to build intentional digital experiences.
                                </motion.p>
                            </div>
                            <div className="overflow-hidden">
                                <motion.div variants={revealVariants} className="text-white/20 font-heading text-xs tracking-widest uppercase text-right">
                                    [ Technical Expertise ] <br />
                                    [ 2021 — Present ]
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Skills Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 border border-white/10 rounded-3xl overflow-hidden">
                        {skillCategories.map((category) => (
                            <motion.div
                                key={category.id}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ margin: "-10%" }}
                                className="bg-[#1e1e1e] p-10 lg:p-16 flex flex-col gap-12 group hover:bg-[#222] transition-colors duration-500"
                            >
                                <div className="flex justify-between items-start">
                                    <div className="overflow-hidden">
                                        <motion.h2
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.8, delay: 0.2 }}
                                            className="text-3xl md:text-4xl font-heading font-bold text-white/80 uppercase tracking-tighter group-hover:text-white transition-colors"
                                        >
                                            {category.title}
                                        </motion.h2>
                                    </div>
                                    <div className="overflow-hidden">
                                        <motion.div

                                            initial={{ opacity: 0 }}
                                            whileInView={{ opacity: 1 }}
                                            transition={{ duration: 0.8, delay: 0.2 }}
                                            className="flex items-center justify-center w-12 h-12 rounded-full border border-white/20 text-white/40 font-heading font-bold text-sm"
                                        >
                                            {category.id}
                                        </motion.div>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {category.skills.map((skill, i) => (
                                        <div key={i} className="overflow-hidden">
                                            <motion.div

                                                initial={{ opacity: 0, y: "100%" }}
                                                whileInView={{ opacity: 1, y: "0%" }}
                                                transition={{ duration: 0.8, delay: 0.2 }}
                                                className="flex items-center gap-3 text-white/40 font-sans text-sm tracking-wide lowercase group-hover:text-white/60 transition-colors"
                                            >
                                                <span className="w-1.5 h-1.5 rounded-full bg-white/10" />
                                                {skill}
                                            </motion.div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-24 md:mt-32 grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
                        <div className="md:col-span-7 aspect-video relative rounded-3xl overflow-hidden bg-white/5 border border-white/10 group">
                            <motion.div
                                initial={{ scale: 1.2, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 1.4, ease: [0.33, 1, 0.68, 1] }}
                                className="absolute inset-0"
                            >
                                <Image
                                    src="/skills/skills.png"
                                    alt="Skills Image"
                                    fill
                                    className="object-cover opacity-60"
                                />
                            </motion.div>
                            <div className="absolute inset-0 bg-linear-to-t from-[#1a1a1a] via-transparent to-transparent pointer-events-none" />
                        </div>

                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ margin: "-10%" }}
                            className="md:col-span-5 flex flex-col gap-8"
                        >
                            <div className="overflow-hidden">
                                <motion.span
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.2 }}
                                    className="block text-white/20 font-heading text-xs tracking-[0.3em] uppercase italic"
                                >
                                    Learning is a silent commitment.
                                </motion.span>
                            </div>

                            <div className="overflow-hidden">
                                <motion.h3
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.2 }}
                                    className="text-4xl font-heading font-bold text-white/90 leading-tight uppercase tracking-tighter"
                                >
                                    Continuous <br />
                                    Growth <br />
                                    <span className="text-white/20 italic font-serif font-light">Mindset</span>
                                </motion.h3>
                            </div>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="text-white/40 font-sans text-sm leading-relaxed"
                            >
                                Beyond the syntax and tools, I value the architecture of thought. Every new technology is a lens to solve problems more elegantly.
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 1, delay: 0.4 }}
                                className="mt-4 flex items-center gap-6 text-white/20"
                            >
                                <div className="w-12 h-px bg-white/10" />
                                <span className="font-serif italic text-lg opacity-70">✦ Always evolving.</span>
                            </motion.div>
                        </motion.div>
                    </div>

                </div>
            </section>
        </LenisDiv>
    );
};

export default SkillsPage;