// src/components/sections/realities-grid-section.tsx
// This component is no longer used on the main landing page in the new "Mod36 v0" structure.
// The associated RealityInsightGeneratorModal trigger is also removed from the landing page.
// For now, I'll leave it empty to avoid build errors if it's still imported somewhere unexpectedly.
'use client';
import React from 'react'; // Keep React import if file is not empty, but component returns null

export function RealitiesGridSection({ content }: { content?: any }) {  // Use `any` for content type as it's deprecated
  return null;
}
    
