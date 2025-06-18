// src/data/site-content.ts
import type { LucideIcon } from 'lucide-react';

export interface AppNameMeta {
  appName: string;
  meta: {
    description: string;
  };
}

// --- New Homepage Section Interfaces ---

export interface CTAButton {
  text: string;
  href: string;
  variant?: 'default' | 'outline' | 'secondary' | 'ghost' | 'link';
  icon?: LucideIcon | string; // Allow LucideIcon or string for icon name
}

export interface HeroSectionContentV2 {
  mainTitle: string;
  subtitle: string;
  animatedTagline: string;
  ctaButtons: CTAButton[];
  backgroundVisualHint: string; // For data-ai-hint
  overlayHint?: string;
}

export interface IntroSectionContent {
  animatedText: string;
  highlightKeywords: string[];
  ctaButton: CTAButton;
}

export interface PhilosophyBlockContent {
  iconName: string; // Lucide icon name
  title: string;
  description: string; // Short description, full content on hover/expand (future)
}

export interface CorePhilosophySectionContent {
  title: string; // Implicit: "Core Philosophy"
  blocks: PhilosophyBlockContent[];
}

export interface RealityItem {
  id: string;
  name: string;
  description: string; // For hover/popup (future)
  iconName?: string; // Optional Lucide icon name
}

export interface RealitiesGridSectionContent {
  title: string; // "The 36 Realities"
  realities: RealityItem[][]; // 6x6 grid structure
  ctaButtons: CTAButton[];
}

export interface EngineStepContent {
  iconName: string; // Lucide icon name
  title: string;
  description: string;
}

export interface Mod36EngineSectionContent {
  title: string; // "The Mod36 Engine"
  steps: EngineStepContent[];
}

export interface UseCaseCategoryContent {
  id: string;
  title: string;
  imageHint: string;
  imageUrl?: string;
  description: string;
  link?: string; // For "full detail"
}

export interface UseCasesSectionContent {
  title: string; // "Use Cases"
  categories: UseCaseCategoryContent[];
}

export interface ParticipationAudience {
  iconName: string; // Lucide icon name
  name: string;
}

export interface OpenModelSectionContent {
  title: string; // "Open Model & Participation"
  quoteOrManifestoExcerpt: string;
  invitationText: string;
  // Placeholder for sign-up form - will be visual only for now
  audience: ParticipationAudience[];
  ctaButtons: CTAButton[];
}

export interface RoadmapMilestoneContent {
  version: string;
  title: string;
  description: string;
  status: 'Now' | 'Upcoming' | 'Future';
}

export interface RoadmapSectionContent {
  title: string; // "Roadmap Timeline"
  milestones: RoadmapMilestoneContent[];
}

export interface FooterLink {
  text: string;
  href: string;
}

export interface FooterSectionContentV2 {
  socialLinks: SocialLink[]; // Re-use existing SocialLink
  licenseNotice: string;
  links: FooterLink[];
  brandName: string;
  tagline: string;
  copyrightText: string;
  lastUpdatedPrefix?: string; // Keep optional
}


// --- Original Interfaces (some might be deprecated or adapted) ---
export interface SocialLink {
  name: string;
  Icon?: React.ComponentType<{ className?: string }>; // For direct component usage
  iconName?: string; // For dynamic lookup
  url: string;
  ariaLabel: string;
}

export interface ManifestoPageContent {
  title: string;
  subtitle: string;
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

// --- New Home Content Structure ---
export interface HomeContentV2 {
  heroSection: HeroSectionContentV2;
  introSection: IntroSectionContent;
  corePhilosophySection: CorePhilosophySectionContent;
  realitiesGridSection: RealitiesGridSectionContent;
  mod36EngineSection: Mod36EngineSectionContent;
  useCasesSection: UseCasesSectionContent;
  openModelSection: OpenModelSectionContent;
  roadmapSection: RoadmapSectionContent;
  footerSection: FooterSectionContentV2;
}

export interface SiteContent extends AppNameMeta {
  home: HomeContentV2; // Updated to V2
  manifestoPage: ManifestoPageContent;
  modals: ModalsContent;
}


export const siteContent: SiteContent = {
  appName: "mod36 studio",
  meta: {
    description: "Mod36: A Modular Intelligence Framework for Designing With 36 Realities.",
  },
  home: {
    heroSection: {
      mainTitle: "Mod36",
      subtitle: "A Modular Intelligence Framework for Designing With 36 Realities",
      animatedTagline: "36 Realities. One Modular Future.",
      ctaButtons: [
        { text: "Explore the 36 Realities", href: "#realities", variant: "default", icon: "Grid" },
        { text: "Download Whitepaper", href: "/whitepaper.pdf", variant: "outline", icon: "Download" }, // Assuming PDF path
      ],
      backgroundVisualHint: "abstract data system",
      overlayHint: "system diagrams reality icons",
    },
    introSection: {
      animatedText: "Mod36 is a global open design system built for shaping the future.",
      highlightKeywords: ["systems thinking", "culture", "AI", "open design", "Africa and the world"],
      ctaButton: { text: "Read Executive Summary", href: "#summary", variant: "link" }, // Link to a future section or page
    },
    corePhilosophySection: {
      title: "Core Philosophy",
      blocks: [
        { iconName: "Combine", title: "Systems Are the New Materials", description: "Understanding interconnectedness to build resilient solutions." },
        { iconName: "Globe2", title: "Culture Is the Starting Point", description: "Designing with and for diverse human experiences." },
        { iconName: "BrainCircuit", title: "Everyone Has Intelligence", description: "Harnessing collective wisdom for inclusive innovation." },
      ],
    },
    realitiesGridSection: {
      title: "The 36 Realities",
      // Simplified 6x6 structure - can be expanded with actual content later
      realities: Array(6).fill(null).map((_, rowIndex) =>
        Array(6).fill(null).map((__, colIndex) => ({
          id: `r${rowIndex * 6 + colIndex + 1}`,
          name: `Reality ${rowIndex * 6 + colIndex + 1}`,
          description: `Description for Reality ${rowIndex * 6 + colIndex + 1}. Details to come.`,
          iconName: "Box", // Placeholder icon
        }))
      ),
      ctaButtons: [
        { text: "Use the Realities", href: "#tools", variant: "default", icon: "MousePointerSquare" },
        { text: "See Use Cases", href: "#use-cases", variant: "outline", icon: "AppWindow" },
      ],
    },
    mod36EngineSection: {
      title: "The Mod36 Engine",
      steps: [
        { iconName: "Users", title: "Inputs", description: "Community needs, environmental data, research insights." },
        { iconName: "Settings2", title: "Process", description: "Systems mapping, AI-driven analysis, modular toolkits." },
        { iconName: "Lightbulb", title: "Outputs", description: "Adaptive designs, sustainable policies, compelling stories." },
      ],
    },
    useCasesSection: {
      title: "Use Cases",
      categories: [
        { id: "architecture", title: "Architecture & Urban Design", imageHint: "modern sustainable architecture", description: "Innovative modular housing and community spaces.", imageUrl: "https://placehold.co/400x300.png" },
        { id: "technology", title: "Technology", imageHint: "abstract tech interface", description: "Open-source platforms and AI tools for design.", imageUrl: "https://placehold.co/400x300.png" },
        { id: "public-systems", title: "Public Systems", imageHint: "community planning", description: "Resilient infrastructure and equitable service delivery.", imageUrl: "https://placehold.co/400x300.png" },
        { id: "education", title: "Education", imageHint: "collaborative learning", description: "Curricula and tools for systems thinking and modular design.", imageUrl: "https://placehold.co/400x300.png" },
        { id: "culture", title: "Culture", imageHint: "cultural expression art", description: "Platforms for preserving and evolving cultural heritage.", imageUrl: "https://placehold.co/400x300.png" },
      ],
    },
    openModelSection: {
      title: "Open Model & Participation",
      quoteOrManifestoExcerpt: "Mod36 is a blueprint for a future we build together. Open, adaptive, and evolving.",
      invitationText: "Join us in shaping a modular future. Your perspective is vital.",
      audience: [
        { iconName: "Palette", name: "Designers" },
        { iconName: "Users", name: "Elders" },
        { iconName: "School", name: "Teachers" },
        { iconName: "Landmark", name: "Policymakers" },
        { iconName: "Code", name: "Developers" },
      ],
      ctaButtons: [
        { text: "Join the Ecosystem", href: "#join", variant: "default", icon: "UsersRound" }, // Placeholder for form/link
        { text: "Propose a Collaboration", href: "mailto:hello@mod36.xyz", variant: "outline", icon: "Send" },
      ],
    },
    roadmapSection: {
      title: "Roadmap Timeline",
      milestones: [
        { version: "v0", title: "Community + Whitepaper", description: "Foundation, core concepts, initial community building.", status: "Now" },
        { version: "v1", title: "Toolkits + Pilot Labs", description: "Release of open-source design tools and first real-world labs.", status: "Upcoming" },
        { version: "v2", title: "Integration in Schools, Cities", description: "Partnerships for broader adoption and impact.", status: "Future" },
        { version: "vFuture", title: "Global Framework Adoption", description: "Mod36 as a widely adopted standard for resilient design.", status: "Future" },
      ],
    },
    footerSection: {
      socialLinks: [
        { name: 'LinkedIn', iconName: 'Linkedin', url: 'https://linkedin.com/company/mod36', ariaLabel: 'Mod36 LinkedIn Profile' },
        { name: 'GitHub', iconName: 'Github', url: 'https://github.com/mod36', ariaLabel: 'Mod36 GitHub Profile' },
        { name: 'Threads', iconName: 'Send', url: 'https://threads.net/@mod36', ariaLabel: 'Mod36 Threads Profile' },
        // Add other socials as needed
      ],
      licenseNotice: "Mod36 is an Open Source Initiative.",
      links: [
        { text: "Whitepaper", href: "/whitepaper.pdf" },
        { text: "Notion Library", href: "#" }, // Placeholder
        { text: "Community", href: "#join" }, // Placeholder
        { text: "Contact", href: "mailto:hello@mod36.xyz" },
      ],
      brandName: "Mod36",
      tagline: "36 Realities. One Modular Future.",
      copyrightText: `© ${new Date().getFullYear()} Mod36. All rights reserved.`,
      lastUpdatedPrefix: "Site v0.2.0. Last updated:", // Example version
    },
  },
  manifestoPage: {
    title: "Mod36 v0 Manifesto",
    subtitle: "“36 Realities. One Modular Future.”",
    backButtonText: "← Back to Home",
    sections: [
      {
        heading: "🌍 Why Mod36 Exists",
        paragraphs: [
          "The world is fragmenting — not just politically or socially, but ecologically, technologically, culturally. We are witnessing the collision of 36 critical realities: from climate collapse to housing crises, cultural erasure to digital colonization, AI acceleration to resource exhaustion.",
          "Mod36 is our response.",
          "We are not just designing buildings.\nWe are designing systems.\nNot just for comfort — but for survival, equity, and evolution."
        ],
      },
      {
        heading: "🧱 What Is Mod36?",
        paragraphs: [
          "Mod36 is a global design lab and systems framework.\nWe create modular, intelligent, and regenerative solutions for the 36 interconnected realities shaping our shared future."
        ],
        listItems: [
          "A way of thinking",
          "A method of building",
          "A platform for collaboration",
          "A call to radically rethink design — from the ground up"
        ],
      },
       {
        heading: "🔩 The 36 Realities",
        paragraphs: [
          "We define “realities” as planetary challenges and human truths — spanning six dimensions:",
          "Planet – climate change, resource limits, extinction",
          "People – migration, inequality, mental health",
          "Place – housing, infrastructure, cities, displacement",
          "Power – data, systems, governance, access",
          "Process – education, work, tools, knowledge",
          "Poetics – identity, culture, language, spirit",
          "These are not problems to patch.\nThey are systems to redesign."
        ],
      },
      {
        heading: "🧬 Our Philosophy",
        paragraphs: [
          "We believe in modularity — not just as form, but as freedom.",
          "A modular future is:"
        ],
        listItems: [
          "Scalable — grows with context",
          "Adaptable — responsive to place and culture",
          "Collaborative — open to remix and reuse",
          "Decentralized — not dictated by the global north or any empire",
          "Intelligent — powered by AI, systems logic, and lived knowledge",
          "Beautiful — designed with purpose, precision, and poetry"
        ],
      },
      {
        heading: "🛠️ Our Tools",
        paragraphs: [
          "We work across mediums:"
        ],
        listItems: [
          "Architecture — modular housing, public space, bioclimatic systems",
          "AI & Software — generative design, data tools, custom systems",
          "Speculative Futures — scenario building, storytelling, visual mapping",
          "Open Frameworks — toolkits, templates, knowledge bases",
          "Community Activation — education, events, residencies, networks"
        ],
      },
      {
        heading: "🧠 Who We Are",
        paragraphs: [
          "We are architects.\nWe are systems thinkers.\nWe are hackers of form, code, and culture.\nWe are rooted in Nigeria, inspired by the world, and committed to building a future where local wisdom meets global systems.",
          "We are not a brand. We are a blueprint."
        ],
      },
      {
        heading: "🚀 v0 Is Just the Beginning",
        paragraphs: [
          "Mod36 v0 is our signal.\nIt is not perfect. It is provocative.\nIt says: we are building. We are imagining. We are inviting.",
          "Build a system.",
          "Break a boundary.",
          "Rethink your reality."
        ],
        isBold: true,
      },
      {
        heading: "🔺 Join the Modular Revolution",
        paragraphs: [
          "The future will not be uniform.\nBut it can be modular.\nAnd it can be ours."
        ],
      },
    ],
    closingStatement: {
      line1: "Mod36",
      line2: "36 Realities. One Modular Future."
    },
    signature: "Mod36",
  },
  modals: {
    versionLog: {
      title: "Version Logs",
      description: "Tracking the evolution of mod36 v0.",
      logs: [
        { version: "v0.2.0", date: "2024-07-29", notes: ["Major landing page redesign to 9-section structure.", "Centralized all site content into site-content.ts with new data structures."]},
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
  }
};

    