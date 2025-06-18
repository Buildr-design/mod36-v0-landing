
// src/components/sections/use-cases-who-it-is-for-section.tsx
'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import type { UseCasesWhoItIsForContent } from '@/data/site-content';
import * as LucideIcons from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { PoeticizerButton } from '@/components/poeticizer-button';

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5, staggerChildren: 0.2, delayChildren: 0.2 } },
};

const titleVariants = {
  hidden: { opacity: 0, y: -30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 20 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export function UseCasesWhoItIsForSection({ content }: { content?: UseCasesWhoItIsForContent }) {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  if (!content || !content.targets) return null;

  const poeticizableText = `${content.title}\n${content.targets.map(t => t.audience).join('\n')}`;

  return (
    <motion.section
      id="use-cases"
      ref={sectionRef}
      className="min-h-screen h-screen snap-start flex flex-col items-center justify-center p-8 md:p-16 bg-background text-foreground relative"
      aria-labelledby="use-cases-title"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={sectionVariants}
    >
      <PoeticizerButton 
          textToPoeticize={poeticizableText}
          className="absolute top-8 right-8 text-primary/70 hover:text-primary"
      />
      <motion.h2
        id="use-cases-title"
        className="font-headline text-4xl md:text-5xl font-bold text-primary mb-12 md:mb-16 text-center"
        variants={titleVariants}
      >
        {content.title}
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-5xl w-full">
        {content.targets.map((target, index) => {
          const IconComponent = target.iconName && LucideIcons[target.iconName as keyof typeof LucideIcons] as LucideIcons.LucideIcon;
          return (
            <motion.div key={index} variants={itemVariants}>
              <Card className="bg-card/70 border-border/70 rounded-lg shadow-lg h-full flex flex-col items-center text-center p-6 hover:shadow-primary/20 transition-shadow duration-300">
                {IconComponent && <IconComponent className="h-12 w-12 text-primary mb-4" />}
                <CardContent className="flex-grow pt-2">
                  <p className="text-md font-medium text-foreground">{target.audience}</p>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>
       {/* Placeholder for Tabs/Carousel for more detailed use cases from previous design */}
       <motion.div className="mt-10 text-center font-code text-sm text-muted-foreground" variants={itemVariants}>
          [Detailed Use Cases (Architecture, Tech, Public Systems etc.) to be expanded here - Placeholder]
       </motion.div>
    </motion.section>
  );
}
    