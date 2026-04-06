// js/generator.js — Handles Claude API calls for tutorial generation

const MATERIAL_KIT = [
  'Paper strips (lined or blank)',
  'Scissors',
  'Pen or marker',
  'Small paper squares/cards',
  'Tape (any kind)',
  'Bowls or cups (4-5)',
  'Sticky notes',
  'String or yarn (2 colors)',
  'Paperclips',
  'Coins or small tokens'
];

const EXAMPLE_TUTORIAL_STRUCTURE = `{
  "id": "example-concept",
  "topic": "topic-id",
  "title": "Concept Name: A Catchy Subtitle",
  "subtitle": "One-line description of what the learner will do physically.",
  "encouragement": "A warm 2-3 sentence paragraph motivating the learner.",
  "realWorldExample": "A relatable real-world analogy for the concept.",
  "materials": [
    {
      "item": "Material name",
      "detail": "How to prepare it, size, quantity, etc.",
      "emoji": "relevant emoji"
    }
  ],
  "setup": [
    "Step 1 of preparation",
    "Step 2 of preparation"
  ],
  "steps": [
    {
      "id": 1,
      "instruction": "What the learner should do (can use <strong>bold</strong> for emphasis).",
      "action": "The physical action to take.",
      "checkpoint": "What their setup should look like now (or null).",
      "conceptNote": "How this connects to code, e.g. <code>some_function()</code> (or null).",
      "hint": "Optional hint text (or null).",
      "diagram": null
    }
  ],
  "reflection": [
    {
      "question": "A thought-provoking question about the concept.",
      "answer": "The answer to the question."
    }
  ]
}`;

export async function generateTutorial(concept, difficulty, apiKey) {
  const difficultyGuidance = {
    'warm-up': 'This is a WARM-UP tutorial. Keep it simple with 8-10 steps. Focus on one core operation. Use very clear, small incremental steps. Suitable for someone seeing this concept for the first time.',
    'core-practice': 'This is a CORE PRACTICE tutorial. Use 10-14 steps. Cover the main operations of the concept. Include some "stop and think" moments. The learner has basic familiarity.',
    'challenge': 'This is a CHALLENGE tutorial. Use 12-16 steps. Include edge cases, efficiency considerations, or combining multiple operations. The learner should already understand the basics.'
  };

  const systemPrompt = `You are a tutorial designer for CutAndCode, a web app that teaches data structures and algorithms through hands-on physical activities. Students use everyday materials to build physical models of abstract concepts.

IMPORTANT CONSTRAINTS:
- NEVER show complete code solutions. Only show small code snippets in conceptNote fields using <code> tags.
- Use physical metaphors throughout. The learner should be moving, cutting, arranging physical objects.
- Keep instructions concise and action-oriented.
- Materials MUST come from this standard kit (pick only what's needed, usually 3-5 items):
${MATERIAL_KIT.map((m, i) => `  ${i + 1}. ${m}`).join('\n')}

- The "topic" field should be a kebab-case identifier for the broader topic (e.g., "binary-trees", "sorting", "linked-lists", "graphs", "hash-tables").
- The "id" field should be kebab-case, like "binary-search-tree-insert" or "merge-sort-divide".
- Include 3-4 reflection questions with answers.
- Include 2-4 setup steps.
- Steps should have a mix of actions, checkpoints, concept notes, and hints (not every step needs all of them).
- Use <strong> tags for emphasis in instructions and <code> tags for code in conceptNote fields.
- Diagrams can be null for generated tutorials.

${difficultyGuidance[difficulty] || difficultyGuidance['core-practice']}

Return ONLY valid JSON matching this structure (no markdown, no code fences, just the JSON object):
${EXAMPLE_TUTORIAL_STRUCTURE}`;

  const userMessage = `Generate a hands-on tutorial for the concept: ${concept}. Difficulty level: ${difficulty}.`;

  const response = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': apiKey,
      'anthropic-version': '2023-06-01',
      'anthropic-dangerous-direct-browser-access': 'true'
    },
    body: JSON.stringify({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 4096,
      system: systemPrompt,
      messages: [
        { role: 'user', content: userMessage }
      ]
    })
  });

  if (!response.ok) {
    const errorBody = await response.text();
    throw new Error(`API error (${response.status}): ${errorBody}`);
  }

  const data = await response.json();
  const textContent = data.content.find(c => c.type === 'text');

  if (!textContent) {
    throw new Error('No text content in API response');
  }

  // Parse JSON from the response, handling potential markdown fences
  let jsonStr = textContent.text.trim();
  if (jsonStr.startsWith('```')) {
    jsonStr = jsonStr.replace(/^```(?:json)?\s*/, '').replace(/\s*```$/, '');
  }

  const tutorial = JSON.parse(jsonStr);

  // Ensure required fields exist
  if (!tutorial.id || !tutorial.title || !tutorial.steps) {
    throw new Error('Generated tutorial is missing required fields (id, title, or steps)');
  }

  return tutorial;
}
