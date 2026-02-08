"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

export function Footer() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  });

  const x = useTransform(scrollYProgress, [0, 1], [-180, 0]);

  return (
    <footer ref={containerRef} className="relative bg-[#1a1a1a] pb-8 pt-32 overflow-hidden h-dvh">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col justify-between min-h-100">

        {/* Top Section: Avatar & Big Text */}
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12 pl-4 md:pl-0">
          <motion.div
            initial={{ scale: 0.7 }}
            whileInView={{ scale: 1 }}
            className="relative w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-2 border-white/10 shrink-0"
          >
            <Image
              src="/me.png"
              fill
              className="object-cover"
              alt="Avatar"
            />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl lg:text-8xl font-heading text-white/90 leading-tight"
          >
            Scribble your
          </motion.h2>
        </div>

        <div className="flex flex-col pl-4 md:pl-40 mt-2 md:-mt-4">
          <motion.h2
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl text-white/20 italic font-serif font-light leading-tight"
          >
            story ~!!
          </motion.h2>
        </div>

        {/* Divider Line & CTA Button */}
        <div className="relative mt-24 w-full flex items-center">
          <div className="h-px bg-white/10 w-full" />

          {/* CTA Button - Floating Circle with Scroll Animation */}
          <motion.div
            style={{ x }}
            className="absolute right-4 md:right-32 -top-16 md:-top-20 z-10"
          >
            <Link
              href="/contact"
              className="flex items-center justify-center w-32 h-32 md:w-40 md:h-40 bg-white rounded-full text-black font-heading font-bold text-lg md:text-xl tracking-wide shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:scale-110 hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] transition-all duration-300 transform group"
            >
              <span className="group-hover:scale-110 transition-transform duration-300">
                Hit me up !
              </span>
            </Link>
          </motion.div>
        </div>

        {/* Bottom Section: Contact Pills & Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-end mt-16 md:mt-24 gap-8 md:gap-0">
          <div className="flex flex-wrap gap-4 w-full md:w-auto">
            <Link
              href="mailto:gagan270903@gmail.com"
              className="px-6 py-3 rounded-full border border-white/10 bg-white/[0.03] text-white/60 font-sans text-sm hover:bg-white hover:text-black hover:border-white transition-all duration-300 backdrop-blur-sm"
            >
              gagan270903@gmail.com
            </Link>
            <Link
              href="tel:+919026705339"
              className="px-6 py-3 rounded-full border border-white/10 bg-white/[0.03] text-white/60 font-sans text-sm hover:bg-white hover:text-black hover:border-white transition-all duration-300 backdrop-blur-sm"
            >
              +91 9026705339
            </Link>
          </div>

          {/* Copyright */}
          <div className="flex flex-col items-end gap-2 text-white/20 text-[10px] md:text-xs font-heading tracking-widest uppercase">
            <span>Created By Gagan. © 2025</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
