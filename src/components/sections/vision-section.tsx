// src/components/sections/vision-section.tsx
'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import type { VisionV0Content } from '@/data/site-content';
import { AlertCircle, CheckCircle2 } from 'lucide-react';

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5, delayChildren: 0.2, staggerChildren: 0.3 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export function VisionSection({ content }: { content?: VisionV0Content }) {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  if (!content) return null;

  return (
    <motion.section
      id="vision-v0"
      ref={sectionRef}
      className="min-h-screen h-screen snap-start flex flex-col items-center justify-center p-8 md:p-16 bg-background text-foreground relative"
      aria-labelledby="vision-v0-title"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={sectionVariants}
    >
      <motion.h2
        id="vision-v0-title"
        className="font-headline text-4xl md:text-5xl font-bold text-primary mb-12 text-center"
        variants={itemVariants}
      >
        {content.title}
      </motion.h2>

      <motion.div className="max-w-3xl w-full space-y-8" variants={itemVariants}>
        <div>
          <h3 className="text-2xl font-semibold text-foreground mb-4 text-center">Problems v0 Aims to Tackle:</h3>
          <ul className="space-y-3">
            {content.problems.map((problem, index) => (
              <motion.li 
                key={index} 
                className="flex items-start p-4 bg-card/50 rounded-lg shadow-sm border border-border/30"
                variants={itemVariants}
              >
                <AlertCircle className="h-6 w-5 mr-3 text-primary/80 flex-shrink-0 mt-1" />
                <span className="text-muted-foreground">{problem}</span>
              </motion.li>
            ))}
          </ul>
        </div>

        <motion.blockquote 
          className="mt-10 p-6 border-l-4 border-primary bg-card/30 rounded-r-lg shadow-md"
          variants={itemVariants}
        >
          <p className="text-xl italic text-foreground">"{content.quote.text}"</p>
          {content.quote.source && (
            <footer className="mt-2 text-sm text-muted-foreground">- {content.quote.source}</footer>
          )}
        </motion.blockquote>
      </motion.div>

       {content.visualHint && (
         <motion.div 
          className="mt-12 text-center text-muted-foreground font-code text-sm"
          data-ai-hint={content.visualDataAiHint || "abstract visual"}
          variants={itemVariants}
        >
          {content.visualHint}
        </motion.div>
      )}
    </motion.section>
  );
}
