// src/components/sections/modules-section.tsx
'use client';

import { useState, useRef } from 'react';
import type { Dispatch, SetStateAction } from 'react'; // Added type import
import { motion, useInView } from 'framer-motion';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

interface Module {
  id: string;
  name: string;
  tagline: string;
  description: string;
  imageHint: string;
  imageUrl?: string; // Added optional imageUrl property
}

const modules: Module[] = [
  { id: 'habitat', name: 'mod36/habitat', tagline: 'EcoHab Africa', description: 'Pioneering sustainable and modular living solutions tailored for the African continent. Focusing on eco-friendly materials, community-centric design, and resilient infrastructure.', imageHint: 'modern architecture' },
  { id: 'net', name: 'mod36/net', tagline: 'Buildr Community', description: 'A decentralized network fostering collaboration and knowledge sharing among builders, designers, and innovators in the modular construction and systems design space.', imageHint: 'community network' },
  { id: 'code', name: 'mod36/code', tagline: 'A Stealth Tech Platform', description: 'Developing a cutting-edge software platform to streamline the design, manufacturing, and deployment of modular systems. Currently in stealth mode.', imageHint: 'abstract code' },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

export function ModulesSection() {
  const [selectedModule, setSelectedModule] = useState<Module | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section
      id="modules"
      ref={ref}
      className="min-h-screen h-screen snap-start flex flex-col items-center justify-center p-8 md:p-16 relative bg-background"
      aria-labelledby="modules-title"
    >
      <motion.h2
        id="modules-title"
        className="font-headline text-4xl md:text-5xl font-bold text-primary mb-12 text-center border-b-2 border-dotted border-primary/50 pb-2"
        initial={{ opacity: 0, y: -20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        Modules
      </motion.h2>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {modules.map((module, index) => (
          <motion.div
            key={module.id}
            custom={index}
            variants={cardVariants}
            className="group bg-card border border-border rounded-lg p-6 shadow-lg hover:shadow-primary/20 transition-all duration-300 cursor-pointer flex flex-col justify-between min-h-[280px]"
            onClick={() => setSelectedModule(module)}
            whileHover={{
              y: -5,
              backgroundColor: 'hsl(var(--primary))',
              borderColor: 'hsl(var(--primary))',
            }}
            role="button"
            tabIndex={0}
            onKeyPress={(e) => e.key === 'Enter' && setSelectedModule(module)}
            aria-label={`View details for ${module.name}`}
          >
            <div>
              <h3 className="font-headline text-2xl font-semibold text-primary group-hover:text-primary-foreground mb-2">{module.name}</h3>
              <p className="font-body text-lg text-muted-foreground group-hover:text-primary-foreground/80 mb-4">{module.tagline}</p>
            </div>
            <div className="mt-auto">
               <Button variant="link" className="p-0 text-sm text-primary group-hover:text-primary-foreground group-hover:underline">
                Explore →
              </Button>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {selectedModule && (
        <Dialog open={!!selectedModule} onOpenChange={() => setSelectedModule(null)}>
          <DialogContent className="sm:max-w-lg bg-card text-card-foreground border-border shadow-xl rounded-lg">
            <DialogHeader>
              <DialogTitle className="font-headline text-2xl text-primary">{selectedModule.name}</DialogTitle>
              <DialogDescription className="text-muted-foreground pt-1">{selectedModule.tagline}</DialogDescription>
            </DialogHeader>
            <div className="my-4">
              <Image
                src={selectedModule.imageUrl || `https://placehold.co/600x400.png`}
                alt={selectedModule.tagline}
                width={600}
                height={400}
                className="rounded-md object-cover w-full aspect-video"
                data-ai-hint={selectedModule.imageHint}
              />
            </div>
            <p className="font-body text-foreground leading-relaxed">{selectedModule.description}</p>
            <div className="mt-6 text-right">
              <Button variant="outline" onClick={() => setSelectedModule(null)}>Close</Button>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </section>
  );
}
