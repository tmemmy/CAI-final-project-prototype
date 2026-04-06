# CutAndCode Project Plan So Far
**Last updated: March 24, 2026**

---

## What This Project Is

An interactive web app that teaches CS 1134 (Data Structures & Algorithms at NYU) through physical, hands-on simulations using household items. Students pick an exercise, gather simple materials (paper, scissors, bowls, tape, pen), and follow step-by-step tutorials that guide them through physically running algorithms. No coding answers are ever given; the student builds understanding through doing, then codes on their own.

**Creative AI angle:** Claude was used as a creative collaborator to design all tutorials. The app uses pre-generated content (no API keys, no runtime model needed).

**Hosting:** Free on GitHub Pages. Pure HTML/CSS/JS, no frameworks, no build tools.

---

## What's Been Built So Far (Prototype)

### Files Created
```
CutAndCode CAI/
├── index.html                  (single-page app with 4 views)
├── css/
│   ├── variables.css           (design tokens: colors, fonts, spacing)
│   ├── reset.css               (CSS reset)
│   ├── layout.css              (page layout, welcome page, responsive)
│   ├── components.css          (cards, badges, chips, buttons, diagrams)
│   ├── tutorial.css            (step bubbles, checkpoints, materials, reflections)
│   └── animations.css          (step reveal, fade-in, slide-up)
├── js/
│   ├── app.js                  (router, state, initialization)
│   ├── data.js                 (JSON loading and indexing)
│   ├── ui.js                   (DOM helpers: show view, breadcrumbs, scroll)
│   ├── tutorial.js             (step-by-step engine: materials > steps > reflection)
│   └── components.js           (renderers: topic cards, tutorial lists, diagrams, steps)
├── data/
│   ├── topics.json             (master index of 3 topics)
│   └── tutorials/
│       ├── stacks-operations.json    (13 steps: push, pop, peek, LIFO)
│       ├── sorting-bubble.json       (11 steps: compare, swap, passes, O(n²))
│       └── recursion-intro.json      (15 steps: bowl stack method for sum_to(4))
├── CutAndCode_learner_struggles.md    (organized learner struggles by topic, 21 sections)
└── plan_so_far.md              (this file)
```

### How to Run It
1. Open terminal
2. `cd "/Users/mariafraguas/development/Claudework/CutAndCode CAI"`
3. `python3 -m http.server 8080`
4. Open browser to `http://localhost:8080`

(ES modules require a local server; `file://` won't work)

### What Works
- Landing page with tagline and "Let's get started" button
- Topic grid (3 cards: Stacks, Sorting, Recursion)
- Tutorial list within each topic
- Materials checklist screen
- Step-by-step tutorial view with Next/Previous navigation
- CSS-rendered diagrams (arrays with pointers, call stack frames)
- Collapsible "Connect to code" concept notes
- Expandable hints
- Reflection section at the end
- Hash-based routing (back/forward buttons work)
- Responsive layout

---

## Changes Still Needed (From Latest Feedback)

### Must Fix
- [ ] **Remove full code from recursion step 14.** Core rule: NEVER show complete code solutions. Replace with a prompt encouraging the student to try writing it themselves.
- [ ] **Em-dash audit.** Maximum 3 em-dashes in the ENTIRE project. Replace the rest with colons, semicolons, or restructured sentences. Check all JSON tutorials and HTML.
- [ ] **Restructure recursion teaching.** Include three parts: (1) base case, (2) recursive assumption ("trust that the function works on smaller input"), (3) the work done by the current call. Not just base case + recursive case.

### UI/Design Changes
- [ ] **Complexity labels.** Replace "beginner" / "intermediate" with "Warm-up" / "Core Practice" / "Challenge."
- [ ] **Flashcard reflections.** Reflection questions should be clickable cards that flip to reveal the answer.
- [ ] **SVG graphics.** Replace emoji-based topic icons with lightweight inline SVGs in a hand-drawn/sketch style.
- [ ] **Colors as teaching tool.** Use different colors for front/back indices, slow/fast pointers, etc., in future tutorials.

### Content/Accessibility
- [ ] **Materials alternatives.** Always suggest substitutes (e.g., "sticky notes, or painter's tape, or regular tape, or glue"). Encourage students to be creative with what they have.
- [ ] **Exercise difficulty mapping.** Follow the actual lab/homework progression. After the warm-up intro, exercises should mirror real course problems.
- [ ] **Two-step structure.** Each topic starts with a simplified "What is this?" intro, then exercises increase in complexity (matching lab/homework difficulty curve).
- [ ] **"Try it yourself" sections.** Should increase in complexity more than they currently do.

### Future
- [ ] **Choose a project name.** Current ideas: BuildTheLogic (top pick), StackIt, AlgoBlocks, CodeCraft, PaperCode, PaperStack, ThinkWithYourHands, DeskAlgo, AlgoKit, FoldSort. Or keep CutAndCode. Decision postponed.
- [ ] **Add tutorials for all remaining topics.** Mapped from the learner struggles doc (21 sections covering: Classes/OOP, Memory Maps, List Comprehension, Nested Loops, Helper Functions, Big-O, Time Complexity, Amortized Analysis, ArrayList, Searching, Pointer Techniques, Generators, Sorting algos, Linked Lists, Binary Trees, and more).
- [ ] **Topics not yet covered in class.** From syllabus: Search Trees, Hash Tables, Priority Queues, Sorting & Selection, Graph Algorithms. Remind Maria to share materials when available.
- [ ] **GitHub Pages deployment.** Initialize git repo, push, enable Pages.

---

## Key Design Rules (Do Not Break)

1. **NEVER show complete code solutions.** The student should understand the algorithm physically, then code on their own.
2. **Maximum 3 em-dashes in the entire project.**
3. **Accessibility first.** Design for low-income students, people without computers, developing countries. Only use materials everyone has at home.
4. **Complexity labels:** "Warm-up" / "Core Practice" / "Challenge" (not beginner/intermediate/advanced).
5. **Recursion has 3 parts:** base case, recursive assumption, work done by current call.
6. **UI is fully editable later.** CSS is separated from content (JSON). Visual redesigns don't require touching exercises.
7. **Pre-generated content.** No API keys, no runtime model. Everything is baked in.
8. **Encourage creativity.** Suggest material alternatives; never assume the student has specific supplies.

---

## Reference Documents

- **Learner struggles:** `CutAndCode_learner_struggles.md` in this folder (21 sections of organized struggles, design ideas, and exercise mappings)
- **Course materials:** `/Users/mariafraguas/Desktop/Academic/CS-UY 1134 Data Structures & Algorithms (ALEC, LAB4)/`
  - HW 1-7, Labs 1-12, sample midterms, exams, textbook, syllabus
- **Professor's GitHub:** https://github.com/sebastianromerocruz/CS1134-data-structures-and-algorithms/tree/main
- **Hiroki39 GitHub:** https://github.com/Hiroki39/CS-UY-1134/blob/master/DataStructure/LinkedBinaryTree.py
- **Claude memory:** All project context, feedback, and references saved in `/Users/mariafraguas/.claude/projects/-Users-mariafraguas/memory/`
