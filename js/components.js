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
  return '';
}

function renderArrayDiagram(d) {
  const cells = d.cells.map((val, i) => {
    let classes = 'diagram-cell';
    if (val === '' || val === null) classes += ' empty';
    if (d.highlight && d.highlight.includes(i)) classes += ' highlight';
    if (d.swapIndices && d.swapIndices.includes(i)) {
      classes += i === d.swapIndices[0] ? ' swap-left' : ' swap-right';
    }
    return `<div class="${classes}">${val !== '' && val !== null ? val : ''}</div>`;
  }).join('');

  const indices = d.cells.map((_, i) =>
    `<div class="diagram-index">${i}</div>`
  ).join('');

  let pointerRow = '';
  if (d.pointer) {
    pointerRow = d.cells.map((_, i) =>
      `<div class="diagram-pointer-arrow">${i === d.pointer.index ? d.pointer.label : ''}</div>`
    ).join('');
  }

  let swapRow = '';
  if (d.swapIndices) {
    swapRow = `<div class="diagram-swap-row">&#8596; swap</div>`;
  }

  return `
    <div class="diagram-container">
      ${swapRow}
      <div class="diagram-array">${cells}</div>
      <div class="diagram-indices">${indices}</div>
      ${pointerRow ? `<div class="diagram-pointer">${pointerRow}</div>` : ''}
    </div>
  `;
}

function renderCallStackDiagram(d) {
  const frames = d.frames.map(f => {
    let classes = 'diagram-frame';
    if (f.isBase) classes += ' base-case';
    if (f.resolved) classes += ' resolved';
    return `
      <div class="${classes}">
        ${f.label}
        <span class="status">${f.status}</span>
      </div>
    `;
  }).join('');

  return `
    <div class="diagram-container">
      <div class="diagram-callstack">${frames}</div>
    </div>
  `;
}

function renderSwapDiagram(d) {
  return renderArrayDiagram({ ...d, type: 'array' });
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
