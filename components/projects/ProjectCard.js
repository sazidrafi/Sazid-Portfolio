import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import { GithubIcon } from "@/components/ui/BrandIcons";

// reveal: "scroll" (fade in on scroll) | "enter" (animate on mount) | "none"
export default function ProjectCard({ project: p, index = 0, reveal = "scroll" }) {
  const small = "relative z-10 inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-accent";
  return (
    <Card
      interactive
      data-reveal={reveal === "scroll" ? "" : undefined}
      style={{ "--reveal-delay": `${Math.min(index, 5) * 80}ms` }}
      className={`group relative flex h-full flex-col overflow-hidden ${reveal === "enter" ? "reveal-in" : ""}`}
    >
      <div className="relative aspect-video overflow-hidden border-b border-border bg-bg-subtle">
        <Image
          src={p.thumbnail}
          alt=""
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
        />
        {p.demo && (
          <span className="absolute left-3 top-3">
            <Badge variant="neutral">Sample</Badge>
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="mb-3 flex items-center justify-between gap-3">
          <Badge variant={p.status === "Completed" ? "accent" : "neutral"}>{p.status}</Badge>
          <span className="font-mono text-xs text-subtle">{p.date}</span>
        </div>

        <h3 className="text-xl font-semibold tracking-tight">
          <Link href={`/projects/${p.slug}`} className="after:absolute after:inset-0 after:content-[''] hover:text-accent">
            {p.title}
          </Link>
        </h3>
        <p className="mt-2 text-muted">{p.summary}</p>

        <ul className="mt-4 flex flex-wrap gap-2">
          {p.tags.map((t) => (
            <li key={t} className="rounded-md bg-bg-subtle px-2 py-0.5 font-mono text-xs text-muted">{t}</li>
          ))}
        </ul>

        <div className="mt-auto flex items-center justify-between pt-6">
          <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
            View case study
            <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
          </span>
          <div className="flex items-center gap-4">
            {p.liveUrl && (
              <a href={p.liveUrl} target="_blank" rel="noopener noreferrer" className={small}>
                Live <ArrowUpRight size={14} />
              </a>
            )}
            {p.repoUrl && (
              <a href={p.repoUrl} target="_blank" rel="noopener noreferrer" className={small} aria-label={`${p.title} source code`}>
                <GithubIcon size={14} /> Code
              </a>
            )}
          </div>
        </div>
      </div>
    </Card>
  );
}
