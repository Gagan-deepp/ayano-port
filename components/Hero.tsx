"use client";

import { motion } from "framer-motion";

const Hero = () => {
    return (
        <section className="flex-1 flex flex-col min-h-[calc(100vh-8rem)] relative overflow-hidden">
            {/* Pill 1: CURRENTLY - Top Right */}
            <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="absolute top-8 right-8 z-20 hidden md:flex items-center gap-3 px-4 py-2 rounded-2xl bg-white/3 border border-white/5 backdrop-blur-sm hover:bg-white/5 transition-all duration-300 hover:scale-[1.01] cursor-default"
            >
                <div className="relative flex items-center justify-center w-8 h-8 rounded-full bg-white/5 text-white/50 hover:text-white/80 transition-colors">
                    {/* Code/Terminal Icon */}
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1}>
                        <polyline points="16 18 22 12 16 6" />
                        <polyline points="8 6 2 12 8 18" />
                    </svg>
                </div>

                <div className="flex flex-col">
                    <span className="text-[9px] tracking-[0.2em] text-white/30 uppercase font-heading">
                        Currently
                    </span>
                    <span className="text-[11px] font-sans text-white/60 tracking-wide hover:text-white/90 transition-colors">
                        Full Stack Engineer & DevOps
                    </span>
                </div>
            </motion.div>

            {/* Pill 2: EXPLORING - Mid Left */}
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1.4 }}
                className="absolute top-[40%] left-8 md:left-12 -translate-y-1/2 z-20 hidden md:flex items-center gap-3 px-4 py-2 rounded-2xl bg-white/3 border border-white/5 backdrop-blur-sm hover:bg-white/5 transition-all duration-300 hover:scale-[1.01] cursor-default"
            >
                <div className="relative flex items-center justify-center w-8 h-8 rounded-full bg-white/5 text-white/50 hover:text-white/80 transition-colors">
                    {/* Brain/Network Icon */}
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1}>
                        <circle cx="12" cy="12" r="3" />
                        <path d="M19.07 4.93L17.07 6.93" />
                        <path d="M21.17 12.83L17.5 12.83" />
                        <path d="M19.07 20.67L17.07 18.67" />
                        <path d="M4.93 19.07L6.93 17.07" />
                        <path d="M2.83 11.17L6.5 11.17" />
                        <path d="M4.93 4.93L6.93 6.93" />
                        <path d="M14.12 9.88L16.24 7.76" />
                        <path d="M9.88 14.12L7.76 16.24" />
                    </svg>
                </div>

                <div className="flex flex-col">
                    <span className="text-[9px] tracking-[0.2em] text-white/30 uppercase font-heading">
                        Exploring
                    </span>
                    <span className="text-[11px] font-sans text-white/60 tracking-wide hover:text-white/90 transition-colors">
                        The depth of Machine Learning
                    </span>
                </div>
            </motion.div>

            {/* Pill 3: VALUING - Bottom Right (above footer) */}
            <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1.6 }}
                className="absolute bottom-24 right-8 z-20 hidden md:flex items-center gap-3 px-4 py-2 rounded-2xl bg-white/3 border border-white/5 backdrop-blur-sm hover:bg-white/5 transition-all duration-300 hover:scale-[1.01] cursor-default"
            >
                <div className="relative flex items-center justify-center w-8 h-8 rounded-full bg-white/5 text-white/50 hover:text-white/80 transition-colors">
                    {/* Heart/Sparkle Icon */}
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1}>
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                    </svg>
                </div>

                <div className="flex flex-col">
                    <span className="text-[9px] tracking-[0.2em] text-white/30 uppercase font-heading">
                        Valuing
                    </span>
                    <span className="text-[11px] font-sans text-white/60 tracking-wide hover:text-white/90 transition-colors">
                        Clean code & Minimalist design
                    </span>
                </div>
            </motion.div>

            {/* Pill 4: SEEKING - Bottom Left */}
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1.8 }}
                className="absolute bottom-16 left-16 z-20 hidden md:flex items-center gap-3 px-4 py-2 rounded-2xl bg-white/[0.03] border border-white/5 backdrop-blur-sm hover:bg-white/[0.05] transition-all duration-300 hover:scale-[1.01] cursor-default"
            >
                <div className="relative flex items-center justify-center w-8 h-8 rounded-full bg-white/5 text-white/50 hover:text-white/80 transition-colors">
                    {/* Focus/Target Icon */}
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1}>
                        <circle cx="12" cy="12" r="9" />
                        <circle cx="12" cy="12" r="2" />
                    </svg>
                </div>

                <div className="flex flex-col">
                    <span className="text-[9px] tracking-[0.2em] text-white/30 uppercase font-heading">
                        Seeking
                    </span>
                    <span className="text-[11px] font-sans text-white/60 tracking-wide hover:text-white/90 transition-colors">
                        Logic & First Principles
                    </span>
                </div>
            </motion.div>

            {/* Main content - centered */}
            <div className="flex-1 flex flex-col items-center justify-center px-6 md:px-12 relative z-10">
                {/* Introduction */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-[10px] md:text-xs tracking-[0.4em] text-white/40 uppercase font-heading mb-8"
                >
                    Developer  /  Designer  /  Human
                </motion.p>

                {/* Main name - GAGAN */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight text-white/90 font-heading leading-none"
                >
                    GAGAN
                </motion.h1>

                {/* Secondary name - Ayano */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-wide text-white/50 font-serif italic mt-2"
                >
                    Ayano
                </motion.p>

                {/* Decorative line */}
                <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 1.2, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="w-24 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent mt-12"
                />

                {/* Tagline Section */}
                <div className="mt-8 text-center max-w-lg">
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 1 }}
                        className="text-xs md:text-sm tracking-[0.05em] text-white/40 font-serif italic leading-relaxed"
                    >
                        "Finding joy in the quiet rhythm of steady progress."
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 1.2 }}
                        className="mt-4 flex flex-col items-center gap-1"
                    >
                        <span className="text-[10px] md:text-xs tracking-[0.2em] text-white/20 uppercase font-heading">
                            (and sometimes in logs)
                        </span>
                    </motion.div>
                </div>
            </div>

            {/* Hero Footer */}
            <footer className="flex justify-between items-end p-8 relative z-10 opacity-60 hover:opacity-100 transition-opacity duration-500">
                {/* Socials */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 1.4 }}
                    className="flex flex-col gap-4"
                >
                    {/* Twitter/X */}
                    <a href="#" className="text-white/30 hover:text-white transition-colors duration-300 transform hover:scale-110">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                    </a>
                    {/* GitHub */}
                    <a href="#" className="text-white/30 hover:text-white transition-colors duration-300 transform hover:scale-110">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                    </a>
                    {/* LinkedIn */}
                    <a href="#" className="text-white/30 hover:text-white transition-colors duration-300 transform hover:scale-110">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                    </a>
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.6 }}
                    className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
                >
                    <span className="text-[9px] tracking-[0.3em] text-white/10 uppercase font-heading group-hover:text-white/30 transition-colors">Scroll</span>
                    <motion.div
                        animate={{ y: [0, 6, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    >
                        <div className="w-[1px] h-8 bg-gradient-to-b from-white/10 to-transparent"></div>
                    </motion.div>
                </motion.div>

                {/* Page count */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 1.4 }}
                    className="text-[10px] tracking-[0.3em] text-white/20 font-heading"
                >
                    01  /  05
                </motion.div>
            </footer>
        </section>
    );
};

export default Hero;