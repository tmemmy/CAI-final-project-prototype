const topicIcons = {
  stacks: `<svg viewBox="0 0 48 48" width="48" height="48" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <rect x="8" y="30" width="32" height="8" rx="2" stroke="#7C3AED" fill="#EDE9FE"/>
    <rect x="8" y="20" width="32" height="8" rx="2" stroke="#7C3AED" fill="#EDE9FE"/>
    <rect x="8" y="10" width="32" height="8" rx="2" stroke="#7C3AED" fill="#DDD6FE"/>
    <path d="M24 4 L24 10" stroke="#7C3AED" stroke-dasharray="2 2"/>
    <path d="M20 6 L24 2 L28 6" stroke="#7C3AED" fill="none"/>
  </svg>`,
  sorting: `<svg viewBox="0 0 48 48" width="48" height="48" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <rect x="4" y="32" width="8" height="12" rx="1" stroke="#F59E0B" fill="#FEF3C7"/>
    <rect x="14" y="24" width="8" height="20" rx="1" stroke="#F59E0B" fill="#FEF3C7"/>
    <rect x="24" y="16" width="8" height="28" rx="1" stroke="#F59E0B" fill="#FDE68A"/>
    <rect x="34" y="8" width="8" height="36" rx="1" stroke="#F59E0B" fill="#FDE68A"/>
    <path d="M6 28 C12 22, 16 26, 22 18" stroke="#F59E0B" stroke-dasharray="3 2" fill="none"/>
  </svg>`,
  recursion: `<svg viewBox="0 0 48 48" width="48" height="48" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <ellipse cx="24" cy="36" rx="18" ry="7" stroke="#10B981" fill="#D1FAE5"/>
    <ellipse cx="24" cy="28" rx="14" ry="6" stroke="#10B981" fill="#A7F3D0"/>
    <ellipse cx="24" cy="21" rx="10" ry="5" stroke="#10B981" fill="#6EE7B7"/>
    <ellipse cx="24" cy="15" rx="6" ry="4" stroke="#10B981" fill="#34D399"/>
    <circle cx="24" cy="10" r="3" stroke="#10B981" fill="#10B981"/>
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
  if (diagram.type === 'callstack') return renderCallStackDiagram(diagram);
  if (diagram.type === 'swap') return renderSwapDiagram(diagram);
  if (diagram.type === 'midstack') return renderMidStackDiagram(diagram);
  return '';
}

// ============================================
// SVG DIAGRAM RENDERERS - COLLAGE/CRAFT STYLE
// ============================================

const CARD_COLORS = ['#D6E4F0', '#FFFFFF', '#F0D6D6', '#D6F0D6', '#F0ECD6', '#E8D6F0'];
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
      fill="#F5E8A0" opacity="0.55" stroke="#E0D080" stroke-width="0.5"
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
      font-family="${FONT}" font-size="26" font-weight="700" fill="#2D2D2D"
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
      font-family="${FONT}" font-size="15" fill="#B5A898">${i}</text>`;
  });

  // Pointer arrow
  let pointer = '';
  if (hasPointer) {
    const px = startX + d.pointer.index * (CARD_W + CARD_GAP) + CARD_W / 2;
    const py = startY + CARD_H + 28;
    pointer = `
      <path d="M ${px} ${py} L ${px-6} ${py+10} L ${px+6} ${py+10} Z" fill="#C0785A"/>
      <text x="${px}" y="${py + 26}" text-anchor="middle"
        font-family="${FONT}" font-size="16" font-weight="700" fill="#C0785A">${d.pointer.label}</text>
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
        stroke="#C0785A" stroke-width="2" fill="none" stroke-linecap="round"/>
      <path d="M ${x2-12} ${startY - 10} L ${x2-5} ${startY - 5} L ${x2-14} ${startY - 2}" fill="#C0785A"/>
      <text x="${midX}" y="${startY - 15}" text-anchor="middle"
        font-family="${FONT}" font-size="14" font-weight="700" fill="#C0785A">swap!</text>
    `;
  }

  const svgH = totalH + (d.swapIndices ? 25 : 0);
  const yOffset = d.swapIndices ? 25 : 0;

  return `
    <div class="diagram-container" style="background:linear-gradient(135deg,#FFFCF7,#F5EDE0);border-radius:12px;padding:12px 8px;">
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
        fill="#F5E8A0" stroke="#E0D080" stroke-width="0.5"
        transform="rotate(${2 + i}, ${stickyX + 40}, ${y + 23})"
        filter="url(#paper-shadow)"/>
      <text x="${stickyX + 40}" y="${y + 28}" text-anchor="middle"
        font-family="${FONT}" font-size="12" fill="#6B5A4E"
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
        font-family="${FONT}" font-size="20" font-weight="700" fill="#2D2D2D"
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
    <div class="diagram-container" style="background:linear-gradient(135deg,#FFFCF7,#F5EDE0);border-radius:12px;padding:12px 8px;">
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
      font-family="${FONT}" font-size="14" fill="#B5A898">empty</text>`;
    x += CARD_W + CARD_GAP;
  } else {
    d.bottom.forEach((val, i) => {
      svg += svgCard(x, startY, val, i, { color: CARD_COLORS[i % CARD_COLORS.length] });
      x += CARD_W + CARD_GAP;
    });
  }

  svg += `<text x="${bottomLabelX}" y="${startY - 10}" text-anchor="middle"
    font-family="${FONT}" font-size="14" font-weight="700" fill="#B5A898">Bottom Half (Stack)</text>`;

  // Divider
  const divX = x + 5;
  svg += `
    <line x1="${divX + dividerW/2}" y1="${startY - 5}" x2="${divX + dividerW/2}" y2="${startY + CARD_H + 5}"
      stroke="#C0785A" stroke-width="2.5" stroke-dasharray="6,4"/>
    <text x="${divX + dividerW/2}" y="${startY + CARD_H + 22}" text-anchor="middle"
      font-family="${FONT}" font-size="14" font-weight="700" fill="#C0785A">middle</text>
  `;
  x += dividerW + 10;

  // Top half label
  const topLabelX = x + (topN > 0 ? (topN * (CARD_W + CARD_GAP) - CARD_GAP) / 2 : 30);

  // Top half cards
  if (topN === 0) {
    svg += `<rect x="${x}" y="${startY}" width="${CARD_W}" height="${CARD_H}" rx="4"
      fill="#F5F0E8" stroke="#ccc" stroke-width="1.5" stroke-dasharray="5,3"/>
    <text x="${x + CARD_W/2}" y="${startY + CARD_H/2 + 5}" text-anchor="middle"
      font-family="${FONT}" font-size="14" fill="#B5A898">empty</text>`;
    x += CARD_W + CARD_GAP;
  } else {
    d.top.forEach((val, i) => {
      svg += svgCard(x, startY, val, i + 3, { color: CARD_COLORS[(i + 3) % CARD_COLORS.length] });
      x += CARD_W + CARD_GAP;
    });
  }

  svg += `<text x="${topLabelX}" y="${startY - 10}" text-anchor="middle"
    font-family="${FONT}" font-size="14" font-weight="700" fill="#B5A898">Top Half (Deque)</text>`;

  // Note
  const noteY = startY + CARD_H + 40;
  const note = d.label ? `<text x="${totalW/2}" y="${noteY}" text-anchor="middle"
    font-family="${FONT}" font-size="15" fill="#6B5A4E">${d.label}</text>` : '';

  return `
    <div class="diagram-container" style="background:linear-gradient(135deg,#FFFCF7,#F5EDE0);border-radius:12px;padding:12px 8px;">
      <svg viewBox="0 0 ${totalW} ${totalH + (d.label ? 20 : 0)}" width="100%" style="max-width:${totalW}px;">
        ${svgDefs()}
        ${svg}
        ${note}
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
