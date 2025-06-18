
// src/components/sections/how-it-works-section.tsx
'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import type { HowItWorksSectionContent } from '@/data/site-content';
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

export function HowItWorksSection({ content }: { content?: HowItWorksSectionContent }) {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  if (!content || !content.steps) return null;
  
  const poeticizableText = `${content.title}\n${content.steps.map(step => `${step.stepNumber}. ${step.title}: ${step.description}`).join('\n\n')}`;

  return (
    <motion.section
      id="how-it-works"
      ref={sectionRef}
      className="min-h-screen h-screen snap-start flex flex-col items-center justify-center p-8 md:p-16 bg-card text-card-foreground relative"
      aria-labelledby="how-it-works-title"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={sectionVariants}
    >
       <PoeticizerButton 
          textToPoeticize={poeticizableText}
          className="absolute top-8 right-8 text-primary/70 hover:text-primary"
      />
      <motion.h2
        id="how-it-works-title"
        className="font-headline text-4xl md:text-5xl font-bold text-primary mb-12 md:mb-16 text-center"
        variants={titleVariants}
      >
        {content.title}
      </motion.h2>

      <div className="flex flex-col md:flex-row items-stretch justify-center gap-4 md:gap-2 max-w-6xl w-full">
        {content.steps.map((step, index) => {
          const IconComponent = step.iconName && LucideIcons[step.iconName as keyof typeof LucideIcons] as LucideIcons.LucideIcon;
          return (
            <motion.div key={index} className="flex flex-col md:flex-row items-center w-full md:w-auto flex-1" variants={stepVariants}>
              <Card className="bg-background/60 border-border/60 rounded-lg shadow-lg text-center w-full h-full flex flex-col">
                <CardHeader className="items-center">
                  <div className="flex items-center gap-3">
                    {IconComponent && <IconComponent className="h-8 w-8 text-primary" />}
                    <span className="text-2xl font-bold text-primary">{step.stepNumber}</span>
                  </div>
                  <CardTitle className="text-lg font-semibold text-foreground mt-2">{step.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <CardDescription className="text-muted-foreground text-sm">{step.description}</CardDescription>
                </CardContent>
              </Card>
              {index < content.steps.length - 1 && (
                <ArrowRight className="h-8 w-8 text-primary mx-2 my-4 md:my-0 hidden md:block transform md:rotate-0 rotate-90" />
              )}
            </motion.div>
          );
        })}
      </div>
      {content.simulationHint && (
         <motion.div 
          className="mt-12 text-center text-muted-foreground font-code text-sm"
          data-ai-hint={content.simulationHint}
          variants={titleVariants} // re-use for simplicity
        >
          [Visual Placeholder: {content.simulationHint}]
        </motion.div>
      )}
    </motion.section>
  );
}
    