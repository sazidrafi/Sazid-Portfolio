"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import Button from "@/components/ui/Button";
import profile, { navLinks } from "@/data/profile";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  const isActive = (href) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-surface/95 backdrop-blur">
      <nav aria-label="Main" className="mx-auto flex h-16 w-full max-w-[1100px] items-center justify-between px-5 sm:px-8">
        <Link href="/" className="text-lg font-semibold tracking-tight text-text hover:text-accent">
          {profile.shortName}
        </Link>

        <ul className="hidden items-center gap-7 md:flex">
          {navLinks.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                aria-current={isActive(l.href) ? "page" : undefined}
                className={`border-b-2 py-1 text-[0.95rem] transition-colors ${
                  isActive(l.href) ? "border-accent text-accent" : "border-transparent text-muted hover:text-text"
                }`}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <Button href={profile.resumePath} variant="secondary" download className="hidden !py-2 md:inline-flex">
            Resume
          </Button>
          <ThemeToggle />
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border-strong text-text md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {open && (
        <div id="mobile-menu" className="border-t border-border bg-surface md:hidden">
          <ul className="mx-auto flex max-w-[1100px] flex-col px-5 py-3 sm:px-8">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className={`flex min-h-[44px] items-center text-base ${isActive(l.href) ? "text-accent" : "text-text"}`}
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li className="py-3">
              <Button href={profile.resumePath} variant="secondary" download className="w-full">
                Download Resume
              </Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
