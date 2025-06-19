
// src/components/sections/why-modular-section.tsx
'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import type { WhyModularSectionContent } from '@/data/site-content';

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.3 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export function WhyModularSection({ content }: { content?: WhyModularSectionContent }) {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.25 });

  if (!content) return null;

  return (
    <motion.section
      id="why-modular"
      ref={sectionRef}
      className="min-h-screen h-screen snap-start flex flex-col items-center justify-center p-8 md:p-16 bg-background text-foreground relative"
      aria-labelledby="why-modular-title"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={sectionVariants}
    >
      {/* 3D Background Visual Placeholder */}
      <motion.div
        className="absolute inset-0 z-0 opacity-10 bg-muted/30" // Example styling, adjust as needed
        data-ai-hint={content.visualDataAiHint}
        variants={itemVariants} // Animate the background itself if desired
      >
        {/* This div is now for the background */}
      </motion.div>

      {/* Foreground Content */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full text-center">
        <motion.h2
          id="why-modular-title"
          className="font-headline text-3xl md:text-4xl font-bold text-primary mb-8"
          variants={itemVariants}
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          {content.title}
        </motion.h2>

        <motion.div className="max-w-2xl mb-10" variants={itemVariants}>
          {content.mainParagraphs.map((paragraph, index) => (
            <p key={index} className="text-lg md:text-xl text-foreground/80 mb-4 font-body" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              {paragraph}
            </p>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
