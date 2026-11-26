import Hero from "@/components/sections/Hero";
import AboutSummary from "@/components/sections/AboutSummary";
import TechStackSection from "@/components/sections/TechStackSection";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import ContactCta from "@/components/sections/ContactCta";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSummary />
      <TechStackSection />
      <FeaturedProjects />
      {/* Next phases: ResearchHighlight (place above ContactCta) */}
      <ContactCta />
    </>
  );
}
