
// src/components/sections/roadmap-preview-section.tsx
'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import type { RoadmapPreviewV001Content, RoadmapStageV001 } from '@/data/site-content';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { CheckCircle, Hourglass, ListChecks } from 'lucide-react'; // GanttChartSquare removed as it's not in lucide

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

const getStatusIcon = (status: RoadmapStageV001['status']) => {
  switch (status) {
    case 'Live Now':
      return <CheckCircle className="h-5 w-5 text-green-500" />;
    case 'Upcoming':
      return <Hourglass className="h-5 w-5 text-yellow-500" />;
    case 'In Progress':
      return <ListChecks className="h-5 w-5 text-blue-500" />; // Using ListChecks as a substitute for GanttChartSquare
    default:
      return <Hourglass className="h-5 w-5 text-muted-foreground" />;
  }
};

export function RoadmapPreviewSection({ content }: { content?: RoadmapPreviewV001Content }) {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.15 });

  if (!content) return null;

  return (
    <motion.section
      id="roadmap-preview"
      ref={sectionRef}
      className="min-h-screen h-screen snap-start flex flex-col items-center justify-center p-8 md:p-16 bg-background text-foreground relative"
      aria-labelledby="roadmap-preview-title"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={sectionVariants}
    >
      <motion.h2
        id="roadmap-preview-title"
        className="font-headline text-3xl md:text-4xl font-bold text-primary mb-12 text-center"
        variants={itemVariants}
        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
      >
        {content.title}
      </motion.h2>

      <div className="w-full max-w-4xl space-y-8">
        {/* Horizontal Timeline Representation */}
        <div className="relative w-full">
          {/* Timeline Axis */}
          <motion.div 
            className="absolute left-0 right-0 top-1/2 h-1 bg-border rounded-full -translate-y-1/2"
            variants={itemVariants}
          />

          <div className="flex justify-between items-start">
            {content.stages.map((stage, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center text-center w-1/4 group" // Each stage takes up roughly 1/4 for 4 stages
                variants={itemVariants}
              >
                {/* Connection point on the axis */}
                <div className="relative mb-3">
                  <div className="h-3 w-3 rounded-full bg-primary border-2 border-background group-hover:bg-accent transition-colors"></div>
                </div>
                
                <Card className="bg-card text-card-foreground shadow-md hover:shadow-lg w-full min-h-[180px] transition-shadow">
                  <CardHeader className="pb-2 pt-4">
                    <div className="flex items-center justify-center mb-2">
                      {getStatusIcon(stage.status)}
                      <CardTitle className="text-md font-semibold text-primary ml-2 font-headline" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{stage.version}</CardTitle>
                    </div>
                    <p className="text-xs text-muted-foreground">{stage.title}</p>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-xs text-foreground/70 font-body" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      {stage.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
