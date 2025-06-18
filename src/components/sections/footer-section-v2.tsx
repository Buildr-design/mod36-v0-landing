
// src/components/sections/footer-section-v2.tsx
'use client';

import type { FooterSectionContentV2 } from '@/data/site-content';
import Link from 'next/link';
import * as LucideIcons from 'lucide-react';
import { useState, useEffect } from 'react';
import { PoeticizerButton } from '@/components/poeticizer-button';

export function FooterSectionV2({ content }: { content?: FooterSectionContentV2 }) {
  const [lastUpdated, setLastUpdated] = useState('');

  useEffect(() => {
    setLastUpdated(new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }));
  }, []);

  if (!content) return null;

  const poeticizableText = `${content.brandName}. ${content.tagline}. ${content.licenseNotice}. Links: ${content.links.map(l => l.text).join(', ')}. Socials: ${content.socialLinks.map(s => s.name).join(', ')}.`;

  return (
    <footer 
      id="footer-v2"
      className="snap-end flex flex-col items-center justify-center p-8 md:p-12 bg-card text-muted-foreground border-t border-border min-h-[50vh] relative"
      aria-labelledby="footer-heading"
    >
      <PoeticizerButton 
          textToPoeticize={poeticizableText}
          className="absolute top-8 right-8 text-primary/70 hover:text-primary"
      />
      <div className="text-center space-y-6 max-w-2xl">
        <div id="footer-heading" className="sr-only">Footer Information</div>
        
        <div className="flex justify-center items-center gap-2">
            {/* Placeholder for Mod36 Logo */}
            <div className="h-8 w-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm" data-ai-hint="geometric logo">M36</div>
            <p className="font-headline text-xl font-bold text-primary">{content.brandName}</p>
        </div>

        <p className="font-code text-sm text-foreground">{content.tagline}</p>
        
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
                <Link key={link.text} href={link.href} className="hover:text-primary hover:underline">
                    {link.text}
                </Link>
            ))}
        </div>
        
        <p className="font-code text-xs">{content.licenseNotice}</p>

        {lastUpdated && content.lastUpdatedPrefix && (
          <p className="font-code text-xs text-muted-foreground/70 pt-2">
            {content.lastUpdatedPrefix} {lastUpdated}
          </p>
        )}
         <p className="font-code text-xs text-muted-foreground/50 pt-2">
          {content.copyrightText}
        </p>
      </div>
    </footer>
  );
}

    