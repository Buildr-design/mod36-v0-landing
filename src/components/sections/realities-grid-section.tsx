
// src/components/sections/realities-grid-section.tsx
'use client';

import React from 'react'; // Added React import
import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import type { RealitiesGridSectionContent, RealityItem } from '@/data/site-content';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import * as LucideIcons from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { PoeticizerButton } from '@/components/poeticizer-button';

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5, delayChildren: 0.2, staggerChildren: 0.05 } },
};

const titleVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const gridItemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: "easeOut" } },
};

const ctaContainerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.5 } },
};


export function RealitiesGridSection({ content }: { content?: RealitiesGridSectionContent }) {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });
  const [selectedReality, setSelectedReality] = useState<RealityItem | null>(null);

  if (!content || !content.realities) return null;
  
  const flatRealities = content.realities.flat();
  const poeticizableText = `${content.title}\n${flatRealities.map(r => r.name).join(', ')}`;


  return (
    <motion.section
      id="realities"
      ref={sectionRef}
      className="min-h-screen h-screen snap-start flex flex-col items-center justify-center p-4 md:p-8 bg-background text-foreground relative"
      aria-labelledby="realities-title"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={sectionVariants}
    >
      <PoeticizerButton 
          textToPoeticize={poeticizableText}
          className="absolute top-8 right-8 text-primary/70 hover:text-primary"
      />
      <motion.h2
        id="realities-title"
        className="font-headline text-4xl md:text-5xl font-bold text-primary mb-8 md:mb-12 text-center"
        variants={titleVariants}
      >
        {content.title}
      </motion.h2>

      <div className="grid grid-cols-6 gap-1 md:gap-2 max-w-2xl md:max-w-3xl w-full aspect-square mb-8 md:mb-12">
        {flatRealities.map((reality, index) => {
          const IconComponent = reality.iconName && LucideIcons[reality.iconName as keyof typeof LucideIcons] as LucideIcons.LucideIcon;
          return(
            <motion.div
              key={reality.id}
              variants={gridItemVariants}
              className="aspect-square bg-card/30 border border-border/30 rounded-md flex items-center justify-center text-center p-1 cursor-pointer hover:bg-primary/20 hover:border-primary transition-all duration-200"
              onClick={() => setSelectedReality(reality)}
              onKeyPress={(e) => e.key === 'Enter' && setSelectedReality(reality)}
              tabIndex={0}
              role="button"
              aria-label={`View details for ${reality.name}`}
            >
              {IconComponent ? (
                <IconComponent className="h-4 w-4 md:h-6 md:w-6 text-primary/70" />
              ) : (
                <span className="text-xs md:text-sm font-code text-muted-foreground group-hover:text-primary-foreground">
                  {reality.name.substring(0,3)}
                </span>
              )}
            </motion.div>
          );
        })}
      </div>
      
      <motion.div 
        className="flex flex-col sm:flex-row gap-4"
        variants={ctaContainerVariants}
      >
        {content.ctaButtons.map((cta, index) => {
           const IconComponent = cta.icon && typeof cta.icon === 'string' ? (LucideIcons[cta.icon as keyof typeof LucideIcons] as LucideIcons.LucideIcon) : (cta.icon as LucideIcons.LucideIcon);
           return (
            <Button key={index} asChild variant={cta.variant || 'default'} size="lg">
              <Link href={cta.href}>
                {IconComponent && <IconComponent className="mr-2 h-5 w-5" />}
                {cta.text}
              </Link>
            </Button>
           );
        })}
      </motion.div>

      {selectedReality && (
        <Dialog open={!!selectedReality} onOpenChange={() => setSelectedReality(null)}>
          <DialogContent className="sm:max-w-md bg-card text-card-foreground border-border shadow-xl">
            <DialogHeader>
              <DialogTitle className="text-primary flex items-center">
                 {selectedReality.iconName && LucideIcons[selectedReality.iconName as keyof typeof LucideIcons] && 
                    React.createElement(LucideIcons[selectedReality.iconName as keyof typeof LucideIcons] as LucideIcons.LucideIcon, {className: "h-5 w-5 mr-2"})}
                {selectedReality.name}
              </DialogTitle>
              <DialogDescription className="pt-1 text-muted-foreground">
                {selectedReality.description} (Further details and interactive elements to come.)
              </DialogDescription>
            </DialogHeader>
            <div className="mt-4 text-right">
              <Button variant="outline" onClick={() => setSelectedReality(null)}>Close</Button>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </motion.section>
  );
}

    