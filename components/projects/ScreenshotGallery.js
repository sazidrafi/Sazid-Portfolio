"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react";

const iconBtn =
  "inline-flex h-11 w-11 items-center justify-center rounded-full border border-border-strong bg-surface text-text shadow-card transition-colors hover:border-accent hover:text-accent";

export default function ScreenshotGallery({ shots, title }) {
  const [open, setOpen] = useState(null);
  const opener = useRef(null);
  const closeRef = useRef(null);
  const n = shots.length;

  const close = useCallback(() => {
    setOpen(null);
    opener.current?.focus();
  }, []);
  const step = useCallback((d) => setOpen((i) => (i + d + n) % n), [n]);

  useEffect(() => {
    if (open === null) return;
    const onKey = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open === null, close, step]); // eslint-disable-line react-hooks/exhaustive-deps

  const stop = (fn) => (e) => {
    e.stopPropagation();
    fn();
  };

  return (
    <>
      <ul className="grid gap-5 sm:grid-cols-2">
        {shots.map((s, i) => (
          <li key={s.src}>
            <button
              type="button"
              className="group block w-full text-left"
              onClick={(e) => {
                opener.current = e.currentTarget;
                setOpen(i);
              }}
              aria-label={`Enlarge screenshot: ${s.caption}`}
            >
              <div className="hover-lift relative aspect-video overflow-hidden rounded-lg border border-border bg-bg-subtle">
                <Image
                  src={s.src}
                  alt={s.alt}
                  fill
                  sizes="(min-width: 640px) 45vw, 100vw"
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                />
                <span className="absolute right-3 top-3 rounded-md bg-surface p-1.5 text-text opacity-0 shadow-card transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100">
                  <Maximize2 size={16} />
                </span>
              </div>
              <p className="mt-2 text-sm text-muted">{s.caption}</p>
            </button>
          </li>
        ))}
      </ul>

      {open !== null && (
        <div
          role="dialog"
          data-lenis-prevent
          aria-modal="true"
          aria-label={`${title} screenshots`}
          className="page-enter fixed inset-0 z-50 flex items-center justify-center bg-bg/90 p-4 backdrop-blur-sm"
          onClick={close}
        >
          <button
            ref={closeRef}
            type="button"
            aria-label="Close"
            onClick={stop(close)}
            className={`${iconBtn} fixed right-4 top-4`}
          >
            <X size={20} />
          </button>
          {n > 1 && (
            <>
              <button
                type="button"
                aria-label="Previous screenshot"
                onClick={stop(() => step(-1))}
                className={`${iconBtn} fixed left-3 top-1/2 -translate-y-1/2`}
              >
                <ChevronLeft size={22} />
              </button>
              <button
                type="button"
                aria-label="Next screenshot"
                onClick={stop(() => step(1))}
                className={`${iconBtn} fixed right-3 top-1/2 -translate-y-1/2`}
              >
                <ChevronRight size={22} />
              </button>
            </>
          )}
          <figure
            className="w-full max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={shots[open].src}
              alt={shots[open].alt}
              width={1600}
              height={900}
              sizes="100vw"
              className="max-h-[75vh] w-full rounded-lg border border-border bg-surface object-contain shadow-2xl"
            />
            <figcaption className="mt-3 text-center text-sm text-muted">
              {shots[open].caption} ({open + 1} / {n})
            </figcaption>
          </figure>
        </div>
      )}
    </>
  );
}
