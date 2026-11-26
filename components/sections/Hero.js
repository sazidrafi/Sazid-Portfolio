import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/BrandIcons";
import Button from "@/components/ui/Button";
import TiltWrapper from "@/components/ui/TiltWrapper";
import profile from "@/data/profile";

const iconLink =
  "hover-lift inline-flex h-10 w-10 items-center justify-center rounded-md border border-border text-muted transition-colors hover:text-accent";
const d = (ms) => ({ "--reveal-delay": `${ms}ms` });

export default function Hero() {
  return (
    <section id="top" className="bg-bg py-20 md:py-32">
      <div className="mx-auto grid w-full max-w-[1100px] grid-cols-1 items-center gap-12 px-5 sm:px-8 md:grid-cols-2">
        {/* Left Side: Hero Content */}
        <div>
          {profile.availability && (
            <p
              className="reveal-in mb-6 inline-block rounded-full border border-accent-border bg-accent-subtle px-3 py-1 text-sm font-medium text-accent"
              style={d(0)}
            >
              {profile.availability}
            </p>
          )}

          <h1
            className="reveal-in text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl"
            style={d(70)}
          >
            {profile.name}
          </h1>

          <p className="reveal-in mt-4 font-mono text-base text-accent sm:text-lg" style={d(140)}>
            {profile.title}
          </p>

          <p className="reveal-in mt-6 max-w-2xl text-lg text-muted" style={d(210)}>
            {profile.intro}
          </p>

          <div className="reveal-in mt-8 flex flex-wrap items-center gap-3" style={d(280)}>
            <Button href="/contact">Contact me</Button>

            <Button href={profile.resumePath} variant="secondary" download>
              Download CV
            </Button>
          </div>

          <div className="reveal-in mt-8 flex items-center gap-3" style={d(350)}>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className={iconLink}
            >
              <GithubIcon size={18} />
            </a>

            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className={iconLink}
            >
              <LinkedinIcon size={18} />
            </a>

            <a href={`mailto:${profile.email}`} aria-label="Email" className={iconLink}>
              <Mail size={18} />
            </a>
          </div>
        </div>

        {/* Right Side: Hero Image with Accent Gradient */}
        <div className="flex justify-center md:justify-end md:translate-x-16">
          {/* Entrance animation lives on this wrapper, the tilt lives inside it, so they never clash */}
          <div className="reveal-in w-full max-w-[720px]" style={d(200)}>
            <TiltWrapper className="relative flex w-full items-center justify-center">
              {/* Accent Gradient Background */}
              <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-accent/40 via-accent/20 to-transparent opacity-80 blur-2xl" />

              {/* Gradient Shape */}
              <div className="absolute inset-3 rounded-[2rem] bg-gradient-to-br from-accent/30 via-accent/10 to-transparent" />

              {/* Hero Image */}
              <img
                src="/images/hero.png"
                alt={`Portrait of ${profile.name}`}
                draggable={false}
                className="relative z-10 w-full rounded-2xl object-cover shadow-2xl"
              />
            </TiltWrapper>
          </div>
        </div>
      </div>
    </section>
  );
}