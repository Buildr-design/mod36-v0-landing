
// src/components/sections/mod36-engine-section.tsx
'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import type { Mod36EngineSectionContent } from '@/data/site-content';
import * as LucideIcons from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import { PoeticizerButton } from '@/components/poeticizer-button';

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5, delayChildren: 0.3, staggerChildren: 0.3 } },
};

const titleVariants = {
  hidden: { opacity: 0, y: -30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const stepVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export function Mod36EngineSection({ content }: { content?: Mod36EngineSectionContent }) {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  if (!content || !content.steps) return null;
  
  const poeticizableText = `${content.title}\n${content.steps.map(step => `${step.title}: ${step.description}`).join('\n\n')}`;

  return (
    <motion.section
      id="engine"
      ref={sectionRef}
      className="min-h-screen h-screen snap-start flex flex-col items-center justify-center p-8 md:p-16 bg-background text-foreground relative"
      aria-labelledby="engine-title"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={sectionVariants}
    >
       <PoeticizerButton 
          textToPoeticize={poeticizableText}
          className="absolute top-8 right-8 text-primary/70 hover:text-primary"
      />
      <motion.h2
        id="engine-title"
        className="font-headline text-4xl md:text-5xl font-bold text-primary mb-12 md:mb-16 text-center"
        variants={titleVariants}
      >
        {content.title}
      </motion.h2>

      <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-4 max-w-5xl w-full">
        {content.steps.map((step, index) => {
          const IconComponent = LucideIcons[step.iconName as keyof typeof LucideIcons] as LucideIcons.LucideIcon;
          return (
            <motion.div key={index} className="flex flex-col md:flex-row items-center w-full md:w-auto" variants={stepVariants}>
              <Card className="bg-card/60 border-border/60 rounded-lg shadow-lg text-center w-full md:w-64 lg:w-72 flex-grow">
                <CardHeader className="items-center">
                  {IconComponent && <IconComponent className="h-10 w-10 text-primary mb-3" />}
                  <CardTitle className="text-xl font-semibold text-foreground">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground text-sm">{step.description}</CardDescription>
                </CardContent>
              </Card>
              {index < content.steps.length - 1 && (
                <ArrowRight className="h-8 w-8 text-primary mx-4 my-4 md:my-0 hidden md:block" />
              )}
            </motion.div>
          );
        })}
      </div>
    </motion.section>
  );
}

    