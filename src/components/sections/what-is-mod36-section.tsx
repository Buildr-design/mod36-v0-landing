
// src/components/sections/what-is-mod36-section.tsx
'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import type { WhatIsMod36SectionContent } from '@/data/site-content';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import * as LucideIcons from 'lucide-react';
import { PoeticizerButton } from '@/components/poeticizer-button';

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut", staggerChildren: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export function WhatIsMod36Section({ content }: { content?: WhatIsMod36SectionContent }) {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  if (!content) return null;

  const poeticizableText = `${content.title}\n${content.definition}\n${content.features.map(f => `${f.title}: ${f.description || ''}`).join('\n')}`;

  return (
    <motion.section
      id="what-is-mod36"
      ref={sectionRef}
      className="min-h-screen h-screen snap-start flex flex-col items-center justify-center p-8 md:p-16 bg-card text-card-foreground relative"
      aria-labelledby="what-is-mod36-title"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={sectionVariants}
    >
      <PoeticizerButton 
        textToPoeticize={poeticizableText}
        className="absolute top-8 right-8 text-primary/70 hover:text-primary"
      />
      <motion.h2
        id="what-is-mod36-title"
        className="font-headline text-4xl md:text-5xl font-bold text-primary mb-6 text-center"
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

      {/* Placeholder for Graphic */}
      <motion.div 
        className="my-8 p-6 border border-dashed border-border rounded-lg text-center font-code text-sm text-muted-foreground"
        data-ai-hint={content.graphicHint}
        variants={itemVariants}
      >
        [Visual Placeholder: {content.graphicHint}]
      </motion.div>

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl w-full"
        variants={sectionVariants} // For staggering children
      >
        {content.features.map((feature, index) => {
          const IconComponent = feature.iconName && LucideIcons[feature.iconName as keyof typeof LucideIcons] as LucideIcons.LucideIcon;
          return (
            <motion.div key={index} variants={itemVariants}>
              <Card className="bg-background/50 border-border/50 hover:border-primary/50 h-full text-left p-1 transition-all duration-300 hover:shadow-lg">
                <CardHeader className="flex-row items-center gap-4 space-y-0 pb-2">
                   {IconComponent && <IconComponent className="h-8 w-8 text-primary" />}
                  <CardTitle className="text-lg font-semibold text-foreground">{feature.title}</CardTitle>
                </CardHeader>
                {feature.description && (
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </CardContent>
                )}
              </Card>
            </motion.div>
          );
        })}
      </motion.div>
    </motion.section>
  );
}
    