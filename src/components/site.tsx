import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/ybs_logo.png.asset.json";
import { EMAILS, LINKEDIN, WEBSITE, type Maturity } from "@/lib/content";
import { cn } from "@/lib/utils";

const NAV = [
  { label: "About YBS", href: "/#about" },
  { label: "Capabilities", href: "/#capabilities" },
  { label: "Initiatives", href: "/#initiatives" },
  { label: "How We Work", href: "/#approach" },
  { label: "Collaborate", href: "/#collaborate" },
];

export function Logo({ className }: { className?: string }) {
  return <img src={logo.url} alt="YBS Industries" className={cn("w-auto", className)} />;
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b bg-background/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link to="/" aria-label="YBS Industries home">
          <Logo className="h-10 w-24" />
        </Link>
        <nav className="hidden items-center gap-6 text-sm lg:flex">
          <Link to="/" className="hover:text-signal">Home</Link>
          {NAV.map((n) => (
            <a key={n.label} href={n.href} className="hover:text-signal">{n.label}</a>
          ))}
          <Link to="/portfolio" className="hover:text-signal" activeProps={{ className: "text-signal" }}>Portfolio</Link>
          <Link to="/contact" className="hover:text-signal" activeProps={{ className: "text-signal" }}>Contact</Link>
        </nav>
        <Link to="/contact" className="hidden rounded-sm bg-primary px-4 py-2 text-sm text-primary-foreground hover:bg-signal lg:inline-flex">
          Discuss a Project
        </Link>
        <button className="lg:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav className="flex flex-col gap-3 border-t px-6 py-4 text-sm lg:hidden" onClick={() => setOpen(false)}>
          <Link to="/">Home</Link>
          {NAV.map((n) => <a key={n.label} href={n.href}>{n.label}</a>)}
          <Link to="/portfolio">Portfolio</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      )}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-ink text-ink-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-3">
        <div>
          <p className="font-display text-3xl">YBS Industries LLP</p>
          <p className="mt-3 text-ink-foreground/70">Intelligent Engineering for India’s Real Challenges.</p>
          <p className="eyebrow mt-6 text-ink-foreground/50">Software · Engineering · Cybersecurity · Automation · R&amp;D</p>
        </div>
        <div className="space-y-2 text-sm">
          <p className="eyebrow mb-3 text-signal">Navigate</p>
          <a href="/#about" className="block hover:text-signal">About</a>
          <a href="/#capabilities" className="block hover:text-signal">Capabilities</a>
          <Link to="/portfolio" className="block hover:text-signal">Portfolio</Link>
          <a href="/#collaborate" className="block hover:text-signal">Collaborate</a>
          <Link to="/contact" className="block hover:text-signal">Contact</Link>
          <a href={`mailto:${EMAILS.legal}?subject=Privacy%20Policy`} className="block hover:text-signal">Privacy Policy</a>
        </div>
        <div className="space-y-2 text-sm">
          <p className="eyebrow mb-3 text-signal">Reach us</p>
          <a href={`mailto:${EMAILS.general}`} className="block hover:text-signal">{EMAILS.general}</a>
          <a href={WEBSITE} className="block hover:text-signal">ybsindustriesllp.com</a>
          <a href={LINKEDIN} target="_blank" rel="noreferrer" className="block hover:text-signal">LinkedIn</a>
        </div>
      </div>
      <div className="mx-auto max-w-7xl border-t border-ink-foreground/15 px-6 py-6 text-xs text-ink-foreground/50">
        <p>© YBS Industries LLP. All rights reserved.</p>
        <p className="mt-2 max-w-3xl">
          Project descriptions reflect the respective initiatives’ current or proposed scope. Specific capabilities,
          deliverables, and implementation commitments are subject to project assessment and agreement.
        </p>
      </div>
    </footer>
  );
}

const ORDER: Maturity[] = ["Concept", "In Development", "Prototype", "Pilot", "Validated", "Operational"];

export function MaturityBadge({ maturity }: { maturity: Maturity }) {
  const idx = ORDER.indexOf(maturity);
  return (
    <span className="inline-flex items-center gap-2 rounded-sm border border-foreground/30 px-2 py-1 font-mono text-[0.7rem] uppercase tracking-wider">
      {idx >= 0 && (
        <span className="flex gap-0.5" aria-hidden>
          {ORDER.map((_, i) => (
            <span key={i} className={cn("h-2 w-1.5", i <= idx ? "bg-signal" : "bg-foreground/15")} />
          ))}
        </span>
      )}
      {maturity}
    </span>
  );
}

export function SectionHead({ eyebrow, title, children }: { eyebrow: string; title: string; children?: React.ReactNode }) {
  return (
    <div className="max-w-3xl">
      <p className="eyebrow text-signal">{eyebrow}</p>
      <h2 className="mt-3 text-4xl leading-tight md:text-5xl">{title}</h2>
      {children && <div className="mt-5 text-lg text-muted-foreground">{children}</div>}
    </div>
  );
}
