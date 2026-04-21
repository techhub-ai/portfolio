import Link from 'next/link'
import { Mail, ArrowUpRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { TextEffect } from '@/components/ui/text-effect'
import { AnimatedGroup } from '@/components/ui/animated-group'

function GithubIcon({ className }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
        </svg>
    )
}

function LinkedinIcon({ className }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
    )
}

const socialLinks = [
    {
        label: 'GitHub',
        href: 'https://github.com/erwin-delacruz',
        icon: GithubIcon,
        username: '@erwin-delacruz',
    },
    {
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/in/erwinmdc26/',
        icon: LinkedinIcon,
        username: 'in/erwin-delacruz',
    },
    {
        label: 'Email',
        href: 'mailto:erwin.rdf@gmail.com',
        icon: Mail,
        username: 'erwin.rdf@gmail.com',
    },
]

const transitionVariants = {
    item: {
        hidden: { opacity: 0, y: 12 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { type: 'spring' as const, bounce: 0.2, duration: 1 },
        },
    },
}

export function Contact() {
    return (
        <section id="contact" className="py-24 md:py-32">
            <div className="mx-auto max-w-7xl px-6">
                <div className="mx-auto max-w-2xl text-center">
                    <TextEffect
                        preset="fade-in-blur"
                        speedSegment={0.3}
                        as="h2"
                        className="mb-4 text-3xl font-bold tracking-tight md:text-5xl">
                        Get In Touch
                    </TextEffect>

                    <TextEffect
                        per="line"
                        preset="fade-in-blur"
                        speedSegment={0.3}
                        delay={0.2}
                        as="p"
                        className="mb-10 leading-relaxed text-muted-foreground">
                        I&apos;m currently open to new opportunities. Whether you have a project in mind, want to
                        collaborate, or just want to say hello — my inbox is always open.
                    </TextEffect>

                    <AnimatedGroup
                        variants={{
                            container: { visible: { transition: { delayChildren: 0.4 } } },
                            ...transitionVariants,
                        }}
                        className="mb-12">
                        <div className="inline-block rounded-[calc(var(--radius-xl)+0.125rem)] border bg-foreground/10 p-0.5">
                            <Button asChild size="lg" className="gap-2 rounded-xl px-8">
                                <Link href="mailto:erwin.rdf@gmail.com">
                                    <Mail className="size-4" />
                                    Say Hello
                                    <ArrowUpRight className="size-4" />
                                </Link>
                            </Button>
                        </div>
                    </AnimatedGroup>

                    {/* Divider */}
                    <div className="mb-10 flex items-center gap-4">
                        <div className="h-px flex-1 bg-border" />
                        <span className="text-xs text-muted-foreground">or find me on</span>
                        <div className="h-px flex-1 bg-border" />
                    </div>

                    {/* Social cards */}
                    <AnimatedGroup
                        variants={{
                            container: { visible: { transition: { staggerChildren: 0.08, delayChildren: 0.5 } } },
                            ...transitionVariants,
                        }}
                        className="flex flex-wrap justify-center gap-6">
                        {socialLinks.map(({ label, href, icon: Icon, username }) => (
                            <Link
                                key={label}
                                href={href}
                                target={href.startsWith('mailto') ? undefined : '_blank'}
                                rel={href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                                className="group block text-center transition-all duration-200 hover:shadow-md hover:shadow-primary/5">
                                <Icon
                                    className="mx-auto mb-2 size-5 text-muted-foreground transition-colors duration-200 group-hover:text-primary"
                                    aria-hidden
                                />
                                <p className="text-sm font-medium">{label}</p>
                                <p className="text-xs text-muted-foreground">{username}</p>
                            </Link>
                        ))}
                    </AnimatedGroup>
                </div>

                <p className="mt-20 text-center text-xs text-muted-foreground">
                    &copy; 2026 Erwin Dela Cruz
                </p>
            </div>
        </section>
    )
}
