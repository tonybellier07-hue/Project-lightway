"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import styles from "../kids/kids.module.css";
import { BethlehemStar, NativityScene } from "./kids-bible-scenes";

type KidsIntroProps = {
  sceneImage: string;
};

/** Voice cue — starts at 1400ms so the ~6s recording ends ≈7400ms,
    comfortably before the 7500ms exit completes. */
const introVoiceAtMs = 1400;
const introVoiceReducedMotionAtMs = 150; // the still card is up from t=0
const introVoiceVolume = 0.5; // warm, child-friendly level — never loud
const introVoiceFadeMs = 150;
const introVoiceReducedMotionFadeMs = 400; // gentler close under reduced motion
const introVoiceSrc = "/audio/lightway-kids-voice.mp3";

/**
 * Seven-and-a-half-second opening for the Lightway Kids world.
 * 0.0-1.0s the environment wakes up, 1.0-2.0s the SDA identity and
 * the Bethlehem star land, 1.4s the vocal cue starts (a ~6s
 * recording ending ≈7.4s), 1.9-3.5s the LIGHTWAY KIDS bubble, KIDS
 * and tagline arrive, 2.0-2.9s the Nativity rises, 5.5-6.2s the
 * adventure prompt, 7.0-7.5s the hand-off into the page. The beats
 * themselves are CSS; this file only owns the timings and the exits.
 *
 * The intro plays on every mount — there is deliberately no session or
 * storage memory — and every audio path is firewalled so a blocked
 * autoplay or a missing file can never affect the visuals.
 */
const introTotalMs = 7500;
const introExitMs = 500; // must match the CSS exit transitions
const introExitAtMs = introTotalMs - introExitMs; // 7000
const introReducedMotionHoldMs = 1800;

export default function KidsIntro({ sceneImage }: KidsIntroProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [isLeaving, setIsLeaving] = useState(false);
  const [runId, setRunId] = useState(0); // bumped only by bfcache restores
  const skipButton = useRef<HTMLButtonElement>(null);
  const dismissTimer = useRef<number | null>(null);
  // Audio-only state: these refs are never rendered, so audio failure
  // can never break the intro.
  const cueEl = useRef<HTMLAudioElement | null>(null);
  const cueTimer = useRef<number | null>(null);
  const cueRampTimer = useRef<number | null>(null);
  const cuePending = useRef(false);
  const cueSettled = useRef(false);

  const rampCue = useCallback(
    (el: HTMLAudioElement, to: number, ms: number, onDone?: () => void) => {
      if (cueRampTimer.current !== null) {
        window.clearInterval(cueRampTimer.current);
      }
      const from = el.volume;
      const steps = Math.max(1, Math.round(ms / 30));
      let step = 0;
      cueRampTimer.current = window.setInterval(() => {
        step += 1;
        el.volume = Math.min(1, from + (to - from) * (step / steps));
        if (step >= steps) {
          if (cueRampTimer.current !== null) {
            window.clearInterval(cueRampTimer.current);
            cueRampTimer.current = null;
          }
          onDone?.();
        }
      }, 30);
    },
    []
  );

  /** Fade out and pause the vocal cue. Never throws — it is decorative. */
  const stopCue = useCallback(
    (fadeMs: number) => {
      if (cueTimer.current !== null) {
        window.clearTimeout(cueTimer.current);
        cueTimer.current = null;
      }
      cuePending.current = false;
      cueSettled.current = true;
      const el = cueEl.current;
      if (!el) {
        return;
      }
      try {
        if (el.paused) {
          return;
        }
        rampCue(el, 0, fadeMs, () => {
          el.pause();
          el.currentTime = 0;
          el.volume = introVoiceVolume;
        });
      } catch {
        // Audio is decorative; any media failure is ignored.
      }
    },
    [rampCue]
  );

  /**
   * Begin the 500ms exit. Skip/Escape pass `stopAudioNow = true` and
   * always fade the cue at once. The natural 7000ms timer passes false
   * so an already-playing recording runs to its own end (1400ms + ~6s
   * ≈ 7400ms) instead of being cut mid-exit; the safety stop below
   * then fires at exit completion (~7500ms), where it is a no-op once
   * the cue has ended. Under reduced motion the 1800ms hold stops the
   * cue exactly as it always has — there is no room for a 6s file.
   */
  const dismissIntro = useCallback(
    (stopAudioNow: boolean) => {
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
      if (stopAudioNow || prefersReducedMotion) {
        stopCue(
          prefersReducedMotion
            ? introVoiceReducedMotionFadeMs
            : introVoiceFadeMs
        );
      }
      if (dismissTimer.current !== null) {
        window.clearTimeout(dismissTimer.current);
      }
      setIsLeaving(true);
      dismissTimer.current = window.setTimeout(() => {
        dismissTimer.current = null;
        setIsVisible(false);
        // Safety net: catches a late-started or blocked-autoplay cue
        // so no audio outlives the intro. Silent when the file is
        // missing or the recording has already ended.
        stopCue(
          prefersReducedMotion
            ? introVoiceReducedMotionFadeMs
            : introVoiceFadeMs
        );
      }, introExitMs);
    },
    [stopCue]
  );

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    /* --- "Lightway Kids!" vocal cue ------------------------------
       The element lives in a ref and is destroyed with the intro.
       Nothing here touches React state: a blocked autoplay retries
       only inside a real gesture, and a missing file ends in
       silence — neither can break the visual intro. */
    try {
      const el = new Audio();
      el.preload = "auto";
      el.volume = introVoiceVolume;
      el.addEventListener("error", () => {
        cuePending.current = false;
        cueSettled.current = true; // missing/undecodable file → silence
      });
      el.src = introVoiceSrc;
      cueEl.current = el;
    } catch {
      cueEl.current = null;
      cueSettled.current = true;
    }

    const startCue = () => {
      const el = cueEl.current;
      if (!el || cueSettled.current) {
        return;
      }
      try {
        el.currentTime = 0;
        el.volume = 0;
        el.play()
          .then(() => {
            cuePending.current = false;
            rampCue(el, introVoiceVolume, 120);
          })
          .catch((error: unknown) => {
            const name = error instanceof Error ? error.name : "";
            if (name === "NotAllowedError") {
              // Autoplay blocked: retry from the next real gesture.
              cuePending.current = true;
            } else {
              cueSettled.current = true;
            }
          });
      } catch {
        cueSettled.current = true;
      }
    };

    cueTimer.current = window.setTimeout(
      startCue,
      prefersReducedMotion ? introVoiceReducedMotionAtMs : introVoiceAtMs
    );

    // Some browsers only honour play() inside a gesture handler.
    const onCueGesture = () => {
      if (cuePending.current && !cueSettled.current) {
        startCue();
      }
    };
    document.addEventListener("pointerdown", onCueGesture, true);
    document.addEventListener("keydown", onCueGesture, true);

    /* --- replay guarantee ---------------------------------------
       A fresh mount already replays the intro; a bfcache restore is
       the one path React misses, so restart the whole timeline. */
    const onPageShow = (event: PageTransitionEvent) => {
      if (!event.persisted) {
        return;
      }
      if (dismissTimer.current !== null) {
        window.clearTimeout(dismissTimer.current);
        dismissTimer.current = null;
      }
      stopCue(introVoiceFadeMs);
      setIsLeaving(false);
      setIsVisible(true);
      setRunId((n) => n + 1); // re-run this effect: timers, focus, cue
    };
    window.addEventListener("pageshow", onPageShow);

    skipButton.current?.focus({ preventScroll: true });

    const introTimer = window.setTimeout(
      () => dismissIntro(false), // natural exit; cue handling in dismissIntro
      prefersReducedMotion ? introReducedMotionHoldMs : introExitAtMs
    );
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        dismissIntro(true);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.clearTimeout(introTimer);
      if (cueTimer.current !== null) {
        window.clearTimeout(cueTimer.current);
        cueTimer.current = null;
      }
      if (cueRampTimer.current !== null) {
        window.clearInterval(cueRampTimer.current);
        cueRampTimer.current = null;
      }
      if (dismissTimer.current !== null) {
        window.clearTimeout(dismissTimer.current);
        dismissTimer.current = null;
      }
      document.removeEventListener("pointerdown", onCueGesture, true);
      document.removeEventListener("keydown", onCueGesture, true);
      window.removeEventListener("pageshow", onPageShow);
      window.removeEventListener("keydown", onKeyDown);
      const el = cueEl.current;
      cueEl.current = null;
      cuePending.current = false;
      cueSettled.current = false;
      if (el) {
        try {
          el.pause();
          el.removeAttribute("src");
          el.load();
        } catch {
          // Ignore media teardown errors.
        }
      }
    };
  }, [dismissIntro, rampCue, runId, stopCue]);

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
        <BethlehemStar className={styles.introStar} />
        <NativityScene className={styles.introNativity} />
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
        onClick={() => dismissIntro(true)}
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
