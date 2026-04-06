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

export function renderMaterialsList(materials) {
  return `
    <div class="materials-list">
      ${materials.map(m => `
        <div class="material-item">
          <div class="material-emoji">${m.emoji}</div>
          <div class="material-info">
            <div class="material-info-name">${m.item}</div>
            <div class="material-info-detail">${m.detail}</div>
          </div>
        </div>
      `).join('')}
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
  if (diagram.type === 'stack') return renderStackDiagram(diagram);
  if (diagram.type === 'callstack') return renderCallStackDiagram(diagram);
  if (diagram.type === 'swap') return renderSwapDiagram(diagram);
  if (diagram.type === 'midstack') return renderMidStackDiagram(diagram);
  if (diagram.type === 'linkedlist') return renderLinkedListDiagram(diagram);
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
    </defs>
  `;
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
    `;
  }

  const svgH = totalH + (d.swapIndices ? 25 : 0);
  const yOffset = d.swapIndices ? 25 : 0;

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
      <rect x="${stickyX}" y="${y + 5}" width="80" height="36" rx="2"
        fill="#D8E8F4" stroke="#B0C8E0" stroke-width="0.5"
        transform="rotate(${2 + i}, ${stickyX + 40}, ${y + 23})"
        filter="url(#paper-shadow)"/>
      <text x="${stickyX + 40}" y="${y + 28}" text-anchor="middle"
        font-family="${FONT}" font-size="12" fill="#6A7585"
        transform="rotate(${2 + i}, ${stickyX + 40}, ${y + 23})">${f.status}</text>
    ` : '';

    frames += `
      <g filter="url(#paper-shadow)" transform="rotate(${rotation}, ${startX + frameW/2}, ${y + frameH/2})">
        <rect x="${startX}" y="${y}" width="${frameW}" height="${frameH}" rx="5"
          fill="${color}" stroke="${borderColor}" stroke-width="2"/>
        <rect x="${startX+2}" y="${y+2}" width="${frameW-4}" height="${frameH-4}"
          fill="url(#paper-lines)" opacity="0.3"/>
      </g>
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

  return `
    <div class="diagram-container" style="background:white;border:1px solid rgba(107,156,196,0.1);border-radius:12px;padding:12px 8px;">
      <svg viewBox="0 0 ${startX + frameW + 110} ${totalH}" width="100%" style="max-width:420px;">
        ${svgDefs()}
        ${frames}
      </svg>
    </div>
  `;
}

function renderSwapDiagram(d) {
  return renderArrayDiagram({ ...d, type: 'array' });
}

function renderMidStackDiagram(d) {
  const bottomN = d.bottom.length;
  const topN = d.top.length;
  const dividerW = 40;
  const totalCards = bottomN + topN;
  const emptySlots = (bottomN === 0 ? 1 : 0) + (topN === 0 ? 1 : 0);
  const totalW = (totalCards + emptySlots) * (CARD_W + CARD_GAP) + dividerW + 60;
  const totalH = CARD_H + 80;
  const startY = 30;

  let svg = '';
  let x = 20;

  // Bottom half label
  const bottomLabelX = x + (bottomN > 0 ? (bottomN * (CARD_W + CARD_GAP) - CARD_GAP) / 2 : 30);

  // Bottom half cards
  if (bottomN === 0) {
    svg += `<rect x="${x}" y="${startY}" width="${CARD_W}" height="${CARD_H}" rx="4"
      fill="#F5F0E8" stroke="#ccc" stroke-width="1.5" stroke-dasharray="5,3"/>
    <text x="${x + CARD_W/2}" y="${startY + CARD_H/2 + 5}" text-anchor="middle"
      font-family="${FONT}" font-size="14" fill="#8A95A8">empty</text>`;
    x += CARD_W + CARD_GAP;
  } else {
    d.bottom.forEach((val, i) => {
      svg += svgCard(x, startY, val, i, { color: CARD_COLORS[i % CARD_COLORS.length] });
      x += CARD_W + CARD_GAP;
    });
  }

  svg += `<text x="${bottomLabelX}" y="${startY - 10}" text-anchor="middle"
    font-family="${FONT}" font-size="14" font-weight="700" fill="#8A95A8">Bottom Half (Stack)</text>`;

  // Divider
  const divX = x + 5;
  svg += `
    <line x1="${divX + dividerW/2}" y1="${startY - 5}" x2="${divX + dividerW/2}" y2="${startY + CARD_H + 5}"
      stroke="#6B9CC4" stroke-width="2.5" stroke-dasharray="6,4"/>
    <text x="${divX + dividerW/2}" y="${startY + CARD_H + 22}" text-anchor="middle"
      font-family="${FONT}" font-size="14" font-weight="700" fill="#6B9CC4">middle</text>
  `;
  x += dividerW + 10;

  // Top half label
  const topLabelX = x + (topN > 0 ? (topN * (CARD_W + CARD_GAP) - CARD_GAP) / 2 : 30);

  // Top half cards
  if (topN === 0) {
    svg += `<rect x="${x}" y="${startY}" width="${CARD_W}" height="${CARD_H}" rx="4"
      fill="#F5F0E8" stroke="#ccc" stroke-width="1.5" stroke-dasharray="5,3"/>
    <text x="${x + CARD_W/2}" y="${startY + CARD_H/2 + 5}" text-anchor="middle"
      font-family="${FONT}" font-size="14" fill="#8A95A8">empty</text>`;
    x += CARD_W + CARD_GAP;
  } else {
    d.top.forEach((val, i) => {
      svg += svgCard(x, startY, val, i + 3, { color: CARD_COLORS[(i + 3) % CARD_COLORS.length] });
      x += CARD_W + CARD_GAP;
    });
  }

  svg += `<text x="${topLabelX}" y="${startY - 10}" text-anchor="middle"
    font-family="${FONT}" font-size="14" font-weight="700" fill="#8A95A8">Top Half (Deque)</text>`;

  // Note
  const noteY = startY + CARD_H + 40;
  const note = d.label ? `<text x="${totalW/2}" y="${noteY}" text-anchor="middle"
    font-family="${FONT}" font-size="15" fill="#6A7585">${d.label}</text>` : '';

  return `
    <div class="diagram-container" style="background:white;border:1px solid rgba(107,156,196,0.1);border-radius:12px;padding:12px 8px;">
      <svg viewBox="0 0 ${totalW} ${totalH + (d.label ? 20 : 0)}" width="100%" style="max-width:${totalW}px;">
        ${svgDefs()}
        ${svg}
        ${note}
      </svg>
    </div>
  `;
}

// ============================================
// STACK DIAGRAM - Vertical Pringles Can style
// ============================================
function renderStackDiagram(d) {
  const cells = d.cells || [];
  const n = cells.length;
  const canW = 120;
  const chipH = 36;
  const chipGap = 4;
  const canPadding = 12;
  const filledCount = cells.filter(v => v !== '' && v !== null).length;
  const canH = n * (chipH + chipGap) + canPadding * 2 + 20;
  const totalW = 320;
  const totalH = canH + 60;
  const canX = (totalW - canW) / 2;
  const canY = 25;

  // Can body (cylinder shape)
  let svg = `
    <ellipse cx="${canX + canW/2}" cy="${canY + canH}" rx="${canW/2}" ry="14"
      fill="#D8E8F4" stroke="#6B9CC4" stroke-width="1.5" opacity="0.5"/>
    <rect x="${canX}" y="${canY + 14}" width="${canW}" height="${canH - 14}"
      fill="white" stroke="none" rx="0"/>
    <line x1="${canX}" y1="${canY + 14}" x2="${canX}" y2="${canY + canH}"
      stroke="#6B9CC4" stroke-width="1.5"/>
    <line x1="${canX + canW}" y1="${canY + 14}" x2="${canX + canW}" y2="${canY + canH}"
      stroke="#6B9CC4" stroke-width="1.5"/>
    <ellipse cx="${canX + canW/2}" cy="${canY + 14}" rx="${canW/2}" ry="14"
      fill="#EBF3FA" stroke="#6B9CC4" stroke-width="1.5"/>
  `;

  // Chips inside can (bottom to top, index 0 at bottom)
  cells.forEach((val, i) => {
    const isEmpty = val === '' || val === null;
    const chipY = canY + canH - canPadding - (i + 1) * (chipH + chipGap);
    const chipX = canX + 10;
    const chipW = canW - 20;
    const color = isEmpty ? 'none' : CARD_COLORS[i % CARD_COLORS.length];
    const rotation = (i % 2 === 0) ? -1.5 : 1.2;
    const isHighlight = d.highlight && d.highlight.includes(i);

    if (isEmpty) {
      svg += `
        <ellipse cx="${canX + canW/2}" cy="${chipY + chipH/2}" rx="${chipW/2}" ry="${chipH/2 - 2}"
          fill="none" stroke="#ccc" stroke-width="1" stroke-dasharray="4,3"
          transform="rotate(${rotation}, ${canX + canW/2}, ${chipY + chipH/2})"/>
      `;
    } else {
      svg += `
        ${isHighlight ? `<ellipse cx="${canX + canW/2}" cy="${chipY + chipH/2}" rx="${chipW/2 + 4}" ry="${chipH/2 + 2}"
          fill="none" stroke="#D4B86A" stroke-width="2.5" opacity="0.5"
          transform="rotate(${rotation}, ${canX + canW/2}, ${chipY + chipH/2})"/>` : ''}
        <ellipse cx="${canX + canW/2}" cy="${chipY + chipH/2}" rx="${chipW/2}" ry="${chipH/2 - 2}"
          fill="${color}" stroke="#B0C0D0" stroke-width="1.2"
          filter="url(#paper-shadow)"
          transform="rotate(${rotation}, ${canX + canW/2}, ${chipY + chipH/2})"/>
        <text x="${canX + canW/2}" y="${chipY + chipH/2 + 6}" text-anchor="middle"
          font-family="${FONT}" font-size="20" font-weight="700" fill="#2A3040"
          transform="rotate(${rotation}, ${canX + canW/2}, ${chipY + chipH/2})">${val}</text>
      `;
    }

    // Index label on the right
    svg += `<text x="${canX + canW + 16}" y="${chipY + chipH/2 + 5}" text-anchor="start"
      font-family="${FONT}" font-size="13" fill="#8A95A8">${i}</text>`;
  });

  // Pointer
  if (d.pointer && d.pointer.index >= 0) {
    const pY = canY + canH - canPadding - (d.pointer.index + 1) * (chipH + chipGap) + chipH / 2;
    svg += `
      <path d="M ${canX - 8} ${pY} L ${canX - 20} ${pY - 6} L ${canX - 20} ${pY + 6} Z" fill="#6B9CC4"/>
      <text x="${canX - 24}" y="${pY + 5}" text-anchor="end"
        font-family="${FONT}" font-size="14" font-weight="700" fill="#6B9CC4">${d.pointer.label || 'top'}</text>
    `;
  }

  // Labels
  svg += `
    <text x="${canX + canW/2}" y="${totalH - 5}" text-anchor="middle"
      font-family="${FONT}" font-size="13" fill="#8A95A8">index 0 (bottom)</text>
    <text x="${canX + canW/2}" y="${canY + 6}" text-anchor="middle"
      font-family="${FONT}" font-size="13" fill="#8A95A8">top</text>
  `;

  return `
    <div class="diagram-container" style="background:white;border:1px solid rgba(107,156,196,0.1);border-radius:12px;padding:12px 8px;">
      <svg viewBox="0 0 ${totalW} ${totalH}" width="100%" style="max-width:${totalW}px;">
        ${svgDefs()}
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

    // Next arrow (blue) to next node or None
    if (i < n - 1) {
      const arrowStartX = x + nodeW;
      const arrowEndX = x + nodeW + arrowW;
      svg += `
        <line x1="${arrowStartX + 4}" y1="${y + nodeH/2}" x2="${arrowEndX - 4}" y2="${y + nodeH/2}"
          stroke="#6B9CC4" stroke-width="2" marker-end="url(#arrowhead)"/>
      `;
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

  // Labels on arrow ends
  svg += `
    <text x="${tipX - arrowTipW - 8}" y="${midY + 5}" text-anchor="end"
      font-family="${FONT}" font-size="14" font-weight="700" fill="#6B9CC4">OUT</text>
    <text x="${tailX + arrowTailW + 8}" y="${midY + 5}" text-anchor="start"
      font-family="${FONT}" font-size="14" font-weight="700" fill="#8CB89B">IN</text>
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

    // Lines to children (drawn first so they're behind circles)
    if (node.left) {
      const childX = x - spread;
      const childY = y + levelH;
      svg += `<line x1="${x}" y1="${y + nodeR}" x2="${childX}" y2="${childY - nodeR}"
        stroke="#6B9CC4" stroke-width="2"/>`;
      drawNode(node.left, childX, childY, spread / 2);
    }
    if (node.right) {
      const childX = x + spread;
      const childY = y + levelH;
      svg += `<line x1="${x}" y1="${y + nodeR}" x2="${childX}" y2="${childY - nodeR}"
        stroke="#6B9CC4" stroke-width="2"/>`;
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
