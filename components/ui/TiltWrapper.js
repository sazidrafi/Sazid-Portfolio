"use client";
import { useRef } from "react";

// Mouse-following 3D tilt. Mouse devices only, skipped for touch screens and reduced-motion users.
// Tune the feel with: max (tilt degrees) and scale (zoom on hover).
export default function TiltWrapper({ children, className = "", max = 8, scale = 1.03 }) {
  const outerRef = useRef(null);
  const innerRef = useRef(null);
  const frame = useRef(0);

  const allowed = () =>
    window.matchMedia("(hover: hover) and (pointer: fine)").matches &&
    !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function onMove(e) {
    if (!allowed()) return;
    const { clientX, clientY } = e;
    cancelAnimationFrame(frame.current);
    frame.current = requestAnimationFrame(() => {
      const outer = outerRef.current;
      const inner = innerRef.current;
      if (!outer || !inner) return;
      // Measure the outer (non-rotating) box so the tilt never shifts its own hit area
      const r = outer.getBoundingClientRect();
      const x = (clientX - r.left) / r.width - 0.5;
      const y = (clientY - r.top) / r.height - 0.5;
      inner.style.transition = "transform 120ms ease-out";
      inner.style.transform = `rotateX(${(-y * 2 * max).toFixed(2)}deg) rotateY(${(x * 2 * max).toFixed(2)}deg) scale(${scale})`;
    });
  }

  function onLeave() {
    cancelAnimationFrame(frame.current);
    const inner = innerRef.current;
    if (!inner) return;
    inner.style.transition = "transform 600ms cubic-bezier(0.22, 1, 0.36, 1)";
    inner.style.transform = "rotateX(0deg) rotateY(0deg) scale(1)";
  }

  return (
    <div ref={outerRef} onMouseMove={onMove} onMouseLeave={onLeave} style={{ perspective: "1000px" }}>
      <div ref={innerRef} className={className}>
        {children}
      </div>
    </div>
  );
}