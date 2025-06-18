
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
  description: string;
}

export interface CorePhilosophySectionContent {
  title: string;
  blocks: PhilosophyBlockContent[];
}

export interface RealityItem {
  id: string;
  title: string;
  oneLiner: string;
  iconName: string;
  extendedDescription?: string;
  tags?: string[];
}

export interface RealitiesGridSectionContent {
  title: string;
  realities: RealityItem[];
  ctaButtons: CTAButton[];
}

export interface EngineStepContent {
  iconName: string; // Lucide icon name
  title: string;
  description: string;
}

export interface Mod36EngineSectionContent {
  title: string;
  steps: EngineStepContent[];
}

export interface UseCaseCategoryContent {
  id: string;
  title: string;
  imageHint: string;
  imageUrl?: string;
  description: string;
  link?: string;
}

export interface UseCasesSectionContent {
  title: string;
  categories: UseCaseCategoryContent[];
}

export interface ParticipationAudience {
  iconName: string; // Lucide icon name
  name: string;
}

export interface OpenModelSectionContent {
  title: string;
  quoteOrManifestoExcerpt: string;
  invitationText: string;
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
  title:string;
  milestones: RoadmapMilestoneContent[];
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

export interface FooterSectionContentV2 {
  socialLinks: SocialLink[];
  licenseNotice: string;
  links: FooterLink[];
  brandName: string;
  tagline: string;
  copyrightText: string;
  lastUpdatedPrefix?: string;
}

export interface ManifestoPageContent {
  title: string;
  subtitle?: string; // Made subtitle optional
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
  home: HomeContentV2;
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
        { text: "Explore the 36 Realities", href: "#realities", variant: "default", icon: "Grid3x3" },
        { text: "Download Whitepaper", href: "/whitepaper.pdf", variant: "outline", icon: "DownloadCloud" },
      ],
      backgroundVisualHint: "abstract data system",
      overlayHint: "system diagrams reality icons",
    },
    introSection: {
      animatedText: "Mod36 is a global open design system built for shaping the future.",
      highlightKeywords: ["systems thinking", "culture", "AI", "open design", "Africa and the world"],
      ctaButton: { text: "Read Executive Summary", href: "/manifesto", variant: "link" },
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
      title: "The 36 Realities: A System Map",
      realities: [
        { id: "housing", title: "Housing", oneLiner: "Where we live and how it feels.", iconName: "Home", extendedDescription: "Housing is more than shelter—it reflects dignity, culture, security, and identity. It’s about affordability, spatial justice, adaptability, and emotional connection to place.", tags: ["Built Environment"] },
        { id: "infrastructure", title: "Infrastructure", oneLiner: "Roads, pipes, and connections.", iconName: "Network", extendedDescription: "Infrastructure includes the physical and digital systems that support modern life. It shapes access to opportunity, equity, and resilience in crisis.", tags: ["Built Environment"] },
        { id: "architecture", title: "Architecture", oneLiner: "The buildings we live in.", iconName: "Building", extendedDescription: "Architecture reflects how people imagine and shape space. It’s a mirror of our values, our histories, and our aspirations for the future.", tags: ["Built Environment"] },
        { id: "climate", title: "Climate", oneLiner: "How we care for the planet.", iconName: "CloudSun", extendedDescription: "Climate is both a global system and a local experience. Designing with climate means reducing harm, adapting, and regenerating environments.", tags: ["Environment & Resources"] },
        { id: "biodiversity", title: "Biodiversity", oneLiner: "Protecting nature and balance.", iconName: "Sprout", extendedDescription: "Biodiversity ensures life’s complexity. It's about ecosystems, species, and the invisible web of relationships that sustain all living things.", tags: ["Environment & Resources"] },
        { id: "water", title: "Water", oneLiner: "Clean access and cultural meaning.", iconName: "Droplets", extendedDescription: "Water is life. Access, control, and meaning vary across cultures. It’s sacred, political, and ecological all at once.", tags: ["Environment & Resources"] },
        { id: "energy", title: "Energy", oneLiner: "Power for life and fairness.", iconName: "Zap", extendedDescription: "Energy powers our homes and devices, but also justice, development, and autonomy. Who controls it, and how it’s generated, matters.", tags: ["Environment & Resources"] },
        { id: "waste", title: "Waste", oneLiner: "What we throw away and how we reuse it.", iconName: "Trash2", extendedDescription: "Waste reveals our systems' failures. Reframing it means designing for circularity, material life cycles, and ecological respect.", tags: ["Environment & Resources"] },
        { id: "materials", title: "Materials", oneLiner: "Where things come from and their impact.", iconName: "Layers", extendedDescription: "Materials are embedded stories—of extraction, labor, and use. Conscious selection transforms how we build and live.", tags: ["Environment & Resources"] },
        { id: "culture", title: "Culture", oneLiner: "Who we are and what we create.", iconName: "Palette", extendedDescription: "Culture is not fixed—it’s living memory, expression, rhythm, and resistance. Design must begin from cultural truth.", tags: ["Culture & Knowledge"] },
        { id: "language", title: "Language", oneLiner: "How we speak and understand.", iconName: "Languages", extendedDescription: "Language shapes perception and identity. It carries wisdom, nuance, and emotion often lost in translation.", tags: ["Culture & Knowledge"] },
        { id: "memory", title: "Memory", oneLiner: "History, trauma, and stories.", iconName: "Brain", extendedDescription: "Memory isn’t just history—it’s emotional, political, and spatial. It shapes healing, justice, and the stories we choose to tell.", tags: ["Culture & Knowledge"] },
        { id: "religion", title: "Religion", oneLiner: "Beliefs and moral guides.", iconName: "BookOpenCheck", extendedDescription: "Religion informs ethics, community, and imagination. Designing with respect to belief systems creates deeper relevance.", tags: ["Culture & Knowledge"] },
        { id: "faith", title: "Faith", oneLiner: "Hope and inner belief.", iconName: "Sparkles", extendedDescription: "Faith speaks to what we trust even in uncertainty. It grounds resilience, purpose, and possibility in design.", tags: ["Culture & Knowledge"] },
        { id: "imagination", title: "Imagination", oneLiner: "Dreaming and creating futures.", iconName: "Lightbulb", extendedDescription: "Imagination is the core of innovation. It allows people to see beyond limitation and design toward possibility.", tags: ["Culture & Knowledge"] },
        { id: "education", title: "Education", oneLiner: "How we learn and grow.", iconName: "School", extendedDescription: "Education is the foundation of agency. It must be decolonized, contextual, and built around curiosity, not control.", tags: ["Learning & Systems"] },
        { id: "technology", title: "Technology", oneLiner: "Tools that help or harm.", iconName: "Cpu", extendedDescription: "Technology reflects human intention. It amplifies power and requires thoughtful, ethical design aligned with human dignity.", tags: ["Learning & Systems"] },
        { id: "intelligence", title: "Intelligence", oneLiner: "Thinking, learning, and AI.", iconName: "BrainCircuit", extendedDescription: "Intelligence is diverse. From AI to ancestral wisdom, we must design systems that recognize all forms of knowing.", tags: ["Learning & Systems"] },
        { id: "systems", title: "Systems", oneLiner: "How everything is linked.", iconName: "Share2", extendedDescription: "Systems thinking helps us see patterns, feedback loops, and deep causes. It turns chaos into insight and design into transformation.", tags: ["Learning & Systems"] },
        { id: "attention", title: "Attention", oneLiner: "What we focus on.", iconName: "Eye", extendedDescription: "In a world of noise, attention is power. Designing for presence, not distraction, becomes a radical act.", tags: ["Learning & Systems"] },
        { id: "governance", title: "Governance", oneLiner: "Rules, leadership, and fairness.", iconName: "Landmark", extendedDescription: "Governance is not just law—it’s how power flows, who decides, and how communities shape their futures.", tags: ["Social & Civic Life"] },
        { id: "economics", title: "Economics", oneLiner: "Money, work, and sharing.", iconName: "DollarSign", extendedDescription: "Economics must evolve beyond growth. It should reflect care, value exchange, commons, and dignity.", tags: ["Social & Civic Life"] },
        { id: "work", title: "Work", oneLiner: "Jobs, machines, and meaning.", iconName: "Briefcase", extendedDescription: "Work defines identity, contribution, and survival. Automation demands we rethink purpose and livelihood.", tags: ["Social & Civic Life"] },
        { id: "power", title: "Power", oneLiner: "Influence, justice, and control.", iconName: "Activity", extendedDescription: "Power is present in all systems—visible and hidden. Design must reveal, question, and redistribute it.", tags: ["Social & Civic Life"] },
        { id: "trust", title: "Trust", oneLiner: "Building honesty and teamwork.", iconName: "ShieldCheck", extendedDescription: "Trust is infrastructure. It’s emotional, social, and systemic—built slowly and broken quickly.", tags: ["Social & Civic Life"] },
        { id: "conflict", title: "Conflict", oneLiner: "Dealing with tension and change.", iconName: "Swords", extendedDescription: "Conflict isn’t failure—it’s a moment of friction that can lead to truth, growth, or rupture. Design for healing.", tags: ["Social & Civic Life"] },
        { id: "gender", title: "Gender", oneLiner: "Equality and identity.", iconName: "Users2", extendedDescription: "Gender intersects every aspect of design. Recognizing and correcting bias leads to equity and deeper insight.", tags: ["Social & Civic Life"] },
        { id: "migration", title: "Migration", oneLiner: "Moving, borders, and identity.", iconName: "Plane", extendedDescription: "Migration is movement, memory, and struggle. Borders are lines of both limitation and transformation.", tags: ["Social & Civic Life"] },
        { id: "time", title: "Time", oneLiner: "How fast or slow things happen.", iconName: "Clock", extendedDescription: "Time is not neutral—it is cultural, economic, and political. Design must recognize rhythms beyond speed.", tags: ["Temporal & Existential"] },
        { id: "death", title: "Death", oneLiner: "Loss, memory, and meaning.", iconName: "Archive", extendedDescription: "Death invites reflection. It reminds us to design with care, legacy, and love.", tags: ["Temporal & Existential"] },
        { id: "joy", title: "Joy", oneLiner: "Fun, play, and design that feels good.", iconName: "Smile", extendedDescription: "Joy is resistance. It's not trivial—it sustains life, brings connection, and humanizes systems.", tags: ["Temporal & Existential"] },
        { id: "the-unknown", title: "The Unknown", oneLiner: "Mystery and open questions.", iconName: "HelpCircle", extendedDescription: "The Unknown is a design partner. It pushes us to stay humble, curious, and creative in every discipline.", tags: ["Temporal & Existential"] },
        { id: "food", title: "Food", oneLiner: "What we eat and how it’s shared.", iconName: "Utensils", extendedDescription: "Food is not just sustenance—it’s memory, identity, ritual, and power. Design must respect food systems holistically.", tags: ["Essentials"] },
        { id: "health", title: "Health", oneLiner: "Caring for bodies and minds.", iconName: "HeartPulse", extendedDescription: "Health includes wellness, care systems, and collective thriving. It demands integration—not isolation—from other Realities.", tags: ["Essentials"] },
        { id: "land", title: "Land", oneLiner: "Owning, using, and remembering places.", iconName: "Mountain", extendedDescription: "Land holds conflict, culture, and community. Design must address dispossession, stewardship, and belonging.", tags: ["Essentials"] },
        { id: "media", title: "Media", oneLiner: "Who tells stories and how.", iconName: "Rss", extendedDescription: "Media creates truth, shapes opinion, and spreads emotion. Designing with media is designing with influence.", tags: ["Essentials"] }
      ],
      ctaButtons: [
        { text: "Use the Realities Toolkit", href: "#tools", variant: "default", icon: "Wrench" },
        { text: "Explore Connections", href: "#connections", variant: "outline", icon: "Share2" },
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
        { id: "architecture", title: "Architecture & Urban Design", imageHint: "modern sustainable architecture", description: "Innovative modular housing and community spaces.", imageUrl: "https://placehold.co/400x250.png", link: "/use-cases/architecture" },
        { id: "technology", title: "Technology", imageHint: "abstract tech interface", description: "Open-source platforms and AI tools for design.", imageUrl: "https://placehold.co/400x250.png", link: "/use-cases/technology" },
        { id: "public-systems", title: "Public Systems", imageHint: "community planning", description: "Resilient infrastructure and equitable service delivery.", imageUrl: "https://placehold.co/400x250.png", link: "/use-cases/public-systems" },
        { id: "education", title: "Education", imageHint: "collaborative learning", description: "Curricula for systems thinking and modular design.", imageUrl: "https://placehold.co/400x250.png", link: "/use-cases/education", },
        { id: "culture", title: "Culture", imageHint: "cultural expression art", description: "Platforms for preserving and evolving cultural heritage.", imageUrl: "https://placehold.co/400x250.png", link: "/use-cases/culture", },
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
        { text: "Join the Ecosystem", href: "#join", variant: "default", icon: "UsersRound" },
        { text: "Propose a Collaboration", href: "mailto:hello@mod36.xyz", variant: "outline", icon: "Mail" },
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
      ],
      licenseNotice: "Mod36 is an Open Source Initiative.",
      links: [
        { text: "Whitepaper", href: "/whitepaper.pdf" },
        { text: "Notion Library", href: "https://mod36.notion.site" },
        { text: "Community", href: "#join" },
        { text: "Contact", href: "mailto:hello@mod36.xyz" },
      ],
      brandName: "Mod36",
      tagline: "36 Realities. One Modular Future.",
      copyrightText: `© ${new Date().getFullYear()} Mod36. All rights reserved.`,
      lastUpdatedPrefix: "Site v0.3.0. Last updated:",
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
      description: "Tracking the evolution of mod36.",
      logs: [
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
  }
};

    