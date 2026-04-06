// js/instructor.js — Instructor Mode UI

import { generateTutorial } from './generator.js';
import { saveGeneratedTutorial, getGeneratedTutorials, deleteGeneratedTutorial } from './data.js';

const MATERIAL_KIT = [
  { name: 'Paper strips (lined or blank)', emoji: '📄' },
  { name: 'Scissors', emoji: '✂️' },
  { name: 'Pen or marker', emoji: '🖊️' },
  { name: 'Small paper squares/cards', emoji: '📝' },
  { name: 'Tape (any kind)', emoji: '🪩' },
  { name: 'Bowls or cups (4-5)', emoji: '🥣' },
  { name: 'Sticky notes', emoji: '🟨' },
  { name: 'String or yarn (2 colors)', emoji: '🧶' },
  { name: 'Paperclips', emoji: '📎' },
  { name: 'Coins or small tokens', emoji: '🪙' }
];

let currentPreview = null;

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
               <span class="api-key-status">API key saved (****${apiKey.slice(-4)})</span>
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
          <div class="preview-actions">
            <button class="btn btn-primary" id="publish-btn">Publish Tutorial</button>
            <button class="btn btn-ghost" id="discard-btn">Discard</button>
          </div>
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
        <p class="instructor-hint">All generated tutorials are constrained to these 10 everyday items.</p>
        <div class="material-kit-grid">
          ${MATERIAL_KIT.map(m => `
            <div class="material-kit-item">
              <span class="material-kit-emoji">${m.emoji}</span>
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
      <ul>${(tutorial.materials || []).map(m => `<li>${m.emoji} ${m.item} — ${m.detail}</li>`).join('')}</ul>
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

function handlePublish() {
  if (!currentPreview) return;

  saveGeneratedTutorial(currentPreview);
  currentPreview = null;
  // Re-render to update the list
  location.hash = '#/instructor';
}

function showError(message) {
  const error = document.getElementById('generator-error');
  const text = document.getElementById('error-message-text');
  text.textContent = message;
  error.classList.remove('hidden');
}
