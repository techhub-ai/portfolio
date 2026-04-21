"use client";

import Link from "next/link";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { useState } from "react";

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TextEffect } from "@/components/ui/text-effect";
import { AnimatedGroup } from "@/components/ui/animated-group";

const projects = [
  {
    title: "Koala — AI-Powered Mock Interview",
    role: "Full-Stack Developer",
    description:
      "An intelligent mock interview platform combining advanced LLMs with real-time voice synthesis and transcription. Delivers a lifelike interview experience with actionable feedback to help candidates confidently prepare for their dream jobs.",
    imageUrl: "https://raw.githubusercontent.com/techhub-ai/koala/main/public/koala-logo.svg",
    tech: ["Next JS", "Tailwind CSS", "Gemini", "Groq", "Supabase"],
    liveUrl: "#",
    githubUrl: "https://github.com/techhub-ai/koala",
  },
  {
    title: "Wealth Manager",
    role: "Software Engineer",
    description:
      "An online banking platform for managing treasury investments and securities. Features portfolio tracking by product type and currency, transaction simulation with auto-computed proceeds, and direct access to investment specialists.",
    imageUrl: "/metrobank.png",
    tech: ["React", "Redux", "Material UI", "TypeScript", "Loopback 4", "MongoDB", "SQL"],
    liveUrl: "https://onlinebanking.metrobank.com.ph/signin",
    githubUrl: "#private",
  },
  {
    title: "My AIA",
    role: "Frontend Developer | L2 Support",
    description:
      "An interactive analytics dashboard with customizable chart widgets, date range filtering, CSV export, and role-based data access controls for enterprise users.",
    imageUrl: "/my-aia.png",
    tech: ["React", "TypeScript", "Material UI", "LoopBack 4", "MySQL"],
    liveUrl: "https://www.aia.com.ph/en/myaia/login.html",
    githubUrl: "#private",
  },
  {
    title: "Loyalty Rewards App",
    role: "Full Stack",
    description:
      "A mobile-first PWA that helps businesses run a digital loyalty points program — no plastic cards needed. Customers earn points by scanning their personal QR code at checkout and redeem them for peso discounts on future purchases.",
    imageUrl: "/flash-loyalty.svg",
    tech: ["Next JS", "Supabase", "Tailwind CSS", "PostgreSQL", "Prisma", "Zod"],
    liveUrl: "https://flash-app-pi.vercel.app/login",
    githubUrl: "https://github.com/techhub-ai/flash-app",
  },
 
];

export function Projects() {
  const [privateDialogOpen, setPrivateDialogOpen] = useState(false);
  const [expandedCards, setExpandedCards] = useState<Record<string, boolean>>({});

  const toggleExpand = (title: string) => {
    setExpandedCards((prev) => ({ ...prev, [title]: !prev[title] }));
  };

  return (
    <section id="projects" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          {/* <p className="mb-4 text-sm font-medium uppercase tracking-widest text-primary">03. Projects</p> */}
          <TextEffect
            preset="fade-in-blur"
            speedSegment={0.3}
            as="h2"
            className="mb-4 text-3xl font-bold tracking-tight md:text-5xl"
          >
            Selected Projects
          </TextEffect>
          <TextEffect
            per="line"
            preset="fade-in-blur"
            speedSegment={0.3}
            delay={0.2}
            as="p"
            className="mx-auto max-w-xl text-muted-foreground"
          >
            A selection of projects I&apos;ve worked on — including corporate
            engagements, freelance collaborations, and personal builds.
          </TextEffect>
        </div>

        <AnimatedGroup
          variants={{
            container: { visible: { transition: { staggerChildren: 0.1 } } },
            item: {
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  type: "spring" as const,
                  bounce: 0.2,
                  duration: 1,
                },
              },
            },
          }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <Card
              key={project.title}
              className="group overflow-hidden transition-shadow duration-300 hover:shadow-lg hover:shadow-zinc-950/10 dark:hover:shadow-zinc-950/40"
            >
              <div className="relative -mt-4 h-48 w-full overflow-hidden border-b border-border">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  fill
                  className={`transition-transform duration-300 group-hover:scale-105 ${[".svg", "metrobank.png", "my-aia.png"].some((s) => project.imageUrl.includes(s)) ? "object-contain p-4" : "object-cover"}`}
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
              </div>

              <CardHeader>
                <CardTitle className="text-base font-semibold">
                  {project.title}
                </CardTitle>
                <p className="text-xs font-medium text-primary">
                  {project.role}
                </p>
              </CardHeader>

              <CardContent>
                <CardDescription className="text-sm leading-relaxed">
                  <span
                    className={expandedCards[project.title] ? "" : "line-clamp-3"}
                  >
                    {project.description}
                  </span>
                  <button
                    onClick={() => toggleExpand(project.title)}
                    aria-expanded={expandedCards[project.title] ?? false}
                    aria-label={
                      expandedCards[project.title]
                        ? `See less about ${project.title}`
                        : `See more about ${project.title}`
                    }
                    className="mt-1 block text-xs font-medium text-muted-foreground hover:underline"
                  >
                    {expandedCards[project.title] ? "See less" : "See more"}
                  </button>
                </CardDescription>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border bg-muted px-2.5 py-0.5 text-xs text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </CardContent>

              <CardFooter className="gap-2">
                {project.githubUrl === "#private" ? (
                  <Button
                    size="sm"
                    variant="outline"
                    className="h-8 gap-1.5 text-xs"
                    onClick={() => setPrivateDialogOpen(true)}
                  >
                    <GithubIcon className="size-3.5" />
                    GitHub
                  </Button>
                ) : (
                  <Button
                    asChild
                    size="sm"
                    variant="outline"
                    className="h-8 gap-1.5 text-xs"
                  >
                    <Link
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <GithubIcon className="size-3.5" />
                      GitHub
                    </Link>
                  </Button>
                )}
                <Button asChild size="sm" className="h-8 gap-1.5 text-xs">
                  <Link
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="size-3.5" />
                    Live Demo
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </AnimatedGroup>
      </div>

      <Dialog open={privateDialogOpen} onOpenChange={setPrivateDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Private Repository</DialogTitle>
            <DialogDescription>
              Company&apos;s Private Repository
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </section>
  );
}
