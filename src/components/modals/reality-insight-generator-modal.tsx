
// src/components/modals/reality-insight-generator-modal.tsx
'use client';

import { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Label } from "@/components/ui/label";
import { Loader2, Lightbulb, BrainCircuit } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { generateRealityInsight, type GenerateRealityInsightOutput } from '@/ai/flows/generate-reality-insight-flow';
import type { RealityItem } from '@/data/site-content';
import { motion, AnimatePresence } from 'framer-motion';

interface RealityInsightGeneratorModalProps {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
  realities: RealityItem[];
}

export function RealityInsightGeneratorModal({ isOpen, onOpenChange, realities }: RealityInsightGeneratorModalProps) {
  const [selectedRealities, setSelectedRealities] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [generatedInsight, setGeneratedInsight] = useState<GenerateRealityInsightOutput | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    if (!isOpen) {
      // Reset state when modal closes
      setSelectedRealities([]);
      setGeneratedInsight(null);
      setIsLoading(false);
    }
  }, [isOpen]);

  const handleCheckboxChange = (realityTitle: string, checked: boolean | 'indeterminate') => {
    setSelectedRealities(prev =>
      checked ? [...prev, realityTitle] : prev.filter(title => title !== realityTitle)
    );
  };

  const handleGenerateInsight = async () => {
    if (selectedRealities.length < 2) {
      toast({
        title: "Selection Required",
        description: "Please select at least two Realities to generate an insight.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    setGeneratedInsight(null);
    try {
      const result = await generateRealityInsight({ selectedRealities });
      setGeneratedInsight(result);
    } catch (error) {
      console.error("Failed to generate reality insight:", error);
      toast({
        title: "Error Generating Insight",
        description: (error as Error).message || "An unexpected error occurred. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-2xl md:max-w-3xl bg-card text-card-foreground border-border shadow-xl rounded-lg">
        <DialogHeader>
          <DialogTitle className="font-headline text-2xl text-primary flex items-center">
            <BrainCircuit className="h-7 w-7 mr-3 text-primary" />
            Mod36 Insight Engine
          </DialogTitle>
          <DialogDescription className="text-muted-foreground pt-1">
            Select 2 or more Realities to explore their interconnectedness and generate a speculative design insight.
          </DialogDescription>
        </DialogHeader>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4 max-h-[70vh] ">
          <div className="flex flex-col space-y-3">
            <h3 className="font-semibold text-foreground text-lg">Select Realities:</h3>
            <ScrollArea className="h-[40vh] border border-border rounded-md p-4 bg-background/30">
              <div className="space-y-3">
                {realities.map(reality => (
                  <div key={reality.id} className="flex items-center space-x-2">
                    <Checkbox
                      id={`reality-${reality.id}`}
                      checked={selectedRealities.includes(reality.title)}
                      onCheckedChange={(checked) => handleCheckboxChange(reality.title, checked)}
                      disabled={isLoading}
                    />
                    <Label htmlFor={`reality-${reality.id}`} className="font-normal text-sm text-foreground hover:text-primary cursor-pointer">
                      {reality.title}
                    </Label>
                  </div>
                ))}
              </div>
            </ScrollArea>
            <Button onClick={handleGenerateInsight} disabled={isLoading || selectedRealities.length < 2} className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
              {isLoading ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                <Lightbulb className="mr-2 h-4 w-4" />
              )}
              Generate Insight ({selectedRealities.length})
            </Button>
          </div>

          <div className="flex flex-col space-y-3">
             <h3 className="font-semibold text-foreground text-lg">Generated Output:</h3>
            <ScrollArea className="h-[calc(40vh+theme(spacing.12))] border border-border rounded-md p-4 bg-background/30">
              <AnimatePresence mode="wait">
                {isLoading && (
                  <motion.div
                    key="loading"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center justify-center h-full space-y-3"
                  >
                    <BrainCircuit className="h-10 w-10 animate-pulse text-primary" />
                    <p className="text-primary font-body text-sm">Synthesizing connections...</p>
                    <p className="text-xs text-muted-foreground">This may take a moment.</p>
                  </motion.div>
                )}

                {!isLoading && !generatedInsight && (
                  <motion.div 
                    key="placeholder"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex flex-col items-center justify-center h-full text-center text-muted-foreground"
                  >
                     <Lightbulb className="h-10 w-10 mb-3 text-primary/50" />
                    <p className="text-sm">Your generated insight will appear here.</p>
                     <p className="text-xs mt-1">Select at least two realities and click "Generate Insight".</p>
                  </motion.div>
                )}

                {!isLoading && generatedInsight && (
                  <motion.div
                    key="insight"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="space-y-4 text-sm"
                  >
                    <h4 className="font-headline text-xl text-primary">{generatedInsight.title}</h4>
                    <div>
                      <h5 className="font-semibold text-foreground mb-1">System Insight:</h5>
                      <p className="text-muted-foreground whitespace-pre-line leading-relaxed">{generatedInsight.systemInsight}</p>
                    </div>
                    <div>
                      <h5 className="font-semibold text-foreground mb-1">Speculative Scenario / Future Design Idea:</h5>
                      <p className="text-muted-foreground whitespace-pre-line leading-relaxed">{generatedInsight.speculativeScenario}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </ScrollArea>
          </div>
        </div>

        <DialogFooter className="mt-6 pt-4 border-t border-border">
          <Button variant="ghost" onClick={() => onOpenChange(false)}>Close</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
