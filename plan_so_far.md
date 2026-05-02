# CutAndCode Project Plan
**Last updated: April 21, 2026**

---

## What This Project Is

An interactive web app that teaches CS 1134 (Data Structures & Algorithms at NYU) through physical, hands-on simulations using household items. Students pick an exercise, gather simple materials (paper, scissors, bowls, tape, pen), and follow step-by-step tutorials that guide them through physically running algorithms. No coding answers are ever given; the student builds understanding through doing, then codes on their own.

**Creative AI angle:** Claude was used as a creative collaborator to design all tutorials. The app uses pre-generated content (no API keys, no runtime model needed).

**Hosting:** Free on GitHub Pages. Pure HTML/CSS/JS, no frameworks, no build tools.

**Repo:** https://github.com/tmemmy/CAI-final-project-prototype

---

## What's Been Built (v4)

### Content: 22 Tutorials Across 9 Topics

| Topic | Tutorials | Difficulty Range |
|-------|-----------|-----------------|
| Foundations | ArrayList | Warm-up |
| Stacks | Intro, ArrayStack, MidStack | Warm-up to Core |
| Queues | Intro, ArrayQueue (with resize) | Warm-up to Core |
| Linked Lists | SLL Intro, DLL Intro, Reverse by Node, Reverse by Data, Move Nodes | Warm-up to Challenge |
| Recursion | Intro (bowl stack), Counting Lowercase | Core to Challenge |
| Sorting | Bubble Sort, Insertion Sort, Merge Sort | Warm-up to Core |
| Searching | Binary Search, Two Pointers, Sliding Window | Core |
| Trees | Intro to Binary Trees, Tree Traversals (outline trick) | Warm-up to Core |
| Complexity | Growth Curves | Core |

### Interactive Features

**Drag-and-drop interactions:**
- Stack: push single card, push multiple in order, pop top card
- Queue: enqueue (drag into IN end), dequeue (drag front item out)
- Sorting: tap two highlighted cards to swap (animated cross-slide)
- Sliding window: slide a frame across an array with running sum
- Draw curve: sketch Big-O curves on a graph

**Animations:**
- Stack push/pop with slide in/out
- Sorting swap with cross-slide and bounce
- Queue enqueue cell slide-in
- Step bubble entrance, diagram reveal, flashcard 3D flip
- All respect prefers-reduced-motion

**SVG Diagrams (craft/collage style):**
- Arrays with paper cards, tape, scissors, pushpins
- Stacks as 3D see-through Pringles cans with chips
- Queues as arrow shapes (conveyor belt)
- Linked lists as node-pointer chains
- DLLs as trains with engine (header) and caboose (trailer)
- Trees as circles with wavy-line connections on a corkboard
- Call stacks as sticky notes with paper folds
- Growth curves graph

### Files

```
AlgoHands CAI/
├── index.html
├── css/
│   ├── variables.css, reset.css, layout.css
│   ├── components.css, tutorial.css, animations.css
│   ├── interactions.css, instructor.css
├── js/
│   ├── app.js, data.js, ui.js, tutorial.js
│   ├── components.js (all SVG diagram renderers)
│   ├── interactions.js (drag-and-drop engine)
│   ├── hero-animations.js, generator.js, instructor.js
├── data/
│   ├── topics.json (master index)
│   └── tutorials/ (22 JSON tutorial files)
├── images for graphics/ (doodle illustrations, logos, reference images)
└── docs/ (brand style guide, interaction design guide)
```

### How to Run
1. `cd "/Users/mariafraguas/development/Claudework/AlgoHands CAI"`
2. `python3 -m http.server 8080`
3. Open `http://localhost:8080`

---

## Key Design Rules

1. **NEVER show complete code solutions.** The student understands physically, then codes on their own.
2. **Maximum 3 em-dashes in the entire project.**
3. **Accessibility first.** Design for low-income students. Only use materials everyone has at home.
4. **Complexity labels:** Warm-up / Core Practice / Challenge.
5. **Recursion has 3 parts:** base case, recursive assumption, work done by current call.
6. **ArrayQueue tracks front + size, not front + back.** Back is always computed as (front + size) % capacity.
7. **DLL tutorials with sentinels use train-dll diagrams** (engine = header, caboose = trailer).
8. **Pre-generated content.** No API keys, no runtime model. Everything is baked in.

---

## What's Left

### Before April 30
- Deliverables: project writeup, design process docs, evaluation, next steps
- GitHub Pages deployment
- Optional: consistent illustration style (Open Peeps / unDraw)

### After April 30
- More tutorials: Classes, ArrayDeque, Selection Sort, Linear Search, BSTs
- Generative tutorial feature with API key
- Material Kit page
- Future course topics: Search Trees, Hash Tables, Priority Queues, Graphs
