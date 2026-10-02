import Image from "next/image";
import Link from "next/link";
import type { KidsHomeContent } from "../content/kids-home";
import type {
  KidsResourceIcon,
  KidsResourcePreview,
  KidsResourceTone,
} from "../content/kids-home";
import KidsIntro from "./kids-intro";
import styles from "../kids/kids.module.css";

type KidsHomeProps = {
  content: KidsHomeContent;
};

const toneClasses: Record<KidsResourceTone, string> = {
  sky: styles.toneSky,
  leaf: styles.toneLeaf,
  sun: styles.toneSun,
  coral: styles.toneCoral,
};

function KidsTileIcon({ name }: { name: KidsResourceIcon }) {
  return (
    <svg
      aria-hidden="true"
      className={styles.tileIcon}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.7"
      viewBox="0 0 32 32"
    >
      {name === "bible" && (
        <>
          <path d="M16 8c-4-3-8-3-12-1v19c4-2 8-2 12 1m0-19c4-3 8-3 12-1v19c-4-2-8-2-12 1V8Z" />
          <path d="M16 8v19m-8-14h3m-3 4h3m10-4h3m-3 4h3" />
        </>
      )}
      {name === "story" && (
        <>
          <path d="M9 5h12l4 4v18H9a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3Z" />
          <path d="M21 5v5h5M12 15h9m-9 4h9" />
        </>
      )}
      {name === "verse" && (
        <>
          <path d="m16 4 3.5 7 7.5 1.1-5.5 5.3 1.3 7.5-6.8-3.6-6.8 3.6 1.3-7.5L5 12.1l7.5-1.1L16 4Z" />
          <path d="M12 15h8" />
        </>
      )}
      {name === "school" && (
        <>
          <path d="m3 12 13-8 13 8M6 13v14h20V13M12 27V17h8v10" />
          <path d="M10 13h.01m12 0h.01" />
        </>
      )}
      {name === "game" && (
        <>
          <path d="M10 11h12a6 6 0 0 1 5.8 4.5l1.5 6a3.5 3.5 0 0 1-5.7 3.5L19 22H13l-4.6 3a3.5 3.5 0 0 1-5.7-3.5l1.5-6A6 6 0 0 1 10 11Z" />
          <path d="M10 15v6m-3-3h6m9-1h.01m3 3h.01" />
        </>
      )}
      {name === "activity" && (
        <>
          <path d="m16 4 2.2 7.8L26 14l-7.8 2.2L16 24l-2.2-7.8L6 14l7.8-2.2L16 4Z" />
          <path d="m25 22 .9 3.1L29 26l-3.1.9L25 30l-.9-3.1L21 26l3.1-.9L25 22Z" />
        </>
      )}
      {name === "color" && (
        <>
          <path d="M16 4a12 12 0 1 0 0 24h2.2a3 3 0 0 0 2.1-5.1 2.5 2.5 0 0 1 1.8-4.3H25A3 3 0 0 0 28 15 12 12 0 0 0 16 4Z" />
          <path d="M10 14h.01m4-5h.01m7 3h.01m-9 10h.01" />
        </>
      )}
      {name === "quiz" && (
        <>
          <circle cx="16" cy="16" r="12" />
          <path d="M12.5 12a3.7 3.7 0 1 1 6.5 2.4c-1.7 1.8-3 2-3 4.1m0 4h.01" />
        </>
      )}
      {name === "challenge" && (
        <>
          <path d="M16 4 19 11l7 1-5 5 1.2 7L16 21l-6.2 3 1.2-7-5-5 7-1 3-7Z" />
          <path d="m23 5 1 2 2 .3-1.5 1.4L25 11l-2-1-2 1 .4-2.3L20 7.3l2-.3 1-2Z" />
        </>
      )}
      {name === "music" && (
        <>
          <path d="M20 20V5l9-2v14" />
          <circle cx="16" cy="21" r="4" />
          <circle cx="25" cy="18" r="4" />
        </>
      )}
      {name === "prayer" && (
        <>
          <path d="M11 5v10l5 4 5-4V5m-10 4 5 5 5-5m-10 6-5 5a3 3 0 0 0 0 4l4 3m11-12 5 5a3 3 0 0 1 0 4l-4 3m-6-10v12" />
        </>
      )}
      {name === "watch" && (
        <>
          <rect x="3" y="6" width="26" height="20" rx="4" />
          <path d="m13 11 8 5-8 5V11Z" />
        </>
      )}
      {name === "journey" && (
        <>
          <circle cx="7" cy="24" r="3" />
          <circle cx="25" cy="8" r="3" />
          <path d="M10 24h5a5 5 0 0 0 5-5v-6a5 5 0 0 1 5-5" />
        </>
      )}
    </svg>
  );
}

function ResourceTile({ resource }: { resource: KidsResourcePreview }) {
  const className = `${styles.tile} ${toneClasses[resource.tone]}`;
  const contents = (
    <>
      <span className={styles.tileIconWrap}>
        <KidsTileIcon name={resource.icon} />
      </span>
      <h4 className={styles.tileTitle}>{resource.title}</h4>
      <span className={styles.tileDescription}>{resource.description}</span>
      {resource.resourceUrl && (
        <span className={styles.tileAction} aria-hidden="true">
          {resource.resourceUrl === "/bible" ? "Open Bible" : "Explore story"}
          <span> &rarr;</span>
        </span>
      )}
    </>
  );

  return (
    <li className={styles.tileItem}>
      {resource.resourceUrl ? (
        <Link
          className={`${className} ${styles.tileLink}`}
          href={resource.resourceUrl}
          aria-label={`${resource.title}: ${resource.description}`}
        >
          {contents}
        </Link>
      ) : (
        <article className={className}>{contents}</article>
      )}
    </li>
  );
}

export default function KidsHome({ content }: KidsHomeProps) {
  const visibleResources = content.resources
    .filter((resource) => resource.published)
    .sort((first, second) => first.displayOrder - second.displayOrder);

  return (
    <>
      <KidsIntro sceneImage={content.image} />
      <main className={styles.page}>
        <section className={styles.hero} aria-labelledby="kids-title">
          <div className={`page-shell ${styles.heroLayout}`}>
            <div className={styles.heroCopy}>
              <p className={styles.brandLabel}>LIGHTWAY KIDS</p>
              <p className={styles.heroGreeting}>{content.heroGreeting}</p>
              <h1 id="kids-title">{content.heroTitle}</h1>
              <p className={styles.heroPhrase}>{content.heroPhrase}</p>
              <p className={styles.heroDescription}>
                {content.heroSupportingText}
              </p>
              <div className={styles.heroActions}>
                <a className={styles.primaryAction} href="#kids-experience">
                  <span className={styles.primarySparkle} aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="m12 2 2.4 7.6L22 12l-7.6 2.4L12 22l-2.4-7.6L2 12l7.6-2.4L12 2Z" />
                    </svg>
                  </span>
                  <span>LET&apos;S EXPLORE!</span>
                </a>
                <a
                  className={styles.secondaryAction}
                  href="#family-connection"
                >
                  Parents &amp; Guardians
                </a>
              </div>
            </div>

            <div className={styles.heroWorld}>
              <Image
                className={styles.heroWorldImage}
                src={content.image}
                alt={content.imageAlt}
                fill
                priority
                sizes="(min-width: 52rem) 42vw, 100vw"
              />
              <span className={styles.worldSparkleOne} aria-hidden="true" />
              <span className={styles.worldSparkleTwo} aria-hidden="true" />
            </div>
          </div>
        </section>

        <section id="kids-experience" className={styles.experience} aria-labelledby="kids-experience-heading">
          <div className={`page-shell ${styles.contentShell}`}>
            <header className={styles.experienceIntro}>
              <p className={styles.eyebrow}>LIGHTWAY KIDS</p>
              <h2 id="kids-experience-heading">{content.experienceHeading}</h2>
              <p>{content.experienceIntroduction}</p>
            </header>

            <div className={styles.resourceGroups}>
              {content.resourceGroups.map((group) => {
                const groupResources = visibleResources
                  .filter((resource) => resource.group === group.id)
                  .sort((first, second) => first.displayOrder - second.displayOrder);

                return (
                  <section
                    key={group.id}
                    className={styles.resourceGroup}
                    aria-labelledby={`kids-group-${group.id}`}
                  >
                    <header className={styles.groupHeading}>
                      <h3 id={`kids-group-${group.id}`}>{group.title}</h3>
                      <p>{group.description}</p>
                    </header>
                    <ul className={styles.tileGrid}>
                      {groupResources.map((resource) => (
                        <ResourceTile key={resource.id} resource={resource} />
                      ))}
                    </ul>
                  </section>
                );
              })}
            </div>
          </div>
        </section>

        <section
          id="kids-story-feature"
          className={styles.storySection}
          aria-labelledby="kids-story-heading"
        >
          <div className={`page-shell ${styles.storyLayout}`}>
            <figure className={styles.storyArtwork}>
              <Image
                src={content.featuredStory.image}
                alt={content.featuredStory.imageAlt}
                fill
                sizes="(min-width: 52rem) 40vw, 100vw"
              />
            </figure>
            <div className={styles.storyCopy}>
              <p className={styles.eyebrow}>BIBLE STORIES</p>
              <h2 id="kids-story-heading">{content.featuredStory.title}</h2>
              <p>{content.featuredStory.description}</p>
              <p className={styles.storyNote}>{content.featuredStory.note}</p>
            </div>
          </div>
        </section>

        <section
          className={styles.growth}
          aria-labelledby="kids-stages-heading"
        >
          <div className={`page-shell ${styles.contentShell}`}>
            <header className={styles.sectionIntro}>
              <p className={styles.eyebrow}>ROOM TO GROW</p>
              <h2 id="kids-stages-heading">{content.ageHeading}</h2>
              <p>{content.ageIntroduction}</p>
            </header>
            <ol className={styles.growthStages}>
              {content.ageGroups.map((ageGroup) => (
                <li key={ageGroup.id}>
                  <span className={styles.growthStageMark} aria-hidden="true" />
                  <h3>{ageGroup.label}</h3>
                </li>
              ))}
            </ol>
            <p className={styles.growthNote}>
              These are experience stages, distinct from Adventurers,
              Pathfinders, and other ministry programs.
            </p>
          </div>
        </section>

        <section
          id="family-connection"
          className={styles.family}
          aria-labelledby="kids-family-heading"
        >
          <div className={`page-shell ${styles.familyLayout}`}>
            <div className={styles.familyCopy}>
              <p className={styles.eyebrow}>FOR THE WHOLE FAMILY</p>
              <h2 id="kids-family-heading">{content.familyHeading}</h2>
              <p>{content.familyDescription}</p>
              <p className={styles.familySafety}>
                Made with parent and guardian involvement in mind. No child
                accounts or personal information are collected here.
              </p>
            </div>
            <ul
              className={styles.familyPractices}
              aria-label="Ways to grow together"
            >
              {content.familyPractices.map((practice) => (
                <li key={practice}>{practice}</li>
              ))}
            </ul>
          </div>
        </section>

        <section
          className={styles.journey}
          aria-labelledby="kids-journey-heading"
        >
          <div className={`page-shell ${styles.contentShell}`}>
            <p className={styles.eyebrow}>A LIFELONG JOURNEY</p>
            <h2 id="kids-journey-heading">{content.journeyHeading}</h2>
            <p className={styles.journeySupporting}>
              {content.journeySupportingText}
            </p>
            <p className={styles.journeyDescription}>
              {content.journeyDescription}
            </p>
            <ol className={styles.journeyPath}>
              {content.journeyStages.map((stage, index) => (
                <li key={stage}>
                  <span className={styles.journeyNode}>{stage}</span>
                  {index < content.journeyStages.length - 1 && (
                    <span className={styles.journeyArrow} aria-hidden="true">
                      &rarr;
                    </span>
                  )}
                </li>
              ))}
            </ol>
            <p className={styles.journeyNote}>
              Each stage is distinct; this is a picture of possibility, not a
              required path.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}