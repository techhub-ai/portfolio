import { Monitor, Workflow, Globe, Download } from "lucide-react";
import { motion } from "motion/react";
import { TextEffect } from "@/components/ui/text-effect";
import { AnimatedGroup } from "@/components/ui/animated-group";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Monitor,
    title: "Web Application Development",
    description:
      "Scalable, full-stack web applications engineered with React, Next.js, and robust backend APIs — built to perform and grow with your business.",
  },
  {
    icon: Workflow,
    title: "Workflow Automations",
    description:
      "Tailored scripts and system integrations that streamline operations, reduce manual overhead, and improve efficiency across your organization.",
  },
  {
    icon: Globe,
    title: "Company Website Development",
    description:
      "Professional, high-performance marketing websites crafted to establish credibility, engage your audience, and drive measurable business results.",
  },
];

const transitionVariants = {
  item: {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring" as const, bounce: 0.2, duration: 1 },
    },
  },
};

export function PortfolioAbout() {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left pane */}
          <AnimatedGroup
            variants={{
              container: {
                visible: {
                  transition: { staggerChildren: 0.1, delayChildren: 0.1 },
                },
              },
              ...transitionVariants,
            }}
            className="flex flex-col gap-6"
          >
            <div className="space-y-2">
              <TextEffect
                preset="fade-in-blur"
                speedSegment={0.3}
                as="p"
                className="text-sm font-semibold uppercase tracking-widest text-primary"
              >
                About Me
              </TextEffect>
              <TextEffect
                preset="fade-in-blur"
                speedSegment={0.3}
                as="h2"
                className="text-4xl font-bold tracking-tight md:text-5xl"
              >
                Software Engineer
              </TextEffect>
            </div>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Web Application Developer with 6+ years of experience
                contributing to enterprise software for regulated industries,
                including banking and insurance. Skilled in developing scalable
                applications, optimizing performance, and working with
                cross-functional teams to ship compliant, production-ready
                products.
              </p>
              <p>
                Actively leverages AI-assisted development — including Claude
                Code — to build full applications faster and drive continuous
                improvement in delivery workflows.
              </p>
            </div>

            <div>
              <Button asChild variant="outline" size="lg" className="gap-2">
                <a href="/Dela Cruz, Erwin CV.pdf" download>
                  <Download className="size-4" aria-hidden />
                  Download CV
                </a>
              </Button>
            </div>
          </AnimatedGroup>

          {/* Right pane — service cards */}
          <AnimatedGroup
            variants={{
              container: {
                visible: {
                  transition: { staggerChildren: 0.12, delayChildren: 0.3 },
                },
              },
              ...transitionVariants,
            }}
            className="flex flex-col gap-4"
          >
            {services.map(({ icon: Icon, title, description }) => (
              <motion.div
                key={title}
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="group flex items-start gap-4 rounded-xl border border-border bg-card p-5 transition-colors duration-200 hover:border-primary hover:shadow-[0_0_0_1px] hover:shadow-primary/30">
                  <div className="mt-0.5 flex size-10 shrink-0 items-center justify-center rounded-lg border border-border bg-muted transition-colors group-hover:border-primary/40 group-hover:bg-primary/5">
                    <Icon
                      className="size-5 text-muted-foreground transition-colors group-hover:text-primary"
                      aria-hidden
                    />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-semibold leading-snug">{title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatedGroup>
        </div>
      </div>
    </section>
  );
}
