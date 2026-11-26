import PageHeader from "@/components/ui/PageHeader";
import ProjectsExplorer from "@/components/projects/ProjectsExplorer";
import projects, { getTags } from "@/data/projects";

export const metadata = {
  title: "Projects",
  description: "Selected projects with screenshots, features, challenges, and links.",
};

export default function ProjectsPage() {
  // Send only what the cards need to the browser
  const cards = projects.map(({ slug, title, summary, status, tags, thumbnail, demo, liveUrl, repoUrl, date }) => ({
    slug, title, summary, status, tags, thumbnail, demo, liveUrl, repoUrl, date,
  }));

  return (
    <>
      <PageHeader title="Projects" intro="Things I have built. Open any project to see screenshots, features, the problems I ran into, and how I solved them." />
      <div className="mx-auto w-full max-w-[1100px] px-5 pb-24 sm:px-8">
        <ProjectsExplorer projects={cards} tags={getTags()} />
      </div>
    </>
  );
}
