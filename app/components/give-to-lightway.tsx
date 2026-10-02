import Link from "next/link";
import type { GivingSectionContent } from "../content/give-to-lightway";

type GiveToLightwayProps = {
  content: GivingSectionContent;
};

export default function GiveToLightway({ content }: GiveToLightwayProps) {
  if (!content.visible || !content.published) {
    return null;
  }

  const publishedAreas = content.areas
    .filter((area) => area.published)
    .sort((first, second) => first.displayOrder - second.displayOrder);

  return (
    <section
      className="giving-section"
      aria-labelledby="giving-heading"
      aria-describedby="giving-demo-note"
    >
      <div className="page-shell giving-layout">
        <div className="giving-copy">
          <p className="giving-demo-label">DEMO GIVING INFORMATION</p>
          <h2 id="giving-heading">{content.heading}</h2>
          <p className="giving-supporting-line">{content.supportingLine}</p>
          <p className="giving-description">{content.description}</p>
          <Link
            className="giving-action"
            href={content.actionUrl}
            aria-label={`${content.actionLabel} (future giving page)`}
          >
            {content.actionLabel} <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>

        <div className="giving-areas-wrap">
          <p id="giving-demo-note" className="giving-areas-label">
            Demo categories only · No payment funds configured
          </p>
          <ul className="giving-areas" aria-label="Demo giving categories">
            {publishedAreas.map((area) => (
              <li key={area.id}>{area.name}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}