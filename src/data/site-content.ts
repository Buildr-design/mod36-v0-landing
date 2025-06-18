// src/data/site-content.ts
import type { LucideIcon } from 'lucide-react';

// --- Base Interfaces ---
export interface CTAButton {
  text: string;
  href: string;
  variant?: 'default' | 'outline' | 'secondary' | 'ghost' | 'link';
  icon?: LucideIcon | string; // Allow string for Lucide icon names
}

export interface FooterLink {
  text: string;
  href: string;
}

export interface SocialLink {
  name: string;
  iconName?: string; // Lucide icon name
  url: string;
  ariaLabel: string;
}

// --- Mod36 v0 Specific Homepage Section Interfaces ---

export interface HeroSectionV0Content {
  mainTagline: string;
  shortText: string;
  ctaButtons: CTAButton[];
  backgroundVisualHint: string; // For abstract background
}

export interface WhatIsMod36V0Content {
  title: string;
  definition: string;
  diagramHint: string; // e.g., "Architecture + AI + Web3 + Culture -> Mod36"
  diagramDataAiHint?: string;
}

export interface VisionV0Content {
  title: string;
  problems: string[];
  quote: {
    text: string;
    source?: string;
  };
  visualHint?: string;
  visualDataAiHint?: string;
}

export interface FeatureV0 {
  title: string;
  description?: string;
  iconName?: string; // Lucide icon name
}
export interface KeyFeaturesV0Content {
  title: string;
  features: FeatureV0[];
  visualHint?: string;
  visualDataAiHint?: string;
}

export interface WhoItIsForV0Content {
  title: string;
  audienceList: string[];
  visualHint?: string; // For icons representing roles
  visualDataAiHint?: string;
}

export interface CommunityV0Content {
  title: string;
  invitationParagraphs: string[];
  ctaButtons: CTAButton[];
  evolutionNote: string;
  visualHint?: string;
  visualDataAiHint?: string;
}

export interface FooterV0Content {
  brandLine: string;
  links: FooterLink[];
  socialLinks: SocialLink[];
  copyrightText: string;
}

// --- Main Site Content Structure (v0 specific) ---
export interface HomeV0Content {
  heroSection: HeroSectionV0Content;
  whatIsMod36Section: WhatIsMod36V0Content;
  visionSection: VisionV0Content;
  keyFeaturesSection: KeyFeaturesV0Content;
  whoItIsForSection: WhoItIsForV0Content;
  communitySection: CommunityV0Content;
  footerSection: FooterV0Content;
}

// --- Structures for existing pages/modals (to keep them functional) ---
export interface RealityItem {
  id: string;
  title: string;
  oneLiner: string;
  iconName: string; // Lucide icon name
  extendedDescription?: string;
  tags?: string[];
}

export interface RealitiesDataForAI {
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

// --- Root Site Content Interface ---
export interface AppNameMeta {
  appName: string; // e.g., "Mod36 v0"
  brandTagline: string; // e.g., "Modular Intelligence for a Changing World."
  meta: {
    description: string; // e.g., "Design with systems. Build with culture. Evolve with AI."
  };
}
export interface SiteContent extends AppNameMeta {
  home: HomeV0Content; // Specific to v0 landing page
  manifestoPage: ManifestoPageContent; // For the /manifesto route
  modals: ModalsContent; // For modals like version log, easter egg
  realitiesDataForAI: RealitiesDataForAI; // For AI features if they use the 36 realities data
}


export const siteContent: SiteContent = {
  appName: "Mod36 v0",
  brandTagline: "Modular Intelligence for a Changing World.",
  meta: {
    description: "Design with systems. Build with culture. Evolve with AI. Mod36 v0 is an open framework exploring how architecture, AI, and Web3 can build more human futures.",
  },
  home: {
    heroSection: {
      mainTagline: "36 Modules. Infinite Futures.",
      shortText: "Mod36 v0 is an open framework for designing with intelligence. Explore how architecture, AI, and Web3 can work together to build more human futures.",
      ctaButtons: [
        { text: "Read the Whitepaper", href: "/whitepaper.pdf", variant: "default", icon: "FileText" },
        { text: "Join the v0 Community", href: "#community", variant: "outline", icon: "Users" },
      ],
      backgroundVisualHint: "abstract intelligent system dark",
    },
    whatIsMod36Section: {
      title: "What is Mod36 v0?",
      definition: "Mod36 is a design intelligence system made for modern builders. At v0, it’s an open-source framework for exploring modular, culturally informed, and system-based design.",
      diagramHint: "[Diagram: Architecture + AI + Web3 + Culture → Mod36]",
      diagramDataAiHint: "conceptual diagram connection",
    },
    visionSection: {
      title: "The Vision Behind v0",
      problems: [
        "Broken design pipelines",
        "Siloed innovation",
        "Lack of local, scalable frameworks",
      ],
      quote: {
        text: "We’re not guessing the future — we’re designing with it.",
      },
      visualHint: "[Visual: Abstract representation of interconnected problems transforming into solutions]",
      visualDataAiHint: "problem solution transformation abstract",
    },
    keyFeaturesSection: {
      title: "Key Features of v0",
      features: [
        { title: "Modular Framework for Design", iconName: "Grid", description: "A structured yet flexible approach to deconstruct and reconstruct complex challenges." },
        { title: "Early Tools", iconName: "Package", description: "Whitepaper, Notion templates, and a research library to get started." },
        { title: "AI in Context-Aware Problem-Solving", iconName: "BrainCircuit", description: "Leveraging AI to understand nuances and generate relevant insights." },
        { title: "Open-Source Contributions", iconName: "GitFork", description: "Built for and with the community. Your ideas shape the future of Mod36." },
        { title: "Community-Led Design Models", iconName: "Users2", description: "Evolving through collaborative design, testing, and feedback." },
      ],
      visualHint: "[Visual: Morphing grid or shifting modules animation]",
      visualDataAiHint: "modular grid morphing animation",
    },
    whoItIsForSection: {
      title: "Who It’s For",
      audienceList: [
        "Architects",
        "System Designers",
        "Technologists",
        "Web3 Explorers",
        "AI Engineers",
        "Creatives working on complex problems",
      ],
      visualHint: "[Visual: Icons representing different roles arranged in a network]",
      visualDataAiHint: "diverse professional roles network",
    },
    communitySection: {
      title: "Community & Call to Action",
      invitationParagraphs: [
        "Mod36 is built with and for its community. Your insights, contributions, and experiments are vital to its evolution.",
        "Join us to co-create tools, participate in labs, test prototypes, and help shape a framework that's adaptable, intelligent, and culturally rich."
      ],
      ctaButtons: [
        { text: "Join our Discord", href: "https://discord.gg/mod36", variant: "default", icon: "MessageSquare" }, // Placeholder link
        { text: "Sign Up to Co-Create", href: "mailto:community@mod36.xyz?subject=Mod36 v0 Co-Creation Interest", variant: "outline", icon: "PlusCircle" },
      ],
      evolutionNote: "Mod36 v0 will evolve directly based on user input and collaborative development.",
      visualHint: "[Visual: Growing network or community contribution graphic]",
      visualDataAiHint: "community network growth collaboration",
    },
    footerSection: {
      brandLine: "Mod36 v0 – Designed to Grow. Built to Adapt.",
      links: [
        { text: "Whitepaper", href: "/whitepaper.pdf" },
        { text: "GitHub", href: "https://github.com/mod36" }, // Placeholder
        { text: "Community", href: "#community" },
        { text: "Newsletter", href: "mailto:newsletter@mod36.xyz?subject=Subscribe to Mod36 Newsletter" }, // Placeholder
        { text: "Contact", href: "mailto:hello@mod36.xyz" },
      ],
      socialLinks: [
        { name: 'LinkedIn', iconName: 'Linkedin', url: 'https://linkedin.com/company/mod36', ariaLabel: 'Mod36 LinkedIn Profile' },
        { name: 'X (Twitter)', iconName: 'Twitter', url: 'https://x.com/mod36', ariaLabel: 'Mod36 X/Twitter Profile' },
        { name: 'Threads', iconName: 'Send', url: 'https://threads.net/@mod36', ariaLabel: 'Mod36 Threads Profile' }, // Assuming Send icon is appropriate for Threads
      ],
      copyrightText: `© ${new Date().getFullYear()} Mod36. All rights reserved. Licensed under Apache 2.0.`, // Added license
    },
  },
  manifestoPage: { // Content from previous update, remains unchanged by this prompt for the landing page
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
  modals: { // Content from previous update, remains unchanged
    versionLog: {
      title: "Version Logs",
      description: "Tracking the evolution of ModVerse.",
      logs: [
        { version: "v0.5.0", date: "2024-08-01", notes: ["Major landing page overhaul to 'Mod36 v0' structure and content.", "Updated site metadata for v0 branding.", "Removed Problem, HowItWorks, and RealitiesGrid sections from homepage."]},
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
  realitiesDataForAI: { // Content from previous update, remains unchanged
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
