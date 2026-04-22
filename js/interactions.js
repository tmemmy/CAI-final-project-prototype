// js/interactions.js — Drag-and-drop interaction engine for tutorials
// Renders interactive zones where students drag cards into data structures

const FONT = "'Caveat', cursive";

// State for current interaction
let interactionState = null;
let onCompleteCallback = null;

/**
 * Render an interaction zone inside a step.
 * @param {Object} interaction - interaction config from tutorial JSON
 * @param {Function} onComplete - called when user completes the interaction correctly
 * @returns {string} HTML string for the interaction container
 */
export function renderInteraction(interaction, onComplete) {
  onCompleteCallback = onComplete;

  if (interaction.type === 'stack-push') return renderStackPush(interaction);
  if (interaction.type === 'stack-pop') return renderStackPop(interaction);
  if (interaction.type === 'stack-push-multi') return renderStackPushMulti(interaction);
  if (interaction.type === 'sliding-window') return renderSlidingWindow(interaction);
  if (interaction.type === 'draw-curve') return renderDrawCurve(interaction);
  if (interaction.type === 'queue-enqueue') return renderQueueEnqueue(interaction);
  if (interaction.type === 'queue-dequeue') return renderQueueDequeue(interaction);
  if (interaction.type === 'sorting-swap') return renderSortingSwap(interaction);
  return '';
}

/**
 * Bind drag-and-drop events after the interaction HTML is in the DOM.
 * Must be called after renderInteraction's HTML is inserted.
 */
export function bindInteractionEvents(interaction) {
  if (interaction.type === 'stack-push') bindStackPush(interaction);
  if (interaction.type === 'stack-pop') bindStackPop(interaction);
  if (interaction.type === 'stack-push-multi') bindStackPushMulti(interaction);
  if (interaction.type === 'sliding-window') bindSlidingWindow(interaction);
  if (interaction.type === 'draw-curve') bindDrawCurve(interaction);
  if (interaction.type === 'queue-enqueue') bindQueueEnqueue(interaction);
  if (interaction.type === 'queue-dequeue') bindQueueDequeue(interaction);
  if (interaction.type === 'sorting-swap') bindSortingSwap(interaction);
}

// ============================================
// STACK PUSH — Drag a single card into the stack
// ============================================

function renderStackPush(config) {
  // config: { cards: ["CALL"], stackContents: [], capacity: 5 }
  const cards = config.cards || [];
  const stack = config.stackContents || [];
  const capacity = config.capacity || 5;

  interactionState = {
    stack: [...stack],
    remaining: [...cards],
    expected: [...cards],
    capacity
  };

  return `
    <div class="interaction-zone" id="interaction-zone">
      <div class="interaction-label">Drag the card into the stack</div>
      <div class="interaction-layout">
        <div class="interaction-hand" id="card-source">
          ${cards.map((c, i) => `
            <div class="drag-card" draggable="true" data-value="${c}" id="drag-card-${i}">
              ${c}
            </div>
          `).join('')}
        </div>
        <div class="interaction-arrow">&#10132;</div>
        <div class="interaction-stack-area">
          ${renderInteractiveStack(stack, capacity, true)}
        </div>
      </div>
      <div class="interaction-feedback hidden" id="interaction-feedback"></div>
    </div>
  `;
}

function bindStackPush(config) {
  const cards = document.querySelectorAll('.drag-card');
  const dropTarget = document.getElementById('stack-drop-zone');
  if (!dropTarget) return;

  cards.forEach(card => {
    card.addEventListener('dragstart', handleDragStart);
    card.addEventListener('touchstart', handleTouchStart, { passive: false });
  });

  dropTarget.addEventListener('dragover', e => { e.preventDefault(); dropTarget.classList.add('drag-over'); });
  dropTarget.addEventListener('dragleave', () => dropTarget.classList.remove('drag-over'));
  dropTarget.addEventListener('drop', e => handleStackDrop(e, config));

  // Touch support for the drop zone
  document.addEventListener('touchmove', handleTouchMove, { passive: false });
  document.addEventListener('touchend', e => handleTouchEnd(e, config), { passive: false });
}

// ============================================
// STACK PUSH MULTI — Drag multiple cards in order
// ============================================

function renderStackPushMulti(config) {
  // config: { cards: ["CALL", "BACK", "UNDO"], stackContents: [], capacity: 5 }
  const cards = config.cards || [];
  const stack = config.stackContents || [];
  const capacity = config.capacity || 5;

  interactionState = {
    stack: [...stack],
    remaining: [...cards],
    expected: [...cards],
    nextIndex: 0,
    capacity
  };

  return `
    <div class="interaction-zone" id="interaction-zone">
      <div class="interaction-label">Drag the cards into the stack in order: <strong>${cards.join(', ')}</strong></div>
      <div class="interaction-layout">
        <div class="interaction-hand" id="card-source">
          ${cards.map((c, i) => `
            <div class="drag-card" draggable="true" data-value="${c}" data-index="${i}" id="drag-card-${i}">
              ${c}
            </div>
          `).join('')}
        </div>
        <div class="interaction-arrow">&#10132;</div>
        <div class="interaction-stack-area">
          ${renderInteractiveStack(stack, capacity, true)}
        </div>
      </div>
      <div class="interaction-feedback hidden" id="interaction-feedback"></div>
    </div>
  `;
}

function bindStackPushMulti(config) {
  const cards = document.querySelectorAll('.drag-card');
  const dropTarget = document.getElementById('stack-drop-zone');
  if (!dropTarget) return;

  cards.forEach(card => {
    card.addEventListener('dragstart', handleDragStart);
    card.addEventListener('touchstart', handleTouchStart, { passive: false });
  });

  dropTarget.addEventListener('dragover', e => { e.preventDefault(); dropTarget.classList.add('drag-over'); });
  dropTarget.addEventListener('dragleave', () => dropTarget.classList.remove('drag-over'));
  dropTarget.addEventListener('drop', e => handleStackMultiDrop(e, config));

  document.addEventListener('touchmove', handleTouchMove, { passive: false });
  document.addEventListener('touchend', e => handleTouchMultiEnd(e, config), { passive: false });
}

// ============================================
// STACK POP — Drag the top card out of the stack
// ============================================

function renderStackPop(config) {
  // config: { stackContents: ["CALL", "BACK", "UNDO"], expectedPop: "UNDO", capacity: 5 }
  const stack = config.stackContents || [];
  const capacity = config.capacity || 5;

  interactionState = {
    stack: [...stack],
    expectedPop: config.expectedPop,
    capacity,
    popped: false
  };

  return `
    <div class="interaction-zone" id="interaction-zone">
      <div class="interaction-label">Drag the top card OUT of the stack</div>
      <div class="interaction-layout">
        <div class="interaction-stack-area">
          ${renderInteractiveStack(stack, capacity, false, true)}
        </div>
        <div class="interaction-arrow">&#10132;</div>
        <div class="interaction-discard" id="discard-zone">
          <div class="discard-label">Drop here</div>
        </div>
      </div>
      <div class="interaction-feedback hidden" id="interaction-feedback"></div>
    </div>
  `;
}

function bindStackPop(config) {
  const topCard = document.querySelector('.stack-chip.is-top');
  const discardZone = document.getElementById('discard-zone');
  if (!topCard || !discardZone) return;

  topCard.draggable = true;
  topCard.addEventListener('dragstart', handleDragStart);
  topCard.addEventListener('touchstart', handleTouchStart, { passive: false });

  discardZone.addEventListener('dragover', e => { e.preventDefault(); discardZone.classList.add('drag-over'); });
  discardZone.addEventListener('dragleave', () => discardZone.classList.remove('drag-over'));
  discardZone.addEventListener('drop', e => handlePopDrop(e, config));

  document.addEventListener('touchmove', handleTouchMove, { passive: false });
  document.addEventListener('touchend', e => handlePopTouchEnd(e, config), { passive: false });
}

// ============================================
// SHARED: Interactive Stack SVG
// ============================================

function renderInteractiveStack(stackContents, capacity, showDropZone, showPopHandle) {
  const chipH = 36;
  const chipGap = 4;
  const canW = 120;
  const canPadding = 12;
  const canH = capacity * (chipH + chipGap) + canPadding * 2 + 20;
  const totalW = 200;
  const totalH = canH + 40;
  const canX = (totalW - canW) / 2;
  const canY = 15;

  const CARD_COLORS = ['#E8F0F8', '#FFFFFF', '#EDF5F0', '#F0EDF5', '#F8F3E8', '#F5EDF0'];

  let chipsSvg = '';
  stackContents.forEach((val, i) => {
    const chipY = canY + canH - canPadding - (i + 1) * (chipH + chipGap);
    const chipW = canW - 20;
    const chipX = canX + 10;
    const color = CARD_COLORS[i % CARD_COLORS.length];
    const rotation = (i % 2 === 0) ? -1.5 : 1.2;
    const isTop = i === stackContents.length - 1;

    chipsSvg += `
      <ellipse cx="${canX + canW/2}" cy="${chipY + chipH/2}" rx="${chipW/2}" ry="${chipH/2 - 2}"
        fill="${color}" stroke="#B0C0D0" stroke-width="1.2"
        transform="rotate(${rotation}, ${canX + canW/2}, ${chipY + chipH/2})"
        class="stack-chip-svg ${isTop && showPopHandle ? 'is-top-svg' : ''}"/>
      <text x="${canX + canW/2}" y="${chipY + chipH/2 + 6}" text-anchor="middle"
        font-family="${FONT}" font-size="16" font-weight="700" fill="#2A3040"
        transform="rotate(${rotation}, ${canX + canW/2}, ${chipY + chipH/2})">${val}</text>
    `;
  });

  // Drop zone indicator at the top of the stack
  const nextSlot = stackContents.length;
  const dropY = canY + canH - canPadding - (nextSlot + 1) * (chipH + chipGap);
  const dropZoneHtml = showDropZone && nextSlot < capacity ? `
    <rect x="${canX + 12}" y="${dropY}" width="${canW - 24}" height="${chipH}" rx="14"
      fill="none" stroke="#6B9CC4" stroke-width="1.5" stroke-dasharray="6,4" opacity="0.5"
      class="drop-hint-rect"/>
    <text x="${canX + canW/2}" y="${dropY + chipH/2 + 5}" text-anchor="middle"
      font-family="${FONT}" font-size="13" fill="#6B9CC4" opacity="0.6">drop here</text>
  ` : '';

  const stackHtml = `
    <div class="interactive-stack-container" style="position:relative;display:inline-block;">
      <svg viewBox="0 0 ${totalW} ${totalH}" width="${totalW}" height="${totalH}" style="display:block;">
        <defs>
          <filter id="i-shadow"><feDropShadow dx="1" dy="1.5" stdDeviation="1.5" flood-opacity="0.1"/></filter>
        </defs>
        <!-- Can body -->
        <ellipse cx="${canX + canW/2}" cy="${canY + canH}" rx="${canW/2}" ry="14"
          fill="#D8E8F4" stroke="#6B9CC4" stroke-width="1.5" opacity="0.5"/>
        <rect x="${canX}" y="${canY + 14}" width="${canW}" height="${canH - 14}"
          fill="white" stroke="none"/>
        <line x1="${canX}" y1="${canY + 14}" x2="${canX}" y2="${canY + canH}"
          stroke="#6B9CC4" stroke-width="1.5"/>
        <line x1="${canX + canW}" y1="${canY + 14}" x2="${canX + canW}" y2="${canY + canH}"
          stroke="#6B9CC4" stroke-width="1.5"/>
        <ellipse cx="${canX + canW/2}" cy="${canY + 14}" rx="${canW/2}" ry="14"
          fill="#EBF3FA" stroke="#6B9CC4" stroke-width="1.5"/>
        <!-- Chips -->
        ${chipsSvg}
        <!-- Drop zone hint -->
        ${dropZoneHtml}
        <!-- Labels -->
        <text x="${canX + canW/2}" y="${totalH - 2}" text-anchor="middle"
          font-family="${FONT}" font-size="12" fill="#8A95A8">index 0 (bottom)</text>
        <text x="${canX + canW/2}" y="${canY + 6}" text-anchor="middle"
          font-family="${FONT}" font-size="12" fill="#8A95A8">top</text>
      </svg>
      ${showDropZone ? `<div class="stack-drop-overlay" id="stack-drop-zone"></div>` : ''}
      ${showPopHandle ? renderPopHandles(stackContents, canX, canY, canH, canW, canPadding, chipH, chipGap) : ''}
    </div>
  `;

  return stackHtml;
}

function renderPopHandles(stackContents, canX, canY, canH, canW, canPadding, chipH, chipGap) {
  if (stackContents.length === 0) return '';
  const topIndex = stackContents.length - 1;
  const chipY = canY + canH - canPadding - (topIndex + 1) * (chipH + chipGap);
  const val = stackContents[topIndex];

  return `
    <div class="stack-chip is-top" draggable="true" data-value="${val}"
      style="position:absolute; left:${canX + 14}px; top:${chipY - 2}px; width:${canW - 28}px; height:${chipH + 4}px;">
    </div>
  `;
}

// ============================================
// DRAG EVENT HANDLERS
// ============================================

let dragData = null;
let touchClone = null;
let touchStartCard = null;

function handleDragStart(e) {
  dragData = e.target.dataset.value;
  e.dataTransfer.setData('text/plain', dragData);
  e.target.classList.add('dragging');
  setTimeout(() => e.target.style.opacity = '0.4', 0);
}

function handleTouchStart(e) {
  e.preventDefault();
  const card = e.target.closest('[draggable]');
  if (!card) return;

  dragData = card.dataset.value;
  touchStartCard = card;
  card.classList.add('dragging');

  // Create a visual clone that follows the finger
  touchClone = card.cloneNode(true);
  touchClone.classList.add('touch-clone');
  touchClone.style.cssText = `
    position: fixed; z-index: 1000; pointer-events: none;
    width: ${card.offsetWidth}px; opacity: 0.85;
    transform: rotate(-3deg) scale(1.05);
  `;
  document.body.appendChild(touchClone);

  const touch = e.touches[0];
  touchClone.style.left = (touch.clientX - card.offsetWidth / 2) + 'px';
  touchClone.style.top = (touch.clientY - 20) + 'px';
}

function handleTouchMove(e) {
  if (!touchClone) return;
  e.preventDefault();
  const touch = e.touches[0];
  touchClone.style.left = (touch.clientX - touchClone.offsetWidth / 2) + 'px';
  touchClone.style.top = (touch.clientY - 20) + 'px';

  // Highlight drop targets under finger
  const el = document.elementFromPoint(touch.clientX, touch.clientY);
  document.querySelectorAll('.drag-over').forEach(d => d.classList.remove('drag-over'));
  if (el) {
    const zone = el.closest('#stack-drop-zone, #discard-zone');
    if (zone) zone.classList.add('drag-over');
  }
}

function handleTouchEnd(e, config) {
  if (!touchClone) return;
  const touch = e.changedTouches[0];
  const el = document.elementFromPoint(touch.clientX, touch.clientY);
  cleanupTouch();

  if (el) {
    const zone = el.closest('#stack-drop-zone');
    if (zone) {
      processStackPush(dragData, config);
    }
  }
}

function handleTouchMultiEnd(e, config) {
  if (!touchClone) return;
  const touch = e.changedTouches[0];
  const el = document.elementFromPoint(touch.clientX, touch.clientY);
  cleanupTouch();

  if (el) {
    const zone = el.closest('#stack-drop-zone');
    if (zone) {
      processStackMultiPush(dragData, config);
    }
  }
}

function handlePopTouchEnd(e, config) {
  if (!touchClone) return;
  const touch = e.changedTouches[0];
  const el = document.elementFromPoint(touch.clientX, touch.clientY);
  cleanupTouch();

  if (el) {
    const zone = el.closest('#discard-zone');
    if (zone) {
      processStackPop(dragData, config);
    }
  }
}

function cleanupTouch() {
  if (touchClone) {
    touchClone.remove();
    touchClone = null;
  }
  if (touchStartCard) {
    touchStartCard.classList.remove('dragging');
    touchStartCard = null;
  }
  document.querySelectorAll('.drag-over').forEach(d => d.classList.remove('drag-over'));
  dragData = null;
}

// ============================================
// DROP HANDLERS — Process the drop and update state
// ============================================

function handleStackDrop(e, config) {
  e.preventDefault();
  const val = e.dataTransfer.getData('text/plain');
  document.querySelectorAll('.drag-over').forEach(d => d.classList.remove('drag-over'));
  document.querySelectorAll('.dragging').forEach(d => { d.classList.remove('dragging'); d.style.opacity = '1'; });
  processStackPush(val, config);
}

function handleStackMultiDrop(e, config) {
  e.preventDefault();
  const val = e.dataTransfer.getData('text/plain');
  document.querySelectorAll('.drag-over').forEach(d => d.classList.remove('drag-over'));
  document.querySelectorAll('.dragging').forEach(d => { d.classList.remove('dragging'); d.style.opacity = '1'; });
  processStackMultiPush(val, config);
}

function handlePopDrop(e, config) {
  e.preventDefault();
  const val = e.dataTransfer.getData('text/plain');
  document.querySelectorAll('.drag-over').forEach(d => d.classList.remove('drag-over'));
  processStackPop(val, config);
}

function processStackPush(val, config) {
  if (!interactionState) return;
  const expected = interactionState.expected[0];

  if (val === expected) {
    interactionState.stack.push(val);
    interactionState.remaining.shift();
    interactionState.expected.shift();

    // Remove the card from the hand
    const card = document.querySelector(`.drag-card[data-value="${val}"]`);
    if (card) {
      card.classList.add('card-placed');
      setTimeout(() => card.remove(), 300);
    }

    // Re-render the stack
    refreshInteractiveStack();
    showFeedback('success', `Pushed "${val}" onto the stack!`);

    if (interactionState.remaining.length === 0) {
      setTimeout(() => {
        showFeedback('complete', 'You got it! The stack is set up correctly.');
        if (onCompleteCallback) onCompleteCallback();
      }, 600);
    }
  } else {
    showFeedback('error', `Good try! Drag "${expected}" first, then try again.`);
  }
}

function processStackMultiPush(val, config) {
  if (!interactionState) return;
  const expected = interactionState.expected[interactionState.nextIndex];

  if (val === expected) {
    interactionState.stack.push(val);
    interactionState.nextIndex++;

    const card = document.querySelector(`.drag-card[data-value="${val}"]`);
    if (card) {
      card.classList.add('card-placed');
      setTimeout(() => card.remove(), 300);
    }

    refreshInteractiveStack();
    showFeedback('success', `Pushed "${val}" onto the stack!`);

    if (interactionState.nextIndex >= interactionState.expected.length) {
      setTimeout(() => {
        showFeedback('complete', 'All cards pushed! Notice the order: the last card you pushed is on top.');
        if (onCompleteCallback) onCompleteCallback();
      }, 600);
    }
  } else {
    showFeedback('error', `Good try! Push "${expected}" first, then try again.`);
  }
}

function processStackPop(val, config) {
  if (!interactionState || interactionState.popped) return;

  if (val === interactionState.expectedPop) {
    interactionState.popped = true;
    interactionState.stack.pop();

    // Animate the top chip out
    const topChip = document.querySelector('.stack-chip.is-top');
    if (topChip) {
      topChip.classList.add('card-placed');
      setTimeout(() => topChip.remove(), 300);
    }

    refreshInteractiveStack(false);
    showFeedback('complete', `You popped "${val}"! It was the last card pushed, so it came out first. That's LIFO.`);
    if (onCompleteCallback) onCompleteCallback();
  } else {
    showFeedback('error', 'Good try! You can only remove the TOP card from a stack. Try again.');
  }
}

function refreshInteractiveStack(showDrop = true, animatePush = true) {
  const stackArea = document.querySelector('.interaction-stack-area');
  if (!stackArea || !interactionState) return;

  const hasRemaining = interactionState.remaining && interactionState.remaining.length > 0;
  const needsMulti = interactionState.nextIndex !== undefined;

  stackArea.innerHTML = renderInteractiveStack(
    interactionState.stack,
    interactionState.capacity,
    showDrop && hasRemaining,
    false
  );

  // Animate the top chip sliding in
  if (animatePush && interactionState.stack.length > 0) {
    const allChips = stackArea.querySelectorAll('.stack-chip-svg');
    const topChip = allChips[allChips.length - 1];
    if (topChip) topChip.classList.add('stack-chip-push');
  }

  // Rebind drop zone with the correct handler
  const newDrop = document.getElementById('stack-drop-zone');
  if (newDrop) {
    newDrop.addEventListener('dragover', e => { e.preventDefault(); newDrop.classList.add('drag-over'); });
    newDrop.addEventListener('dragleave', () => newDrop.classList.remove('drag-over'));
    newDrop.addEventListener('drop', e => {
      e.preventDefault();
      const val = e.dataTransfer.getData('text/plain');
      document.querySelectorAll('.drag-over').forEach(d => d.classList.remove('drag-over'));
      document.querySelectorAll('.dragging').forEach(d => { d.classList.remove('dragging'); d.style.opacity = '1'; });
      if (needsMulti) {
        processStackMultiPush(val);
      } else {
        processStackPush(val);
      }
    });
  }
}

function showFeedback(type, message) {
  const el = document.getElementById('interaction-feedback');
  if (!el) return;
  el.className = `interaction-feedback feedback-${type}`;
  el.textContent = message;
  el.classList.remove('hidden');

  if (type !== 'complete') {
    setTimeout(() => el.classList.add('hidden'), 2500);
  }
}

// ============================================
// SLIDING WINDOW — Slide a frame across an array
// ============================================

function renderSlidingWindow(config) {
  // config: { cells: [2,1,5,...], windowSize: 3, goal: "max" }
  const cells = config.cells || [];
  const k = config.windowSize || 3;
  const goal = config.goal || 'max'; // "max" or "min"
  const n = cells.length;
  const totalSlides = n - k;

  // Compute first window sum
  let firstSum = 0;
  for (let i = 0; i < k; i++) firstSum += cells[i];

  interactionState = {
    type: 'sliding-window',
    cells,
    k,
    goal,
    pos: 0,            // current left edge of window
    windowSum: firstSum,
    bestSum: firstSum,
    bestPos: 0,
    totalSlides,
    slidesCompleted: 0,
    history: [{ pos: 0, sum: firstSum, left: null, right: null }]
  };

  const cellsHtml = cells.map((val, i) => `
    <div class="sw-cell" data-index="${i}">
      <div class="sw-cell-value">${val}</div>
      <div class="sw-cell-index">${i}</div>
    </div>
  `).join('');

  return `
    <div class="interaction-zone" id="interaction-zone">
      <div class="interaction-label">Slide the window across the array. Find the ${goal === 'max' ? 'highest' : 'lowest'} sum!</div>
      <div class="sw-container">
        <div class="sw-array" id="sw-array">
          ${cellsHtml}
          <div class="sw-frame" id="sw-frame" style="width: calc(${k} * var(--sw-cell-size) + ${k - 1} * var(--sw-cell-gap)); left: 0;">
            <div class="sw-frame-label">window</div>
          </div>
        </div>
        <div class="sw-controls">
          <button class="btn btn-ghost sw-btn" id="sw-btn-left" disabled>&larr;</button>
          <button class="btn btn-primary sw-btn" id="sw-btn-right">&rarr; Slide</button>
        </div>
        <div class="sw-info" id="sw-info">
          <div class="sw-info-row">
            <span class="sw-info-label">Window:</span>
            <span class="sw-info-value" id="sw-window-cards">[${cells.slice(0, k).join(', ')}]</span>
          </div>
          <div class="sw-info-row">
            <span class="sw-info-label">Window sum:</span>
            <span class="sw-info-value" id="sw-window-sum">${firstSum}</span>
          </div>
          <div class="sw-info-row sw-info-change hidden" id="sw-change-row">
            <span class="sw-info-value" id="sw-change-text"></span>
          </div>
          <div class="sw-info-row sw-info-best">
            <span class="sw-info-label">Best sum:</span>
            <span class="sw-info-value" id="sw-best-sum">${firstSum}</span>
            <span class="sw-info-detail" id="sw-best-detail">at [0..${k - 1}]</span>
          </div>
          <div class="sw-progress">
            <span id="sw-slide-count">0</span> / ${totalSlides} slides
          </div>
        </div>
      </div>
      <div class="interaction-feedback hidden" id="interaction-feedback"></div>
    </div>
  `;
}

function bindSlidingWindow(config) {
  const btnRight = document.getElementById('sw-btn-right');
  const btnLeft = document.getElementById('sw-btn-left');
  if (!btnRight) return;

  btnRight.addEventListener('click', () => slidingWindowSlide(1));
  btnLeft.addEventListener('click', () => slidingWindowSlide(-1));

  // Touch swipe support on the array
  const array = document.getElementById('sw-array');
  if (array) {
    let startX = 0;
    array.addEventListener('touchstart', e => {
      startX = e.touches[0].clientX;
    }, { passive: true });
    array.addEventListener('touchend', e => {
      const dx = e.changedTouches[0].clientX - startX;
      if (Math.abs(dx) > 30) {
        slidingWindowSlide(dx < 0 ? 1 : -1);
      }
    }, { passive: true });
  }

  updateSlidingWindowVisuals();
}

function slidingWindowSlide(direction) {
  const s = interactionState;
  if (!s || s.type !== 'sliding-window') return;

  const newPos = s.pos + direction;
  if (newPos < 0 || newPos + s.k > s.cells.length) return;

  const oldPos = s.pos;
  s.pos = newPos;

  if (direction > 0) {
    // Sliding right: subtract left edge, add new right edge
    const leaving = s.cells[oldPos];
    const entering = s.cells[newPos + s.k - 1];
    s.windowSum = s.windowSum - leaving + entering;
    s.slidesCompleted = Math.max(s.slidesCompleted, newPos);

    // Update change text
    const changeEl = document.getElementById('sw-change-text');
    const changeRow = document.getElementById('sw-change-row');
    if (changeEl && changeRow) {
      changeEl.innerHTML = `<span class="sw-leaving">&minus;${leaving}</span> (left) &nbsp; <span class="sw-entering">+${entering}</span> (entered)`;
      changeRow.classList.remove('hidden');
    }
  } else {
    // Sliding left: recalculate
    let sum = 0;
    for (let i = newPos; i < newPos + s.k; i++) sum += s.cells[i];
    s.windowSum = sum;

    const changeRow = document.getElementById('sw-change-row');
    if (changeRow) changeRow.classList.add('hidden');
  }

  // Check best
  const compare = s.goal === 'max' ? s.windowSum > s.bestSum : s.windowSum < s.bestSum;
  let newBest = false;
  if (compare) {
    s.bestSum = s.windowSum;
    s.bestPos = s.pos;
    newBest = true;
  }

  updateSlidingWindowVisuals();

  if (newBest) {
    showFeedback('success', `New best! Sum = ${s.bestSum} at indices [${s.pos}..${s.pos + s.k - 1}]`);
  }

  // Check completion: must have slid to the very end
  if (s.pos === s.totalSlides) {
    setTimeout(() => {
      const bestCards = s.cells.slice(s.bestPos, s.bestPos + s.k);
      showFeedback('complete', `Done! Best window: [${bestCards.join(', ')}] with sum ${s.bestSum} at indices [${s.bestPos}..${s.bestPos + s.k - 1}].`);
      if (onCompleteCallback) onCompleteCallback();
    }, 400);
  }
}

function updateSlidingWindowVisuals() {
  const s = interactionState;
  if (!s || s.type !== 'sliding-window') return;

  // Highlight cells in window
  document.querySelectorAll('.sw-cell').forEach(cell => {
    const idx = parseInt(cell.dataset.index);
    cell.classList.toggle('sw-in-window', idx >= s.pos && idx < s.pos + s.k);
    cell.classList.toggle('sw-outside', idx < s.pos || idx >= s.pos + s.k);
  });

  // Move frame
  const frame = document.getElementById('sw-frame');
  if (frame) {
    frame.style.left = `calc(${s.pos} * (var(--sw-cell-size) + var(--sw-cell-gap)))`;
  }

  // Update info
  const windowCards = s.cells.slice(s.pos, s.pos + s.k);
  const cardsEl = document.getElementById('sw-window-cards');
  const sumEl = document.getElementById('sw-window-sum');
  const bestEl = document.getElementById('sw-best-sum');
  const bestDetail = document.getElementById('sw-best-detail');
  const countEl = document.getElementById('sw-slide-count');

  if (cardsEl) cardsEl.textContent = `[${windowCards.join(', ')}]`;
  if (sumEl) sumEl.textContent = s.windowSum;
  if (bestEl) bestEl.textContent = s.bestSum;
  if (bestDetail) bestDetail.textContent = `at [${s.bestPos}..${s.bestPos + s.k - 1}]`;
  if (countEl) countEl.textContent = Math.max(s.slidesCompleted, s.pos);

  // Button states
  const btnLeft = document.getElementById('sw-btn-left');
  const btnRight = document.getElementById('sw-btn-right');
  if (btnLeft) btnLeft.disabled = s.pos <= 0;
  if (btnRight) btnRight.disabled = s.pos + s.k >= s.cells.length;
}

// ============================================
// DRAW CURVE — Interactive Big-O curve drawing practice
// ============================================

const DC_CURVES = [
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

const DC_PAD = { l: 50, r: 80, t: 24, b: 42 };
const DC_W = 520, DC_H = 320;
const DC_GW = DC_W - DC_PAD.l - DC_PAD.r;
const DC_GH = DC_H - DC_PAD.t - DC_PAD.b;
const DC_NMAX = 15, DC_YMAX = 55;

function renderDrawCurve(config) {
  // config: {} (no special config needed)
  const order = shuffle([0, 1, 2, 3, 4, 5, 6, 7, 8]);

  interactionState = {
    type: 'draw-curve',
    order,
    currentIdx: 0,
    completed: [],
    drawing: false,
    drawnPoints: [],
  };

  const graphSvg = dcBuildGraph([], -1);
  const firstCurve = DC_CURVES[order[0]];

  return `
    <div class="interaction-zone dc-zone" id="interaction-zone">
      <div class="dc-prompt" id="dc-prompt">
        Draw the curve for <strong style="color:${firstCurve.color}">${firstCurve.label}</strong>
      </div>
      <div class="dc-graph-wrap">
        <svg id="dc-svg" viewBox="0 0 ${DC_W} ${DC_H}" width="100%"
          style="max-width:${DC_W}px;display:block;margin:0 auto;touch-action:none;cursor:crosshair;">
          ${graphSvg}
          <polyline id="dc-drawing" points="" fill="none" stroke="${firstCurve.color}"
            stroke-width="3" stroke-linecap="round" stroke-linejoin="round" opacity="0.8"/>
        </svg>
      </div>
      <div class="dc-controls">
        <button class="btn btn-ghost dc-btn" id="dc-clear-btn">Clear</button>
        <button class="btn btn-primary dc-btn" id="dc-check-btn">Check my curve</button>
      </div>
      <div class="dc-progress" id="dc-progress">0 / 9 curves drawn</div>
      <div class="interaction-feedback hidden" id="interaction-feedback"></div>
    </div>
  `;
}

function bindDrawCurve(config) {
  const svg = document.getElementById('dc-svg');
  if (!svg) return;

  svg.addEventListener('mousedown', dcStartDraw);
  svg.addEventListener('mousemove', dcMoveDraw);
  svg.addEventListener('mouseup', dcEndDraw);
  svg.addEventListener('mouseleave', dcEndDraw);
  svg.addEventListener('touchstart', dcTouchStart, { passive: false });
  svg.addEventListener('touchmove', dcTouchMove, { passive: false });
  svg.addEventListener('touchend', dcEndDraw);

  document.getElementById('dc-clear-btn').addEventListener('click', dcClear);
  document.getElementById('dc-check-btn').addEventListener('click', dcCheck);
}

function dcSvgPoint(e) {
  const svg = document.getElementById('dc-svg');
  const rect = svg.getBoundingClientRect();
  const clientX = e.touches ? e.touches[0].clientX : e.clientX;
  const clientY = e.touches ? e.touches[0].clientY : e.clientY;
  const scaleX = DC_W / rect.width;
  const scaleY = DC_H / rect.height;
  return {
    x: (clientX - rect.left) * scaleX,
    y: (clientY - rect.top) * scaleY,
  };
}

function dcStartDraw(e) {
  if (!interactionState || interactionState.type !== 'draw-curve') return;
  interactionState.drawing = true;
  interactionState.drawnPoints = [];
  const p = dcSvgPoint(e);
  // Clamp to graph area
  if (p.x >= DC_PAD.l && p.x <= DC_PAD.l + DC_GW && p.y >= DC_PAD.t && p.y <= DC_PAD.t + DC_GH) {
    interactionState.drawnPoints.push(p);
    dcUpdateDrawing();
  }
}

function dcTouchStart(e) {
  e.preventDefault();
  dcStartDraw(e);
}

function dcMoveDraw(e) {
  if (!interactionState || !interactionState.drawing) return;
  const p = dcSvgPoint(e);
  if (p.x >= DC_PAD.l && p.x <= DC_PAD.l + DC_GW && p.y >= DC_PAD.t && p.y <= DC_PAD.t + DC_GH) {
    interactionState.drawnPoints.push(p);
    dcUpdateDrawing();
  }
}

function dcTouchMove(e) {
  e.preventDefault();
  dcMoveDraw(e);
}

function dcEndDraw() {
  if (interactionState) interactionState.drawing = false;
}

function dcUpdateDrawing() {
  const line = document.getElementById('dc-drawing');
  if (!line || !interactionState) return;
  const pts = interactionState.drawnPoints.map(p => `${p.x},${p.y}`).join(' ');
  line.setAttribute('points', pts);
}

function dcClear() {
  if (!interactionState || interactionState.type !== 'draw-curve') return;
  interactionState.drawnPoints = [];
  dcUpdateDrawing();
}

function dcCheck() {
  const s = interactionState;
  if (!s || s.type !== 'draw-curve') return;
  if (s.drawnPoints.length < 5) {
    showFeedback('error', 'Draw a curve across the graph first!');
    return;
  }

  const targetIdx = s.order[s.currentIdx];
  const target = DC_CURVES[targetIdx];
  const isCorrect = dcValidateCurve(s.drawnPoints, targetIdx);

  if (isCorrect) {
    s.completed.push(targetIdx);
    s.currentIdx++;
    s.drawnPoints = [];

    // Redraw graph with completed curves
    dcRedrawGraph();

    if (s.currentIdx >= s.order.length) {
      showFeedback('complete', 'You drew all 8 growth curves! You can see how they compare on the graph.');
      if (onCompleteCallback) onCompleteCallback();
    } else {
      const next = DC_CURVES[s.order[s.currentIdx]];
      document.getElementById('dc-prompt').innerHTML =
        `Draw the curve for <strong style="color:${next.color}">${next.label}</strong>`;
      const line = document.getElementById('dc-drawing');
      if (line) line.setAttribute('stroke', next.color);
      showFeedback('success', `Correct! That's ${target.label}.`);
      document.getElementById('dc-progress').textContent = `${s.completed.length} / 9 curves drawn`;
    }
  } else {
    showFeedback('error', `Good try! Think about how ${target.label} grows. Does it curve up, stay flat, or grow slowly? Try again.`);
    s.drawnPoints = [];
    dcUpdateDrawing();
  }
}

function dcValidateCurve(points, targetIdx) {
  // Sample drawn curve at 5 positions across the graph
  const samples = [0.1, 0.3, 0.5, 0.7, 0.9];
  const drawnYs = samples.map(frac => {
    const targetX = DC_PAD.l + frac * DC_GW;
    // Find closest drawn point to this x
    let closest = points[0];
    let minDist = Infinity;
    points.forEach(p => {
      const d = Math.abs(p.x - targetX);
      if (d < minDist) { minDist = d; closest = p; }
    });
    // Normalize y: 0 = bottom of graph, 1 = top
    return 1 - (closest.y - DC_PAD.t) / DC_GH;
  });

  // Get expected values at same positions
  const expectedYs = samples.map(frac => {
    const n = 1 + frac * (DC_NMAX - 1);
    const val = DC_CURVES[targetIdx].fn(n);
    return Math.min(val / DC_YMAX, 1);
  });

  // Classify both curves by shape signature
  const drawnShape = classifyShape(drawnYs);
  const expectedShape = classifyShape(expectedYs);

  return drawnShape === expectedShape;
}

function classifyShape(ys) {
  // Classify a curve's shape based on sampled y values (0-1 normalized)
  const height = Math.max(...ys);
  const growth = ys[4] - ys[0]; // total rise
  const mid = ys[2];

  // Flat: very little growth
  if (growth < 0.08 && height < 0.15) return 'flat';

  // Check curvature: compare midpoint to linear interpolation
  const linearMid = (ys[0] + ys[4]) / 2;
  const curvature = mid - linearMid; // positive = concave down (sublinear), negative = concave up (superlinear)

  // Extreme: goes off the chart early
  if (ys[3] > 0.95 && ys[1] < 0.15) return 'extreme'; // 2^n or n!
  if (ys[4] > 0.95 && ys[2] < 0.3) return 'steep-up'; // n²

  // Concave down (sublinear)
  if (curvature > 0.05) {
    // Distinguish log, sqrt, and sqrt*log by height
    if (ys[4] > 0.35) return 'sqrtnlogn';  // √n·log n: highest sublinear
    if (ys[1] > 0.12) return 'sqrt';        // √n: mid sublinear
    return 'log';                            // log n: lowest sublinear
  }

  // Roughly linear
  if (Math.abs(curvature) <= 0.05 && growth > 0.15) {
    // Distinguish n from n log n: n log n should be steeper at the end
    const endAccel = (ys[4] - ys[3]) - (ys[1] - ys[0]);
    return endAccel > 0.04 ? 'nlogn' : 'linear';
  }

  // Concave up (superlinear)
  if (curvature < -0.05) {
    if (ys[4] > 0.9) return 'steep-up';
    return 'nlogn';
  }

  return 'linear'; // fallback
}

function dcRedrawGraph() {
  const s = interactionState;
  const svg = document.getElementById('dc-svg');
  if (!svg || !s) return;

  const graphSvg = dcBuildGraph(s.completed, -1);
  const nextColor = s.currentIdx < s.order.length ? DC_CURVES[s.order[s.currentIdx]].color : '#999';

  svg.innerHTML = graphSvg + `
    <polyline id="dc-drawing" points="" fill="none" stroke="${nextColor}"
      stroke-width="3" stroke-linecap="round" stroke-linejoin="round" opacity="0.8"/>
  `;
}

function dcBuildGraph(completedIndices, highlightIdx) {
  let svg = '';

  // Grid
  for (let yi = 0; yi <= 5; yi++) {
    const gy = DC_PAD.t + DC_GH - (yi / 5) * DC_GH;
    const val = Math.round(yi * DC_YMAX / 5);
    svg += `<line x1="${DC_PAD.l}" y1="${gy}" x2="${DC_PAD.l + DC_GW}" y2="${gy}"
      stroke="#E8E4DC" stroke-width="0.8"/>`;
    svg += `<text x="${DC_PAD.l - 6}" y="${gy + 4}" text-anchor="end"
      font-family="'Caveat', cursive" font-size="11" fill="#8A95A8">${val}</text>`;
  }
  for (let xi = 0; xi <= 5; xi++) {
    const gx = DC_PAD.l + (xi / 5) * DC_GW;
    const val = Math.round(xi * DC_NMAX / 5);
    svg += `<line x1="${gx}" y1="${DC_PAD.t}" x2="${gx}" y2="${DC_PAD.t + DC_GH}"
      stroke="#E8E4DC" stroke-width="0.8"/>`;
    svg += `<text x="${gx}" y="${DC_PAD.t + DC_GH + 16}" text-anchor="middle"
      font-family="'Caveat', cursive" font-size="11" fill="#8A95A8">${val}</text>`;
  }

  // Axes
  svg += `<line x1="${DC_PAD.l}" y1="${DC_PAD.t}" x2="${DC_PAD.l}" y2="${DC_PAD.t + DC_GH}"
    stroke="#2A3040" stroke-width="1.5"/>`;
  svg += `<line x1="${DC_PAD.l}" y1="${DC_PAD.t + DC_GH}" x2="${DC_PAD.l + DC_GW}" y2="${DC_PAD.t + DC_GH}"
    stroke="#2A3040" stroke-width="1.5"/>`;
  svg += `<text x="${DC_PAD.l + DC_GW/2}" y="${DC_H - 2}" text-anchor="middle"
    font-family="'Caveat', cursive" font-size="13" fill="#6A7585">input size (n)</text>`;
  svg += `<text x="12" y="${DC_PAD.t + DC_GH/2}" text-anchor="middle"
    font-family="'Caveat', cursive" font-size="13" fill="#6A7585"
    transform="rotate(-90, 12, ${DC_PAD.t + DC_GH/2})">operations</text>`;

  // Completed curves
  completedIndices.forEach(ci => {
    const c = DC_CURVES[ci];
    let pts = [];
    for (let n = 1; n <= DC_NMAX; n += 0.5) {
      const val = c.fn(n);
      if (val > DC_YMAX) {
        const px = DC_PAD.l + ((n - 1) / (DC_NMAX - 1)) * DC_GW;
        pts.push(`${px},${DC_PAD.t}`);
        break;
      }
      const px = DC_PAD.l + ((n - 1) / (DC_NMAX - 1)) * DC_GW;
      const py = DC_PAD.t + DC_GH - (val / DC_YMAX) * DC_GH;
      pts.push(`${px},${py}`);
    }
    if (pts.length > 0) {
      svg += `<polyline points="${pts.join(' ')}" fill="none"
        stroke="${c.color}" stroke-width="2.5" stroke-linecap="round" opacity="0.7"/>`;
    }

    // End label (in right margin)
    const lastVal = c.fn(DC_NMAX);
    const lblX = DC_PAD.l + DC_GW + 8;
    if (lastVal > DC_YMAX) {
      let exitN = DC_NMAX;
      for (let nn = 1; nn <= DC_NMAX; nn += 0.5) {
        if (c.fn(nn) >= DC_YMAX) { exitN = nn; break; }
      }
      const exitX = DC_PAD.l + ((exitN - 1) / (DC_NMAX - 1)) * DC_GW;
      svg += `<text x="${Math.min(exitX + 8, lblX)}" y="${DC_PAD.t + 14}" text-anchor="start"
        font-family="'Caveat', cursive" font-size="11" font-weight="700" fill="${c.color}" opacity="0.7">${c.label} \u2191</text>`;
    } else {
      const ey = DC_PAD.t + DC_GH - (lastVal / DC_YMAX) * DC_GH;
      svg += `<text x="${lblX}" y="${Math.max(DC_PAD.t + 10, Math.min(DC_PAD.t + DC_GH - 6, ey)) + 4}" text-anchor="start"
        font-family="'Caveat', cursive" font-size="11" font-weight="700" fill="${c.color}" opacity="0.7">${c.label}</text>`;
    }
  });

  return svg;
}

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// ============================================
// QUEUE ENQUEUE — Drag cards into queue from the right
// ============================================

function renderQueueEnqueue(config) {
  const cards = config.cards || [];
  const cells = config.cells || new Array(config.capacity || 4).fill('');
  const capacity = cells.length;
  const front = config.front ?? 0;
  const size = config.size ?? 0;

  interactionState = {
    type: 'queue-enqueue',
    cells: [...cells],
    remaining: [...cards],
    expected: [...cards],
    front,
    size,
    capacity
  };

  const cellsHtml = cells.map((val, i) => `
    <div class="q-cell" data-index="${i}" id="q-cell-${i}">
      <div class="q-cell-value">${val}</div>
      <div class="q-cell-index">${i}</div>
    </div>
  `).join('');

  return `
    <div class="interaction-zone" id="interaction-zone">
      <div class="interaction-label">Drag each card into the queue at the IN end</div>
      <div class="q-container">
        <div class="q-label q-out-label">OUT</div>
        <div class="q-array" id="q-array">
          ${cellsHtml}
          <div class="q-drop-overlay" id="q-drop-zone"></div>
        </div>
        <div class="q-label q-in-label">IN</div>
        <div class="q-hand" id="card-source">
          ${cards.map((c, i) => `
            <div class="drag-card" draggable="true" data-value="${c}" id="drag-card-${i}">${c}</div>
          `).join('')}
        </div>
      </div>
      <div class="q-pointers" id="q-pointers">
        <span class="q-ptr q-ptr-front">front: ${front}</span>
        <span class="q-ptr q-ptr-size">size: ${size}</span>
      </div>
      <div class="interaction-feedback hidden" id="interaction-feedback"></div>
    </div>
  `;
}

function bindQueueEnqueue(config) {
  const cards = document.querySelectorAll('.drag-card');
  const dropZone = document.getElementById('q-drop-zone');
  if (!dropZone) return;

  cards.forEach(card => {
    card.addEventListener('dragstart', handleDragStart);
    card.addEventListener('touchstart', handleTouchStart, { passive: false });
  });

  dropZone.addEventListener('dragover', e => { e.preventDefault(); dropZone.classList.add('drag-over'); });
  dropZone.addEventListener('dragleave', () => dropZone.classList.remove('drag-over'));
  dropZone.addEventListener('drop', e => {
    e.preventDefault();
    const val = e.dataTransfer.getData('text/plain');
    document.querySelectorAll('.drag-over').forEach(d => d.classList.remove('drag-over'));
    document.querySelectorAll('.dragging').forEach(d => { d.classList.remove('dragging'); d.style.opacity = '1'; });
    processQueueEnqueue(val);
  });

  document.addEventListener('touchmove', handleTouchMove, { passive: false });
  document.addEventListener('touchend', e => {
    if (!touchClone) return;
    const touch = e.changedTouches[0];
    const el = document.elementFromPoint(touch.clientX, touch.clientY);
    cleanupTouch();
    if (el) {
      const zone = el.closest('#q-drop-zone');
      if (zone) processQueueEnqueue(dragData);
    }
  }, { passive: false });

  updateQueueVisuals();
}

function processQueueEnqueue(val) {
  const s = interactionState;
  if (!s || s.type !== 'queue-enqueue') return;
  const expected = s.expected[0];

  if (val === expected) {
    const backIdx = (s.front + s.size) % s.capacity;
    s.cells[backIdx] = val;
    s.size++;
    s.remaining.shift();
    s.expected.shift();

    const card = document.querySelector(`.drag-card[data-value="${val}"]`);
    if (card) { card.classList.add('card-placed'); setTimeout(() => card.remove(), 300); }

    updateQueueVisuals();
    // Animate the just-filled cell
    const filledCell = document.getElementById(`q-cell-${backIdx}`);
    if (filledCell) filledCell.classList.add('q-just-filled');
    showFeedback('success', `Enqueued "${val}" at index ${backIdx}! size = ${s.size}.`);

    if (s.remaining.length === 0) {
      setTimeout(() => {
        showFeedback('complete', 'All items enqueued! Notice FIFO order: the first card in is at the front.');
        if (onCompleteCallback) onCompleteCallback();
      }, 600);
    }
  } else {
    showFeedback('error', `Enqueue "${expected}" first (it arrived first in line).`);
  }
}

function updateQueueVisuals() {
  const s = interactionState;
  if (!s) return;

  const backIdx = (s.front + s.size) % s.capacity;

  s.cells.forEach((val, i) => {
    const cell = document.getElementById(`q-cell-${i}`);
    if (!cell) return;
    const valEl = cell.querySelector('.q-cell-value');
    if (valEl) valEl.textContent = val || '';
    cell.classList.toggle('q-filled', val !== '' && val != null);
    cell.classList.toggle('q-is-front', i === s.front && s.size > 0);
    cell.classList.toggle('q-is-back', i === backIdx && s.size < s.capacity);
  });

  const ptrs = document.getElementById('q-pointers');
  if (ptrs) {
    ptrs.innerHTML = `
      <span class="q-ptr q-ptr-front">front: ${s.front}</span>
      <span class="q-ptr q-ptr-size">size: ${s.size}</span>
    `;
  }
}

// ============================================
// QUEUE DEQUEUE — Drag the front item out
// ============================================

function renderQueueDequeue(config) {
  const cells = config.cells || [];
  const capacity = cells.length;
  const front = config.front ?? 0;
  const size = config.size ?? cells.filter(c => c !== '' && c != null).length;

  interactionState = {
    type: 'queue-dequeue',
    cells: [...cells],
    front,
    size,
    expectedDequeue: config.expectedDequeue,
    capacity,
    done: false
  };

  const cellsHtml = cells.map((val, i) => {
    const isFront = i === front && val;
    return `
      <div class="q-cell ${isFront ? 'q-front-cell q-is-front' : ''} ${val ? 'q-filled' : ''}" data-index="${i}" id="q-cell-${i}">
        <div class="q-cell-value">${val || ''}</div>
        <div class="q-cell-index">${i}</div>
        ${isFront ? `<div class="q-drag-handle" draggable="true" data-value="${val}" id="q-front-handle"></div>` : ''}
      </div>
    `;
  }).join('');

  return `
    <div class="interaction-zone" id="interaction-zone">
      <div class="interaction-label">Drag the front item OUT of the queue</div>
      <div class="q-container">
        <div class="interaction-discard" id="discard-zone">
          <div class="discard-label">Drop here</div>
        </div>
        <div class="q-label q-out-label">OUT</div>
        <div class="q-array" id="q-array">
          ${cellsHtml}
        </div>
        <div class="q-label q-in-label">IN</div>
      </div>
      <div class="q-pointers" id="q-pointers">
        <span class="q-ptr q-ptr-front">front: ${front}</span>
        <span class="q-ptr q-ptr-size">size: ${size}</span>
      </div>
      <div class="interaction-feedback hidden" id="interaction-feedback"></div>
    </div>
  `;
}

function bindQueueDequeue(config) {
  const handle = document.getElementById('q-front-handle');
  const discardZone = document.getElementById('discard-zone');
  if (!handle || !discardZone) return;

  handle.addEventListener('dragstart', handleDragStart);
  handle.addEventListener('touchstart', handleTouchStart, { passive: false });

  discardZone.addEventListener('dragover', e => { e.preventDefault(); discardZone.classList.add('drag-over'); });
  discardZone.addEventListener('dragleave', () => discardZone.classList.remove('drag-over'));
  discardZone.addEventListener('drop', e => {
    e.preventDefault();
    const val = e.dataTransfer.getData('text/plain');
    document.querySelectorAll('.drag-over').forEach(d => d.classList.remove('drag-over'));
    processQueueDequeue(val);
  });

  document.addEventListener('touchmove', handleTouchMove, { passive: false });
  document.addEventListener('touchend', e => {
    if (!touchClone) return;
    const touch = e.changedTouches[0];
    const el = document.elementFromPoint(touch.clientX, touch.clientY);
    cleanupTouch();
    if (el) {
      const zone = el.closest('#discard-zone');
      if (zone) processQueueDequeue(dragData);
    }
  }, { passive: false });
}

function processQueueDequeue(val) {
  const s = interactionState;
  if (!s || s.type !== 'queue-dequeue' || s.done) return;

  if (val === s.expectedDequeue) {
    const oldFront = s.front;
    s.cells[s.front] = '';
    s.front = (s.front + 1) % s.capacity;
    s.size--;
    s.done = true;

    // Remove the drag handle
    const handle = document.getElementById('q-front-handle');
    if (handle) handle.remove();

    // Directly clear the dequeued cell in the DOM
    const dequeuedCell = document.getElementById(`q-cell-${oldFront}`);
    if (dequeuedCell) {
      const valEl = dequeuedCell.querySelector('.q-cell-value');
      if (valEl) valEl.textContent = '';
      dequeuedCell.classList.remove('q-filled', 'q-front-cell', 'q-is-front');
      dequeuedCell.style.transition = 'opacity 0.3s ease';
      dequeuedCell.style.opacity = '0.4';
      setTimeout(() => { dequeuedCell.style.opacity = '1'; }, 400);
    }

    // Update pointers and highlight new front
    updateQueueVisuals();

    showFeedback('complete', `Dequeued "${val}"! FIFO: first in, first out. Front advances to ${s.front}, size = ${s.size}.`);
    if (onCompleteCallback) onCompleteCallback();
  } else {
    showFeedback('error', 'You can only dequeue from the FRONT of the queue.');
  }
}

// ============================================
// SORTING SWAP — Tap two highlighted cards to swap
// ============================================

let swapInstanceId = 0;

function renderSortingSwap(config) {
  const cells = config.cells || [];
  const swapI = config.swapIndices || [0, 1];
  const uid = ++swapInstanceId;

  interactionState = {
    type: 'sorting-swap',
    cells: [...cells],
    swapIndices: [...swapI],
    selectedIndex: null,
    done: false,
    uid
  };

  const cellsHtml = cells.map((val, i) => {
    const isSwap = swapI.includes(i);
    return `
      <div class="ss-cell ${isSwap ? 'ss-swappable' : ''}" data-index="${i}" data-uid="${uid}" id="ss-cell-${uid}-${i}">
        <div class="ss-cell-value">${val}</div>
        <div class="ss-cell-index">${i}</div>
      </div>
    `;
  }).join('');

  return `
    <div class="interaction-zone" id="interaction-zone">
      <div class="interaction-label">${config.label || 'Tap the two highlighted cards to swap them'}</div>
      <div class="ss-container">
        <div class="ss-array" id="ss-array-${uid}">
          ${cellsHtml}
        </div>
      </div>
      <div class="interaction-feedback hidden" id="interaction-feedback"></div>
    </div>
  `;
}

function bindSortingSwap(config) {
  const s = interactionState;
  if (!s) return;
  const swappables = document.querySelectorAll(`.ss-swappable[data-uid="${s.uid}"]`);
  swappables.forEach(cell => {
    cell.addEventListener('click', () => handleSwapClick(cell));
    cell.addEventListener('touchend', e => { e.preventDefault(); handleSwapClick(cell); });
  });
}

function handleSwapClick(cell) {
  const s = interactionState;
  if (!s || s.type !== 'sorting-swap' || s.done) return;

  const cellUid = parseInt(cell.dataset.uid);
  if (cellUid !== s.uid) return;

  const idx = parseInt(cell.dataset.index);
  if (!s.swapIndices.includes(idx)) return;

  if (s.selectedIndex === null) {
    s.selectedIndex = idx;
    cell.classList.add('ss-selected');
    showFeedback('success', `Selected ${s.cells[idx]}. Now tap the other card to swap.`);
  } else if (s.selectedIndex === idx) {
    s.selectedIndex = null;
    cell.classList.remove('ss-selected');
  } else {
    const i = s.selectedIndex;
    const j = idx;
    s.done = true;

    const cellA = document.getElementById(`ss-cell-${s.uid}-${i}`);
    const cellB = document.getElementById(`ss-cell-${s.uid}-${j}`);

    if (cellA && cellB) {
      const aRect = cellA.getBoundingClientRect();
      const bRect = cellB.getBoundingClientRect();
      const dx = bRect.left - aRect.left;

      cellA.style.transition = 'transform 0.4s ease';
      cellB.style.transition = 'transform 0.4s ease';
      cellA.style.transform = `translateX(${dx}px)`;
      cellB.style.transform = `translateX(${-dx}px)`;

      setTimeout(() => {
        [s.cells[i], s.cells[j]] = [s.cells[j], s.cells[i]];

        cellA.style.transition = 'none';
        cellB.style.transition = 'none';
        cellA.style.transform = '';
        cellB.style.transform = '';

        const valA = cellA.querySelector('.ss-cell-value');
        const valB = cellB.querySelector('.ss-cell-value');
        if (valA) valA.textContent = s.cells[i];
        if (valB) valB.textContent = s.cells[j];

        cellA.classList.remove('ss-selected', 'ss-swappable');
        cellB.classList.remove('ss-selected', 'ss-swappable');
        cellA.classList.add('ss-swapped');
        cellB.classList.add('ss-swapped');

        showFeedback('complete', `Swapped! ${s.cells[i]} and ${s.cells[j]} exchanged positions.`);
        if (onCompleteCallback) onCompleteCallback();
      }, 450);
    }
  }
}

// Cleanup listeners when leaving a tutorial
export function cleanupInteraction() {
  interactionState = null;
  onCompleteCallback = null;
  dragData = null;
  if (touchClone) { touchClone.remove(); touchClone = null; }
  document.removeEventListener('touchmove', handleTouchMove);
  document.removeEventListener('touchend', handleTouchEnd);
  document.removeEventListener('touchend', handleTouchMultiEnd);
  document.removeEventListener('touchend', handlePopTouchEnd);
}
