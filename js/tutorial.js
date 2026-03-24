import { renderMaterialsList, renderSetup, renderStepBubble, renderReflection } from './components.js';
import { scrollToElement } from './ui.js';

let currentTutorial = null;
let currentStepIndex = 0;
let totalSteps = 0;

export function startTutorial(tutorial, container, backTopicId) {
  currentTutorial = tutorial;
  currentStepIndex = 0;
  totalSteps = tutorial.steps.length;

  // Set back link
  const backLink = document.getElementById('activity-back-link');
  backLink.onclick = () => { location.hash = `#/topic/${backTopicId}`; };

  // Render materials screen first
  renderMaterialsScreen(container);
}

function renderMaterialsScreen(container) {
  container.innerHTML = `
    <div class="materials-screen slide-up">
      <div class="section-header">
        <h2 class="section-title">${currentTutorial.title}</h2>
        <p class="section-subtitle">${currentTutorial.subtitle}</p>
      </div>

      <div class="encouragement-banner">
        <p>${currentTutorial.encouragement}</p>
        ${currentTutorial.realWorldExample ? `<p class="real-world">${currentTutorial.realWorldExample}</p>` : ''}
      </div>

      <div class="section-header">
        <h3 class="section-title" style="font-size: 1.1rem;">What you'll need</h3>
      </div>
      ${renderMaterialsList(currentTutorial.materials)}

      <div style="text-align: center; margin-top: var(--spacing-xl);">
        <button class="btn btn-primary" id="ready-btn">
          I have everything ready!
        </button>
      </div>
    </div>
  `;

  document.getElementById('ready-btn').addEventListener('click', () => {
    renderTutorialView(container);
  });
}

function renderTutorialView(container) {
  container.innerHTML = `
    <div class="section-header">
      <h2 class="section-title">${currentTutorial.title}</h2>
    </div>

    ${currentTutorial.setup ? renderSetup(currentTutorial.setup) : ''}

    <div class="steps-container" id="steps-container"></div>

    <div class="tutorial-nav" id="tutorial-nav">
      <button class="btn btn-ghost" id="prev-btn" disabled>&#8592; Previous</button>
      <div class="step-progress" id="step-progress">Step 1 of ${totalSteps}</div>
      <button class="btn btn-primary" id="next-btn" style="padding: var(--spacing-sm) var(--spacing-lg);">
        Next &#8594;
      </button>
    </div>
  `;

  document.getElementById('next-btn').addEventListener('click', handleNext);
  document.getElementById('prev-btn').addEventListener('click', handlePrev);

  // Show first step
  showStep(0);
}

function showStep(index) {
  if (index < 0 || index >= totalSteps) return;

  currentStepIndex = index;
  const stepsContainer = document.getElementById('steps-container');
  const step = currentTutorial.steps[index];

  // Only add if not already rendered
  if (!document.getElementById(`step-${step.id}`)) {
    stepsContainer.insertAdjacentHTML('beforeend', renderStepBubble(step));
  }

  // Scroll to current step
  const el = document.getElementById(`step-${step.id}`);
  setTimeout(() => scrollToElement(el), 100);

  updateNav();
}

function handleNext() {
  if (currentStepIndex < totalSteps - 1) {
    showStep(currentStepIndex + 1);
  } else {
    showReflection();
  }
}

function handlePrev() {
  if (currentStepIndex > 0) {
    currentStepIndex--;
    const el = document.getElementById(`step-${currentTutorial.steps[currentStepIndex].id}`);
    if (el) scrollToElement(el);
    updateNav();
  }
}

function updateNav() {
  const prevBtn = document.getElementById('prev-btn');
  const nextBtn = document.getElementById('next-btn');
  const progress = document.getElementById('step-progress');

  prevBtn.disabled = currentStepIndex === 0;
  progress.textContent = `Step ${currentStepIndex + 1} of ${totalSteps}`;

  if (currentStepIndex === totalSteps - 1) {
    nextBtn.textContent = 'Finish \u2714';
  } else {
    nextBtn.innerHTML = 'Next &#8594;';
  }
}

function showReflection() {
  const nav = document.getElementById('tutorial-nav');
  nav.style.display = 'none';

  const stepsContainer = document.getElementById('steps-container');
  stepsContainer.insertAdjacentHTML('beforeend', renderReflection(currentTutorial.reflection));

  // Next tutorial link
  if (currentTutorial.nextTutorial) {
    stepsContainer.insertAdjacentHTML('beforeend', `
      <div class="tutorial-end-actions">
        <button class="btn btn-secondary" onclick="location.hash='#/topics'">
          &#8592; All topics
        </button>
      </div>
    `);
  } else {
    stepsContainer.insertAdjacentHTML('beforeend', `
      <div class="tutorial-end-actions">
        <button class="btn btn-primary" onclick="location.hash='#/topics'">
          Back to topics
        </button>
      </div>
    `);
  }

  const reflection = stepsContainer.querySelector('.reflection-section');
  setTimeout(() => scrollToElement(reflection), 100);
}
