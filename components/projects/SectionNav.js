"use client";
import { useEffect, useRef, useState } from "react";

// Sticky "On this page" menu with scroll-spy (desktop only)
export default function SectionNav({ items }) {
  const [active, setActive] = useState(items[0]?.id);
  const locked = useRef(false); // pause scroll-spy while a clicked link is scrolling
  const key = items.map((i) => i.id).join(",");

  useEffect(() => {
    const els = key
      .split(",")
      .map((id) => document.getElementById(id))
      .filter(Boolean);
    if (els.length === 0) return;

    let raf = 0;
    const update = () => {
      raf = 0;
      if (locked.current) return;
      const line = window.innerHeight * 0.3; // the section crossing this line is "current"
      let current = els[0].id;
      for (const el of els) {
        if (el.getBoundingClientRect().top <= line) current = el.id;
      }
      const atBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 4;
      if (atBottom) current = els[els.length - 1].id;
      setActive(current);
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [key]);

  function onClick(id) {
    setActive(id);
    locked.current = true;
    setTimeout(() => {
      locked.current = false;
    }, 1600);
  }

  return (
    <nav
      aria-label="On this page"
      className="sticky top-24 hidden self-start lg:block"
    >
      <p className="mb-3 font-mono text-xs uppercase tracking-wider text-subtle">
        On this page
      </p>
      <ul className="border-l border-border">
        {items.map((i) => (
          <li key={i.id}>
            <a
              href={`#${i.id}`}
              onClick={() => onClick(i.id)}
              aria-current={active === i.id ? "true" : undefined}
              className={`-ml-px block border-l-2 py-1.5 pl-4 text-sm transition-colors ${
                active === i.id
                  ? "border-accent text-accent"
                  : "border-transparent text-muted hover:text-text"
              }`}
            >
              {i.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
