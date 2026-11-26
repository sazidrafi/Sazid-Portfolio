import Section from "@/components/ui/Section";
import TechStackGrid from "@/components/tech/TechStackGrid";

export default function TechStackSection() {
  return (
    <Section id="tech" title="Technology stack" subtitle="The languages, frameworks, and tools I work with." revealContent={false}>
      <TechStackGrid />
    </Section>
  );
}
