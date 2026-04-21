import Image from "next/image";
import Link from "next/link";
import { ArrowDown, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TextEffect } from "@/components/ui/text-effect";
import { AnimatedGroup } from "@/components/ui/animated-group";
import { HeroHeader } from "./header";

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

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

const transitionVariants = {
  item: {
    hidden: { opacity: 0, filter: "blur(12px)", y: 12 },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: { type: "spring" as const, bounce: 0.3, duration: 1.5 },
    },
  },
};

export function PortfolioHero() {
  return (
    <>
      <HeroHeader />

      <section
        id="home"
        className="relative min-h-screen flex items-center overflow-hidden"
      >
        <div
          aria-hidden
          className="absolute inset-0 -z-30"
          style={{
            backgroundImage: [
              "linear-gradient(to right, color-mix(in srgb, var(--color-border) 50%, transparent) 1px, transparent 1px)",
              "linear-gradient(to bottom, color-mix(in srgb, var(--color-border) 50%, transparent) 1px, transparent 1px)",
            ].join(", "),
            backgroundSize: "40px 40px",
            maskImage: "linear-gradient(to bottom, black 50%, transparent 90%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, black 50%, transparent 90%)",
          }}
        />
        <div className="mx-auto w-full max-w-7xl px-6 py-32">
          <div className="flex flex-col items-center text-center">
            <AnimatedGroup variants={transitionVariants}>
              <div className="relative mb-8 flex items-center justify-center">
                {/* Outermost diffuse glow */}
                <div
                  aria-hidden
                  className="absolute size-56 rounded-full bg-primary/5 blur-3xl"
                />
                {/* Mid glow ring */}
                <div
                  aria-hidden
                  className="absolute size-44 rounded-full bg-primary/10 blur-2xl motion-safe:animate-pulse"
                />
                {/* Inner tight glow */}
                <div
                  aria-hidden
                  className="absolute size-36 rounded-full bg-primary/15 blur-xl"
                />
                <div
                  className="relative size-38 overflow-hidden rounded-full border-2 border-primary/40"
                  style={{
                    boxShadow:
                      "0 0 20px 4px color-mix(in srgb, var(--color-primary) 20%, transparent), 0 0 50px 12px color-mix(in srgb, var(--color-primary) 10%, transparent), 0 0 90px 24px color-mix(in srgb, var(--color-primary) 5%, transparent)",
                  }}
                >
                  <Image
                    src="/profile.jpg"
                    alt="Profile photo of Erwin Dela Cruz"
                    width={152}
                    height={152}
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </AnimatedGroup>

            {/* <AnimatedGroup variants={transitionVariants}>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border bg-muted px-4 py-1.5 text-sm">
                <span
                  className="size-2 animate-pulse rounded-full bg-green-500"
                  aria-hidden
                />
                <span className="text-muted-foreground">
                  Available for new opportunities
                </span>
              </div>
            </AnimatedGroup> */}

            <TextEffect
              preset="fade-in-blur"
              speedSegment={0.3}
              delay={0.3}
              as="p"
              className="mb-3 text-sm font-medium uppercase tracking-widest text-primary"
            >
              Software Engineer
            </TextEffect>

            <TextEffect
              preset="fade-in-blur"
              speedSegment={0.3}
              delay={0.5}
              as="h1"
              className="mb-6 max-w-3xl text-balance text-5xl font-bold tracking-tight md:text-7xl"
            >
              Erwin Dela Cruz
            </TextEffect>

            <TextEffect
              per="line"
              preset="fade-in-blur"
              speedSegment={0.3}
              delay={0.7}
              as="p"
              className="mb-10 max-w-2xl text-balance text-lg leading-relaxed text-muted-foreground"
            >
              I’m a software engineer who enjoys turning ideas into real,
              working products. I specialize in building responsive web apps and
              solving complex problems with simple, effective solutions.
            </TextEffect>

            <AnimatedGroup
              variants={{
                container: {
                  visible: {
                    transition: { staggerChildren: 0.1, delayChildren: 1 },
                  },
                },
                ...transitionVariants,
              }}
              className="mb-12 flex flex-col items-center gap-3 sm:flex-row"
            >
              <div className="rounded-full border bg-foreground/10 p-0.5">
                <Button asChild size="lg" className="rounded-full px-6">
                  <Link href="#projects">View My Work</Link>
                </Button>
              </div>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full px-6"
              >
                <Link href="#contact">Get In Touch</Link>
              </Button>
            </AnimatedGroup>

            <AnimatedGroup
              variants={{
                container: {
                  visible: {
                    transition: { staggerChildren: 0.08, delayChildren: 1.2 },
                  },
                },
                ...transitionVariants,
              }}
              className="flex items-center gap-5"
            >
              <Link
                href="https://github.com/erwin-delacruz"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-muted-foreground transition-colors duration-200 hover:text-foreground"
              >
                <GithubIcon className="size-5" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/erwinmdc26/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-muted-foreground transition-colors duration-200 hover:text-foreground"
              >
                <LinkedinIcon className="size-5" />
              </Link>
              <Link
                href="mailto:erwin.rdf@gmail.com"
                aria-label="Email"
                className="text-muted-foreground transition-colors duration-200 hover:text-foreground"
              >
                <Mail className="size-5" />
              </Link>
            </AnimatedGroup>
          </div>
        </div>

        <div
          aria-hidden
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-muted-foreground"
        >
          <ArrowDown className="size-4" />
        </div>
      </section>
    </>
  );
}
