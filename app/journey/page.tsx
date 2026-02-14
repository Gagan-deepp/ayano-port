"use client";

import LenisDiv from "@/components/LenisDiv";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const stages = [
    {
        id: "school",
        title: "School",
        subtitle: "The Foundation",
        period: "2010 - 2018",
        description: "Early exploration into logic and creativity. This is where the curiosity for how things work began, moving from physical sketches to digital logic.",
        image: "/journey/school.png",
        color: "bg-[#2a2a2a]",
        details: [
            "Mathematics & Computer Sci Focus",
            "First encounter with basic programming",
            "Basic python projects and Physics horror"
        ]
    },
    {
        id: "college",
        title: "College",
        subtitle: "The Specialization",
        period: "2021 - 2025",
        description: "Deep dive into Computer Science and Engineering. Focusing on system architecture, algorithms, and the bridge between design and code.",
        image: "/journey/clg.png",
        color: "bg-[#222222]",
        details: [
            "B.Tech in Computer Science",
            "Full Stack Web Development projects",
            "Open Source contributions"
        ]
    },
    {
        id: "professional",
        title: "Professional",
        subtitle: "The Craft",
        period: "2025 - Present",
        description: "Operating at the intersection of architectural logic and aesthetic systems focusing on the robustness beneath the surface.",
        image: "/journey/office.png",
        color: "bg-[#1f1f1f]",
        details: [
            "Full-stack System Architecture",
            "DevOps & Infrastructure Resilience",
            "Strategic Automation Planning"
        ]
    }
];

const Journey = () => {
    const [activeStage, setActiveStage] = useState<string | null>("professional");

    return (
        <LenisDiv>
            <section className="min-h-screen pt-32 pb-20 bg-[#1a1a1a] relative overflow-hidden">
                <div className="container mx-auto px-6 md:px-12 h-full flex flex-col">

                    {/* Header */}
                    <div className="mb-20">
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-6xl md:text-8xl font-bold font-heading text-white/90 leading-[0.85] tracking-tighter"
                        >
                            MY<br />
                            <span className="text-white/20 italic font-serif font-light">JOURNEY</span>
                        </motion.h1>
                    </div>

                    {/* Interactive Accordion Cards */}
                    <div className="flex flex-col md:flex-row gap-4 h-150 md:h-125 w-full items-stretch">
                        {stages.map((stage, index) => {
                            const isActive = activeStage === stage.id;

                            return (
                                <motion.div
                                    key={stage.id}
                                    layout
                                    onClick={() => setActiveStage(stage.id)}
                                    className={`relative cursor-pointer overflow-hidden rounded-3xl transition-all duration-500 flex flex-col ${isActive ? "flex-4" : "flex-1"
                                        } ${stage.color} border border-white/5 hover:border-white/10`}
                                >
                                    {/* Collapsed State: Vertical Text or Big Icon */}
                                    <AnimatePresence mode="wait">
                                        {!isActive ? (
                                            <motion.div
                                                key="collapsed"
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                exit={{ opacity: 0 }}
                                                className="absolute inset-0 flex flex-row md:flex-col items-center justify-between px-6 py-6 md:py-10 md:px-6"
                                            >
                                                {/* Top: Large Arrow Circle */}
                                                <div className="flex items-center justify-center w-14 h-14 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm group-hover:bg-white/10 transition-colors">
                                                    <svg className="w-6 h-6 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                                                    </svg>
                                                </div>

                                                {/* Center: Vertical Title */}
                                                <div className="flex-1 flex items-center justify-center">
                                                    <span className="text-white/40 font-heading font-medium text-sm lg:text-base uppercase tracking-[0.4em] md:-rotate-180 md:[writing-mode:vertical-lr] whitespace-nowrap">
                                                        {stage.title}
                                                    </span>
                                                </div>

                                                {/* Bottom: Index */}
                                                <div className="text-white/20 font-heading font-bold text-lg tracking-tighter">
                                                    0{stages.indexOf(stage) + 1}
                                                </div>
                                            </motion.div>
                                        ) : (
                                            <motion.div
                                                key="expanded"
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ duration: 0.5, delay: 0.2 }}
                                                className="h-full flex flex-col md:flex-row p-8 md:p-12 gap-8 md:gap-12 overflow-y-auto"
                                            >
                                                {/* Left: Content */}
                                                <div className="flex-1 flex flex-col justify-between">
                                                    <div>
                                                        <div className="flex justify-between items-baseline mb-2">
                                                            <h2 className="text-3xl md:text-5xl font-heading font-bold text-white/90 uppercase tracking-tighter">
                                                                {stage.title}
                                                            </h2>
                                                            <span className="text-white/20 font-sans text-xs tracking-widest uppercase">
                                                                {stage.period}
                                                            </span>
                                                        </div>
                                                        <p className="text-white/40 font-serif italic text-lg mb-8">
                                                            {stage.subtitle}
                                                        </p>
                                                        <p className="text-white/60 font-sans text-sm md:text-base leading-relaxed max-w-md mb-8">
                                                            {stage.description}
                                                        </p>

                                                        <ul className="space-y-3">
                                                            {stage.details.map((item, i) => (
                                                                <motion.li
                                                                    initial={{ opacity: 0, x: -10 }}
                                                                    animate={{ opacity: 1, x: 0 }}
                                                                    transition={{ delay: 0.4 + (i * 0.1) }}
                                                                    key={i}
                                                                    className="flex items-center gap-3 text-white/40 text-xs md:text-sm font-heading tracking-wide uppercase"
                                                                >
                                                                    <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
                                                                    {item}
                                                                </motion.li>
                                                            ))}
                                                        </ul>
                                                    </div>

                                                    <div className="mt-8 flex justify-end md:justify-start">
                                                        <span className="text-white/10 text-8xl font-heading font-bold leading-none pointer-events-none select-none">
                                                            0{index + 1}
                                                        </span>
                                                    </div>
                                                </div>

                                                {/* Right/Top: Image Placeholder */}
                                                <div className="flex-1 relative rounded-2xl overflow-hidden bg-white/5 order-first md:order-none min-h-50 md:min-h-0">
                                                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />
                                                    <div className="absolute inset-0 flex items-center justify-center text-white/10 font-heading text-xs tracking-[0.3em] uppercase">
                                                        <Image
                                                            src={stage.image}
                                                            alt={stage.title}
                                                            fill
                                                            className="object-cover"
                                                        />
                                                    </div>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>

                                    {/* Hover overlay hint */}
                                    {!isActive && (
                                        <div className="absolute inset-0 bg-white/[0.02] opacity-0 hover:opacity-100 transition-opacity pointer-events-none" />
                                    )}
                                </motion.div>
                            );
                        })}
                    </div>

                    {/* Bottom Info */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="mt-20 flex flex-col md:flex-row justify-between items-end gap-8 border-t border-white/5 pt-12"
                    >
                        <p className="text-white/20 font-serif italic text-lg max-w-sm">
                            &quot;Progress is not just moving forward, but building upon the layers of the past.&quot;
                        </p>
                        <div className="flex gap-12 font-heading text-xs tracking-[0.2em] uppercase text-white/40">
                            <div>
                                <p className="text-white/20 mb-2">Curated</p>
                                <p>2010 — 2026</p>
                            </div>
                            <div>
                                <p className="text-white/20 mb-2">Focus</p>
                                <p>Growth & Design</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </LenisDiv>
    );
};

export default Journey;
