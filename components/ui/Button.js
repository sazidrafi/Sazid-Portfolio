import Link from "next/link";

const base =
  "inline-flex items-center justify-center gap-2 rounded-md px-5 py-2.5 text-[0.95rem] font-semibold transition-colors";
const variants = {
  primary: "bg-accent text-on-accent border border-transparent hover:bg-accent-hover active:bg-accent-active",
  secondary: "bg-transparent text-text border border-border-strong hover:border-accent hover:text-accent hover:bg-surface-hover",
  ghost: "bg-transparent text-muted hover:text-accent",
};

export default function Button({ href, variant = "primary", className = "", children, external, download, ...props }) {
  const cls = `${base} ${variants[variant]} ${className}`;
  if (href) {
    const isExternal = external || /^https?:\/\//.test(href);
    if (isExternal) {
      return (
        <a href={href} className={cls} target="_blank" rel="noopener noreferrer" {...props}>
          {children}
        </a>
      );
    }
    if (download) {
      return (
        <a href={href} className={cls} download {...props}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={cls} {...props}>
        {children}
      </Link>
    );
  }
  return (
    <button type="button" className={cls} {...props}>
      {children}
    </button>
  );
}
