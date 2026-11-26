import Hero from "@/components/sections/Hero";
import AboutSummary from "@/components/sections/AboutSummary";
import ContactCta from "@/components/sections/ContactCta";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSummary />
      {/* Next phases: Skills, FeaturedProjects, ResearchHighlight (place above ContactCta) */}
      <ContactCta />
    </>
  );
}
