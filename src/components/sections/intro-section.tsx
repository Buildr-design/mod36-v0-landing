
// src/components/sections/intro-section.tsx
'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import type { IntroSectionContent } from '@/data/site-content';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { PoeticizerButton } from '@/components/poeticizer-button';

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.3 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export function IntroSection({ content }: { content?: IntroSectionContent }) {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  if (!content) return null;

  const highlightRegex = new RegExp(`(${content.highlightKeywords.join('|')})`, 'gi');
  const parts = content.animatedText.split(highlightRegex).filter(part => part);

  return (
    <motion.section
      id="intro"
      ref={sectionRef}
      className="min-h-screen h-screen snap-start flex items-center justify-center p-8 md:p-16 bg-background text-foreground relative"
      aria-labelledby="intro-title"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={sectionVariants}
    >
      <div className="max-w-3xl w-full text-center space-y-8 relative">
        <PoeticizerButton 
            textToPoeticize={content.animatedText}
            className="absolute top-0 right-0 -mt-4 text-primary/70 hover:text-primary"
        />
        <motion.h2
          id="intro-title"
          className="font-headline text-3xl md:text-5xl font-semibold text-foreground leading-tight"
          variants={itemVariants}
        >
          {parts.map((part, index) => 
            content.highlightKeywords.find(kw => kw.toLowerCase() === part.toLowerCase()) ? (
              <span key={index} className="text-primary">{part}</span>
            ) : (
              part
            )
          )}
        </motion.h2>
        
        <motion.div variants={itemVariants}>
          <Button asChild variant={content.ctaButton.variant || 'link'} size="lg" className="text-primary hover:text-primary/80">
            <Link href={content.ctaButton.href}>
              {content.ctaButton.text} <span className="ml-2">→</span>
            </Link>
          </Button>
        </motion.div>
      </div>
    </motion.section>
  );
}

    