// js/instructor.js — Instructor Mode UI

import { generateTutorial, refineTutorial } from './generator.js';
import { saveGeneratedTutorial, getGeneratedTutorials, deleteGeneratedTutorial } from './data.js';

// Try to load a hardcoded key from config.js (gitignored).
// If the file doesn't exist, falls back to manual entry.
let configKey = null;
try {
  const config = await import('./config.js');
  if (config.API_KEY && config.API_KEY !== 'PASTE_YOUR_KEY_HERE') {
    configKey = config.API_KEY;
    // Auto-save to localStorage so the rest of the app can use it
    localStorage.setItem('cutandcode-api-key', configKey);
  }
} catch (_) {
  // config.js doesn't exist (e.g., on public GitHub Pages) — that's fine
}

const DOODLE_PATH = 'images for graphics/doodles';
const MATERIAL_KIT = [
  { name: 'Paper', img: `${DOODLE_PATH}/Humaaans - Paperwork.png` },
  { name: 'Colored pencils/pens', img: `${DOODLE_PATH}/The Little Things - Markers.png` },
  { name: 'Tape', img: `${DOODLE_PATH}/tape.jpeg` },
  { name: 'Sticky notes/squares', img: `${DOODLE_PATH}/Dayflow - Sticky Notes.png` },
  { name: 'Paperclips', img: `${DOODLE_PATH}/paper clips.jpeg` },
  { name: 'Coin/token', img: `${DOODLE_PATH}/Hands - Coin.png` },
  { name: 'Bowls/cups', img: `${DOODLE_PATH}/The Munchies - Bowl.png` }
];

let currentPreview = null;
let revisionCount = 0;

export function renderInstructorMode() {
  const apiKey = localStorage.getItem('cutandcode-api-key');
  const tutorials = getGeneratedTutorials();

  return `
    <div class="instructor-page slide-up">
      <div class="section-header">
        <h2 class="section-title">Instructor Mode</h2>
        <p class="section-subtitle">Generate new hands-on tutorials with AI, then publish them to the app.</p>
      </div>

      <!-- API Key Section -->
      <div class="instructor-card" id="api-key-section">
        <h3 class="instructor-card-title">API Key</h3>
        ${apiKey
          ? `<div class="api-key-saved">
               <span class="api-key-status">API key saved</span>
               <button class="btn btn-ghost btn-sm" id="change-key-btn">Change</button>
             </div>`
          : `<div class="api-key-form">
               <input type="password" class="instructor-input" id="api-key-input"
                 placeholder="Enter your Claude API key (sk-ant-...)" />
               <button class="btn btn-primary btn-sm" id="save-key-btn">Save Key</button>
             </div>`
        }
      </div>

      <!-- Tutorial Generator Section -->
      <div class="instructor-card" id="generator-section">
        <h3 class="instructor-card-title">Generate a Tutorial</h3>
        <div class="generator-form">
          <label class="instructor-label" for="concept-input">Concept</label>
          <textarea class="instructor-textarea" id="concept-input"
            placeholder="e.g., binary search trees, linked list reversal, merge sort, hash table collisions..."
            rows="2"></textarea>

          <label class="instructor-label" for="difficulty-select">Difficulty</label>
          <select class="instructor-select" id="difficulty-select">
            <option value="warm-up">Warm-up</option>
            <option value="core-practice" selected>Core Practice</option>
            <option value="challenge">Challenge</option>
          </select>

          <button class="btn btn-primary" id="generate-btn" ${!apiKey ? 'disabled' : ''}>
            Generate Tutorial
          </button>
          ${!apiKey ? '<p class="instructor-hint">Save an API key first to enable generation.</p>' : ''}
        </div>

        <!-- Loading State -->
        <div class="generator-loading hidden" id="generator-loading">
          <div class="spinner"></div>
          <p class="loading-message">Crafting your tutorial... this usually takes 15-30 seconds.</p>
        </div>

        <!-- Error State -->
        <div class="generator-error hidden" id="generator-error">
          <p class="error-message" id="error-message-text"></p>
          <button class="btn btn-ghost btn-sm" id="error-dismiss-btn">Dismiss</button>
        </div>

        <!-- Preview -->
        <div class="tutorial-preview hidden" id="tutorial-preview">
          <h4 class="preview-title" id="preview-title"></h4>
          <p class="preview-subtitle" id="preview-subtitle"></p>
          <div class="preview-meta" id="preview-meta"></div>
          <div class="preview-details" id="preview-details"></div>
          <!-- Refinement Section -->
          <div class="refinement-section">
            <label class="instructor-label" for="refinement-input">Suggest changes</label>
            <textarea class="instructor-textarea" id="refinement-input"
              placeholder="e.g., Replace string with rubber bands, simplify step 5, add a checkpoint after step 3, make the reflection questions harder..."
              rows="3"></textarea>
            <button class="btn btn-accent btn-sm" id="revise-btn">Revise Tutorial</button>
          </div>

          <!-- Revising Loading State -->
          <div class="generator-loading hidden" id="revise-loading">
            <div class="spinner"></div>
            <p class="loading-message">Revising your tutorial...</p>
          </div>

          <div class="preview-actions">
            <button class="btn btn-primary" id="publish-btn">Publish Tutorial</button>
            <button class="btn btn-ghost" id="discard-btn">Discard</button>
          </div>
          <p class="revision-count hidden" id="revision-count"></p>
        </div>
      </div>

      <!-- Generated Tutorials List -->
      <div class="instructor-card" id="tutorials-list-section">
        <h3 class="instructor-card-title">Generated Tutorials</h3>
        <div id="generated-tutorials-list">
          ${tutorials.length === 0
            ? '<p class="instructor-empty">No tutorials generated yet. Use the form above to create one.</p>'
            : tutorials.map(t => renderGeneratedTutorialItem(t)).join('')
          }
        </div>
      </div>

      <!-- Material Kit Reference -->
      <div class="instructor-card">
        <h3 class="instructor-card-title">Standard Material Kit</h3>
        <p class="instructor-hint">All generated tutorials are constrained to these 7 everyday items.</p>
        <div class="material-kit-grid">
          ${MATERIAL_KIT.map(m => `
            <div class="material-kit-item">
              <img class="material-kit-img" src="${m.img}" alt="${m.name}" />
              <span class="material-kit-name">${m.name}</span>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `;
}

function renderGeneratedTutorialItem(tutorial) {
  const date = tutorial._generatedAt
    ? new Date(tutorial._generatedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
    : 'Unknown date';
  const diffLabel = {
    'warm-up': 'Warm-up',
    'core-practice': 'Core Practice',
    'challenge': 'Challenge'
  }[tutorial._difficulty] || tutorial._difficulty || 'Core Practice';
  const diffClass = {
    'warm-up': 'badge-warmup',
    'core-practice': 'badge-core',
    'challenge': 'badge-challenge'
  }[tutorial._difficulty] || 'badge-core';

  return `
    <div class="generated-tutorial-item" data-id="${tutorial.id}">
      <div class="generated-tutorial-info">
        <div class="generated-tutorial-title">${tutorial.title}</div>
        <div class="generated-tutorial-meta">
          <span class="badge ${diffClass}">${diffLabel}</span>
          <span class="generated-tutorial-topic">${tutorial.topic || ''}</span>
          <span class="generated-tutorial-date">${date}</span>
        </div>
      </div>
      <div class="generated-tutorial-actions">
        <button class="btn btn-ghost btn-sm view-tutorial-btn" data-id="${tutorial.id}">View</button>
        <button class="btn btn-ghost btn-sm delete-tutorial-btn" data-id="${tutorial.id}">Delete</button>
      </div>
    </div>
  `;
}

export function bindInstructorEvents() {
  // Save API key
  const saveKeyBtn = document.getElementById('save-key-btn');
  if (saveKeyBtn) {
    saveKeyBtn.addEventListener('click', () => {
      const input = document.getElementById('api-key-input');
      const key = input.value.trim();
      if (key) {
        localStorage.setItem('cutandcode-api-key', key);
        location.hash = '#/instructor'; // re-render
      }
    });
  }

  // Change API key
  const changeKeyBtn = document.getElementById('change-key-btn');
  if (changeKeyBtn) {
    changeKeyBtn.addEventListener('click', () => {
      const section = document.getElementById('api-key-section');
      section.innerHTML = `
        <h3 class="instructor-card-title">API Key</h3>
        <div class="api-key-form">
          <input type="password" class="instructor-input" id="api-key-input"
            placeholder="Enter your Claude API key (sk-ant-...)" />
          <button class="btn btn-primary btn-sm" id="save-key-btn">Save Key</button>
        </div>
      `;
      // Re-bind save
      document.getElementById('save-key-btn').addEventListener('click', () => {
        const input = document.getElementById('api-key-input');
        const key = input.value.trim();
        if (key) {
          localStorage.setItem('cutandcode-api-key', key);
          location.hash = '#/instructor';
        }
      });
    });
  }

  // Generate tutorial
  const generateBtn = document.getElementById('generate-btn');
  if (generateBtn) {
    generateBtn.addEventListener('click', handleGenerate);
  }

  // Error dismiss
  const errorDismissBtn = document.getElementById('error-dismiss-btn');
  if (errorDismissBtn) {
    errorDismissBtn.addEventListener('click', () => {
      document.getElementById('generator-error').classList.add('hidden');
    });
  }

  // Revise
  const reviseBtn = document.getElementById('revise-btn');
  if (reviseBtn) {
    reviseBtn.addEventListener('click', handleRevise);
  }

  // Publish
  const publishBtn = document.getElementById('publish-btn');
  if (publishBtn) {
    publishBtn.addEventListener('click', handlePublish);
  }

  // Discard
  const discardBtn = document.getElementById('discard-btn');
  if (discardBtn) {
    discardBtn.addEventListener('click', () => {
      currentPreview = null;
      revisionCount = 0;
      document.getElementById('tutorial-preview').classList.add('hidden');
    });
  }

  // View/Delete generated tutorials
  document.querySelectorAll('.view-tutorial-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const id = e.target.dataset.id;
      const tutorials = getGeneratedTutorials();
      const tutorial = tutorials.find(t => t.id === id);
      if (tutorial) {
        // Navigate to tutorial view — generated tutorials use topic from their data
        location.hash = `#/tutorial/${tutorial.topic}/${tutorial.id}`;
      }
    });
  });

  document.querySelectorAll('.delete-tutorial-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const id = e.target.dataset.id;
      if (confirm('Delete this generated tutorial? This cannot be undone.')) {
        deleteGeneratedTutorial(id);
        location.hash = '#/instructor'; // re-render
      }
    });
  });
}

async function handleGenerate() {
  const concept = document.getElementById('concept-input').value.trim();
  const difficulty = document.getElementById('difficulty-select').value;
  const apiKey = localStorage.getItem('cutandcode-api-key');

  if (!concept) {
    showError('Please enter a concept to generate a tutorial for.');
    return;
  }
  if (!apiKey) {
    showError('Please save an API key first.');
    return;
  }

  const generateBtn = document.getElementById('generate-btn');
  const loading = document.getElementById('generator-loading');
  const preview = document.getElementById('tutorial-preview');
  const error = document.getElementById('generator-error');

  generateBtn.disabled = true;
  loading.classList.remove('hidden');
  preview.classList.add('hidden');
  error.classList.add('hidden');

  try {
    const tutorial = await generateTutorial(concept, difficulty, apiKey);
    // Attach metadata
    tutorial._generatedAt = new Date().toISOString();
    tutorial._difficulty = difficulty;
    currentPreview = tutorial;
    showPreview(tutorial);
  } catch (err) {
    showError(`Generation failed: ${err.message}`);
  } finally {
    generateBtn.disabled = false;
    loading.classList.add('hidden');
  }
}

function showPreview(tutorial) {
  const preview = document.getElementById('tutorial-preview');
  document.getElementById('preview-title').textContent = tutorial.title;
  document.getElementById('preview-subtitle').textContent = tutorial.subtitle || '';

  const diffLabel = {
    'warm-up': 'Warm-up',
    'core-practice': 'Core Practice',
    'challenge': 'Challenge'
  }[tutorial._difficulty] || tutorial._difficulty;

  document.getElementById('preview-meta').innerHTML = `
    <span class="badge badge-core">${diffLabel}</span>
    <span>Topic: ${tutorial.topic}</span>
    <span>${tutorial.steps ? tutorial.steps.length : 0} steps</span>
    <span>${tutorial.materials ? tutorial.materials.length : 0} materials</span>
  `;

  document.getElementById('preview-details').innerHTML = `
    <div class="preview-section">
      <strong>Encouragement:</strong> ${tutorial.encouragement || 'N/A'}
    </div>
    <div class="preview-section">
      <strong>Real-world example:</strong> ${tutorial.realWorldExample || 'N/A'}
    </div>
    <div class="preview-section">
      <strong>Materials:</strong>
      <ul>${(tutorial.materials || []).map(m => `<li>${m.item} — ${m.detail}</li>`).join('')}</ul>
    </div>
    <div class="preview-section">
      <strong>Steps preview:</strong>
      <ol>${(tutorial.steps || []).map(s => `<li>${s.instruction.replace(/<[^>]+>/g, '')}</li>`).join('')}</ol>
    </div>
    <div class="preview-section">
      <strong>Reflection questions:</strong> ${(tutorial.reflection || []).length}
    </div>
  `;

  preview.classList.remove('hidden');
}

async function handleRevise() {
  const feedback = document.getElementById('refinement-input').value.trim();
  const apiKey = localStorage.getItem('cutandcode-api-key');

  if (!feedback) {
    showError('Please describe what changes you want.');
    return;
  }
  if (!currentPreview) {
    showError('No tutorial to revise. Generate one first.');
    return;
  }

  const reviseBtn = document.getElementById('revise-btn');
  const reviseLoading = document.getElementById('revise-loading');
  const error = document.getElementById('generator-error');

  reviseBtn.disabled = true;
  reviseLoading.classList.remove('hidden');
  error.classList.add('hidden');

  try {
    const revised = await refineTutorial(currentPreview, feedback, apiKey);
    // Keep metadata from the original
    revised._generatedAt = currentPreview._generatedAt;
    revised._difficulty = currentPreview._difficulty;
    currentPreview = revised;
    revisionCount++;
    showPreview(revised);
    // Clear the feedback box and show revision count
    document.getElementById('refinement-input').value = '';
    const countEl = document.getElementById('revision-count');
    countEl.textContent = `Revision ${revisionCount} applied`;
    countEl.classList.remove('hidden');
  } catch (err) {
    showError(`Revision failed: ${err.message}`);
  } finally {
    reviseBtn.disabled = false;
    reviseLoading.classList.add('hidden');
  }
}

function handlePublish() {
  if (!currentPreview) return;

  const publishBtn = document.getElementById('publish-btn');
  const discardBtn = document.getElementById('discard-btn');
  const preview = document.getElementById('tutorial-preview');

  // Disable buttons and show publishing state
  publishBtn.disabled = true;
  publishBtn.innerHTML = '<span class="publish-spinner"></span> Publishing...';
  discardBtn.disabled = true;

  // Brief delay so the user sees the publishing state
  setTimeout(() => {
    const title = currentPreview.title;
    const topic = currentPreview.topic || 'general';

    saveGeneratedTutorial(currentPreview);
    currentPreview = null;
    revisionCount = 0;

    // Show success banner instead of immediately re-rendering
    preview.innerHTML = `
      <div class="publish-success">
        <div class="publish-success-icon">&#10003;</div>
        <h4 class="publish-success-title">Published!</h4>
        <p class="publish-success-text"><strong>${title}</strong> has been added to the <strong>${topic}</strong> section.</p>
        <a class="btn btn-primary btn-sm" href="#/topics">View in Topics</a>
      </div>
    `;
    preview.classList.remove('hidden');

    // Also refresh the generated tutorials list below
    const listSection = document.getElementById('generated-tutorials-list');
    if (listSection) {
      const tutorials = getGeneratedTutorials();
      listSection.innerHTML = tutorials.length === 0
        ? '<p class="instructor-empty">No tutorials generated yet.</p>'
        : tutorials.map(t => renderGeneratedTutorialItem(t)).join('');
      // Rebind view/delete buttons
      rebindTutorialListEvents();
    }
  }, 800);
}

function rebindTutorialListEvents() {
  document.querySelectorAll('.view-tutorial-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const id = e.target.dataset.id;
      const tutorials = getGeneratedTutorials();
      const tutorial = tutorials.find(t => t.id === id);
      if (tutorial) {
        location.hash = `#/tutorial/${tutorial.topic}/${tutorial.id}`;
      }
    });
  });
  document.querySelectorAll('.delete-tutorial-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const id = e.target.dataset.id;
      if (confirm('Delete this generated tutorial? This cannot be undone.')) {
        deleteGeneratedTutorial(id);
        location.hash = '#/instructor';
      }
    });
  });
}

function showError(message) {
  const error = document.getElementById('generator-error');
  const text = document.getElementById('error-message-text');
  text.textContent = message;
  error.classList.remove('hidden');
}
