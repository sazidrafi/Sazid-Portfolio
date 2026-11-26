import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import profile, { contact } from "@/data/profile";

export default function ContactCta() {
  return (
    <Section id="contact" title={contact.ctaTitle}>
      <p className="max-w-2xl text-lg text-muted">{contact.ctaText}</p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Button href="/contact">Contact me</Button>
        <Button href={profile.linkedin} variant="secondary">
          LinkedIn
        </Button>
      </div>
    </Section>
  );
}
