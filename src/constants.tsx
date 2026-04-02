import React from "react";
import { Github, Linkedin, Mail, ExternalLink, Code2, Layout, Palette, Database, Box, Zap, GitBranch, Server } from "lucide-react";

export interface Experience {
  role: string;
  company: string;
  period: string;
  location: string;
  type: "Full-time" | "Freelance" | "Contract";
  highlights: string[];
}

export const EXPERIENCE: Experience[] = [
  {
    role: "Freelance Full-Stack Developer",
    company: "Self-Employed",
    period: "2023 — Present",
    location: "Remote",
    type: "Freelance",
    highlights: [
      "Build and deploy end-to-end web and mobile applications as a solo developer — from requirements gathering through production.",
      "Integrate third-party APIs and services including payment gateways, mapping SDKs, and authentication providers.",
      "Leverage AI-assisted development tools (Claude Code) to accelerate delivery and maintain code quality across engagements.",
    ],
  },
  {
    role: "Software Engineer",
    company: "Metrobank",
    period: "2021 — 2023",
    location: "Manila, Philippines",
    type: "Full-time",
    highlights: [
      "Led the migration of a legacy monolithic banking application to a React micro-frontend architecture, reducing cross-team deployment coupling.",
      "Built and maintained Redux-Saga state management layers for complex transactional workflows handling millions of pesos daily.",
      "Resolved production incidents through Dynatrace observability dashboards, cutting mean time-to-resolve by 30%.",
      "Collaborated with QA and backend teams on LoopBack 4 API contracts and integration testing strategies.",
    ],
  },
  {
    role: "Full-Stack Developer",
    company: "Computer Professionals, Inc.",
    period: "2017 — 2021",
    location: "Manila, Philippines",
    type: "Full-time",
    highlights: [
      "Designed and built enterprise web applications for an agribusiness client over four years, owning the full stack from database schema to UI.",
      "Developed RESTful APIs with Node.js and Express.js backed by MySQL and Oracle databases.",
      "Delivered responsive, accessible interfaces using React and TypeScript, iterating directly with end-users.",
      "Maintained deployment pipelines and version control workflows across GitLab-hosted repositories.",
    ],
  },
];

export interface Project {
  title: string;
  description: string;
  tech: string[];
  link: string;
  github: string;
  image: string;
}

export interface Skill {
  name: string;
  icon: React.ReactNode;
  category: "Frontend" | "Backend" | "Tools";
}

export const PROJECTS: Project[] = [
  {
    title: "Banking Micro-Frontend Platform",
    description: "Refactored a legacy monolithic banking application into a scalable micro-frontend architecture at Metrobank, improving modularity and reducing deployment coupling across teams.",
    tech: ["React", "TypeScript", "Redux-Saga", "Material-UI", "LoopBack 4"],
    link: "#",
    github: "#",
    image: "https://picsum.photos/seed/finance-dark/800/600"
  },
  {
    title: "Full-Stack Client App",
    description: "End-to-end web and mobile application built as a solo freelance developer — from requirements gathering and API integrations to deployment, using AI-assisted development tooling.",
    tech: ["React", "React Native", "Node.js", "MongoDB", "Supabase"],
    link: "#",
    github: "#",
    image: "https://picsum.photos/seed/neural-workspace/800/600"
  },
  {
    title: "Enterprise Web Application",
    description: "Designed and maintained full-stack enterprise web applications for an agribusiness company, building RESTful APIs and responsive interfaces from the ground up over four years.",
    tech: ["React", "TypeScript", "Node.js", "Express.js", "SQL"],
    link: "#",
    github: "#",
    image: "https://picsum.photos/seed/storefront-minimal/800/600"
  }
];

export const SKILLS: Skill[] = [
  { name: "React / React Native", icon: <Layout className="w-5 h-5" />, category: "Frontend" },
  { name: "TypeScript", icon: <Code2 className="w-5 h-5" />, category: "Frontend" },
  { name: "Redux-Saga", icon: <Zap className="w-5 h-5" />, category: "Frontend" },
  { name: "Material-UI", icon: <Palette className="w-5 h-5" />, category: "Frontend" },
  { name: "HTML / CSS / JS", icon: <Code2 className="w-5 h-5" />, category: "Frontend" },
  { name: "Node.js / Express", icon: <Server className="w-5 h-5" />, category: "Backend" },
  { name: "MongoDB / Supabase", icon: <Database className="w-5 h-5" />, category: "Backend" },
  { name: "SQL (MySQL / Oracle)", icon: <Database className="w-5 h-5" />, category: "Backend" },
  { name: "LoopBack 4", icon: <Server className="w-5 h-5" />, category: "Backend" },
  { name: "Git / GitLab / BitBucket", icon: <GitBranch className="w-5 h-5" />, category: "Tools" },
  { name: "Docker", icon: <Box className="w-5 h-5" />, category: "Tools" },
  { name: "Dynatrace", icon: <Zap className="w-5 h-5" />, category: "Tools" },
];
