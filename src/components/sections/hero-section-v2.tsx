
// src/components/sections/hero-section-v2.tsx
'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import type { HeroSectionRevisedContent } from '@/data/site-content'; // Updated interface
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import * as LucideIcons from 'lucide-react';

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
};

const textContainerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.3, delayChildren: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.6, 0.01, 0.05, 0.95] } },
};

export function HeroSectionV2({ content }: { content?: HeroSectionRevisedContent }) {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  if (!content) return null;

  return (
    <motion.section
      id="hero-revised"
      ref={sectionRef}
      className="min-h-screen h-screen snap-start flex flex-col items-center justify-center p-8 relative text-center overflow-hidden bg-background text-foreground"
      aria-labelledby="hero-main-headline"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={sectionVariants}
    >
      <div className="absolute inset-0 z-0 opacity-[0.03]">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="heroGridV0" width="60" height="60" patternUnits="userSpaceOnUse">
              <circle cx="0.5" cy="0.5" r="0.5" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#heroGridV0)" />
        </svg>
      </div>
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'radial-gradient(circle, hsl(var(--primary) / 0.06) 0%, transparent 55%)',
          backgroundSize: '150% 150%',
          backgroundPosition: 'center center',
        }}
        data-ai-hint={content.backgroundVisualHint}
      ></div>

      <motion.div
        className="z-10 max-w-4xl w-full flex flex-col items-center relative"
        variants={textContainerVariants}
      >
        <motion.h1
          id="hero-main-headline"
          className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-4"
          variants={itemVariants}
        >
          {content.headline}
        </motion.h1>
        <motion.h2
          className="font-body text-xl md:text-2xl text-foreground mb-8"
          variants={itemVariants}
        >
          {content.tagline}
        </motion.h2>
        
        {content.introParagraph.map((paragraph, index) => (
          <motion.p
            key={index}
            className="font-body text-base md:text-lg text-muted-foreground max-w-2xl mb-4 last:mb-0"
            variants={itemVariants}
          >
            {paragraph}
          </motion.p>
        ))}
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.5, 1, 0.5, 0] }}
        transition={{ 
          delay: 2.5,
          duration: 2, 
          repeat: Infinity, 
          ease: "easeInOut",
          repeatDelay: 1
        }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 text-xs font-code text-muted-foreground tracking-widest"
      >
        ↓ SCROLL
      </motion.div>
    </motion.section>
  );
}

