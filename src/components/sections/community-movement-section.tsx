// src/components/sections/community-movement-section.tsx
'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import type { CommunityV0Content } from '@/data/site-content';
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

export function CommunityMovementSection({ content }: { content?: CommunityV0Content }) {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  if (!content) return null;

  return (
    <motion.section
      id="community" // Keep this id for existing nav links
      ref={sectionRef}
      className="min-h-screen h-screen snap-start flex flex-col items-center justify-center p-8 md:p-16 bg-card text-card-foreground relative text-center"
      aria-labelledby="community-v0-title"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={sectionVariants}
    >
      <motion.h2
        id="community-v0-title"
        className="font-headline text-4xl md:text-5xl font-bold text-primary mb-8"
        variants={itemVariants}
      >
        {content.title}
      </motion.h2>

      <motion.div className="max-w-2xl space-y-4 mb-10 text-muted-foreground" variants={itemVariants}>
        {content.invitationParagraphs.map((paragraph, index) => (
            <p key={index} className="text-lg md:text-xl">{paragraph}</p>
        ))}
      </motion.div>
      
      <motion.div className="flex flex-col sm:flex-row gap-4 mb-8" variants={itemVariants}>
          {content.ctaButtons.map((cta, index) => {
            const IconComponent = cta.icon && typeof cta.icon === 'string' ? (LucideIcons[cta.icon as keyof typeof LucideIcons] as LucideIcons.LucideIcon) : (cta.icon as LucideIcons.LucideIcon);
            return (
            <motion.div key={index} variants={itemVariants}>
              <Button asChild variant={cta.variant || 'default'} size="lg" className={cta.variant === 'default' ? 'bg-primary text-primary-foreground hover:bg-primary/90' : 'border-primary text-primary hover:bg-primary/10'}>
                <Link href={cta.href} target={cta.href.startsWith('http') || cta.href.startsWith('mailto:') ? '_blank' : '_self'}>
                  {IconComponent && <IconComponent className="mr-2 h-5 w-5" />}
                  {cta.text}
                </Link>
              </Button>
            </motion.div>
          )}
          )}
      </motion.div>

      <motion.p className="font-code text-md text-foreground italic" variants={itemVariants}>
        {content.evolutionNote}
      </motion.p>

      {content.visualHint && (
         <motion.div 
          className="mt-12 text-center text-muted-foreground font-code text-sm"
          data-ai-hint={content.visualDataAiHint || "abstract community visual"}
          variants={itemVariants}
        >
          {content.visualHint}
        </motion.div>
      )}
    </motion.section>
  );
}
    
