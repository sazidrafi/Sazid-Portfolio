import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-[1100px] px-5 py-32 text-center sm:px-8">
      <p className="font-mono text-accent">404</p>
      <h1 className="mt-3 text-3xl font-semibold">This page is not available yet</h1>
      <p className="mx-auto mt-3 max-w-md text-muted">The page may have moved, or it has not been built yet.</p>
      <div className="mt-8"><Button href="/">Back to home</Button></div>
    </section>
  );
}
