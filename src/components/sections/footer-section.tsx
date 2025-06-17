// src/components/sections/footer-section.tsx
'use client';

import { Github, Linkedin, Send, Twitter, Facebook, Instagram } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useState, useEffect } from 'react';

export function FooterSection() {
  const { toast } = useToast();
  const [lastUpdated, setLastUpdated] = useState('');

  useEffect(() => {
    // This will only run on the client, after initial hydration
    setLastUpdated(new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }));
  }, []);


  const email = "hello@mod36.xyz";
  const version = "mod36 / v0.1";

  const handleEmailClick = () => {
    navigator.clipboard.writeText(email);
    toast({
      title: "Copied to clipboard!",
      description: `${email} has been copied to your clipboard.`,
    });
  };

  const socialLinks = [
    { name: 'LinkedIn', Icon: Linkedin, url: 'https://linkedin.com/company/mod36', ariaLabel: 'Mod36 LinkedIn Profile' },
    { name: 'GitHub', Icon: Github, url: 'https://github.com/mod36', ariaLabel: 'Mod36 GitHub Profile' },
    { name: 'Threads', Icon: Send, url: 'https://threads.net/@mod36', ariaLabel: 'Mod36 Threads Profile' },
    { name: 'X', Icon: Twitter, url: 'https://x.com/mod36', ariaLabel: 'Mod36 X (Twitter) Profile' },
    { name: 'Mastodon', Icon: Send, url: 'https://mastodon.social/@mod36', ariaLabel: 'Mod36 Mastodon Profile' }, // Placeholder icon
    { name: 'Facebook', Icon: Facebook, url: 'https://facebook.com/mod36', ariaLabel: 'Mod36 Facebook Profile' },
    { name: 'Instagram', Icon: Instagram, url: 'https://instagram.com/mod36', ariaLabel: 'Mod36 Instagram Profile' },
    { name: 'Substack', Icon: Send, url: 'https://mod36.substack.com', ariaLabel: 'Mod36 Substack Profile' }, // Placeholder icon
  ];

  return (
    <footer 
      id="footer"
      className="snap-end flex flex-col items-center justify-center p-8 md:p-12 bg-card text-muted-foreground border-t border-border min-h-[40vh]" // Adjusted min-height for better snapping
      aria-labelledby="footer-heading"
    >
      <div className="text-center space-y-6">
        <div id="footer-heading" className="sr-only">Footer Information</div>
        
        <p className="font-code text-sm">
          {version}
        </p>
        
        <button
          onClick={handleEmailClick}
          className="font-body text-lg text-primary hover:underline focus:outline-none focus:ring-2 focus:ring-primary rounded"
          aria-label={`Copy email address ${email} to clipboard`}
        >
          {email}
        </button>

        <p className="font-body text-sm">
          Built in Nigeria with global collaborators.
        </p>

        <div className="flex justify-center space-x-4 md:space-x-6 pt-4 flex-wrap">
          {socialLinks.map(({ name, Icon, url, ariaLabel }) => (
            <a
              key={name}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-200 mb-2"
              aria-label={ariaLabel}
            >
              <Icon className="h-6 w-6" />
            </a>
          ))}
        </div>
        
        {lastUpdated && (
          <p className="font-code text-xs text-muted-foreground/70 pt-4">
            Last updated: {lastUpdated}
          </p>
        )}
         <p className="font-code text-xs text-muted-foreground/50 pt-2">
          © {new Date().getFullYear()} mod36. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
