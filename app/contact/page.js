import { Mail, MapPin } from "lucide-react";
import PageHeader from "@/components/ui/PageHeader";
import Card from "@/components/ui/Card";
import CopyButton from "@/components/ui/CopyButton";
import { GithubIcon, LinkedinIcon } from "@/components/ui/BrandIcons";
import ContactForm from "@/components/sections/ContactForm";
import profile, { contact } from "@/data/profile";

export const metadata = {
  title: "Contact",
  description: "Get in touch about junior frontend roles, projects, or collaboration.",
};

const linkCls = "font-medium text-text transition-colors hover:text-accent break-all";
const iconWrap = "flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-accent-subtle text-accent";
const d = (ms) => ({ "--reveal-delay": `${ms}ms` });

export default function ContactPage() {
  return (
    <>
      <PageHeader title="Contact" intro={contact.intro} />

      <div className="mx-auto grid w-full max-w-[1100px] gap-10 px-5 pb-24 sm:px-8 lg:grid-cols-[1.2fr_1fr]">
        <Card data-reveal className="p-6 sm:p-8">
          <h2 className="mb-6 text-2xl font-semibold tracking-tight">Send a message</h2>
          <ContactForm />
        </Card>

        <div className="space-y-4">
          <h2 data-reveal className="mb-2 text-2xl font-semibold tracking-tight">Find me online</h2>

          <Card interactive data-reveal style={d(60)} className="flex items-center gap-4 p-5">
            <span className={iconWrap}><Mail size={20} /></span>
            <div className="min-w-0 flex-1">
              <p className="text-sm text-subtle">Email</p>
              <a href={`mailto:${profile.email}`} className={linkCls}>{profile.email}</a>
            </div>
            <CopyButton text={profile.email} label="Copy" />
          </Card>

          <Card interactive data-reveal style={d(120)} className="flex items-center gap-4 p-5">
            <span className={iconWrap}><LinkedinIcon size={20} /></span>
            <div className="min-w-0">
              <p className="text-sm text-subtle">LinkedIn</p>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className={linkCls}>
                md-sazidul-islam39
              </a>
            </div>
          </Card>

          <Card interactive data-reveal style={d(180)} className="flex items-center gap-4 p-5">
            <span className={iconWrap}><GithubIcon size={20} /></span>
            <div className="min-w-0">
              <p className="text-sm text-subtle">GitHub</p>
              <a href={profile.github} target="_blank" rel="noopener noreferrer" className={linkCls}>
                github.com/sazidrafi
              </a>
            </div>
          </Card>

          {profile.location && (
            <Card interactive data-reveal style={d(240)} className="flex items-center gap-4 p-5">
              <span className={iconWrap}><MapPin size={20} /></span>
              <div>
                <p className="text-sm text-subtle">Location</p>
                <p className="font-medium">{profile.location}</p>
              </div>
            </Card>
          )}
        </div>
      </div>
    </>
  );
}
