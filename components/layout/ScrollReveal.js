"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

// Reveals [data-reveal] elements as they scroll into view.
// Elements already on screen are never hidden, so there is no flicker and nothing waits on JavaScript.
export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!("IntersectionObserver" in window)) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.remove("reveal-hidden");
          entry.target.classList.add("reveal-in");
          io.unobserve(entry.target);
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -8% 0px" }
    );

    const raf = requestAnimationFrame(() => {
      const vh = window.innerHeight;
      document.querySelectorAll("[data-reveal]").forEach((el) => {
        if (el.classList.contains("reveal-in")) return;
        if (el.getBoundingClientRect().top < vh * 0.92) return; // already visible
        el.classList.add("reveal-hidden");
        io.observe(el);
      });
    });

    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      document.querySelectorAll(".reveal-hidden").forEach((el) => el.classList.remove("reveal-hidden"));
    };
  }, [pathname]);

  return null;
}
