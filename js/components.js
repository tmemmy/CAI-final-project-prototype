const topicIcons = {
  foundations: `<svg viewBox="0 0 48 48" width="48" height="48" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <rect x="8" y="28" width="32" height="12" rx="2" stroke="#6B9CC4" fill="#EBF3FA"/>
    <rect x="12" y="18" width="24" height="8" rx="2" stroke="#6B9CC4" fill="#E8F0F8"/>
    <rect x="16" y="10" width="16" height="6" rx="2" stroke="#6B9CC4" fill="#D8E8F4"/>
    <path d="M24 6 L24 10" stroke="#6B9CC4" stroke-dasharray="2 2"/>
    <circle cx="24" cy="4" r="2" fill="#6B9CC4" opacity="0.4"/>
  </svg>`,
  stacks: `<svg viewBox="0 0 48 48" width="48" height="48" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <rect x="14" y="30" width="20" height="12" rx="10" stroke="#5A8AB4" fill="#EBF3FA"/>
    <rect x="14" y="20" width="20" height="10" rx="2" stroke="#5A8AB4" fill="#E8F0F8"/>
    <rect x="14" y="12" width="20" height="8" rx="2" stroke="#5A8AB4" fill="#D8E8F4"/>
    <path d="M24 6 L24 12" stroke="#5A8AB4" stroke-dasharray="2 2"/>
    <path d="M20 8 L24 4 L28 8" stroke="#5A8AB4" fill="none"/>
  </svg>`,
  queues: `<svg viewBox="0 0 48 48" width="48" height="48" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <rect x="4" y="18" width="10" height="12" rx="2" stroke="#8CB89B" fill="#EDF5F0"/>
    <rect x="16" y="18" width="10" height="12" rx="2" stroke="#8CB89B" fill="#EDF5F0"/>
    <rect x="28" y="18" width="10" height="12" rx="2" stroke="#8CB89B" fill="#D8EDE0"/>
    <path d="M42 24 L46 24" stroke="#8CB89B"/>
    <path d="M44 20 L48 24 L44 28" stroke="#8CB89B" fill="none"/>
    <path d="M0 24 L4 24" stroke="#8CB89B"/>
  </svg>`,
  "linked-lists": `<svg viewBox="0 0 48 48" width="48" height="48" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="10" cy="24" r="7" stroke="#A098C4" fill="#F0EDF5"/>
    <circle cx="24" cy="24" r="7" stroke="#A098C4" fill="#F0EDF5"/>
    <circle cx="38" cy="24" r="7" stroke="#A098C4" fill="#E8E4F0"/>
    <path d="M17 24 L17 24" stroke="#A098C4"/>
    <path d="M31 24 L31 24" stroke="#A098C4"/>
    <line x1="17" y1="24" x2="17" y2="24" stroke="#A098C4"/>
  </svg>`,
  recursion: `<svg viewBox="0 0 48 48" width="48" height="48" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <ellipse cx="24" cy="36" rx="18" ry="7" stroke="#6B9CC4" fill="#EBF3FA"/>
    <ellipse cx="24" cy="28" rx="14" ry="6" stroke="#6B9CC4" fill="#E8F0F8"/>
    <ellipse cx="24" cy="21" rx="10" ry="5" stroke="#6B9CC4" fill="#D8E8F4"/>
    <ellipse cx="24" cy="15" rx="6" ry="4" stroke="#6B9CC4" fill="#C8DCF0"/>
    <circle cx="24" cy="10" r="3" stroke="#6B9CC4" fill="#6B9CC4"/>
  </svg>`,
  sorting: `<svg viewBox="0 0 48 48" width="48" height="48" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <rect x="4" y="32" width="8" height="12" rx="1" stroke="#C4889B" fill="#F5EDF0"/>
    <rect x="14" y="24" width="8" height="20" rx="1" stroke="#C4889B" fill="#F5EDF0"/>
    <rect x="24" y="16" width="8" height="28" rx="1" stroke="#C4889B" fill="#F0E0E8"/>
    <rect x="34" y="8" width="8" height="36" rx="1" stroke="#C4889B" fill="#E8D4DC"/>
    <path d="M6 28 C12 22, 16 26, 22 18" stroke="#C4889B" stroke-dasharray="3 2" fill="none"/>
  </svg>`,
  searching: `<svg viewBox="0 0 48 48" width="48" height="48" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="20" cy="20" r="12" stroke="#D4B86A" fill="#F8F3E8"/>
    <line x1="29" y1="29" x2="40" y2="40" stroke="#D4B86A" stroke-width="3"/>
    <path d="M14 20 L26 20" stroke="#D4B86A" stroke-dasharray="3 2"/>
    <path d="M20 14 L20 26" stroke="#D4B86A" stroke-dasharray="3 2"/>
  </svg>`,
  trees: `<svg viewBox="0 0 48 48" width="48" height="48" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="24" cy="10" r="6" stroke="#8CB89B" fill="#EDF5F0"/>
    <circle cx="12" cy="30" r="6" stroke="#8CB89B" fill="#EDF5F0"/>
    <circle cx="36" cy="30" r="6" stroke="#8CB89B" fill="#D8EDE0"/>
    <line x1="20" y1="15" x2="14" y2="25" stroke="#8CB89B"/>
    <line x1="28" y1="15" x2="34" y2="25" stroke="#8CB89B"/>
  </svg>`,
  complexity: `<svg viewBox="0 0 48 48" width="48" height="48" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M8 40 Q16 38 24 28 Q32 18 40 8" stroke="#A098C4" fill="none" stroke-width="2.5"/>
    <path d="M8 40 Q20 36 32 20 Q38 12 40 8" stroke="#6B9CC4" fill="none" stroke-dasharray="3 2"/>
    <circle cx="24" cy="28" r="3" fill="#A098C4" opacity="0.5"/>
    <text x="42" y="12" font-size="8" fill="#A098C4" font-family="Caveat, cursive">O(n²)</text>
    <text x="42" y="22" font-size="8" fill="#6B9CC4" font-family="Caveat, cursive">O(n)</text>
  </svg>`
};

const difficultyLabels = {
  'warm-up': { label: 'Warm-up', class: 'badge-warmup' },
  'core-practice': { label: 'Core Practice', class: 'badge-core' },
  'challenge': { label: 'Challenge', class: 'badge-challenge' }
};

export function renderTopicCard(topic) {
  const count = topic.tutorials.length;
  const icon = topicIcons[topic.icon] || '';
  return `
    <div class="topic-card" onclick="location.hash='#/topic/${topic.id}'" style="border-left-color: ${topic.color}">
      <div class="topic-card-icon">${icon}</div>
      <div class="topic-card-title">${topic.title}</div>
      <div class="topic-card-description">${topic.description}</div>
      <div class="topic-card-count">${count} tutorial${count !== 1 ? 's' : ''}</div>
    </div>
  `;
}

export function renderTutorialListItem(topicId, tutorial) {
  const diff = difficultyLabels[tutorial.difficulty] || { label: tutorial.difficulty, class: 'badge-warmup' };
  return `
    <div class="tutorial-list-item" onclick="location.hash='#/tutorial/${topicId}/${tutorial.id}'">
      <div class="tutorial-list-header">
        <div class="tutorial-list-title">${tutorial.title}</div>
        <span class="badge ${diff.class}">${diff.label}</span>
      </div>
      <div class="tutorial-list-meta">
        <span>${tutorial.estimatedMinutes} min</span>
      </div>
    </div>
  `;
}

const DOODLE_PATH = 'images for graphics/doodles';
const materialImageMap = {
  'paper': `${DOODLE_PATH}/Humaaans - Paperwork.png`,
  'card': `${DOODLE_PATH}/Dayflow - Sticky Notes.png`,
  'scissor': `${DOODLE_PATH}/scissors.jpeg`,
  'pen': `${DOODLE_PATH}/The Little Things - Markers.png`,
  'marker': `${DOODLE_PATH}/The Little Things - Markers.png`,
  'pencil': `${DOODLE_PATH}/The Little Things - Pencils.png`,
  'tape': `${DOODLE_PATH}/tape.jpeg`,
  'bowl': `${DOODLE_PATH}/The Munchies - Bowl.png`,
  'cup': `${DOODLE_PATH}/The Munchies - Bowl.png`,
  'sticky': `${DOODLE_PATH}/Dayflow - Sticky Notes.png`,
  'clip': `${DOODLE_PATH}/paper clips.jpeg`,
  'coin': `${DOODLE_PATH}/Hands - Coin.png`,
  'token': `${DOODLE_PATH}/Hands - Coin.png`,
  'string': `${DOODLE_PATH}/Happy Pride! - Colors.png`,
  'yarn': `${DOODLE_PATH}/Happy Pride! - Colors.png`,
};

function getMaterialImage(item) {
  const lower = item.toLowerCase();
  for (const [keyword, img] of Object.entries(materialImageMap)) {
    if (lower.includes(keyword)) return img;
  }
  return null;
}

export function renderMaterialsList(materials) {
  return `
    <div class="materials-list">
      ${materials.map(m => {
        const img = getMaterialImage(m.item);
        const icon = img
          ? `<img class="material-doodle" src="${img}" alt="" />`
          : `<div class="material-emoji">${m.emoji}</div>`;
        return `
          <div class="material-item">
            ${icon}
            <div class="material-info">
              <div class="material-info-name">${m.item}</div>
              <div class="material-info-detail">${m.detail}</div>
            </div>
          </div>
        `;
      }).join('')}
      <div class="materials-note">
        Don't have the exact materials? Be creative! Use whatever you have at home.
        Tape, glue, rubber bands, or even rocks and leaves can work. The point is to make it physical.
      </div>
    </div>
  `;
}

export function renderSetup(setupSteps) {
  return `
    <div class="setup-section">
      <div class="setup-title">Setup: do this first</div>
      <div class="setup-steps">
        ${setupSteps.map((s, i) => `
          <div class="setup-step">
            <div class="setup-step-number">${i + 1}</div>
            <div>${s}</div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

export function renderStepBubble(step) {
  let html = `<div class="step-bubble" id="step-${step.id}">`;

  html += `
    <div class="step-header">
      <div class="step-number">${step.id}</div>
      <div class="step-label">Step ${step.id}</div>
    </div>
  `;

  html += `<div class="step-instruction">${step.instruction}</div>`;

  if (step.action) {
    html += `<div class="step-action">${step.action}</div>`;
  }

  if (step.diagram) {
    html += renderDiagram(step.diagram);
  }

  if (step.checkpoint) {
    html += `
      <div class="checkpoint-box">
        <div class="checkpoint-label">Checkpoint</div>
        <div class="checkpoint-text">${step.checkpoint}</div>
      </div>
    `;
  }

  if (step.conceptNote) {
    const noteId = `concept-${step.id}`;
    html += `
      <div class="concept-note">
        <div class="concept-note-toggle" onclick="toggleConceptNote('${noteId}', this)">
          <span class="arrow">&#9654;</span> Connect to code
        </div>
        <div class="concept-note-content" id="${noteId}">${step.conceptNote}</div>
      </div>
    `;
  }

  if (step.hint) {
    const hintId = `hint-${step.id}`;
    html += `
      <div class="hint-toggle" onclick="toggleHint('${hintId}', this)">
        &#128161; Need a hint?
      </div>
      <div class="hint-content" id="${hintId}">${step.hint}</div>
    `;
  }

  html += `</div>`;
  return html;
}

export function renderDiagram(diagram) {
  if (diagram.type === 'array') return renderArrayDiagram(diagram);
  if (diagram.type === 'donut-array') return renderDonutArrayDiagram(diagram);
  if (diagram.type === 'stack') return renderStackDiagram(diagram);
  if (diagram.type === 'callstack') return renderCallStackDiagram(diagram);
  if (diagram.type === 'swap') return renderSwapDiagram(diagram);
  if (diagram.type === 'midstack') return renderMidStackDiagram(diagram);
  if (diagram.type === 'linkedlist') return renderLinkedListDiagram(diagram);
  if (diagram.type === 'train-dll') return renderTrainDLL(diagram);
  if (diagram.type === 'growth-curves') return renderGrowthCurves(diagram);
  if (diagram.type === 'queue') return renderQueueDiagram(diagram);
  if (diagram.type === 'tree') return renderTreeDiagram(diagram);
  return '';
}

// ============================================
// SVG DIAGRAM RENDERERS - COLLAGE/CRAFT STYLE
// ============================================

const CARD_COLORS = ['#E8F0F8', '#FFFFFF', '#EDF5F0', '#F0EDF5', '#F8F3E8', '#F5EDF0'];
const CARD_W = 58;
const CARD_H = 58;
const CARD_GAP = 8;
const FONT = "'Caveat', cursive";

function svgDefs() {
  return `
    <defs>
      <filter id="paper-shadow"><feDropShadow dx="1.5" dy="2" stdDeviation="2" flood-opacity="0.12"/></filter>
      <pattern id="paper-lines" patternUnits="userSpaceOnUse" width="100" height="14">
        <line x1="0" y1="13" x2="100" y2="13" stroke="#c0d0e0" stroke-width="0.5" opacity="0.4"/>
      </pattern>
      <pattern id="desk-surface" patternUnits="userSpaceOnUse" width="200" height="8">
        <line x1="0" y1="4" x2="200" y2="4" stroke="#D4C4A8" stroke-width="0.3" opacity="0.3"/>
        <line x1="0" y1="7" x2="200" y2="7" stroke="#C8B898" stroke-width="0.2" opacity="0.2"/>
      </pattern>
    </defs>
  `;
}

function svgDeskSurface(y, totalW) {
  return `
    <rect x="0" y="${y}" width="${totalW}" height="10" fill="url(#desk-surface)"/>
    <path d="M 0 ${y} Q ${totalW * 0.25} ${y + 1.5} ${totalW * 0.5} ${y} Q ${totalW * 0.75} ${y - 1} ${totalW} ${y}"
      stroke="#D4C4A8" stroke-width="1.2" fill="none" opacity="0.5"/>
  `;
}

function svgHandSilhouette(x, y) {
  return `
    <g transform="translate(${x}, ${y}) scale(0.45)" opacity="0.25">
      <path d="M 0 0 C -2 -8 -6 -20 -4 -28 C -3 -32 0 -32 1 -28 L 2 -18
        C 2 -22 2 -34 4 -38 C 5 -41 8 -41 9 -38 L 8 -18
        C 9 -24 10 -36 12 -39 C 13 -42 16 -41 16 -38 L 14 -18
        C 15 -24 16 -32 18 -35 C 19 -37 22 -37 22 -34 L 19 -14
        C 20 -18 22 -24 24 -26 C 25 -28 28 -27 27 -24 L 22 -8
        C 20 -2 16 4 10 6 C 4 8 0 4 0 0 Z"
        fill="#B0B0B0" stroke="none"/>
    </g>
  `;
}

function svgScissors(x, y) {
  return `
    <g transform="translate(${x}, ${y}) scale(0.7)" opacity="0.5">
      <circle cx="-4" cy="6" r="4" fill="none" stroke="#6B9CC4" stroke-width="1.5"/>
      <circle cx="4" cy="6" r="4" fill="none" stroke="#6B9CC4" stroke-width="1.5"/>
      <line x1="-2" y1="3" x2="6" y2="-8" stroke="#6B9CC4" stroke-width="1.5" stroke-linecap="round"/>
      <line x1="2" y1="3" x2="-6" y2="-8" stroke="#6B9CC4" stroke-width="1.5" stroke-linecap="round"/>
    </g>
  `;
}

function svgPaperclip(x, y) {
  return `
    <g transform="translate(${x}, ${y}) scale(0.55)" opacity="0.4">
      <path d="M 2 -10 C 2 -14 8 -14 8 -10 L 8 8 C 8 14 -2 14 -2 8 L -2 -4 C -2 -8 4 -8 4 -4 L 4 6"
        fill="none" stroke="#8A95A8" stroke-width="1.8" stroke-linecap="round"/>
    </g>
  `;
}

function svgPushpin(x, y, color) {
  return `
    <circle cx="${x}" cy="${y}" r="5" fill="${color || '#C4889B'}" opacity="0.55" stroke="none"/>
    <circle cx="${x}" cy="${y}" r="1.5" fill="white" opacity="0.8"/>
  `;
}

function svgTapePiece(x, y, width, angle) {
  return `
    <rect x="${x - width/2}" y="${y - 4}" width="${width}" height="8" rx="1"
      fill="#D8E8F4" opacity="0.5" stroke="#B0C8E0" stroke-width="0.4"
      transform="rotate(${angle || 0}, ${x}, ${y})"/>
  `;
}

function svgWavyLine(x1, y1, x2, y2, stroke, strokeWidth) {
  // Create a wavy line (like yarn/string) between two points
  const dx = x2 - x1;
  const dy = y2 - y1;
  const len = Math.sqrt(dx * dx + dy * dy);
  const waves = Math.max(3, Math.floor(len / 12));
  const amp = 3;
  // Perpendicular direction
  const nx = -dy / len;
  const ny = dx / len;
  let path = `M ${x1} ${y1}`;
  for (let w = 1; w <= waves; w++) {
    const t = w / waves;
    const mx = x1 + dx * t;
    const my = y1 + dy * t;
    const side = (w % 2 === 0) ? amp : -amp;
    const cx = x1 + dx * ((w - 0.5) / waves) + nx * side;
    const cy = y1 + dy * ((w - 0.5) / waves) + ny * side;
    path += ` Q ${cx} ${cy} ${mx} ${my}`;
  }
  return `<path d="${path}" stroke="${stroke || '#6B9CC4'}" stroke-width="${strokeWidth || 2}" fill="none"/>`;
}

function svgCard(x, y, val, i, opts = {}) {
  const w = opts.w || CARD_W;
  const h = opts.h || CARD_H;
  const isEmpty = val === '' || val === null || val === undefined;
  const color = opts.color || CARD_COLORS[i % CARD_COLORS.length];
  const rotation = (i % 2 === 0) ? -0.8 : 0.7;
  const isHighlight = opts.highlight;
  const isSwap = opts.swap;

  if (isEmpty) {
    return `
      <rect x="${x}" y="${y}" width="${w}" height="${h}" rx="4"
        fill="#F5F0E8" stroke="#ccc" stroke-width="1.5" stroke-dasharray="5,3"
        transform="rotate(${rotation}, ${x + w/2}, ${y + h/2})"/>
    `;
  }

  const highlightRing = isHighlight ? `
    <rect x="${x-3}" y="${y-3}" width="${w+6}" height="${h+6}" rx="6"
      fill="none" stroke="#F4C554" stroke-width="2.5" opacity="0.6"
      transform="rotate(${rotation}, ${x + w/2}, ${y + h/2})"/>
  ` : '';

  const swapRing = isSwap ? `
    <rect x="${x-3}" y="${y-3}" width="${w+6}" height="${h+6}" rx="6"
      fill="none" stroke="#E8785A" stroke-width="2" stroke-dasharray="4,3" opacity="0.7"
      transform="rotate(${rotation}, ${x + w/2}, ${y + h/2})"/>
  ` : '';

  // Tape piece on some cards
  const showTape = (i === 0 || i === 3);
  const tapeAngle = (i % 2 === 0) ? -8 : 6;
  const tape = showTape ? `
    <rect x="${x + w/2 - 16}" y="${y - 6}" width="32" height="10" rx="1.5"
      fill="#D8E8F4" opacity="0.55" stroke="#B0C8E0" stroke-width="0.5"
      transform="rotate(${tapeAngle}, ${x + w/2}, ${y})"/>
  ` : '';

  return `
    ${highlightRing}
    ${swapRing}
    <g filter="url(#paper-shadow)" transform="rotate(${rotation}, ${x + w/2}, ${y + h/2})">
      <rect x="${x}" y="${y}" width="${w}" height="${h}" rx="4"
        fill="${color}" stroke="#bbb" stroke-width="1"/>
      <rect x="${x+2}" y="${y+2}" width="${w-4}" height="${h-4}"
        fill="url(#paper-lines)" opacity="0.35"/>
    </g>
    ${tape}
    <text x="${x + w/2}" y="${y + h/2 + 8}" text-anchor="middle"
      font-family="${FONT}" font-size="26" font-weight="700" fill="#2A3040"
      transform="rotate(${rotation}, ${x + w/2}, ${y + h/2})">${val}</text>
  `;
}

function renderArrayDiagram(d) {
  const n = d.cells.length;
  const totalW = n * (CARD_W + CARD_GAP) - CARD_GAP + 40;
  const hasPointer = d.pointer && d.pointer.index >= 0;
  const totalH = CARD_H + 60 + (hasPointer ? 30 : 0);
  const startX = 20;
  const startY = 15;

  let cards = '';
  d.cells.forEach((val, i) => {
    const x = startX + i * (CARD_W + CARD_GAP);
    const isHighlight = d.highlight && d.highlight.includes(i);
    const isSwap = d.swapIndices && d.swapIndices.includes(i);
    cards += svgCard(x, startY, val, i, { highlight: isHighlight, swap: isSwap });
  });

  // Index labels
  let indices = '';
  d.cells.forEach((_, i) => {
    const x = startX + i * (CARD_W + CARD_GAP) + CARD_W / 2;
    indices += `<text x="${x}" y="${startY + CARD_H + 18}" text-anchor="middle"
      font-family="${FONT}" font-size="15" fill="#8A95A8">${i}</text>`;
  });

  // Pointer arrow
  let pointer = '';
  if (hasPointer) {
    const px = startX + d.pointer.index * (CARD_W + CARD_GAP) + CARD_W / 2;
    const py = startY + CARD_H + 28;
    pointer = `
      <path d="M ${px} ${py} L ${px-6} ${py+10} L ${px+6} ${py+10} Z" fill="#6B9CC4"/>
      <text x="${px}" y="${py + 26}" text-anchor="middle"
        font-family="${FONT}" font-size="16" font-weight="700" fill="#6B9CC4">${d.pointer.label}</text>
    `;
  }

  // Swap arrows
  let swapArrows = '';
  if (d.swapIndices) {
    const x1 = startX + d.swapIndices[0] * (CARD_W + CARD_GAP) + CARD_W / 2;
    const x2 = startX + d.swapIndices[1] * (CARD_W + CARD_GAP) + CARD_W / 2;
    const midX = (x1 + x2) / 2;
    swapArrows = `
      <path d="M ${x1+5} ${startY - 5} Q ${midX} ${startY - 25} ${x2-5} ${startY - 5}"
        stroke="#6B9CC4" stroke-width="2" fill="none" stroke-linecap="round"/>
      <path d="M ${x2-12} ${startY - 10} L ${x2-5} ${startY - 5} L ${x2-14} ${startY - 2}" fill="#6B9CC4"/>
      <text x="${midX}" y="${startY - 15}" text-anchor="middle"
        font-family="${FONT}" font-size="14" font-weight="700" fill="#6B9CC4">swap!</text>
      ${svgScissors(midX + 22, startY - 18)}
    `;
  }

  const deskH = 14;
  const svgH = totalH + (d.swapIndices ? 25 : 0) + deskH;
  const yOffset = d.swapIndices ? 25 : 0;

  // Desk surface line below array
  const deskY = yOffset + startY + CARD_H + (hasPointer ? 60 : 28);

  return `
    <div class="diagram-container" style="background:white;border:1px solid rgba(107,156,196,0.1);border-radius:12px;padding:12px 8px;">
      <svg viewBox="0 0 ${totalW} ${svgH + 5}" width="100%" style="max-width:${totalW}px;">
        ${svgDefs()}
        <g transform="translate(0,${yOffset})">
          ${cards}
          ${indices}
          ${pointer}
        </g>
        ${d.swapIndices ? `<g>${swapArrows}</g>` : ''}
        ${svgDeskSurface(deskY, totalW)}
      </svg>
    </div>
  `;
}

// ============================================
// DONUT ARRAY DIAGRAM - Pastel 3D donut style
// ============================================
function renderDonutArrayDiagram(d) {
  const n = d.cells.length;
  const donutR = 30;
  const donutGap = 14;
  const donutD = donutR * 2;
  const totalW = n * (donutD + donutGap) - donutGap + 50;
  const hasPointer = d.pointer && d.pointer.index >= 0;
  const totalH = donutD + 70 + (hasPointer ? 30 : 0);
  const startX = 25;
  const startY = 20;

  // Pastel donut colors inspired by Summer 3D aesthetic
  const DONUT_COLORS = [
    { frosting: '#F9C5D1', dough: '#F5E0C3', shadow: '#E8A4B0' },  // pink
    { frosting: '#A8E6CF', dough: '#F5E0C3', shadow: '#7BC8A4' },  // mint
    { frosting: '#C3B1E1', dough: '#F5E0C3', shadow: '#A08CC8' },  // lavender
    { frosting: '#FFE0A3', dough: '#F5E0C3', shadow: '#E0C480' },  // yellow
    { frosting: '#A8D8EA', dough: '#F5E0C3', shadow: '#80B8CC' },  // sky blue
    { frosting: '#F5B7B1', dough: '#F5E0C3', shadow: '#D49892' }   // coral
  ];

  let donuts = '';
  d.cells.forEach((val, i) => {
    const cx = startX + i * (donutD + donutGap) + donutR;
    const cy = startY + donutR;
    const isEmpty = val === '' || val === null || val === undefined;
    const isHighlight = d.highlight && d.highlight.includes(i);
    const isSwap = d.swapIndices && d.swapIndices.includes(i);
    const color = DONUT_COLORS[i % DONUT_COLORS.length];

    if (isEmpty) {
      // Empty slot: dashed circle outline
      donuts += `
        <circle cx="${cx}" cy="${cy}" r="${donutR}" fill="none"
          stroke="#ccc" stroke-width="2" stroke-dasharray="6,4"/>
        <text x="${cx}" y="${cy + 5}" text-anchor="middle"
          font-family="${FONT}" font-size="14" fill="#aaa">gap</text>
      `;
    } else {
      // Highlight glow
      if (isHighlight) {
        donuts += `<circle cx="${cx}" cy="${cy}" r="${donutR + 5}"
          fill="none" stroke="#F4C554" stroke-width="3" opacity="0.5"/>`;
      }
      if (isSwap) {
        donuts += `<circle cx="${cx}" cy="${cy}" r="${donutR + 5}"
          fill="none" stroke="#E8785A" stroke-width="2" stroke-dasharray="5,3" opacity="0.6"/>`;
      }

      // Donut body: outer circle (dough), inner frosting, hole
      donuts += `
        <circle cx="${cx}" cy="${cy + 2}" r="${donutR}" fill="${color.shadow}" opacity="0.3"/>
        <circle cx="${cx}" cy="${cy}" r="${donutR}" fill="${color.dough}" stroke="#D4B896" stroke-width="1.5"/>
        <circle cx="${cx}" cy="${cy}" r="${donutR - 5}" fill="${color.frosting}" stroke="none"/>
        <circle cx="${cx}" cy="${cy}" r="${donutR * 0.32}" fill="#F5E0C3" stroke="#D4B896" stroke-width="1"/>
      `;

      // Sprinkles (tiny colored dashes on the frosting)
      const sprinkleColors = ['#FF6B8A', '#5BC9F4', '#FFD93D', '#6BCB77', '#C17BDB'];
      for (let s = 0; s < 5; s++) {
        const angle = (s * 72 + i * 30) * Math.PI / 180;
        const sr = donutR * 0.6;
        const sx = cx + Math.cos(angle) * sr;
        const sy = cy + Math.sin(angle) * sr;
        const sAngle = (s * 40 + i * 20);
        donuts += `<rect x="${sx - 3}" y="${sy - 1}" width="6" height="2.5" rx="1"
          fill="${sprinkleColors[s % sprinkleColors.length]}"
          transform="rotate(${sAngle}, ${sx}, ${sy})"/>`;
      }

      // Number text
      donuts += `
        <text x="${cx}" y="${cy + 7}" text-anchor="middle"
          font-family="${FONT}" font-size="22" font-weight="700" fill="#2A3040">${val}</text>
      `;
    }
  });

  // Index labels
  let indices = '';
  d.cells.forEach((_, i) => {
    const cx = startX + i * (donutD + donutGap) + donutR;
    indices += `<text x="${cx}" y="${startY + donutD + 18}" text-anchor="middle"
      font-family="${FONT}" font-size="14" fill="#8A95A8">${i}</text>`;
  });

  // Pointer arrow
  let pointer = '';
  if (hasPointer) {
    const px = startX + d.pointer.index * (donutD + donutGap) + donutR;
    const py = startY + donutD + 28;
    pointer = `
      <path d="M ${px} ${py} L ${px-6} ${py+10} L ${px+6} ${py+10} Z" fill="#6B9CC4"/>
      <text x="${px}" y="${py + 26}" text-anchor="middle"
        font-family="${FONT}" font-size="15" font-weight="700" fill="#6B9CC4">${d.pointer.label}</text>
    `;
  }

  // Swap arrows
  let swapArrows = '';
  if (d.swapIndices) {
    const x1 = startX + d.swapIndices[0] * (donutD + donutGap) + donutR;
    const x2 = startX + d.swapIndices[1] * (donutD + donutGap) + donutR;
    const midX = (x1 + x2) / 2;
    swapArrows = `
      <path d="M ${x1+5} ${startY - 8} Q ${midX} ${startY - 28} ${x2-5} ${startY - 8}"
        stroke="#6B9CC4" stroke-width="2" fill="none" stroke-linecap="round"/>
      <path d="M ${x2-12} ${startY - 13} L ${x2-5} ${startY - 8} L ${x2-14} ${startY - 5}" fill="#6B9CC4"/>
      <text x="${midX}" y="${startY - 18}" text-anchor="middle"
        font-family="${FONT}" font-size="14" font-weight="700" fill="#6B9CC4">shift!</text>
    `;
  }

  const svgH = totalH + (d.swapIndices ? 30 : 0);
  const yOffset = d.swapIndices ? 30 : 0;

  // Desk surface
  const deskY = startY + donutD + 40 + (hasPointer ? 30 : 0);

  return `
    <div class="diagram-container" style="background: linear-gradient(180deg, #FFF9F0 0%, #FFF0E8 100%);border:1px solid rgba(244,197,209,0.3);border-radius:16px;padding:14px 8px;">
      <svg viewBox="0 0 ${totalW} ${svgH + 5}" width="100%" style="max-width:${totalW}px;">
        ${svgDefs()}
        <g transform="translate(0,${yOffset})">
          ${donuts}
          ${indices}
          ${pointer}
        </g>
        ${d.swapIndices ? `<g>${swapArrows}</g>` : ''}
      </svg>
    </div>
  `;
}

function renderCallStackDiagram(d) {
  const frameH = 50;
  const frameGap = 8;
  const frameW = 260;
  const n = d.frames.length;
  const totalH = n * (frameH + frameGap) + 20;
  const startX = 20;

  let frames = '';
  d.frames.forEach((f, i) => {
    const y = 10 + i * (frameH + frameGap);
    const rotation = (i % 2 === 0) ? -0.6 : 0.5;
    const colors = ['#D6E4F0', '#F0D6D6', '#F0ECD6', '#D6F0D6', '#E8D6F0'];
    let color = colors[i % colors.length];
    let borderColor = '#bbb';
    let borderStyle = '1';

    if (f.isBase) {
      color = '#D6F0D6';
      borderColor = '#7DB87D';
    }
    if (f.resolved) {
      color = '#F5EDE0';
      borderColor = '#C0785A';
    }

    // Sticky note effect
    const stickyX = startX + frameW + 15;
    const sticky = f.status ? `
      <rect x="${stickyX}" y="${y + 5}" width="110" height="46" rx="2"
        fill="#D8E8F4" stroke="#B0C8E0" stroke-width="0.5"
        transform="rotate(${2 + i}, ${stickyX + 55}, ${y + 28})"
        filter="url(#paper-shadow)"/>
      <text x="${stickyX + 55}" y="${y + 33}" text-anchor="middle"
        font-family="${FONT}" font-size="14" fill="#6A7585"
        transform="rotate(${2 + i}, ${stickyX + 55}, ${y + 28})">${f.status}</text>
    ` : '';

    // Curled corner (top-right fold)
    const foldSize = 10;
    const cornerFold = `
      <path d="M ${startX + frameW - foldSize} ${y} L ${startX + frameW} ${y + foldSize} L ${startX + frameW - foldSize} ${y + foldSize} Z"
        fill="#e0d8c8" stroke="${borderColor}" stroke-width="0.5" opacity="0.5"
        transform="rotate(${rotation}, ${startX + frameW/2}, ${y + frameH/2})"/>
    `;

    // Tape piece across top of frame
    const tapeAngle = (i % 2 === 0) ? -4 : 3;
    const frameTape = svgTapePiece(startX + frameW / 2, y - 1, 36, tapeAngle);

    frames += `
      <g filter="url(#paper-shadow)" transform="rotate(${rotation}, ${startX + frameW/2}, ${y + frameH/2})">
        <rect x="${startX}" y="${y}" width="${frameW}" height="${frameH}" rx="5"
          fill="${color}" stroke="${borderColor}" stroke-width="2"/>
        <rect x="${startX+2}" y="${y+2}" width="${frameW-4}" height="${frameH-4}"
          fill="url(#paper-lines)" opacity="0.3"/>
      </g>
      ${cornerFold}
      ${frameTape}
      <text x="${startX + frameW/2}" y="${y + frameH/2 + 6}" text-anchor="middle"
        font-family="${FONT}" font-size="20" font-weight="700" fill="#2A3040"
        transform="rotate(${rotation}, ${startX + frameW/2}, ${y + frameH/2})">${f.label}</text>
      ${f.isBase ? `
        <g transform="translate(${startX + frameW - 20}, ${y + 5})">
          <path d="M 0 -7 L 2 -2 L 7 -2 L 3 1.5 L 5 7 L 0 3.5 L -5 7 L -3 1.5 L -7 -2 L -2 -2 Z"
            fill="#F4C554" stroke="#2D2D2D" stroke-width="1"/>
        </g>
      ` : ''}
      ${sticky}
    `;
  });

  const deskY = totalH - 8;
  const svgWidth = startX + frameW + 145;

  return `
    <div class="diagram-container" style="background:white;border:1px solid rgba(107,156,196,0.1);border-radius:12px;padding:12px 8px;">
      <svg viewBox="0 0 ${svgWidth} ${totalH + 10}" width="100%" style="max-width:420px;">
        ${svgDefs()}
        ${frames}
        ${svgDeskSurface(deskY, svgWidth)}
      </svg>
    </div>
  `;
}

function renderSwapDiagram(d) {
  return renderArrayDiagram({ ...d, type: 'array' });
}

function renderMidStackDiagram(d) {
  // d.bottom: array of values in the stack (bottom half)
  // d.top: array of values in the deque (top half)
  // d.label: optional label
  const bottomN = d.bottom.length;
  const topN = d.top.length;
  const chipW = 50;
  const chipH = 36;
  const chipGap = 4;
  const canH = 70;
  const dividerW = 50;

  // Calculate widths for each section
  const stackSlots = Math.max(bottomN, 1);
  const dequeSlots = Math.max(topN, 1);
  const canBodyW = stackSlots * (chipW + chipGap) + 30;
  const arrowBodyW = dequeSlots * (chipW + chipGap) + 20;
  const arrowTipW = 30;
  const arrowTailW = 20;
  const totalW = canBodyW + 40 + dividerW + arrowTailW + arrowBodyW + arrowTipW + 80;
  const midY = 72;
  const totalH = midY + canH / 2 + 40 + (d.label ? 20 : 0);

  let svg = svgDefs();

  // ==========================================
  // LEFT SIDE: Horizontal cylinder (Stack)
  // ==========================================
  const canX = 20;
  const canY = midY - canH / 2;
  const canEndX = canX + canBodyW;

  // Cylinder body
  svg += `<rect x="${canX + 14}" y="${canY}" width="${canBodyW - 14}" height="${canH}" rx="2"
    fill="white" fill-opacity="0.15" stroke="none"/>`;
  // Glass edges
  svg += `<line x1="${canX + 14}" y1="${canY}" x2="${canEndX}" y2="${canY}"
    stroke="#6B9CC4" stroke-width="1.2" opacity="0.35"/>`;
  svg += `<line x1="${canX + 14}" y1="${canY + canH}" x2="${canEndX}" y2="${canY + canH}"
    stroke="#6B9CC4" stroke-width="1.2" opacity="0.35"/>`;
  // Left cap (closed end, bottom of stack)
  svg += `<ellipse cx="${canX + 14}" cy="${midY}" rx="14" ry="${canH / 2}"
    fill="#D7E8F4" stroke="#6B9CC4" stroke-width="1.2" opacity="0.6"/>`;
  // Right opening (top of stack, where push/pop happens)
  svg += `<ellipse cx="${canEndX}" cy="${midY}" rx="14" ry="${canH / 2}"
    fill="white" fill-opacity="0.2" stroke="#6B9CC4" stroke-width="1.2" opacity="0.5"/>`;
  // Shine
  svg += `<rect x="${canX + 20}" y="${canY + 4}" width="${canBodyW - 30}" height="6" rx="3"
    fill="white" opacity="0.2"/>`;

  // Chips inside (horizontal, left = bottom, right = top)
  if (bottomN === 0) {
    svg += `<text x="${canX + canBodyW / 2 + 7}" y="${midY + 5}" text-anchor="middle"
      font-family="${FONT}" font-size="13" fill="#8A95A8" opacity="0.6">empty</text>`;
  } else {
    d.bottom.forEach((val, i) => {
      const cx = canX + 24 + i * (chipW + chipGap) + chipW / 2;
      const CHIP_COLS = ['#B8DCF0', '#9FD9D2', '#E8A3A8', '#F0CF70', '#C4B0E0', '#A8D8B8'];
      const col = CHIP_COLS[i % CHIP_COLS.length];
      // Chip as vertical ellipse
      svg += `<ellipse cx="${cx}" cy="${midY}" rx="${chipW / 2 - 2}" ry="${canH / 2 - 8}"
        fill="${col}" stroke="#B0C0D0" stroke-width="1.2" filter="url(#paper-shadow)"/>`;
      svg += `<text x="${cx}" y="${midY + 6}" text-anchor="middle"
        font-family="${FONT}" font-size="20" font-weight="700" fill="#2A3040">${val}</text>`;
    });
  }

  // Stack label above, push/pop below the cylinder
  svg += `<text x="${canX + canBodyW / 2 + 7}" y="${canY - 8}" text-anchor="middle"
    font-family="${FONT}" font-size="13" font-weight="700" fill="#5A8AB4">Bottom Half (Stack)</text>`;

  // ==========================================
  // DIVIDER
  // ==========================================
  const divX = canEndX + 20;
  svg += `<line x1="${divX + dividerW / 2}" y1="${canY - 5}" x2="${divX + dividerW / 2}" y2="${canY + canH + 5}"
    stroke="#6B9CC4" stroke-width="2.5" stroke-dasharray="6,4"/>`;
  svg += `<text x="${divX + dividerW / 2}" y="${canY + canH + 22}" text-anchor="middle"
    font-family="${FONT}" font-size="14" font-weight="700" fill="#6B9CC4">middle</text>`;

  // ==========================================
  // RIGHT SIDE: Arrow shape (Deque)
  // Front (pointed tip) faces LEFT toward middle
  // Back (wide end) faces RIGHT (outside)
  // Both ends support enqueue/dequeue
  // ==========================================
  const arrowStartX = divX + dividerW + 10;
  const arrowTipEndX = arrowStartX; // pointed tip on the left (front)
  const arrowBodyX = arrowStartX + arrowTipW;
  const arrowEndX = arrowBodyX + arrowBodyW;

  // Arrow shape: tip points LEFT toward the divider
  svg += `<path d="
    M ${arrowTipEndX - arrowTipW} ${midY}
    L ${arrowTipEndX} ${midY - canH / 2 - 6}
    L ${arrowBodyX} ${midY - canH / 2 - 4}
    L ${arrowEndX} ${midY - canH / 2 - 8}
    L ${arrowEndX + arrowTailW} ${midY - canH / 2 - 8}
    L ${arrowEndX + arrowTailW} ${midY + canH / 2 + 8}
    L ${arrowEndX} ${midY + canH / 2 + 8}
    L ${arrowBodyX} ${midY + canH / 2 + 4}
    L ${arrowTipEndX} ${midY + canH / 2 + 6}
    Z
  " fill="#EDF5F0" stroke="#8CB89B" stroke-width="1.5" opacity="0.5"/>`;

  // Cells inside the arrow
  if (topN === 0) {
    svg += `<text x="${(arrowBodyX + arrowEndX) / 2}" y="${midY + 5}" text-anchor="middle"
      font-family="${FONT}" font-size="13" fill="#8A95A8" opacity="0.6">empty</text>`;
  } else {
    d.top.forEach((val, i) => {
      const cx = arrowBodyX + 6 + i * (chipW + chipGap);
      const color = CARD_COLORS[(i + 3) % CARD_COLORS.length];
      svg += `<g filter="url(#paper-shadow)">
        <rect x="${cx}" y="${midY - chipH / 2}" width="${chipW}" height="${chipH}" rx="4"
          fill="${color}" stroke="#B0C0D0" stroke-width="1.2"/>
      </g>`;
      svg += `<text x="${cx + chipW / 2}" y="${midY + 7}" text-anchor="middle"
        font-family="${FONT}" font-size="20" font-weight="700" fill="#2A3040">${val}</text>`;
    });
  }

  // Deque label
  svg += `<text x="${(arrowBodyX + arrowEndX) / 2}" y="${canY - 8}" text-anchor="middle"
    font-family="${FONT}" font-size="13" font-weight="700" fill="#6A8F6A">Top Half (Deque)</text>`;

  // Front label on left (pointed tip, faces the middle) — shifted left to avoid divider clash
  svg += `<text x="${arrowTipEndX - arrowTipW - 12}" y="${midY - 6}" text-anchor="end"
    font-family="${FONT}" font-size="11" font-weight="700" fill="#8CB89B">front</text>`;
  svg += `<text x="${arrowTipEndX - arrowTipW - 12}" y="${midY + 8}" text-anchor="end"
    font-family="${FONT}" font-size="9" fill="#8A95A8">\u2190 \u2192</text>`;

  // Back label on right (wide end)
  svg += `<text x="${arrowEndX + arrowTailW + 6}" y="${midY - 6}" text-anchor="start"
    font-family="${FONT}" font-size="11" font-weight="700" fill="#6B9CC4">back</text>`;
  svg += `<text x="${arrowEndX + arrowTailW + 6}" y="${midY + 8}" text-anchor="start"
    font-family="${FONT}" font-size="9" fill="#8A95A8">\u2190 \u2192</text>`;

  // Note/label
  const note = d.label ? `<text x="${totalW / 2}" y="${totalH - 4}" text-anchor="middle"
    font-family="${FONT}" font-size="14" fill="#6A7585">${d.label}</text>` : '';

  return `
    <div class="diagram-container" style="background:white;border:1px solid rgba(107,156,196,0.1);border-radius:12px;padding:12px 8px;overflow-x:auto;">
      <svg viewBox="0 0 ${totalW} ${totalH}" width="100%" style="max-width:${totalW}px;">
        ${svg}
        ${note}
      </svg>
    </div>
  `;
}

// ============================================
// STACK DIAGRAM - 3D See-through Pringles Can
// Brand style: soft 3D learning studio, rounded
// geometry, matte satin finish, pastel warmth
// ============================================
function renderStackDiagram(d) {
  const cells = d.cells || [];
  const n = cells.length;
  const canW = 140;
  const chipH = 38;
  const chipGap = 5;
  const canPadding = 14;
  const filledCount = cells.filter(v => v !== '' && v !== null).length;
  const canH = n * (chipH + chipGap) + canPadding * 2 + 24;
  const totalW = 340;
  const totalH = canH + 70;
  const canX = (totalW - canW) / 2;
  const canY = 28;

  // 3D chip colors — brand palette pastel solids
  const CHIP_COLORS = [
    { top: '#B8DCF0', side: '#9AC4DE', shadow: '#7BACC8', label: '#3A6080' },   // Soft Sky
    { top: '#9FD9D2', side: '#82C4BC', shadow: '#68AEA6', label: '#3A706A' },   // Mint Aqua
    { top: '#E8A3A8', side: '#D48A90', shadow: '#C07078', label: '#804048' },   // Soft Coral
    { top: '#F0CF70', side: '#DCB858', shadow: '#C8A240', label: '#706020' },   // Butter Yellow
    { top: '#C4B0E0', side: '#AE98CA', shadow: '#9880B4', label: '#5A4878' },   // Lavender
    { top: '#A8D8B8', side: '#90C0A0', shadow: '#78A888', label: '#406850' }    // Mint Green
  ];

  // SVG defs for 3D effects
  let svg = `
    <defs>
      <filter id="can-shadow"><feDropShadow dx="2" dy="4" stdDeviation="4" flood-opacity="0.10" flood-color="#6B9CC4"/></filter>
      <filter id="chip-shadow"><feDropShadow dx="1" dy="2" stdDeviation="1.5" flood-opacity="0.15"/></filter>
      <linearGradient id="glass-left" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stop-color="#6B9CC4" stop-opacity="0.18"/>
        <stop offset="40%" stop-color="#B8DCF0" stop-opacity="0.06"/>
        <stop offset="100%" stop-color="white" stop-opacity="0"/>
      </linearGradient>
      <linearGradient id="glass-right" x1="1" y1="0" x2="0" y2="0">
        <stop offset="0%" stop-color="#6B9CC4" stop-opacity="0.14"/>
        <stop offset="40%" stop-color="#B8DCF0" stop-opacity="0.04"/>
        <stop offset="100%" stop-color="white" stop-opacity="0"/>
      </linearGradient>
      <linearGradient id="glass-shine" x1="0" y1="0" x2="0.3" y2="1">
        <stop offset="0%" stop-color="white" stop-opacity="0.35"/>
        <stop offset="100%" stop-color="white" stop-opacity="0"/>
      </linearGradient>
      <linearGradient id="can-base-grad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#D7E8F4"/>
        <stop offset="100%" stop-color="#C0D4E4"/>
      </linearGradient>
    </defs>
  `;

  // --- CAN BODY (see-through glass cylinder) ---

  // Bottom ellipse (solid base with subtle 3D)
  svg += `
    <ellipse cx="${canX + canW/2}" cy="${canY + canH}" rx="${canW/2 + 2}" ry="16"
      fill="url(#can-base-grad)" stroke="#A0C0D8" stroke-width="1" opacity="0.7"/>
  `;

  // Glass body — translucent rectangle with gradient edges
  svg += `
    <rect x="${canX}" y="${canY + 16}" width="${canW}" height="${canH - 16}"
      fill="white" fill-opacity="0.12" rx="2"/>
    <rect x="${canX}" y="${canY + 16}" width="${canW * 0.35}" height="${canH - 16}"
      fill="url(#glass-left)" rx="2"/>
    <rect x="${canX + canW * 0.65}" y="${canY + 16}" width="${canW * 0.35}" height="${canH - 16}"
      fill="url(#glass-right)" rx="2"/>
  `;

  // Glass side edges (subtle curved lines)
  svg += `
    <line x1="${canX}" y1="${canY + 16}" x2="${canX}" y2="${canY + canH}"
      stroke="#6B9CC4" stroke-width="1.5" opacity="0.3"/>
    <line x1="${canX + canW}" y1="${canY + 16}" x2="${canX + canW}" y2="${canY + canH}"
      stroke="#6B9CC4" stroke-width="1.5" opacity="0.3"/>
  `;

  // Shine highlight (vertical glossy strip on left)
  svg += `
    <rect x="${canX + 8}" y="${canY + 20}" width="12" height="${canH - 40}" rx="6"
      fill="url(#glass-shine)"/>
  `;

  // Top rim ellipse (glass opening)
  svg += `
    <ellipse cx="${canX + canW/2}" cy="${canY + 16}" rx="${canW/2}" ry="14"
      fill="white" fill-opacity="0.15" stroke="#6B9CC4" stroke-width="1.5" opacity="0.5"/>
    <ellipse cx="${canX + canW/2}" cy="${canY + 16}" rx="${canW/2 - 3}" ry="11"
      fill="none" stroke="#B8DCF0" stroke-width="0.8" opacity="0.5"/>
  `;

  // --- CHIPS (3D rounded discs inside the can) ---
  cells.forEach((val, i) => {
    const isEmpty = val === '' || val === null;
    const chipY = canY + canH - canPadding - (i + 1) * (chipH + chipGap);
    const chipW = canW - 24;
    const cx = canX + canW / 2;
    const cy = chipY + chipH / 2;
    const isHighlight = d.highlight && d.highlight.includes(i);
    const color = CHIP_COLORS[i % CHIP_COLORS.length];

    if (isEmpty) {
      // Empty slot — dashed ellipse
      svg += `
        <ellipse cx="${cx}" cy="${cy}" rx="${chipW/2}" ry="${chipH/2 - 3}"
          fill="none" stroke="#B0C0D0" stroke-width="1.2" stroke-dasharray="5,4" opacity="0.4"/>
      `;
    } else {
      // Highlight glow ring
      if (isHighlight) {
        svg += `<ellipse cx="${cx}" cy="${cy}" rx="${chipW/2 + 6}" ry="${chipH/2 + 3}"
          fill="none" stroke="#F0CF70" stroke-width="3" opacity="0.45"/>`;
      }

      // Chip shadow (under the chip)
      svg += `<ellipse cx="${cx}" cy="${cy + 3}" rx="${chipW/2 - 1}" ry="${chipH/2 - 4}"
        fill="${color.shadow}" opacity="0.25"/>`;

      // Chip side (gives 3D thickness)
      svg += `<ellipse cx="${cx}" cy="${cy + 2}" rx="${chipW/2}" ry="${chipH/2 - 2}"
        fill="${color.side}"/>`;

      // Chip top surface
      svg += `<ellipse cx="${cx}" cy="${cy}" rx="${chipW/2}" ry="${chipH/2 - 2}"
        fill="${color.top}" filter="url(#chip-shadow)"/>`;

      // Shine on chip top
      svg += `<ellipse cx="${cx - chipW * 0.15}" cy="${cy - 3}" rx="${chipW * 0.22}" ry="${chipH * 0.12}"
        fill="white" opacity="0.35"/>`;

      // Value text
      svg += `<text x="${cx}" y="${cy + 6}" text-anchor="middle"
        font-family="'Quicksand', 'Nunito', sans-serif" font-size="17" font-weight="700"
        fill="${color.label}">${val}</text>`;
    }

    // Index label on the right
    svg += `<text x="${canX + canW + 18}" y="${cy + 5}" text-anchor="start"
      font-family="'Quicksand', sans-serif" font-size="12" font-weight="600" fill="#8A95A8">${i}</text>`;
  });

  // --- POINTER ---
  if (d.pointer && d.pointer.index >= 0) {
    const pY = canY + canH - canPadding - (d.pointer.index + 1) * (chipH + chipGap) + chipH / 2;
    svg += `
      <path d="M ${canX - 10} ${pY} L ${canX - 22} ${pY - 7} L ${canX - 22} ${pY + 7} Z"
        fill="#6B9CC4" opacity="0.8"/>
      <text x="${canX - 26}" y="${pY + 5}" text-anchor="end"
        font-family="'Quicksand', sans-serif" font-size="13" font-weight="700" fill="#6B9CC4">${d.pointer.label || 'top'}</text>
    `;
  }

  // --- LABELS ---
  svg += `
    <text x="${canX + canW/2}" y="${totalH - 5}" text-anchor="middle"
      font-family="'Quicksand', sans-serif" font-size="12" font-weight="500" fill="#8A95A8">index 0 (bottom)</text>
    <text x="${canX + canW/2}" y="${canY + 6}" text-anchor="middle"
      font-family="'Quicksand', sans-serif" font-size="12" font-weight="500" fill="#8A95A8">top</text>
  `;

  return `
    <div class="diagram-container" style="background: linear-gradient(180deg, #F4F7FB 0%, #EBF0F7 100%);border:1px solid rgba(107,156,196,0.12);border-radius:16px;padding:16px 8px;">
      <svg viewBox="0 0 ${totalW} ${totalH}" width="100%" style="max-width:${totalW}px;">
        ${svg}
      </svg>
    </div>
  `;
}

// ============================================
// LINKED LIST DIAGRAM - Nodes with arrows
// ============================================
function renderLinkedListDiagram(d) {
  // d.nodes: [{data: "A", id: "node1"}, ...] or just ["A", "B", "C"]
  // d.head: label for head pointer
  // d.doubly: true for doubly linked list
  // d.highlight: [index] to highlight
  // d.newNode: {data: "E", position: "before-2"} to show insertion
  const nodes = Array.isArray(d.nodes) ? d.nodes.map(n => typeof n === 'object' ? n : {data: n}) : [];
  const n = nodes.length;
  const nodeW = 90;
  const nodeH = 50;
  const arrowW = 50;
  const startX = 60;
  const startY = 50;
  const totalW = startX + n * (nodeW + arrowW) + 40;
  const totalH = d.doubly ? 140 : 120;
  const isDoubly = d.doubly || false;

  let svg = '';

  // Head pointer
  svg += `
    <text x="${startX - 10}" y="${startY - 20}" text-anchor="end"
      font-family="${FONT}" font-size="16" font-weight="700" fill="#2A3040">head</text>
    <path d="M ${startX - 8} ${startY - 15} L ${startX + 5} ${startY + 5}"
      stroke="#2A3040" stroke-width="1.5" fill="none" marker-end="url(#arrowhead)"/>
  `;

  // Arrow marker defs
  svg += `
    <defs>
      <marker id="arrowhead" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
        <path d="M 0 0 L 8 3 L 0 6 Z" fill="#6B9CC4"/>
      </marker>
      <marker id="arrowhead-red" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
        <path d="M 0 0 L 8 3 L 0 6 Z" fill="#C4889B"/>
      </marker>
      <marker id="arrowhead-dark" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
        <path d="M 0 0 L 8 3 L 0 6 Z" fill="#2A3040"/>
      </marker>
    </defs>
  `;

  nodes.forEach((node, i) => {
    const x = startX + i * (nodeW + arrowW);
    const y = startY;
    const isHighlight = d.highlight && d.highlight.includes(i);
    const color = CARD_COLORS[i % CARD_COLORS.length];
    const dataW = isDoubly ? nodeW * 0.4 : nodeW * 0.55;
    const nextW = isDoubly ? nodeW * 0.3 : nodeW * 0.45;
    const prevW = isDoubly ? nodeW * 0.3 : 0;

    // Highlight ring
    if (isHighlight) {
      svg += `<rect x="${x - 3}" y="${y - 3}" width="${nodeW + 6}" height="${nodeH + 6}" rx="6"
        fill="none" stroke="#D4B86A" stroke-width="2.5" opacity="0.5"/>`;
    }

    // Node box with sections
    svg += `
      <g filter="url(#paper-shadow)">
        <rect x="${x}" y="${y}" width="${nodeW}" height="${nodeH}" rx="4"
          fill="${color}" stroke="#B0C0D0" stroke-width="1.5"/>
    `;

    if (isDoubly) {
      // 3 sections: prev | data | next
      svg += `
        <line x1="${x + prevW}" y1="${y}" x2="${x + prevW}" y2="${y + nodeH}" stroke="#B0C0D0" stroke-width="1"/>
        <line x1="${x + prevW + dataW}" y1="${y}" x2="${x + prevW + dataW}" y2="${y + nodeH}" stroke="#B0C0D0" stroke-width="1"/>
      `;
      // Labels
      svg += `
        <text x="${x + prevW/2}" y="${y + 14}" text-anchor="middle"
          font-family="${FONT}" font-size="9" fill="#C4889B">prev</text>
        <text x="${x + prevW + dataW/2}" y="${y + 14}" text-anchor="middle"
          font-family="${FONT}" font-size="9" fill="#8A95A8">data</text>
        <text x="${x + prevW + dataW + nextW/2}" y="${y + 14}" text-anchor="middle"
          font-family="${FONT}" font-size="9" fill="#6B9CC4">next</text>
      `;
      // Data value
      svg += `
        <text x="${x + prevW + dataW/2}" y="${y + nodeH/2 + 10}" text-anchor="middle"
          font-family="${FONT}" font-size="22" font-weight="700" fill="#2A3040">${node.data}</text>
      `;
    } else {
      // 2 sections: data | next
      svg += `
        <line x1="${x + dataW}" y1="${y}" x2="${x + dataW}" y2="${y + nodeH}" stroke="#B0C0D0" stroke-width="1"/>
      `;
      // Labels
      svg += `
        <text x="${x + dataW/2}" y="${y + 14}" text-anchor="middle"
          font-family="${FONT}" font-size="9" fill="#8A95A8">data</text>
        <text x="${x + dataW + nextW/2}" y="${y + 14}" text-anchor="middle"
          font-family="${FONT}" font-size="9" fill="#6B9CC4">next</text>
      `;
      // Data value
      svg += `
        <text x="${x + dataW/2}" y="${y + nodeH/2 + 10}" text-anchor="middle"
          font-family="${FONT}" font-size="22" font-weight="700" fill="#2A3040">${node.data}</text>
      `;
    }

    svg += `</g>`;

    // Next arrow (blue, wavy like yarn) to next node or None
    if (i < n - 1) {
      const arrowStartX = x + nodeW + 4;
      const arrowEndX = x + nodeW + arrowW - 8;
      const ay = y + nodeH/2;
      // Wavy yarn-like path
      const waveMid1 = arrowStartX + (arrowEndX - arrowStartX) * 0.33;
      const waveMid2 = arrowStartX + (arrowEndX - arrowStartX) * 0.66;
      svg += `
        <path d="M ${arrowStartX} ${ay} Q ${waveMid1} ${ay - 5} ${(arrowStartX + arrowEndX)/2} ${ay} Q ${waveMid2} ${ay + 5} ${arrowEndX} ${ay}"
          stroke="#6B9CC4" stroke-width="2" fill="none" marker-end="url(#arrowhead)"/>
      `;
      // Paperclip at connection point
      svg += svgPaperclip(arrowStartX + (arrowEndX - arrowStartX) / 2, ay - 12);
    } else {
      // Last node points to None
      const noneX = x + nodeW + 15;
      svg += `
        <line x1="${x + nodeW + 4}" y1="${y + nodeH/2}" x2="${noneX + 5}" y2="${y + nodeH/2}"
          stroke="#6B9CC4" stroke-width="2" marker-end="url(#arrowhead)"/>
        <text x="${noneX + 18}" y="${y + nodeH/2 + 5}" text-anchor="start"
          font-family="${FONT}" font-size="16" font-weight="700" fill="#8A95A8">None</text>
      `;
    }

    // Prev arrows (red) for doubly linked list - pointing BACKWARD (right to left)
    if (isDoubly && i > 0) {
      const prevNodeEndX = startX + (i - 1) * (nodeW + arrowW) + nodeW;
      svg += `
        <line x1="${x + 4}" y1="${y + nodeH/2 + 12}" x2="${prevNodeEndX + arrowW - 10}" y2="${y + nodeH/2 + 12}"
          stroke="#C4889B" stroke-width="1.5"/>
        <polygon points="${prevNodeEndX + arrowW - 10},${y + nodeH/2 + 8} ${prevNodeEndX + arrowW - 10},${y + nodeH/2 + 16} ${prevNodeEndX + arrowW - 18},${y + nodeH/2 + 12}"
          fill="#C4889B"/>
      `;
    }
    if (isDoubly && i === 0) {
      // First node prev points to None
      svg += `
        <line x1="${x + 4}" y1="${y + nodeH/2 + 12}" x2="${x - 18}" y2="${y + nodeH/2 + 12}"
          stroke="#C4889B" stroke-width="1.5"/>
        <polygon points="${x - 18},${y + nodeH/2 + 8} ${x - 18},${y + nodeH/2 + 16} ${x - 26},${y + nodeH/2 + 12}"
          fill="#C4889B"/>
        <text x="${x - 30}" y="${y + nodeH/2 + 17}" text-anchor="end"
          font-family="${FONT}" font-size="13" fill="#8A95A8">None</text>
      `;
    }

    // Value label below
    svg += `<text x="${x + nodeW/2}" y="${y + nodeH + 18}" text-anchor="middle"
      font-family="${FONT}" font-size="13" fill="#8A95A8">${node.label || ''}</text>`;
  });

  // Label if provided
  const label = d.label ? `<text x="${totalW/2}" y="${totalH - 5}" text-anchor="middle"
    font-family="${FONT}" font-size="14" fill="#6A7585">${d.label}</text>` : '';

  return `
    <div class="diagram-container" style="background:white;border:1px solid rgba(107,156,196,0.1);border-radius:12px;padding:12px 8px;overflow-x:auto;">
      <svg viewBox="0 0 ${totalW + 30} ${totalH}" width="100%" style="max-width:${totalW + 30}px;">
        ${svgDefs()}
        ${svg}
        ${label}
      </svg>
    </div>
  `;
}

// ============================================
// QUEUE DIAGRAM - Arrow shape (conveyor belt)
// ============================================
function renderQueueDiagram(d) {
  // d.cells: array of values
  // d.front: index of front
  // d.back: index of back
  // d.label: optional label
  const cells = d.cells || [];
  const n = cells.length;
  const cellW = 52;
  const cellH = 52;
  const cellGap = 2;
  const arrowTipW = 40;
  const arrowTailW = 30;
  const bodyW = n * (cellW + cellGap) - cellGap;
  const totalW = arrowTailW + bodyW + arrowTipW + 120;
  const totalH = cellH + 90;
  const bodyX = arrowTailW + 70;
  const bodyY = 25;

  let svg = '';

  // Arrow shape (the queue container)
  // Pointed tip (front/exit/OUT) on LEFT (index 0), wide end (back/entrance/IN) on RIGHT
  const tailX = bodyX + bodyW + 10;
  const tipX = bodyX - 10;
  const midY = bodyY + cellH / 2;

  svg += `
    <path d="
      M ${tipX - arrowTipW} ${midY}
      L ${tipX} ${midY - cellH/2 - 8}
      L ${tailX} ${midY - cellH/2 - 12}
      L ${tailX + arrowTailW} ${midY - cellH/2 - 16}
      L ${tailX + arrowTailW} ${midY + cellH/2 + 16}
      L ${tailX} ${midY + cellH/2 + 12}
      L ${tipX} ${midY + cellH/2 + 8}
      Z
    " fill="#EBF3FA" stroke="#6B9CC4" stroke-width="1.5" opacity="0.6"/>
  `;

  // Cells inside the arrow
  cells.forEach((val, i) => {
    const x = bodyX + i * (cellW + cellGap);
    const isEmpty = val === '' || val === null;
    const isFront = d.front !== undefined && i === d.front;
    const isBack = d.back !== undefined && i === d.back;
    const color = isEmpty ? 'none' : CARD_COLORS[i % CARD_COLORS.length];

    if (isEmpty) {
      svg += `<rect x="${x}" y="${bodyY}" width="${cellW}" height="${cellH}" rx="4"
        fill="none" stroke="#ccc" stroke-width="1" stroke-dasharray="4,3"/>`;
    } else {
      svg += `
        <g filter="url(#paper-shadow)">
          <rect x="${x}" y="${bodyY}" width="${cellW}" height="${cellH}" rx="4"
            fill="${color}" stroke="#B0C0D0" stroke-width="1.2"/>
        </g>
        <text x="${x + cellW/2}" y="${bodyY + cellH/2 + 7}" text-anchor="middle"
          font-family="${FONT}" font-size="22" font-weight="700" fill="#2A3040">${val}</text>
      `;
    }

    // Index
    svg += `<text x="${x + cellW/2}" y="${bodyY + cellH + 24}" text-anchor="middle"
      font-family="${FONT}" font-size="12" fill="#8A95A8">${i}</text>`;

    // Front/back pointers
    if (isFront) {
      svg += `
        <path d="M ${x + cellW/2} ${bodyY - 6} L ${x + cellW/2 - 5} ${bodyY - 14} L ${x + cellW/2 + 5} ${bodyY - 14} Z" fill="#6B9CC4"/>
        <text x="${x + cellW/2}" y="${bodyY - 18}" text-anchor="middle"
          font-family="${FONT}" font-size="13" font-weight="700" fill="#6B9CC4">front</text>
      `;
    }
    if (isBack) {
      svg += `
        <path d="M ${x + cellW/2} ${bodyY - 6} L ${x + cellW/2 - 5} ${bodyY - 14} L ${x + cellW/2 + 5} ${bodyY - 14} Z" fill="#8CB89B"/>
        <text x="${x + cellW/2}" y="${bodyY - 18}" text-anchor="middle"
          font-family="${FONT}" font-size="13" font-weight="700" fill="#8CB89B">back</text>
      `;
    }
  });

  // Labels on arrow ends with directional hand/arrow icons
  const outLabelX = tipX - arrowTipW - 8;
  const inLabelX = tailX + arrowTailW + 8;
  svg += `
    <text x="${outLabelX}" y="${midY + 5}" text-anchor="end"
      font-family="${FONT}" font-size="14" font-weight="700" fill="#6B9CC4">OUT</text>
    <path d="M ${outLabelX - 22} ${midY} L ${outLabelX - 8} ${midY}" stroke="#6B9CC4" stroke-width="1.5" opacity="0.5"/>
    <path d="M ${outLabelX - 22} ${midY} L ${outLabelX - 18} ${midY - 3} M ${outLabelX - 22} ${midY} L ${outLabelX - 18} ${midY + 3}"
      stroke="#6B9CC4" stroke-width="1.5" fill="none" opacity="0.5"/>
    <text x="${inLabelX}" y="${midY + 5}" text-anchor="start"
      font-family="${FONT}" font-size="14" font-weight="700" fill="#8CB89B">IN</text>
    <path d="M ${inLabelX + 22} ${midY} L ${inLabelX + 8} ${midY}" stroke="#8CB89B" stroke-width="1.5" opacity="0.5"/>
    <path d="M ${inLabelX + 8} ${midY} L ${inLabelX + 12} ${midY - 3} M ${inLabelX + 8} ${midY} L ${inLabelX + 12} ${midY + 3}"
      stroke="#8CB89B" stroke-width="1.5" fill="none" opacity="0.5"/>
  `;

  const label = d.label ? `<text x="${totalW/2}" y="${totalH - 5}" text-anchor="middle"
    font-family="${FONT}" font-size="14" fill="#6A7585">${d.label}</text>` : '';

  return `
    <div class="diagram-container" style="background:white;border:1px solid rgba(107,156,196,0.1);border-radius:12px;padding:12px 8px;overflow-x:auto;">
      <svg viewBox="0 0 ${totalW} ${totalH}" width="100%" style="max-width:${totalW}px;">
        ${svgDefs()}
        ${svg}
        ${label}
      </svg>
    </div>
  `;
}

// ============================================
// TREE DIAGRAM - Circles with lines, like class notes
// ============================================
function renderTreeDiagram(d) {
  // d.root: nested tree structure like {value: "5", left: {value: "4"}, right: {value: "2", left: {value: "1"}, right: {value: "6"}}}
  // d.highlight: array of values to highlight
  // d.label: optional label
  if (!d.root) return '';

  const nodeR = 24;
  const levelH = 80;
  const minSpacing = 60;

  // Calculate tree depth
  function depth(node) {
    if (!node) return 0;
    return 1 + Math.max(depth(node.left), depth(node.right));
  }

  const treeDepth = depth(d.root);
  const maxWidth = Math.pow(2, treeDepth - 1) * minSpacing;
  const totalW = Math.max(maxWidth + 60, 300);
  const totalH = treeDepth * levelH + 60;
  const highlights = d.highlight || [];

  let svg = '';

  // Recursively draw nodes
  function drawNode(node, x, y, spread) {
    if (!node) return;

    const isHighlight = highlights.includes(node.value);
    const color = isHighlight ? '#D4B86A' : CARD_COLORS[0];
    const isLeaf = !node.left && !node.right;

    // Lines to children (wavy like string on a corkboard, drawn first so they're behind circles)
    if (node.left) {
      const childX = x - spread;
      const childY = y + levelH;
      svg += svgWavyLine(x, y + nodeR, childX, childY - nodeR, '#6B9CC4', 1.8);
      drawNode(node.left, childX, childY, spread / 2);
    }
    if (node.right) {
      const childX = x + spread;
      const childY = y + levelH;
      svg += svgWavyLine(x, y + nodeR, childX, childY - nodeR, '#6B9CC4', 1.8);
      drawNode(node.right, childX, childY, spread / 2);
    }

    // Highlight ring
    if (isHighlight) {
      svg += `<circle cx="${x}" cy="${y}" r="${nodeR + 5}"
        fill="none" stroke="#D4B86A" stroke-width="2.5" opacity="0.5"/>`;
    }

    // Node circle
    svg += `
      <circle cx="${x}" cy="${y}" r="${nodeR}"
        fill="${isHighlight ? '#F8F3E8' : 'white'}" stroke="#6B9CC4" stroke-width="2"
        filter="url(#paper-shadow)"/>
      <text x="${x}" y="${y + 7}" text-anchor="middle"
        font-family="${FONT}" font-size="20" font-weight="700" fill="#2A3040">${node.value}</text>
    `;

    // Pushpin/thumbtack at top of each node
    const pinColors = ['#C4889B', '#8CB89B', '#A098C4', '#D4B86A', '#6B9CC4'];
    svg += svgPushpin(x, y - nodeR, pinColors[Math.abs(String(node.value).charCodeAt(0)) % pinColors.length]);

    // Leaf ground marks (≡) for null children
    if (isLeaf) {
      // Left null
      const lx = x - spread * 0.4;
      const ly = y + levelH * 0.5;
      svg += `
        <line x1="${x - 4}" y1="${y + nodeR}" x2="${lx}" y2="${ly}"
          stroke="#B0C0D0" stroke-width="1" stroke-dasharray="3,3"/>
        <text x="${lx}" y="${ly + 4}" text-anchor="middle"
          font-family="${FONT}" font-size="11" fill="#8A95A8">\u2261</text>
      `;
      // Right null
      const rx = x + spread * 0.4;
      svg += `
        <line x1="${x + 4}" y1="${y + nodeR}" x2="${rx}" y2="${ly}"
          stroke="#B0C0D0" stroke-width="1" stroke-dasharray="3,3"/>
        <text x="${rx}" y="${ly + 4}" text-anchor="middle"
          font-family="${FONT}" font-size="11" fill="#8A95A8">\u2261</text>
      `;
    } else {
      // Show null marks for missing children only
      if (!node.left) {
        const lx = x - spread * 0.5;
        const ly = y + levelH * 0.6;
        svg += `
          <line x1="${x - 4}" y1="${y + nodeR}" x2="${lx}" y2="${ly}"
            stroke="#B0C0D0" stroke-width="1" stroke-dasharray="3,3"/>
          <text x="${lx}" y="${ly + 4}" text-anchor="middle"
            font-family="${FONT}" font-size="11" fill="#8A95A8">\u2261</text>
        `;
      }
      if (!node.right) {
        const rx = x + spread * 0.5;
        const ry = y + levelH * 0.6;
        svg += `
          <line x1="${x + 4}" y1="${y + nodeR}" x2="${rx}" y2="${ry}"
            stroke="#B0C0D0" stroke-width="1" stroke-dasharray="3,3"/>
          <text x="${rx}" y="${ry + 4}" text-anchor="middle"
            font-family="${FONT}" font-size="11" fill="#8A95A8">\u2261</text>
        `;
      }
    }

    // Node label (like "root", "leaf", etc.)
    if (node.label) {
      svg += `<text x="${x}" y="${y - nodeR - 8}" text-anchor="middle"
        font-family="${FONT}" font-size="12" fill="#8A95A8">${node.label}</text>`;
    }
  }

  const startX = totalW / 2;
  const startY = 40;
  const startSpread = maxWidth / 4;

  drawNode(d.root, startX, startY, startSpread);

  const label = d.label ? `<text x="${totalW/2}" y="${totalH - 5}" text-anchor="middle"
    font-family="${FONT}" font-size="14" fill="#6A7585">${d.label}</text>` : '';

  return `
    <div class="diagram-container" style="background:white;border:1px solid rgba(107,156,196,0.1);border-radius:12px;padding:12px 8px;overflow-x:auto;">
      <svg viewBox="0 0 ${totalW} ${totalH}" width="100%" style="max-width:${totalW}px;">
        ${svgDefs()}
        ${svg}
        ${label}
      </svg>
    </div>
  `;
}

// ============================================
// TRAIN DLL DIAGRAM - Doubly linked list as a train
// Header sentinel = engine, trailer sentinel = caboose
// Blue couplings (top) = next, red couplings (bottom) = prev
// ============================================
function renderTrainDLL(d) {
  // d.cars: ["H","A","B","C","D","T"] - H=header sentinel, T=trailer sentinel
  // d.current: index of node being processed (yellow highlight)
  // d.highlight: [index] array of indices to give a secondary highlight (blue ring)
  // d.swappedUpTo: index up to which couplings are reversed (-1 = none)
  // d.headAt: index where "head" label should appear
  // d.reversed: if true, draw engine shape at LAST index and caboose at FIRST
  // d.label: optional label below
  // d.nodeLabels: { index: "label" } optional labels drawn below specific cars
  const cars = d.cars || [];
  const current = d.current ?? -1;
  const highlights = d.highlight || [];
  const swappedUpTo = d.swappedUpTo ?? -1;
  const headAt = d.headAt ?? 0;
  const reversed = d.reversed || false;
  const nodeLabels = d.nodeLabels || {};
  const n = cars.length;

  const carW = 68;
  const carH = 48;
  const wheelR = 7;
  const gap = 44;
  const startX = 30;
  const startY = 58;
  const trackY = startY + carH + wheelR + 4;
  const totalW = startX + n * (carW + gap) - gap + 40;
  const totalH = trackY + 30 + (d.label ? 18 : 0);

  const COLORS = ['#E8F0F8','#F0EDF5','#EDF5F0','#F8F3E8','#F5EDF0','#E8F2FA'];

  let svg = `
    <defs>
      <filter id="tr-sh"><feDropShadow dx="1" dy="2" stdDeviation="1.5" flood-opacity="0.1"/></filter>
    </defs>
    <!-- Track -->
    <line x1="10" y1="${trackY}" x2="${totalW - 10}" y2="${trackY}"
      stroke="#C0B8A0" stroke-width="3" stroke-linecap="round"/>
    <line x1="10" y1="${trackY + 4}" x2="${totalW - 10}" y2="${trackY + 4}"
      stroke="#C0B8A0" stroke-width="1.5" opacity="0.5"/>
  `;

  // Draw crossties on track
  for (let t = 20; t < totalW - 10; t += 18) {
    svg += `<rect x="${t}" y="${trackY - 2}" width="10" height="8" rx="1"
      fill="#D4C8A8" opacity="0.4"/>`;
  }

  cars.forEach((val, i) => {
    const x = startX + i * (carW + gap);
    const y = startY;
    const isCurrent = i === current;
    const isEngine = reversed ? (i === n - 1) : (i === 0);
    const isCaboose = reversed ? (i === 0) : (i === n - 1);
    const isSentinel = isEngine || isCaboose;
    const isSwapped = i <= swappedUpTo;

    let fillColor, strokeColor;
    if (isCurrent) {
      fillColor = '#FFF8E0'; strokeColor = '#D4B86A';
    } else if (isSwapped) {
      fillColor = '#E4F5E8'; strokeColor = '#8CB89B';
    } else if (isSentinel) {
      fillColor = '#E0E0E0'; strokeColor = '#999';
    } else {
      fillColor = COLORS[i % COLORS.length]; strokeColor = '#A098C4';
    }

    // Car body
    svg += `<g filter="url(#tr-sh)">`;

    if (isEngine) {
      // Engine: mirror horizontally if at the right end (reversed train)
      const engineFacesLeft = !reversed ? true : false;
      // We draw the engine facing left (boiler on left), then mirror if needed
      const cx = x + carW / 2;
      const mirrorAttr = engineFacesLeft ? '' : `transform="scale(-1,1)" transform-origin="${cx}px ${y + carH/2}px"`;
      svg += `<g ${mirrorAttr}>`;
      // Cab (rear/right part of engine)
      svg += `<rect x="${x + carW * 0.45}" y="${y - 8}" width="${carW * 0.55}" height="${carH + 8}" rx="4"
        fill="${fillColor}" stroke="${strokeColor}" stroke-width="2"/>`;
      // Cab window
      svg += `<rect x="${x + carW * 0.55}" y="${y - 2}" width="${carW * 0.3}" height="14" rx="3"
        fill="white" stroke="${strokeColor}" stroke-width="1" opacity="0.7"/>`;
      // Boiler (front/left cylinder)
      svg += `<rect x="${x}" y="${y + 6}" width="${carW * 0.5}" height="${carH - 6}" rx="8"
        fill="${fillColor}" stroke="${strokeColor}" stroke-width="2"/>`;
      // Boiler bands
      svg += `<line x1="${x + 10}" y1="${y + 8}" x2="${x + 10}" y2="${y + carH - 2}" stroke="${strokeColor}" stroke-width="1" opacity="0.4"/>`;
      svg += `<line x1="${x + 24}" y1="${y + 8}" x2="${x + 24}" y2="${y + carH - 2}" stroke="${strokeColor}" stroke-width="1" opacity="0.4"/>`;
      // Smokestack
      svg += `<rect x="${x + 4}" y="${y - 10}" width="14" height="18" rx="4"
        fill="#777" stroke="#555" stroke-width="1.5"/>`;
      svg += `<ellipse cx="${x + 11}" cy="${y - 12}" rx="9" ry="4"
        fill="#B0B0B0" stroke="#888" stroke-width="1"/>`;
      // Smoke puffs
      svg += `<circle cx="${x + 8}" cy="${y - 22}" r="5" fill="#D8D8D8" opacity="0.4"/>`;
      svg += `<circle cx="${x + 16}" cy="${y - 28}" r="7" fill="#E0E0E0" opacity="0.3"/>`;
      svg += `<circle cx="${x + 6}" cy="${y - 34}" r="4" fill="#E8E8E8" opacity="0.2"/>`;
      // Cowcatcher
      svg += `<path d="M ${x - 6} ${y + carH} L ${x + 2} ${y + carH - 14} L ${x + 2} ${y + carH} Z"
        fill="#888" stroke="#666" stroke-width="1"/>`;
      // Headlamp
      svg += `<circle cx="${x + 2}" cy="${y + 18}" r="5" fill="#F4E88A" stroke="#D4B86A" stroke-width="1"/>`;
      svg += `<circle cx="${x + 2}" cy="${y + 18}" r="2" fill="white" opacity="0.7"/>`;
      svg += `</g>`;
    } else if (isCaboose) {
      // Caboose: mirror horizontally if at the left end (reversed train)
      const cabooseFacesRight = !reversed ? true : false;
      const ccx = x + carW / 2;
      const cabooseMirror = cabooseFacesRight ? '' : `transform="scale(-1,1)" transform-origin="${ccx}px ${y + carH/2}px"`;
      svg += `<g ${cabooseMirror}>`;
      // Main body
      svg += `<rect x="${x}" y="${y}" width="${carW}" height="${carH}" rx="5"
        fill="${fillColor}" stroke="${strokeColor}" stroke-width="2"/>`;
      // Cupola (raised section on top)
      svg += `<rect x="${x + 16}" y="${y - 14}" width="${carW - 32}" height="16" rx="4"
        fill="${fillColor}" stroke="${strokeColor}" stroke-width="1.5"/>`;
      // Cupola windows
      svg += `<rect x="${x + 20}" y="${y - 10}" width="10" height="8" rx="2"
        fill="white" stroke="${strokeColor}" stroke-width="0.8" opacity="0.7"/>`;
      svg += `<rect x="${x + 34}" y="${y - 10}" width="10" height="8" rx="2"
        fill="white" stroke="${strokeColor}" stroke-width="0.8" opacity="0.7"/>`;
      // Side windows
      svg += `<rect x="${x + 8}" y="${y + 8}" width="14" height="12" rx="2"
        fill="white" stroke="${strokeColor}" stroke-width="1" opacity="0.6"/>`;
      svg += `<rect x="${x + carW - 22}" y="${y + 8}" width="14" height="12" rx="2"
        fill="white" stroke="${strokeColor}" stroke-width="1" opacity="0.6"/>`;
      // Back railing
      svg += `<line x1="${x + carW}" y1="${y + 6}" x2="${x + carW + 4}" y2="${y + 6}"
        stroke="${strokeColor}" stroke-width="1.5"/>`;
      svg += `<line x1="${x + carW + 4}" y1="${y + 6}" x2="${x + carW + 4}" y2="${y + carH - 4}"
        stroke="${strokeColor}" stroke-width="1.5"/>`;
      svg += `<line x1="${x + carW}" y1="${y + carH - 4}" x2="${x + carW + 4}" y2="${y + carH - 4}"
        stroke="${strokeColor}" stroke-width="1.5"/>`;
      // Rear lantern
      svg += `<circle cx="${x + carW + 4}" cy="${y + carH/2}" r="4" fill="#C4889B" opacity="0.6"/>`;
      svg += `<circle cx="${x + carW + 4}" cy="${y + carH/2}" r="1.5" fill="white" opacity="0.5"/>`;
      svg += `</g>`;
    } else {
      // Data car: boxcar with side panels and window
      svg += `<rect x="${x}" y="${y}" width="${carW}" height="${carH}" rx="5"
        fill="${fillColor}" stroke="${strokeColor}" stroke-width="2"/>`;
      // Roof ridge
      svg += `<line x1="${x + 4}" y1="${y + 1}" x2="${x + carW - 4}" y2="${y + 1}"
        stroke="${strokeColor}" stroke-width="1" opacity="0.3"/>`;
      // Side panel line
      svg += `<line x1="${x}" y1="${y + carH * 0.65}" x2="${x + carW}" y2="${y + carH * 0.65}"
        stroke="${strokeColor}" stroke-width="0.8" opacity="0.3"/>`;
      // Window
      svg += `<rect x="${x + carW/2 - 10}" y="${y + 6}" width="20" height="14" rx="3"
        fill="white" stroke="${strokeColor}" stroke-width="1" opacity="0.5"/>`;
    }

    svg += `</g>`;

    // Data text
    if (isSentinel) {
      svg += `<text x="${x + carW/2}" y="${y + carH/2 + 2}" text-anchor="middle"
        font-family="${FONT}" font-size="11" fill="#888">None</text>`;
      svg += `<text x="${x + carW/2}" y="${y + carH/2 + 15}" text-anchor="middle"
        font-family="${FONT}" font-size="10" fill="#aaa">${isEngine ? 'engine' : 'caboose'}</text>`;
    } else {
      svg += `<text x="${x + carW/2}" y="${y + carH/2 + 8}" text-anchor="middle"
        font-family="${FONT}" font-size="24" font-weight="700" fill="#2A3040">${val}</text>`;
    }

    // Wheels (with spokes)
    const wy = y + carH + 2;
    [x + 14, x + carW - 14].forEach(wx => {
      svg += `<circle cx="${wx}" cy="${wy}" r="${wheelR}" fill="#666" stroke="#444" stroke-width="1.5"/>`;
      svg += `<circle cx="${wx}" cy="${wy}" r="${wheelR - 2}" fill="#888"/>`;
      svg += `<circle cx="${wx}" cy="${wy}" r="2" fill="#aaa"/>`;
      // Spokes
      for (let s = 0; s < 4; s++) {
        const angle = s * 45 * Math.PI / 180;
        svg += `<line x1="${wx}" y1="${wy}" x2="${wx + Math.cos(angle) * (wheelR - 2)}" y2="${wy + Math.sin(angle) * (wheelR - 2)}"
          stroke="#555" stroke-width="0.8"/>`;
      }
    });

    // Current node highlight (yellow)
    if (isCurrent) {
      svg += `<rect x="${x - 4}" y="${y - (isEngine ? 18 : 4)}" width="${carW + 8}" height="${carH + (isEngine ? 22 : 8)}" rx="10"
        fill="none" stroke="#D4B86A" stroke-width="2.5" class="dll-rev-pulse"/>`;
      svg += `<text x="${x + carW/2}" y="${y - (isEngine ? 38 : 10)}" text-anchor="middle"
        font-family="${FONT}" font-size="12" font-weight="700" fill="#D4B86A">curr</text>`;
    }

    // Secondary highlight ring (blue)
    if (highlights.includes(i) && !isCurrent) {
      svg += `<rect x="${x - 4}" y="${y - (isEngine ? 18 : 4)}" width="${carW + 8}" height="${carH + (isEngine ? 22 : 8)}" rx="10"
        fill="none" stroke="#6B9CC4" stroke-width="2.5" opacity="0.6"/>`;
    }

    // Per-node label below car
    if (nodeLabels[i]) {
      svg += `<text x="${x + carW/2}" y="${trackY + 18}" text-anchor="middle"
        font-family="${FONT}" font-size="11" font-weight="700" fill="#6B9CC4">${nodeLabels[i]}</text>`;
    }

    // Couplings (arrows between cars)
    if (i < n - 1) {
      const cx1 = x + carW + 2;
      const cx2 = x + carW + gap - 2;
      const cy = y + carH / 2;

      const thisSwapped = i <= swappedUpTo;
      const nextSwapped = (i + 1) <= swappedUpTo;
      const bothSwapped = thisSwapped && nextSwapped;
      const isBeingSwapped = (i === current) || (i + 1 === current);

      if (bothSwapped) {
        // REVERSED: blue goes right-to-left (top), pink goes left-to-right (bottom)
        svg += `<line x1="${cx2 - 4}" y1="${cy - 7}" x2="${cx1 + 4}" y2="${cy - 7}"
          stroke="#6B9CC4" stroke-width="2.5" class="dll-rev-arrow-in"/>`;
        svg += `<polygon points="${cx1 + 4},${cy - 10} ${cx1 + 4},${cy - 4} ${cx1 - 2},${cy - 7}"
          fill="#6B9CC4" class="dll-rev-arrow-in"/>`;
        svg += `<line x1="${cx1 + 4}" y1="${cy + 7}" x2="${cx2 - 4}" y2="${cy + 7}"
          stroke="#C4889B" stroke-width="2.5" class="dll-rev-arrow-in"/>`;
        svg += `<polygon points="${cx2 - 4},${cy + 4} ${cx2 - 4},${cy + 10} ${cx2 + 2},${cy + 7}"
          fill="#C4889B" class="dll-rev-arrow-in"/>`;
      } else if (isBeingSwapped && swappedUpTo >= 0) {
        // Being erased: dashed, faded
        svg += `<line x1="${cx1 + 4}" y1="${cy - 7}" x2="${cx2 - 4}" y2="${cy - 7}"
          stroke="#6B9CC4" stroke-width="2" stroke-dasharray="5,4" opacity="0.25" class="dll-rev-arrow-erasing"/>`;
        svg += `<line x1="${cx2 - 4}" y1="${cy + 7}" x2="${cx1 + 4}" y2="${cy + 7}"
          stroke="#C4889B" stroke-width="2" stroke-dasharray="5,4" opacity="0.25" class="dll-rev-arrow-erasing"/>`;
        // Animated X mark to show erasing
        const mx = (cx1 + cx2) / 2;
        svg += `<text x="${mx}" y="${cy + 1}" text-anchor="middle"
          font-family="${FONT}" font-size="16" fill="#C4889B" class="dll-rev-x-mark">\u2717</text>`;
      } else {
        // Original: blue left-to-right (top), pink right-to-left (bottom)
        svg += `<line x1="${cx1 + 4}" y1="${cy - 7}" x2="${cx2 - 4}" y2="${cy - 7}"
          stroke="#6B9CC4" stroke-width="2.5"/>`;
        svg += `<polygon points="${cx2 - 4},${cy - 10} ${cx2 - 4},${cy - 4} ${cx2 + 2},${cy - 7}"
          fill="#6B9CC4"/>`;
        svg += `<line x1="${cx2 - 4}" y1="${cy + 7}" x2="${cx1 + 4}" y2="${cy + 7}"
          stroke="#C4889B" stroke-width="2.5"/>`;
        svg += `<polygon points="${cx1 + 4},${cy + 4} ${cx1 + 4},${cy + 10} ${cx1 - 2},${cy + 7}"
          fill="#C4889B"/>`;
      }
    }
  });

  // Head pointer label
  const hx = startX + headAt * (carW + gap) + carW / 2;
  svg += `<text x="${hx}" y="${startY - 18}" text-anchor="middle"
    font-family="${FONT}" font-size="13" font-weight="700" fill="#6B9CC4">head</text>`;
  svg += `<line x1="${hx}" y1="${startY - 14}" x2="${hx}" y2="${startY - 4}"
    stroke="#6B9CC4" stroke-width="1.5"/>`;
  svg += `<polygon points="${hx - 3},${startY - 5} ${hx + 3},${startY - 5} ${hx},${startY - 1}" fill="#6B9CC4"/>`;

  // Legend
  svg += `<text x="${totalW - 20}" y="${totalH - 4}" text-anchor="end"
    font-family="${FONT}" font-size="10" fill="#8A95A8">
    <tspan fill="#6B9CC4">\u2500\u2500</tspan> next &nbsp;
    <tspan fill="#C4889B">\u2500\u2500</tspan> prev</text>`;

  // Label
  const label = d.label ? `<text x="${totalW/2}" y="${totalH - 2}" text-anchor="middle"
    font-family="${FONT}" font-size="13" fill="#6A7585">${d.label}</text>` : '';

  return `
    <div class="diagram-container" style="background:linear-gradient(180deg,#FAFCFE,#F4F0E8);border:1px solid rgba(160,152,196,0.15);border-radius:12px;padding:14px 8px;overflow-x:auto;">
      <svg viewBox="0 0 ${totalW} ${totalH}" width="100%" style="max-width:${totalW}px;">
        ${svg}
        ${label}
      </svg>
    </div>
  `;
}

// ============================================
// GROWTH CURVES DIAGRAM — Big-O comparison graph
// ============================================
const CURVE_DEFS = [
  { id: '1',      label: 'O(1)',       fn: () => 1,                                      color: '#82CFC6' },
  { id: 'logn',   label: 'O(log n)',   fn: (n) => Math.log2(Math.max(1, n)),              color: '#94C4B8' },
  { id: 'sqrtn',  label: 'O(√n)',      fn: (n) => Math.sqrt(n) * 2.2,                      color: '#F4CC6A' },
  { id: 'sqrtnlogn', label: 'O(√n·log n)', fn: (n) => Math.sqrt(n) * Math.log2(Math.max(1, n)) * 0.7, color: '#D4B86A' },
  { id: 'n',      label: 'O(n)',       fn: (n) => n,                                      color: '#E88060' },
  { id: 'nlogn',  label: 'O(n log n)', fn: (n) => n * Math.log2(Math.max(1, n)) * 1.3,    color: '#E8A0B0' },
  { id: 'n2',     label: 'O(n²)',      fn: (n) => n * n,                                  color: '#F0947E' },
  { id: '2n',     label: 'O(2ⁿ)',      fn: (n) => Math.pow(2, n),                         color: '#C07ACC' },
  { id: 'nfact',  label: 'O(n!)',      fn: (n) => { let f=1; for(let i=2;i<=n;i++) f*=i; return f; }, color: '#E05070' },
];

function renderGrowthCurves(d) {
  // d.show: array of curve indices to display (0-7), accumulates
  // d.highlight: index of the newest curve to highlight
  const show = d.show || [];
  const highlight = d.highlight ?? -1;

  const W = 540, H = 330;
  const pad = { l: 55, r: 80, t: 24, b: 45 };
  const gw = W - pad.l - pad.r;
  const gh = H - pad.t - pad.b;
  const nMax = 15;
  const yMax = 55;

  let svg = '';

  // Grid lines
  for (let yi = 0; yi <= 5; yi++) {
    const gy = pad.t + gh - (yi / 5) * gh;
    const val = Math.round(yi * yMax / 5);
    svg += `<line x1="${pad.l}" y1="${gy}" x2="${pad.l + gw}" y2="${gy}"
      stroke="#E0DCD4" stroke-width="0.8"/>`;
    svg += `<text x="${pad.l - 8}" y="${gy + 4}" text-anchor="end"
      font-family="${FONT}" font-size="11" fill="#8A95A8">${val}</text>`;
  }
  for (let xi = 0; xi <= 5; xi++) {
    const gx = pad.l + (xi / 5) * gw;
    const val = Math.round(xi * nMax / 5);
    svg += `<line x1="${gx}" y1="${pad.t}" x2="${gx}" y2="${pad.t + gh}"
      stroke="#E0DCD4" stroke-width="0.8"/>`;
    svg += `<text x="${gx}" y="${pad.t + gh + 16}" text-anchor="middle"
      font-family="${FONT}" font-size="11" fill="#8A95A8">${val}</text>`;
  }

  // Axes
  svg += `<line x1="${pad.l}" y1="${pad.t}" x2="${pad.l}" y2="${pad.t + gh}"
    stroke="#2A3040" stroke-width="1.5"/>`;
  svg += `<line x1="${pad.l}" y1="${pad.t + gh}" x2="${pad.l + gw}" y2="${pad.t + gh}"
    stroke="#2A3040" stroke-width="1.5"/>`;
  // Axis labels
  svg += `<text x="${pad.l + gw/2}" y="${H - 4}" text-anchor="middle"
    font-family="${FONT}" font-size="13" fill="#6A7585">input size (n)</text>`;
  svg += `<text x="14" y="${pad.t + gh/2}" text-anchor="middle"
    font-family="${FONT}" font-size="13" fill="#6A7585"
    transform="rotate(-90, 14, ${pad.t + gh/2})">operations</text>`;

  // Draw curves
  show.forEach(ci => {
    const c = CURVE_DEFS[ci];
    if (!c) return;
    const isHighlighted = ci === highlight;
    const strokeW = isHighlighted ? 3.5 : 2;
    const opacity = isHighlighted ? 1 : 0.6;

    let points = [];
    for (let n = 1; n <= nMax; n += 0.5) {
      const val = c.fn(n);
      if (val > yMax) {
        // Add one last point at the top edge then stop
        const px = pad.l + ((n - 1) / (nMax - 1)) * gw;
        points.push(`${px},${pad.t}`);
        break;
      }
      const px = pad.l + ((n - 1) / (nMax - 1)) * gw;
      const py = pad.t + gh - (val / yMax) * gh;
      points.push(`${px},${py}`);
    }

    if (points.length > 0) {
      svg += `<polyline points="${points.join(' ')}" fill="none"
        stroke="${c.color}" stroke-width="${strokeW}" stroke-linecap="round"
        stroke-linejoin="round" opacity="${opacity}"
        ${isHighlighted ? 'class="gc-curve-in"' : ''}/>`;
    }

    // Label at end of curve (right margin)
    const lastVal = c.fn(nMax);
    const labelX = pad.l + gw + 8;

    if (lastVal > yMax) {
      // Off the chart: find where it exits the top and label there
      let exitN = nMax;
      for (let n = 1; n <= nMax; n += 0.5) {
        if (c.fn(n) >= yMax) { exitN = n; break; }
      }
      const exitX = pad.l + ((exitN - 1) / (nMax - 1)) * gw;
      svg += `<text x="${Math.min(exitX + 8, labelX)}" y="${pad.t + 14}" text-anchor="start"
        font-family="${FONT}" font-size="12" font-weight="700" fill="${c.color}"
        opacity="${opacity}">${c.label} \u2191</text>`;
    } else {
      const labelY = pad.t + gh - (lastVal / yMax) * gh;
      const clampedY = Math.max(pad.t + 10, Math.min(pad.t + gh - 6, labelY));
      svg += `<text x="${labelX}" y="${clampedY + 4}" text-anchor="start"
        font-family="${FONT}" font-size="12" font-weight="700" fill="${c.color}"
        opacity="${opacity}">${c.label}</text>`;
    }
  });

  return `
    <div class="diagram-container" style="background:white;border:1px solid rgba(0,0,0,0.08);border-radius:14px;padding:10px 6px;overflow-x:auto;">
      <svg viewBox="0 0 ${W} ${H}" width="100%" style="max-width:${W}px;">
        ${svg}
      </svg>
    </div>
  `;
}

export function renderReflection(questions) {
  return `
    <div class="reflection-section">
      <div class="reflection-title">Reflection: think about it</div>
      <p class="reflection-subtitle">Click any card to reveal the answer.</p>
      <div class="reflection-list">
        ${questions.map((q, i) => {
          const isObject = typeof q === 'object';
          const question = isObject ? q.question : q;
          const answer = isObject ? q.answer : '';
          return `
            <div class="flashcard" onclick="this.classList.toggle('flipped')">
              <div class="flashcard-inner">
                <div class="flashcard-front">${question}</div>
                ${answer ? `<div class="flashcard-back">${answer}</div>` : ''}
              </div>
            </div>
          `;
        }).join('')}
      </div>
    </div>
  `;
}
