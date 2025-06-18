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

  // Stricter guard:
  // 1. Ensure 'content' object exists.
  // 2. Ensure 'content.lines' is an array.
  if (!content || !Array.isArray(content.lines)) {
    // console.warn("ManifestoSection: 'content' prop is invalid or 'content.lines' is not an array. Content:", content);
    return null; // Exit early if critical data is missing or malformed
  }

  // At this point, 'content' is a valid object and 'content.lines' is an array (it could be empty).
  const { lines, title, ctaButtonText } = content;

  // Calculate the delay for the last line to start animating.
  // If there are lines, it's (number of lines - 1) * stagger time.
  // If no lines or 1 line, this base delay is 0.
  const lastLineAnimationStartDelay = lines.length > 0 ? (lines.length - 1) * 0.4 : 0;
  // The last line's animation duration is 0.8s.
  const buttonAppearDelay = lastLineAnimationStartDelay + 0.8 + 0.2; // Start 0.2s after last line finishes.
  const faintLineAppearDelay = buttonAppearDelay + 0.3; // Start 0.3s after button starts.

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
          className="mt-12 text-center"
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
