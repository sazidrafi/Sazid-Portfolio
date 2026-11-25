import { Mail, ArrowUp } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/BrandIcons";
import profile from "@/data/profile";

const iconLink = "text-muted transition-colors hover:text-accent";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-bg-subtle">
      <div className="mx-auto flex w-full max-w-[1100px] flex-col items-center justify-between gap-4 px-5 py-8 sm:flex-row sm:px-8">
        <p className="text-sm text-subtle">
          &copy; {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
        <div className="flex items-center gap-5">
          <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className={iconLink}>
            <GithubIcon size={20} />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className={iconLink}>
            <LinkedinIcon size={20} />
          </a>
          <a href={`mailto:${profile.email}`} aria-label="Email" className={iconLink}>
            <Mail size={20} />
          </a>
          <a href="#top" className="flex items-center gap-1 text-sm text-muted hover:text-accent">
            Back to top <ArrowUp size={14} />
          </a>
        </div>
      </div>
    </footer>
  );
}
