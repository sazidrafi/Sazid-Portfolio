import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import { about } from "@/data/profile";

export default function AboutSummary() {
  return (
    <Section id="about" title="About me" alt>
      <p className="max-w-2xl text-lg text-muted">{about.summary}</p>
      <div className="mt-8">
        <Button href="/about" variant="secondary">
          Read more
        </Button>
      </div>
    </Section>
  );
}
