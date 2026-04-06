let topicsData = null;
const tutorialCache = {};

const GENERATED_TUTORIALS_KEY = 'cutandcode-generated-tutorials';

export async function loadTopics() {
  if (topicsData) return topicsData;
  const res = await fetch('data/topics.json');
  const baseData = await res.json();

  // Merge generated tutorials into topics
  const generated = getGeneratedTutorials();
  topicsData = mergeGeneratedTutorials(baseData, generated);

  return topicsData;
}

// Force reload of topics (needed after publishing a generated tutorial)
export function invalidateTopicsCache() {
  topicsData = null;
}

export async function loadTutorial(filePath) {
  // Check if this is a generated tutorial reference
  if (filePath.startsWith('generated:')) {
    const tutorialId = filePath.replace('generated:', '');
    const generated = getGeneratedTutorials();
    const tutorial = generated.find(t => t.id === tutorialId);
    if (tutorial) return tutorial;
    throw new Error(`Generated tutorial not found: ${tutorialId}`);
  }

  if (tutorialCache[filePath]) return tutorialCache[filePath];
  const res = await fetch(`data/${filePath}`);
  const data = await res.json();
  tutorialCache[filePath] = data;
  return data;
}

export function findTopic(topics, topicId) {
  return topics.topics.find(t => t.id === topicId);
}

export function findTutorialMeta(topic, tutorialId) {
  return topic.tutorials.find(t => t.id === tutorialId);
}

// --- Generated tutorial storage ---

export function saveGeneratedTutorial(tutorial) {
  const tutorials = getGeneratedTutorials();
  // Avoid duplicates by id
  const existing = tutorials.findIndex(t => t.id === tutorial.id);
  if (existing >= 0) {
    tutorials[existing] = tutorial;
  } else {
    tutorials.push(tutorial);
  }
  localStorage.setItem(GENERATED_TUTORIALS_KEY, JSON.stringify(tutorials));
  invalidateTopicsCache();
}

export function getGeneratedTutorials() {
  try {
    const data = localStorage.getItem(GENERATED_TUTORIALS_KEY);
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
}

export function deleteGeneratedTutorial(id) {
  const tutorials = getGeneratedTutorials();
  const filtered = tutorials.filter(t => t.id !== id);
  localStorage.setItem(GENERATED_TUTORIALS_KEY, JSON.stringify(filtered));
  invalidateTopicsCache();
}

// Merge generated tutorials into the topics structure
function mergeGeneratedTutorials(baseData, generated) {
  if (!generated.length) return baseData;

  // Deep clone to avoid mutating the original
  const data = JSON.parse(JSON.stringify(baseData));

  for (const tutorial of generated) {
    const topicId = tutorial.topic;
    let topic = data.topics.find(t => t.id === topicId);

    // If the topic doesn't exist yet, create it
    if (!topic) {
      topic = {
        id: topicId,
        title: topicId.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' '),
        icon: topicId,
        description: `AI-generated tutorials for ${topicId.replace(/-/g, ' ')}.`,
        color: '#C0785A',
        tutorials: []
      };
      data.topics.push(topic);
    }

    // Check if tutorial already listed
    if (!topic.tutorials.find(t => t.id === tutorial.id)) {
      const diffMap = { 'warm-up': 'warm-up', 'core-practice': 'core-practice', 'challenge': 'challenge' };
      topic.tutorials.push({
        id: tutorial.id,
        title: tutorial.title,
        difficulty: diffMap[tutorial._difficulty] || 'core-practice',
        estimatedMinutes: Math.max(10, (tutorial.steps ? tutorial.steps.length : 10) * 2),
        file: `generated:${tutorial.id}`
      });
    }
  }

  return data;
}
