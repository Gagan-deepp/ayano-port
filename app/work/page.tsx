"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import LenisDiv from "@/components/LenisDiv";
import { projects } from "@/lib/data";

const WorkPage = () => {
    return (
        <LenisDiv>
            <section className="min-h-screen pt-32 pb-20 bg-[#1a1a1a] relative overflow-hidden">
                <div className="container mx-auto px-6 md:px-12">

                    {/* Header Section */}
                    <div className="mb-24 md:mb-32">
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold font-heading text-white/90 leading-[0.85] tracking-tighter">
                                SELECTED<br />
                                <span className="text-white/20 italic font-serif font-light">WORKS</span>
                            </h1>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="mt-12 max-w-xl"
                        >
                            <p className="text-white/60 font-sans text-sm md:text-base leading-relaxed uppercase tracking-widest">
                                Each project is a unique exploration of code, design, and user experience.
                                Below is a curated selection of my work.
                            </p>
                        </motion.div>
                    </div>

                    {/* Projects List - "OFFICES AND STUDIOS" Style */}
                    <div className="flex flex-col border-t border-white/10">
                        {projects.map((project, idx) => (
                            <Link
                                key={project.slug}
                                href={`/work/${project.slug}`}
                                className="group block"
                            >
                                <motion.div
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: idx * 0.1 }}
                                    viewport={{ once: true, margin: "-10%" }}
                                    className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 py-16 md:py-20 border-b border-white/10 hover:bg-white/[0.02] transition-colors duration-500 cursor-pointer"
                                >
                                    {/* Left: Title - Big & Bold */}
                                    <div className="md:col-span-4 flex flex-col justify-between h-full">
                                        <h2 className="text-4xl md:text-5xl font-heading font-bold text-white/90 leading-none group-hover:text-white transition-colors duration-300">
                                            {project.name}
                                        </h2>
                                        <span className="hidden md:block text-xs font-sans text-white/40 tracking-widest uppercase mt-4">
                                            {project.year}
                                        </span>
                                    </div>

                                    {/* Center: Image Placeholder */}
                                    <div className="md:col-span-4 relative aspect-[4/3] w-full overflow-hidden bg-white/5 border border-white/5">
                                        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/10 group-hover:scale-105 transition-transform duration-700 ease-out" />
                                        <div className="absolute inset-0 flex items-center justify-center text-white/20 font-heading text-sm tracking-widest uppercase">
                                            {project.name} View
                                        </div>
                                    </div>

                                    {/* Right: Details */}
                                    <div className="md:col-span-4 flex flex-col justify-between h-full text-right md:text-left">
                                        <div className="flex flex-col gap-4">
                                            <h3 className="text-sm font-heading text-white/60 tracking-widest uppercase">
                                                {project.realm}
                                            </h3>
                                            <p className="text-white/40 font-sans text-sm leading-relaxed max-w-xs ml-auto md:ml-0">
                                                {project.description}
                                            </p>
                                            <p className="text-white/30 font-serif italic text-sm mt-2">
                                                {project.type}
                                            </p>
                                        </div>

                                        <div className="mt-8 md:mt-0 flex gap-4 items-end md:items-center justify-end md:justify-start">
                                            <div className="inline-flex items-center gap-2 text-white/80 group-hover:text-white transition-colors text-sm font-heading tracking-widest uppercase group-hover:translate-x-2 duration-300">
                                                Case Study
                                                <span className="text-lg">↗</span>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </LenisDiv>
    );
};

export default WorkPage;
