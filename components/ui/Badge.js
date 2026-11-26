const variants = {
  accent: "border-accent-border bg-accent-subtle text-accent",
  neutral: "border-border-strong bg-surface text-muted",
};

export default function Badge({ variant = "accent", className = "", children }) {
  return (
    <span className={`inline-block rounded-full border px-3 py-1 text-sm font-medium ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
}
