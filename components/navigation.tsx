"use client";

import { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { Button } from "@/components/ui/button";

interface NavItem {
  label: string;
  href: string;
  icon: React.ReactNode;
  description: string;
}

// Minimal, aesthetic line icons - Korean/Japanese aesthetic inspired
const navItems: NavItem[] = [
  {
    label: "Home",
    href: "/",
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={0.75}>
        <path d="M3 10.5L12 3l9 7.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M5 9v10a1 1 0 001 1h12a1 1 0 001-1V9" strokeLinecap="round" />
        <circle cx="12" cy="14" r="2" strokeWidth={0.5} />
      </svg>
    ),
    description: "始まり",
  },
  {
    label: "Works",
    href: "/work",
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={0.75}>
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
        <rect x="14" y="14" width="7" height="7" rx="1" />
      </svg>
    ),
    description: "作品集",
  },
  {
    label: "About",
    href: "/about",
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={0.75}>
        <circle cx="12" cy="7" r="4" />
        <path d="M5.5 21a6.5 6.5 0 0113 0" strokeLinecap="round" />
      </svg>
    ),
    description: "私について",
  },
  {
    label: "Skills",
    href: "/skills",
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={0.75}>
        <path d="M12 2v4m0 12v4m10-10h-4M6 12H2" strokeLinecap="round" />
        <path d="M17.5 6.5l-2.8 2.8m-5.4 5.4l-2.8 2.8m0-11l2.8 2.8m5.4 5.4l2.8 2.8" strokeLinecap="round" />
        <circle cx="12" cy="12" r="2" strokeWidth={0.5} />
      </svg>
    ),
    description: "技術",
  },
  {
    label: "Journey",
    href: "/journey",
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={0.75}>
        <path d="M4 4c4 0 4 8 8 8s4-8 8-8" strokeLinecap="round" />
        <path d="M4 12c4 0 4 8 8 8s4-8 8-8" strokeLinecap="round" />
        <circle cx="4" cy="4" r="1.5" fill="currentColor" opacity="0.3" />
        <circle cx="20" cy="20" r="1.5" fill="currentColor" opacity="0.3" />
      </svg>
    ),
    description: "経験",
  },
  {
    label: "Contact",
    href: "/contact",
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={0.75}>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M3 7l9 6 9-6" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 18l-2-2 2-2 2 2-2 2z" fill="currentColor" opacity="0.2" />
      </svg>
    ),
    description: "連絡",
  },
];

// Overlay - waits for children to exit first, then slides out
const overlayVariants: Variants = {
  hidden: {
    y: "-100%",
  },
  visible: {
    y: 0,
    transition: {
      type: "tween",
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
  exit: {
    y: "100%",
    transition: {
      type: "tween",
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
      delay: 0.4, // Wait for cards to exit first
    },
  },
};

// Content container - orchestrates children with stagger
const contentVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.2,
      staggerChildren: 0.06,
      delayChildren: 0.3,
    },
  },
  exit: {
    opacity: 1, // Keep opacity for visible exit
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1, // Reverse order
    },
  },
};

// Nav items - scale from center with blur effect (not translateY)
const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
    filter: "blur(10px)",
  },
  visible: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 20,
      mass: 0.8,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.9,
    filter: "blur(8px)",
    transition: {
      type: "tween",
      duration: 0.25,
      ease: [0.4, 0, 1, 1],
    },
  },
};

// Header - fades in from above
const headerVariants: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.25,
      type: "spring",
      stiffness: 300,
      damping: 24,
    },
  },
  exit: {
    opacity: 0,
    y: -10,
    transition: {
      duration: 0.2,
    },
  },
};

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Hamburger Button */}
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setIsOpen(true)}
        className="relative z-50 text-muted-foreground hover:text-foreground border rounded-full"
        aria-label="Open navigation menu"
      >
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1}>
          <line x1="4" y1="7" x2="20" y2="7" strokeLinecap="round" />
          <line x1="4" y1="12" x2="16" y2="12" strokeLinecap="round" />
          <line x1="4" y1="17" x2="12" y2="17" strokeLinecap="round" />
        </svg>
      </Button>

      {/* Full Page Navigation Overlay */}
      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.div
            key="nav-overlay"
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 z-50 bg-[#1a1a1a]/98 backdrop-blur-2xl flex flex-col h-screen w-screen"
          >
            {/* Header Section */}
            <motion.header
              variants={headerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="shrink-0 flex items-center justify-between p-6 md:p-8 border-b border-white/5"
            >
              <div className="flex items-center gap-4 text-white/40">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={0.75}>
                  <circle cx="11" cy="11" r="7" />
                  <path d="M21 21l-4.35-4.35" strokeLinecap="round" />
                </svg>
                <span className="text-lg font-light tracking-widest font-heading">NAVIGATE</span>
              </div>

              <motion.button
                onClick={() => setIsOpen(false)}
                className="p-2 text-white/40 hover:text-white transition-colors"
                aria-label="Close navigation"
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={0.75}>
                  <line x1="6" y1="6" x2="18" y2="18" strokeLinecap="round" />
                  <line x1="6" y1="18" x2="18" y2="6" strokeLinecap="round" />
                </svg>
              </motion.button>
            </motion.header>

            {/* Navigation Grid */}
            <motion.div
              variants={contentVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="flex-1 p-4 md:p-8 overflow-hidden"
            >
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 h-full perspective-1000">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    variants={itemVariants}
                    whileHover={{
                      scale: 1.04,
                      rotateX: -5,
                      rotateY: index % 3 === 0 ? 5 : index % 3 === 2 ? -5 : 0,
                      z: 50,
                      boxShadow: "0 25px 50px -12px rgba(255, 255, 255, 0.1)",
                      transition: {
                        type: "spring",
                        stiffness: 400,
                        damping: 25,
                      },
                    }}
                    whileTap={{
                      scale: 0.98,
                      rotateX: 0,
                      rotateY: 0,
                    }}
                    style={{
                      transformStyle: "preserve-3d",
                      transformOrigin: "center center",
                    }}
                    className="group relative flex flex-col items-center justify-center gap-4 md:gap-6 rounded-2xl bg-white/[0.02] border border-white/5 backdrop-blur-sm transition-colors duration-500"
                  >
                    {/* Gradient glow on hover */}
                    <motion.div
                      className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{
                        background: "radial-gradient(circle at 50% 0%, rgba(255,255,255,0.08) 0%, transparent 60%)",
                      }}
                    />

                    {/* Icon with 3D lift effect */}
                    <motion.div
                      className="text-white/30 group-hover:text-white/90 transition-colors duration-500"
                      style={{ transform: "translateZ(20px)" }}
                      whileHover={{
                        scale: 1.15,
                        transition: { type: "spring", stiffness: 500, damping: 15 }
                      }}
                    >
                      {item.icon}
                    </motion.div>

                    {/* Label */}
                    <span
                      className="text-sm md:text-base font-medium tracking-wider text-white/60 group-hover:text-white transition-colors duration-500 font-heading"
                      style={{ transform: "translateZ(15px)" }}
                    >
                      {item.label}
                    </span>

                    {/* Japanese description */}
                    <span
                      className="text-[10px] md:text-xs text-white/15 group-hover:text-white/50 transition-colors duration-500 tracking-widest font-serif"
                      style={{ transform: "translateZ(10px)" }}
                    >
                      {item.description}
                    </span>

                    {/* Bottom highlight line on hover */}
                    <motion.div
                      className="absolute bottom-0 left-1/2 h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent"
                      initial={{ width: 0, x: "-50%" }}
                      whileHover={{
                        width: "80%",
                        transition: { duration: 0.4, ease: "easeOut" }
                      }}
                    />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
