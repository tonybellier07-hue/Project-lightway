"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import styles from "../kids/kids.module.css";

type KidsIntroProps = {
  sceneImage: string;
};

const introSessionKey = "lightway-kids-intro-seen";

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
    setIsLeaving(true);
    if (dismissTimer.current !== null) {
      window.clearTimeout(dismissTimer.current);
    }
    dismissTimer.current = window.setTimeout(() => {
      dismissTimer.current = null;
      setIsVisible(false);
    }, 450);
  }, []);

  useEffect(() => {
    let hasSeenIntro = false;
    try {
      hasSeenIntro = window.sessionStorage.getItem(introSessionKey) === "true";
    } catch {
      hasSeenIntro = false;
    }

    if (
      hasSeenIntro ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      const frame = window.requestAnimationFrame(() => setIsVisible(false));
      return () => window.cancelAnimationFrame(frame);
    }

    skipButton.current?.focus({ preventScroll: true });

    const introTimer = window.setTimeout(dismissIntro, 2800);
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
      <Image
        className={styles.kidsIntroScene}
        src={sceneImage}
        alt=""
        fill
        priority
        sizes="100vw"
      />
      <span
        className={`${styles.introCloud} ${styles.introCloudLeft}`}
        aria-hidden="true"
      />
      <span
        className={`${styles.introCloud} ${styles.introCloudRight}`}
        aria-hidden="true"
      />
      <span
        className={`${styles.introSparkle} ${styles.introSparkleOne}`}
        aria-hidden="true"
      />
      <span
        className={`${styles.introSparkle} ${styles.introSparkleTwo}`}
        aria-hidden="true"
      />

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
        <span className={styles.introLightway}>LIGHTWAY</span>
        <span className={styles.introKids}>KIDS</span>
        <span className={styles.introTagline}>Growing with Jesus.</span>
      </div>
    </div>
  );
}
