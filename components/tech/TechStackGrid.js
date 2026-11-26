import Card from "@/components/ui/Card";
import techStack from "@/data/techStack";

export default function TechStackGrid() {
  return (
    <ul className="grid gap-5 md:grid-cols-2">
      {techStack.map((g, gi) => (
        <li key={g.group}>
          <Card data-reveal style={{ "--reveal-delay": `${Math.min(gi, 5) * 70}ms` }} className="h-full p-5 sm:p-6">
            <h3 className="mb-4 font-mono text-xs uppercase tracking-wider text-accent">{g.group}</h3>
            <ul className="flex flex-wrap gap-3">
              {g.items.map((t) => (
                <li
                  key={t.name}
                  className="hover-lift group flex w-20 flex-col items-center gap-2 rounded-lg border border-border bg-bg-subtle px-2 py-3"
                >
                  <img
                    src={`/tech/${t.icon}.svg`}
                    alt=""
                    width={36}
                    height={36}
                    loading="lazy"
                    decoding="async"
                    className={`h-9 w-9 transition-transform duration-200 group-hover:scale-110 ${t.invert ? "dark:invert" : ""}`}
                  />
                  <span className="text-center text-xs font-medium text-muted">{t.name}</span>
                </li>
              ))}
            </ul>
          </Card>
        </li>
      ))}
    </ul>
  );
}
