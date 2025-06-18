
// src/app/whitepaper/page.tsx
'use client';

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PageWrapper } from '@/components/layout/page-wrapper';
import { siteContent, type WhitepaperPageContent, type WhitepaperSectionContent, type WhitepaperSubSectionContent } from '@/data/site-content';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { PoeticizerButton } from '@/components/poeticizer-button';

const pageVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      duration: 0.5,
    },
  },
};

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.6, 0.01, 0.05, 0.95],
      staggerChildren: 0.15,
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


function AnimatedSection({ section }: { section: WhitepaperSectionContent }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <motion.section
      ref={ref}
      key={section.id}
      variants={sectionVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="py-8 md:py-10 border-b border-border/30 last:border-b-0"
    >
      <motion.h2
        variants={itemVariants}
        className="font-headline text-2xl md:text-3xl font-semibold text-primary mb-6"
      >
        {section.title}
      </motion.h2>
      {section.paragraphs?.map((paragraph, pIndex) => (
        <motion.p
          key={pIndex}
          variants={itemVariants}
          className="mb-4 text-base md:text-lg leading-relaxed text-muted-foreground whitespace-pre-line"
        >
          {paragraph}
        </motion.p>
      ))}
      {section.subsections?.map((subsection, sIndex) => (
        <motion.div key={sIndex} variants={itemVariants} className="mb-6 ml-4 md:ml-6 pl-4 border-l border-primary/30">
          {subsection.title && (
            <motion.h3
              variants={itemVariants}
              className="font-headline text-xl md:text-2xl font-medium text-foreground mb-3"
            >
              {subsection.title}
            </motion.h3>
          )}
          {subsection.paragraphs?.map((paragraph, pIndex) => (
            <motion.p
              key={pIndex}
              variants={itemVariants}
              className="mb-3 text-base md:text-lg leading-relaxed text-muted-foreground whitespace-pre-line"
            >
              {paragraph}
            </motion.p>
          ))}
          {subsection.listItems && (
             <motion.ul variants={itemVariants} className="list-none space-y-2 mb-3">
              {subsection.listItems.map((item, lIndex) => (
                 <motion.li 
                    key={lIndex} 
                    variants={itemVariants} 
                    className="relative pl-6 text-base md:text-lg text-muted-foreground before:content-['–'] before:absolute before:left-0 before:text-primary before:font-semibold"
                  >
                  {item}
                </motion.li>
              ))}
            </motion.ul>
          )}
        </motion.div>
      ))}
      {section.listItems && (
        <motion.ul variants={itemVariants} className="list-none space-y-3 mb-4 pl-4">
          {section.listItems.map((item, lIndex) => (
            <motion.li 
              key={lIndex} 
              variants={itemVariants} 
              className="relative pl-6 text-base md:text-lg text-muted-foreground before:content-['•'] before:absolute before:left-0 before:text-primary before:font-bold"
            >
              {item}
            </motion.li>
          ))}
        </motion.ul>
      )}
    </motion.section>
  );
}


export default function WhitepaperPage() {
  const content = siteContent.whitepaperPage;
  const pageRef = useRef(null);
  const isInView = useInView(pageRef, { once: true, amount: 0.05 });

  if (!content) {
    return (
      <PageWrapper>
        <div className="min-h-screen flex flex-col items-center justify-center p-8">
          <p>Whitepaper content is currently unavailable.</p>
          <Link href="/" passHref>
            <Button variant="outline" className="mt-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>
      </PageWrapper>
    );
  }

  const allTextToPoeticize = 
    `${content.pageTitle}\n${content.pageTagline}\n\n` +
    content.sections.map(s => 
      `${s.title}\n` +
      (s.paragraphs?.join('\n') || '') + '\n' +
      (s.subsections?.map(sub => 
        `${sub.title || ''}\n` +
        (sub.paragraphs?.join('\n') || '') + '\n' +
        (sub.listItems?.map(li => `- ${li}`).join('\n') || '')
      ).join('\n\n') || '') + '\n' +
      (s.listItems?.map(li => `• ${li}`).join('\n') || '')
    ).join('\n\n') +
    `\n\n${content.finalTagline}`;


  return (
    <PageWrapper>
      <motion.div
        ref={pageRef}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={pageVariants}
        className="min-h-screen bg-background text-foreground"
      >
        <header className="py-8 px-4 md:px-8 sticky top-0 bg-background/80 backdrop-blur-md z-10 border-b border-border">
          <motion.div variants={sectionVariants} className="max-w-4xl mx-auto flex items-center justify-between">
            <Link href="/" passHref>
              <Button variant="ghost" className="text-sm">
                <ArrowLeft className="mr-2 h-4 w-4" />
                {content.backButtonText}
              </Button>
            </Link>
            <PoeticizerButton
              textToPoeticize={allTextToPoeticize}
              buttonText="Poeticize Whitepaper"
              className="text-primary"
            />
          </motion.div>
        </header>

        <article className="max-w-3xl mx-auto px-4 md:px-8 py-12 md:py-16 space-y-8 font-body">
          <motion.div variants={sectionVariants} className="text-center mb-16">
            <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary mb-4">{content.pageTitle}</h1>
            <p className="text-xl md:text-2xl text-muted-foreground italic">{content.pageTagline}</p>
          </motion.div>

          {content.sections.map((section) => (
            <AnimatedSection key={section.id} section={section} />
          ))}

          <motion.footer variants={sectionVariants} className="text-center pt-12 mt-16 border-t border-border">
            <p className="font-headline text-2xl md:text-3xl text-primary mb-2">{content.finalTagline}</p>
          </motion.footer>
        </article>
      </motion.div>
    </PageWrapper>
  );
}
