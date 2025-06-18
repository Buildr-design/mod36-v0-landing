
// src/components/sections/footer-section-v2.tsx
'use client';

import type { FooterV001Content } from '@/data/site-content';
import Link from 'next/link';
import * as LucideIcons from 'lucide-react';

export function FooterSectionV2({ content }: { content?: FooterV001Content }) {
  if (!content) return null;

  return (
    <footer 
      id="footer" // General ID for footer
      className="snap-end flex flex-col items-center justify-center p-8 md:p-12 bg-card text-card-foreground border-t border-border min-h-[35vh] relative"
      aria-labelledby="footer-heading"
    >
      <div className="text-center space-y-6 max-w-2xl w-full">
        <div id="footer-heading" className="sr-only">Footer Information</div>
        
        <div className="flex justify-center items-center gap-2">
            {/* You can add a logo SVG or Image component here if you have one */}
            <div className="h-10 w-10 bg-primary rounded-lg flex items-center justify-center text-primary-foreground font-bold text-lg font-headline" data-ai-hint="geometric M letter logo" style={{ fontFamily: "'Space Grotesk', sans-serif"}}>M</div>
            <p className="font-headline text-2xl font-bold text-primary" style={{ fontFamily: "'Space Grotesk', sans-serif"}}>Mod36</p>
        </div>

        <p className="font-body text-md text-foreground/80" style={{ fontFamily: "'DM Sans', sans-serif"}}>{content.brandTagline}</p>
        
        <div className="flex justify-center space-x-4 md:space-x-6 pt-2 flex-wrap">
          {content.socialLinks.map(({ name, iconName, url, ariaLabel }) => {
            const IconComponent = iconName && LucideIcons[iconName as keyof typeof LucideIcons] as LucideIcons.LucideIcon;
            return (
              <a
                key={name}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors duration-200 mb-2"
                aria-label={ariaLabel}
              >
                {IconComponent ? <IconComponent className="h-5 w-5" /> : name}
              </a>
            );
          })}
        </div>

        <div className="flex justify-center flex-wrap gap-x-4 md:gap-x-6 gap-y-2 text-sm font-body" style={{ fontFamily: "'DM Sans', sans-serif"}}>
            {content.navLinks.map(link => (
                <Link key={link.text} href={link.href} className="text-foreground/70 hover:text-accent hover:underline" target={link.target || '_self'}>
                    {link.text}
                </Link>
            ))}
        </div>
        
         <p className="font-body text-xs text-muted-foreground/70 pt-4" style={{ fontFamily: "'DM Sans', sans-serif"}}>
          {content.copyrightText}
        </p>
      </div>
    </footer>
  );
}
