// src/app/manifesto/page.tsx
'use client';

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PageWrapper } from '@/components/layout/page-wrapper';
import { siteContent, type ManifestoPageContent } from '@/data/site-content';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { PoeticizerButton } from '@/components/poeticizer-button';

const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.6, 0.01, 0.05, 0.95],
    },
  },
};

export default function ManifestoPage() {
  const content = siteContent.manifestoPage;
  const pageRef = useRef(null);
  const isInView = useInView(pageRef, { once: true, amount: 0.1 });

  if (!content) {
    return (
      <PageWrapper>
        <div className="min-h-screen flex flex-col items-center justify-center p-8">
          <p>Manifesto content is currently unavailable.</p>
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

  return (
    <PageWrapper>
      <motion.div
        ref={pageRef}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
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
              textToPoeticize={content.sections.map(s => `${s.heading || ''}\n${(s.paragraphs || []).join('\n')}\n${(s.listItems || []).map(li => `- ${li}`).join('\n')}`).join('\n\n')}
              buttonText="Poeticize Manifesto"
              className="text-primary"
            />
          </motion.div>
        </header>

        <article className="max-w-3xl mx-auto px-4 md:px-8 py-12 md:py-16 space-y-12 font-body">
          <motion.div variants={sectionVariants} className="text-center mb-16">
            <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary mb-4">{content.title}</h1>
            <p className="text-xl md:text-2xl text-muted-foreground italic">{content.subtitle}</p>
          </motion.div>

          {content.sections.map((section, index) => (
            <motion.section
              key={index}
              variants={sectionVariants}
              className={`py-6 ${section.isBold ? 'font-semibold text-foreground' : 'text-muted-foreground'}`}
            >
              {section.heading && (
                <h2 className={`font-headline text-2xl md:text-3xl mb-6 text-primary ${section.isBold ? 'font-bold' : ''}`}>
                  {section.heading}
                </h2>
              )}
              {section.paragraphs && section.paragraphs.map((paragraph, pIndex) => (
                <p key={pIndex} className="mb-4 leading-relaxed whitespace-pre-line text-base md:text-lg">
                  {paragraph}
                </p>
              ))}
              {section.listItems && (
                <ul className="list-none space-y-2 mb-4 pl-4">
                  {section.listItems.map((item, lIndex) => (
                    <li key={lIndex} className="relative pl-6 text-base md:text-lg before:content-['—'] before:absolute before:left-0 before:text-primary before:font-bold">
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </motion.section>
          ))}

          <motion.footer variants={sectionVariants} className="text-center pt-12 mt-16 border-t border-border">
            <p className="font-headline text-2xl md:text-3xl text-primary mb-2">{content.closingStatement.line1}</p>
            <p className="font-code text-lg md:text-xl text-muted-foreground">{content.closingStatement.line2}</p>
            <p className="font-code text-sm text-muted-foreground/70 mt-8">{content.signature}</p>
          </motion.footer>
        </article>
      </motion.div>
    </PageWrapper>
  );
}
