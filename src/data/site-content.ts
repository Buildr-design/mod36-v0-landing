
// src/data/site-content.ts
import type { LucideIcon } from 'lucide-react';

// --- Base Interfaces ---
export interface CTAButton {
  text: string;
  href: string;
  variant?: 'default' | 'outline' | 'secondary' | 'ghost' | 'link';
  icon?: LucideIcon | string; // string for icon name
  target?: string; // for external links
}

export interface FooterLink {
  text: string;
  href: string;
  target?: string;
}

export interface SocialLink {
  name: string;
  iconName?: string; // Lucide icon name
  url: string;
  ariaLabel: string;
}

// --- Mod36 v0.01 Homepage Section Interfaces ---

export interface HeroV001Content {
  headline: string;
  subheadline: string;
  ctaButtons: CTAButton[];
  visualDataAiHint: string;
}

export interface WhatIsMod36IconSubsection {
  title: string;
  iconName: string; // Lucide icon name
  description: string;
}
export interface WhatIsMod36V001Content {
  mainParagraphs: string[];
  iconSubsections: WhatIsMod36IconSubsection[];
  visualDataAiHint: string; // For the "Grid-based structure morphing"
}

export interface BuildrSectionContent {
  title: string;
  introParagraph: string;
  ctaButtons: CTAButton[];
  visualDataAiHint: string; // For "Interactive challenge cards or system-building visual"
}

export interface WhyModularSectionContent {
  title: string;
  mainParagraphs: string[];
  visualDataAiHint: string; // For "Animated loop showing modules snapping together"
}

export interface CommunityInvitationV001Content {
  title: string;
  mainParagraphs: string[];
  ctaButtons: CTAButton[];
}

export interface RoadmapStageV001 {
  version: string;
  title: string;
  description: string;
  status: 'Live Now' | 'Upcoming' | 'In Progress';
}
export interface RoadmapPreviewV001Content {
  title: string;
  stages: RoadmapStageV001[];
}

export interface FooterV001Content {
  navLinks: FooterLink[];
  socialLinks: SocialLink[];
  copyrightText: string;
  brandTagline: string;
}

// --- Main Site Content Structure (Revised for v0.01) ---
export interface HomeV001Content {
  heroSection: HeroV001Content;
  whatIsMod36Section: WhatIsMod36V001Content;
  buildrSection: BuildrSectionContent;
  whyModularSection: WhyModularSectionContent;
  communityInvitationSection: CommunityInvitationV001Content;
  roadmapPreviewSection: RoadmapPreviewV001Content;
  footerSection: FooterV001Content;
}


// --- Structures for existing pages/modals (to keep them functional if needed) ---
// These are from the previous "Mod36: The Modular Design System for Anything and Everything" version
// And are kept for reference or if those pages/modals are still used.
export interface HeroSectionRevisedContent {
  headline: string;
  tagline: string;
  introParagraph: string[];
  backgroundVisualHint: string;
  ctaButtons?: CTAButton[];
}
export interface CoreFeatureItem {
  title: string;
  description: string;
  iconName: string;
}
export interface CoreFeaturesSectionContent {
  title: string;
  features: CoreFeatureItem[];
  visualDataAiHint?: string;
}
export interface CallToActionContent {
  title: string;
  mainText: string;
  ctaButton: CTAButton;
  visualDataAiHint?: string;
}
export interface FooterV0Content {
  brandLine: string;
  links: FooterLink[];
  socialLinks: SocialLink[];
  copyrightText: string;
}
export interface HomeRevisedContent {
  heroSection: HeroSectionRevisedContent;
  keyFeaturesSection: CoreFeaturesSectionContent;
  communitySection: CallToActionContent;
  footerSection: FooterV0Content;
}
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
export interface WhitepaperSubSectionContent {
  title?: string;
  paragraphs: string[];
  listItems?: string[];
}
export interface WhitepaperSectionContent {
  id: string;
  title: string;
  paragraphs?: string[];
  subsections?: WhitepaperSubSectionContent[];
  listItems?: string[];
}
export interface WhitepaperPageContent {
  pageTitle: string;
  pageTagline: string;
  backButtonText: string;
  sections: WhitepaperSectionContent[];
  finalTagline: string;
}
// --- AppNameMeta and Root Site Content Interface ---
export interface AppNameMeta {
  appName: string;
  brandTagline: string;
  meta: {
    description: string;
  };
}

export interface SiteContent extends AppNameMeta {
  homeV001: HomeV001Content; // Current active homepage
  home?: HomeRevisedContent; // Previous homepage structure, kept for reference
  manifestoPage: ManifestoPageContent;
  whitepaperPage: WhitepaperPageContent;
  modals: ModalsContent;
  realitiesDataForAI: RealitiesDataForAI;
}


// --- Site Content Data (v0.01 Focus) ---
export const siteContent: SiteContent = {
  appName: "Mod36",
  brandTagline: "Designing the Modular Future",
  meta: {
    description: "Mod36 is a global platform for modular innovation across architecture, technology, AI, and Web3. Join us in designing the modular future.",
  },
  homeV001: {
    heroSection: {
      headline: "Design the Modular Future",
      subheadline: "Mod36 is a global platform for modular innovation across architecture, technology, AI, and Web3.",
      ctaButtons: [
        { text: "Explore Mod36", href: "#what-is-mod36", variant: "default", icon: "Search" },
        { text: "Join the Community", href: "#community-invitation", variant: "outline", icon: "Users" }
      ],
      visualDataAiHint: "abstract modular system pulsing grid"
    },
    whatIsMod36Section: {
      mainParagraphs: [
        "Mod36 is a modular ecosystem that gives creators the tools to build future-proof systems.",
        "From buildings and digital tools to AI models and Web3 networks, Mod36 brings it all together — system by system."
      ],
      iconSubsections: [
        { title: "Architecture", iconName: "Building2", description: "Reimagining physical spaces with modular, sustainable, and culturally-aware designs." },
        { title: "Artificial Intelligence", iconName: "BrainCircuit", description: "Developing AI tools and models that are ethical, context-aware, and enhance human creativity." },
        { title: "Web3 & Decentralization", iconName: "Network", description: "Building decentralized networks, DAOs, and governance models with modular components." },
        { title: "Open Source & Collaboration", iconName: "Github", description: "Fostering a global community to share, iterate, and co-create modular solutions openly." }
      ],
      visualDataAiHint: "grid structure morphing industries"
    },
    buildrSection: {
      title: "Buildr: The First Initiative",
      introParagraph: "Buildr is Mod36’s first initiative — a collaborative community where creators take on real challenges, share modular solutions, and prototype ideas that can scale.",
      ctaButtons: [
        { text: "Join Buildr", href: "#community-invitation", variant: "default", icon: "Users2" }, // Points to community section for now
        { text: "View Challenges", href: "#", variant: "outline", icon: "ListChecks" } // Placeholder for challenges page/modal
      ],
      visualDataAiHint: "interactive challenge cards system building"
    },
    whyModularSection: {
      title: "Why Modular?",
      mainParagraphs: [
        "Modular thinking means designing with adaptability, openness, and intelligence.",
        "It means tools that grow with the world. Ideas that scale. Systems that evolve.",
        "Mod36 turns this philosophy into action."
      ],
      visualDataAiHint: "modules snapping together system expanding"
    },
    communityInvitationSection: {
      title: "Join the Mod36 Community",
      mainParagraphs: [
        "Creators from architecture, design, tech, and beyond are building the future together.",
        "By joining, you get access to tools, events, collaborations, and early challenges."
      ],
      ctaButtons: [
        // Example: Link to a Circle community and a generic early access form/page
        { text: "Join the Community", href: "https://mod36.circle.so", variant: "default", icon: "Users", target: "_blank" },
        { text: "Get Early Access", href: "#", variant: "outline", icon: "Sparkles" } // Placeholder
      ]
    },
    roadmapPreviewSection: {
      title: "Roadmap Preview: v0.01 → v1",
      stages: [
        { version: "v0.0.1", title: "Foundation", description: "Landing site live, Buildr community portal access initiated.", status: "Live Now" },
        { version: "v0.1.1", title: "Toolkit Alpha", description: "Challenge submissions open, initial community toolkit released.", status: "Upcoming" },
        { version: "v0.1.2", title: "Library Launch", description: "Modular Design Library (alpha) available to early contributors.", status: "Upcoming" },
        { version: "v1.0", title: "Protocol Expansion", description: "Smart tools, Stellar integration, and modular protocol development.", status: "Upcoming" }
      ]
    },
    footerSection: {
      navLinks: [
        { text: "About", href: "#what-is-mod36" },
        { text: "Buildr", href: "#buildr" },
        { text: "Challenges", href: "#" }, // Placeholder
        { text: "Join", href: "#community-invitation" }
      ],
      socialLinks: [
        { name: "Circle", iconName: "Link", url: "https://mod36.circle.so", ariaLabel: "Mod36 Community on Circle" },
        { name: "Discord", iconName: "MessageSquare", url: "#", ariaLabel: "Mod36 Discord Server" }, // Placeholder
        { name: "GitHub", iconName: "Github", url: "https://github.com/mod36", ariaLabel: "Mod36 on GitHub" },
        { name: "Mastodon", iconName: "Share2", url: "#", ariaLabel: "Mod36 on Mastodon" } // Placeholder, using Share2 as generic
      ],
      copyrightText: `© ${new Date().getFullYear()} Mod36 – Modular Futures Co.`,
      brandTagline: "36 Modules. Infinite Futures.",
    }
  },
  // Keep other page content structures like manifestoPage, whitepaperPage, etc.
  // These are not directly part of the v0.0.1 landing page redesign but might be linked or used elsewhere.
  manifestoPage: {
    title: "Mod36 Executive Summary",
    subtitle: "Modular Intelligence for a Changing World.",
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
        heading: "A Call to Action",
        paragraphs: [
          "Mod36 is not a product. It is a movement. A shared language for rethinking how we shape life on Earth—responsibly, intelligently, and together.",
          "This is a call to architects of the future—those willing to build not just structures or software, but systems of meaning."
        ],
        isBold: true,
      },
    ],
    closingStatement: {
      line1: "36 Realities. One Modular Future.",
      line2: "Welcome to Mod36."
    },
    signature: "The Mod36 Initiative",
  },
  whitepaperPage: {
    pageTitle: "Mod36: A Universal Modular Design System for the Future",
    pageTagline: "Design Tools for Anything. Build Systems for Every Future.",
    backButtonText: "← Back to Home",
    sections: [
      {
        id: "executive-summary",
        title: "1. Executive Summary",
        paragraphs: [
          "Mod36 is an innovative, flexible modular design framework created to empower individuals and organizations across all domains—architecture, artificial intelligence, Web3, technology, education, culture, and beyond. Unlike narrowly focused solutions, Mod36 offers a versatile toolkit and methodology for designing tools, systems, and solutions for any challenge the future presents.",
          "By embracing modularity, systems thinking, AI-enhanced design, and deep cultural integration, Mod36 facilitates the creation of adaptable, scalable, and contextually relevant innovations. Whether developing sustainable environments, AI workflows, decentralized networks, or novel educational paradigms, Mod36 supports creators in prototyping, iterating, and deploying impactful solutions.",
          "This whitepaper outlines the philosophy, system architecture, potential applications, and roadmap of Mod36, inviting collaboration and continuous evolution of the framework."
        ]
      },
      {
        id: "introduction",
        title: "2. Introduction",
        subsections: [
          {
            title: "2.1 Context",
            paragraphs: [
              "Today’s rapidly evolving world presents multifaceted challenges and opportunities that span technology, environment, society, and culture. Traditional design methods often lack the flexibility and interdisciplinary integration needed to address these complexities comprehensively. Furthermore, the accelerating pace of innovation demands frameworks that support continuous adaptation and diverse stakeholder collaboration.",
              "Mod36 responds to this need by providing a universal modular design system. It reimagines design as a process not confined to any single discipline or problem space but as an open-ended toolkit adaptable to a wide spectrum of creative and systemic endeavors."
            ]
          },
          {
            title: "2.2 Purpose",
            paragraphs: [
              "The purpose of Mod36 is to democratize and expand the capacity to design effective tools and systems for the future. It aims to bridge diverse fields by fostering modularity, intelligent assistance, and cultural resonance, thus enabling creators to tackle novel problems with agility and depth."
            ]
          }
        ]
      },
      {
        id: "philosophy",
        title: "3. The Philosophy of Mod36",
        subsections: [
          {
            title: "3.1 Modularity as a Design Paradigm",
            paragraphs: ["At its core, Mod36 adopts modularity as a foundational principle. Breaking down complexity into interoperable components allows for flexible recombination, scalability, and tailored adaptation to unique contexts and goals."]
          },
          {
            title: "3.2 Systems Thinking Across Domains",
            paragraphs: ["Mod36 encourages holistic understanding by framing problems and solutions within interconnected systems. This approach reveals emergent patterns and leverage points across disciplines, empowering designers to craft integrated, resilient innovations."]
          },
          {
            title: "3.3 Cultural Intelligence and Inclusion",
            paragraphs: ["Recognizing that culture shapes how solutions succeed, Mod36 embeds cultural awareness and inclusivity at every stage. It values indigenous knowledge, local practices, and diverse worldviews as essential elements of sustainable and meaningful design."]
          },
          {
            title: "3.4 AI-Augmented Creativity",
            paragraphs: ["Artificial intelligence acts as a collaborator within Mod36, offering insights, optimization, and generative possibilities. AI enhances human creativity without replacing it, fostering explorations beyond traditional limits."]
          },
          {
            title: "3.5 Open Collaboration and Evolution",
            paragraphs: ["Mod36 is conceived as an open, evolving framework, welcoming contributions from designers, technologists, educators, artists, and communities worldwide. Its open-source ethos promotes continuous refinement and shared ownership."]
          }
        ]
      },
      {
        id: "system-architecture",
        title: "4. System Architecture and Components",
        subsections: [
          {
            title: "4.1 Modular Toolkit",
            paragraphs: ["Mod36 provides a library of modular components—design templates, code snippets, workflow modules, conceptual frameworks—that can be combined to create complex solutions in architecture, AI, Web3, and other fields."]
          },
          {
            title: "4.2 AI-Enhanced Design Engine",
            paragraphs: ["Integrated AI tools assist users in modeling scenarios, optimizing designs, and generating novel configurations, accelerating iteration cycles and expanding creative horizons."]
          },
          {
            title: "4.3 Cultural Context Layer",
            paragraphs: ["A dynamic knowledge base enriches modules with localized cultural data, enabling context-aware adaptation and fostering culturally responsive outcomes."]
          },
          {
            title: "4.4 Integration Interfaces",
            paragraphs: ["Mod36 supports interoperability with existing design software, coding environments, and collaboration platforms, ensuring smooth adoption and extensibility."]
          }
        ]
      },
      {
        id: "use-cases",
        title: "5. Use Cases",
        subsections: [
          {
            title: "5.1 Architecture and Urban Planning",
            paragraphs: ["Design modular, sustainable buildings and communities that adapt to environmental and cultural contexts using flexible components and AI optimization."]
          },
          {
            title: "5.2 Artificial Intelligence",
            paragraphs: ["Develop AI workflows and models informed by ethical frameworks, cultural insights, and system-level thinking for responsible innovation."]
          },
          {
            title: "5.3 Web3 and Decentralized Systems",
            paragraphs: ["Build modular smart contracts, governance models, and decentralized applications that can evolve with community needs and technological progress."]
          },
          {
            title: "5.4 Education and Knowledge Systems",
            paragraphs: ["Create modular curricula, learning tools, and collaborative platforms that empower learners and educators across disciplines."]
          },
          {
            title: "5.5 Cultural and Creative Industries",
            paragraphs: ["Foster new forms of storytelling, artistic expression, and cultural preservation by combining modular digital and physical media."]
          }
        ]
      },
      {
        id: "roadmap",
        title: "6. Roadmap",
        listItems: [
          "v0 (Current): Establish core framework, publish whitepaper, initiate community building.",
          "v1 (6–12 Months): Develop modular component libraries, AI design tools, cultural knowledge integration, pilot projects.",
          "v2 (1–2 Years): Expand cross-domain adoption, build integration interfaces, grow global contributor network.",
          "Future: Mature into a comprehensive universal design ecosystem, supporting global innovation, sustainability, and cultural resilience."
        ]
      },
      {
        id: "conclusion",
        title: "7. Conclusion",
        paragraphs: [
          "Mod36 redefines design as a universal, modular, and intelligent process capable of addressing the complexity and diversity of future challenges. By equipping creators with flexible tools and inclusive frameworks, it enables the co-creation of resilient systems that honor cultural depth and technological potential."
        ]
      }
    ],
    finalTagline: "Mod36: Design tools for anything. Build systems for every future."
  },
  modals: {
    versionLog: {
      title: "Version Logs",
      description: "Tracking the evolution of the Mod36 initiative.",
      logs: [
        { version: "v0.0.1", date: "2024-08-04", notes: ["Landing page v0.0.1 redesign. Focus on modularity, AI, Web3, Buildr initiative.", "Switched to light theme with charcoal primary and blue accent."]},
        { version: "v0.7.0", date: "2024-08-03", notes: ["Added animated Whitepaper page with full content.", "Updated homepage CTAs to link to the new Whitepaper page."]},
        { version: "v0.6.1", date: "2024-08-02", notes: ["Removed visual placeholder text from Core Features and Call to Action sections."]},
        { version: "v0.6.0", date: "2024-08-02", notes: ["Major landing page revision to 'Modular Design System for Anything and Everything' theme.", "Updated Hero, Core Features, and Call to Action sections.", "Streamlined homepage structure."]},
        { version: "v0.5.0", date: "2024-08-01", notes: ["Major landing page overhaul to 'Mod36 v0' structure and content.", "Updated site metadata for v0 branding.", "Removed Problem, HowItWorks, and RealitiesGrid sections from homepage."]},
        { version: "v0.4.1", date: "2024-07-31", notes: ["Fixed 'React is not defined' error in RealitiesGridSection."]},
        { version: "v0.4.0", date: "2024-07-31", notes: ["Major landing page overhaul to new 7-section structure.", "Updated content and components as per new brief.", "Removed RealitiesGridSection from homepage."]},
        { version: "v0.3.2", date: "2024-07-30", notes: ["Fixed Lighthouse reported issues: Dynamic imports for modals, added robots.txt, improved link descriptions."]},
        { version: "v0.3.1", date: "2024-07-30", notes: ["Integrated AI Insight Generator modal, triggered from Realities Grid."]},
        { version: "v0.3.0", date: "2024-07-30", notes: ["Redesigned '36 Realities' section with detailed content and interactive grid.", "Updated RealityItem interface and data structure."]},
        { version: "v0.2.0", date: "2024-07-29", notes: ["Major landing page redesign to 9-section structure based on new brief.", "Centralized all site content into site-content.ts with new data structures for each section."]},
        { version: "v0.1.0", date: "2024-07-28", notes: ["Initial site build: Hero, About, Modules, Manifesto, Footer.", "Implemented scroll-based animations with Framer Motion.", "Added keyboard shortcuts for Version Log (v) and Easter Egg (Shift+M).", "Integrated AI Poeticizer feature.", "Centralized content into site-content.ts", "Added full Manifesto page."] },
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
  realitiesDataForAI: { // Kept for potential future use with AI features
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
  },
  // home is previous version
  home: {
    heroSection: {
      headline: "Mod36: The Modular Design System for Anything and Everything",
      tagline: "Design tools for any challenge. Build systems for every future.",
      introParagraph: [
        "Mod36 is a powerful, flexible modular design framework that empowers creators, innovators, and builders across all fields — architecture, AI, Web3, technology, education, culture, and beyond. It’s not limited to one problem or industry. Instead, Mod36 provides the building blocks and intelligent tools you need to design solutions, tools, and systems for anything the future demands.",
        "Whether you’re developing sustainable buildings, crafting AI workflows, creating decentralized platforms, or imagining new ways to educate and connect communities, Mod36 adapts with you. It’s a living system designed to evolve with your ideas, scale with your vision, and help you prototype the future — one modular piece at a time."
      ],
      backgroundVisualHint: "abstract intelligent system dark connections",
      ctaButtons: [
        { text: "Read the Whitepaper", href: "/whitepaper", variant: "default", icon: "FileText" },
        { text: "Join the Community", href: "#footer-v0", variant: "outline", icon: "Users" }
      ]
    },
    keyFeaturesSection: {
      title: "Core Features",
      features: [
        { title: "Universal Modularity", description: "Break complex challenges into flexible, reusable components that can be combined and adapted.", iconName: "Puzzle" },
        { title: "Cross-Disciplinary", description: "Use the same framework for architecture, software, social systems, and more.", iconName: "Library" },
        { title: "AI-Enhanced Design", description: "Harness artificial intelligence to explore possibilities and optimize solutions.", iconName: "BrainCircuit" },
        { title: "Culturally Rooted", description: "Designed to respect and integrate diverse cultural perspectives and knowledge systems.", iconName: "Globe2" },
        { title: "Open and Collaborative", description: "Built for sharing, iteration, and collective innovation.", iconName: "Users2" },
      ],
      visualDataAiHint: "interconnected modules abstract",
    },
    communitySection: {
      title: "Join the Movement",
      mainText: "Join the Mod36 community and start designing the future — whatever it looks like.",
      ctaButton: { text: "Get Involved", href: "#footer-v0", variant: "default", icon: "Users" },
      visualDataAiHint: "community collaboration abstract",
    },
    footerSection: {
      brandLine: "Mod36 – Design. Connect. Evolve.",
      links: [
        { text: "Whitepaper", href: "/whitepaper" },
        { text: "GitHub", href: "https://github.com/mod36" },
        { text: "Community", href: "#footer-v0" },
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
};
