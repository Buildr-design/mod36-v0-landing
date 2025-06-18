// src/components/sections/footer-section-v2.tsx
'use client';

import type { FooterV0Content } from '@/data/site-content';
import Link from 'next/link';
import * as LucideIcons from 'lucide-react';

export function FooterSectionV2({ content }: { content?: FooterV0Content }) {
  if (!content) return null;

  return (
    <footer 
      id="footer-v0"
      className="snap-end flex flex-col items-center justify-center p-8 md:p-12 bg-background text-muted-foreground border-t border-border min-h-[30vh] relative"
      aria-labelledby="footer-heading"
    >
      <div className="text-center space-y-6 max-w-2xl">
        <div id="footer-heading" className="sr-only">Footer Information</div>
        
        <div className="flex justify-center items-center gap-2">
            <div className="h-8 w-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm" data-ai-hint="geometric logo M letter">M</div>
            <p className="font-headline text-xl font-bold text-primary">Mod36 v0</p>
        </div>

        <p className="font-code text-md text-foreground">{content.brandLine}</p>
        
        <div className="flex justify-center space-x-4 md:space-x-6 pt-2 flex-wrap">
          {content.socialLinks.map(({ name, iconName, url, ariaLabel }) => {
            const IconComponent = iconName && LucideIcons[iconName as keyof typeof LucideIcons] as LucideIcons.LucideIcon;
            return (
              <a
                key={name}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors duration-200 mb-2"
                aria-label={ariaLabel}
              >
                {IconComponent ? <IconComponent className="h-5 w-5" /> : name}
              </a>
            );
          })}
        </div>

        <div className="flex justify-center flex-wrap gap-x-4 gap-y-2 text-xs font-code">
            {content.links.map(link => (
                <Link key={link.text} href={link.href} className="hover:text-primary hover:underline" target={link.href.startsWith('http') || link.href.startsWith('mailto:') || link.href.startsWith('/whitepaper.pdf') ? '_blank' : '_self'}>
                    {link.text}
                </Link>
            ))}
        </div>
        
         <p className="font-code text-xs text-muted-foreground/70 pt-2">
          {content.copyrightText}
        </p>
      </div>
    </footer>
  );
}
    
