import type { ReactNode } from "react";

/**
 * Decorative Bible-world artwork for the Lightway Kids intro: the
 * Bethlehem star and the Nativity (Mary, Baby Jesus in the manger,
 * a small lamb, the stable and distant Bethlehem).
 *
 * Like `kids-characters.tsx` these are original, non-doctrinal,
 * decorative illustrations: plain SVG with no client-side JavaScript,
 * rendered with `aria-hidden` so they are never announced, and coloured
 * from the Kids palette tokens plus the warm neutrals already used by
 * `public/images/lightway-kids-demo.svg`.
 *
 * Art direction: one continuous cinematic scene rather than clip-art.
 * Depth comes from atmosphere — desaturated distance with soft gradient
 * edges, a warm stable interior, and a single golden light source at the
 * manger that the whole composition is lit by.
 */

type BibleSceneProps = {
  /** Class hook from the intro CSS module (layout + choreography). */
  className?: string;
};

function SceneShell({
  viewBox,
  className,
  children,
}: BibleSceneProps & { viewBox: string; children: ReactNode }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={viewBox}
      fill="none"
      className={className}
      focusable="false"
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

/**
 * The Star of Bethlehem — a four-pointed star with a soft halo and a
 * faint beam of light spilling toward the world below. Revealed by the
 * `star-reveal` / `star-shimmer` choreography in the intro CSS module;
 * its secondary ray set slowly turns via `star-rays`.
 */
export function BethlehemStar({ className }: BibleSceneProps) {
  return (
    <SceneShell viewBox="0 0 120 120" className={className}>
      <defs>
        <radialGradient id="nbStarHalo">
          <stop offset="0" stopColor="#FFFBE8" stopOpacity="0.95" />
          <stop offset="0.55" stopColor="#FFE9A8" stopOpacity="0.45" />
          <stop offset="1" stopColor="#FFE9A8" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="nbStarBody" x1="0.3" y1="0" x2="0.7" y2="1">
          <stop offset="0" stopColor="#FFFDF2" />
          <stop offset="1" stopColor="#FFE05B" />
        </linearGradient>
        <linearGradient id="nbStarBeam" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#FFF6D0" stopOpacity="0.45" />
          <stop offset="1" stopColor="#FFF6D0" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Light spilling down toward Bethlehem. */}
      <path d="M53 72 L67 72 L79 120 L41 120 Z" fill="url(#nbStarBeam)" />

      {/* Soft halo. */}
      <circle cx="60" cy="60" r="57" fill="url(#nbStarHalo)" />

      {/* Slow-turning secondary rays. */}
      <g data-part="rays">
        <path
          d="M60 18 L66 54 L102 60 L66 66 L60 102 L54 66 L18 60 L54 54 Z"
          fill="#FFF7D6"
          opacity="0.55"
          transform="rotate(45 60 60)"
        />
      </g>

      {/* Main four-point star. */}
      <path
        d="M60 4 L69 51 L116 60 L69 69 L60 116 L51 69 L4 60 L51 51 Z"
        fill="url(#nbStarBody)"
        stroke="#FFFDF2"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <circle cx="60" cy="60" r="15" fill="#FFF7D6" opacity="0.5" />
      <circle cx="60" cy="60" r="8" fill="#FFFFFF" opacity="0.95" />
    </SceneShell>
  );
}

/**
 * The Nativity: Mary in adoration beside the manger with the swaddled
 * Baby Jesus, a small lamb nearby, all inside a timber stable above
 * distant Bethlehem. `viewBox` is 400x220; the figure baseline sits at
 * y=186, which lands on the intro's green horizon at every breakpoint.
 *
 * Drawn back-to-front: light → atmosphere → distance → earth → stable →
 * manger glow → shadows → manger + child → Mary → lamb → motes.
 */
export function NativityScene({ className }: BibleSceneProps) {
  return (
    <SceneShell viewBox="0 0 400 220" className={className}>
      <defs>
        {/* Single golden light source: everything is lit by it. */}
        <radialGradient id="nbGlow">
          <stop offset="0" stopColor="#FFFBD9" stopOpacity="0.95" />
          <stop offset="0.5" stopColor="#FFE9A8" stopOpacity="0.5" />
          <stop offset="1" stopColor="#FFE9A8" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="nbBeam" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#FFF8DE" stopOpacity="0.32" />
          <stop offset="1" stopColor="#FFF8DE" stopOpacity="0.03" />
        </linearGradient>
        <radialGradient id="nbHaze">
          <stop offset="0" stopColor="#FFF3D6" stopOpacity="0.55" />
          <stop offset="1" stopColor="#FFF3D6" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="nbHillBack" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#CFE0D6" stopOpacity="0.95" />
          <stop offset="1" stopColor="#CFE0D6" stopOpacity="0.05" />
        </linearGradient>
        <linearGradient id="nbHillFront" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#A9C8B8" stopOpacity="0.95" />
          <stop offset="1" stopColor="#A9C8B8" stopOpacity="0" />
        </linearGradient>
        <radialGradient id="nbEarth">
          <stop offset="0" stopColor="#34573F" stopOpacity="0.55" />
          <stop offset="1" stopColor="#34573F" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="nbPool">
          <stop offset="0" stopColor="#FFE9A8" stopOpacity="0.4" />
          <stop offset="1" stopColor="#FFE9A8" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="nbInterior" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#5C4436" />
          <stop offset="1" stopColor="#2E2620" />
        </linearGradient>
        <linearGradient id="nbRoof" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#E6C078" />
          <stop offset="1" stopColor="#C9973F" />
        </linearGradient>
        <radialGradient id="nbLantern">
          <stop offset="0" stopColor="#FFD9A0" stopOpacity="0.85" />
          <stop offset="1" stopColor="#FFD9A0" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="nbHalo">
          <stop offset="0" stopColor="#FFEDB0" stopOpacity="0.6" />
          <stop offset="1" stopColor="#FFEDB0" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="nbRobe" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#CFE9F9" />
          <stop offset="1" stopColor="#7FB8DE" />
        </linearGradient>
        <linearGradient id="nbWool" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#FFFDF6" />
          <stop offset="1" stopColor="#ECE0C9" />
        </linearGradient>
      </defs>

      {/* Atmospheric haze lifting off the valley. */}
      <ellipse cx="200" cy="100" rx="215" ry="60" fill="url(#nbHaze)" />

      {/* Far hills — fill only, soft-faded so they melt into the sky. */}
      <path
        d="M-10 96 C40 66 90 62 130 76 C170 90 210 58 260 64 C310 70 350 92 410 84 L410 132 L-10 132 Z"
        fill="url(#nbHillBack)"
      />
      <path
        d="M-10 110 C60 90 120 98 175 106 C230 114 300 88 410 102 L410 146 L-10 146 Z"
        fill="url(#nbHillFront)"
      />

      {/* Distant Bethlehem — flat rooftops, a watchtower, warm windows. */}
      <g fill="#9FB4BC" opacity="0.95">
        <path d="M18 76 H44 V98 H18 Z" />
        <path d="M46 68 H64 V98 H46 Z" />
        <path d="M66 80 H86 V98 H66 Z" />
        <path d="M68 60 H80 V80 H68 Z" />
        <path d="M320 72 H342 V98 H320 Z" />
        <path d="M344 78 H364 V98 H344 Z" />
        <path d="M366 70 H382 V98 H366 Z" />
        <path d="M346 62 H358 V78 H346 Z" />
      </g>
      <g fill="#FFD9A0" opacity="0.9">
        <rect x="26" y="84" width="4" height="5" rx="1" />
        <rect x="53" y="76" width="4" height="5" rx="1" />
        <rect x="72" y="86" width="4" height="5" rx="1" />
        <rect x="328" y="80" width="4" height="5" rx="1" />
        <rect x="351" y="86" width="4" height="5" rx="1" />
        <rect x="371" y="78" width="4" height="5" rx="1" />
      </g>

      {/* Palms framing the town. */}
      <g stroke="#6F8F6A" strokeWidth="3" strokeLinecap="round" fill="none">
        <path d="M12 100 C10 88 12 78 16 70" />
        <path d="M16 70 C10 64 6 64 2 66 M16 70 C12 62 12 58 13 54 M16 70 C22 62 26 62 30 64 M16 70 C24 68 28 70 31 74" />
        <path d="M388 102 C386 92 387 84 390 78" />
        <path d="M390 78 C385 73 381 73 378 75 M390 78 C387 71 387 68 388 64 M390 78 C395 72 399 72 402 74" />
      </g>

      {/* The near earth the scene stands on; soft-edged so it melts
          into the stage's green horizon instead of pasting on top. */}
      <ellipse cx="200" cy="180" rx="198" ry="52" fill="url(#nbEarth)" />

      {/* Warm pool of light on the ground in front of the manger. */}
      <ellipse cx="200" cy="184" rx="120" ry="26" fill="url(#nbPool)" />

      {/* Stable: a dark arched back wall so the lit figures can pop. */}
      <path
        d="M104 184 L104 118 Q104 84 200 84 Q296 84 296 118 L296 184 Z"
        fill="url(#nbInterior)"
      />

      {/* Timber posts. */}
      <rect x="92" y="92" width="14" height="92" fill="#8A5F47" />
      <rect x="92" y="92" width="4" height="92" fill="#6F4A36" opacity="0.6" />
      <rect x="294" y="92" width="14" height="92" fill="#8A5F47" />
      <rect x="304" y="92" width="4" height="92" fill="#6F4A36" opacity="0.6" />

      {/* Thatched gable roof with a few straw strands. */}
      <path d="M56 88 L200 12 L344 88 Q200 66 56 88 Z" fill="url(#nbRoof)" />
      <g
        stroke="#B0843A"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.45"
        fill="none"
      >
        <path d="M74 84 L194 24" />
        <path d="M92 86 L194 40" />
        <path d="M326 84 L206 24" />
        <path d="M308 86 L206 40" />
      </g>
      <path
        d="M56 88 Q200 66 344 88"
        stroke="#9A7038"
        strokeWidth="2.5"
        opacity="0.6"
        fill="none"
      />

      {/* Crossbeam with pegs. */}
      <rect x="86" y="84" width="228" height="12" rx="4" fill="#7A5340" />
      <g fill="#5D3E2D">
        <circle cx="102" cy="90" r="2.5" />
        <circle cx="200" cy="90" r="2.5" />
        <circle cx="298" cy="90" r="2.5" />
      </g>

      {/* Hanging lantern — a second, smaller warm light. */}
      <path d="M264 96 L264 110" stroke="#5D3E2D" strokeWidth="2" />
      <circle cx="264" cy="120" r="17" fill="url(#nbLantern)" />
      <rect x="254" y="106" width="20" height="5" rx="2" fill="#6F4A36" />
      <path
        d="M257 111 L271 111 L268 126 L260 126 Z"
        fill="#FFD9A0"
        stroke="#6F4A36"
        strokeWidth="2"
        strokeLinejoin="round"
      />

      {/* Straw scattered over the floor. */}
      <g stroke="#D9A94F" strokeWidth="2.6" strokeLinecap="round" fill="none">
        <path d="M118 180 q14 -5 28 -2" />
        <path d="M160 184 q16 -6 32 -2" />
        <path d="M214 182 q14 -5 30 -1" />
        <path d="M256 186 q12 -4 24 -1" />
      </g>

      {/* The manger's light, in front of the stable interior. */}
      <ellipse
        data-part="glow"
        cx="199"
        cy="132"
        rx="40"
        ry="26"
        fill="url(#nbGlow)"
        opacity="0.8"
      />

      {/* Grounding shadows. */}
      <g fill="#163A30" opacity="0.28">
        <ellipse cx="200" cy="189" rx="46" ry="7" />
        <ellipse cx="150" cy="190" rx="40" ry="7" />
        <ellipse cx="296" cy="190" rx="34" ry="6" />
      </g>

      {/* Manger: crossed timbers, crib, straw. */}
      <g stroke="#8A5F47" strokeWidth="8" strokeLinecap="round">
        <path d="M176 186 L212 140" />
        <path d="M224 186 L188 140" />
      </g>
      <path
        d="M184 166 L216 166"
        stroke="#6F4A36"
        strokeWidth="5"
        strokeLinecap="round"
      />
      <path d="M170 144 L230 144 L224 168 L176 168 Z" fill="#8A5F47" />
      <g stroke="#6F4A36" strokeWidth="2" opacity="0.7">
        <path d="M186 146 L183 166" />
        <path d="M200 146 L200 166" />
        <path d="M214 146 L217 166" />
      </g>
      <rect x="164" y="134" width="72" height="10" rx="5" fill="#A0714F" />

      {/* Straw spilling over the rail. */}
      <g stroke="#F0C77D" strokeWidth="3" strokeLinecap="round" fill="none">
        <path d="M168 136 q10 -6 20 -2" />
        <path d="M196 132 q12 -5 24 0" />
        <path d="M220 136 q8 -4 14 -1" />
        <path d="M172 140 l-5 9" />
        <path d="M228 140 l5 8" />
      </g>

      {/* Baby Jesus, swaddled, with a soft halo. */}
      <g>
        <circle
          cx="186"
          cy="128"
          r="14"
          fill="none"
          stroke="#FFEDB0"
          strokeWidth="1.6"
          opacity="0.9"
        />
        <path
          d="M186 138 C182 128 186 120 196 118 L214 119 C224 121 226 132 220 139 C214 145 192 146 186 138 Z"
          fill="#FDF7DF"
        />
        <g stroke="#EADFC4" strokeWidth="2" strokeLinecap="round" fill="none">
          <path d="M194 119 q3 10 -2 20" />
          <path d="M204 118 q3 12 -1 22" />
          <path d="M213 120 q3 10 -2 18" />
        </g>
        <circle cx="186" cy="128" r="10" fill="#F7D3B0" />
        <path
          d="M177 124 C178 117 185 113 191 117 C186 117 180 120 178 126 Z"
          fill="#6B4F3A"
        />
        <g stroke="#4A3A34" strokeWidth="1.8" strokeLinecap="round" fill="none">
          <path d="M180 127 q3 3 6 0" />
          <path d="M188 127 q3 3 6 0" />
          <path d="M184 134 q3 2 6 0" strokeWidth="1.5" />
        </g>
        <g fill="#FF8DA1" opacity="0.55">
          <circle cx="180" cy="132" r="2.4" />
          <circle cx="192" cy="132" r="2.4" />
        </g>
      </g>

      {/* Mary, kneeling in adoration — head gently inclined, eyes
          lowered, hands resting at the manger's edge. */}
      <g>
        {/* Warm light behind her head. */}
        <circle cx="150" cy="90" r="30" fill="url(#nbHalo)" />

        {/* Mantle and robe. */}
        <path
          d="M152 94 C136 104 124 132 120 156 C117 178 128 189 148 189 L178 189 C186 181 184 168 176 158 C166 144 160 122 158 100 Z"
          fill="url(#nbRobe)"
        />
        {/* Inner garment showing through the robe's opening. */}
        <path
          d="M156 104 C162 124 168 146 172 160 C166 172 154 178 144 176 C152 158 155 130 156 104 Z"
          fill="#FDF7DF"
        />
        {/* Sleeve reaching toward the child. */}
        <path
          d="M156 118 C168 120 178 128 186 136 L180 146 C172 138 164 132 154 130 Z"
          fill="#B9DFF5"
        />

        <g transform="rotate(10 152 96)">
          {/* Hooded mantle over her head. */}
          <path
            d="M134 84 C132 64 148 52 163 58 C176 64 180 82 174 98 C170 110 164 116 160 118 C164 134 160 146 152 152 L132 148 C126 130 127 104 130 90 Z"
            fill="url(#nbRobe)"
          />
          {/* Face. */}
          <path
            d="M146 72 C158 70 166 78 166 90 C166 102 158 110 148 109 C139 108 134 100 134 90 C134 79 139 73 146 72 Z"
            fill="#F7D3B0"
          />
          {/* Cream lining along the hood. */}
          <path
            d="M138 76 C146 64 160 64 166 76"
            stroke="#FDF7DF"
            strokeWidth="3"
            strokeLinecap="round"
            fill="none"
          />
          {/* Serene, lowered features. */}
          <g
            stroke="#4A3A34"
            strokeWidth="1.8"
            strokeLinecap="round"
            fill="none"
          >
            <path d="M139 88 q3.5 3.5 7 0" />
            <path d="M149 88 q3.5 3.5 7 0" />
            <path d="M143 97 q5 3.5 10 0" strokeWidth="1.6" />
          </g>
          <g fill="#FF8DA1" opacity="0.5">
            <circle cx="138" cy="95" r="3" />
            <circle cx="158" cy="95" r="3" />
          </g>
        </g>

        {/* Robe folds. */}
        <g
          stroke="#6FA8D4"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
          opacity="0.7"
        >
          <path d="M134 170 C144 164 156 162 168 164" />
          <path d="M130 178 C142 172 158 170 172 172" />
        </g>

        {/* Hands resting on the crib's edge. */}
        <path
          d="M172 134 C180 133 186 137 185 143 C184 149 177 150 172 146 Z"
          fill="#F7D3B0"
          stroke="#163A30"
          strokeWidth="1.6"
          strokeOpacity="0.55"
          strokeLinejoin="round"
        />
      </g>

      {/* A small lamb, shaded rather than heavily outlined so it
          belongs to the scene instead of reading as a sticker. */}
      <g>
        {/* Legs. */}
        <g stroke="#C2AB94" strokeWidth="4.5" strokeLinecap="round">
          <path d="M280 166 L278 186" />
          <path d="M291 167 L291 187" />
          <path d="M307 166 L309 186" />
          <path d="M315 163 L318 183" />
        </g>
        <g stroke="#8A7566" strokeWidth="4.5" strokeLinecap="round">
          <path d="M278 185 L278 188" />
          <path d="M291 186 L291 189" />
          <path d="M309 185 L309 188" />
          <path d="M318 182 L318 185" />
        </g>

        {/* Tail. */}
        <path
          d="M322 148 C328 146 331 152 327 156 C324 159 320 157 320 153 Z"
          fill="#FDF7DF"
        />

        {/* Woolly body. */}
        <path
          d="M266 152 C262 145 267 138 274 140 C275 133 284 130 290 135 C295 129 305 130 308 137 C315 135 321 141 319 148 C325 151 325 160 318 163 C315 170 306 172 299 170 L278 170 C269 169 264 161 266 152 Z"
          fill="url(#nbWool)"
          stroke="#5B4A3C"
          strokeOpacity="0.45"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <g
          stroke="#E3D5BD"
          strokeWidth="1.8"
          strokeLinecap="round"
          fill="none"
          opacity="0.85"
        >
          <path d="M277 147 q4 4 0 8" />
          <path d="M292 141 q4 4 0 8" />
          <path d="M307 147 q4 4 0 8" />
        </g>

        {/* Ear, then head turned toward the manger. */}
        <path
          d="M256 150 C250 147 244 148 243 153 C242 158 247 161 252 160 Z"
          fill="#DED0BB"
        />
        <path
          d="M270 146 C262 144 254 148 252 156 C250 164 256 170 264 169 C272 168 275 160 274 153 Z"
          fill="#ECE1D0"
          stroke="#5B4A3C"
          strokeOpacity="0.45"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        {/* Wool cap. */}
        <path
          d="M254 148 C256 142 264 140 269 144 C272 147 272 151 271 153 C266 149 259 147 254 148 Z"
          fill="#FDF7DF"
        />
        {/* Muzzle, eye, mouth. */}
        <path
          d="M252 160 C248 160 246 163 247 166 C248 169 252 170 255 168 Z"
          fill="#DED0BB"
        />
        <ellipse cx="261" cy="155" rx="2" ry="2.4" fill="#4A3A34" />
        <circle cx="260.3" cy="154.2" r="0.8" fill="#FFFFFF" />
        <ellipse cx="249" cy="163.5" rx="1.6" ry="1.2" fill="#8A7566" />
        <path
          d="M248 167 q3 1.5 5 -1"
          stroke="#8A7566"
          strokeWidth="1.2"
          strokeLinecap="round"
          fill="none"
        />
      </g>

      {/* The star's beam reaching down to the manger. */}
      <path d="M188 -6 L212 -6 L250 176 L150 176 Z" fill="url(#nbBeam)" />

      {/* A few warm dust motes drifting in the light. */}
      <g fill="#FFE9A8">
        <circle cx="120" cy="120" r="2" opacity="0.55" />
        <circle cx="250" cy="96" r="1.6" opacity="0.5" />
        <circle cx="170" cy="66" r="1.8" opacity="0.45" />
        <circle cx="330" cy="130" r="2.2" opacity="0.4" />
      </g>
    </SceneShell>
  );
}