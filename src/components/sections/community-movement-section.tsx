
// src/components/sections/community-movement-section.tsx
// Adapted for "Call to Action"
'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import type { CallToActionContent } from '@/data/site-content'; // Updated interface
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import * as LucideIcons from 'lucide-react';

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.3 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export function CommunityMovementSection({ content }: { content?: CallToActionContent }) {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  if (!content) return null;

  const CtaIconComponent = content.ctaButton.icon && typeof content.ctaButton.icon === 'string' 
    ? (LucideIcons[content.ctaButton.icon as keyof typeof LucideIcons] as LucideIcons.LucideIcon) 
    : (content.ctaButton.icon as LucideIcons.LucideIcon);

  return (
    <motion.section
      id="call-to-action" 
      ref={sectionRef}
      className="min-h-screen h-screen snap-start flex flex-col items-center justify-center p-8 md:p-16 bg-card text-card-foreground relative text-center"
      aria-labelledby="call-to-action-title"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={sectionVariants}
    >
      <motion.h2
        id="call-to-action-title"
        className="font-headline text-3xl md:text-4xl font-bold text-primary mb-6"
        variants={itemVariants}
      >
        {content.title}
      </motion.h2>

      <motion.p className="max-w-xl text-lg md:text-xl text-muted-foreground mb-10" variants={itemVariants}>
        {content.mainText}
      </motion.p>
      
      <motion.div variants={itemVariants}>
        <Button 
          asChild 
          variant={content.ctaButton.variant || 'default'} 
          size="lg" 
          className={content.ctaButton.variant === 'default' ? 'bg-primary text-primary-foreground hover:bg-primary/90' : 'border-primary text-primary hover:bg-primary/10'}
        >
          <Link href={content.ctaButton.href} target={content.ctaButton.href.startsWith('http') || content.ctaButton.href.startsWith('mailto:') ? '_blank' : '_self'}>
            {CtaIconComponent && <CtaIconComponent className="mr-2 h-5 w-5" />}
            {content.ctaButton.text}
          </Link>
        </Button>
      </motion.div>

      {content.visualHint && (
         <motion.div 
          className="mt-12 text-center text-muted-foreground font-code text-sm"
          data-ai-hint={content.visualDataAiHint || "abstract call to action visual"}
          variants={itemVariants}
        >
          {content.visualHint}
        </motion.div>
      )}
    </motion.section>
  );
}
    
