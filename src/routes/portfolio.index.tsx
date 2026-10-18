import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { INITIATIVES, MATURITY_FRAMEWORK } from "@/lib/content";
import { MaturityBadge, SectionHead } from "@/components/site";

export const Route = createFileRoute("/portfolio/")({
  head: () => ({
    meta: [
      { title: "Project Portfolio — YBS Industries LLP" },
      { name: "description", content: "SAMARDHYA, X-DRIP, Athelion, Kalasetu and Applied Engineering — initiatives, approaches, and transparent maturity labels." },
      { property: "og:title", content: "YBS Project Portfolio" },
      { property: "og:description", content: "Engineering initiatives, practical problems, emerging solutions — with honest maturity labels." },
    ],
  }),
  component: Portfolio,
});

const MODEL = [
  ["Technical delivery", "Scoped software, engineering, and prototype development."],
  ["Institutional collaboration", "Technology programmes, applied projects, and structured partnerships."],
  ["Research and validation", "Feasibility studies, controlled testing, and prototype evaluation."],
  ["Pilot programmes", "Testing a defined solution against agreed requirements and success criteria."],
  ["Strategic partnerships", "Complementary expertise, facilities, domain knowledge, and joint development."],
];

function Portfolio() {
  return (
    <>
      <section className="grid-paper border-b">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <p className="eyebrow text-signal">YBS Project Portfolio</p>
          <h1 className="mt-6 max-w-5xl text-5xl leading-[1.05] md:text-7xl">
            Engineering Initiatives. Practical Problems. Emerging Solutions.
          </h1>
          <div className="mt-10 grid max-w-5xl gap-6 text-lg text-muted-foreground md:grid-cols-2">
            <p>YBS Industries LLP develops and explores technology initiatives across talent development, cybersecurity, synthetic media forensics, digital trust, and applied engineering.</p>
            <p>Our portfolio includes initiatives at different stages of development. A strong portfolio should communicate what a project aims to achieve, what has been built, what remains to be validated, and what collaboration is needed next.</p>
          </div>
        </div>
      </section>

      <section className="border-b">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="divide-y border-y">
            {INITIATIVES.map((i, n) => (
              <Link key={i.slug} to="/portfolio/$slug" params={{ slug: i.slug }} className="group grid gap-6 py-10 md:grid-cols-[80px_1.2fr_1.5fr_auto] md:items-start">
                <p className="font-mono text-sm text-signal">{String(n + 1).padStart(2, "0")}</p>
                <div>
                  <h2 className="text-4xl group-hover:text-signal">{i.name}</h2>
                  <p className="eyebrow mt-2 text-muted-foreground">{i.category}</p>
                </div>
                <div>
                  <p className="font-medium">{i.tagline}</p>
                  <p className="mt-2 text-sm text-muted-foreground">{i.summary}</p>
                  <p className="mt-3 text-xs italic text-muted-foreground">{i.maturityNote}</p>
                </div>
                <div className="flex items-center gap-4 md:flex-col md:items-end">
                  <MaturityBadge maturity={i.maturity} />
                  <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink text-ink-foreground">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <p className="eyebrow text-signal">Portfolio maturity framework</p>
          <h2 className="mt-3 max-w-3xl text-4xl md:text-5xl">Transparent labels, upgraded only with evidence.</h2>
          <ol className="mt-14 grid gap-px bg-ink-foreground/15 md:grid-cols-3 lg:grid-cols-6">
            {MATURITY_FRAMEWORK.map((m, i) => (
              <li key={m.label} className="bg-ink p-6">
                <div className="flex gap-0.5">
                  {MATURITY_FRAMEWORK.map((_, j) => (
                    <span key={j} className={`h-2 flex-1 ${j <= i ? "bg-signal" : "bg-ink-foreground/15"}`} />
                  ))}
                </div>
                <h3 className="mt-5 text-xl">{m.label}</h3>
                <p className="mt-2 text-sm text-ink-foreground/70">{m.text}</p>
              </li>
            ))}
          </ol>
          <p className="mt-6 text-xs text-ink-foreground/50">A maturity label should only be upgraded when supporting evidence is available.</p>
        </div>
      </section>

      <section className="border-b">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <SectionHead eyebrow="Portfolio-wide collaboration model" title="Five ways to work with YBS." />
          <div className="mt-12 grid border-l border-t md:grid-cols-5">
            {MODEL.map(([t, d]) => (
              <div key={t} className="border-b border-r p-6">
                <h3 className="text-xl">{t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="grid-paper">
        <div className="mx-auto max-w-4xl px-6 py-28 text-center">
          <h2 className="text-5xl md:text-6xl">Have a problem worth solving?</h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            YBS Industries LLP is interested in connecting with organisations, institutions, technical experts, and
            innovators who want to investigate a problem, validate an idea, or develop a practical technology solution.
          </p>
          <p className="mt-4 font-medium">Let’s define the problem, assess the feasibility, and identify the right next step.</p>
          <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-sm bg-signal px-6 py-3 text-signal-foreground hover:bg-primary">
            Contact YBS Industries LLP <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
