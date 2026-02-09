"use client";

import LenisDiv from "@/components/LenisDiv";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { motion, Variants } from "framer-motion";
import Link from "next/link";

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

const inputVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut"
        }
    }
};

const Contact = () => {
    return (
        <LenisDiv>
            <section className="min-h-screen pt-32 pb-20 bg-[#1a1a1a] relative overflow-hidden">
                <div className="container mx-auto px-6 md:px-12">

                    {/* Heading */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ margin: "-10%" }}
                        className="mb-24 md:mb-32"
                    >
                        <div className="overflow-hidden">
                            <motion.h1 variants={revealVariants} className="text-6xl md:text-8xl lg:text-9xl font-bold font-heading text-white/90 leading-[0.85] tracking-tighter block">
                                CONTACT
                            </motion.h1>
                        </div>
                        <div className="overflow-hidden">
                            <motion.span variants={revealVariants} className="block text-6xl md:text-8xl lg:text-9xl font-serif font-light italic text-white/20 leading-[0.85] tracking-tighter">
                                ME
                            </motion.span>
                        </div>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">

                        {/* Left Column: Small Info */}
                        <div className="lg:col-span-4 flex flex-col gap-12 font-sans text-sm text-white/40 tracking-wide uppercase">
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                className="flex flex-col gap-2"
                            >
                                <div className="overflow-hidden"><motion.p variants={revealVariants}>India</motion.p></div>
                                <div className="overflow-hidden"><motion.p variants={revealVariants}>2026</motion.p></div>
                            </motion.div>

                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                className="flex flex-col gap-6"
                            >
                                <div className="overflow-hidden">
                                    <motion.p variants={revealVariants} className="font-heading text-white/60 text-base md:text-lg tracking-widest uppercase leading-relaxed">
                                        Available for <br />
                                        freelance & <br />
                                        collaborations
                                    </motion.p>
                                </div>

                                <div className="flex items-center gap-2 text-white/80 font-serif italic text-xl md:text-2xl overflow-hidden">
                                    <motion.div variants={revealVariants} className="flex gap-2 items-center">
                                        <span className="text-2xl">✦</span>
                                        <p>Let&apos;s build something <br /> exceptional together</p>
                                    </motion.div>
                                </div>
                            </motion.div>
                        </div>

                        {/* Right Column: Detailed Form */}
                        <div className="lg:col-span-8">
                            <form className="flex flex-col gap-12">
                                {/* Full Name */}
                                <motion.div
                                    initial="hidden"
                                    whileInView="visible"
                                    className="flex flex-col gap-2"
                                >
                                    <div className="overflow-hidden">
                                        <motion.label variants={revealVariants} className="block text-white/40 text-xs font-heading tracking-[0.2em] uppercase">Full Name</motion.label>
                                    </div>
                                    <motion.input
                                        variants={inputVariants}
                                        type="text"
                                        placeholder="Your full name"
                                        className="w-full bg-transparent border-b border-white/20 py-4 text-white/90 placeholder-white/20 focus:outline-none focus:border-white transition-colors duration-300 font-heading tracking-wide"
                                    />
                                </motion.div>

                                {/* Service (Shadcn Select) */}
                                <motion.div
                                    initial="hidden"
                                    whileInView="visible"
                                    className="flex flex-col gap-2"
                                >
                                    <div className="overflow-hidden">
                                        <motion.label variants={revealVariants} className="block text-white/40 text-xs font-heading tracking-[0.2em] uppercase">Service</motion.label>
                                    </div>
                                    <motion.div variants={inputVariants}>
                                        <Select>
                                            <SelectTrigger className="w-full bg-transparent border-0 border-b border-white/20 rounded-none px-0 py-6 text-white/90 focus:ring-0 focus:ring-offset-0 placeholder:text-white/20 font-heading tracking-wide">
                                                <SelectValue placeholder="Select a service" />
                                            </SelectTrigger>
                                            <SelectContent className="bg-[#1a1a1a] border border-white/10 text-white/80">
                                                <SelectItem value="web-dev" className="focus:bg-white/10 focus:text-white cursor-pointer font-sans tracking-wide">Web Development</SelectItem>
                                                <SelectItem value="ui-ux" className="focus:bg-white/10 focus:text-white cursor-pointer font-sans tracking-wide">UI/UX Design</SelectItem>
                                                <SelectItem value="ml-ai" className="focus:bg-white/10 focus:text-white cursor-pointer font-sans tracking-wide">Machine Learning</SelectItem>
                                                <SelectItem value="consultation" className="focus:bg-white/10 focus:text-white cursor-pointer font-sans tracking-wide">Consultation</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </motion.div>
                                </motion.div>

                                {/* Email */}
                                <motion.div
                                    initial="hidden"
                                    whileInView="visible"
                                    className="flex flex-col gap-2"
                                >
                                    <div className="overflow-hidden">
                                        <motion.label variants={revealVariants} className="block text-white/40 text-xs font-heading tracking-[0.2em] uppercase">Email (required)</motion.label>
                                    </div>
                                    <motion.input
                                        variants={inputVariants}
                                        type="email"
                                        placeholder="Your email address"
                                        className="w-full bg-transparent border-b border-white/20 py-4 text-white/90 placeholder-white/20 focus:outline-none focus:border-white transition-colors duration-300 font-heading tracking-wide"
                                    />
                                </motion.div>

                                {/* Project Description */}
                                <motion.div
                                    initial="hidden"
                                    whileInView="visible"
                                    className="flex flex-col gap-2"
                                >
                                    <div className="overflow-hidden">
                                        <motion.label variants={revealVariants} className="block text-white/40 text-xs font-heading tracking-[0.2em] uppercase">Project description</motion.label>
                                    </div>
                                    <motion.textarea
                                        variants={inputVariants}
                                        rows={1}
                                        placeholder="Tell me about your project"
                                        className="w-full bg-transparent border-b border-white/20 py-4 text-white/90 placeholder-white/20 focus:outline-none focus:border-white transition-colors duration-300 font-heading tracking-wide resize-none min-h-[60px]"
                                    />
                                </motion.div>

                                {/* Submit Button */}
                                <motion.div
                                    initial="hidden"
                                    whileInView="visible"
                                    className="mt-8 overflow-hidden"
                                >
                                    <motion.button
                                        variants={revealVariants}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="px-10 py-5 bg-white text-black font-heading font-bold text-sm tracking-widest uppercase rounded-full w-fit hover:bg-white/90 transition-colors"
                                    >
                                        Submit
                                    </motion.button>
                                </motion.div>

                            </form>
                        </div>
                    </div>

                    {/* Bottom Info Section (Big Contact Details) */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ margin: "-10%" }}
                        className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-28 md:mt-30 items-end border-t border-white/10 pt-12"
                    >
                        <div>
                            <div className="overflow-hidden pb-2">
                                <motion.a
                                    variants={revealVariants}
                                    href="mailto:gagan270903@gmail.com"
                                    className="block text-3xl md:text-4xl font-heading font-bold text-white/90 hover:text-white transition-colors leading-tight"
                                >
                                    gagan270903@gmail.com
                                </motion.a>
                            </div>
                            <div className="mt-8 overflow-hidden">
                                <motion.div variants={revealVariants} className="text-xs text-white/20 font-heading tracking-widest uppercase">
                                    India, 2026 <br />
                                    © 2026 Portfolio
                                </motion.div>
                            </div>
                        </div>

                        <div className="flex flex-col items-start md:items-end gap-2 md:gap-4">
                            <div className="overflow-hidden pb-2">
                                <motion.a
                                    variants={revealVariants}
                                    href="tel:+919026705339"
                                    className="block text-3xl md:text-4xl font-heading font-bold text-white/90 hover:text-white transition-colors leading-tight"
                                >
                                    (+91) 902 670 5339
                                </motion.a>
                            </div>
                            <div className="mt-6 flex gap-6 overflow-hidden">
                                <motion.div variants={revealVariants} className="flex gap-6">
                                    {["Twitter", "GitHub", "LinkedIn", "Discord"].map((social) => (
                                        <Link
                                            key={social}
                                            href="#"
                                            className="text-white/40 hover:text-white text-xs font-heading tracking-widest uppercase transition-colors duration-300"
                                        >
                                            {social}
                                        </Link>
                                    ))}
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </section>
        </LenisDiv>
    );
};

export default Contact;