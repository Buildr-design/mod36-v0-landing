// src/components/sections/about-section.tsx
'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { PoeticizerButton } from '@/components/poeticizer-button';

const title = "What is mod36?";
const bodyText = "mod36 is a systems design company.\nWe build modular ideas for a complex world.\nVersion Zero is where we test, sketch, and think in the open.";

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section 
      id="about"
      ref={ref}
      className="min-h-screen h-screen snap-start flex items-center justify-center p-8 md:p-16 relative bg-background"
      aria-labelledby="about-title"
    >
      <motion.div
        className="grid md:grid-cols-2 gap-8 md:gap-16 max-w-4xl w-full items-center"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <div className="space-y-6">
          <motion.h2 
            id="about-title"
            className="font-headline text-4xl md:text-5xl font-bold text-primary relative"
            variants={itemVariants}
          >
            {title}
             <span className="absolute -top-3 -right-3 text-xs font-code text-accent bg-accent/10 px-2 py-1 rounded-full">v0.1 experimental</span>
          </motion.h2>
          
          <motion.div variants={itemVariants} className="relative group">
            <p className="font-body text-lg md:text-xl text-foreground leading-relaxed whitespace-pre-line">
              {bodyText}
            </p>
            <PoeticizerButton 
              textToPoeticize={bodyText} 
              className="absolute top-0 right-0 opacity-50 group-hover:opacity-100 transition-opacity"
            />
          </motion.div>
        </div>
        <motion.div 
          className="hidden md:flex items-center justify-center aspect-square relative"
          variants={itemVariants}
        >
          {/* Placeholder for "system map" diagram or abstract visual */}
          <div 
            className="w-full h-full border-2 border-dashed border-muted rounded-lg flex items-center justify-center"
            data-ai-hint="abstract lines"
          >
            <svg width="80%" height="80%" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="opacity-20">
              <motion.circle 
                cx="50" cy="50" r="40" 
                stroke="currentColor" strokeWidth="1" fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
                transition={{ duration: 2, delay: 0.5, ease: "easeInOut" }}
              />
              <motion.line 
                x1="10" y1="50" x2="90" y2="50"
                stroke="currentColor" strokeWidth="0.5"
                initial={{ scaleX: 0, opacity: 0 }}
                animate={isInView ? { scaleX: 1, opacity: 1 } : {}}
                transition={{ duration: 1, delay: 1, ease: "easeOut" }}
              />
               <motion.line 
                x1="50" y1="10" x2="50" y2="90"
                stroke="currentColor" strokeWidth="0.5"
                initial={{ scaleY: 0, opacity: 0 }}
                animate={isInView ? { scaleY: 1, opacity: 1 } : {}}
                transition={{ duration: 1, delay: 1.2, ease: "easeOut" }}
              />
              {[...Array(3)].map((_, i) => (
                <motion.circle
                  key={i}
                  cx={25 + i * 25}
                  cy="50"
                  r="5"
                  fill="currentColor"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 1.5 + i * 0.2, ease: "easeOut" }}
                />
              ))}
            </svg>
          </div>
           <p className="absolute bottom-4 right-4 text-xs font-code text-muted-foreground/50">[System Map Placeholder]</p>
        </motion.div>
      </motion.div>
    </section>
  );
}
