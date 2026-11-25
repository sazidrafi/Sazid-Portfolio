import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/BrandIcons";
import Button from "@/components/ui/Button";
import profile from "@/data/profile";

const iconLink =
  "inline-flex h-10 w-10 items-center justify-center rounded-md border border-border text-muted transition-colors hover:border-accent-border hover:text-accent";

export default function Hero() {
  return (
    <section id="top" className="bg-bg py-20 md:py-32">
      <div className="mx-auto w-full max-w-[1100px] px-5 sm:px-8">
        {profile.availability && (
          <p className="mb-6 inline-block rounded-full border border-accent-border bg-accent-subtle px-3 py-1 text-sm font-medium text-accent">
            {profile.availability}
          </p>
        )}
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">{profile.name}</h1>
        <p className="mt-4 font-mono text-base text-accent sm:text-lg">{profile.title}</p>
        <p className="mt-6 max-w-2xl text-lg text-muted">{profile.intro}</p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Button href="/contact">Contact me</Button>
          <Button href={profile.resumePath} variant="secondary" download>
            Download CV
          </Button>
        </div>

        <div className="mt-8 flex items-center gap-3">
          <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className={iconLink}>
            <GithubIcon size={18} />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className={iconLink}>
            <LinkedinIcon size={18} />
          </a>
          <a href={`mailto:${profile.email}`} aria-label="Email" className={iconLink}>
            <Mail size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
