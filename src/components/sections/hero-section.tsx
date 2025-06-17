// src/components/sections/hero-section.tsx
'use client';

import { motion } from 'framer-motion';

const textLines = [
  "mod36 v0",
  "A systems design company",
  "building modular futures",
  "from space, code, and culture.",
];

const lineVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3 + 0.5, // Staggered delay for each line, plus initial delay
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

export function HeroSection() {
  return (
    <section 
      id="hero"
      className="min-h-screen h-screen snap-start flex flex-col items-center justify-center p-8 relative text-center overflow-hidden bg-background"
      aria-labelledby="hero-heading"
    >
      <div className="z-10">
        {textLines.map((line, index) => (
          <motion.div
            key={index}
            custom={index}
            initial="hidden"
            animate="visible"
            variants={lineVariants}
            className={index === 0 ? "font-headline text-5xl md:text-7xl font-bold text-primary mb-4" : "font-body text-xl md:text-2xl text-foreground mb-2"}
          >
            {index === 0 ? <h1 id="hero-heading">{line}</h1> : <p>{line}</p>}
          </motion.div>
        ))}
      </div>

      {/* Optional: Animated background grid - simple version */}
      <div className="absolute inset-0 z-0 opacity-[0.03]">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="smallGrid" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.5"/>
            </pattern>
            <pattern id="grid" width="100" height="100" patternUnits="userSpaceOnUse">
              <rect width="100" height="100" fill="url(#smallGrid)"/>
              <path d="M 100 0 L 0 0 0 100" fill="none" stroke="currentColor" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.5, 1, 0.5, 0] }}
          transition={{ 
            delay: textLines.length * 0.3 + 1, // Appear after text animation
            duration: 2, 
            repeat: Infinity, 
            ease: "easeInOut",
            repeatDelay: 1
          }}
          className="text-xs font-code text-muted-foreground tracking-widest"
        >
          ↓ SCROLL
        </motion.div>
      </div>
    </section>
  );
}
