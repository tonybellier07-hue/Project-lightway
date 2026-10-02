type PlaceholderPageProps = {
  title: string;
};

export default function PlaceholderPage({ title }: PlaceholderPageProps) {
  return (
    <main className="min-h-screen">
      <section className="page-shell py-16 md:py-24">
        <p className="section-eyebrow">Lightway SDA Church</p>
        <h1 className="mt-3 text-4xl font-medium text-[var(--color-ink)]">
          {title}
        </h1>
        <p className="mt-4 max-w-xl text-base leading-7 text-[var(--color-muted)]">
          This space is being prepared.
        </p>
      </section>
    </main>
  );
}