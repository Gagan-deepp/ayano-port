'use client'
import { motion } from "framer-motion";
import { useState } from 'react';

const AnimateBtn = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div className="w-full mt-24 flex items-center justify-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
        >
            <div
                className="relative w-52 h-14 cursor-pointer rounded-full overflow-hidden border border-white/5 bg-white/2 backdrop-blur-sm group transition-all duration-500 hover:border-white/10 hover:bg-white/4"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <motion.div
                    className="relative w-full h-full flex flex-col"
                    animate={{ y: isHovered ? "-100%" : "0%" }}
                    transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
                >
                    {/* Primary State */}
                    <div className="w-full h-full flex justify-center items-center gap-2 shrink-0">
                        <span className="text-[10px] uppercase tracking-[0.3em] font-heading text-white/40 group-hover:text-white/60 transition-colors duration-500">
                            Archive
                        </span>
                        <span className="text-white/20 group-hover:text-white/40 transition-colors duration-500">
                            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1}>
                                <path d="M7 17l10-10M7 7h10v10" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </span>
                    </div>

                    {/* Hover State */}
                    <div className="w-full h-full flex justify-center items-center gap-2 shrink-0 bg-white/5">
                        <span className="text-[10px] uppercase tracking-[0.3em] font-heading text-white/90">
                            View All
                        </span>
                        <span className="text-white/80">
                            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                                <path d="M7 17l10-10M7 7h10v10" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </span>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    )
}

export default AnimateBtn


