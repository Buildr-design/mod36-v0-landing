
// src/components/sections/hero-section-v2.tsx
'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import type { HeroSectionContentV2 } from '@/data/site-content';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import * as LucideIcons from 'lucide-react';
import { PoeticizerButton } from '@/components/poeticizer-button';

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

const taglineVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.7, delay: 1.2, ease: "easeOut" } },
};

const ctaButtonContainerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2, delayChildren: 1.5 } },
};

export function HeroSectionV2({ content }: { content?: HeroSectionContentV2 }) {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  if (!content) return null;

  const textToPoeticize = `${content.mainTitle}\n${content.subtitle}\n${content.animatedTagline}`;

  return (
    <motion.section
      id="hero-v2"
      ref={sectionRef}
      className="min-h-screen h-screen snap-start flex flex-col items-center justify-center p-8 relative text-center overflow-hidden bg-background text-foreground"
      aria-labelledby="hero-main-title"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={sectionVariants}
    >
      <div className="absolute inset-0 z-0 opacity-[0.03]">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="heroGrid" width="80" height="80" patternUnits="userSpaceOnUse">
              <circle cx="1" cy="1" r="1" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#heroGrid)" />
        </svg>
      </div>
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'radial-gradient(circle, hsl(var(--primary) / 0.1) 0%, transparent 50%)',
          backgroundSize: '150% 150%',
          backgroundPosition: 'center center',
        }}
        data-ai-hint={content.backgroundVisualHint}
      ></div>


      <motion.div
        className="z-10 max-w-3xl w-full flex flex-col items-center relative"
        variants={textContainerVariants}
      >
        <PoeticizerButton 
          textToPoeticize={textToPoeticize} 
          className="absolute top-0 right-0 -mt-4 -mr-4 text-primary/70 hover:text-primary"
          buttonText=''
        />
        <motion.h1
          id="hero-main-title"
          className="font-headline text-5xl md:text-7xl font-bold text-primary mb-4"
          variants={itemVariants}
        >
          {content.mainTitle}
        </motion.h1>
        <motion.p
          className="font-body text-lg md:text-2xl text-foreground mb-6"
          variants={itemVariants}
        >
          {content.subtitle}
        </motion.p>
        <motion.p
          className="font-code text-xl md:text-3xl text-accent-foreground mb-10"
          variants={taglineVariants}
        >
          {content.animatedTagline}
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4"
          variants={ctaButtonContainerVariants}
        >
          {content.ctaButtons.map((cta, index) => {
            const IconComponent = cta.icon && typeof cta.icon === 'string' ? (LucideIcons[cta.icon as keyof typeof LucideIcons] as LucideIcons.LucideIcon) : (cta.icon as LucideIcons.LucideIcon);
            return (
            <motion.div key={index} variants={itemVariants}>
              <Button asChild variant={cta.variant || 'default'} size="lg" className={cta.variant === 'default' ? 'bg-primary text-primary-foreground hover:bg-primary/90' : 'border-primary text-primary hover:bg-primary/10'}>
                <Link href={cta.href}>
                  {IconComponent && <IconComponent className="mr-2 h-5 w-5" />}
                  {cta.text}
                </Link>
              </Button>
            </motion.div>
          )}
          )}
        </motion.div>
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

    