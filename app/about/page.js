import PageHeader from "@/components/ui/PageHeader";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import TechStackGrid from "@/components/tech/TechStackGrid";
import profile, { about } from "@/data/profile";

export const metadata = {
  title: "About",
  description: "Background, education, interests, and career goals.",
};

const h2 = "mb-5 text-2xl font-semibold tracking-tight";
const delay = (i, step = 80) => ({ "--reveal-delay": `${Math.min(i, 5) * step}ms` });

export default function AboutPage() {
  const { story, education, interests, currentlyLearning, careerGoals } = about;
  const facts = [
    { label: "Location", value: profile.location },
    { label: "Availability", value: profile.availability },
    { label: "Languages", value: profile.languages },
  ].filter((f) => f.value);

  return (
    <>
      <PageHeader title="About me" intro="A little about my background, what I study, and where I want to go next." />

      <div className="mx-auto w-full max-w-[1100px] space-y-16 px-5 pb-24 sm:px-8">
        <section data-reveal>
          <h2 className={h2}>My story</h2>
          <div className="max-w-[70ch] space-y-4 text-lg text-muted">
            {story.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </section>

        <section>
          <h2 data-reveal className={h2}>Technology stack</h2>
          <TechStackGrid />
        </section>

        <section>
          <h2 data-reveal className={h2}>Education</h2>
          <Card data-reveal className="p-6 sm:p-8">
            <h3 className="text-xl font-semibold">{education.university}</h3>
            <p className="mt-1 text-muted">{education.degree}</p>
            <p className="mt-1 font-mono text-sm text-subtle">Graduated: {education.graduated}</p>
            {education.relevantCourses?.length > 0 && (
              <div className="mt-6">
                <p className="mb-3 text-sm font-medium text-text">Relevant courses</p>
                <ul className="flex flex-wrap gap-2">
                  {education.relevantCourses.map((c) => (
                    <li key={c}>
                      <Badge>{c}</Badge>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {education.certificates?.length > 0 && (
              <div className="mt-6">
                <p className="mb-3 text-sm font-medium text-text">Certificates</p>
                <ul className="grid gap-3 sm:grid-cols-2">
                  {education.certificates.map((c) => (
                    <li key={c.title} className="hover-lift rounded-md border border-border bg-bg-subtle p-4">
                      <p className="font-semibold">{c.title}</p>
                      <p className="mt-1 font-mono text-xs text-accent">{c.organizer}</p>
                      <p className="mt-2 text-sm text-muted">{c.description}</p>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {education.notes && <p className="mt-6 max-w-[70ch] text-muted">{education.notes}</p>}
          </Card>

          {education.earlierEducation?.length > 0 && (
            <div className="mt-8">
              <h3 data-reveal className="mb-4 text-lg font-semibold">Earlier education</h3>
              <ul className="grid gap-4 sm:grid-cols-2">
                {education.earlierEducation.map((e, i) => (
                  <li key={e.title} data-reveal style={delay(i, 90)}>
                    <Card interactive className="h-full p-5 sm:p-6">
                      <h4 className="font-semibold">{e.title}</h4>
                      <p className="mt-1 text-muted">{e.institution}</p>
                      <p className="mt-1 font-mono text-sm text-subtle">
                        Group: {e.group} | Passing year: {e.year}
                      </p>
                      <div className="mt-4">
                        <Badge>GPA {e.gpa}</Badge>
                      </div>
                    </Card>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </section>

        <section data-reveal>
          <h2 className={h2}>Interests and learning</h2>
          <ul className="flex flex-wrap gap-2">
            {interests.map((i) => (
              <li key={i}>
                <Badge variant="neutral">{i}</Badge>
              </li>
            ))}
          </ul>
          {currentlyLearning && (
            <p className="mt-6 max-w-[70ch] text-muted">
              <span className="font-medium text-text">Currently learning: </span>
              {currentlyLearning}
            </p>
          )}
        </section>

        <section data-reveal>
          <h2 className={h2}>Career goals</h2>
          <p className="max-w-[70ch] text-lg text-muted">{careerGoals}</p>
        </section>

        {facts.length > 0 && (
          <section>
            <h2 data-reveal className={h2}>Quick facts</h2>
            <dl className="grid gap-4 sm:grid-cols-3">
              {facts.map((f, i) => (
                <Card key={f.label} interactive data-reveal style={delay(i, 90)} className="p-5">
                  <dt className="text-sm text-subtle">{f.label}</dt>
                  <dd className="mt-1 font-medium">{f.value}</dd>
                </Card>
              ))}
            </dl>
          </section>
        )}

        <div data-reveal className="flex flex-wrap gap-3">
          <Button href="/contact">Contact me</Button>
          <Button href={profile.resumePath} variant="secondary" download>
            Download CV
          </Button>
        </div>
      </div>
    </>
  );
}
