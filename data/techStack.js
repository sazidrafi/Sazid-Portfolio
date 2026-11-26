// Icons live in public/tech/<icon>.svg.
// invert: true flips dark-only icons to white in dark mode so they stay visible.
const techStack = [
  {
    group: "Languages",
    items: [
      { name: "HTML", icon: "html" },
      { name: "CSS", icon: "css" },
      { name: "JavaScript", icon: "javascript" },
      { name: "TypeScript", icon: "typescript" },
    ],
  },
  {
    group: "CSS Frameworks & Libraries",
    items: [
      { name: "Tailwind CSS", icon: "tailwind" },
      { name: "Bootstrap", icon: "bootstrap" },
    ],
  },
  {
    group: "JavaScript Frameworks & Libraries",
    items: [
      { name: "React", icon: "react" },
      { name: "Next.js", icon: "next", invert: true },
      { name: "Node.js", icon: "nodejs" },
      { name: "Express", icon: "express", invert: true },
    ],
  },
  {
    group: "Database & Model",
    items: [
      { name: "MongoDB", icon: "mongodb" },
      { name: "MySQL", icon: "mysql" },
      { name: "PostgreSQL", icon: "postgresql" },
    ],
  },
  {
    group: "Deployment Platform",
    items: [{ name: "Vercel", icon: "vercel", invert: true }],
  },
  {
    group: "Tools & Technologies",
    items: [
      { name: "Windows", icon: "windows" },
      { name: "Git", icon: "git" },
      { name: "GitHub", icon: "github", invert: true },
      { name: "VS Code", icon: "vscode" },
    ],
  },
];

export default techStack;
