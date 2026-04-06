import { loadTopics, loadTutorial, findTopic, findTutorialMeta, invalidateTopicsCache } from './data.js';
import { showView, setBreadcrumb, scrollToTop } from './ui.js';
import { renderTopicCard, renderTutorialListItem } from './components.js';
import { startTutorial } from './tutorial.js';
import { renderInstructorMode, bindInstructorEvents } from './instructor.js';

// Global toggle functions (called from onclick in rendered HTML)
window.toggleConceptNote = function(id, toggleEl) {
  const el = document.getElementById(id);
  el.classList.toggle('open');
  toggleEl.classList.toggle('open');
};

window.toggleHint = function(id) {
  const el = document.getElementById(id);
  el.classList.toggle('open');
};

// Router
async function handleRoute() {
  const hash = location.hash || '#/';
  const parts = hash.replace('#/', '').split('/').filter(Boolean);

  scrollToTop();

  if (parts.length === 0 || hash === '#/') {
    renderWelcome();
  } else if (parts[0] === 'topics') {
    await renderTopics();
  } else if (parts[0] === 'topic' && parts[1]) {
    await renderTutorialList(parts[1]);
  } else if (parts[0] === 'tutorial' && parts[1] && parts[2]) {
    await renderTutorialActivity(parts[1], parts[2]);
  } else if (parts[0] === 'instructor') {
    renderInstructor();
  } else {
    renderWelcome();
  }
}

function renderWelcome() {
  showView('view-welcome');
  setBreadcrumb([]);
}

async function renderTopics() {
  showView('view-topics');
  setBreadcrumb([{ label: 'Topics' }]);

  const data = await loadTopics();
  const grid = document.getElementById('topic-grid');
  grid.innerHTML = data.topics.map(t => renderTopicCard(t)).join('');
}

async function renderTutorialList(topicId) {
  const data = await loadTopics();
  const topic = findTopic(data, topicId);

  if (!topic) {
    location.hash = '#/topics';
    return;
  }

  showView('view-tutorials');
  setBreadcrumb([
    { label: 'Topics', href: '#/topics' },
    { label: topic.title }
  ]);

  const header = document.getElementById('tutorial-list-header');
  header.innerHTML = `
    <h2 class="section-title">${topic.title}</h2>
    <p class="section-subtitle">${topic.description}</p>
  `;

  const list = document.getElementById('tutorial-list');
  list.innerHTML = topic.tutorials.map(t => renderTutorialListItem(topicId, t)).join('');
}

async function renderTutorialActivity(topicId, tutorialId) {
  const data = await loadTopics();
  const topic = findTopic(data, topicId);
  if (!topic) { location.hash = '#/topics'; return; }

  const meta = findTutorialMeta(topic, tutorialId);
  if (!meta) { location.hash = `#/topic/${topicId}`; return; }

  showView('view-activity');
  setBreadcrumb([
    { label: 'Topics', href: '#/topics' },
    { label: topic.title, href: `#/topic/${topicId}` },
    { label: meta.title }
  ]);

  const tutorial = await loadTutorial(meta.file);
  const container = document.getElementById('activity-content');
  startTutorial(tutorial, container, topicId);
}

function renderInstructor() {
  showView('view-instructor');
  setBreadcrumb([{ label: 'Instructor Mode' }]);

  // Invalidate cache so generated tutorials are fresh
  invalidateTopicsCache();

  const container = document.getElementById('instructor-content');
  container.innerHTML = renderInstructorMode();
  bindInstructorEvents();
}

// Initialize
window.addEventListener('hashchange', handleRoute);
window.addEventListener('DOMContentLoaded', handleRoute);
