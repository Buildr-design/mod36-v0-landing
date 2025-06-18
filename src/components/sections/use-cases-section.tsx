// src/components/sections/use-cases-section.tsx
'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import type { UseCasesSectionContent } from '@/data/site-content';
import Image from 'next/image';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { PoeticizerButton } from '@/components/poeticizer-button';

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5, staggerChildren: 0.2, delayChildren: 0.2 } },
};

const titleVariants = {
  hidden: { opacity: 0, y: -30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

export function UseCasesSection({ content }: { content?: UseCasesSectionContent }) {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  if (!content || !content.categories) return null;

  const poeticizableText = `${content.title}\n${content.categories.map(cat => `${cat.title}: ${cat.description}`).join('\n\n')}`;

  return (
    <motion.section
      id="use-cases"
      ref={sectionRef}
      className="min-h-screen snap-start flex flex-col items-center justify-center p-8 md:p-16 bg-background text-foreground relative"
      aria-labelledby="use-cases-title"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={sectionVariants}
    >
      <PoeticizerButton 
          textToPoeticize={poeticizableText}
          className="absolute top-8 right-8 text-primary/70 hover:text-primary"
      />
      <motion.h2
        id="use-cases-title"
        className="font-headline text-4xl md:text-5xl font-bold text-primary mb-12 md:mb-16 text-center"
        variants={titleVariants}
      >
        {content.title}
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl w-full">
        {content.categories.slice(0, 3).map((category) => ( // Show first 3 for a cleaner initial look, can expand
          <motion.div key={category.id} variants={cardVariants}>
            <Card className="bg-card/70 border-border/70 rounded-lg shadow-lg overflow-hidden h-full flex flex-col hover:shadow-primary/20 transition-shadow duration-300">
              <Image
                src={category.imageUrl || `https://placehold.co/400x250.png`}
                alt={category.title}
                width={400}
                height={250}
                className="w-full h-48 object-cover"
                data-ai-hint={category.imageHint}
              />
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-foreground">{category.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <CardDescription className="text-muted-foreground text-sm mb-4">{category.description}</CardDescription>
              </CardContent>
              {category.link && (
                <div className="p-4 pt-0 mt-auto">
                  <Button asChild variant="link" className="text-primary p-0">
                    <Link href={category.link} aria-label={`Learn more about ${category.title}`}>
                      Learn More <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              )}
            </Card>
          </motion.div>
        ))}
      </div>
      {/* Placeholder for full tab/carousel view if more categories exist */}
      {content.categories.length > 3 && (
        <motion.div className="mt-8 text-center" variants={titleVariants}>
            <Button variant="outline" disabled>More Use Cases Coming Soon</Button>
        </motion.div>
      )}
    </motion.section>
  );
}
