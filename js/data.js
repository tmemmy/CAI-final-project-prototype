let topicsData = null;
const tutorialCache = {};

export async function loadTopics() {
  if (topicsData) return topicsData;
  const res = await fetch('data/topics.json');
  topicsData = await res.json();
  return topicsData;
}

export async function loadTutorial(filePath) {
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
