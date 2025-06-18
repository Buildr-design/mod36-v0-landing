
// src/components/sections/why-modular-section.tsx
'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import type { WhyModularSectionContent } from '@/data/site-content';
import Image from 'next/image';

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
      <motion.h2
        id="why-modular-title"
        className="font-headline text-3xl md:text-4xl font-bold text-primary mb-8 text-center"
        variants={itemVariants}
        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
      >
        {content.title}
      </motion.h2>

      <motion.div className="max-w-2xl text-center mb-10" variants={itemVariants}>
        {content.mainParagraphs.map((paragraph, index) => (
          <p key={index} className="text-lg md:text-xl text-foreground/80 mb-4 font-body" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            {paragraph}
          </p>
        ))}
      </motion.div>
      
      {/* Placeholder for "Animated loop showing modules snapping together, system expanding" */}
      <motion.div 
        className="w-full max-w-lg h-56 bg-muted/50 rounded-lg flex items-center justify-center text-muted-foreground italic text-sm shadow-md"
        data-ai-hint={content.visualDataAiHint}
        variants={itemVariants}
      >
        [Visual: {content.visualDataAiHint}]
      </motion.div>
    </motion.section>
  );
}
