"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const About = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    // Parallax effect for the image
    const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

    return (
        <section
            ref={containerRef}
            className="min-h-screen py-24 md:py-32 flex items-center justify-center relative overflow-hidden bg-[#1a1a1a]"
            id="about"
        >
            <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20 items-start">

                {/* Left Column: Detailed Content List */}
                <div className="md:col-span-4 flex flex-col gap-16 md:gap-24 md:mt-16">
                    {/* Item 01 */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex flex-col gap-4 group"
                    >
                        <span className="text-xs md:text-sm text-white/40 font-heading tracking-[0.2em]">01 / FOCUS</span>
                        {/* Tweaked Title: Aesthetic & Efficiency */}
                        <h3 className="text-2xl md:text-3xl font-serif italic text-white/90 group-hover:text-white transition-colors duration-300">
                            Engineered Aesthetics
                        </h3>
                        {/* Tweaked Description: UX experience + Best practices */}
                        <p className="text-xs md:text-sm text-white/60 leading-relaxed font-sans">
                            Crafting seamless user experiences backed by clean, efficient code. Where best practices meet intuition to create work that feels effortless.
                        </p>
                    </motion.div>

                    {/* Item 02 */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="flex flex-col gap-4 group"
                    >
                        <span className="text-xs md:text-sm text-white/40 font-heading tracking-[0.2em]">02 / METHOD</span>
                        {/* Tweaked Title: Tech + Site Vibe (Real World Systems) */}
                        <h3 className="text-2xl md:text-3xl font-serif italic text-white/90 group-hover:text-white transition-colors duration-300">
                            System Architecture
                        </h3>
                        {/* Tweaked Description: Data pipelines + Real world cases */}
                        <p className="text-xs md:text-sm text-white/60 leading-relaxed font-sans">
                            From simple projects to complex data pipelines and robust deployments. Handling real-world scale and reliability with grace.
                        </p>
                    </motion.div>

                    {/* Item 03 */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="flex flex-col gap-4 group"
                    >
                        <span className="text-xs md:text-sm text-white/40 font-heading tracking-[0.2em]">03 / TOOLKIT</span>
                        <div className="flex flex-wrap gap-2 ">
                            {["Next.js", "React", "SQL", "MongoDB", "Node.js", "AWS", "GCP", "Docker", "Python", "NumPy", "Pandas", "CI/CD", "Linux"].map((tech) => (
                                <span key={tech} className="text-[10px] uppercase tracking-widest text-white/40 border border-white/10 px-2 py-1 rounded-full bg-white/[0.02]">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Center Column: Portrait Image */}
                <div className="md:col-span-4 relative h-[60vh] md:h-[80vh] w-full overflow-hidden rounded-sm md:mt-0">
                    <motion.div
                        style={{ y }}
                        initial={{ scale: 1.1, opacity: 0.8 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        className="relative h-[120%] w-full"
                    >
                        {/* Image Content */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <Image
                                src="/about_me/me_about.png"
                                alt="Hero Image"
                                width={500}
                                height={500}
                                className="object-cover w-full h-full opacity-80 hover:opacity-100 transition-opacity duration-700"
                            />
                        </div>
                    </motion.div>

                    {/* Decorative Frame */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className="absolute inset-4 border border-white/10 z-10 pointer-events-none"
                    />
                </div>

                {/* Right Column: Title */}
                <div className="md:col-span-4 flex flex-col justify-between h-full py-12 md:pl-8">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <h2 className="text-6xl md:text-8xl lg:text-9xl font-bold font-heading text-white/90 leading-[0.85] tracking-tighter">
                            ABOUT<br />
                            <span className="text-white/20 italic font-serif font-light">ME</span>
                        </h2>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className=" text-xl md:text-2xl text-white/50 font-serif italic leading-loose max-w-sm"
                    >
                        ' If you can dream it, I can build it! '
                    </motion.p>

                    <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        transition={{ duration: 1.2, delay: 0.6 }}

                        className="h-px w-full bg-white/10 mt-12 origin-left"
                    />
                </div>

            </div>
        </section>
    );
};

export default About;