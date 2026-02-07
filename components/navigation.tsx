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
    href: "#",
    icon: (
      // Minimal house - single line aesthetic
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
    href: "#projects",
    icon: (
      // Minimal grid/portfolio
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
    href: "#about",
    icon: (
      // Minimal person silhouette
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={0.75}>
        <circle cx="12" cy="7" r="4" />
        <path d="M5.5 21a6.5 6.5 0 0113 0" strokeLinecap="round" />
      </svg>
    ),
    description: "私について",
  },
  {
    label: "Skills",
    href: "#skills",
    icon: (
      // Minimal sparkle/star
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
    href: "#experience",
    icon: (
      // Minimal winding path
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
    href: "#contact",
    icon: (
      // Minimal envelope with heart
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={0.75}>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M3 7l9 6 9-6" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 18l-2-2 2-2 2 2-2 2z" fill="currentColor" opacity="0.2" />
      </svg>
    ),
    description: "連絡",
  },
];

// Animation variants for the full-page overlay
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
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

// Animation variants for the content container
const contentVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.3,
      staggerChildren: 0.08,
      delayChildren: 0.4,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.2,
      staggerChildren: 0.04,
      staggerDirection: -1,
    },
  },
};

// Animation variants for nav items
const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 24,
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    scale: 0.95,
    transition: {
      type: "tween",
      duration: 0.15,
      ease: "easeIn",
    },
  },
};

// Header animation variants
const headerVariants: Variants = {
  hidden: { opacity: 0, y: -30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.3,
      type: "spring",
      stiffness: 300,
      damping: 24,
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.15,
    },
  },
};

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Hamburger Button - Minimal aesthetic */}
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setIsOpen(true)}
        className="relative z-50 text-muted-foreground hover:text-foreground"
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
              {/* Search / Title */}
              <div className="flex items-center gap-4 text-white/40">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={0.75}>
                  <circle cx="11" cy="11" r="7" />
                  <path d="M21 21l-4.35-4.35" strokeLinecap="round" />
                </svg>
                <span className="text-lg font-light tracking-widest font-heading">NAVIGATE</span>
              </div>

              {/* Close Button */}
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

            {/* Navigation Grid - Full Width/Height */}
            <motion.div
              variants={contentVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="flex-1 p-4 md:p-8 overflow-hidden"
            >
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 h-full">
                {navItems.map((item) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    variants={itemVariants}
                    whileHover={{
                      scale: 1.02,
                      backgroundColor: "rgba(255, 255, 255, 0.08)",
                    }}
                    whileTap={{ scale: 0.98 }}
                    className="group flex flex-col items-center justify-center gap-4 md:gap-6 rounded-2xl bg-white/[0.02] border border-white/5 backdrop-blur-sm transition-all duration-300"
                  >
                    {/* Icon */}
                    <motion.div
                      className="text-white/30 group-hover:text-white/80 transition-colors duration-300"
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                      {item.icon}
                    </motion.div>

                    {/* Label */}
                    <span className="text-sm md:text-base font-medium tracking-wider text-white/70 group-hover:text-white transition-colors duration-300 font-heading">
                      {item.label}
                    </span>

                    {/* Description - Japanese text for aesthetic */}
                    <span className="text-[10px] md:text-xs text-white/20 group-hover:text-white/40 transition-colors duration-300 tracking-widest font-serif">
                      {item.description}
                    </span>
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
