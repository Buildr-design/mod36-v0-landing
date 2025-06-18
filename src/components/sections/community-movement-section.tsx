
// src/components/sections/community-movement-section.tsx
'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import type { CommunityMovementSectionContent } from '@/data/site-content';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import * as LucideIcons from 'lucide-react';
import { PoeticizerButton } from '@/components/poeticizer-button';

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.3 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export function CommunityMovementSection({ content }: { content?: CommunityMovementSectionContent }) {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  if (!content) return null;

  const poeticizableText = `${content.title}\n${content.quote}`;
  const IconComponent = content.cta.icon && LucideIcons[content.cta.icon as keyof typeof LucideIcons] as LucideIcons.LucideIcon;


  return (
    <motion.section
      id="community"
      ref={sectionRef}
      className="min-h-screen h-screen snap-start flex flex-col items-center justify-center p-8 md:p-16 bg-background text-foreground relative"
      aria-labelledby="community-title"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={sectionVariants}
    >
       <PoeticizerButton 
          textToPoeticize={poeticizableText}
          className="absolute top-8 right-8 text-primary/70 hover:text-primary"
      />
      <motion.h2
        id="community-title"
        className="font-headline text-4xl md:text-5xl font-bold text-primary mb-8 text-center"
        variants={itemVariants}
      >
        {content.title}
      </motion.h2>

      <motion.blockquote
        className="max-w-2xl text-center italic text-xl md:text-2xl text-muted-foreground mb-10 border-l-4 border-primary pl-6 py-3"
        variants={itemVariants}
      >
        "{content.quote}"
      </motion.blockquote>
      
      <motion.div variants={itemVariants}>
        <Button asChild variant={content.cta.variant || 'default'} size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
          <Link href={content.cta.href} target="_blank" rel="noopener noreferrer">
            {IconComponent && <IconComponent className="mr-2 h-5 w-5" />}
            {content.cta.text}
          </Link>
        </Button>
      </motion.div>
    </motion.section>
  );
}
    