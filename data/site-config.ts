export const siteConfig = {
  name: "Atendra Maurya",
  initials: "AM",
  title: "Founder & Technology Entrepreneur",
  location: "Delhi, India",
  email: "atendra057@gmail.com",
  phone: "+91 9161644456",
  phoneHref: "tel:+919161644456",
  codeauxUrl: "https://codeaux.online",
  linkedinUrl: "https://www.linkedin.com/in/atendra-maurya/",
};

export type Venture = {
  name: string;
  role: string;
  description: string;
  href?: string;
  status: string;
};

export const ventures: Venture[] = [
  {
    name: "CodeAux",
    role: "Founder & CEO",
    description:
      "A digital development agency building considered websites, web applications, mobile applications, and practical digital systems for businesses.",
    href: siteConfig.codeauxUrl,
    status: "Operating venture",
  },
  {
    name: "Intent",
    role: "Founder",
    description:
      "An early-stage technology venture exploring the future of social connection through more thoughtful digital experiences.",
    status: "In development",
  },
];

export type Experience = {
  role: string;
  organisation: string;
  period: string;
  description: string;
};

export const experience: Experience[] = [
  {
    role: "President",
    organisation: "Viksit Bharat Club · Motilal Nehru College, University of Delhi",
    period: "Jul 2025 — Present",
    description: "Leading the club’s work and its student community.",
  },
  {
    role: "Vice-President",
    organisation: "Algoverse · Computer Science Department Society, Motilal Nehru College",
    period: "Aug 2025 — Present",
    description: "Supporting a community centred on computer science and technical learning.",
  },
  {
    role: "Head Coordinator",
    organisation: "Viksit Bharat Club · Motilal Nehru College",
    period: "Aug 2024 — Aug 2025",
    description: "Coordinated the club’s initiatives and operations.",
  },
];

// Verified client work and product proof
export type CaseStudy = {
  id: string;
  badge: string;
  title: string;
  headline: string;
  description: string;
  videoSrc: string;
  browserUrl: string;
  tags: string[];
};

export const caseStudies: CaseStudy[] = [
  {
    id: "mindbridge-psychology",
    badge: "Clinical & Healthcare",
    title: "MindBridge Psychology",
    headline: "Evidence-based psychological care, built with warmth and instant trust.",
    description:
      "A serene, empathetic practice website featuring seamless session booking, RCI credential highlights, and approachable guidance for individuals seeking clinical care.",
    videoSrc: "/videos/mindbridge-psychology-scroll.mp4",
    browserUrl: "mindbridgepsychology.com",
    tags: ["Healthcare & Therapy", "RCI Accredited Trust", "Session Funnel"],
  },
  {
    id: "rasai-ai",
    badge: "Creative Tech & AI Studio",
    title: "RASAI — AI Creative Video Studio",
    headline: "10X brand AI video output in hours without a traditional production crew.",
    description:
      "A high-converting, dark-mode agency platform showcasing 600+ AI films and 30+ brand collaborations with instant client onboarding.",
    videoSrc: "/videos/rasai-ai-films-scroll.mp4",
    browserUrl: "rasai.ai",
    tags: ["Creative Tech", "600+ AI Films", "High-Impact UI"],
  },
  {
    id: "growzy-tech",
    badge: "B2B SaaS & Enterprise",
    title: "Growzy — Enterprise Revenue Engine",
    headline: "Bridging the gap between business logic and enterprise workflows.",
    description:
      "An enterprise-grade B2B SaaS platform driving over ₹12Cr+ in client pipeline with real-time metrics, workflow transparency, and high conversion.",
    videoSrc: "/videos/growzy-tech-scroll.mp4",
    browserUrl: "growzy.io",
    tags: ["B2B Enterprise", "₹12Cr+ Pipeline Driven", "SaaS Workflows"],
  },
  {
    id: "avinash-portfolio",
    badge: "Semiconductor R&D",
    title: "Avinash — Staff Silicon Design",
    headline: "Engineering precision in sub-micron silicon & standard cell libraries.",
    description:
      "A high-precision personal authority and executive technical portfolio showcasing 8+ years of FinFET layout engineering at Samsung Semiconductor and EDA methodology.",
    videoSrc: "/videos/avinash-portfolio-scroll.mp4",
    browserUrl: "avinash.design",
    tags: ["VLSI & Semiconductor", "Staff Engineer Authority", "High-Precision UI"],
  },
];

