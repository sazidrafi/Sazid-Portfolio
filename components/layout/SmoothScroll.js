"use client";
import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

// Smooth, eased mouse-wheel scrolling.
// Tune the feel with `lerp`: lower = slower and floatier (0.05), higher = snappier (0.12).
// Touch screens keep their normal native scrolling, and visitors who prefer reduced motion get none of this.
export default function SmoothScroll() {
  const pathname = usePathname();
  const lenisRef = useRef(null);
  const lastPath = useRef(pathname);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const html = document.documentElement;
    const previous = html.style.scrollBehavior;
    html.style.scrollBehavior = "auto"; // Lenis does the smoothing, so CSS smooth scrolling must not stack on top

    const lenis = new Lenis({
      autoRaf: true,
      lerp: 0.080,
      wheelMultiplier: 1,
      anchors: { offset: -80 }, // anchor links land below the sticky navbar
    });
    lenisRef.current = lenis;

    return () => {
      lenis.destroy();
      lenisRef.current = null;
      html.style.scrollBehavior = previous;
    };
  }, []);

  // New page: start at the top instantly (unless the link has a #section)
  useEffect(() => {
    if (lastPath.current === pathname) return;
    lastPath.current = pathname;
    if (!window.location.hash) lenisRef.current?.scrollTo(0, { immediate: true, force: true });
  }, [pathname]);

  return null;
}