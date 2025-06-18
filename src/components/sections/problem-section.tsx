
// src/components/sections/problem-section.tsx
'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import type { ProblemSectionContent } from '@/data/site-content';
import * as LucideIcons from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { PoeticizerButton } from '@/components/poeticizer-button';

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5, staggerChildren: 0.2, delayChildren: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export function ProblemSection({ content }: { content?: ProblemSectionContent }) {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  if (!content || !content.problems) return null;

  const poeticizableText = `${content.title}\n${content.problems.map(p => p.problem).join('\n')}`;

  return (
    <motion.section
      id="problem"
      ref={sectionRef}
      className="min-h-screen h-screen snap-start flex flex-col items-center justify-center p-8 md:p-16 bg-background text-foreground relative"
      aria-labelledby="problem-title"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={sectionVariants}
    >
      <PoeticizerButton 
          textToPoeticize={poeticizableText}
          className="absolute top-8 right-8 text-primary/70 hover:text-primary"
      />
      <motion.h2 
        id="problem-title"
        className="font-headline text-4xl md:text-5xl font-bold text-primary mb-12 md:mb-16 text-center"
        variants={itemVariants}
      >
        {content.title}
      </motion.h2>

      {/* Placeholder for Overlapping Diagrams Visual */}
      <motion.div 
        className="mb-12 text-center text-muted-foreground font-code text-sm"
        data-ai-hint={content.visualsHint}
        variants={itemVariants}
      >
        [Visual: Overlapping diagrams of disjointed icons - {content.visualsHint}]
      </motion.div>

      <motion.div 
        className="grid md:grid-cols-3 gap-8 md:gap-12 max-w-5xl w-full"
        variants={sectionVariants} 
      >
        {content.problems.map((problemItem, index) => {
          const IconComponent = LucideIcons[problemItem.iconName as keyof typeof LucideIcons] as LucideIcons.LucideIcon;
          return (
            <motion.div key={index} variants={itemVariants}>
              <Card className="bg-card/50 hover:bg-card/80 border-border/50 hover:border-primary/50 transition-all duration-300 h-full flex flex-col items-center text-center p-6 rounded-lg shadow-md hover:shadow-primary/20">
                <CardHeader className="items-center">
                  {IconComponent && <IconComponent className="h-10 w-10 text-primary mb-4" />}
                </CardHeader>
                <CardDescription className="text-foreground text-md">
                  {problemItem.problem}
                </CardDescription>
              </Card>
            </motion.div>
          );
        })}
      </motion.div>
    </motion.section>
  );
}
    