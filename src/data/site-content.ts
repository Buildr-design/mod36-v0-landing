
// src/data/site-content.ts
import type { LucideIcon } from 'lucide-react';

export interface AppNameMeta {
  appName: string;
  meta: {
    description: string;
  };
}

// --- CTAButton (reusable) ---
export interface CTAButton {
  text: string;
  href: string;
  variant?: 'default' | 'outline' | 'secondary' | 'ghost' | 'link';
  icon?: LucideIcon | string;
}

// --- New Homepage Section Interfaces (Based on Updated Prompt) ---

export interface HeroSectionContentUpdated {
  headline: string;
  subtext: string;
  ctaButtons: CTAButton[];
  backgroundVisualHint: string;
}

export interface ProblemBlock {
  iconName: string; // Lucide icon for problem visualization
  problem: string;
}
export interface ProblemSectionContent {
  title: string;
  visualsHint: string; // For overlapping diagrams
  problems: ProblemBlock[];
}

export interface FeatureBlock {
  title: string;
  description?: string; // Optional description for clarity
  iconName?: string; // Optional icon
}
export interface WhatIsMod36SectionContent {
  title: string; // "What Is Mod36"
  definition: string;
  graphicHint: string; // For grid-based structure morphing
  features: FeatureBlock[];
}

export interface UseCaseTarget {
  audience: string; // e.g., "Architects designing modular housing"
  iconName?: string;
}
export interface UseCasesWhoItIsForContent {
  title: string;
  targets: UseCaseTarget[];
}

export interface HowItWorksStep {
  stepNumber: string;
  title: string;
  description: string;
  iconName?: string; // Optional icon for the step
}
export interface HowItWorksSectionContent {
  title: string;
  steps: HowItWorksStep[];
  simulationHint?: string; // Optional for live UI simulation
}

export interface CommunityMovementSectionContent {
  title: string;
  cta: CTAButton; // e.g., Join Circle or Discord
  quote: string;
}

export interface FooterLink {
  text: string;
  href: string;
}

export interface SocialLink {
  name: string;
  iconName?: string;
  url: string;
  ariaLabel: string;
}

export interface FooterSectionContentUpdated {
  links: FooterLink[];
  socialLinks: SocialLink[];
  brandTagline: string; // e.g., "36 modules. Infinite futures."
  copyrightText: string;
  brandName: string; // For consistency
}

// --- Structures for existing pages/modals (to keep them functional) ---
export interface RealityItem {
  id: string;
  title: string;
  oneLiner: string;
  iconName: string;
  extendedDescription?: string;
  tags?: string[];
}

export interface RealitiesDataForAI { // Minimal structure if 36 Realities are used by AI only
  realities: Pick<RealityItem, 'id' | 'title'>[];
}

export interface ManifestoPageContent {
  title: string;
  subtitle?: string;
  backButtonText: string;
  sections: Array<{
    heading?: string;
    paragraphs?: string[];
    listItems?: string[];
    isBold?: boolean;
  }>;
  closingStatement: {
    line1: string;
    line2: string;
  };
  signature: string;
}

export interface VersionLogEntry {
  version: string;
  date: string;
  notes: string[];
}

export interface ModalsContent {
  versionLog: {
    title: string;
    description: string;
    logs: VersionLogEntry[];
  };
  easterEgg: {
    title: string;
    description: string;
    hiddenModules: string[];
    experimentalNote: string;
  };
}

// --- Main Site Content Structure ---
export interface HomeContentUpdated {
  heroSection: HeroSectionContentUpdated;
  problemSection: ProblemSectionContent;
  whatIsMod36Section: WhatIsMod36SectionContent;
  useCasesWhoItIsForSection: UseCasesWhoItIsForContent;
  howItWorksSection: HowItWorksSectionContent;
  communityMovementSection: CommunityMovementSectionContent;
  footerSection: FooterSectionContentUpdated;
}

export interface SiteContent extends AppNameMeta {
  home: HomeContentUpdated;
  manifestoPage: ManifestoPageContent;
  modals: ModalsContent;
  // Data for AI if RealitiesGridSection is removed from UI but AI feature still uses it.
  // If AI feature is also removed/reworked, this can be removed.
  realitiesDataForAI: RealitiesDataForAI;
}


export const siteContent: SiteContent = {
  appName: "ModVerse", // Changed from mod36 studio to ModVerse as per original PRD
  meta: {
    description: "Mod36: A design intelligence framework for the future of architecture, AI, and decentralized systems.",
  },
  home: {
    heroSection: {
      headline: "Design the Future. Intelligently. Modually.",
      subtext: "Mod36 is a design intelligence engine for the builders of tomorrow. Architecture. AI. Web3. All connected.",
      ctaButtons: [
        { text: "Explore the Framework", href: "#what-is-mod36", variant: "default", icon: "Compass" },
        { text: "Join the Community", href: "#community", variant: "outline", icon: "Users" },
      ],
      backgroundVisualHint: "abstract data system intelligent network",
    },
    problemSection: {
      title: "We’re Building the Future with Outdated Tools",
      visualsHint: "disjointed architecture AI web3 icons",
      problems: [
        { iconName: "BoxSelect", problem: "Silos across disciplines hinder innovation." },
        { iconName: "GitBranch", problem: "Rigid design methods can't adapt to complexity." },
        { iconName: "Puzzle", problem: "Lack of adaptable, modular systems slows progress." },
      ],
    },
    whatIsMod36Section: {
      title: "What Is Mod36?",
      definition: "Mod36 merges modular design principles with system intelligence and local context to forge adaptive solutions.",
      graphicHint: "morphing grid structure",
      features: [
        { title: "Modular Thinking", description: "Deconstruct complexity, build with interoperable parts.", iconName: "LayoutGrid" },
        { title: "Design-AI Fusion", description: "Leverage AI for insights, generation, and optimization.", iconName: "BrainCircuit" },
        { title: "Web3-Aware Architecture", description: "Integrate decentralized principles for resilient systems.", iconName: "Blocks" },
        { title: "Cultural & Systems Intelligence", description: "Ground solutions in deep understanding of context and interconnectedness.", iconName: "Globe2" },
      ],
    },
    useCasesWhoItIsForSection: {
      title: "Who Benefits & How",
      targets: [
        { audience: "Architects designing modular, sustainable housing.", iconName: "Home" },
        { audience: "AI/Tech builders creating tools rooted in cultural context.", iconName: "Cpu" },
        { audience: "Web3 teams building DAOs, governance, or urban platforms.", iconName: "Network" },
        { audience: "Creatives & Strategists designing systems, not just single products.", iconName: "Lightbulb" },
      ],
    },
    howItWorksSection: {
      title: "How It Works",
      steps: [
        { stepNumber: "01", title: "Input Problems", description: "Define real-world challenges and contexts.", iconName: "FileText" },
        { stepNumber: "02", title: "Map Systems", description: "Identify modular components and interdependencies.", iconName: "Share2" },
        { stepNumber: "03", title: "Leverage Intelligence", description: "Use AI and culture-aware tools for insight and ideation.", iconName: "Sparkles" },
        { stepNumber: "04", title: "Prototype & Scale", description: "Build, test, and iterate adaptive solutions.", iconName: "Scaling" },
      ],
      simulationHint: "interactive diagram process flow",
    },
    communityMovementSection: {
      title: "A Platform for Builders Everywhere",
      cta: { text: "Join our Discord", href: "https://discord.gg/mod36", variant: "default", icon: "MessageSquare" }, // Placeholder link
      quote: "Mod36 is not just a tool — it’s how we shape a modular, intelligent future, together.",
    },
    footerSection: {
      links: [
        { text: "Docs", href: "/docs" }, // Placeholder
        { text: "Community", href: "#community" },
        { text: "Labs", href: "/labs" }, // Placeholder
        { text: "Blog", href: "/blog" }, // Placeholder
        { text: "GitHub", href: "https://github.com/mod36" },
      ],
      socialLinks: [
        { name: 'LinkedIn', iconName: 'Linkedin', url: 'https://linkedin.com/company/mod36', ariaLabel: 'Mod36 LinkedIn Profile' },
        { name: 'X (Twitter)', iconName: 'Twitter', url: 'https://x.com/mod36', ariaLabel: 'Mod36 X/Twitter Profile' },
        { name: 'Threads', iconName: 'Send', url: 'https://threads.net/@mod36', ariaLabel: 'Mod36 Threads Profile' },
      ],
      brandTagline: "36 Modules. Infinite Futures.",
      copyrightText: `© ${new Date().getFullYear()} Mod36. All rights reserved.`,
      brandName: "Mod36",
    },
  },
  // --- Content for other pages/modals (remains for now) ---
  manifestoPage: {
    title: "Mod36 Executive Summary",
    backButtonText: "← Back to Home",
    sections: [
       {
        paragraphs: [
          "Mod36 is a modular intelligence framework designed to help individuals, communities, and systems navigate the complexities of our world through design. At its core are the 36 Realities—interconnected dimensions of life such as housing, food, energy, memory, governance, joy, and the unknown. Each Reality represents a system of forces that shape human experience, offering a lens through which we can reimagine the world—not in isolation, but in relationship."
        ],
      },
      {
        paragraphs: [
          "In an age marked by climate uncertainty, cultural erosion, technological acceleration, and deep systemic imbalance, traditional approaches to problem-solving are no longer sufficient. Mod36 emerges as a design philosophy and practical engine that bridges systems thinking, artificial intelligence, modular design, and indigenous knowledge—especially rooted in African and Global South contexts. It equips designers, technologists, educators, policymakers, and changemakers with the tools to design with care, context, and collaboration."
        ],
      },
      {
        paragraphs: [
          "Unlike static frameworks or siloed toolkits, Mod36 is alive, adaptive, and open-source. It treats systems as materials, culture as the blueprint, and collective intelligence as the engine. It invites a return to local wisdom while embracing global innovation. Through its modular process, users can map systemic patterns, generate solutions using AI, and develop locally relevant, globally resonant outputs—ranging from architecture to public policy, curricula, and cultural systems."
        ],
      },
      {
        paragraphs: [
          "Mod36 is not a product. It is a movement. A shared language for rethinking how we shape life on Earth—responsibly, intelligently, and together."
        ],
        isBold: true,
      },
      {
        paragraphs: [
          "This is a call to architects of the future—those willing to build not just structures or software, but systems of meaning."
        ],
        isBold: true,
      },
    ],
    closingStatement: {
      line1: "36 Realities. One Modular Future.",
      line2: "Welcome to Mod36."
    },
    signature: "Mod36",
  },
  modals: {
    versionLog: {
      title: "Version Logs",
      description: "Tracking the evolution of ModVerse.",
      logs: [
        { version: "v0.4.0", date: "2024-07-31", notes: ["Major landing page overhaul to new 7-section structure.", "Updated content and components as per new brief.", "Removed RealitiesGridSection from homepage."]},
        { version: "v0.3.1", date: "2024-07-30", notes: ["Integrated AI Insight Generator modal, triggered from Realities Grid."]},
        { version: "v0.3.0", date: "2024-07-30", notes: ["Redesigned '36 Realities' section with detailed content and interactive grid.", "Updated RealityItem interface and data structure."]},
        { version: "v0.2.0", date: "2024-07-29", notes: ["Major landing page redesign to 9-section structure based on new brief.", "Centralized all site content into site-content.ts with new data structures for each section."]},
        { version: "v0.1.0", date: "2024-07-28", notes: ["Initial site build: Hero, About, Modules, Manifesto, Footer.", "Implemented scroll-based animations with Framer Motion.", "Added keyboard shortcuts for Version Log (v) and Easter Egg (Shift+M).", "Integrated AI Poeticizer feature.", "Centralized content into site-content.ts", "Added full Manifesto page."] },
        { version: "v0.0.1", date: "2024-07-01", notes: ["Project conceptualization and design blueprint.", "Core technology stack finalized (Next.js, Tailwind, Framer Motion)."] },
      ],
    },
    easterEgg: {
      title: "Hidden Module Concepts",
      description: "Exploratory ideas simmering in the mod36 labs...",
      hiddenModules: [
        "Project Chimera: Cross-Reality Interface",
        "Nexus Weaver: Decentralized Identity Protocol",
        "Aetherium Core: Quantum-Resistant Ledger",
        "BioSynth Harmony: AI-Driven Ecological Regeneration",
        "ChronoLeap Engine: Temporal Data Analysis",
      ],
      experimentalNote: "These are experimental concepts. Not actual projects (yet!)."
    }
  },
  // Keeping the 36 Realities data for potential AI use, even if the grid is not on the homepage.
  realitiesDataForAI: {
    realities: [
        { id: "housing", title: "Housing"},
        { id: "infrastructure", title: "Infrastructure"},
        { id: "architecture", title: "Architecture"},
        { id: "climate", title: "Climate"},
        { id: "biodiversity", title: "Biodiversity"},
        { id: "water", title: "Water"},
        { id: "energy", title: "Energy"},
        { id: "waste", title: "Waste"},
        { id: "materials", title: "Materials"},
        { id: "culture", title: "Culture"},
        { id: "language", title: "Language"},
        { id: "memory", title: "Memory"},
        { id: "religion", title: "Religion"},
        { id: "faith", title: "Faith"},
        { id: "imagination", title: "Imagination"},
        { id: "education", title: "Education"},
        { id: "technology", title: "Technology"},
        { id: "intelligence", title: "Intelligence"},
        { id: "systems", title: "Systems"},
        { id: "attention", title: "Attention"},
        { id: "governance", title: "Governance"},
        { id: "economics", title: "Economics"},
        { id: "work", title: "Work"},
        { id: "power", title: "Power"},
        { id: "trust", title: "Trust"},
        { id: "conflict", title: "Conflict"},
        { id: "gender", title: "Gender"},
        { id: "migration", title: "Migration"},
        { id: "time", title: "Time"},
        { id: "death", title: "Death"},
        { id: "joy", title: "Joy"},
        { id: "the-unknown", title: "The Unknown"},
        { id: "food", title: "Food"},
        { id: "health", title: "Health"},
        { id: "land", title: "Land"},
        { id: "media", title: "Media"}
      ]
  }
};
    