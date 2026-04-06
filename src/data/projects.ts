export interface Project {
  title: string;
  description: string;
  longDescription: string;
  tech: string[];
  image: string;
  images?: { src: string; label: string; url?: string; description?: string }[];
  highlights?: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    title: "PrimalMarket",
    description:
      "Built a full-stack peer-to-peer marketplace for trading card sales with the Primal TCG team. Designed and implemented the full transaction flow from listings to checkout, including Stripe and PayPal payments and an escrow system that protects both buyers and sellers. Also developed internal tools so the team can manage the platform without engineering support.",
    longDescription: "",
    tech: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "REST API",
      "AWS Cognito",
      "Stripe",
      "PayPal",
    ],
    highlights: [
      "Designed MongoDB schema for listings, transactions, escrow state, and shipping workflows",
      "Built multi-item cart and checkout with Stripe and PayPal integration",
      "Implemented escrow system that holds funds on purchase and auto-releases after 14 days",
      "Created admin dashboard with sales analytics, user moderation, and CMS tools",
      "Developed buyer/seller messaging system tied to active transactions",
      "Used AI-assisted tools to accelerate development and debugging",
    ],
    image: "/images/primalmarket.webp",
    liveUrl: "https://marketplace.primaltcg.com/",
    featured: true,
  },
  {
    title: "PrimalTCG",
    description:
      "Built key features for the Primal TCG community platform alongside the team. The two biggest pieces were a card search system and a deck builder — both used daily by the player base.",
    longDescription: "",
    tech: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "REST API",
      "Data Modeling",
    ],
    image: "/images/primaltcg.webp",
    images: [
      {
        src: "/images/primaltcg.webp",
        label: "Card Search",
        url: "https://primaltcg.com/search",
        description: "Built the card database schema and a multi-filter search system — players can filter by element, rarity, type, turn count, and text to find any card in the library. Built with the Primal TCG team.",
      },
      {
        src: "/images/primaltcg-deckbuilder.webp",
        label: "Deck Builder",
        url: "https://primaltcg.com/build",
        description: "A deck builder with real-time validation, public/private sharing, and breakdown analytics. Players can build, tweak, and share decks with the community. Built with the Primal TCG team.",
      },
    ],
    liveUrl: "https://primaltcg.com/search",
    featured: true,
  },
  {
    title: "Jackson Transformer",
    description:
      "Built a modern business site for an electrical transformer manufacturer. Includes product galleries with specs, interactive before/after repair sliders, structured data for SEO, and a multi-step quote request form. Scores 96+ on Lighthouse across the board.",
    longDescription: "",
    tech: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "SEO",
    ],
    image: "/images/jackson.webp",
    featured: true,
  },
  {
    title: "Digital Binder",
    description:
      "A collection management app that lets users organize, track, and showcase their trading card collections with a clean, intuitive interface.",
    tech: [
      "React",
      "Node.js",
      "Express",
      "MySQL",
      "Sequelize",
      "Bootstrap",
    ],
    longDescription: "",
    image: "/images/digitalbinder.png",
    githubUrl: "https://github.com/Eterlop12400/digital_binder",
    featured: false,
  },
  {
    title: "Yu-Gi-Oh! Card Vault",
    description:
      "A card discovery app powered by the YGOPRODeck API. Users can browse random cards or search for specific ones with a clean, accessible interface.",
    tech: ["React", "JavaScript", "REST API", "CSS"],
    longDescription: "",
    image: "/images/yugioh.png",
    liveUrl: "https://eterlop12400.github.io/FS-Project-Portfolio-4/#/Home",
    githubUrl: "https://github.com/Eterlop12400/FS-Project-Portfolio-4",
    featured: false,
  },
  {
    title: "Fresh To Market",
    description:
      "A responsive e-commerce site for fresh produce with product search, user authentication, and shopping cart functionality.",
    tech: ["Bootstrap", "JavaScript", "HTML/CSS", "Responsive Design"],
    longDescription: "",
    image: "/images/freshtomarket.png",
    liveUrl: "https://eterlop12400.github.io/about_us.html",
    githubUrl: "https://github.com/Eterlop12400/fresh_to_market",
    featured: false,
  },
];
