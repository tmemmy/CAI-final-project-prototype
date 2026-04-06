# CutAndCode CAI: Project Plan Presentation
## Slide-by-Slide Content Outline
### Creative AI Class, Due April 1, 2026
### ~5 minutes, 12 slides

---

## Slide 1: Title Slide

**Title:** CutAndCode CAI (name TBD)
**Subtitle:** Learning Data Structures with Your Hands
**Bottom line:** Maria Fraguas | Creative AI | April 2026

**Visual:** App logo/wordmark placeholder. Clean, minimal.

**Speaker notes:**
"Hey everyone, I'm Maria. My project is called CutAndCode, at least for now. It's a web app that teaches data structures and algorithms through physical, hands-on simulations. You use stuff you already have at home: paper, scissors, bowls, tape. No fancy equipment. I'll walk you through how it works, how I used AI to build it, and where it's going."

---

## Slide 2: The Problem

**Title:** CS Students Struggle With Abstract Concepts

- Data Structures & Algorithms (CS 1134 at NYU) is one of the hardest intro CS courses
- Students can't visualize how algorithms actually work: recursion, pointer movement, stack operations
- Recursion alone: students don't see the call stack pause, build up, then unravel
- Existing resources (textbooks, YouTube) stay abstract. Code on a screen doesn't click for everyone.
- Students memorize syntax without understanding what's happening underneath

**Visual:** 2-3 short quotes pulled from the learner struggles doc (styled as callout boxes). Example: "The hardest part of recursion is visualizing how the stack unravels afterwards."

**Speaker notes:**
"So I'm taking Data Structures and Algorithms at NYU right now. It's hard. And the thing I kept running into, for myself and other students, is that the concepts are really abstract. Recursion, sorting, pointer techniques. You can watch a lecture, read the textbook, stare at code, and still not get it. The problem isn't intelligence. It's that these topics need a different kind of learning than just reading."

---

## Slide 3: The Idea

**Title:** Physical Simulations With Household Items

- Students pick a topic (Stacks, Sorting, Recursion...)
- App shows a materials list: paper strips, scissors, bowls, tape, pen
- Step-by-step tutorial guides them through physically running the algorithm
- Example: for recursion, you stack bowls. Each bowl is a function call. You write the argument on a sticky note, mark it "WAITING," and keep stacking until you hit the base case. Then you unstack and fill in the answers.
- No code solutions are ever shown. You understand it physically, then code on your own.

**Visual:** `stack-hands.svg` or a doodle-style sketch of hands stacking paper strips. Hand-drawn/sketch aesthetic.

**Speaker notes:**
"The idea is simple. Instead of just reading about how a stack works, you build one. You cut out paper strips, number them, and physically push and pop. For recursion, you grab bowls from your kitchen, stack them up, write sticky notes. The algorithm becomes something you can touch and see. And the app never gives you the code answer. The point is: once you get it physically, the code writes itself."

---

## Slide 4: Creativity & AI Connection

**Title:** Claude as Creative Collaborator

- All tutorial content was designed collaboratively with Claude (Anthropic's AI)
- Process: I described my learning struggles in detail. Claude helped turn those into structured, step-by-step physical simulations.
- The AI didn't just generate content. It helped me figure out the right physical metaphors: bowls for recursion, paper strips for stacks, card swaps for sorting.
- Creative back-and-forth: I'd say "this doesn't feel right," Claude would suggest a new approach, I'd refine it
- No runtime AI in the app. All content is pre-generated. Zero API keys needed.

**Visual:** Diagram showing the collaborative loop: Maria's struggles > Claude brainstorm > tutorial draft > Maria tests/refines > final tutorial JSON

**Speaker notes:**
"Here's the AI angle. I used Claude as a creative partner to design every tutorial. I didn't just ask it to write steps. I dumped all my actual learning struggles into the conversation: what confused me, what clicked, what didn't. Then Claude and I went back and forth designing physical metaphors. Like, bowls for recursion came from a long conversation about how to make the 'pause and wait' of a recursive call physically visible. All the content is baked into JSON files. There's no AI running when a student uses the app."

---

## Slide 5: Target Use / Audience

**Title:** Who This Is For

- Primary: CS 1134 students at NYU (or any intro DSA course)
- Visual and kinesthetic learners who don't learn well from lectures and textbooks alone
- Accessibility focus:
  - Free, hosted on GitHub Pages
  - No downloads, no accounts, no frameworks
  - Works on any device with a browser
  - Materials: paper, scissors, tape, pen, bowls. Things everyone has.
  - Designed with low-income students and developing countries in mind
- Secondary: TAs and tutors looking for teaching tools

**Visual:** Icons or sketches representing the audience: a student at a desk with paper strips, a phone showing the app, a globe

**Speaker notes:**
"The target audience is students like me. People taking a data structures course who learn better by doing. Visual and kinesthetic learners. But accessibility was a huge design priority. The app is free, runs on GitHub Pages, no sign-up, no download. It works on a phone. And the materials are things everyone has: paper, scissors, tape. I specifically designed it so a student with no money and a basic phone can use this. That's the whole point."

---

## Slide 6: App Architecture & Components

**Title:** How It's Built

- Pure HTML, CSS, JavaScript. No frameworks, no build tools.
- Single-page app with hash-based routing
- Content lives in JSON files (completely separate from UI code)
- CSS is modular: variables, layout, components, tutorial styles, animations
- JS modules: router/state, data loading, UI helpers, tutorial engine, component renderers
- Deployable to GitHub Pages with zero config

**File structure (simplified):**
```
index.html
css/  (variables, reset, layout, components, tutorial, animations)
js/   (app, data, ui, tutorial, components)
data/ (topics.json, tutorials/*.json)
```

**Visual:** Simplified architecture diagram: index.html at top, arrows to CSS modules, JS modules, and JSON data files

**Speaker notes:**
"Tech-wise, it's intentionally simple. Pure HTML, CSS, and JS. No React, no build step. The content is all in JSON files, totally separate from the code that renders it. That means I can redesign the entire UI without touching any tutorial content, or add 20 new tutorials without touching the CSS. It's a single-page app with hash routing, so back and forward buttons work. And it deploys straight to GitHub Pages."

---

## Slide 7: User Journey / Wireframe

**Title:** How a Student Uses It

Flow:
1. Landing page: tagline + "Let's get started"
2. Topic grid: pick Stacks, Sorting, or Recursion
3. Tutorial list: see available exercises with difficulty labels (Warm-up / Core Practice / Challenge)
4. Materials checklist: gather what you need before starting
5. Step-by-step tutorial: guided instructions with Next/Previous navigation
6. Reflection: flashcard-style questions to test understanding

**Visual:** `app-flow.svg` showing the screen flow as connected wireframes (landing > topics > tutorial list > materials > steps > reflection)

**Speaker notes:**
"Here's the user journey. You land on the home page, click get started, pick a topic. Then you see the tutorials for that topic, labeled by difficulty. Before you start, there's a materials checklist so you can grab everything. Then you go step by step through the physical simulation. At the end, there are reflection questions to make sure the concept actually stuck. The whole thing is linear and simple on purpose."

---

## Slide 8: Tutorial Example: Stacks

**Title:** Example: Stack Push & Pop

- Topic: Stacks (LIFO: Last In, First Out)
- Materials: paper strip with numbered boxes, scissors, pen
- What you do:
  - Cut out numbered pieces
  - "Push" by placing a piece on top of the stack
  - "Pop" by removing the top piece
  - Track the top index with a pointer you move by hand
- 13 steps. Covers push, pop, peek, and the LIFO principle.
- Ends with: "Now try implementing this in Python."

**Visual:** `stack-hands.svg`: doodle-style illustration of hands placing numbered paper pieces onto a stack. Pointer arrow labeled "top."

**Speaker notes:**
"Here's what a tutorial actually looks like. For stacks, you cut out a paper strip with numbered boxes, then cut out little numbered pieces. Push means you place a piece on top. Pop means you take the top one off. You physically move a pointer to track where the top is. After 13 steps, you understand LIFO because you just did it with your hands. Then the app says: now go write the code yourself."

---

## Slide 9: Tutorial Example: Recursion

**Title:** Example: The Bowl Stack Method

- Topic: Recursion (understanding the call stack)
- Materials: 4-5 bowls or cups, sticky notes, pen
- What you do:
  - Each recursive call = place a new bowl on the stack
  - Write the argument on a sticky note, stick it on the bowl
  - Mark it "WAITING": the function is paused
  - Keep stacking until you hit the base case
  - Then unstack one at a time, filling in the return value
- 15 steps. Covers base case, recursive assumption, and the work done by each call.
- Uses `sum_to(4)` as the running example

**Visual:** `recursion-bowls.svg`: doodle-style drawing of stacked bowls with sticky notes showing "sum_to(4) WAITING", "sum_to(3) WAITING", down to "sum_to(0) = 0" at base

**Speaker notes:**
"Recursion is the one I'm most proud of. Students stack actual bowls. Each bowl is a function call. You write the argument on a sticky note: sum_to(4), sum_to(3), all the way down. Each one says WAITING because the function is literally paused. When you hit the base case, sum_to(0) returns 0, and you start unstacking. You fill in each answer on the way back up. By the end, you've physically watched the call stack build and unravel. That's the moment it clicks."

---

## Slide 10: AI/ML Models Used

**Title:** AI/ML in This Project

- **Claude (Anthropic):** primary creative collaborator
  - Designed all physical simulation metaphors (bowls, paper strips, card swaps)
  - Wrote step-by-step tutorial content from Maria's learning struggles
  - Structured the learner struggles document (21 topic sections with exercises mapped to course materials)
  - Helped plan app architecture and file structure
- **No runtime AI.** The app ships with all content pre-baked in JSON.
- No API keys. No model calls. No internet required after first page load.
- This is a "Creative AI" project in the truest sense: AI as a design partner, not a feature.

**Visual:** Simple diagram: Claude icon on the left, arrow labeled "design collaboration" pointing to JSON files, arrow pointing to the static web app. No AI box inside the app.

**Speaker notes:**
"For AI and ML models: it's just Claude. But the way I used it is the whole point of the project. Claude wasn't a feature I plugged into the app. It was my creative partner during the design process. I gave it my real struggles, and we co-designed every tutorial. The output is static JSON. Once the content is written, there's no AI involved at runtime. Students don't need internet after the page loads. That's by design: accessibility means no dependencies."

---

## Slide 11: What's Built So Far (Early Prototyping)

**Title:** Current State of the Prototype

- 3 tutorials complete:
  - Stacks: Push & Pop (13 steps)
  - Sorting: Bubble Sort (11 steps)
  - Recursion: Bowl Stack Method (15 steps)
- 21 topics mapped from learner struggles doc, ready to be built
- Working features:
  - Landing page, topic grid, tutorial list
  - Materials checklist screen
  - Step-by-step navigation with Next/Previous
  - CSS-rendered diagrams (arrays with pointers, call stack frames)
  - Collapsible "Connect to code" concept notes
  - Expandable hints
  - Reflection section
  - Responsive layout, hash-based routing
- Runs locally with `python3 -m http.server`

**Visual:** Screenshot of the app (topic grid view and a step-by-step tutorial view, side by side)

**Speaker notes:**
"Here's where we are. Three full tutorials are done: stacks, bubble sort, and recursion. The app works end to end. You can browse topics, see the tutorial list, check off materials, go through every step, and do the reflection at the end. It has responsive layout, working navigation, diagrams, hints, concept notes. It's not deployed yet, but it runs locally. And I have 21 topics mapped out from my learner struggles document, so the content pipeline is ready."

---

## Slide 12: Challenges & Questions

**Title:** Current Challenges + Questions for You

**Challenges:**
- Scaling content: 3 tutorials done, 21 topics to cover. Each one needs a unique physical metaphor.
- Visual style: instructor feedback says to use doodle-style SVG diagrams of hands cutting/folding paper, not photos or plain number grids. Need to create these.
- Some topics are harder to simulate physically (Big-O proofs, time complexity analysis). Still figuring out good metaphors.
- Recursion tutorial structure: needs to clearly teach 3 parts (base case, recursive assumption, work done by current call), not just 2.
- Project naming: still TBD.

**Questions for instructor:**
- For topics that are more analytical than physical (Big-O, amortized analysis): is it okay to mix in non-physical interactive elements, or should everything stay hands-on?
- How far should the doodle-style visuals go? Full illustrated guides per step, or just key moments?
- Any recommendations for creating hand-drawn SVG illustrations efficiently?

**Visual:** Split layout: challenges on the left, questions on the right

**Speaker notes:**
"Challenges. The biggest one is scale. I have 3 tutorials, but 21 topics to cover. Each one needs its own physical metaphor, and some topics, like Big-O proofs or amortized analysis, are hard to make physical. I'm also working on the visual style. The feedback I got was: use doodle-style diagrams showing hands actually cutting and moving paper, not just number grids. That's a lot of illustration work. So my questions for you are: for the more analytical topics, can I mix in non-physical interactive elements? How detailed should the doodle visuals be? And do you have any tips for creating hand-drawn SVGs efficiently? That's it. Thanks."

---

## Notes for Maria

- Total: 12 slides, ~5 minutes at 25-30 seconds per slide
- SVGs needed: `stack-hands.svg`, `recursion-bowls.svg`, `app-flow.svg` (at minimum)
- Optional: `sorting-swap.svg` if you want to show the sorting example too
- Screenshots: take 1-2 of the live prototype for Slide 11
- Keep slide text minimal. The bullet points above are your MAX. Cut further for the actual slides. Let the speaker notes do the heavy lifting.
- Practice the speaker notes out loud at least twice before presenting.
