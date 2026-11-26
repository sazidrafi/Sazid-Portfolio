// interactive: adds the hover lift (use for clickable or "feature" cards, not for forms or large containers)
export default function Card({ interactive = false, className = "", children, ...props }) {
  return (
    <div
      className={`rounded-lg border border-border bg-surface shadow-card ${interactive ? "hover-lift" : ""} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
