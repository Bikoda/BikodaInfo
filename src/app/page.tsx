"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Code2,
  Gamepad2,
  Database,
  TestTubes,
  ShoppingCart,
  Sparkles,
  Mail,
  Github,
  Linkedin,
  Hammer,
  Rocket,
  MessageSquare,
  Menu,
  X,
  Briefcase,
} from "lucide-react";

// --- Quick configuration (replace these with your real links) ---
const CONFIG = {
  EMAIL: "contact@bikoda.dev",
  WHATSAPP: "https://wa.me/5490000000000", // <-- replace with your number
  GITHUB: "https://github.com/Bikoda",
  LINKEDIN: "https://www.linkedin.com/in/juan-francisco-maggi/",
  CALENDLY: "https://calendly.com/your-handle/vibecoding-session", // optional
  CV_URL: "#", // optional
};

const Pill = ({ children }: { children: React.ReactNode }) => (
  <span className="px-3 py-1 text-xs rounded-full bg-muted text-foreground/80 border">{children}</span>
);

const Section = ({ id, title, kicker, children }: any) => (
  <section id={id} className="scroll-mt-24 py-12 md:py-20">
    <div className="max-w-6xl mx-auto px-4">
      <div className="mb-8 md:mb-12">
        {kicker && <p className="uppercase tracking-widest text-xs text-muted-foreground">{kicker}</p>}
        <h2 className="text-2xl md:text-4xl font-bold mt-2">{title}</h2>
      </div>
      {children}
    </div>
  </section>
);

export default function BikodaInfo() {
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    
    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
      company: (form.elements.namedItem("company") as HTMLInputElement)?.value || "", // Honeypot
    };
    
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      
      setSending(false);
      setSent(res.ok);
    } catch (error) {
      console.error("Form submission error:", error);
      setSending(false);
    }
  };

  const services = [
    {
      icon: <Gamepad2 className="h-5 w-5" />, title: "Video games",
      blurb: "From rapid prototypes to polished builds in Unity/Unreal. Gameplay, tools, pipelines, and builds for PC or mobile.",
      chips: ["Unity", "C#", "Unreal", "Shaders", "AI/NPCs"],
    },
    {
      icon: <Code2 className="h-5 w-5" />, title: "Apps & Web",
      blurb: "Desktop apps, APIs, and full‑stack web. Ship reliable software with clean code and pragmatic DX.",
      chips: [".NET", "C#", "React", "Next.js", "Node", "AWS"],
    },
    {
      icon: <Briefcase className="h-5 w-5" />, title: "Business Solutions",
      blurb: "Custom software solutions for business needs. From internal tools to customer-facing applications.",
      chips: ["Custom Apps", "Automation", "Integrations", "Scalable"],
    },
    {
      icon: <Database className="h-5 w-5" />, title: "Data & DB",
      blurb: "Schema design, migrations, ETL, and performance tuning. QA on data integrity and reporting.",
      chips: ["SQL", "Postgres", "MongoDB", "Azure"],
    },
    {
      icon: <TestTubes className="h-5 w-5" />, title: "Testing & QA",
      blurb: "Test plans, automation, CI/CD hardening, and bug‑hunting. I break things so users don't.",
      chips: ["Playwright", "xUnit", "Jest", "CI/CD"],
    },
    {
      icon: <Sparkles className="h-5 w-5" />, title: "Vibecoding Sessions",
      blurb: "Pair with me in Cursor. We riff, build, and ship together—fast.",
      chips: ["Cursor", "AI‑assisted", "Pair dev"],
    },
  ];

  const logos = ["Unity", ".NET", "Azure", "React", "Node", "Postgres", "GitHub", "Linux"];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "BikodaInfo",
    "url": "https://bikoda.dev",
    "areaServed": ["Remote", "Argentina", "LATAM"],
    "description": "Vibecoding studio: games, apps, business solutions, QA.",
    "sameAs": [CONFIG.GITHUB, CONFIG.LINKEDIN]
  };

  return (
    <div className="min-h-screen dark-gradient text-foreground">
      {/* JSON-LD structured data */}
      <script 
        type="application/ld+json" 
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} 
      />
      {/* Skip to content link */}
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-[100] bg-primary text-primary-foreground px-4 py-2 rounded-md font-medium">
        Skip to content
      </a>
      
      {/* Nav */}
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b border-border/50">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-xl bg-primary/20 grid place-items-center yellow-glow">
              <Rocket className="h-4 w-4 text-primary" />
            </div>
            <span className="font-semibold">BikodaInfo</span>
            <Badge variant="secondary" className="ml-2">Vibecoding Studio</Badge>
          </div>
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#services" className="hover:opacity-70 transition-opacity">Services</a>
            <a href="#process" className="hover:opacity-70 transition-opacity">Process</a>
            <a href="#work" className="hover:opacity-70 transition-opacity">Work</a>
            <a href="#contact" className="hover:opacity-70 transition-opacity">Contact</a>
            <a href={CONFIG.GITHUB} target="_blank" rel="noopener noreferrer" className="hover:opacity-70 flex items-center gap-1 transition-opacity"><Github className="h-4 w-4"/> GitHub</a>
            <a href={CONFIG.LINKEDIN} target="_blank" rel="noopener noreferrer" className="hover:opacity-70 flex items-center gap-1 transition-opacity"><Linkedin className="h-4 w-4"/> LinkedIn</a>
          </nav>
          
          {/* Desktop CTA + Mobile Menu Button */}
          <div className="flex items-center gap-2">
            {CONFIG.CALENDLY !== "#" && (
              <Button asChild className="hidden sm:inline-flex">
                <a href={CONFIG.CALENDLY} target="_blank" rel="noopener noreferrer">Book a Vibecoding Session (30m)</a>
              </Button>
            )}
            
            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden border-t border-border/50 bg-background/95 backdrop-blur"
          >
            <nav className="max-w-6xl mx-auto px-4 py-4 flex flex-col gap-4">
              <a href="#services" className="text-sm hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>Services</a>
              <a href="#process" className="text-sm hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>Process</a>
              <a href="#work" className="text-sm hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>Work</a>
              <a href="#contact" className="text-sm hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>Contact</a>
              <div className="flex gap-4 pt-2 border-t border-border/50">
                <a href={CONFIG.GITHUB} target="_blank" rel="noopener noreferrer" className="text-sm hover:text-primary flex items-center gap-1 transition-colors"><Github className="h-4 w-4"/> GitHub</a>
                <a href={CONFIG.LINKEDIN} target="_blank" rel="noopener noreferrer" className="text-sm hover:text-primary flex items-center gap-1 transition-colors"><Linkedin className="h-4 w-4"/> LinkedIn</a>
              </div>
              {CONFIG.CALENDLY !== "#" && (
                <Button asChild className="mt-2">
                  <a href={CONFIG.CALENDLY} target="_blank" rel="noopener noreferrer" onClick={() => setMobileMenuOpen(false)}>Book a Vibecoding Session (30m)</a>
                </Button>
              )}
            </nav>
          </motion.div>
                 )}
        </header>

      <main id="main">
        {/* Hero */}
        <section className="relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 py-20 md:py-28 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-6xl font-extrabold leading-tight"
            >
              Vibecoding & Testing
              <br />
              to ship <span className="text-primary">real products</span>
            </motion.h1>
            <p className="mt-4 text-muted-foreground max-w-prose">
              I help teams and founders go from spark → shipped: videogames, desktop apps, web, and e‑commerce. Pair with me in Cursor or hand me the spec—either way we deliver.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Pill>Unity • .NET • React</Pill>
              <Pill>Azure • Postgres</Pill>
              <Pill>Playwright • CI/CD</Pill>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild><a href="#contact"><Mail className="h-4 w-4 mr-2"/> Request a Quote</a></Button>
              <Button variant="secondary" asChild><a href="#work"><Hammer className="h-4 w-4 mr-2"/> See Work</a></Button>
            </div>
          </div>
          <div className="grid gap-4">
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
              <Card className="rounded-2xl card-glow transition-all duration-300">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg flex items-center gap-2"><Gamepad2 className="h-5 w-5 text-primary"/> Game Dev</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  Prototypes, tooling, gameplay systems, and builds—tight loops, tasty juice, zero crunch.
                </CardContent>
              </Card>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
              <Card className="rounded-2xl card-glow transition-all duration-300">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg flex items-center gap-2"><Database className="h-5 w-5 text-primary"/> Data & QA</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  Schema, migrations, test automation, and perf. I break it, then fix it better.
                </CardContent>
              </Card>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
              <Card className="rounded-2xl card-glow transition-all duration-300">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg flex items-center gap-2"><Code2 className="h-5 w-5 text-primary"/> Apps & Web</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  Clean architectures, tidy repos, readable tests, and fast CI.
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Logos / Tech */}
      <div className="py-8 border-y bg-background/30 border-border/50">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-4 place-items-center">
          {logos.map((l) => (
            <span key={l} className="text-muted-foreground text-sm">{l}</span>
          ))}
        </div>
      </div>

      {/* Services */}
      <Section id="services" title="Services" kicker="What I do">
        <div className="grid md:grid-cols-3 gap-4 md:gap-6">
          {services.map((s) => (
            <Card key={s.title} className="rounded-2xl card-glow transition-all duration-300 hover:scale-105">
              <CardHeader className="pb-2">
                <CardTitle className="text-xl flex items-center gap-2 text-primary">{s.icon}{s.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">{s.blurb}</p>
                <div className="flex flex-wrap gap-2">
                  {s.chips.map((c: string) => <Badge key={c} variant="outline" className="border-primary/30 text-primary hover:bg-primary/10">{c}</Badge>)}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Process */}
      <Section id="process" title="Vibecoding Process" kicker="How we build together">
        <div className="grid md:grid-cols-3 gap-4 md:gap-6">
          {[
            { step: "1", title: "Jam", desc: "We chat, sketch scope, and lock a timeline. Cursor ready." },
            { step: "2", title: "Build", desc: "Pair dev + async commits. Demos early, feedback fast." },
            { step: "3", title: "Ship", desc: "Tests, polish, deploy. Docs + handoff + optional support." },
          ].map((p) => (
            <Card key={p.step} className="rounded-2xl card-glow transition-all duration-300 hover:scale-105">
              <CardHeader className="pb-2">
                <CardTitle className="text-xl">
                  <span className="text-primary font-bold">{p.step}.</span> {p.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">{p.desc}</CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Work / Case studies (placeholders) */}
      <Section id="work" title="Selected Work" kicker="Case studies">
        <div className="grid md:grid-cols-3 gap-4 md:gap-6">
          {[1,2,3].map((i) => (
            <Card key={i} className="rounded-2xl overflow-hidden card-glow transition-all duration-300 hover:scale-105">
              <div className="aspect-video bg-muted/50 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
              </div>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg text-primary">Project {i}</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                Short blurb about the outcome and the tech used. (Replace with real case study.)
              </CardContent>
            </Card>
          ))}
        </div>
        <p className="text-sm text-muted-foreground mt-4">Want a deeper dive? Let's add write‑ups with metrics and gifs.</p>
      </Section>

      {/* CTA strip */}
      <div className="bg-primary/10 border-y border-primary/20 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5" />
          <div className="max-w-6xl mx-auto px-4 py-8 md:py-10 flex flex-col md:flex-row items-center justify-between gap-4 relative z-10">
            <div>
              <h3 className="text-xl md:text-2xl font-semibold">Have a project? Or want to jam in Cursor?</h3>
              <p className="text-muted-foreground text-sm">Currently contracting at Globant, but open to interesting side projects and collaborations.</p>
            </div>
          <div className="flex gap-3">
            {CONFIG.CALENDLY !== "#" && (
              <Button asChild><a href={CONFIG.CALENDLY} target="_blank" rel="noopener noreferrer">Book a Vibecoding Session (30m)</a></Button>
            )}
            <Button variant="secondary" asChild><a href="#contact">Contact</a></Button>
          </div>
        </div>
      </div>

      {/* Contact */}
      <Section id="contact" title="Contact" kicker="Get in touch">
        <div className="grid md:grid-cols-2 gap-6 items-start">
          <Card className="rounded-2xl card-glow">
            <CardHeader className="pb-2">
              <CardTitle className="text-xl flex items-center gap-2"><MessageSquare className="h-5 w-5 text-primary"/> Tell me about your idea</CardTitle>
            </CardHeader>
            <CardContent>
              {!sent ? (
                <form onSubmit={onSubmit} className="grid gap-3">
                  {/* Honeypot field for spam protection */}
                  <input type="text" name="company" className="hidden" tabIndex={-1} autoComplete="off" />
                  
                  <div className="grid gap-1">
                    <label className="text-sm">Your name</label>
                    <Input name="name" placeholder="Ada Lovelace" required />
                  </div>
                  <div className="grid gap-1">
                    <label className="text-sm">Email</label>
                    <Input name="email" type="email" placeholder="you@domain.com" required />
                  </div>
                  <div className="grid gap-1">
                    <label className="text-sm">What do we build?</label>
                    <Textarea name="message" placeholder="A tight little e‑commerce with XYZ… or a Unity prototype that does…" rows={5} required />
                  </div>
                  <div className="flex gap-2 pt-2">
                    <Button type="submit" disabled={sending}>{sending ? "Sending…" : "Send"}</Button>
                    <Button variant="secondary" asChild>
                      <a href={`mailto:${CONFIG.EMAIL}`}>Email me</a>
                    </Button>
                  </div>
                </form>
              ) : (
                <div className="text-sm">
                  <p className="font-medium">Thanks! I'll get back to you shortly.</p>
                  <p className="text-muted-foreground mt-1">Your message has been sent successfully.</p>
                </div>
              )}
            </CardContent>
          </Card>

          <div className="grid gap-4">
            <Card className="rounded-2xl card-glow">
              <CardHeader className="pb-2">
                <CardTitle className="text-xl">Other ways to reach me</CardTitle>
              </CardHeader>
              <CardContent className="text-sm grid gap-2">
                <a className="flex items-center gap-2 hover:underline hover:text-primary transition-colors" href={`mailto:${CONFIG.EMAIL}`}><Mail className="h-4 w-4 text-primary"/> {CONFIG.EMAIL}</a>
                <a className="flex items-center gap-2 hover:underline hover:text-primary transition-colors" href={CONFIG.GITHUB} target="_blank" rel="noopener noreferrer"><Github className="h-4 w-4 text-primary"/> GitHub</a>
                <a className="flex items-center gap-2 hover:underline hover:text-primary transition-colors" href={CONFIG.LINKEDIN} target="_blank" rel="noopener noreferrer"><Linkedin className="h-4 w-4 text-primary"/> LinkedIn</a>
                <a className="flex items-center gap-2 hover:underline hover:text-primary transition-colors" href={CONFIG.WHATSAPP} target="_blank" rel="noopener noreferrer">WhatsApp</a>
                                  {CONFIG.CV_URL !== "#" && (
                    <a className="flex items-center gap-2 hover:underline hover:text-primary transition-colors" href={CONFIG.CV_URL} target="_blank" rel="noopener noreferrer">Résumé / CV</a>
                  )}
              </CardContent>
            </Card>
            <Card className="rounded-2xl card-glow">
              <CardHeader className="pb-2">
                <CardTitle className="text-xl">Availability</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                <ul className="list-disc pl-5 space-y-1">
                  <li>Current role: <span className="text-primary font-medium">Contractor at Globant</span></li>
                  <li>Freelance & side projects: <span className="text-primary font-medium">limited availability</span></li>
                  <li>Full‑time offers: <span className="text-primary font-medium">not considering</span></li>
                  <li>Timezone: <span className="text-foreground">UTC‑3 (Argentina)</span></li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>

      <Separator />

      {/* Footer */}
      <footer className="py-10">
        <div className="max-w-6xl mx-auto px-4 text-sm text-muted-foreground flex flex-col md:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} BikodaInfo — Built with love, coffee, and Cursor.</p>
          <div className="flex gap-3">
            <a href="#services" className="hover:underline">Services</a>
            <a href="#process" className="hover:underline">Process</a>
            <a href="#work" className="hover:underline">Work</a>
            <a href="#contact" className="hover:underline">Contact</a>
          </div>
        </div>
      </footer>
      </main>
    </div>
  );
} 