
// src/components/sections/open-model-section.tsx
'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import type { OpenModelSectionContent } from '@/data/site-content';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import * as LucideIcons from 'lucide-react';
import { PoeticizerButton } from '@/components/poeticizer-button';

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.7, ease: "easeOut", staggerChildren: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export function OpenModelSection({ content }: { content?: OpenModelSectionContent }) {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  if (!content) return null;

  const poeticizableText = `${content.title}\n${content.quoteOrManifestoExcerpt}\n${content.invitationText}\nAudience: ${content.audience.map(a => a.name).join(', ')}`;

  return (
    <motion.section
      id="open-model"
      ref={sectionRef}
      className="min-h-screen h-screen snap-start flex flex-col items-center justify-center p-8 md:p-16 bg-background text-foreground relative"
      aria-labelledby="open-model-title"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={sectionVariants}
    >
      <PoeticizerButton 
          textToPoeticize={poeticizableText}
          className="absolute top-8 right-8 text-primary/70 hover:text-primary"
      />
      <motion.h2
        id="open-model-title"
        className="font-headline text-4xl md:text-5xl font-bold text-primary mb-8 text-center"
        variants={itemVariants}
      >
        {content.title}
      </motion.h2>

      <motion.blockquote
        className="max-w-2xl text-center italic text-lg md:text-xl text-muted-foreground mb-8 border-l-4 border-primary pl-6 py-2"
        variants={itemVariants}
      >
        {content.quoteOrManifestoExcerpt}
      </motion.blockquote>

      <motion.p
        className="max-w-2xl text-center text-md md:text-lg text-foreground mb-10"
        variants={itemVariants}
      >
        {content.invitationText}
      </motion.p>
      
      <motion.div className="mb-10" variants={itemVariants}>
        <h3 className="text-center font-semibold text-foreground mb-4">Who it's for:</h3>
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8">
          {content.audience.map((person) => {
            const IconComponent = LucideIcons[person.iconName as keyof typeof LucideIcons] as LucideIcons.LucideIcon;
            return (
              <div key={person.name} className="flex flex-col items-center text-center w-24">
                {IconComponent && <IconComponent className="h-8 w-8 text-primary mb-1" />}
                <span className="text-xs text-muted-foreground">{person.name}</span>
              </div>
            );
          })}
        </div>
      </motion.div>

      {/* Placeholder for sign-up form */}
      <motion.div className="text-center mb-10 p-6 border border-dashed border-border rounded-lg max-w-md w-full bg-card/50" variants={itemVariants}>
        <p className="text-muted-foreground font-code text-sm">
          [Sign-up form / Community Integration Placeholder]
        </p>
        <p className="text-xs text-muted-foreground/70 mt-2">
          (e.g., Email input for newsletter, link to Discord/Forum)
        </p>
      </motion.div>

      <motion.div
        className="flex flex-col sm:flex-row gap-4"
        variants={itemVariants}
      >
        {content.ctaButtons.map((cta, index) => {
          const IconComponent = cta.icon && typeof cta.icon === 'string' ? (LucideIcons[cta.icon as keyof typeof LucideIcons] as LucideIcons.LucideIcon) : (cta.icon as LucideIcons.LucideIcon);
          return(
            <Button key={index} asChild variant={cta.variant || 'default'} size="lg">
              <Link href={cta.href} target={cta.href.startsWith('mailto:') ? '_blank' : '_self'}>
                 {IconComponent && <IconComponent className="mr-2 h-5 w-5" />}
                {cta.text}
              </Link>
            </Button>
          );
        })}
      </motion.div>
    </motion.section>
  );
}

    