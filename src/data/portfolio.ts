export type SkillIcon =
  | "layers"
  | "database"
  | "hub"
  | "key"
  | "pulse"
  | "spark"
  | "cloud"
  | "terminal";

export type CertIcon = "cloud" | "spark" | "badge" | "aws";

export type ChipTone = "live" | "neutral" | "research";

export interface PersonalInfo {
  name: string;
  title: string;
  tagline: string;
  location: string;
  email: string;
  linkedin: string;
  github: string;
  photo: string;
  photoAlt: string;
}

export interface NavItem {
  id: string;
  label: string;
}

export interface Chip {
  label: string;
  tone: ChipTone;
}

export interface Metric {
  label: string;
  value: string;
  detail: string;
}

export interface Principle {
  title: string;
  body: string;
  tag: string;
  icon: "layers" | "bolt" | "shield";
}

export interface Workstream {
  title: string;
  points: readonly string[];
}

export interface ExperienceEntry {
  company: string;
  role: string;
  dates: string;
  location: string;
  stack: readonly string[];
  highlights: readonly string[];
  workstreams: readonly Workstream[];
  variant: "feature" | "compact";
}

export interface SkillGroup {
  name: string;
  items: readonly string[];
  icon: SkillIcon;
}

export interface ResearchResult {
  label: string;
  value: string;
}

export interface ResearchPublication {
  title: string;
  venue: string;
  description: string;
  link: string;
  tags: readonly string[];
  results: readonly ResearchResult[];
}

export interface ProjectEntry {
  name: string;
  category: string;
  summary: string;
  points: readonly string[];
  stack: readonly string[];
}

export interface Certification {
  name: string;
  icon: CertIcon;
}

export interface Education {
  degree: string;
  school: string;
}

export interface SiteCopy {
  brand: string;
  monogramAlt: string;
  timezone: string;
  getInTouch: string;
  downloadResume: string;
  resumeHref: "/syed_salman_ali_zaidi_resume.pdf";
  menuOpen: string;
  menuClose: string;
  copy: string;
  copied: string;
  copyEmail: string;
  terminalPrompt: string;
  aboutKicker: string;
  aboutTitle: string;
  aboutParagraphs: readonly string[];
  baseLabel: string;
  educationLabel: string;
  principlesLabel: string;
  principles: readonly Principle[];
  logLabel: string;
  logLines: readonly string[];
  experienceKicker: string;
  experienceTitle: string;
  experienceIntro: string;
  earlyCareerLabel: string;
  skillsKicker: string;
  skillsTitle: string;
  skillsIntro: string;
  researchKicker: string;
  researchTitle: string;
  researchIntro: string;
  publicationLinkLabel: string;
  researchSideLabel: string;
  projectsKicker: string;
  projectsTitle: string;
  projectsIntro: string;
  certsKicker: string;
  certsTitle: string;
  certsIntro: string;
  contactKicker: string;
  contactTitle: string;
  contactIntro: string;
  endpointsLabel: string;
  emailLabel: string;
  locationLabel: string;
  formName: string;
  formEmail: string;
  formOrg: string;
  formMessage: string;
  formNamePlaceholder: string;
  formEmailPlaceholder: string;
  formOrgPlaceholder: string;
  formMessagePlaceholder: string;
  formSubmit: string;
  formOpened: string;
  formNeedsEmail: string;
  footerBlurb: string;
  footerBuilt: string;
  footerRights: string;
}

const personal: PersonalInfo = {
  name: "Syed Salman Ali Zaidi",
  title: "Backend Engineer · Builder",
  tagline: "Building scalable systems.",
  location: "Karachi, Pakistan",
  email: "syedsalman1823@gmail.com",
  linkedin: "https://linkedin.com/in/syedsalmanalizaidi",
  github: "https://github.com/salmanalizaidi",
  photo: "/My Image.jpeg",
  photoAlt: "Syed Salman Ali Zaidi",
};

const education: Education = {
  degree: "Bachelor's in Computer Science",
  school: "FAST University, Karachi",
};

const experience: readonly ExperienceEntry[] = [
  {
    company: "Talverse",
    role: "Software Engineer",
    dates: "October 2024 – Present",
    location: "Karachi, Pakistan",
    stack: [
      ".NET 8",
      "C#",
      "ABP Framework",
      "SQL Server",
      "PostgreSQL",
      "Keycloak",
      "NATS JetStream",
      "gRPC",
      "Stripe",
      "PayPal/Braintree",
      "ELK Stack",
      "OpenTelemetry",
      "React",
      "Next.js",
      "AngularJS",
    ],
    highlights: [
      "Multi-gateway integration: Stripe and PayPal both integrated as payment gateways.",
      "Multi-route architecture: built routing logic to direct transactions across multiple Stripe accounts, including geographic routing (All/All account creation, then demotion to the RoW region).",
      "Stripe webhook infrastructure: built the webhook initialization endpoint to handle async payment events.",
      "Migration path: implemented /v1/users/check-migration-required so gateway migration does not disrupt existing users.",
      "Business problem solved: one charity platform needed different payment routes per region, campaign, and donor type. One gateway or one account was not enough.",
      "Built and shipped scalable REST APIs supporting thousands of concurrent users on a live donation platform, developing services in .NET 8/ABP Framework and integrating Stripe and PayPal/Braintree payment gateways end-to-end.",
      "Integrated Keycloak IAM into a live production application — implementing OAuth 2.0/OIDC flows, RBAC, and custom OTP authenticators — which cut authentication-related support tickets and eliminated a class of login failures.",
      "Resolved checkout-blocking SQL Server performance bottlenecks affecting thousands of active users, applying query optimization, execution plan analysis, and index tuning across SQL Server and PostgreSQL, restoring revenue-impacting donation flows.",
      "Built a custom Notification SDK (NuGet package) using NATS JetStream with failover mechanisms, and used gRPC for service-to-service communication across microservices, reducing notification delivery failures in production.",
      "Implemented a custom rate limiter to protect against DDoS attacks, and instrumented services with the ELK Stack and OpenTelemetry for production logging, monitoring API latency and error rates across the platform.",
      "Applied and documented design patterns (Repository, Strategy, Factory) and enforced SOLID and clean-code practices across .NET services; led code reviews and mentored junior engineers on API design, authentication concepts, and code quality via SonarQube.",
      "Contributed to frontend development using React/Next.js and AngularJS, including cross-site analytics tracking with GA4/GTM integration and a geo-detection popup system.",
      "Resolved production OTP incidents by integrating Messente and Respond.io, ensuring minimal downtime during live outages; recognized with five “Shout” awards for impactful engineering contributions.",
    ],
    workstreams: [],
    variant: "feature",
  },
  {
    company: "Talverse",
    role: "Software Engineer Intern (iOS)",
    dates: "October 2024 – February 2025",
    location: "Karachi, Pakistan",
    stack: ["Swift", "UIKit", "Xcode", "SQL Server", "REST"],
    highlights: [
      "Built and consumed backend REST APIs to support iOS application features, working with SQL Server for data storage and retrieval across the application stack.",
      "Applied Swift/UIKit fundamentals to develop, debug, and maintain application features end-to-end, using Xcode for coding, testing, and deployment workflows.",
      "Worked closely with cross-functional product and design teams to translate requirements into functional, seamless interfaces that met business and UX standards.",
    ],
    workstreams: [],
    variant: "feature",
  },
  {
    company: "Sastaticket",
    role: "Backend Developer Intern",
    dates: "July 2022 – September 2022",
    location: "Karachi, Pakistan",
    stack: ["Python", "REST"],
    highlights: [
      "Accelerated feature delivery on a high-traffic travel booking platform by building RESTful APIs in Python, collaborating across sales and development teams to ship end-to-end functionality within sprint cycles.",
    ],
    workstreams: [],
    variant: "feature",
  },
];

const skills: readonly SkillGroup[] = [
  {
    name: "Backend",
    icon: "layers",
    items: ["Java", "Spring Boot", ".NET 8", "C#", "ABP Framework", "Python", "Stripe", "PayPal"],
  },
  {
    name: "Databases",
    icon: "database",
    items: ["PostgreSQL", "SQL Server", "MongoDB", "Redis"],
  },
  {
    name: "Messaging",
    icon: "hub",
    items: ["NATS JetStream"],
  },
  {
    name: "Auth/IAM",
    icon: "key",
    items: ["Keycloak", "OAuth 2.0", "OIDC", "RBAC"],
  },
  {
    name: "Cloud/DevOps",
    icon: "cloud",
    items: ["AWS", "EKS", "Docker", "Kubernetes"],
  },
  {
    name: "Monitoring",
    icon: "pulse",
    items: ["ELK Stack", "OpenTelemetry"],
  },
  {
    name: "AI/ML",
    icon: "spark",
    items: ["MLflow", "DVC", "Azure ML", "BERT", "Transformers"],
  },
  {
    name: "Frontend",
    icon: "terminal",
    items: ["React", "Next.js", "Tailwind CSS"],
  },
];

const research: ResearchPublication = {
  title:
    "LLM-Powered Protein Classification: A Deep Learning Framework for Kinases, Phosphatases, and Transmembrane Proteins",
  venue: "IEEE",
  description:
    "Accurate functional classification of proteins is essential in biomedicine and therapeutic development. Traditional computational approaches often face challenges in scalability and identifying novel sequences. This study evaluates the performance of several pre-trained Large Language Models (LLMs) on two key classification tasks: kinase/phosphatase differentiation and transmembrane protein identification. We fine-tuned and assessed CAFA-5, ChatterjeLab/PepMLM, and ChatterjeLab/MeMDLM using UniProtKB for kinase/phosphatase data and ActTRANS for transmembrane proteins. In contrast to earlier studies such as ActTRANS which focused on binary classification using frozen embeddings and SVMs. The proposed approach employs an end-to-end neural classifier in a broader multi-class setting, demonstrating greater generalizability across protein families. The integration of LLMs with protein sequence analysis offers a scalable and accurate solution that can accelerate drug discovery and optimize therapeutic strategies. CAFA-5 consistently outperformed other models, ranking first in both tasks. It achieved 90% accuracy, 89.74% balanced accuracy, and an Matthews correlation coefficient (MCC) of 0.7995 in kinase/phosphatase classification, and 98.9% accuracy with a perfect MCC of 1.0 for transmembrane proteins. While PepMLM also performed well (91.89% accuracy, MCC: 0.84), MeMDLM scored lower (80.53% accuracy, MCC: 0.63). These results highlight the capability of LLMs to detect complex sequence patterns and outperform traditional methods. This work not only advances computational biology but also contributes to precision medicine, particularly in areas like oncology, where understanding kinase-phosphatase dynamics is critical.",
  link: "https://ieeexplore.ieee.org/abstract/document/11333701",
  tags: ["IEEE Xplore", "CAFA-5", "Kinases", "Phosphatases", "Transmembrane"],
  results: [
    {
      label: "CAFA-5 · kinase/phosphatase",
      value: "90% accuracy · 89.74% balanced · MCC 0.7995",
    },
    {
      label: "CAFA-5 · transmembrane",
      value: "98.9% accuracy · MCC 1.0",
    },
    {
      label: "PepMLM",
      value: "91.89% accuracy · MCC 0.84",
    },
    {
      label: "MeMDLM",
      value: "80.53% accuracy · MCC 0.63",
    },
  ],
};

const projects: readonly ProjectEntry[] = [
  {
    name: "Expense Tracker",
    category: "Personal finance",
    summary:
      "A personal finance app for tracking spending, staying inside a monthly budget, and seeing a clear picture of the month without spreadsheet noise.",
    points: [
      "A .NET Clean Architecture API on PostgreSQL owns users, categories, transactions, budgets and sub-budgets, savings goals, month-scoped reports, JWT auth with Admin/User roles, and an early-access waitlist gated by a settings flag and one-time invite codes.",
      "A Next.js 15 frontend (App Router, Tailwind) is the calm, responsive UI — dashboard, expenses, budget, reports, profile, and light/dark theme — talking to the API through a same-origin BFF so the JWT never hits the browser.",
      "It is a portfolio-scale product: real auth and live data, not a CRUD demo, built without ABP or a component library.",
    ],
    stack: [
      ".NET",
      "Clean Architecture",
      "PostgreSQL",
      "JWT",
      "Next.js 15",
      "Tailwind CSS",
    ],
  },
];

const certifications: readonly Certification[] = [
  { name: "Oracle Cloud", icon: "cloud" },
  { name: "GCP Generative AI Leader", icon: "spark" },
  { name: "Six Sigma", icon: "badge" },
  { name: "AWS [SPECIFIC CERT NAME]", icon: "aws" },
];

const currentRole = experience[0];

const site: SiteCopy = {
  brand: "Salman Zaidi // Software Engineer",
  monogramAlt: "SZ monogram",
  timezone: "UTC+5",
  getInTouch: "Get in Touch",
  downloadResume: "Download Resume",
  resumeHref: "/syed_salman_ali_zaidi_resume.pdf",
  menuOpen: "Menu",
  menuClose: "Close",
  copy: "Copy",
  copied: "Copied",
  copyEmail: "Copy email",
  terminalPrompt: "",
  aboutKicker: "01 // PHILOSOPHY & CORE",
  aboutTitle: "Disciplined Backend Engineering",
  aboutParagraphs: [
    "Backend software engineer building production REST APIs and SDKs in .NET 8 and C#, across SQL Server and PostgreSQL. Current role: Software Engineer at Talverse, Karachi, since October 2024.",
    "Day-to-day work covers Keycloak and OAuth 2.0, NATS JetStream and gRPC, Redis, and Stripe and PayPal/Braintree on a live donation platform.",
    "Also a Software Engineer Intern (iOS) at Talverse from October 2024 to February 2025, and a Backend Developer Intern at Sastaticket from July 2022 to September 2022. Bachelor's in Computer Science, FAST University, Karachi, 2021–2025.",
  ],
  baseLabel: "Base of Operations",
  educationLabel: "Education",
  principlesLabel: "Foundational notes from the work",
  principles: [
    {
      title: "Donation platform APIs",
      body: "Scalable REST APIs on a live donation platform in .NET 8 and ABP Framework, with Stripe and PayPal/Braintree integrated end to end.",
      tag: ".NET 8 · C# · ABP Framework",
      icon: "layers",
    },
    {
      title: "Notification SDK",
      body: "Custom Notification SDK on NATS JetStream with failover, plus gRPC between services.",
      tag: "NATS JetStream · gRPC",
      icon: "bolt",
    },
    {
      title: "IAM and API protection",
      body: "Keycloak with OAuth 2.0/OIDC, RBAC, and custom OTP authenticators, plus a rate limiter for DDoS protection.",
      tag: "Keycloak · OAuth 2.0 · OIDC · RBAC",
      icon: "shield",
    },
  ],
  logLabel: "WORK NOTES",
  logLines: [
    "Donation platform — .NET 8, ABP Framework, Stripe, PayPal/Braintree",
    "Keycloak — OAuth 2.0/OIDC, RBAC, custom OTP authenticators",
    "SQL Server and PostgreSQL — query plans and index tuning",
    "Notification SDK — NATS JetStream failover, gRPC",
    "Rate limiter — DDoS protection on public APIs",
    "Observability — ELK Stack and OpenTelemetry",
    "Frontend — React, Next.js, AngularJS, GA4/GTM",
  ],
  experienceKicker: "02 // TRACK RECORD",
  experienceTitle: "Production Engineering & Systems Timeline",
  experienceIntro:
    "Software Engineer at Talverse, an iOS internship at Talverse, and a backend internship at Sastaticket.",
  earlyCareerLabel: "Early career & internships",
  skillsKicker: "03 // CAPABILITIES MATRIX",
  skillsTitle: "Technical Stack & Architectural Disciplines",
  skillsIntro:
    "Backend, data, messaging, auth, cloud, monitoring, AI/ML, and frontend tools listed for this profile.",
  researchKicker: "04 // SCHOLARLY RESEARCH",
  researchTitle: "IEEE Publication",
  researchIntro:
    "IEEE paper on LLM-powered protein classification for kinases, phosphatases, and transmembrane proteins.",
  publicationLinkLabel: "View on IEEE Xplore",
  researchSideLabel: "Reported results",
  projectsKicker: "05 // ARCHITECTURE CASE STUDIES",
  projectsTitle: "Featured Production Implementations",
  projectsIntro: "Expense Tracker, a personal finance product.",
  certsKicker: "06 // CREDENTIALS & ACADEMICS",
  certsTitle: "Certified Competency & Academic Honors",
  certsIntro: "Certifications on record, with education beside them.",
  contactKicker: "07 // COMMUNICATIONS GATEWAY",
  contactTitle: "Initiate Contact & Transmission",
  contactIntro: "Email, LinkedIn, and GitHub for Syed Salman Ali Zaidi.",
  endpointsLabel: "Direct endpoints",
  emailLabel: "Primary Email",
  locationLabel: "Location",
  formName: "Name / sender",
  formEmail: "Work email",
  formOrg: "Organization / company",
  formMessage: "Message",
  formNamePlaceholder: "Your name",
  formEmailPlaceholder: "you@company.com",
  formOrgPlaceholder: "Company",
  formMessagePlaceholder: "What you want to talk about",
  formSubmit: "Transmit",
  formOpened: "Opened a draft in your mail client.",
  formNeedsEmail:
    "The profile email is still a placeholder, so this form cannot open a draft yet.",
  footerBlurb: "Backend Engineer · Builder",
  footerBuilt: "Built with Next.js & Tailwind",
  footerRights: "All rights reserved.",
};

const nav: readonly NavItem[] = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "research", label: "Research" },
  { id: "projects", label: "Projects" },
  { id: "certifications", label: "Certifications" },
  { id: "contact", label: "Contact" },
];

const heroChips: readonly Chip[] = [
  {
    label: `${currentRole.role} @ ${currentRole.company}`,
    tone: "live",
  },
  {
    label: `${education.school} · ${education.degree}`,
    tone: "neutral",
  },
];

const heroPills: readonly string[] = [
  ".NET 8 / Spring Boot",
  "Keycloak",
  "NATS JetStream",
  "OpenTelemetry",
  "PostgreSQL",
  "Stripe / PayPal",
];

const metrics: readonly Metric[] = [
  {
    label: "Current role",
    value: "Talverse",
    detail: `${currentRole.role} · ${currentRole.dates}`,
  },
  {
    label: "Base",
    value: "Karachi",
    detail: personal.location,
  },
  {
    label: "Focus",
    value: "Systems",
    detail: personal.tagline,
  },
  {
    label: "Education",
    value: "BS CS",
    detail: `${education.degree}, ${education.school}`,
  },
];

export const portfolio = {
  personal,
  education,
  experience,
  skills,
  research,
  projects,
  certifications,
  site,
  nav,
  heroChips,
  heroPills,
  metrics,
};
