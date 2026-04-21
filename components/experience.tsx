"use client";

import { useState } from "react";
import { Briefcase } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import {
  SiReact,
  SiTypescript,
  SiAngular,
  SiTailwindcss,
  SiGithubactions,
  SiNodedotjs,
  SiNestjs,
  SiRedis,
  SiSupabase,
  SiPostgresql,
  SiMui,
  SiStripe,
  SiTwilio,
  SiGooglemaps,
  SiWordpress,
  SiWoocommerce,
  SiShopify,
  SiRedux,
  SiLoopback,
  SiGit,
  SiGitlab,
  SiBitbucket,
  SiLinux,
  SiSass,
  SiMongodb,
  SiPhp,
  SiMysql,
  SiExpress,
  SiGraphql,
  SiReactquery,
  SiChakraui,
  SiCodeigniter,
  SiJquery,
  SiHtml5,
  SiGithub,
  SiCss,
} from "react-icons/si";
import { IconType } from "react-icons";
import { TextEffect } from "@/components/ui/text-effect";
import { AnimatedGroup } from "@/components/ui/animated-group";

const TECH_ICONS: Record<string, IconType> = {
  React: SiReact,
  TypeScript: SiTypescript,
  AngularJS: SiAngular,
  "Shadcn/UI": SiReact,
  "Tailwind CSS": SiTailwindcss,
  "GitHub Actions": SiGithubactions,
  "Node.js": SiNodedotjs,
  NestJS: SiNestjs,
  Redis: SiRedis,
  Supabase: SiSupabase,
  PostgreSQL: SiPostgresql,
  "Material UI": SiMui,
  Stripe: SiStripe,
  Twilio: SiTwilio,
  "Google Maps": SiGooglemaps,
  WordPress: SiWordpress,
  WooCommerce: SiWoocommerce,
  Shopify: SiShopify,
  Redux: SiRedux,
  "Loopback 4": SiLoopback,
  Git: SiGit,
  GitLab: SiGitlab,
  Bitbucket: SiBitbucket,
  Linux: SiLinux,
  Sass: SiSass,
  MongoDB: SiMongodb,
  PHP: SiPhp,
  MySQL: SiMysql,
  "Express.js": SiExpress,
  GraphQL: SiGraphql,
  "React Query": SiReactquery,
  "Chakra UI": SiChakraui,
  CodeIgniter: SiCodeigniter,
  jQuery: SiJquery,
  HTML: SiHtml5,
  GitHub: SiGithub,
  CSS: SiCss,
};

const experiences = [
  {
    company: "Metropolitan Bank & Trust Company",
    role: "Software Engineer",
    dateRange: "Jan 2026 – Nov 2026",
    tag: "Full-time",
    tagStyle: "bg-primary/10 text-primary",
    description:
      "Contributed as a full-stack developer on WM Wealth Manager, an investment platform developed for Metrobank, working across front-end and back-end development within an Agile/Scrum environment. Responsible for developing and delivering user stories, conducting unit testing, and coordinating handovers to QA. Provided technical support across SIT/UAT environments, maintained Technical Design Specifications (TDS), and served as a code reviewer to uphold code quality standards. Actively participated in Daily Scrum meetings, contributing proactive solutions to technical challenges.",
    techStack: [
      "React",
      "Material UI",
      "Redux",
      "TypeScript",
      "Loopback 4",
      "Git",
      "GitLab",
      "Bitbucket",
      "Linux",
      "MongoDB",
    ],
  },
  {
    company: "Computer Professionals, Inc.",
    role: "React Developer & L2 Application Support",
    dateRange: "Nov 2022 – Dec 2024",
    tag: "Full-time",
    tagStyle: "bg-primary/10 text-primary",
    description:
      "Contributed as a Front-End Developer on My AIA, an insurance platform developed for AIA Philippines, responsible for developing and delivering user stories, conducting unit testing, and coordinating handovers to the QA team. As an L2 Support, investigated and triaged issues logged via SharePoint, reproducing bugs in lower environments, implementing fixes, and raising pull requests for SIT validation prior to QA handover. Prepared Root Cause Analysis (RCA) reports to document findings and prevent issue recurrence. Additionally led performance investigations on web application degradation, leveraging Dynatrace to identify and present potential root causes of slowdowns and sluggish behavior.",
    techStack: ["React", "Sass", "Redux", "Git", "GitLab", "Bitbucket"],
  },
  {
    company: "RDF Feed, Livestock & Food, Inc.",
    role: "Full Stack Web Developer",
    dateRange: "Nov 2018 – Nov 2022",
    tag: "Full-time",
    tagStyle: "bg-primary/10 text-primary",
    description:
      "Hired as an Internal Developer at RDFFLFI, an agri-food industry company, to systematize and streamline business operations through internally developed systems. Responsible for initiating client-facing meetings with sub-departments to gather requirements and identify pain points, followed by thorough data gathering including review of manual processes and existing departmental documents. Collaborated in brainstorming sessions to determine the appropriate technologies, server infrastructure, even hardware if needed. Designed UX/UI prototypes using Figma prior to development to ensure alignment with stakeholder expectations. Led projects from kickoff through deployment and continued to provide ongoing maintenance and support post-launch.",
    techStack: [
      "PHP",
      "MySQL",
      "Node.js",
      "Express.js",
      "MongoDB",
      "GraphQL",
      "React",
      "TypeScript",
      "React Query",
      "Material UI",
      "Chakra UI",
      "WordPress",
    ],
  },
  {
    company: "Avinnovz Technologies Inc.",
    role: "Web Application Developer",
    dateRange: "Jan 2019 – Feb 2020",
    tag: "Part-time",
    tagStyle: "bg-primary/10 text-primary",
    description:
      "Engaged as a Part-Time Developer on a government web application for the Manila Bay Unit GIS Project, responsible for developing assigned tasks delegated by the Team Lead, conducting testing, and deploying exclusively within the development environment. Access and responsibilities were scoped strictly to the development environment, with no involvement in higher environments such as SIT, UAT, or production.",
    techStack: [
      "PHP",
      "CodeIgniter",
      "MySQL",
      "jQuery",
      "HTML",
      "CSS",
      "Git",
      "GitHub",
    ],
  },
  {
    company: "Hausland Development Corporation",
    role: "Web Developer",
    dateRange: "Oct 2025 – Feb 2026",
    tag: "Freelance",
    tagStyle: "bg-amber-500/10 text-amber-600 dark:text-amber-400",
    description:
      "Engaged as a Freelance Developer to revamp the existing website for Hausland, a house development company. Responsible for gathering and implementing client requirements, redesigning and redeveloping the WordPress-based website, and integrating third-party services to enhance overall functionality and user experience.",
    techStack: [
      "PHP",
      "WordPress",
      "MySQL",
      "jQuery",
    ],
  },
  {
    company: "Mother Teresa of Calcutta Medical Center",
    role: "Web Developer",
    dateRange: "Aug 2023 – Oct 2023",
    tag: "Freelance",
    tagStyle: "bg-amber-500/10 text-amber-600 dark:text-amber-400",
    description:
      "Engaged as a Freelance Web Developer to design and develop a new website for Calcutta Hospital, featuring a Doctor availability and scheduling system. Built on WordPress, the website was developed with an intuitive admin interface, enabling hospital staff to independently manage and update content, doctor profiles, and schedules with ease.",
    techStack: [
      "PHP",
      "WordPress",
      "MySQL",
      "jQuery",
    ],
  },
];

export function Experience() {
  const [selected, setSelected] = useState(0);
  const activeExp = experiences[selected];

  return (
    <section id="experience" className="py-24 md:py-32 bg-muted/30">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          {/* <p className="mb-4 text-sm font-medium uppercase tracking-widest text-primary">02. Experience</p> */}
          <TextEffect
            preset="fade-in-blur"
            speedSegment={0.3}
            as="h2"
            className="text-3xl font-bold tracking-tight md:text-5xl"
          >
            Work Experience
          </TextEffect>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {/* Left pane — job selector */}
          <AnimatedGroup
            variants={{
              container: { visible: { transition: { staggerChildren: 0.1 } } },
              item: {
                hidden: { opacity: 0, x: -16 },
                visible: {
                  opacity: 1,
                  x: 0,
                  transition: {
                    type: "spring" as const,
                    bounce: 0.2,
                    duration: 1,
                  },
                },
              },
            }}
            className="flex flex-col gap-3"
          >
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <button
                  onClick={() => setSelected(index)}
                  className={`w-full rounded-2xl border bg-card p-4 text-left ring-1 transition-all duration-200 hover:ring-primary/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                    selected === index ? "ring-primary" : "ring-foreground/5"
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div className="flex size-9 shrink-0 items-center justify-center rounded-lg border bg-muted">
                      <Briefcase className="size-4 text-primary" aria-hidden />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="truncate font-semibold text-foreground">
                        {exp.role}
                      </p>
                      <p className="truncate text-xs text-muted-foreground">
                        {exp.company}
                      </p>
                    </div>
                    <span
                      className={`shrink-0 rounded-full px-2.5 py-0.5 text-xs font-medium ${exp.tagStyle}`}
                    >
                      {exp.tag}
                    </span>
                  </div>
                </button>
              </motion.div>
            ))}
          </AnimatedGroup>

          {/* Right pane — detail card */}
          <div className="md:col-span-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={selected}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ type: "spring", bounce: 0.2, duration: 0.35 }}
                className="rounded-2xl border bg-card p-6 ring-1 ring-foreground/5"
              >
                <div className="mb-6 text-center">
                  <h2 className="text-4xl font-bold text-foreground">
                    {activeExp.role}
                  </h2>
                  <p className="mt-1 text-muted-foreground">
                    {activeExp.company}
                  </p>
                  <p className="mt-1 text-muted-foreground">
                    {activeExp.dateRange}
                  </p>
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  {activeExp.description}
                </p>

                <div className="mt-4">
                  <p className="mb-2 text-xs font-medium uppercase tracking-wide text-muted-foreground">
                    Tech Stack
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {activeExp.techStack.map((tech) => {
                      const Icon = TECH_ICONS[tech];
                      return (
                        <span
                          key={tech}
                          className="flex items-center gap-1.5 rounded-full border bg-muted px-2.5 py-0.5 text-xs text-muted-foreground"
                        >
                          {Icon && (
                            <Icon className="size-3 shrink-0" aria-hidden />
                          )}
                          {tech}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
