
// src/data/site-content.ts
import type { LucideIcon } from 'lucide-react';

// --- Base Interfaces ---
export interface CTAButton {
  text: string;
  href: string;
  variant?: 'default' | 'outline' | 'secondary' | 'ghost' | 'link';
  icon?: LucideIcon | string; 
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

// --- Revised Homepage Section Interfaces ---

export interface HeroSectionRevisedContent {
  headline: string;
  tagline: string;
  introParagraph: string[]; // Array of strings for multi-line paragraph
  backgroundVisualHint: string;
}

export interface CoreFeatureItem {
  title: string;
  description: string;
  iconName: string; // Lucide icon name
}
export interface CoreFeaturesSectionContent {
  title: string;
  features: CoreFeatureItem[];
  visualHint?: string;
  visualDataAiHint?: string;
}

export interface CallToActionContent {
  title: string;
  mainText: string;
  ctaButton: CTAButton;
  visualHint?: string;
  visualDataAiHint?: string;
}

export interface FooterV0Content { // Keeping name for now, content is similar
  brandLine: string;
  links: FooterLink[];
  socialLinks: SocialLink[];
  copyrightText: string;
}

// --- Main Site Content Structure (Revised) ---
export interface HomeRevisedContent {
  heroSection: HeroSectionRevisedContent;
  keyFeaturesSection: CoreFeaturesSectionContent; // Re-using KeyFeaturesSection for Core Features
  communitySection: CallToActionContent; // Re-using CommunityMovementSection for Call to Action
  footerSection: FooterV0Content;
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

export interface RealitiesDataForAI {
  realities: Array<Pick<RealityItem, 'id' | 'title' | 'oneLiner' | 'iconName' | 'extendedDescription' | 'tags'>>;
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
  appName: string; 
  brandTagline: string; // General tagline for the brand
  meta: {
    description: string;
  };
}
export interface SiteContent extends AppNameMeta {
  home: HomeRevisedContent; // Specific to revised landing page
  manifestoPage: ManifestoPageContent; 
  modals: ModalsContent; 
  realitiesDataForAI: RealitiesDataForAI; 
}


export const siteContent: SiteContent = {
  appName: "Mod36: The Modular Design System for Anything and Everything",
  brandTagline: "Design tools for any challenge. Build systems for every future.",
  meta: {
    description: "Mod36 is a powerful, flexible modular design framework empowering creators across all fields. Design solutions, tools, and systems for anything the future demands.",
  },
  home: {
    heroSection: {
      headline: "Mod36: The Modular Design System for Anything and Everything",
      tagline: "Design tools for any challenge. Build systems for every future.",
      introParagraph: [
        "Mod36 is a powerful, flexible modular design framework that empowers creators, innovators, and builders across all fields — architecture, AI, Web3, technology, education, culture, and beyond. It’s not limited to one problem or industry. Instead, Mod36 provides the building blocks and intelligent tools you need to design solutions, tools, and systems for anything the future demands.",
        "Whether you’re developing sustainable buildings, crafting AI workflows, creating decentralized platforms, or imagining new ways to educate and connect communities, Mod36 adapts with you. It’s a living system designed to evolve with your ideas, scale with your vision, and help you prototype the future — one modular piece at a time."
      ],
      backgroundVisualHint: "abstract intelligent system dark connections",
    },
    keyFeaturesSection: { // Re-purposed for "Core Features"
      title: "Core Features",
      features: [
        { title: "Universal Modularity", description: "Break complex challenges into flexible, reusable components that can be combined and adapted.", iconName: "Puzzle" },
        { title: "Cross-Disciplinary", description: "Use the same framework for architecture, software, social systems, and more.", iconName: "Library" },
        { title: "AI-Enhanced Design", description: "Harness artificial intelligence to explore possibilities and optimize solutions.", iconName: "BrainCircuit" },
        { title: "Culturally Rooted", description: "Designed to respect and integrate diverse cultural perspectives and knowledge systems.", iconName: "Globe2" },
        { title: "Open and Collaborative", description: "Built for sharing, iteration, and collective innovation.", iconName: "Users2" },
      ],
      visualHint: "[Visual: Abstract representation of interconnected modules or features]",
      visualDataAiHint: "interconnected modules abstract",
    },
    communitySection: { // Re-purposed for "Call to Action"
      title: "Join the Movement", // A more engaging title for the section
      mainText: "Join the Mod36 community and start designing the future — whatever it looks like.",
      ctaButton: { text: "Join the Community", href: "#footer-v0", variant: "default", icon: "Users" }, // Link to footer for contact/socials for now
      evolutionNote: "", // Not used in this version
      invitationParagraphs: [], // Not used in this version
      ctaButtons: [], // Replaced by single ctaButton above
      visualHint: "[Visual: Abstract representation of community or collaboration]",
      visualDataAiHint: "community collaboration abstract",
    },
    footerSection: {
      brandLine: "Mod36 – Design. Connect. Evolve.",
      links: [
        { text: "Whitepaper", href: "/whitepaper.pdf" },
        { text: "GitHub", href: "https://github.com/mod36" }, 
        { text: "Community", href: "#" }, // Placeholder
        { text: "Contact", href: "mailto:hello@mod36.xyz" },
      ],
      socialLinks: [
        { name: 'LinkedIn', iconName: 'Linkedin', url: 'https://linkedin.com/company/mod36', ariaLabel: 'Mod36 LinkedIn Profile' },
        { name: 'X (Twitter)', iconName: 'Twitter', url: 'https://x.com/mod36', ariaLabel: 'Mod36 X/Twitter Profile' },
        { name: 'Threads', iconName: 'Send', url: 'https://threads.net/@mod36', ariaLabel: 'Mod36 Threads Profile' }, 
      ],
      copyrightText: `© ${new Date().getFullYear()} Mod36. All rights reserved. Licensed under Apache 2.0.`,
    },
  },
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
        { version: "v0.6.0", date: "2024-08-02", notes: ["Major landing page revision to 'Modular Design System for Anything and Everything' theme.", "Updated Hero, Core Features, and Call to Action sections.", "Streamlined homepage structure."]},
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
  realitiesDataForAI: { 
    realities: [
        { id: "housing", title: "Housing", oneLiner: "Where we live and how it feels.", iconName: "Home", extendedDescription: "Housing is more than shelter—it reflects dignity, culture, security, and identity. It’s about affordability, spatial justice, adaptability, and emotional connection to place.", tags: ["Built Environment"] },
        { id: "infrastructure", title: "Infrastructure", oneLiner: "Roads, pipes, and connections.", iconName: "Network", extendedDescription: "Infrastructure includes the physical and digital systems that support modern life. It shapes access to opportunity, equity, and resilience in crisis.", tags: ["Built Environment"] },
        { id: "architecture", title: "Architecture", oneLiner: "The buildings we live in.", iconName: "Building", extendedDescription: "Architecture reflects how people imagine and shape space. It’s a mirror of our values, our histories, and our aspirations for the future.", tags: ["Built Environment"] },
        { id: "climate", title: "Climate", oneLiner: "How we care for the planet.", iconName: "CloudSun", extendedDescription: "Climate is both a global system and a local experience. Designing with climate means reducing harm, adapting, and regenerating environments.", tags: ["Environment"] },
        { id: "biodiversity", title: "Biodiversity", oneLiner: "Protecting nature and balance.", iconName: "Leaf", extendedDescription: "Biodiversity ensures life’s complexity. It's about ecosystems, species, and the invisible web of relationships that sustain all living things.", tags: ["Environment"] },
        { id: "water", title: "Water", oneLiner: "Clean access and cultural meaning.", iconName: "Droplets", extendedDescription: "Water is life. Access, control, and meaning vary across cultures. It’s sacred, political, and ecological all at once.", tags: ["Environment"] },
        { id: "energy", title: "Energy", oneLiner: "Power for life and fairness.", iconName: "Zap", extendedDescription: "Energy powers our homes and devices, but also justice, development, and autonomy. Who controls it, and how it’s generated, matters.", tags: ["Environment"] },
        { id: "waste", title: "Waste", oneLiner: "What we throw away and how we reuse it.", iconName: "Trash2", extendedDescription: "Waste reveals our systems' failures. Reframing it means designing for circularity, material life cycles, and ecological respect.", tags: ["Environment"] },
        { id: "materials", title: "Materials", oneLiner: "Where things come from and their impact.", iconName: "Box", extendedDescription: "Materials are embedded stories—of extraction, labor, and use. Conscious selection transforms how we build and live.", tags: ["Environment"] },
        { id: "culture", title: "Culture", oneLiner: "Who we are and what we create.", iconName: "Palette", extendedDescription: "Culture is not fixed—it’s living memory, expression, rhythm, and resistance. Design must begin from cultural truth.", tags: ["Culture"] },
        { id: "language", title: "Language", oneLiner: "How we speak and understand.", iconName: "Languages", extendedDescription: "Language shapes perception and identity. It carries wisdom, nuance, and emotion often lost in translation.", tags: ["Culture"] },
        { id: "memory", title: "Memory", oneLiner: "History, trauma, and stories.", iconName: "Brain", extendedDescription: "Memory isn’t just history—it’s emotional, political, and spatial. It shapes healing, justice, and the stories we choose to tell.", tags: ["Culture"] },
        { id: "religion", title: "Religion", oneLiner: "Beliefs and moral guides.", iconName: "BookOpen", extendedDescription: "Religion informs ethics, community, and imagination. Designing with respect to belief systems creates deeper relevance.", tags: ["Culture"] },
        { id: "faith", title: "Faith", oneLiner: "Hope and inner belief.", iconName: "Sparkles", extendedDescription: "Faith speaks to what we trust even in uncertainty. It grounds resilience, purpose, and possibility in design.", tags: ["Culture"] },
        { id: "imagination", title: "Imagination", oneLiner: "Dreaming and creating futures.", iconName: "Lightbulb", extendedDescription: "Imagination is the core of innovation. It allows people to see beyond limitation and design toward possibility.", tags: ["Culture"] },
        { id: "education", title: "Education", oneLiner: "How we learn and grow.", iconName: "GraduationCap", extendedDescription: "Education is the foundation of agency. It must be decolonized, contextual, and built around curiosity, not control.", tags: ["Knowledge"] },
        { id: "technology", title: "Technology", oneLiner: "Tools that help or harm.", iconName: "Cpu", extendedDescription: "Technology reflects human intention. It amplifies power and requires thoughtful, ethical design aligned with human dignity.", tags: ["Knowledge"] },
        { id: "intelligence", title: "Intelligence", oneLiner: "Thinking, learning, and AI.", iconName: "Chip", extendedDescription: "Intelligence is diverse. From AI to ancestral wisdom, we must design systems that recognize all forms of knowing.", tags: ["Knowledge"] },
        { id: "systems", title: "Systems", oneLiner: "How everything is linked.", iconName: "GitFork", extendedDescription: "Systems thinking helps us see patterns, feedback loops, and deep causes. It turns chaos into insight and design into transformation.", tags: ["Knowledge"] },
        { id: "attention", title: "Attention", oneLiner: "What we focus on.", iconName: "Eye", extendedDescription: "In a world of noise, attention is power. Designing for presence, not distraction, becomes a radical act.", tags: ["Knowledge"] },
        { id: "governance", title: "Governance", oneLiner: "Rules, leadership, and fairness.", iconName: "Scale", extendedDescription: "Governance is not just law—it’s how power flows, who decides, and how communities shape their futures.", tags: ["Society"] },
        { id: "economics", title: "Economics", oneLiner: "Money, work, and sharing.", iconName: "DollarSign", extendedDescription: "Economics must evolve beyond growth. It should reflect care, value exchange, commons, and dignity.", tags: ["Society"] },
        { id: "work", title: "Work", oneLiner: "Jobs, machines, and meaning.", iconName: "Briefcase", extendedDescription: "Work defines identity, contribution, and survival. Automation demands we rethink purpose and livelihood.", tags: ["Society"] },
        { id: "power", title: "Power", oneLiner: "Influence, justice, and control.", iconName: "BatteryCharging", extendedDescription: "Power is present in all systems—visible and hidden. Design must reveal, question, and redistribute it.", tags: ["Society"] },
        { id: "trust", title: "Trust", oneLiner: "Building honesty and teamwork.", iconName: "Handshake", extendedDescription: "Trust is infrastructure. It’s emotional, social, and systemic—built slowly and broken quickly.", tags: ["Society"] },
        { id: "conflict", title: "Conflict", oneLiner: "Dealing with tension and change.", iconName: "Swords", extendedDescription: "Conflict isn’t failure—it’s a moment of friction that can lead to truth, growth, or rupture. Design for healing.", tags: ["Society"] },
        { id: "gender", title: "Gender", oneLiner: "Equality and identity.", iconName: "VenusMars", extendedDescription: "Gender intersects every aspect of design. Recognizing and correcting bias leads to equity and deeper insight.", tags: ["Society"] },
        { id: "migration", title: "Migration", oneLiner: "Moving, borders, and identity.", iconName: "Plane", extendedDescription: "Migration is movement, memory, and struggle. Borders are lines of both limitation and transformation.", tags: ["Society"] },
        { id: "time", title: "Time", oneLiner: "How fast or slow things happen.", iconName: "Clock", extendedDescription: "Time is not neutral—it is cultural, economic, and political. Design must recognize rhythms beyond speed.", tags: ["Temporal"] },
        { id: "death", title: "Death", oneLiner: "Loss, memory, and meaning.", iconName: "Skull", extendedDescription: "Death invites reflection. It reminds us to design with care, legacy, and love.", tags: ["Existential"] },
        { id: "joy", title: "Joy", oneLiner: "Fun, play, and design that feels good.", iconName: "Smile", extendedDescription: "Joy is resistance. It's not trivial—it sustains life, brings connection, and humanizes systems.", tags: ["Emotional/Experiential"] },
        { id: "the-unknown", title: "The Unknown", oneLiner: "Mystery and open questions.", iconName: "HelpCircle", extendedDescription: "The Unknown is a design partner. It pushes us to stay humble, curious, and creative in every discipline.", tags: ["Existential"] },
        { id: "food", title: "Food", oneLiner: "What we eat and how it’s shared.", iconName: "Apple", extendedDescription: "Food is not just sustenance—it’s memory, identity, ritual, and power. Design must respect food systems holistically.", tags: ["Essentials"] },
        { id: "health", title: "Health", oneLiner: "Caring for bodies and minds.", iconName: "HeartPulse", extendedDescription: "Health includes wellness, care systems, and collective thriving. It demands integration—not isolation—from other Realities.", tags: ["Essentials"] },
        { id: "land", title: "Land", oneLiner: "Owning, using, and remembering places.", iconName: "Mountain", extendedDescription: "Land holds conflict, culture, and community. Design must address dispossession, stewardship, and belonging.", tags: ["Essentials"] },
        { id: "media", title: "Media", oneLiner: "Who tells stories and how.", iconName: "Tv", extendedDescription: "Media creates truth, shapes opinion, and spreads emotion. Designing with media is designing with influence.", tags: ["Communication"] }
      ]
  }
};

