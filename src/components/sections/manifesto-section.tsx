// src/components/sections/manifesto-section.tsx
'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { PoeticizerButton } from '@/components/poeticizer-button';

const manifestoLines = [
  "We start where the system is broken.",
  "We build from the fragments.",
  "Space. Code. Culture.",
  "mod36 v0 — still loading.",
];

const lineVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.6, 0.01, 0.05, 0.95], // Custom ease for a more refined feel, P2x corrected
    },
  },
};

export function ManifestoSection() {
  const sectionRef = useRef(null);
  // Use a single useInView for the section to trigger all animations sequentially
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <section 
      id="manifesto"
      ref={sectionRef}
      className="min-h-screen h-screen snap-start flex flex-col items-center justify-center p-8 md:p-16 relative bg-background text-center"
      aria-label="Manifesto"
    >
      <div className="max-w-3xl w-full space-y-10 md:space-y-16">
        {manifestoLines.map((line, index) => (
          <motion.div
            key={index}
            className="relative group"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={lineVariants}
            custom={index} // custom can be used for staggered delays if variants function takes it
            style={{ transitionDelay: isInView ? `${index * 0.4}s` : '0s' }} // Manual stagger for simplicity here
          >
            <p className="font-headline text-3xl md:text-5xl font-bold text-foreground leading-tight">
              {line}
            </p>
            <PoeticizerButton 
              textToPoeticize={line} 
              className="absolute -top-4 right-0 md:-right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
          </motion.div>
        ))}
      </div>
      
      {/* Optional: Faint animated line/path */}
      <motion.div 
        className="absolute left-1/2 bottom-10 h-16 w-px bg-primary/30"
        initial={{ scaleY: 0, originY: 0 }}
        animate={isInView ? { scaleY: 1, originY: 0 } : {}}
        transition={{ duration: 1, delay: manifestoLines.length * 0.4 + 0.5, ease: "easeOut"}}
      />
    </section>
  );
}
