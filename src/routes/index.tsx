import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { INITIATIVES } from "@/lib/content";
import { MaturityBadge, SectionHead } from "@/components/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "YBS Industries LLP — Intelligent Engineering for India’s Real Challenges" },
      { name: "description", content: "Engineering-led technology company focused on software, applied research, cybersecurity, automation, and practical problem solving." },
      { property: "og:title", content: "YBS Industries LLP — Intelligent Engineering" },
      { property: "og:description", content: "Software, cybersecurity, IoT, prototyping and applied R&D — engineering ideas into practical, testable solutions." },
    ],
  }),
  component: Home,
});

const CAPABILITIES = [
  ["Software & AI", "Software applications, web platforms, automation workflows, AI-enabled systems, and technical prototypes tailored to defined requirements."],
  ["Cybersecurity & Digital Trust", "Preventive cybersecurity, software supply-chain security research, security assessments, and approaches to improving the integrity and trustworthiness of digital systems."],
  ["Electronics, IoT & Automation", "Exploration and development of connected devices, sensors, RFID/NFC applications, embedded systems, and automation solutions."],
  ["Engineering & Prototyping", "Technical feasibility studies, proof-of-concept development, prototype design, testing, and iterative engineering."],
  ["Systems Integration", "Connecting software, hardware, data, and operational workflows into coherent technical systems."],
  ["Research & Development", "Applied research, technical experimentation, algorithm evaluation, feasibility analysis, and development of potential technology products."],
];

const STEPS = [
  ["Understand", "Define the problem, users, operating environment, requirements, and constraints."],
  ["Assess", "Evaluate feasibility, available technologies, risks, dependencies, and possible approaches."],
  ["Design", "Develop the system architecture, technical plan, prototype scope, and implementation milestones."],
  ["Build", "Develop the agreed software, hardware, workflow, or proof of concept."],
  ["Test & Improve", "Evaluate functionality, document limitations, identify weaknesses, and refine the solution."],
  ["Prepare for Deployment", "Establish the documentation, handover, maintenance, and further-development requirements appropriate to the project."],
];

const PARTNERS = [
  "Businesses and SMEs seeking technology development or engineering support.",
  "Educational institutions exploring applied technology, R&D, and industry collaboration.",
  "Startups and independent innovators developing or validating technical ideas.",
  "Research organisations and technical experts pursuing collaborative development.",
  "Industry and institutional partners working on cybersecurity, automation, and digital infrastructure.",
];

const COLLAB = [
  ["Technology Development", "Software, automation, integration, and technical prototypes."],
  ["Research Partnerships", "Applied research, feasibility studies, and collaborative experimentation."],
  ["Institutional Programmes", "Technology awareness, technical learning, and industry-linked project initiatives."],
  ["Cybersecurity Pilots", "Scoped preventive-security assessments and software security research, subject to the required expertise and authorisation."],
  ["Strategic Partnerships", "Complementary expertise, facilities, technical resources, and opportunities for joint development."],
];

function Home() {
  const featured = INITIATIVES.filter((i) => i.slug !== "applied-engineering");
  return (
    <>
      {/* Hero */}
      <section className="grid-paper border-b">
        <div className="mx-auto max-w-7xl px-6 pb-20 pt-20 md:pt-28">
          <p className="eyebrow text-signal">YBS Industries LLP · Engineering-led technology</p>
          <h1 className="mt-6 max-w-5xl text-5xl leading-[1.02] md:text-7xl lg:text-8xl">
            Intelligent Engineering for India’s <em className="text-signal">Real</em> Challenges.
          </h1>
          <div className="mt-10 grid gap-10 md:grid-cols-[1.4fr_1fr]">
            <div className="space-y-4 text-lg text-muted-foreground">
              <p>
                YBS Industries LLP is an engineering-led technology company focused on software development, applied
                research, cybersecurity, automation, and technology-driven problem solving.
              </p>
              <p>
                We work towards bridging the gap between ideas and implementation through technical development,
                prototyping, systems integration, and collaborative innovation.
              </p>
            </div>
            <div className="flex flex-col justify-end gap-3">
              <Link to="/contact" className="inline-flex items-center justify-between rounded-sm bg-primary px-5 py-4 text-primary-foreground hover:bg-signal">
                Discuss a Project <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/portfolio" className="inline-flex items-center justify-between rounded-sm border border-foreground px-5 py-4 hover:bg-foreground hover:text-background">
                Explore Our Work <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
          <p className="eyebrow mt-16 border-t pt-6 text-muted-foreground">
            Engineering ideas into practical, testable, and scalable solutions.
          </p>
        </div>
      </section>

      {/* About */}
      <section id="about" className="scroll-mt-16 border-b">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 md:grid-cols-2">
          <SectionHead eyebrow="01 · About YBS" title="Engineering-led. Research-driven. Built for practical execution." />
          <div className="space-y-5 text-muted-foreground">
            <p>YBS Industries LLP brings together technology, engineering, and applied problem-solving to address practical challenges faced by businesses, institutions, and emerging innovators.</p>
            <p>Our approach combines software, electronics, automation, cybersecurity, and research-led development. We aim to understand the problem first, identify the appropriate technical approach, and develop solutions through structured design, prototyping, testing, and iteration.</p>
            <p>YBS is building an ecosystem that connects technical development with industry requirements, institutional collaboration, and the development of new technology initiatives.</p>
            <div className="grid gap-6 pt-6 sm:grid-cols-2">
              <div className="border-l-2 border-signal pl-4">
                <p className="eyebrow text-foreground">Our mission</p>
                <p className="mt-2 text-sm">To develop practical, reliable, and accessible technology solutions that address real-world challenges through engineering, research, and collaboration.</p>
              </div>
              <div className="border-l-2 border-foreground pl-4">
                <p className="eyebrow text-foreground">Our vision</p>
                <p className="mt-2 text-sm">To become a trusted Indian engineering and technology organisation that transforms relevant ideas into useful systems, products, and services.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section id="capabilities" className="scroll-mt-16 border-b">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <SectionHead eyebrow="02 · What we focus on" title="Six areas of engineering focus." />
          <div className="mt-14 grid border-l border-t md:grid-cols-2 lg:grid-cols-3">
            {CAPABILITIES.map(([t, d], i) => (
              <div key={t} className="border-b border-r p-8 transition-colors hover:bg-card">
                <p className="font-mono text-xs text-signal">{String(i + 1).padStart(2, "0")}</p>
                <h3 className="mt-4 text-2xl">{t}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 max-w-3xl text-xs text-muted-foreground">
            The capabilities above represent YBS’s areas of focus. Specific services are undertaken according to project
            scope, available expertise, resources, and technical validation.
          </p>
        </div>
      </section>

      {/* Approach */}
      <section id="approach" className="scroll-mt-16 bg-ink text-ink-foreground">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <p className="eyebrow text-signal">03 · Our approach</p>
          <h2 className="mt-3 max-w-3xl text-4xl md:text-5xl">From problem definition to practical implementation.</h2>
          <ol className="mt-14 grid gap-px bg-ink-foreground/15 md:grid-cols-3">
            {STEPS.map(([t, d], i) => (
              <li key={t} className="bg-ink p-8">
                <p className="font-mono text-sm text-signal">{String(i + 1).padStart(2, "0")} —</p>
                <h3 className="mt-3 text-2xl">{t}</h3>
                <p className="mt-3 text-sm text-ink-foreground/70">{d}</p>
              </li>
            ))}
          </ol>
          <p className="mt-6 text-xs text-ink-foreground/50">
            Deployment, certification, and production readiness depend on the project’s scope and validation results.
          </p>
        </div>
      </section>

      {/* Initiatives */}
      <section id="initiatives" className="scroll-mt-16 border-b">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHead eyebrow="04 · Our initiatives" title="Distinct identities. One engineering backbone." />
            <Link to="/portfolio" className="inline-flex items-center gap-2 border-b border-foreground pb-1 hover:text-signal">
              Explore Our Portfolio <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {featured.map((i) => (
              <Link key={i.slug} to="/portfolio/$slug" params={{ slug: i.slug }} className="group flex flex-col justify-between border bg-card p-8 transition hover:border-foreground">
                <div>
                  <div className="flex items-center justify-between">
                    <MaturityBadge maturity={i.maturity} />
                    <ArrowUpRight className="h-5 w-5 transition group-hover:text-signal" />
                  </div>
                  <h3 className="mt-8 text-4xl">{i.name}</h3>
                  <p className="eyebrow mt-2 text-muted-foreground">{i.tagline}</p>
                  <p className="mt-5 text-muted-foreground">{i.summary}</p>
                </div>
                <p className="mt-8 text-sm font-medium group-hover:text-signal">Explore {i.name} →</p>
              </Link>
            ))}
          </div>
          <p className="mt-6 text-xs text-muted-foreground">
            These initiatives have different levels of maturity. Their inclusion does not imply that every concept is a
            launched or commercially deployed product.
          </p>
        </div>
      </section>

      {/* Who + Collaborate */}
      <section id="collaborate" className="scroll-mt-16 border-b">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 py-24 lg:grid-cols-2">
          <div>
            <SectionHead eyebrow="05 · Who we work with" title="YBS is interested in collaborating with:" />
            <ul className="mt-10 divide-y border-y">
              {PARTNERS.map((p) => (
                <li key={p} className="flex gap-4 py-4 text-muted-foreground">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-signal" /> {p}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs text-muted-foreground">
              Engagements are evaluated individually based on the problem, feasibility, scope, and mutual fit.
            </p>
          </div>
          <div>
            <SectionHead eyebrow="06 · Collaboration" title="Let’s work on a meaningful technical problem." />
            <div className="mt-10 space-y-6">
              {COLLAB.map(([t, d]) => (
                <div key={t}>
                  <h3 className="text-xl">{t}</h3>
                  <p className="text-sm text-muted-foreground">{d}</p>
                </div>
              ))}
            </div>
            <Link to="/contact" search={{ topic: "collab" }} className="mt-10 inline-flex items-center gap-2 rounded-sm bg-primary px-5 py-3 text-primary-foreground hover:bg-signal">
              Start a Conversation <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="grid-paper">
        <div className="mx-auto max-w-4xl px-6 py-28 text-center">
          <h2 className="text-5xl md:text-6xl">Real challenges deserve thoughtful engineering.</h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Whether you represent a business, institution, research team, or emerging technology initiative, YBS welcomes
            conversations focused on practical problems and technically grounded solutions.
          </p>
          <p className="mt-4 font-medium">Discuss your project with YBS Industries LLP.</p>
          <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-sm bg-signal px-6 py-3 text-signal-foreground hover:bg-primary">
            Contact YBS <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
