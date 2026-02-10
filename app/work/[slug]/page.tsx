"use client";

import LenisDiv from "@/components/LenisDiv";
import { getProjectBySlug, projects } from "@/lib/data";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";

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
        }
    }
};

const WorkDetail = () => {
    const params = useParams();
    const router = useRouter();
    const slug = params.slug as string;
    const project = getProjectBySlug(slug);

    // Find next project for navigation
    const currentIndex = projects.findIndex(p => p.slug === slug);
    const nextProject = projects[(currentIndex + 1) % projects.length];

    if (!project) {
        return (
            <div className="min-h-screen bg-[#1a1a1a] flex items-center justify-center text-white font-heading uppercase tracking-widest">
                Project Not Found
            </div>
        );
    }

    return (
        <LenisDiv>
            <section className="min-h-screen pt-32 pb-20 bg-[#1a1a1a] relative overflow-hidden">
                <div className="container mx-auto px-6 md:px-12">

                    {/* 1. Back Navigation */}
                    <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="mb-16 md:mb-24"
                    >
                        <Link href="/work" className="group flex items-center gap-3 text-white/40 hover:text-white transition-colors duration-300">
                            <span className="text-xl rotate-180 group-hover:-translate-x-1 transition-transform duration-300">↗</span>
                            <span className="text-[10px] uppercase tracking-[0.4em] font-heading mt-0.5">Back to work</span>
                        </Link>
                    </motion.div>

                    {/* 2. Hero Section - Massive Title */}
                    <div className="mb-24 md:mb-40">
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <h1 className="text-[12vw] md:text-[10vw] font-bold font-heading text-white leading-[0.8] tracking-tighter uppercase">
                                <span className="block overflow-hidden pb-4">
                                    <motion.span variants={revealVariants} className="block">{project.name.split(' ')[0]}</motion.span>
                                </span>
                                {project.name.split(' ').length > 1 && (
                                    <span className="block overflow-hidden">
                                        <motion.span variants={revealVariants} className="block text-white/20 italic font-serif font-light">{project.name.split(' ').slice(1).join(' ')}</motion.span>
                                    </span>
                                )}
                            </h1>
                        </motion.div>
                    </div>

                    {/* 3. Editorial Overview Section */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-24 mb-40 border-t border-white/10 pt-16">

                        {/* Left: Long Description */}
                        <div className="lg:col-span-7 space-y-12">
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                className="space-y-8"
                            >
                                <div className="max-w-xl">
                                    <motion.p
                                        variants={fadeUpVariants}
                                        className="text-white/80 font-heading text-2xl md:text-3xl leading-snug"
                                    >
                                        {project.description}
                                    </motion.p>
                                </div>
                                <div className="max-w-2xl">
                                    <motion.p
                                        variants={fadeUpVariants}
                                        className="text-white/40 font-sans text-base md:text-lg leading-relaxed"
                                    >
                                        {project.fullDescription}
                                    </motion.p>
                                </div>
                            </motion.div>

                            {/* CTAs */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                className="flex gap-8 pt-6"
                            >
                                <a href={project.live} target="_blank" className="group flex items-center gap-2 text-white/90 hover:text-white transition-colors duration-300">
                                    <span className="text-xs uppercase tracking-[0.3em] font-heading border-b border-white/20 pb-1 group-hover:border-white transition-colors">Launch Project</span>
                                    <span className="text-lg group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">↗</span>
                                </a>
                                <a href={project.github} target="_blank" className="group flex items-center gap-2 text-white/90 hover:text-white transition-colors duration-300">
                                    <span className="text-xs uppercase tracking-[0.3em] font-heading border-b border-white/20 pb-1 group-hover:border-white transition-colors">Github Source</span>
                                    <span className="text-lg group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">↗</span>
                                </a>
                            </motion.div>
                        </div>

                        {/* Right: Metadata Table (Editorial Style) */}
                        <div className="lg:col-span-5 border-l border-white/5 pl-0 lg:pl-16 flex flex-col justify-end">
                            <div className="space-y-12 w-full">
                                {[
                                    { label: "Service", value: project.service },
                                    { label: "Realm", value: project.realm },
                                    { label: "Essence", value: project.essence }
                                ].map((item, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: idx * 0.1 }}
                                        viewport={{ once: true }}
                                        className="grid grid-cols-3 gap-4 border-b border-white/5 pb-8 group"
                                    >
                                        <span className="text-[10px] uppercase tracking-[0.4em] text-white/20 font-heading">
                                            ({item.label}.)
                                        </span>
                                        <span className="col-span-2 text-white/80 font-heading text-base md:text-lg leading-tight group-hover:text-white transition-colors">
                                            {item.value}
                                        </span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* 4. Image Gallery */}
                    <div className="space-y-12">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                            {project.images.map((img, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 1, delay: idx * 0.2, ease: [0.33, 1, 0.68, 1] }}
                                    viewport={{ once: true, margin: "-10%" }}
                                    className="relative aspect-4/5 rounded-3xl overflow-hidden bg-white/5 group border border-white/5"
                                >
                                    <Image
                                        src={img}
                                        alt={`${project.name} preview ${idx + 1}`}
                                        fill
                                        className="object-cover grayscale opacity-60 transition-all duration-1000 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-linear-to-t from-[#1a1a1a]/40 to-transparent pointer-events-none" />
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* 5. Next Project Navigation */}
                    <div className="mt-40 md:mt-60 border-t border-white/10 pt-24 text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="space-y-10"
                        >
                            <span className="text-[10px] uppercase tracking-[0.5em] text-white/20 font-heading block">Next Project</span>
                            <Link
                                href={`/work/${nextProject.slug}`}
                                className="group relative inline-block"
                            >
                                <h3 className="text-5xl md:text-8xl lg:text-9xl font-bold font-heading text-white/80 group-hover:text-white transition-colors duration-500 uppercase flex items-center gap-4">
                                    {nextProject.name}
                                    <span className="text-4xl md:text-6xl lg:text-7xl rotate-0 group-hover:translate-x-4 group-hover:-translate-y-4 transition-transform duration-500">↗</span>
                                </h3>
                                <div className="h-1 w-0 group-hover:w-full bg-white/20 transition-all duration-700 mx-auto mt-4" />
                            </Link>
                        </motion.div>
                    </div>

                    {/* Footer Gap */}
                    <div className="h-40" />

                </div>
            </section>
        </LenisDiv>
    );
};

export default WorkDetail;
