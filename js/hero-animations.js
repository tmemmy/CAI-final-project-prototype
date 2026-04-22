// js/hero-animations.js — Animated SVG hero illustrations for tutorials
// Style: soft 3D learning studio (brand guide), rounded geometry,
// pastel warmth, matte satin finish, kawaii character

export function renderHeroAnimation(type) {
  if (type === 'stack-pringles') return stackPringlesHero();
  if (type === 'snake-ouroboros') return snakeOuroborosHero();
  return '';
}

function snakeOuroborosHero() {
  return `
  <div class="hero-animation snake-hero" aria-hidden="true">
    <svg viewBox="0 0 300 180" width="100%" style="max-width:300px;display:block;margin:0 auto;">
      <defs>
        <filter id="sn-shadow"><feDropShadow dx="1" dy="2" stdDeviation="2" flood-opacity="0.10"/></filter>
        <linearGradient id="sn-body" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#8CB89B"/>
          <stop offset="100%" stop-color="#6BA07A"/>
        </linearGradient>
        <linearGradient id="sn-belly" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#C8E6C9"/>
          <stop offset="100%" stop-color="#A8D5A0"/>
        </linearGradient>
      </defs>

      <!-- Ouroboros circle path (the snake's body in a loop) -->
      <circle cx="150" cy="90" r="55" fill="none" stroke="url(#sn-body)" stroke-width="18"
        stroke-linecap="round" filter="url(#sn-shadow)"
        style="animation: snakeEat 6s ease-in-out infinite;"/>

      <!-- Belly pattern (lighter inner ring) -->
      <circle cx="150" cy="90" r="55" fill="none" stroke="url(#sn-belly)" stroke-width="8"
        stroke-linecap="round"
        style="animation: snakeEat 6s ease-in-out infinite;"/>

      <!-- Scale pattern (dashes on the body) -->
      <circle cx="150" cy="90" r="55" fill="none" stroke="#6BA07A" stroke-width="1"
        stroke-dasharray="4 8" opacity="0.3"
        style="animation: snakeSlither 2s linear infinite;"/>

      <!-- Head (at the top of the circle, eating its tail) -->
      <g transform="translate(150, 35)">
        <!-- Head shape -->
        <ellipse cx="0" cy="0" rx="16" ry="12" fill="#7AAF88" stroke="#5A9068" stroke-width="1"/>
        <ellipse cx="0" cy="2" rx="12" ry="8" fill="#8CB89B"/>

        <!-- Eyes -->
        <circle cx="-6" cy="-3" r="3.5" fill="white"/>
        <circle cx="6" cy="-3" r="3.5" fill="white"/>
        <circle cx="-5" cy="-3" r="2" fill="#2A3040"
          style="animation: snakeEyeBlink 4s ease-in-out infinite;"/>
        <circle cx="7" cy="-3" r="2" fill="#2A3040"
          style="animation: snakeEyeBlink 4s ease-in-out infinite; animation-delay: 0.2s;"/>

        <!-- Pupils (tiny highlights) -->
        <circle cx="-4.5" cy="-3.5" r="0.7" fill="white" opacity="0.8"/>
        <circle cx="7.5" cy="-3.5" r="0.7" fill="white" opacity="0.8"/>

        <!-- Nostrils -->
        <circle cx="-3" cy="3" r="1" fill="#5A9068" opacity="0.5"/>
        <circle cx="3" cy="3" r="1" fill="#5A9068" opacity="0.5"/>

        <!-- Tongue -->
        <g style="animation: snakeTongue 3s ease-in-out infinite; transform-origin: 0 7px;">
          <path d="M 0 7 L 0 14 M 0 14 L -3 17 M 0 14 L 3 17"
            stroke="#C4889B" stroke-width="1.5" fill="none" stroke-linecap="round"/>
        </g>

        <!-- Cute blush -->
        <ellipse cx="-10" cy="2" rx="4" ry="2.5" fill="#E8A3A8" opacity="0.4"/>
        <ellipse cx="10" cy="2" rx="4" ry="2.5" fill="#E8A3A8" opacity="0.4"/>
      </g>

      <!-- Tail tip (at the bottom, being "eaten") -->
      <g transform="translate(150, 145)">
        <path d="M -3 0 L 0 8 L 3 0" fill="#7AAF88" opacity="0.7"/>
      </g>

      <!-- Arrows showing reversal concept -->
      <g opacity="0.4">
        <path d="M 90 60 Q 80 50 85 40" stroke="#A098C4" stroke-width="1.5" fill="none"
          marker-end="url(#arrowhead)" stroke-dasharray="3 3"/>
        <path d="M 210 60 Q 220 50 215 40" stroke="#A098C4" stroke-width="1.5" fill="none"
          marker-end="url(#arrowhead)" stroke-dasharray="3 3"/>
        <defs>
          <marker id="sn-arr" markerWidth="6" markerHeight="4" refX="6" refY="2" orient="auto">
            <path d="M 0 0 L 6 2 L 0 4 Z" fill="#A098C4"/>
          </marker>
        </defs>
      </g>

      <!-- Label -->
      <text x="150" y="172" text-anchor="middle" font-family="'Caveat', cursive"
        font-size="15" fill="#6A7585" opacity="0.7">reverse \u2194 swap every pointer</text>
    </svg>
  </div>
  `;
}

function stackPringlesHero() {
  return `
  <div class="hero-animation" aria-hidden="true">
    <svg viewBox="0 0 360 260" width="100%" style="max-width:360px;display:block;margin:0 auto;">
      <defs>
        <!-- Shadows & effects -->
        <filter id="h-soft"><feDropShadow dx="1" dy="3" stdDeviation="3" flood-opacity="0.10" flood-color="#6B9CC4"/></filter>
        <filter id="h-glow"><feDropShadow dx="0" dy="0" stdDeviation="6" flood-opacity="0.12" flood-color="#F0CF70"/></filter>
        <linearGradient id="h-glass-l" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stop-color="#6B9CC4" stop-opacity="0.15"/>
          <stop offset="100%" stop-color="white" stop-opacity="0"/>
        </linearGradient>
        <linearGradient id="h-glass-r" x1="1" y1="0" x2="0" y2="0">
          <stop offset="0%" stop-color="#6B9CC4" stop-opacity="0.12"/>
          <stop offset="100%" stop-color="white" stop-opacity="0"/>
        </linearGradient>
        <linearGradient id="h-shine" x1="0" y1="0" x2="0.3" y2="1">
          <stop offset="0%" stop-color="white" stop-opacity="0.4"/>
          <stop offset="100%" stop-color="white" stop-opacity="0"/>
        </linearGradient>
        <linearGradient id="h-body-grad" x1="0.5" y1="0" x2="0.5" y2="1">
          <stop offset="0%" stop-color="#F0CF70"/>
          <stop offset="100%" stop-color="#E0BC55"/>
        </linearGradient>
      </defs>

      <!-- ======= GROUND SHADOW ======= -->
      <ellipse cx="180" cy="248" rx="140" ry="8" fill="#D7E8F4" opacity="0.4"/>

      <!-- ======= PRINGLES CAN (right side) ======= -->
      <g transform="translate(220, 60)">
        <!-- Can bottom -->
        <ellipse cx="45" cy="170" rx="42" ry="12" fill="#C0D4E4" opacity="0.5"/>

        <!-- Can body (glass) -->
        <rect x="3" y="18" width="84" height="152" fill="white" fill-opacity="0.1" rx="2"/>
        <rect x="3" y="18" width="30" height="152" fill="url(#h-glass-l)" rx="2"/>
        <rect x="57" y="18" width="30" height="152" fill="url(#h-glass-r)" rx="2"/>

        <!-- Glass edges -->
        <line x1="3" y1="18" x2="3" y2="170" stroke="#6B9CC4" stroke-width="1.2" opacity="0.25"/>
        <line x1="87" y1="18" x2="87" y2="170" stroke="#6B9CC4" stroke-width="1.2" opacity="0.25"/>

        <!-- Shine strip -->
        <rect x="10" y="24" width="8" height="140" rx="4" fill="url(#h-shine)"/>

        <!-- Chips inside can (3 stacked) -->
        <!-- Chip 1 (bottom) - Mint -->
        <ellipse cx="45" cy="152" rx="33" ry="10" fill="#82C4BC"/>
        <ellipse cx="45" cy="150" rx="33" ry="10" fill="#9FD9D2"/>
        <ellipse cx="40" cy="148" rx="10" ry="3" fill="white" opacity="0.3"/>

        <!-- Chip 2 (middle) - Coral -->
        <ellipse cx="45" cy="128" rx="33" ry="10" fill="#D48A90"/>
        <ellipse cx="45" cy="126" rx="33" ry="10" fill="#E8A3A8"/>
        <ellipse cx="40" cy="124" rx="10" ry="3" fill="white" opacity="0.3"/>

        <!-- Chip 3 (top, about to be grabbed) - Sky Blue -->
        <ellipse cx="45" cy="104" rx="33" ry="10" fill="#9AC4DE"/>
        <ellipse cx="45" cy="102" rx="33" ry="10" fill="#B8DCF0"/>
        <ellipse cx="40" cy="100" rx="10" ry="3" fill="white" opacity="0.3"/>

        <!-- Top rim -->
        <ellipse cx="45" cy="18" rx="42" ry="12" fill="white" fill-opacity="0.15" stroke="#6B9CC4" stroke-width="1.2" opacity="0.45"/>
        <ellipse cx="45" cy="18" rx="38" ry="9" fill="none" stroke="#B8DCF0" stroke-width="0.6" opacity="0.4"/>
      </g>

      <!-- ======= CHARACTER (left side) — cute round bear-like creature ======= -->
      <g transform="translate(60, 70)" filter="url(#h-soft)">

        <!-- Body -->
        <ellipse cx="55" cy="130" rx="50" ry="55" fill="url(#h-body-grad)"/>
        <!-- Body shine -->
        <ellipse cx="40" cy="115" rx="18" ry="25" fill="white" opacity="0.15"/>

        <!-- Head -->
        <circle cx="55" cy="65" r="42" fill="#F0CF70"/>
        <!-- Head shine -->
        <ellipse cx="42" cy="52" rx="15" ry="18" fill="white" opacity="0.15"/>

        <!-- Ears -->
        <circle cx="22" cy="35" r="14" fill="#E0BC55"/>
        <circle cx="22" cy="35" r="8" fill="#F0CF70"/>
        <circle cx="88" cy="35" r="14" fill="#E0BC55"/>
        <circle cx="88" cy="35" r="8" fill="#F0CF70"/>

        <!-- Face -->
        <!-- Eyes (happy closed) -->
        <path d="M 38 60 Q 42 55 46 60" stroke="#2A3040" stroke-width="2.5" fill="none" stroke-linecap="round"/>
        <path d="M 64 60 Q 68 55 72 60" stroke="#2A3040" stroke-width="2.5" fill="none" stroke-linecap="round"/>

        <!-- Cheek blush -->
        <ellipse cx="33" cy="70" rx="8" ry="5" fill="#E8A3A8" opacity="0.45"/>
        <ellipse cx="77" cy="70" rx="8" ry="5" fill="#E8A3A8" opacity="0.45"/>

        <!-- Mouth (happy, eating) -->
        <path d="M 48 76 Q 55 83 62 76" stroke="#2A3040" stroke-width="2" fill="none" stroke-linecap="round"/>

        <!-- Left arm (resting on body) -->
        <ellipse cx="12" cy="125" rx="14" ry="10" fill="#E0BC55" transform="rotate(-20, 12, 125)"/>

        <!-- Right arm (reaching toward can, animated) -->
        <g class="hero-arm-reach">
          <ellipse cx="102" cy="110" rx="14" ry="10" fill="#E0BC55" transform="rotate(15, 102, 110)"/>
        </g>
      </g>

      <!-- ======= FLOATING CHIP (animated — goes from can to mouth) ======= -->
      <g class="hero-chip-float">
        <!-- Chip being eaten — Butter Yellow -->
        <ellipse cx="195" cy="100" rx="18" ry="6" fill="#DCB858"/>
        <ellipse cx="195" cy="98" rx="18" ry="6" fill="#F0CF70"/>
        <ellipse cx="191" cy="96" rx="6" ry="2" fill="white" opacity="0.35"/>
      </g>

      <!-- ======= SPARKLE STARS (delight) ======= -->
      <g class="hero-sparkle">
        <polygon points="155,50 157,46 159,50 163,50 160,53 161,57 157,55 153,57 154,53 151,50"
          fill="#F0CF70" opacity="0.7"/>
      </g>
      <g class="hero-sparkle hero-sparkle-2">
        <polygon points="280,45 281.5,42 283,45 286,45 283.5,47.5 284.5,51 281.5,49 278.5,51 279.5,47.5 277,45"
          fill="#E8A3A8" opacity="0.6"/>
      </g>
      <g class="hero-sparkle hero-sparkle-3">
        <circle cx="170" cy="35" r="3" fill="#9FD9D2" opacity="0.5"/>
      </g>

    </svg>
  </div>
  `;
}
