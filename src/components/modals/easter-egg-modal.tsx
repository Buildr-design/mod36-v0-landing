// src/components/modals/easter-egg-modal.tsx
'use client';

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Lightbulb } from "lucide-react";

interface EasterEggModalProps {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
}

const hiddenModules = [
  "Project Chimera: Cross-Reality Interface",
  "Nexus Weaver: Decentralized Identity Protocol",
  "Aetherium Core: Quantum-Resistant Ledger",
  "BioSynth Harmony: AI-Driven Ecological Regeneration",
  "ChronoLeap Engine: Temporal Data Analysis",
];

export function EasterEggModal({ isOpen, onOpenChange }: EasterEggModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg bg-card text-card-foreground border-border shadow-xl rounded-lg">
        <DialogHeader>
          <DialogTitle className="font-headline text-2xl text-primary flex items-center">
            <Lightbulb className="h-6 w-6 mr-2 text-primary animate-pulse" />
            Hidden Module Concepts
          </DialogTitle>
          <DialogDescription className="text-muted-foreground pt-1">
            Exploratory ideas simmering in the mod36 labs...
          </DialogDescription>
        </DialogHeader>
        <div className="mt-4 space-y-2 font-code text-sm text-muted-foreground">
          {hiddenModules.map((moduleName, index) => (
            <p key={index} className="border border-dashed border-border/50 p-3 rounded-md hover:bg-accent/10 hover:text-primary transition-colors">
              <span className="text-primary/80 mr-2">&gt;</span>{moduleName}
            </p>
          ))}
        </div>
        <p className="text-xs text-center font-code text-muted-foreground/70 mt-6">
          These are experimental concepts. Not actual projects (yet!).
        </p>
      </DialogContent>
    </Dialog>
  );
}
