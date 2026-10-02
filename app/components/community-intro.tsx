import Image from "next/image";
import type { CommunityIntroContent } from "../content/community-intro";

type CommunityIntroProps = {
  content: CommunityIntroContent;
};

export default function CommunityIntro({
  content,
}: CommunityIntroProps) {
  if (!content.visible || !content.published) {
    return null;
  }

  return (
    <section
      className="community-section"
      aria-labelledby="community-heading"
    >
      <div className="page-shell community-layout">
        <div className="community-image">
          <Image
            src={content.image}
            alt={content.imageAlt}
            fill
            sizes="(min-width: 52rem) 42vw, 100vw"
          />
          <span className="community-image-label">DEMO IMAGE</span>
        </div>

        <div className="community-copy">
          <p className="community-demo-label">DEMO COPY</p>
          <h2 id="community-heading">{content.heading}</h2>
          <p className="community-supporting-line">{content.supportingLine}</p>
          <p className="community-description">{content.description}</p>
          <ul className="community-pillars" aria-label="Community values">
            {content.supportingStatements.map((statement) => (
              <li key={statement}>{statement}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}