import Image from "next/image";
import Link from "next/link";
import type { ThisWeekFeatureContent } from "../content/this-week-feature";

type ThisWeekFeatureProps = {
  feature: ThisWeekFeatureContent;
};

export default function ThisWeekFeature({
  feature,
}: ThisWeekFeatureProps) {
  return (
    <section className="this-week-section" aria-labelledby="this-week-heading">
      <div className="page-shell this-week-shell">
        <header className="this-week-intro">
          <h2 id="this-week-heading">THIS WEEK AT LIGHTWAY</h2>
          <p>Gather. Worship. Grow.</p>
        </header>

        <article
          className="this-week-feature"
          aria-labelledby="this-week-feature-title"
        >
          <div className="this-week-image">
            <Image
              src={feature.image}
              alt={feature.imageAlt}
              fill
              sizes="(min-width: 52rem) 38vw, 100vw"
            />
            <span className="this-week-image-label">DEMO IMAGE</span>
          </div>

          <div className="this-week-copy">
            {feature.isDemo && (
              <p className="this-week-demo-label">DEMO CONTENT</p>
            )}
            <p className="this-week-category">{feature.category}</p>
            <h3 id="this-week-feature-title">{feature.title}</h3>

            <div className="this-week-speaker">
              <p>{feature.speakerName}</p>
              <p>{feature.speakerRole}</p>
            </div>

            <blockquote>{feature.quote}</blockquote>

            <div className="this-week-details">
              <p>
                <span>{feature.date}</span>
                <span aria-hidden="true">&bull;</span>
                <span>{feature.time}</span>
              </p>
              <p>{feature.location}</p>
            </div>

            <Link className="this-week-action" href={feature.actionUrl}>
              {feature.actionLabel} <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </article>
      </div>
    </section>
  );
}