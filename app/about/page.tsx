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

const fadeUpVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
            delay: 0.2
        }
    }
};

const experiences = [
    {
        role: "Website Designer",
        company: "Freelance",
        period: "2022 — Present"
    },
    {
        role: "UI/UX Design Intern",
        company: "Jaren Design Studio",
        period: "2022"
    },
    {
        role: "Content Marketing Strategist",
        company: "Markeu Collection",
        period: "2021 — 2022"
    }
];

const philosophies = [
    {
        id: "01",
        title: "Intentionality",
        desc: "Every pixel must serve a purpose. Design is the bridge between functionality and emotion."
    },
    {
        id: "02",
        title: "Simplicity",
        desc: "Complexity is easy, simplicity is hard. I strive to distill ideas to their purest form."
    },
    {
        id: "03",
        title: "Humanity",
        desc: "Websites are for people, not browsers. I build digital spaces that feel alive and responsive."
    }
];

const AboutPage = () => {
    return (
        <LenisDiv>
            <section className="min-h-screen pt-32 pb-20 bg-[#1a1a1a] relative">
                <div className="container mx-auto px-6 md:px-12">

                    {/* Hero Section Redesign */}
                    <div className="space-y-16 md:space-y-32">

                        {/* 1. Distinct Main Heading (Header Style) */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="relative z-10 w-full"
                        >
                            <h1 className="text-[14vw] lg:text-[12vw] font-bold font-heading text-white leading-[0.8] tracking-tighter uppercase text-center md:text-left">
                                <span className="block overflow-hidden pb-2 lg:pb-4">
                                    <motion.span variants={revealVariants} className="block">ABOUT</motion.span>
                                </span>
                                <span className="block overflow-hidden">
                                    <motion.span variants={revealVariants} className="block text-white/20 italic font-serif font-light">ME</motion.span>
                                </span>
                            </h1>
                        </motion.div>

                        {/* 2. Content Grid (Portrait + Bio/Experience) */}
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">

                            {/* Left: Portrait */}
                            <div className="lg:col-span-6">
                                <div className="relative aspect-4/5 rounded-3xl overflow-hidden bg-white/5 border border-white/10 group max-w-2xl mx-auto lg:mx-0">
                                    <motion.div
                                        initial={{ scale: 1.2, opacity: 0 }}
                                        whileInView={{ scale: 1, opacity: 1 }}
                                        transition={{ duration: 1.5, ease: [0.33, 1, 0.68, 1] }}
                                        viewport={{ once: true }}
                                        className="absolute inset-0"
                                    >
                                        <Image
                                            src="/abt.png"
                                            alt="Portrait"
                                            fill
                                            className="object-cover grayscale opacity-60 transition-all duration-700 group-hover:grayscale-0 group-hover:opacity-80"
                                        />
                                    </motion.div>
                                    <div className="absolute inset-0 bg-linear-to-t from-[#1a1a1a]/80 via-transparent to-transparent pointer-events-none" />
                                </div>
                            </div>

                            {/* Right: Bio & Experience (CENTRED vertically/horizontally) */}
                            <div className="lg:col-span-6 flex flex-col justify-center space-y-20 lg:text-left">

                                {/* Bio Content */}
                                <div className="space-y-12">
                                    <motion.div
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true }}
                                        className="space-y-10"
                                    >
                                        <div className="overflow-hidden">
                                            <motion.h2 variants={revealVariants} className="text-3xl md:text-4xl font-heading font-medium text-white/90 leading-tight">
                                                Hi, I'm a website designer with a passion for creative & digital experiences.
                                            </motion.h2>
                                        </div>

                                        <div className="space-y-8">
                                            <div className="overflow-hidden">
                                                <motion.p
                                                    initial="hidden"
                                                    whileInView="visible"
                                                    variants={fadeUpVariants}
                                                    className="text-white/40 font-sans text-base md:text-lg leading-relaxed max-w-xl"
                                                >
                                                    I studied at Luxemburg University, where I discovered how strategy, design, and user behavior converge to create meaningful impact.
                                                </motion.p>
                                            </div>
                                            <div className="overflow-hidden">
                                                <motion.p
                                                    initial="hidden"
                                                    whileInView="visible"
                                                    variants={fadeUpVariants}
                                                    className="text-white/40 font-sans text-base md:text-lg leading-relaxed max-w-xl"
                                                >
                                                    Over the years, I've worked on various projects—from personal portfolios to business websites—combining strong visual storytelling with usability.
                                                </motion.p>
                                            </div>
                                        </div>
                                    </motion.div>

                                    <div className="w-16 h-px bg-white/10" />
                                </div>

                                {/* Experience Section */}
                                <div className="space-y-12">
                                    <motion.span
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        viewport={{ once: true }}
                                        className="text-white/20 font-heading text-xs uppercase tracking-[0.3em] block"
                                    >
                                        Experiences
                                    </motion.span>

                                    <div className="space-y-10">
                                        {experiences.map((exp, idx) => (
                                            <motion.div
                                                key={idx}
                                                initial="hidden"
                                                whileInView="visible"
                                                viewport={{ once: true }}
                                                className="group"
                                            >
                                                <div className="overflow-hidden">
                                                    <motion.h4 variants={revealVariants} className="text-white/80 font-heading text-xl group-hover:text-white transition-colors">
                                                        {exp.role} — <span className="text-white/30 font-light group-hover:text-white/50">{exp.company}</span>
                                                    </motion.h4>
                                                </div>
                                                <div className="overflow-hidden mt-1 px-px">
                                                    <motion.span variants={fadeUpVariants} className="text-white/20 font-sans text-xs uppercase tracking-widest block">
                                                        {exp.period}
                                                    </motion.span>
                                                </div>
                                                <div className="mt-8 border-b border-white/5 group-last:hidden" />
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>

                    {/* Philosophy Pattern Section */}
                    <div className="mt-40 md:mt-60 border-t border-white/10 pt-20">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12">
                            {philosophies.map((philo) => (
                                <motion.div
                                    key={philo.id}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, margin: "-10%" }}
                                    className="space-y-8 group"
                                >
                                    <div className="overflow-hidden">
                                        <motion.div variants={revealVariants} className="text-white/20 font-heading font-medium text-4xl">
                                            {philo.id}
                                        </motion.div>
                                    </div>
                                    <div className="space-y-4">
                                        <div className="overflow-hidden">
                                            <motion.h3 variants={revealVariants} className="text-white/90 font-heading text-2xl uppercase tracking-tighter">
                                                {philo.title}
                                            </motion.h3>
                                        </div>
                                        <motion.p
                                            initial={{ opacity: 0 }}
                                            whileInView={{ opacity: 1 }}
                                            transition={{ duration: 1, delay: 0.3 }}
                                            className="text-white/40 font-sans text-sm leading-relaxed"
                                        >
                                            {philo.desc}
                                        </motion.p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Creative Direction Section - Editorial Text + Image */}
                    <div className="mt-40 md:mt-60 border-t border-white/10 pt-24">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

                            {/* Left: Text Content */}
                            <div className="lg:col-span-6 space-y-12">
                                <motion.div
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    className="space-y-6"
                                >
                                    <h2 className="text-5xl md:text-7xl font-heading font-bold text-white/90 uppercase tracking-tighter leading-tight">
                                        Creative <br /> <span className="text-white/20 italic font-serif font-light">Direction</span>
                                    </h2>
                                    <div className="h-px w-24 bg-white/10" />
                                </motion.div>

                                <div className="space-y-8 max-w-lg text-white/40 font-sans text-base md:text-lg leading-relaxed">
                                    <motion.p
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 1 }}
                                        viewport={{ once: true }}
                                    >
                                        I don't just design interfaces; I direct digital narratives. My approach focuses on the intersection of brand story and technical performance.
                                    </motion.p>

                                    <motion.p
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 1, delay: 0.2 }}
                                        viewport={{ once: true }}
                                    >
                                        Whether it's a minimal portfolio or a complex platform, I aim to create a feeling of effortless motion and silent power—where every interaction feels heavy with meaning yet light in execution.
                                    </motion.p>

                                    <div className="pt-8">
                                        <motion.div
                                            initial={{ scaleX: 0 }}
                                            whileInView={{ scaleX: 1 }}
                                            transition={{ duration: 1.5, ease: "circOut" }}
                                            viewport={{ once: true }}
                                            className="h-px w-full bg-white/10 origin-left"
                                        />
                                        <div className="mt-4 flex justify-between text-[10px] uppercase tracking-[0.4em] text-white/20 font-heading">
                                            <span>Visual Systems</span>
                                            <span>Digital Craft</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Right: Immersive Image with Mask Reveal */}
                            <div className="lg:col-span-6">
                                <motion.div
                                    initial={{ clipPath: "inset(0% 100% 0% 0%)" }}
                                    whileInView={{ clipPath: "inset(0% 0% 0% 0%)" }}
                                    transition={{ duration: 1.5, ease: [0.77, 0, 0.175, 1] }}
                                    viewport={{ once: true }}
                                    className="relative aspect-square rounded-3xl overflow-hidden bg-white/5 border border-white/5 group"
                                >
                                    <Image
                                        src="/abt.png"
                                        alt="Direction"
                                        fill
                                        className="object-cover opacity-60 group-hover:scale-105 transition-transform duration-1000 grayscale group-hover:grayscale-0"
                                    />
                                    <div className="absolute inset-0 bg-linear-to-tr from-[#1a1a1a]/40 to-transparent pointer-events-none" />
                                </motion.div>
                            </div>

                        </div>
                    </div>

                    {/* Footer Gap */}
                    <div className="h-40" />

                </div>
            </section>
        </LenisDiv>
    );
};

export default AboutPage;