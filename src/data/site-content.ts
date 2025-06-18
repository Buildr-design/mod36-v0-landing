// src/data/site-content.ts

export interface AppNameMeta {
  appName: string;
  meta: {
    description: string;
  };
}

export interface HeroSectionContent {
  title: string;
  subtitleLines: string[];
  scrollText: string;
}

export interface AboutSectionContent {
  title: string;
  bodyText: string;
  badgeText: string;
  diagramPlaceholder: string;
  diagramAltText: string;
}

export interface ModuleContent {
  id: string;
  name: string;
  tagline: string;
  description: string;
  imageHint: string;
  imageUrl?: string; 
}

export interface ModulesSectionContent {
  title: string;
  modules: ModuleContent[];
  exploreButtonText: string;
}

export interface ManifestoSectionContent { // For the homepage snippet
  title: string;
  lines: Array<{ text: string }>;
  ctaButtonText: string;
}

export interface SocialLink {
  name: string;
  Icon?: React.ComponentType<{ className?: string }>; 
  iconName?: string; 
  url: string;
  ariaLabel: string;
}

export interface FooterSectionContent {
  version: string;
  email: string;
  location: string;
  socialLinks: SocialLink[];
  copyrightText: string;
  lastUpdatedPrefix: string;
}

export interface HomeContent {
  heroSection: HeroSectionContent;
  aboutSection: AboutSectionContent;
  modulesSection: ModulesSectionContent;
  manifestoSection: ManifestoSectionContent; // Content for the homepage section/snippet
  footerSection: FooterSectionContent;
}

export interface ManifestoPageContent { // For the dedicated /manifesto page
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


export interface SiteContent extends AppNameMeta {
  home: HomeContent;
  manifestoPage: ManifestoPageContent;
  modals: ModalsContent;
}


export const siteContent: SiteContent = {
  appName: "mod36 studio",
  meta: {
    description: "mod36: A systems design company building modular futures from space, code, and culture.",
  },
  home: {
    heroSection: {
      title: "mod36 v0",
      subtitleLines: [
        "A systems design company",
        "building modular futures",
        "from space, code, and culture.",
      ],
      scrollText: "↓ SCROLL",
    },
    aboutSection: {
      title: "What is mod36?",
      bodyText: "mod36 is a systems design company.\nWe build modular ideas for a complex world.\nVersion Zero is where we test, sketch, and think in the open.",
      badgeText: "v0.1 experimental",
      diagramPlaceholder: "[System Map Placeholder]",
      diagramAltText: "abstract lines",
    },
    modulesSection: {
      title: "Modules",
      modules: [
        { id: 'habitat', name: 'mod36/habitat', tagline: 'EcoHab Africa', description: 'Pioneering sustainable and modular living solutions tailored for the African continent. Focusing on eco-friendly materials, community-centric design, and resilient infrastructure.', imageHint: 'modern architecture africa', imageUrl: 'https://placehold.co/600x400.png' },
        { id: 'net', name: 'mod36/net', tagline: 'Buildr Community', description: 'A decentralized network fostering collaboration and knowledge sharing among builders, designers, and innovators in the modular construction and systems design space.', imageHint: 'community network data', imageUrl: 'https://placehold.co/600x400.png' },
        { id: 'code', name: 'mod36/code', tagline: 'A Stealth Tech Platform', description: 'Developing a cutting-edge software platform to streamline the design, manufacturing, and deployment of modular systems. Currently in stealth mode.', imageHint: 'abstract code matrix', imageUrl: 'https://placehold.co/600x400.png' },
      ],
      exploreButtonText: "Explore →",
    },
    manifestoSection: { // This is for the homepage snippet
      title: "The Mod36 Manifesto (Signal)",
      lines: [ // Ensure this 'lines' array is present and correct
        { text: "We start where systems break." },
        { text: "We see patterns in complexity." },
        { text: "We build from first principles." },
      ],
      ctaButtonText: "Read the Full Manifesto",
    },
    footerSection: {
      version: "mod36 / v0.1",
      email: "hello@mod36.xyz",
      location: "Built in Nigeria with global collaborators.",
      socialLinks: [
        { name: 'LinkedIn', iconName: 'Linkedin', url: 'https://linkedin.com/company/mod36', ariaLabel: 'Mod36 LinkedIn Profile' },
        { name: 'GitHub', iconName: 'Github', url: 'https://github.com/mod36', ariaLabel: 'Mod36 GitHub Profile' },
        { name: 'Threads', iconName: 'Send', url: 'https://threads.net/@mod36', ariaLabel: 'Mod36 Threads Profile' },
        { name: 'X', iconName: 'Twitter', url: 'https://x.com/mod36', ariaLabel: 'Mod36 X (Twitter) Profile' },
        { name: 'Mastodon', iconName: 'Send', url: 'https://mastodon.social/@mod36', ariaLabel: 'Mod36 Mastodon Profile' },
        { name: 'Facebook', iconName: 'Facebook', url: 'https://facebook.com/mod36', ariaLabel: 'Mod36 Facebook Profile' },
        { name: 'Instagram', iconName: 'Instagram', url: 'https://instagram.com/mod36', ariaLabel: 'Mod36 Instagram Profile' },
        { name: 'Substack', iconName: 'Send', url: 'https://mod36.substack.com', ariaLabel: 'Mod36 Substack Profile' },
      ],
      copyrightText: "© {year} mod36. All rights reserved.",
      lastUpdatedPrefix: "Last updated:",
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
      experimentalNote: "These are experimental concepts. Not actual projects (yet!).",
    },
  }
};
