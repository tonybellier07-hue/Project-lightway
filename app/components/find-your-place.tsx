import Link from "next/link";
import type { MinistryEntry } from "../content/find-your-place";

type FindYourPlaceProps = {
  ministries: MinistryEntry[];
};

export default function FindYourPlace({ ministries }: FindYourPlaceProps) {
  const featuredMinistries = ministries
    .filter((ministry) => ministry.published && ministry.featured)
    .sort((first, second) => first.displayOrder - second.displayOrder);

  return (
    <section className="find-place-section" aria-labelledby="find-place-heading">
      <div className="page-shell find-place-shell">
        <header className="find-place-intro">
          <p className="find-place-eyebrow">Demo ministry preview</p>
          <h2 id="find-place-heading">FIND YOUR PLACE</h2>
          <p>There is room for you at Lightway.</p>
        </header>

        <ul className="find-place-list" aria-label="Demo community areas">
          {featuredMinistries.map((ministry) => (
            <li key={ministry.id} className="find-place-item">
              <h3>
                {ministry.ministryPageUrl ? (
                  <Link
                    className="find-place-item-link"
                    href={ministry.ministryPageUrl}
                  >
                    {ministry.name} <span aria-hidden="true">&rarr;</span>
                  </Link>
                ) : (
                  ministry.name
                )}
              </h3>
              <p>{ministry.shortDescription}</p>
            </li>
          ))}
        </ul>

        <Link className="find-place-action" href="/ministries">
          Explore All Ministries <span aria-hidden="true">&rarr;</span>
        </Link>
      </div>
    </section>
  );
}