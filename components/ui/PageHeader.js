export default function PageHeader({ title, intro }) {
  return (
    <header className="bg-bg pb-10 pt-16 md:pb-14 md:pt-24">
      <div className="mx-auto w-full max-w-[1100px] px-5 sm:px-8">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">{title}</h1>
        {intro && <p className="mt-4 max-w-2xl text-lg text-muted">{intro}</p>}
      </div>
    </header>
  );
}
