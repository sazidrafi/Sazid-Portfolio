"use client";
import { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";

const chip = "rounded-full border px-4 py-1.5 text-sm font-medium transition-[background-color,border-color,color,transform] duration-150 active:scale-[0.97]";

export default function ProjectsExplorer({ projects, tags }) {
  const [active, setActive] = useState("All");

  // Read ?tag= from the URL after load (the full list is rendered on the server first)
  useEffect(() => {
    const t = new URLSearchParams(window.location.search).get("tag");
    if (t && tags.includes(t)) setActive(t);
  }, [tags]);

  function choose(t) {
    setActive(t);
    const url = t === "All" ? window.location.pathname : `${window.location.pathname}?tag=${encodeURIComponent(t)}`;
    window.history.replaceState(null, "", url);
  }

  const list = active === "All" ? projects : projects.filter((p) => p.tags.includes(active));

  return (
    <>
      <div role="group" aria-label="Filter projects by tag" className="mb-8 flex flex-wrap gap-2">
        {tags.map((t) => (
          <button
            key={t}
            type="button"
            aria-pressed={t === active}
            onClick={() => choose(t)}
            className={`${chip} ${
              t === active
                ? "border-transparent bg-accent text-on-accent"
                : "border-border-strong text-muted hover:border-accent hover:text-accent"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      <p className="sr-only" aria-live="polite">{list.length} projects shown</p>
      {list.length === 0 ? (
        <p className="text-muted">No projects with this tag yet.</p>
      ) : (
        <ul className="grid gap-6 md:grid-cols-2">
          {list.map((p, i) => (
            <li key={p.slug}>
              <ProjectCard project={p} index={i} reveal="enter" />
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
