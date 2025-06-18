// src/components/sections/use-cases-who-it-is-for-section.tsx
'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import type { WhoItIsForV0Content } from '@/data/site-content';
import { CheckSquare } from 'lucide-react'; // Using CheckSquare for a list item feel

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5, staggerChildren: 0.1, delayChildren: 0.2 } },
};

const titleVariants = {
  hidden: { opacity: 0, y: -30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export function UseCasesWhoItIsForSection({ content }: { content?: WhoItIsForV0Content }) {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  if (!content || !content.audienceList) return null;

  return (
    <motion.section
      id="who-its-for-v0"
      ref={sectionRef}
      className="min-h-screen h-screen snap-start flex flex-col items-center justify-center p-8 md:p-16 bg-background text-foreground relative"
      aria-labelledby="who-its-for-v0-title"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={sectionVariants}
    >
      <motion.h2
        id="who-its-for-v0-title"
        className="font-headline text-4xl md:text-5xl font-bold text-primary mb-10 md:mb-12 text-center"
        variants={titleVariants}
      >
        {content.title}
      </motion.h2>

      <motion.ul 
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4 max-w-4xl w-full text-lg text-muted-foreground"
        variants={sectionVariants} // For staggering children
      >
        {content.audienceList.map((audience, index) => (
          <motion.li 
            key={index} 
            className="flex items-center"
            variants={itemVariants}
          >
            <CheckSquare className="h-5 w-5 mr-3 text-primary flex-shrink-0" />
            <span>{audience}</span>
          </motion.li>
        ))}
      </motion.ul>

      {content.visualHint && (
         <motion.div 
          className="mt-12 text-center text-muted-foreground font-code text-sm"
          data-ai-hint={content.visualDataAiHint || "abstract visual roles"}
          variants={titleVariants} // Re-use for simplicity
        >
          {content.visualHint}
        </motion.div>
      )}
    </motion.section>
  );
}
