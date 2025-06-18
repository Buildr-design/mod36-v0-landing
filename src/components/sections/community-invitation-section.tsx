
// src/components/sections/community-invitation-section.tsx
'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import type { CommunityInvitationV001Content } from '@/data/site-content';
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

export function CommunityInvitationSection({ content }: { content?: CommunityInvitationV001Content }) {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.25 });

  if (!content) return null;

  return (
    <motion.section
      id="community-invitation"
      ref={sectionRef}
      className="min-h-screen h-screen snap-start flex flex-col items-center justify-center p-8 md:p-16 bg-card text-card-foreground relative text-center"
      aria-labelledby="community-invitation-title"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={sectionVariants}
    >
      <motion.h2
        id="community-invitation-title"
        className="font-headline text-3xl md:text-4xl font-bold text-primary mb-6"
        variants={itemVariants}
        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
      >
        {content.title}
      </motion.h2>

      <motion.div className="max-w-xl mb-10" variants={itemVariants}>
        {content.mainParagraphs.map((paragraph, index) => (
           <p key={index} className="text-lg md:text-xl text-foreground/80 mb-3 font-body" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            {paragraph}
          </p>
        ))}
      </motion.div>
      
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
            if (cta.variant === 'default') { // Main CTA as accent
              buttonClasses = 'bg-accent text-accent-foreground hover:bg-accent/90';
            } else if (cta.variant === 'outline') { // Secondary CTA as primary (charcoal) outline
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
    </motion.section>
  );
}
