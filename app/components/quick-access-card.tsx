import Link from "next/link";

type QuickAccessIcon =
  | "bible"
  | "events"
  | "watch";

type QuickAccessCardProps = {
  title: string;
  description: string;
  icon: QuickAccessIcon;
  href: string;
};

function QuickAccessIconMark({ name }: { name: QuickAccessIcon }) {
  const sharedProps = {
    "aria-hidden": true as const,
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    strokeWidth: 1.7,
    viewBox: "0 0 24 24",
  };

  return (
    <svg {...sharedProps} className="quick-access-icon">
      {name === "bible" && (
        <>
          <path d="M12 6.5v14M12 7c-2.4-1.8-5.3-1.8-8-.2v13c2.7-1.6 5.6-1.6 8 .2m0-13c2.4-1.8 5.3-1.8 8-.2v13c-2.7-1.6-5.6-1.6-8 .2" />
          <path d="M8 10h1.5M8 13h1.5m5-3H16m-1.5 3H16" />
        </>
      )}
      {name === "events" && (
        <>
          <rect x="3.5" y="5" width="17" height="16" rx="2" />
          <path d="M7.5 3v4m9-4v4M3.5 9.5h17M8 13h2m4 0h2M8 17h2" />
        </>
      )}
      {name === "watch" && (
        <>
          <rect x="3" y="5" width="18" height="14" rx="2.5" />
          <path d="m10 9 5 3-5 3V9Z" />
        </>
      )}
    </svg>
  );
}

function QuickAccessCardContent({
  title,
  description,
  icon,
}: Pick<QuickAccessCardProps, "title" | "description" | "icon">) {
  return (
    <>
      <span className="quick-access-icon-wrap">
        <QuickAccessIconMark name={icon} />
      </span>
      <span className="quick-access-copy">
        <span className="quick-access-title">{title}</span>
        <span className="quick-access-description">{description}</span>
      </span>
    </>
  );
}

export default function QuickAccessCard({
  title,
  description,
  icon,
  href,
}: QuickAccessCardProps) {
  return (
    <Link className="quick-access-card" href={href}>
      <QuickAccessCardContent
        title={title}
        description={description}
        icon={icon}
      />
      <span className="quick-access-arrow" aria-hidden="true">
        &rarr;
      </span>
    </Link>
  );
}