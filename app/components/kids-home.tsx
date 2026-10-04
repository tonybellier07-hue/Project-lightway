import Image from "next/image";
import type { KidsHomeContent } from "../content/kids-home";
import KidsIntro from "./kids-intro";
import KidsTile from "./kids-tile";
import { BirdFriend, LumiMascot, SproutFriend } from "./kids-characters";
import styles from "../kids/kids.module.css";

type KidsHomeProps = {
  content: KidsHomeContent;
};

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

            {/* Decorative Kids world scene. The accessible hero copy above is
                the single source of meaning for this section. */}
            <div className={styles.heroWorld} aria-hidden="true">
              <span className={styles.worldSun} />
              <span className={`${styles.worldCloud} ${styles.worldCloudOne}`} />
              <span className={`${styles.worldCloud} ${styles.worldCloudTwo}`} />
              <span className={`${styles.worldOrb} ${styles.worldOrbOne}`} />
              <span className={`${styles.worldOrb} ${styles.worldOrbTwo}`} />
              <span className={`${styles.worldHill} ${styles.worldHillBack}`} />
              <span className={`${styles.worldHill} ${styles.worldHillFront}`} />
              <span className={styles.worldSparkleOne} />
              <span className={styles.worldSparkleTwo} />

              <div className={styles.worldBubble}>
                <span className={styles.worldBubbleKicker}>LIGHTWAY</span>
                <span className={styles.worldBubbleTitle}>KIDS</span>
                <span
                  className={`${styles.worldParticle} ${styles.worldParticleOne}`}
                />
                <span
                  className={`${styles.worldParticle} ${styles.worldParticleTwo}`}
                />
                <span
                  className={`${styles.worldParticle} ${styles.worldParticleThree}`}
                />
              </div>

              <span className={styles.worldLumi}>
                <LumiMascot size={128} />
              </span>
              <span className={styles.worldBird}>
                <BirdFriend size={96} />
              </span>
              <span className={styles.worldSprout}>
                <SproutFriend size={112} />
              </span>
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
                        <KidsTile key={resource.id} resource={resource} />
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