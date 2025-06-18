
// src/components/sections/roadmap-section.tsx
'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import type { RoadmapSectionContent } from '@/data/site-content';
import { CheckCircle, RadioTower, Telescope } from 'lucide-react';
import { PoeticizerButton } from '@/components/poeticizer-button';

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.7, ease: "easeOut", staggerChildren: 0.2 } },
};

const titleVariants = {
  hidden: { opacity: 0, y: -30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const milestoneVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

const getStatusIcon = (status: 'Now' | 'Upcoming' | 'Future') => {
  switch (status) {
    case 'Now':
      return <CheckCircle className="h-6 w-6 text-green-500" />;
    case 'Upcoming':
      return <RadioTower className="h-6 w-6 text-yellow-500" />;
    case 'Future':
      return <Telescope className="h-6 w-6 text-blue-500" />;
    default:
      return null;
  }
};

export function RoadmapSection({ content }: { content?: RoadmapSectionContent }) {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  if (!content || !content.milestones) return null;

  const poeticizableText = `${content.title}\n${content.milestones.map(m => `${m.version} (${m.status}): ${m.title} - ${m.description}`).join('\n\n')}`;


  return (
    <motion.section
      id="roadmap"
      ref={sectionRef}
      className="min-h-screen h-screen snap-start flex flex-col items-center justify-center p-8 md:p-16 bg-background text-foreground relative"
      aria-labelledby="roadmap-title"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={sectionVariants}
    >
      <PoeticizerButton 
          textToPoeticize={poeticizableText}
          className="absolute top-8 right-8 text-primary/70 hover:text-primary"
      />
      <motion.h2
        id="roadmap-title"
        className="font-headline text-4xl md:text-5xl font-bold text-primary mb-12 md:mb-16 text-center"
        variants={titleVariants}
      >
        {content.title}
      </motion.h2>

      <div className="w-full max-w-3xl space-y-8">
        {content.milestones.map((milestone, index) => (
          <motion.div
            key={index}
            className="relative pl-12 pb-8 border-l-2 border-border last:border-l-transparent last:pb-0"
            variants={milestoneVariants}
          >
            <div className="absolute -left-[13px] top-0 flex items-center justify-center bg-background p-1 rounded-full border-2 border-primary">
              {getStatusIcon(milestone.status)}
            </div>
            <div className="ml-4">
              <p className="text-xs font-code text-primary uppercase tracking-wider">
                {milestone.version} - {milestone.status}
              </p>
              <h3 className="text-xl md:text-2xl font-semibold text-foreground mt-1 mb-2">{milestone.title}</h3>
              <p className="text-muted-foreground text-sm">{milestone.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

    