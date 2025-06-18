// src/components/sections/what-is-mod36-section.tsx
'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import type { WhatIsMod36V0Content } from '@/data/site-content';

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut", staggerChildren: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export function WhatIsMod36Section({ content }: { content?: WhatIsMod36V0Content }) {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  if (!content) return null;

  return (
    <motion.section
      id="what-is-mod36-v0"
      ref={sectionRef}
      className="min-h-screen h-screen snap-start flex flex-col items-center justify-center p-8 md:p-16 bg-card text-card-foreground relative"
      aria-labelledby="what-is-mod36-v0-title"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={sectionVariants}
    >
      <motion.h2
        id="what-is-mod36-v0-title"
        className="font-headline text-4xl md:text-5xl font-bold text-primary mb-8 text-center"
        variants={itemVariants}
      >
        {content.title}
      </motion.h2>

      <motion.p 
        className="text-lg md:text-xl text-muted-foreground mb-10 text-center max-w-3xl"
        variants={itemVariants}
      >
        {content.definition}
      </motion.p>

      <motion.div 
        className="my-8 p-6 border border-dashed border-border rounded-lg text-center font-code text-sm text-muted-foreground"
        data-ai-hint={content.diagramDataAiHint || "conceptual diagram"}
        variants={itemVariants}
      >
        {content.diagramHint}
      </motion.div>
    </motion.section>
  );
}
