export default function Section({ id, title, subtitle, alt = false, children }) {
  return (
    <section id={id} className={`${alt ? "bg-bg-subtle" : "bg-bg"} py-16 md:py-24`}>
      <div className="mx-auto w-full max-w-[1100px] px-5 sm:px-8">
        {title && (
          <header className="mb-10 max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-tight">{title}</h2>
            {subtitle && <p className="mt-3 text-muted">{subtitle}</p>}
          </header>
        )}
        {children}
      </div>
    </section>
  );
}
