// src/components/poeticizer-button.tsx
'use client';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sparkles } from 'lucide-react';
import { poeticizeText } from '@/ai/flows/poeticize-text';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';
import { useToast } from '@/hooks/use-toast';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

interface PoeticizerButtonProps {
  textToPoeticize: string;
  className?: string;
  buttonText?: string;
}

export function PoeticizerButton({ textToPoeticize, className, buttonText }: PoeticizerButtonProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [poeticText, setPoeticText] = useState<string | null>(null);
  const { toast } = useToast();

  const handlePoeticize = async () => {
    setIsOpen(true);
    setPoeticText(null);
    setIsLoading(true);
    try {
      const result = await poeticizeText({ text: textToPoeticize });
      setPoeticText(result.poeticText);
    } catch (error) {
      console.error("Failed to poeticize text:", error);
      toast({
        title: "Error",
        description: "Failed to generate poetic text. Please try again.",
        variant: "destructive",
      });
      setIsOpen(false); 
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        onClick={handlePoeticize}
        className={cn("text-primary hover:text-accent-foreground hover:bg-accent/20 p-1", className)}
        aria-label="Poeticize this text"
        title="Poeticize this text"
      >
        <Sparkles className="h-4 w-4" />
        {buttonText && <span className="ml-2 text-xs">{buttonText}</span>}
      </Button>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-[600px] bg-card text-card-foreground border-border shadow-xl rounded-lg">
          <DialogHeader>
            <DialogTitle className="font-headline text-2xl text-primary flex items-center">
              <Sparkles className="h-6 w-6 mr-2 text-primary" /> The Poet's Lens
            </DialogTitle>
            <DialogDescription className="text-muted-foreground pt-1">
              An AI-interpretation of the original text.
            </DialogDescription>
          </DialogHeader>
          <div className="mt-4 space-y-6 max-h-[60vh] overflow-y-auto p-1 pr-2 custom-scrollbar">
            <div>
              <h3 className="font-headline text-lg text-foreground mb-2">Original Text</h3>
              <p className="text-muted-foreground font-body text-sm leading-relaxed whitespace-pre-wrap">{textToPoeticize}</p>
            </div>
            
            {isLoading && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col items-center justify-center space-y-2 py-8"
              >
                <Sparkles className="h-8 w-8 animate-pulse text-primary" />
                <p className="text-primary font-body">Crafting poetry...</p>
              </motion.div>
            )}
            
            <AnimatePresence>
            {poeticText && !isLoading && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="font-headline text-lg text-primary mb-2">Poetic Version</h3>
                <blockquote className="font-body text-foreground italic border-l-2 border-primary pl-4 py-2 leading-relaxed whitespace-pre-wrap bg-background/50 rounded-r-md">
                  {poeticText}
                </blockquote>
              </motion.div>
            )}
            </AnimatePresence>
          </div>
          <DialogFooter className="pt-4">
            {poeticText && !isLoading && (
               <Button
                  variant="outline"
                  size="sm"
                  className="bg-primary text-primary-foreground hover:bg-primary/90"
                  onClick={() => {
                    if (poeticText) {
                       navigator.clipboard.writeText(poeticText);
                       toast({ title: "Copied!", description: "Poetic text copied to clipboard." });
                    }
                  }}
                >
                  Copy Poem
                </Button>
            )}
            <Button variant="ghost" onClick={() => setIsOpen(false)}>Close</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
