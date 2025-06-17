// src/components/layout/page-wrapper.tsx
'use client';

import { useState, useEffect, PropsWithChildren } from 'react';
import { VersionLogModal } from '@/components/modals/version-log-modal';
import { EasterEggModal } from '@/components/modals/easter-egg-modal';

export function PageWrapper({ children }: PropsWithChildren) {
  const [showVersionLog, setShowVersionLog] = useState(false);
  const [showEasterEgg, setShowEasterEgg] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement;
      // Ignore key events if they originate from an input, textarea, or contenteditable element
      if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.isContentEditable) {
        return;
      }

      if (event.key.toLowerCase() === 'v' && !event.metaKey && !event.ctrlKey && !event.altKey && !event.shiftKey) {
        event.preventDefault();
        setShowVersionLog(s => !s);
      }
      if (event.shiftKey && event.key.toUpperCase() === 'M') { // Shift + M
        event.preventDefault();
        setShowEasterEgg(s => !s);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <>
      <div className="h-screen w-screen overflow-hidden"> {/* Prevent body scroll, main container for scroll snapping */}
        <div className="h-full w-full overflow-y-auto snap-y snap-mandatory scroll-smooth">
          {children}
        </div>
      </div>
      <VersionLogModal isOpen={showVersionLog} onOpenChange={setShowVersionLog} />
      <EasterEggModal isOpen={showEasterEgg} onOpenChange={setShowEasterEgg} />
    </>
  );
}
