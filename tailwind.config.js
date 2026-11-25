// Semantic color names only. Values live in app/globals.css.
const c = (name) => `rgb(var(--${name}) / <alpha-value>)`;
const a = (name, alpha) => `rgb(var(--${name}) / var(--${alpha}))`;

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}", "./data/**/*.js"],
  theme: {
    extend: {
      colors: {
        bg: c("bg"),
        "bg-subtle": c("bg-subtle"),
        surface: c("surface"),
        "surface-hover": c("surface-hover"),
        border: c("border"),
        "border-strong": c("border-strong"),
        text: c("text"),
        muted: c("text-muted"),
        subtle: c("text-subtle"),
        accent: c("accent"),
        "accent-hover": c("accent-hover"),
        "accent-active": c("accent-active"),
        "accent-subtle": a("accent-subtle", "accent-subtle-a"),
        "accent-border": a("accent-border", "accent-border-a"),
        "on-accent": c("on-accent"),
        "focus-ring": c("focus-ring"),
        "code-bg": c("code-bg"),
        "code-text": c("code-text"),
        success: c("success"),
        warning: c("warning"),
        danger: c("danger"),
        info: c("info"),
        "success-subtle": a("success-subtle", "status-subtle-a"),
        "warning-subtle": a("warning-subtle", "status-subtle-a"),
        "danger-subtle": a("danger-subtle", "status-subtle-a"),
        "info-subtle": a("info-subtle", "status-subtle-a"),
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      borderRadius: { md: "10px", lg: "16px" },
      boxShadow: {
        card: "0 1px 2px rgb(15 23 42 / 0.06)",
        "card-hover": "0 4px 16px rgb(15 23 42 / 0.08)",
      },
    },
  },
  plugins: [],
};
