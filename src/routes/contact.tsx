import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Linkedin, Mail, Send } from "lucide-react";
import { EMAILS, LINKEDIN } from "@/lib/content";
import { SectionHead } from "@/components/site";

const TOPICS = [
  { id: "project", label: "Discuss a project", email: EMAILS.sales },
  { id: "collab", label: "Collaboration / partnership", email: EMAILS.collab },
  { id: "samardhya", label: "SAMARDHYA", email: EMAILS.samardhya },
  { id: "x-drip", label: "X-DRIP cybersecurity pilot", email: EMAILS.xdrip },
  { id: "athelion", label: "Athelion research collaboration", email: EMAILS.collab },
  { id: "kalasetu", label: "Kalasetu traceability use case", email: EMAILS.collab },
  { id: "applied-engineering", label: "Applied engineering project", email: EMAILS.sales },
  { id: "support", label: "Support", email: EMAILS.support },
  { id: "legal", label: "Legal & privacy", email: EMAILS.legal },
  { id: "feedback", label: "Feedback", email: EMAILS.feedback },
  { id: "general", label: "General enquiry", email: EMAILS.general },
];

export const Route = createFileRoute("/contact")({
  validateSearch: (s: Record<string, unknown>): { topic?: string } => (typeof s["topic"] === "string" ? { topic: s["topic"] as string } : {}),
  head: () => ({
    meta: [
      { title: "Contact YBS Industries LLP — Discuss a Project" },
      { name: "description", content: "Project enquiries, collaborations, SAMARDHYA, X-DRIP, support and legal contacts for YBS Industries LLP." },
      { property: "og:title", content: "Contact YBS Industries LLP" },
      { property: "og:description", content: "Reach the right YBS team for projects, collaborations, and initiatives." },
    ],
  }),
  component: Contact,
});

const DIRECTORY = [
  ["General enquiries", EMAILS.general],
  ["Project & sales enquiries", EMAILS.sales],
  ["Collaborations & research", EMAILS.collab],
  ["SAMARDHYA", EMAILS.samardhya],
  ["X-DRIP", EMAILS.xdrip],
  ["Support", EMAILS.support],
  ["Legal & privacy", EMAILS.legal],
  ["Feedback", EMAILS.feedback],
];

function Contact() {
  const { topic } = Route.useSearch();
  const [sel, setSel] = useState(TOPICS.find((t) => t.id === topic)?.id ?? "project");
  const [form, setForm] = useState({ name: "", org: "", email: "", message: "" });
  const current = TOPICS.find((t) => t.id === sel)!;

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const body = `Name: ${form.name}\nOrganisation: ${form.org}\nEmail: ${form.email}\n\n${form.message}`;
    window.location.href = `mailto:${current.email}?subject=${encodeURIComponent(`${current.label} — ${form.org || form.name}`)}&body=${encodeURIComponent(body)}`;
  };

  const field = "w-full rounded-sm border bg-card px-4 py-3 outline-none focus:border-signal";

  return (
    <section className="grid-paper">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 py-24 lg:grid-cols-[1fr_1.1fr]">
        <div>
          <SectionHead eyebrow="Contact" title="Discuss your project with YBS Industries LLP.">
            Tell us about the problem, the context, and what you hope to achieve. Engagements are evaluated individually
            based on feasibility, scope, and mutual fit.
          </SectionHead>
          <ul className="mt-12 divide-y border-y bg-background/60">
            {DIRECTORY.map(([l, e]) => (
              <li key={e} className="flex flex-wrap items-center justify-between gap-2 py-3">
                <span className="eyebrow text-muted-foreground">{l}</span>
                <a href={`mailto:${e}`} className="inline-flex items-center gap-2 hover:text-signal">
                  <Mail className="h-4 w-4" /> {e}
                </a>
              </li>
            ))}
          </ul>
          <a href={LINKEDIN} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 hover:text-signal">
            <Linkedin className="h-4 w-4" /> YBS Industries on LinkedIn
          </a>
        </div>

        <form onSubmit={submit} className="space-y-5 border bg-background p-8">
          <div>
            <label className="eyebrow mb-2 block" htmlFor="topic">Enquiry type</label>
            <select id="topic" value={sel} onChange={(e) => setSel(e.target.value)} className={field}>
              {TOPICS.map((t) => <option key={t.id} value={t.id}>{t.label}</option>)}
            </select>
            <p className="mt-2 text-xs text-muted-foreground">Routed to <span className="text-signal">{current.email}</span></p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label className="eyebrow mb-2 block" htmlFor="name">Name</label>
              <input id="name" required maxLength={100} className={field} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
            </div>
            <div>
              <label className="eyebrow mb-2 block" htmlFor="org">Organisation</label>
              <input id="org" maxLength={120} className={field} value={form.org} onChange={(e) => setForm({ ...form, org: e.target.value })} />
            </div>
          </div>
          <div>
            <label className="eyebrow mb-2 block" htmlFor="email">Email</label>
            <input id="email" type="email" required maxLength={255} className={field} value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
          </div>
          <div>
            <label className="eyebrow mb-2 block" htmlFor="message">The problem you want to solve</label>
            <textarea id="message" required rows={6} maxLength={2000} className={field} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
          </div>
          <button type="submit" className="inline-flex w-full items-center justify-center gap-2 rounded-sm bg-primary px-5 py-4 text-primary-foreground hover:bg-signal">
            Open email to {current.email} <Send className="h-4 w-4" />
          </button>
          <p className="text-xs text-muted-foreground">This opens your email app with the message pre-filled.</p>
        </form>
      </div>
    </section>
  );
}
