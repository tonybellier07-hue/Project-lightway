"use client";

import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import type {
  KidsResourceIcon,
  KidsResourcePreview,
  KidsResourceTone,
} from "../content/kids-home";
import styles from "../kids/kids.module.css";

const toneClasses: Record<KidsResourceTone, string> = {
  sky: styles.toneSky,
  leaf: styles.toneLeaf,
  sun: styles.toneSun,
  coral: styles.toneCoral,
};

// Neutral, non-church placeholder reaction for resources that are not linked yet.
const COMING_SOON_MESSAGE = "Coming soon";

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

type KidsTileProps = {
  resource: KidsResourcePreview;
};

export default function KidsTile({ resource }: KidsTileProps) {
  const [burstAt, setBurstAt] = useState(0);
  const [soonAt, setSoonAt] = useState(0);

  // Clear the sparkle burst after it plays (event-driven, not per-frame).
  useEffect(() => {
    if (burstAt === 0) return;
    const timer = window.setTimeout(() => setBurstAt(0), 700);
    return () => window.clearTimeout(timer);
  }, [burstAt]);

  // Clear the "Coming soon" bubble after a short, readable pause.
  useEffect(() => {
    if (soonAt === 0) return;
    const timer = window.setTimeout(() => setSoonAt(0), 1600);
    return () => window.clearTimeout(timer);
  }, [soonAt]);

  const triggerBurst = useCallback(() => {
    setBurstAt((value) => value + 1);
  }, []);

  const handleComingSoon = useCallback(() => {
    setBurstAt((value) => value + 1);
    setSoonAt((value) => value + 1);
  }, []);

  const resourceUrl = resource.resourceUrl;
  const className = `${styles.tile} ${toneClasses[resource.tone]}${
    resourceUrl ? ` ${styles.tileLink}` : ""
  }`;
  const accessibleName = `${resource.title}: ${resource.description}`;

  const body = (
    <>
      <span className={styles.tileIconWrap}>
        <KidsTileIcon name={resource.icon} />
      </span>
      {resourceUrl ? (
        <h4 className={styles.tileTitle}>{resource.title}</h4>
      ) : (
        <span className={styles.tileTitle}>{resource.title}</span>
      )}
      <span className={styles.tileDescription}>{resource.description}</span>
      {resourceUrl ? (
        <span className={styles.tileAction} aria-hidden="true">
          {resourceUrl === "/bible" ? "Open Bible" : "Explore story"}
          <span> &rarr;</span>
        </span>
      ) : null}
    </>
  );

  const burst =
    burstAt > 0 ? (
      <span key={burstAt} className={styles.tileBurst} aria-hidden="true">
        <span className={styles.tileSpark} />
        <span className={styles.tileSpark} />
        <span className={styles.tileSpark} />
        <span className={styles.tileSpark} />
        <span className={styles.tileSpark} />
        <span className={styles.tileSpark} />
      </span>
    ) : null;

  return (
    <li className={styles.tileItem}>
      {resourceUrl ? (
        <Link
          className={className}
          href={resourceUrl}
          aria-label={accessibleName}
          onPointerDown={triggerBurst}
        >
          {body}
          {burst}
        </Link>
      ) : (
        <button
          className={className}
          type="button"
          aria-label={accessibleName}
          onClick={handleComingSoon}
        >
          {body}
          {burst}
          {soonAt > 0 ? (
            <span className={styles.tileSoon} role="status">
              {COMING_SOON_MESSAGE}
            </span>
          ) : null}
        </button>
      )}
    </li>
  );
}
