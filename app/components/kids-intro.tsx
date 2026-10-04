"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import styles from "../kids/kids.module.css";

type KidsIntroProps = {
  sceneImage: string;
};

const introSessionKey = "lightway-kids-intro-seen";

/**
 * Five-second opening for the Lightway Kids world.
 * 0.0-1.0s the environment wakes up, 1.0-2.0s the SDA identity
 * lands, 2.0-3.5s the LIGHTWAY KIDS bubble arrives, 3.5-4.5s the
 * adventure prompt, 4.5-5.0s the hand-off into the page. The beats
 * themselves are CSS; this file only owns the timings and the exits.
 */
const introTotalMs = 5000;
const introExitMs = 500; // must match the CSS exit transitions
const introExitAtMs = introTotalMs - introExitMs; // 4500
const introReducedMotionHoldMs = 1800;

export default function KidsIntro({ sceneImage }: KidsIntroProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [isLeaving, setIsLeaving] = useState(false);
  const skipButton = useRef<HTMLButtonElement>(null);
  const dismissTimer = useRef<number | null>(null);

  const dismissIntro = useCallback(() => {
    try {
      window.sessionStorage.setItem(introSessionKey, "true");
    } catch {
      // The intro still works when browser storage is unavailable.
    }
    if (dismissTimer.current !== null) {
      window.clearTimeout(dismissTimer.current);
    }
    setIsLeaving(true);
    dismissTimer.current = window.setTimeout(() => {
      dismissTimer.current = null;
      setIsVisible(false);
    }, introExitMs);
  }, []);

  useEffect(() => {
    let hasSeenIntro = false;
    try {
      hasSeenIntro = window.sessionStorage.getItem(introSessionKey) === "true";
    } catch {
      hasSeenIntro = false;
    }

    if (hasSeenIntro) {
      const frame = window.requestAnimationFrame(() => setIsVisible(false));
      return () => window.cancelAnimationFrame(frame);
    }

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    skipButton.current?.focus({ preventScroll: true });

    const introTimer = window.setTimeout(
      dismissIntro,
      prefersReducedMotion ? introReducedMotionHoldMs : introExitAtMs
    );
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        dismissIntro();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.clearTimeout(introTimer);
      if (dismissTimer.current !== null) {
        window.clearTimeout(dismissTimer.current);
      }
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [dismissIntro]);

  if (!isVisible) {
    return null;
  }

  return (
    <div
      className={styles.kidsIntro}
      data-leaving={isLeaving}
      role="region"
      aria-label="Lightway Kids welcome"
      aria-live="polite"
    >
      <div className={styles.introStage} aria-hidden="true">
        <Image
          className={styles.kidsIntroScene}
          src={sceneImage}
          alt=""
          fill
          priority
          sizes="100vw"
        />
        <span className={`${styles.introCloud} ${styles.introCloudLeft}`} />
        <span className={`${styles.introCloud} ${styles.introCloudRight}`} />
        <span className={styles.introSun} />
        <span className={`${styles.introOrb} ${styles.introOrbOne}`} />
        <span className={`${styles.introOrb} ${styles.introOrbTwo}`} />
        <span className={`${styles.introSparkle} ${styles.introSparkleOne}`} />
        <span className={`${styles.introSparkle} ${styles.introSparkleTwo}`} />
        <span
          className={`${styles.introSparkle} ${styles.introSparkleThree}`}
        />
      </div>

      <button
        ref={skipButton}
        className={styles.skipIntro}
        type="button"
        onClick={dismissIntro}
      >
        Skip intro
      </button>

      <div className={styles.introIdentity}>
        <Image
          src="/branding/sda-logo.svg"
          alt=""
          width={42}
          height={42}
          priority
          className={styles.introSdaMark}
        />
        <span className={styles.introBubble}>
          <span className={styles.introLightway}>LIGHTWAY</span>
          <span className={styles.introKids}>KIDS</span>
          <span
            className={`${styles.introParticle} ${styles.introParticleOne}`}
          />
          <span
            className={`${styles.introParticle} ${styles.introParticleTwo}`}
          />
          <span
            className={`${styles.introParticle} ${styles.introParticleThree}`}
          />
        </span>
        <span className={styles.introTagline}>Growing with Jesus.</span>
        <span className={styles.introPrompt}>Ready for an adventure?</span>
      </div>
    </div>
  );
}
