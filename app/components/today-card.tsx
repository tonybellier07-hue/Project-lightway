type TodayCardProps = {
  id: string;
  number: string;
  label: string;
  title: string;
  description: string;
};

export default function TodayCard({
  id,
  number,
  label,
  title,
  description,
}: TodayCardProps) {
  return (
    <article id={id} className="today-card rounded-sm border p-6 md:p-7">
      <div className="mb-8 flex items-center justify-between gap-4">
        <p className="text-sm font-semibold text-[var(--color-forest)]">{label}</p>
        <span className="text-xs font-medium text-[var(--color-muted)]">
          {number}
        </span>
      </div>
      <h3 className="text-2xl font-medium leading-tight text-[var(--color-ink)]">
        {title}
      </h3>
      <p className="mt-3 text-sm leading-6 text-[var(--color-muted)]">
        {description}
      </p>
    </article>
  );
}