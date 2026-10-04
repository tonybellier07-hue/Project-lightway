import type { ReactNode } from "react";

/**
 * Original, friendly cartoon characters for the Lightway Kids world.
 *
 * These are decorative presentation elements only: they depict invented,
 * non-doctrinal characters and must not be treated as church content. They
 * carry no personal data, accounts, or forms. Each one is a plain SVG (no
 * client-side JavaScript) so it can be rendered from Server Components,
 * matching the existing Lightway Kids component architecture.
 *
 * Colors intentionally match the Kids palette tokens declared in
 * `app/kids/kids.module.css`.
 */

export type KidsCharacterProps = {
  /** Rendered width and height in pixels. Defaults to 120. */
  size?: number;
  /** Optional accessible name. When omitted, the character is decorative. */
  label?: string;
  /** Optional class hook (e.g. for idle animation added in a later phase). */
  className?: string;
};

type CharacterShellProps = KidsCharacterProps & { children: ReactNode };

function CharacterShell({
  size = 120,
  label,
  className,
  children,
}: CharacterShellProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 120 120"
      width={size}
      height={size}
      fill="none"
      className={className}
      focusable="false"
      role={label ? "img" : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
    >
      {label ? <title>{label}</title> : null}
      {children}
    </svg>
  );
}

/**
 * Lumi — the primary Kids mascot. A cheerful little light-buddy (a rounded
 * star) that represents warmth and welcome. Invented character, not church
 * content.
 */
export function LumiMascot(props: KidsCharacterProps) {
  return (
    <CharacterShell {...props}>
      {/* arms */}
      <path
        d="M30 84 18 94M90 84 102 94"
        stroke="#163a30"
        strokeWidth={5}
        strokeLinecap="round"
      />
      {/* star body */}
      <polygon
        points="60,14 72.9,42.2 103.8,45.8 80.9,66.8 87,97.2 60,82 33,97.2 39.1,66.8 16.2,45.8 47.1,42.2"
        fill="#ffe05b"
        stroke="#163a30"
        strokeWidth={5}
        strokeLinejoin="round"
      />
      {/* cheeks */}
      <circle cx={42} cy={65} r={4} fill="#ff8da1" opacity={0.75} />
      <circle cx={78} cy={65} r={4} fill="#ff8da1" opacity={0.75} />
      {/* eyes */}
      <circle cx={50} cy={56} r={5.5} fill="#163a30" />
      <circle cx={70} cy={56} r={5.5} fill="#163a30" />
      <circle cx={48} cy={53.5} r={1.8} fill="#fff" />
      <circle cx={68} cy={53.5} r={1.8} fill="#fff" />
      {/* smile */}
      <path
        d="M53 66Q60 73 67 66"
        stroke="#163a30"
        strokeWidth={3.5}
        strokeLinecap="round"
      />
      {/* sparkle */}
      <path
        d="M100 13 103.5 19.5 110 23 103.5 26.5 100 33 96.5 26.5 90 23 96.5 19.5Z"
        fill="#ff9f43"
      />
    </CharacterShell>
  );
}

/**
 * Bird Friend — a small friendly bird companion used to decorate sections.
 * Invented character, not church content.
 */
export function BirdFriend(props: KidsCharacterProps) {
  return (
    <CharacterShell {...props}>
      {/* head tuft */}
      <path
        d="M56 36C56 28 60 24 66 22"
        stroke="#163a30"
        strokeWidth={5}
        strokeLinecap="round"
      />
      {/* feet */}
      <path
        d="M52 92V100M68 92V100"
        stroke="#ff9f43"
        strokeWidth={5}
        strokeLinecap="round"
      />
      {/* body */}
      <ellipse
        cx={60}
        cy={64}
        rx={32}
        ry={30}
        fill="#73d7ff"
        stroke="#163a30"
        strokeWidth={5}
      />
      {/* belly */}
      <ellipse cx={60} cy={74} rx={18} ry={16} fill="#fff" opacity={0.75} />
      {/* wing */}
      <ellipse
        cx={34}
        cy={66}
        rx={9}
        ry={13}
        fill="#b9f2ff"
        stroke="#163a30"
        strokeWidth={4}
        transform="rotate(-18 34 66)"
      />
      {/* beak */}
      <path
        d="M60 60 70 66 50 66Z"
        fill="#ff9f43"
        stroke="#163a30"
        strokeWidth={4}
        strokeLinejoin="round"
      />
      {/* cheeks */}
      <circle cx={38} cy={62} r={4} fill="#ff8da1" opacity={0.7} />
      <circle cx={82} cy={62} r={4} fill="#ff8da1" opacity={0.7} />
      {/* eyes */}
      <circle cx={48} cy={50} r={5} fill="#163a30" />
      <circle cx={72} cy={50} r={5} fill="#163a30" />
      <circle cx={46} cy={47.5} r={1.7} fill="#fff" />
      <circle cx={70} cy={47.5} r={1.7} fill="#fff" />
    </CharacterShell>
  );
}

/**
 * Sprout Friend — a little growing sprout character that echoes the "growing
 * with Jesus" theme without depicting any real content. Invented character,
 * not church content.
 */
export function SproutFriend(props: KidsCharacterProps) {
  return (
    <CharacterShell {...props}>
      {/* ground */}
      <ellipse cx={60} cy={104} rx={30} ry={9} fill="#c7dfc8" />
      {/* stem */}
      <path
        d="M60 100V74"
        stroke="#527a5f"
        strokeWidth={6}
        strokeLinecap="round"
      />
      {/* side leaves */}
      <path
        d="M40 76C33 68 35 57 44 50 50 59 48 69 40 76Z"
        fill="#76d98b"
        stroke="#163a30"
        strokeWidth={4}
        strokeLinejoin="round"
      />
      <path
        d="M80 76C87 68 85 57 76 50 70 59 72 69 80 76Z"
        fill="#76d98b"
        stroke="#163a30"
        strokeWidth={4}
        strokeLinejoin="round"
      />
      {/* head bud */}
      <circle
        cx={60}
        cy={58}
        r={22}
        fill="#76d98b"
        stroke="#163a30"
        strokeWidth={5}
      />
      {/* top leaf */}
      <path
        d="M60 40C60 30 66 24 76 22 76 32 70 38 60 40Z"
        fill="#76d98b"
        stroke="#163a30"
        strokeWidth={4}
        strokeLinejoin="round"
      />
      {/* cheeks */}
      <circle cx={47} cy={64} r={3.5} fill="#ff8da1" opacity={0.7} />
      <circle cx={73} cy={64} r={3.5} fill="#ff8da1" opacity={0.7} />
      {/* eyes */}
      <circle cx={52} cy={56} r={5} fill="#163a30" />
      <circle cx={68} cy={56} r={5} fill="#163a30" />
      <circle cx={50} cy={53.5} r={1.7} fill="#fff" />
      <circle cx={66} cy={53.5} r={1.7} fill="#fff" />
      {/* smile */}
      <path
        d="M54 66Q60 72 66 66"
        stroke="#163a30"
        strokeWidth={3.5}
        strokeLinecap="round"
      />
    </CharacterShell>
  );
}
