
// src/components/sections/hero-section-v2.tsx
'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import type { HeroV001Content } from '@/data/site-content';
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

export function HeroSectionV2({ content }: { content?: HeroV001Content }) {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  if (!content) return null;

  return (
    <motion.section
      id="hero"
      ref={sectionRef}
      className="min-h-screen h-screen snap-start flex flex-col items-center justify-center p-8 relative text-center overflow-hidden bg-background text-foreground"
      aria-labelledby="hero-main-headline"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={sectionVariants}
    >
      {/* Background Element */}
      <div
        className="absolute inset-0 z-0 animated-bg-layer animate-pulse-opacity" // Added animation class
        style={{
          backgroundImage: 'radial-gradient(circle, hsl(var(--accent) / 0.07) 0%, transparent 60%)', // Base style for gradient
          backgroundSize: '150% 150%',
          backgroundPosition: 'center center',
        }}
        data-ai-hint={content.visualDataAiHint}
      >
        {/* Optional: subtle background pattern for light theme, could also be part of the 3D effect */}
        <div className="absolute inset-0 opacity-[0.03]">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="heroGridLight" width="80" height="80" patternUnits="userSpaceOnUse">
                <circle cx="1" cy="1" r="1" fill="hsl(var(--primary) / 0.5)" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#heroGridLight)" />
          </svg>
        </div>
      </div>


      <motion.div
        className="z-10 max-w-4xl w-full flex flex-col items-center relative"
        variants={textContainerVariants}
      >
        <motion.h1
          id="hero-main-headline"
          className="font-headline text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary mb-6"
          variants={itemVariants}
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          {content.headline}
        </motion.h1>
        <motion.h2
          className="font-body text-xl md:text-2xl text-foreground/80 mb-10"
          variants={itemVariants}
           style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          {content.subheadline}
        </motion.h2>

        {content.ctaButtons && content.ctaButtons.length > 0 && (
          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            variants={itemVariants}
          >
            {content.ctaButtons.map((cta, index) => {
              const CtaIconComponent = cta.icon && typeof cta.icon === 'string'
                ? (LucideIcons[cta.icon as keyof typeof LucideIcons] as LucideIcons.LucideIcon)
                : (cta.icon as LucideIcons.LucideIcon | undefined);
              
              let buttonClasses = "";
              if (cta.variant === 'default') { 
                buttonClasses = 'bg-accent text-accent-foreground hover:bg-accent/90';
              } else if (cta.variant === 'outline') { 
                buttonClasses = 'border-primary text-primary hover:bg-primary hover:text-primary-foreground';
              } else { 
                 buttonClasses = 'bg-primary text-primary-foreground hover:bg-primary/90';
              }

              return (
                <Button
                  key={index}
                  asChild
                  size="lg"
                  className={buttonClasses}
                >
                  <Link href={cta.href} target={cta.target || '_self'}>
                    {CtaIconComponent && <CtaIconComponent className="mr-2 h-5 w-5" />}
                    {cta.text}
                  </Link>
                </Button>
              );
            })}
          </motion.div>
        )}
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
