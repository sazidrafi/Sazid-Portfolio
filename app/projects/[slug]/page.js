import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, CalendarDays, Check, ChevronDown, UserRound } from "lucide-react";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import TiltWrapper from "@/components/ui/TiltWrapper";
import ScreenshotGallery from "@/components/projects/ScreenshotGallery";
import SectionNav from "@/components/projects/SectionNav";
import projects, { getProject } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const p = getProject(slug);
  return p ? { title: p.title, description: p.summary } : {};
}

const h2 = "mb-6 text-2xl font-semibold tracking-tight";

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const index = projects.findIndex((p) => p.slug === slug);
  if (index === -1) notFound();
  const p = projects[index];
  const prev = projects[index - 1];
  const next = projects[index + 1];

  const nav = [
    { id: "overview", label: "Overview" },
    p.screenshots?.length && { id: "screenshots", label: "Screenshots" },
    p.features?.length && { id: "features", label: "Features" },
    p.tech?.length && { id: "tech", label: "Tech stack" },
    p.challenges?.length && { id: "challenges", label: "Challenges" },
    p.learnings?.length && { id: "learnings", label: "What I learned" },
  ].filter(Boolean);

  return (
    <>
      <header className="bg-bg pb-10 pt-12 md:pt-16">
        <div className="mx-auto w-full max-w-[1100px] px-5 sm:px-8">
          <Link href="/projects" className="reveal-in mb-6 inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-accent">
            <ArrowLeft size={16} /> All projects
          </Link>

          <div className="reveal-in flex flex-wrap items-center gap-3" style={{ "--reveal-delay": "50ms" }}>
            <Badge variant={p.status === "Completed" ? "accent" : "neutral"}>{p.status}</Badge>
            {p.demo && <Badge variant="neutral">Sample content</Badge>}
          </div>

          <h1 className="reveal-in mt-4 text-4xl font-bold tracking-tight sm:text-5xl" style={{ "--reveal-delay": "100ms" }}>
            {p.title}
          </h1>
          <p className="reveal-in mt-4 max-w-2xl text-lg text-muted" style={{ "--reveal-delay": "150ms" }}>
            {p.summary}
          </p>

          <div className="reveal-in mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted" style={{ "--reveal-delay": "200ms" }}>
            {p.role && <span className="inline-flex items-center gap-2"><UserRound size={16} className="text-accent" />{p.role}</span>}
            {p.date && <span className="inline-flex items-center gap-2"><CalendarDays size={16} className="text-accent" />{p.date}</span>}
          </div>

          <div className="reveal-in mt-8 flex flex-wrap gap-3" style={{ "--reveal-delay": "250ms" }}>
            {p.liveUrl && <Button href={p.liveUrl}>Live demo</Button>}
            {p.repoUrl && <Button href={p.repoUrl} variant="secondary">Source code</Button>}
          </div>

          <div className="reveal-in mt-10" style={{ "--reveal-delay": "300ms" }}>
            <TiltWrapper max={3} scale={1.01} className="overflow-hidden rounded-xl border border-border bg-surface shadow-card-hover">
              <Image src={p.thumbnail} alt={`${p.title} preview`} width={1600} height={900} priority sizes="(min-width: 1100px) 1100px, 100vw" className="h-auto w-full" />
            </TiltWrapper>
          </div>
        </div>
      </header>

      <div className="mx-auto grid w-full max-w-[1100px] gap-12 px-5 pb-24 pt-6 sm:px-8 lg:grid-cols-[180px_minmax(0,1fr)]">
        <SectionNav items={nav} />

        <div className="min-w-0 space-y-16">
          <section id="overview" data-reveal>
            <h2 className={h2}>Overview</h2>
            <div className="grid gap-5 md:grid-cols-2">
              <Card className="p-6">
                <p className="mb-2 font-mono text-xs uppercase tracking-wider text-accent">The problem</p>
                <p className="text-muted">{p.problem}</p>
              </Card>
              <Card className="p-6">
                <p className="mb-2 font-mono text-xs uppercase tracking-wider text-accent">The solution</p>
                <p className="text-muted">{p.solution}</p>
              </Card>
            </div>
          </section>

          {p.screenshots?.length > 0 && (
            <section id="screenshots" data-reveal>
              <h2 className={h2}>Screenshots</h2>
              <ScreenshotGallery shots={p.screenshots} title={p.title} />
            </section>
          )}

          {p.features?.length > 0 && (
            <section id="features" data-reveal>
              <h2 className={h2}>Key features</h2>
              <ul className="grid gap-4 sm:grid-cols-2">
                {p.features.map((f, i) => (
                  <li key={f.title}>
                    <Card interactive className="h-full p-5">
                      <span className="font-mono text-sm text-accent">{String(i + 1).padStart(2, "0")}</span>
                      <h3 className="mt-1 font-semibold">{f.title}</h3>
                      <p className="mt-1 text-sm text-muted">{f.text}</p>
                    </Card>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {p.tech?.length > 0 && (
            <section id="tech" data-reveal>
              <h2 className={h2}>Tech stack</h2>
              <ul className="flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <li key={t}><Badge>{t}</Badge></li>
                ))}
              </ul>
            </section>
          )}

          {p.challenges?.length > 0 && (
            <section id="challenges" data-reveal>
              <h2 className={h2}>Challenges and solutions</h2>
              <div className="space-y-3">
                {p.challenges.map((c, i) => (
                  <details key={c.challenge} open={i === 0} className="group rounded-lg border border-border bg-surface shadow-card">
                    <summary className="flex cursor-pointer list-none items-start justify-between gap-4 p-5 font-medium [&::-webkit-details-marker]:hidden">
                      <span>{c.challenge}</span>
                      <ChevronDown size={20} className="mt-0.5 shrink-0 text-accent transition-transform duration-200 group-open:rotate-180" />
                    </summary>
                    <div className="page-enter border-t border-border px-5 pb-5 pt-4">
                      <p className="mb-1 font-mono text-xs uppercase tracking-wider text-accent">How I solved it</p>
                      <p className="text-muted">{c.solution}</p>
                    </div>
                  </details>
                ))}
              </div>
            </section>
          )}

          {p.learnings?.length > 0 && (
            <section id="learnings" data-reveal>
              <h2 className={h2}>What I learned</h2>
              <ul className="space-y-3">
                {p.learnings.map((l) => (
                  <li key={l} className="flex gap-3 text-muted">
                    <Check size={20} className="mt-0.5 shrink-0 text-accent" />
                    <span>{l}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          <nav aria-label="More projects" data-reveal className="grid gap-4 border-t border-border pt-10 sm:grid-cols-2">
            {prev ? (
              <Link href={`/projects/${prev.slug}`} className="block">
                <Card interactive className="h-full p-5">
                  <p className="inline-flex items-center gap-1.5 text-sm text-subtle"><ArrowLeft size={14} /> Previous project</p>
                  <p className="mt-1 font-semibold">{prev.title}</p>
                </Card>
              </Link>
            ) : <span />}
            {next && (
              <Link href={`/projects/${next.slug}`} className="block sm:text-right">
                <Card interactive className="h-full p-5">
                  <p className="inline-flex items-center gap-1.5 text-sm text-subtle">Next project <ArrowRight size={14} /></p>
                  <p className="mt-1 font-semibold">{next.title}</p>
                </Card>
              </Link>
            )}
          </nav>
        </div>
      </div>
    </>
  );
}
