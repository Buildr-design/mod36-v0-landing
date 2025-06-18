
// src/components/sections/key-features-section.tsx
// Adapted for "Core Features"
'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import type { CoreFeaturesSectionContent, CoreFeatureItem } from '@/data/site-content'; // Updated interfaces
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import * as LucideIcons from 'lucide-react';

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5, delayChildren: 0.2, staggerChildren: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
};


export function KeyFeaturesSection({ content }: { content?: CoreFeaturesSectionContent }) {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.15 });

  if (!content) return null;

  return (
    <motion.section
      id="core-features"
      ref={sectionRef}
      className="min-h-screen h-screen snap-start flex flex-col items-center justify-center p-8 md:p-16 bg-card text-card-foreground relative"
      aria-labelledby="core-features-title"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={sectionVariants}
    >
      <motion.h2
        id="core-features-title"
        className="font-headline text-4xl md:text-5xl font-bold text-primary mb-12 md:mb-16 text-center"
        variants={itemVariants}
      >
        {content.title}
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-5xl w-full">
        {content.features.map((feature: CoreFeatureItem, index: number) => {
          const IconComponent = feature.iconName ? LucideIcons[feature.iconName as keyof typeof LucideIcons] as LucideIcons.LucideIcon : LucideIcons.Package; // Default to Package icon
          return (
            <motion.div key={index} variants={itemVariants}>
              <Card className="bg-background/60 border-border/60 hover:border-primary/50 transition-colors duration-300 h-full flex flex-col text-left shadow-md hover:shadow-primary/20">
                <CardHeader className="flex-row items-start gap-3 space-y-0 pb-3 pt-5 px-5">
                  {IconComponent && <IconComponent className="h-7 w-7 text-primary flex-shrink-0 mt-1" />}
                  <CardTitle className="text-lg font-semibold text-foreground">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className="px-5 pb-5">
                  <CardDescription className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>

      {content.visualHint && (
         <motion.div 
          className="mt-12 text-center text-muted-foreground font-code text-sm"
          data-ai-hint={content.visualDataAiHint || "abstract features visual"}
          variants={itemVariants}
        >
          {content.visualHint}
        </motion.div>
      )}
    </motion.section>
  );
}

