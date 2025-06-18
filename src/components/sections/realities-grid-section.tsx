// src/components/sections/realities-grid-section.tsx
'use client';

import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import type { RealitiesGridSectionContent, RealityItem } from '@/data/site-content';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import * as LucideIcons from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { PoeticizerButton } from '@/components/poeticizer-button';
import { cn } from '@/lib/utils';

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5, delayChildren: 0.2 } },
};

const titleVariants = {
  hidden: { opacity: 0, y: -30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const gridContainerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.03 } },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const ctaButtonContainerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.5, ease: "easeOut" } },
};


export function RealitiesGridSection({ content }: { content?: RealitiesGridSectionContent }) {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });
  const [selectedReality, setSelectedReality] = useState<RealityItem | null>(null);

  if (!content || !content.realities) return null;

  const poeticizableText = `${content.title}\n${content.realities.map(r => `${r.title}: ${r.oneLiner}`).join('\n\n')}`;

  return (
    <motion.section
      id="realities"
      ref={sectionRef}
      className="min-h-screen h-screen snap-start flex flex-col items-center justify-center p-4 md:p-8 bg-background text-foreground relative overflow-hidden"
      aria-labelledby="realities-title"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={sectionVariants}
    >
      <PoeticizerButton 
          textToPoeticize={poeticizableText}
          className="absolute top-6 right-6 md:top-8 md:right-8 z-20 text-primary/70 hover:text-primary"
      />
      <motion.h2
        id="realities-title"
        className="font-headline text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-6 md:mb-10 text-center"
        variants={titleVariants}
      >
        {content.title}
      </motion.h2>

      <motion.div
        className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-9 gap-2 md:gap-3 max-w-xs sm:max-w-xl md:max-w-4xl lg:max-w-5xl w-full mb-6 md:mb-10 flex-grow overflow-y-auto p-1 custom-scrollbar"
        variants={gridContainerVariants}
      >
        {content.realities.map((reality) => {
          const IconComponent = reality.iconName && LucideIcons[reality.iconName as keyof typeof LucideIcons] as LucideIcons.LucideIcon;
          return (
            <motion.div
              key={reality.id}
              variants={cardVariants}
              className={cn(
                "aspect-square bg-card/40 border border-border/40 rounded-lg flex flex-col items-center justify-center text-center p-2 md:p-3 cursor-pointer",
                "hover:bg-primary/10 hover:border-primary/70 hover:shadow-xl hover:scale-105 transition-all duration-200 ease-out"
              )}
              onClick={() => setSelectedReality(reality)}
              onKeyPress={(e) => e.key === 'Enter' && setSelectedReality(reality)}
              tabIndex={0}
              role="button"
              aria-label={`View details for ${reality.title}`}
            >
              {IconComponent ? (
                <IconComponent className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8 text-primary mb-1 md:mb-2" />
              ) : (
                <LucideIcons.Box className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8 text-primary mb-1 md:mb-2" /> // Default icon
              )}
              <p className="text-[0.60rem] sm:text-xs md:text-sm font-medium text-foreground leading-tight">
                {reality.title}
              </p>
            </motion.div>
          );
        })}
      </motion.div>
      
      <motion.div 
        className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-auto pb-4"
        variants={ctaButtonContainerVariants}
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
          <DialogContent className="sm:max-w-lg md:max-w-xl bg-card text-card-foreground border-border shadow-xl rounded-lg">
            <DialogHeader className="mb-3">
              <DialogTitle className="text-2xl text-primary flex items-center font-headline">
                 {selectedReality.iconName && LucideIcons[selectedReality.iconName as keyof typeof LucideIcons] && 
                    React.createElement(LucideIcons[selectedReality.iconName as keyof typeof LucideIcons] as LucideIcons.LucideIcon, {className: "h-7 w-7 mr-3 text-primary"})}
                {selectedReality.title}
              </DialogTitle>
            </DialogHeader>
            
            <ScrollArea className="max-h-[60vh] pr-4 -mr-2 custom-scrollbar">
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-sm text-muted-foreground mb-1">One-Liner</h3>
                  <p className="text-foreground italic text-base">{selectedReality.oneLiner}</p>
                </div>

                {selectedReality.extendedDescription && (
                  <div>
                    <h3 className="font-semibold text-sm text-muted-foreground mb-1">Context</h3>
                    <p className="text-muted-foreground text-base whitespace-pre-line">{selectedReality.extendedDescription}</p>
                  </div>
                )}

                {selectedReality.tags && selectedReality.tags.length > 0 && (
                  <div>
                    <h3 className="font-semibold text-sm text-muted-foreground mb-2">Tags</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedReality.tags.map(tag => (
                        <Badge key={tag} variant="secondary" className="font-normal bg-primary/10 text-primary border-primary/30">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </ScrollArea>
            
            <DialogFooter className="mt-6 pt-4 border-t border-border">
              <Button variant="outline" onClick={() => setSelectedReality(null)}>Close</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}
    </motion.section>
  );
}
