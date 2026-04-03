import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  ChevronDown,
  Menu,
  X,
  ArrowRight,
} from "lucide-react";
import { PROJECTS, SKILLS, EXPERIENCE } from "./constants";

const focusRing =
  "focus:outline-none focus:ring-2 focus:ring-[color:var(--accent)] focus:ring-offset-2 focus:ring-offset-[color:var(--bg)]";

const SectionHeading = ({
  children,
  subtitle,
  index,
}: {
  children: React.ReactNode;
  subtitle?: string;
  index?: string;
}) => {
  const shouldReduceMotion = useReducedMotion();
  return (
    <div className="mb-16 relative">
      {index && (
        <span
          className="absolute -top-8 -left-2 font-[family-name:var(--font-display)] text-[8rem] leading-none font-bold select-none pointer-events-none"
          style={{ color: "var(--text-faint)", opacity: 0.4 }}
        >
          {index}
        </span>
      )}
      <motion.div
        initial={shouldReduceMotion ? false : { width: 0 }}
        whileInView={{ width: 40 }}
        viewport={{ once: true }}
        transition={{ duration: shouldReduceMotion ? 0 : 0.6 }}
        className="h-px mb-6"
        style={{ backgroundColor: "var(--accent)" }}
      />
      <motion.h2
        initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
        whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-light leading-tight mb-4"
        style={{ fontFamily: "var(--font-display)", color: "var(--text)" }}
      >
        {children}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={shouldReduceMotion ? {} : { opacity: 0 }}
          whileInView={shouldReduceMotion ? {} : { opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: shouldReduceMotion ? 0 : 0.15 }}
          className="text-sm tracking-wide max-w-xl"
          style={{ color: "var(--text-muted)" }}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [formStatus, setFormStatus] = useState<"idle" | "sent">("idle");
  const shouldReduceMotion = useReducedMotion();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("sent");
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: "var(--bg)", color: "var(--text)" }}
    >
      {/* Skip to main content */}
      <a
        href="#main"
        className={`sr-only focus:not-sr-only fixed top-4 left-4 z-[9999] px-4 py-2 text-sm font-medium ${focusRing}`}
        style={{ backgroundColor: "var(--accent)", color: "#0d0b09" }}
      >
        Skip to main content
      </a>

      {/* Navbar */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#0d0b09]/85 backdrop-blur-md py-4 border-b border-[color:var(--border)]"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <motion.a
            href="#"
            initial={shouldReduceMotion ? {} : { opacity: 0, x: -20 }}
            animate={shouldReduceMotion ? {} : { opacity: 1, x: 0 }}
            className={`text-2xl italic font-[family-name:var(--font-display)] cursor-pointer ${focusRing}`}
            style={{ color: "var(--accent)" }}
          >
            ERWI.
          </motion.a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={shouldReduceMotion ? {} : { opacity: 0, y: -10 }}
                animate={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
                transition={shouldReduceMotion ? {} : { delay: i * 0.1 }}
                className={`text-sm font-medium transition-colors cursor-pointer ${focusRing}`}
                style={{ color: "var(--text-muted)" }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "var(--text)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "var(--text-muted)")
                }
              >
                {link.name}
              </motion.a>
            ))}
            <motion.a
              href="#contact"
              initial={shouldReduceMotion ? {} : { opacity: 0, scale: 0.9 }}
              animate={shouldReduceMotion ? {} : { opacity: 1, scale: 1 }}
              className={`text-xs tracking-[0.15em] uppercase px-5 py-2 transition-colors cursor-pointer ${focusRing}`}
              style={{
                border: "1px solid var(--border-accent)",
                color: "var(--accent)",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "var(--accent-dim)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "transparent")
              }
            >
              Hire Me
            </motion.a>
          </div>

          {/* Mobile Toggle */}
          <button
            className={`md:hidden transition-colors cursor-pointer ${focusRing}`}
            style={{ color: "var(--text-muted)" }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={shouldReduceMotion ? {} : { opacity: 0, height: 0 }}
              animate={shouldReduceMotion ? {} : { opacity: 1, height: "auto" }}
              exit={shouldReduceMotion ? {} : { opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden"
              style={{
                backgroundColor: "var(--bg-surface)",
                borderBottom: "1px solid var(--border)",
              }}
            >
              <div className="px-6 py-8 flex flex-col gap-6">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`text-lg font-medium transition-colors cursor-pointer ${focusRing}`}
                    style={{ color: "var(--text-muted)" }}
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <main id="main">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
          {/* Subtle diagonal grid background */}
          <div
            className="absolute inset-0 z-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "linear-gradient(var(--text) 1px, transparent 1px), linear-gradient(90deg, var(--text) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />

          {/* Decorative large number */}
          <div
            className="absolute bottom-0 right-0 z-0 overflow-hidden leading-none pointer-events-none select-none opacity-30"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "20rem",
              color: "var(--text-faint)",
              lineHeight: 1,
            }}
          >
            01
          </div>

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <motion.div
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 30 }}
              animate={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
              transition={shouldReduceMotion ? {} : { duration: 0.8 }}
              className="max-w-3xl"
            >
              <motion.span
                initial={shouldReduceMotion ? {} : { opacity: 0 }}
                animate={shouldReduceMotion ? {} : { opacity: 1 }}
                transition={shouldReduceMotion ? {} : { delay: 0.2 }}
                className="inline-block px-4 py-1.5 text-[10px] tracking-[0.25em] uppercase rounded-none mb-6"
                style={{
                  border: "1px solid var(--border-accent)",
                  color: "var(--accent)",
                }}
              >
                Available for new opportunities
              </motion.span>
              <h1
                className="text-6xl md:text-8xl font-light leading-[1.05] mb-8"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Building digital{" "}
                <em
                  className="italic"
                  style={{ color: "var(--accent)" }}
                >
                  experiences
                </em>{" "}
                that matter.
              </h1>
              <p
                className="text-lg md:text-xl mb-10 leading-relaxed max-w-2xl"
                style={{ color: "var(--text-muted)" }}
              >
                I'm a full-stack web developer with 6+ years of experience
                building enterprise applications for regulated industries —
                including banking and insurance. Currently focused on freelance
                projects and AI-assisted development.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#projects"
                  className={`px-8 py-4 font-semibold tracking-wide rounded-none flex items-center gap-2 group transition-colors cursor-pointer ${focusRing}`}
                  style={{
                    backgroundColor: "var(--accent)",
                    color: "#0d0b09",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.backgroundColor =
                      "var(--accent-hover)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.backgroundColor = "var(--accent)")
                  }
                >
                  View My Work
                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </a>
                <div className="flex items-center gap-4 px-4">
                  <a
                    href="#"
                    aria-label="GitHub"
                    className={`transition-colors cursor-pointer ${focusRing}`}
                    style={{ color: "var(--text-faint)" }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = "var(--accent)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = "var(--text-faint)")
                    }
                  >
                    <Github size={24} />
                  </a>
                  <a
                    href="#"
                    aria-label="LinkedIn"
                    className={`transition-colors cursor-pointer ${focusRing}`}
                    style={{ color: "var(--text-faint)" }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = "var(--accent)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = "var(--text-faint)")
                    }
                  >
                    <Linkedin size={24} />
                  </a>
                  <a
                    href="#"
                    aria-label="Email"
                    className={`transition-colors cursor-pointer ${focusRing}`}
                    style={{ color: "var(--text-faint)" }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = "var(--accent)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = "var(--text-faint)")
                    }
                  >
                    <Mail size={24} />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0 }}
            animate={shouldReduceMotion ? {} : { opacity: 1 }}
            transition={shouldReduceMotion ? {} : { delay: 1, duration: 1 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            style={{ color: "var(--text-faint)" }}
          >
            <span className="text-[10px] uppercase tracking-[0.2em]">
              Scroll
            </span>
            <ChevronDown size={16} className="motion-safe:animate-bounce" />
          </motion.div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 bg-[#141210]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={shouldReduceMotion ? {} : { opacity: 0, scale: 0.9 }}
                whileInView={shouldReduceMotion ? {} : { opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative aspect-square"
                style={{ ring: "1px solid var(--border-accent)" }}
              >
                <div
                  className="w-full h-full overflow-hidden"
                  style={{
                    outline: "1px solid var(--border-accent)",
                  }}
                >
                  <img
                    src="https://picsum.photos/seed/profile/800/800"
                    alt="Erwin Dela Cruz - Full-Stack Developer"
                    loading="lazy"
                    width="800"
                    height="800"
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div
                  className="absolute -bottom-3 -right-3 w-full h-full border pointer-events-none"
                  style={{
                    borderColor: "var(--accent)",
                    opacity: 0.2,
                  }}
                />
              </motion.div>

              <div>
                <SectionHeading
                  index="02"
                  subtitle="A little bit about who I am and what I do."
                >
                  About Me
                </SectionHeading>
                <div
                  className="space-y-6 leading-relaxed"
                  style={{ color: "var(--text-muted)" }}
                >
                  <p>
                    Hello! I'm Erwin — a results-oriented web application developer
                    with 6+ years of experience building enterprise applications
                    for regulated industries, including banking and insurance.
                  </p>
                  <p>
                    I've worked across the full stack at companies like Metrobank
                    and Computer Professionals, Inc., where I specialized in
                    React micro-frontends, backend microservices, and production
                    incident resolution. I graduated Cum Laude with a BS in
                    Information Technology from AMA ACLC College of Apalit.
                  </p>
                  <p>
                    These days I work as a freelance developer — building and
                    deploying full-stack web and mobile applications solo, and
                    leveraging AI-assisted tools like Claude Code to accelerate
                    delivery and improve code quality.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-24">
          <div className="max-w-7xl mx-auto px-6">
            <SectionHeading
              index="03"
              subtitle="Where I've worked and what I've shipped."
            >
              Experience
            </SectionHeading>

            <div className="relative">
              {/* Vertical timeline line */}
              <div
                className="absolute left-0 top-0 bottom-0 w-px hidden md:block"
                style={{ backgroundColor: "var(--border)" }}
              />

              <div className="space-y-0">
                {EXPERIENCE.map((exp, i) => (
                  <motion.div
                    key={exp.company}
                    initial={shouldReduceMotion ? {} : { opacity: 0, x: -20 }}
                    whileInView={shouldReduceMotion ? {} : { opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={shouldReduceMotion ? {} : { delay: i * 0.12 }}
                    className="relative md:pl-12 pb-12 last:pb-0"
                  >
                    {/* Timeline dot */}
                    <div
                      className="absolute left-0 top-1 -translate-x-1/2 w-2 h-2 hidden md:block"
                      style={{ backgroundColor: "var(--accent)" }}
                    />

                    <div
                      className="p-6 md:p-8 transition-all duration-200"
                      style={{
                        backgroundColor: "var(--bg-surface)",
                        border: "1px solid var(--border)",
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.borderColor = "var(--border-accent)")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.borderColor = "var(--border)")
                      }
                    >
                      {/* Header row */}
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-5">
                        <div>
                          <h3
                            className="text-lg font-semibold leading-tight mb-1"
                            style={{ color: "var(--text)" }}
                          >
                            {exp.role}
                          </h3>
                          <p
                            className="text-sm font-medium"
                            style={{ color: "var(--accent)" }}
                          >
                            {exp.company}
                          </p>
                        </div>
                        <div className="flex flex-col sm:items-end gap-1 shrink-0">
                          <span
                            className="text-[10px] tracking-[0.2em] uppercase px-2 py-1 self-start sm:self-auto"
                            style={{
                              border: "1px solid var(--border-accent)",
                              color: "var(--accent)",
                            }}
                          >
                            {exp.type}
                          </span>
                          <span
                            className="text-xs"
                            style={{ color: "var(--text-muted)" }}
                          >
                            {exp.period} · {exp.location}
                          </span>
                        </div>
                      </div>

                      {/* Highlights */}
                      <ul className="space-y-2.5">
                        {exp.highlights.map((point, j) => (
                          <li key={j} className="flex gap-3 text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                            <span
                              className="mt-2 w-1 h-1 shrink-0 rounded-full"
                              style={{ backgroundColor: "var(--accent)" }}
                            />
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-24 bg-[#141210]">
          <div className="max-w-7xl mx-auto px-6">
            <SectionHeading
              index="04"
              subtitle="Some things I've built recently."
            >
              Selected Projects
            </SectionHeading>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {PROJECTS.map((project, i) => (
                <motion.div
                  key={project.title}
                  initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
                  whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={shouldReduceMotion ? {} : { delay: i * 0.1 }}
                  className="group overflow-hidden transition-all rounded-none"
                  style={{
                    backgroundColor: "var(--bg-surface)",
                    border: "1px solid var(--border)",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.borderColor = "var(--border-accent)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.borderColor = "var(--border)")
                  }
                >
                  <div className="aspect-video overflow-hidden relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      width="800"
                      height="600"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                      <a
                        href={project.github}
                        aria-label={`${project.title} on GitHub`}
                        className={`p-2 rounded-none transition-opacity hover:opacity-80 cursor-pointer ${focusRing}`}
                        style={{
                          backgroundColor: "var(--accent)",
                          color: "#0d0b09",
                        }}
                      >
                        <Github size={20} />
                      </a>
                      <a
                        href={project.link}
                        aria-label={`${project.title} live demo`}
                        className={`p-2 rounded-none transition-opacity hover:opacity-80 cursor-pointer ${focusRing}`}
                        style={{
                          backgroundColor: "var(--accent)",
                          color: "#0d0b09",
                        }}
                      >
                        <ExternalLink size={20} />
                      </a>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3
                      className="text-xl font-bold mb-2 transition-colors group-hover:text-[color:var(--accent)]"
                    >
                      {project.title}
                    </h3>
                    <p
                      className="text-sm mb-4 line-clamp-2"
                      style={{ color: "var(--text-muted)" }}
                    >
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="text-[10px] tracking-widest uppercase px-2 py-1"
                          style={{
                            border: "1px solid var(--border)",
                            color: "var(--text-muted)",
                          }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-24">
          <div className="max-w-7xl mx-auto px-6">
            <SectionHeading
              index="05"
              subtitle="The technologies and tools I use to bring ideas to life."
            >
              My Skillset
            </SectionHeading>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {["Frontend", "Backend", "Tools"].map((category) => (
                <div key={category} className="space-y-4">
                  <h4
                    className="text-xs tracking-[0.25em] uppercase font-semibold mb-6"
                    style={{ color: "var(--accent)" }}
                  >
                    {category}
                  </h4>
                  <div className="space-y-3">
                    {SKILLS.filter((s) => s.category === category).map(
                      (skill) => (
                        <motion.div
                          key={skill.name}
                          whileHover={shouldReduceMotion ? {} : { x: 5 }}
                          className="flex items-center gap-3 p-3 rounded-none transition-colors"
                          style={{
                            backgroundColor: "var(--bg-raised)",
                            border: "1px solid var(--border)",
                          }}
                          onMouseEnter={(e) =>
                            (e.currentTarget.style.borderColor =
                              "var(--border-accent)")
                          }
                          onMouseLeave={(e) =>
                            (e.currentTarget.style.borderColor = "var(--border)")
                          }
                        >
                          <div style={{ color: "var(--accent)" }}>
                            {skill.icon}
                          </div>
                          <span className="text-sm font-medium">
                            {skill.name}
                          </span>
                        </motion.div>
                      )
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-32 bg-[#0d0b09]">
          <div className="max-w-7xl mx-auto px-6">
            <div style={{ borderTop: "1px solid var(--border)" }}>
              <div className="pt-20 pb-12 grid md:grid-cols-2 gap-16 items-start">
                {/* Left — heading + email */}
                <div>
                  <SectionHeading index="06">Get in touch</SectionHeading>
                  <motion.h2
                    initial={shouldReduceMotion ? {} : { opacity: 0, y: 30 }}
                    whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-light leading-[1.1] mb-8"
                    style={{
                      fontFamily: "var(--font-display)",
                      color: "var(--text)",
                    }}
                  >
                    Let's build something{" "}
                    <em style={{ color: "var(--accent)" }}>remarkable</em>{" "}
                    together.
                  </motion.h2>
                  <motion.a
                    href="mailto:erwin.rdf@gmail.com"
                    initial={shouldReduceMotion ? {} : { opacity: 0 }}
                    whileInView={shouldReduceMotion ? {} : { opacity: 1 }}
                    viewport={{ once: true }}
                    transition={shouldReduceMotion ? {} : { delay: 0.2 }}
                    className={`inline-flex items-center gap-4 group cursor-pointer ${focusRing}`}
                    style={{ color: "var(--text-muted)" }}
                  >
                    <span className="text-lg tracking-wide transition-colors group-hover:text-[color:var(--accent)]">
                      erwin.rdf@gmail.com
                    </span>
                    <ArrowRight
                      size={18}
                      className="group-hover:translate-x-2 transition-transform"
                      style={{ color: "var(--accent)" }}
                    />
                  </motion.a>
                </div>

                {/* Right — form */}
                <motion.div
                  initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
                  whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={shouldReduceMotion ? {} : { delay: 0.15 }}
                >
                  {formStatus === "sent" ? (
                    <div
                      className="p-8 text-center"
                      style={{ border: "1px solid var(--border-accent)" }}
                    >
                      <p
                        className="text-lg font-light"
                        style={{
                          fontFamily: "var(--font-display)",
                          color: "var(--accent)",
                        }}
                      >
                        Message received.
                      </p>
                      <p className="text-sm mt-2" style={{ color: "var(--text-muted)" }}>
                        I'll get back to you soon.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                      <div>
                        <label
                          htmlFor="contact-name"
                          className="block text-[10px] tracking-[0.2em] uppercase mb-2"
                          style={{ color: "var(--text-muted)" }}
                        >
                          Name
                        </label>
                        <input
                          id="contact-name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) =>
                            setFormData((f) => ({ ...f, name: e.target.value }))
                          }
                          className={`w-full px-4 py-3 text-sm outline-none transition-colors ${focusRing}`}
                          style={{
                            backgroundColor: "var(--bg-raised)",
                            border: "1px solid var(--border)",
                            color: "var(--text)",
                          }}
                          onFocus={(e) =>
                            (e.currentTarget.style.borderColor = "var(--border-accent)")
                          }
                          onBlur={(e) =>
                            (e.currentTarget.style.borderColor = "var(--border)")
                          }
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="contact-email"
                          className="block text-[10px] tracking-[0.2em] uppercase mb-2"
                          style={{ color: "var(--text-muted)" }}
                        >
                          Email
                        </label>
                        <input
                          id="contact-email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) =>
                            setFormData((f) => ({ ...f, email: e.target.value }))
                          }
                          className={`w-full px-4 py-3 text-sm outline-none transition-colors ${focusRing}`}
                          style={{
                            backgroundColor: "var(--bg-raised)",
                            border: "1px solid var(--border)",
                            color: "var(--text)",
                          }}
                          onFocus={(e) =>
                            (e.currentTarget.style.borderColor = "var(--border-accent)")
                          }
                          onBlur={(e) =>
                            (e.currentTarget.style.borderColor = "var(--border)")
                          }
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="contact-message"
                          className="block text-[10px] tracking-[0.2em] uppercase mb-2"
                          style={{ color: "var(--text-muted)" }}
                        >
                          Message
                        </label>
                        <textarea
                          id="contact-message"
                          required
                          rows={5}
                          value={formData.message}
                          onChange={(e) =>
                            setFormData((f) => ({ ...f, message: e.target.value }))
                          }
                          className={`w-full px-4 py-3 text-sm outline-none transition-colors resize-none ${focusRing}`}
                          style={{
                            backgroundColor: "var(--bg-raised)",
                            border: "1px solid var(--border)",
                            color: "var(--text)",
                          }}
                          onFocus={(e) =>
                            (e.currentTarget.style.borderColor = "var(--border-accent)")
                          }
                          onBlur={(e) =>
                            (e.currentTarget.style.borderColor = "var(--border)")
                          }
                        />
                      </div>
                      <button
                        type="submit"
                        className={`w-full py-3 text-xs tracking-[0.15em] uppercase font-semibold transition-colors cursor-pointer ${focusRing}`}
                        style={{
                          backgroundColor: "var(--accent)",
                          color: "#0d0b09",
                        }}
                        onMouseEnter={(e) =>
                          (e.currentTarget.style.backgroundColor = "var(--accent-hover)")
                        }
                        onMouseLeave={(e) =>
                          (e.currentTarget.style.backgroundColor = "var(--accent)")
                        }
                      >
                        Send Message
                      </button>
                    </form>
                  )}
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer
        className="py-12"
        style={{ borderTop: "1px solid var(--border)" }}
      >
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <a
            href="#"
            className={`text-2xl italic font-[family-name:var(--font-display)] cursor-pointer ${focusRing}`}
            style={{ color: "var(--accent)" }}
          >
            ERWI.
          </a>

          <div className="flex items-center gap-8 text-sm">
            <a
              href="#"
              className={`transition-colors cursor-pointer ${focusRing}`}
              style={{ color: "var(--text-faint)" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "var(--text-muted)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "var(--text-faint)")
              }
            >
              Twitter
            </a>
            <a
              href="#"
              className={`transition-colors cursor-pointer ${focusRing}`}
              style={{ color: "var(--text-faint)" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "var(--text-muted)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "var(--text-faint)")
              }
            >
              GitHub
            </a>
            <a
              href="#"
              className={`transition-colors cursor-pointer ${focusRing}`}
              style={{ color: "var(--text-faint)" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "var(--text-muted)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "var(--text-faint)")
              }
            >
              LinkedIn
            </a>
          </div>

          <p className="text-xs" style={{ color: "var(--text-faint)" }}>
            &copy; {new Date().getFullYear()} Erwin Dela Cruz. Built with React &
            Tailwind.
          </p>
        </div>
      </footer>
    </div>
  );
}
