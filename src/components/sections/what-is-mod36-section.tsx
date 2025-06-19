
// src/components/sections/what-is-mod36-section.tsx
'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import type { WhatIsMod36V001Content } from '@/data/site-content';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import * as LucideIcons from 'lucide-react';

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export function WhatIsMod36Section({ content }: { content?: WhatIsMod36V001Content }) {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  if (!content) return null;

  return (
    <motion.section
      id="what-is-mod36"
      ref={sectionRef}
      className="min-h-screen h-screen snap-start flex flex-col items-center justify-center p-8 md:p-16 bg-background text-foreground relative"
      aria-labelledby="what-is-mod36-title"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={sectionVariants}
    >
      {/* Animated Background Layer */}
      <motion.div
        className="animated-bg-layer animate-morphing-grid"
        data-ai-hint={content.visualDataAiHint}
        variants={itemVariants} 
      >
      </motion.div>

      {/* Foreground Content */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full">
        <motion.h2
          id="what-is-mod36-title"
          className="font-headline text-3xl md:text-4xl font-bold text-primary mb-8 text-center"
          variants={itemVariants}
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          What is Mod36?
        </motion.h2>

        <motion.div className="max-w-3xl text-center mb-12" variants={itemVariants}>
          {content.mainParagraphs.map((paragraph, index) => (
            <p key={index} className="text-lg md:text-xl text-foreground/80 mb-4 font-body" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              {paragraph}
            </p>
          ))}
        </motion.div>

        {/* Icon Subsections remain on top of the background */}
        {content.iconSubsections && content.iconSubsections.length > 0 && (
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 w-full max-w-5xl mt-12"
            variants={itemVariants}
          >
            {content.iconSubsections.map((subsection, index) => {
              const IconComponent = subsection.iconName && LucideIcons[subsection.iconName as keyof typeof LucideIcons]
                ? LucideIcons[subsection.iconName as keyof typeof LucideIcons] as LucideIcons.LucideIcon
                : LucideIcons.Box; 

              return (
                <motion.div key={index} variants={itemVariants}>
                  <Card className="bg-card text-card-foreground h-full shadow-sm hover:shadow-lg transition-shadow duration-300">
                    <CardHeader className="items-center text-center pb-3">
                      <IconComponent className="h-10 w-10 text-accent mb-3" />
                      <CardTitle className="text-lg font-semibold text-primary font-headline" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                        {subsection.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="text-center">
                      <p className="text-sm text-muted-foreground font-body" style={{ fontFamily: "'DM Sans', sans-serif" }}>{subsection.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        )}
      </div>
    </motion.section>
  );
}
