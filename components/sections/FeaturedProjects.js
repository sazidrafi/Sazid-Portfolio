import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import ProjectCard from "@/components/projects/ProjectCard";
import projects from "@/data/projects";

export default function FeaturedProjects() {
  const featured = projects.filter((p) => p.featured).slice(0, 4);
  if (featured.length === 0) return null;
  return (
    <Section id="projects" title="Featured projects" subtitle="A few things I have built, with the story behind each." alt revealContent={false}>
      <ul className="grid gap-6 md:grid-cols-2">
        {featured.map((p, i) => (
          <li key={p.slug}>
            <ProjectCard project={p} index={i} />
          </li>
        ))}
      </ul>
      <div data-reveal className="mt-10">
        <Button href="/projects" variant="secondary">View all projects</Button>
      </div>
    </Section>
  );
}
