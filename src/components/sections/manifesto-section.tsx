// src/components/sections/manifesto-section.tsx
'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { PoeticizerButton } from '@/components/poeticizer-button';
import type { ManifestoSectionContent } from '@/data/site-content';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const lineVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.6, 0.01, 0.05, 0.95],
    },
  },
};

export function ManifestoSection({ content }: { content?: ManifestoSectionContent }) {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  if (!content || !Array.isArray(content.lines) || content.lines.length === 0) {
    // console.warn("ManifestoSection: 'content' prop is invalid or 'content.lines' is not an array or is empty. Content:", content);
    return null; 
  }
  
  const { lines, title, ctaButtonText } = content;

  const lastLineAnimationStartDelay = (lines.length - 1) * 0.4;
  const buttonAppearDelay = lastLineAnimationStartDelay + 0.8 + 0.2; 
  const faintLineAppearDelay = buttonAppearDelay + 0.3;

  return (
    <section
      id="manifesto"
      ref={sectionRef}
      className="min-h-screen h-screen snap-start flex flex-col items-center justify-center p-8 md:p-16 relative bg-background text-center"
      aria-label={title || "Manifesto Section"}
    >
      <div className="max-w-3xl w-full space-y-10 md:space-y-16">
        {lines.map((line, index) => (
          <motion.div
            key={index}
            className="relative group"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={lineVariants}
            custom={index}
            style={{ transitionDelay: isInView ? `${index * 0.4}s` : '0s' }}
          >
            <p className="font-headline text-3xl md:text-5xl font-bold text-foreground leading-tight">
              {line.text}
            </p>
            <PoeticizerButton
              textToPoeticize={line.text}
              className="absolute -top-4 right-0 md:-right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
          </motion.div>
        ))}
      </div>

      {ctaButtonText && (
        <motion.div
          className="mt-12 md:mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: isInView ? buttonAppearDelay : 0 }}
        >
          <Link href="/manifesto" passHref>
            <Button variant="outline" size="lg" className="bg-transparent hover:bg-primary/10 hover:text-primary border-primary text-primary">
              {ctaButtonText} <span className="ml-2">→</span>
            </Button>
          </Link>
        </motion.div>
      )}

      <motion.div
        className="absolute left-1/2 bottom-10 h-16 w-px bg-primary/30"
        initial={{ scaleY: 0, originY: 0 }}
        animate={isInView ? { scaleY: 1, originY: 0 } : {}}
        transition={{ duration: 1, delay: isInView ? faintLineAppearDelay : 0, ease: "easeOut"}}
      />
    </section>
  );
}
