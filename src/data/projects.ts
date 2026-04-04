export interface Project {
  title: string;
  description: string;
  longDescription: string;
  tech: string[];
  image: string;
  images?: { src: string; label: string; url?: string }[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    title: "PrimalMarket",
    description:
      "Designed and architected a peer-to-peer marketplace for trading card singles from the ground up. Defined the data models, transaction flow with escrow protection, and the full buyer/seller experience — from listing creation to secure checkout with tracked shipping. Also built a full admin dashboard with analytics graphs and a CMS for managing platform content. Led all product and UX decisions, focused on making complex transaction states feel simple.",
    longDescription: "",
    tech: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "REST API",
      "AWS Cognito",
      "Escrow System",
    ],
    image: "/images/primalmarket.png",
    liveUrl: "https://marketplace.primaltcg.com/",
    featured: true,
  },
  {
    title: "PrimalTCG",
    description:
      "Architected a community platform used by Primal TCG's active player base. Designed the card database schema, a multi-filter search system (element, rarity, type, turn count, text), and a deck builder with real-time validation, public/private sharing, and breakdown analytics. Drove all product and design decisions.",
    longDescription: "",
    tech: [
      "React",
      "Node.js",
      "Express",
      "MySQL",
      "Sequelize",
      "REST API",
      "Data Modeling",
    ],
    image: "/images/primaltcg.png",
    images: [
      { src: "/images/primaltcg.png", label: "Card Search", url: "https://primaltcg.com/search" },
      { src: "/images/primaltcg-deckbuilder.png", label: "Deck Builder", url: "https://primaltcg.com/build" },
    ],
    liveUrl: "https://primaltcg.com/search",
    featured: true,
  },
  {
    title: "Jackson Transformer",
    description:
      "Designed and built a modern, SEO-optimized business site for an electrical transformer manufacturer. Features product galleries with detailed specs, interactive before/after repair sliders, structured data for search engines, and a multi-step quote request form. Achieved 96+ Lighthouse scores across all categories.",
    longDescription: "",
    tech: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "SEO",
    ],
    image: "/images/jackson.png",
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
