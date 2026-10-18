import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Mail } from "lucide-react";
import { getInitiative, INITIATIVES } from "@/lib/content";
import { MaturityBadge } from "@/components/site";

export const Route = createFileRoute("/portfolio/$slug")({
  loader: ({ params }) => {
    const initiative = getInitiative(params.slug);
    if (!initiative) throw notFound();
    return { initiative };
  },
  head: ({ loaderData }) => {
    const i = loaderData?.initiative;
    if (!i) return { meta: [{ title: "Initiative not found — YBS Industries LLP" }, { name: "robots", content: "noindex" }] };
    return {
      meta: [
        { title: `${i.name} — ${i.tagline} | YBS Industries LLP` },
        { name: "description", content: i.summary },
        { property: "og:title", content: `${i.name} — YBS Portfolio` },
        { property: "og:description", content: i.summary },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="mx-auto max-w-3xl px-6 py-32 text-center">
      <h1 className="text-5xl">Initiative not found</h1>
      <Link to="/portfolio" className="mt-6 inline-block underline">Back to portfolio</Link>
    </div>
  ),
  component: Detail,
});

function Block({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="grid gap-6 border-t py-12 md:grid-cols-[220px_1fr]">
      <p className="eyebrow text-signal">{label}</p>
      <div className="text-muted-foreground">{children}</div>
    </div>
  );
}

function Detail() {
  const { initiative: i } = Route.useLoaderData();
  const idx = INITIATIVES.findIndex((x) => x.slug === i.slug);
  const next = INITIATIVES[(idx + 1) % INITIATIVES.length];
  return (
    <>
      <section className="grid-paper border-b">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <Link to="/portfolio" className="inline-flex items-center gap-2 text-sm hover:text-signal">
            <ArrowLeft className="h-4 w-4" /> Portfolio
          </Link>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <MaturityBadge maturity={i.maturity} />
            <p className="eyebrow text-muted-foreground">{i.category}</p>
          </div>
          <h1 className="mt-6 text-6xl md:text-8xl">{i.name}</h1>
          <p className="mt-4 max-w-3xl text-2xl font-display">{i.tagline}</p>
          <p className="mt-6 max-w-3xl text-sm italic text-muted-foreground">Maturity: {i.maturityNote}</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-8">
        <Block label="The challenge">
          <div className="space-y-4 text-lg">{i.challenge.map((c) => <p key={c}>{c}</p>)}</div>
        </Block>
        <Block label="Our approach">
          <p className="text-lg">{i.approachIntro}</p>
          {i.verticals && (
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {i.verticals.map((v, n) => (
                <div key={v.title} className="border bg-card p-6">
                  <p className="font-mono text-xs text-signal">{String(n + 1).padStart(2, "0")}</p>
                  <h3 className="mt-2 text-xl text-foreground">{v.title}</h3>
                  <p className="mt-2 text-sm">{v.text}</p>
                </div>
              ))}
            </div>
          )}
          {i.points && (
            <ul className="mt-6 divide-y border-y">
              {i.points.map((p) => (
                <li key={p} className="flex gap-4 py-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-signal" /> {p}
                </li>
              ))}
            </ul>
          )}
        </Block>
        <Block label={i.slug === "applied-engineering" ? "How engagements start" : "Intended outcomes"}>
          <ul className="space-y-3 text-lg">
            {i.outcomes.map((o) => <li key={o}>— {o}</li>)}
          </ul>
        </Block>
        {i.priorities && (
          <Block label="Development priorities">
            <p className="text-lg">{i.priorities}</p>
          </Block>
        )}
        <Block label="Collaboration opportunities">
          <p className="text-lg">{i.collaboration}</p>
          {i.caveat && (
            <p className="mt-6 border-l-2 border-signal bg-card p-4 text-sm">{i.caveat}</p>
          )}
        </Block>
      </section>

      <section className="bg-ink text-ink-foreground">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-8 px-6 py-16">
          <div>
            <p className="eyebrow text-signal">Next step</p>
            <h2 className="mt-2 text-4xl">{i.cta}</h2>
            <a href={`mailto:${i.email}?subject=${encodeURIComponent(i.cta)}`} className="mt-3 inline-flex items-center gap-2 text-ink-foreground/70 hover:text-signal">
              <Mail className="h-4 w-4" /> {i.email} · {i.emailLabel}
            </a>
          </div>
          <div className="flex flex-col gap-3">
            <Link to="/contact" search={{ topic: i.slug }} className="inline-flex items-center gap-2 rounded-sm bg-signal px-6 py-3 text-signal-foreground">
              {i.cta} <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/portfolio/$slug" params={{ slug: next.slug }} className="text-sm text-ink-foreground/70 hover:text-signal">
              Next initiative: {next.name} →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
