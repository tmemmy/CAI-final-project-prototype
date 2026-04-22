# CutAndCode: Project Prototype Documentation

**Maria Fraguas | Creative AI | April 2026**
**Role:** Creator, Designer, Project Manager
**Tools:** Claude (Anthropic), Claude Code CLI, HTML/CSS/JavaScript, GitHub Pages

---

## What is CutAndCode?

CutAndCode is a web app that teaches Data Structures and Algorithms through physical, hands-on simulations using household items. Instead of staring at code on a screen, students grab paper, colored pens, bowls, and tape, and physically run the algorithms at their desk. The app guides them step by step, and at the end, the code writes itself because they actually understand what's happening.

I built this because I'm taking CS 1134 (Data Structures & Algorithms at NYU), and the material is genuinely hard. One of my TAs suggested cutting out pieces of paper to simulate algorithms, and that changed everything for me. I started using paper strips for stacks, bowls for recursion, card swaps for sorting. I documented every single struggle I had and how I visualized each concept. That document became the foundation for CutAndCode.

**Try it live:** https://tmemmy.github.io/CAI-final-project-prototype/

**Source code:** https://github.com/tmemmy/CAI-final-project-prototype

---

## User Experience Design

### Design Evolution

The design went through three major iterations. Each one was informed by real feedback and testing.

#### V1: "Purple Grid" (March 24)

The first prototype was functional but clinical. Purple and amber color scheme. Diagrams were CSS-rendered grids with numbers inside boxes. It looked like every other algorithm visualization tool out there.

**What worked:** The step-by-step flow, materials checklist, and reflection flashcards all functioned. The hash-based routing meant back/forward buttons worked in the browser.

**What didn't work:** The diagrams felt like a textbook. There was nothing about the visual style that said "you're about to cut paper and stack bowls." The design didn't match the physical, crafty nature of the activity.

[INSERT SCREENSHOT: V1 topic grid and V1 step view]

#### V2: "Collage Craft" (April 1)

Based on instructor feedback to make it more visual and kinesthetic, I completely redesigned the diagram system. Instead of CSS boxes, every diagram now renders as an inline SVG with:

- Paper cutout cards with lined paper texture and drop shadows
- Slight rotations to feel hand-placed, not machine-generated
- Tape pieces holding cards down
- Handwritten Caveat font for all values and labels
- A warm cream-to-ivory gradient background
- Alternating card colors (light blue, pink, green, cream)

The goal was to make the screen feel like looking down at a desk with actual paper cutouts on it.

[INSERT SCREENSHOT: V2 step view with SVG diagrams]
[INSERT SCREENSHOT: V2 topic grid]

#### V3: "Instructor Mode" (April 5)

After the project plan presentation, the professor's main feedback was: "What if we make this generative and expansive?" She wanted instructors to be able to generate new tutorials from any concept, not just use the pre-built ones.

This led to the Instructor Mode feature: a separate view where an instructor enters a Claude API key, types a concept (e.g., "binary search trees"), selects a difficulty level, and the app generates a complete hands-on tutorial constrained to a kit of 10 standard materials. The instructor reviews it before publishing. Students never need API keys.

[INSERT SCREENSHOT: Instructor Mode page]

#### Palette Exploration (April 5)

I'm currently exploring three color palette options to find the right feel for an educational app that promotes calm and focus:

- **Palette A "Calm Classroom":** Blue-forward, traditional educational feel
- **Palette B "Craft Table":** Warm terracotta, matches the physical materials aesthetic
- **Palette C "Gentle Focus":** Muted blue-green hybrid, calming but not cold

[INSERT SCREENSHOT: Palette comparison - all 3 side by side]

The font system across all three: **Nunito** for all UI text (friendly, rounded, highly readable), **Caveat** for diagram labels and handwritten annotations, **Quicksand** for small labels and badges.

---

## Development Plan

### AI Model

**Claude (Anthropic)** is the only AI model used in this project. It serves two roles:

1. **Design collaborator (offline):** I used Claude Code (Anthropic's CLI tool) as my technical collaborator throughout the entire build. I came up with the ideas, the physical metaphors, and the pedagogical structure. Claude implemented the code, suggested improvements, and filled in technical details from my direction. I was the project manager and ideas person. Claude was the developer.

2. **Tutorial generator (runtime):** In Instructor Mode, Claude generates new tutorials on-the-fly from a concept input. The generation is constrained by a carefully crafted system prompt that includes:
   - The 7-material kit constraint
   - The tutorial JSON format
   - Rules like "never show complete code solutions" and "use physical metaphors"
   - The selected difficulty level

### Generation Prompt Design

The system prompt for tutorial generation includes a complete example tutorial (the stacks push/pop tutorial) as a format reference. This is a form of few-shot prompting: by showing Claude exactly what a good tutorial looks like, the generated output follows the same structure consistently.

Key constraints in the prompt:
- Materials must come from the 7-item standard kit (paper, colored pencils/pens, tape, sticky notes/squares, paperclips, coins/tokens, bowls/cups)
- Steps must include physical actions, not just descriptions
- Diagrams must use the supported types (array, callstack, midstack)
- Reflection questions must be flashcard-format with answers
- No complete code solutions, ever

### Tools Used

| Tool | Purpose |
|---|---|
| Claude Code CLI (Anthropic) | Primary development tool. All code written collaboratively through Claude Code. |
| Claude API (Anthropic) | Runtime tutorial generation in Instructor Mode |
| HTML / CSS / JavaScript (ES6 modules) | App built with zero frameworks, zero build tools |
| GitHub Pages | Free hosting, zero config deployment |
| GitHub | Version control, source code hosting |
| ChatGPT (OpenAI) | Generated illustration images for slide deck and documentation |
| Python (python-pptx) | PowerPoint generation for project plan slides |

### Architecture

The app is intentionally simple:

```
CutAndCode/
  index.html              Single-page app
  css/                    6 modular stylesheets
  js/                     7 ES6 modules (app, data, ui, tutorial, components, instructor, generator)
  data/
    topics.json           Master index
    tutorials/*.json      Pre-built tutorial content
```

All pre-built tutorials are static JSON files. Generated tutorials are stored in the browser's localStorage. No backend, no database, no accounts. The app works offline after the first page load (except for the generative feature, which requires an API call).

---

## Photos of the Prototype

### Physical Simulations in Action

These are photos of me actually running the algorithms with paper, colored pens, and bowls. This is what CutAndCode teaches students to do.

[INSERT PHOTO: Bowl stack with "sum_to(1) = 1 DONE!" sticky note]
[INSERT PHOTO: Paper cards A and B being held/stacked]
[INSERT PHOTO: Number cards scattered with front/back index labels]
[INSERT PHOTO: Linked list drawn on paper with cursor annotations]
[INSERT PHOTO: Paper strips with numbers laid out as array]
[INSERT PHOTO: Operators (+, -, *, /) and number cards on desk]

### App Screenshots

[INSERT SCREENSHOT: Welcome/landing page]
[INSERT SCREENSHOT: Topic selection grid]
[INSERT SCREENSHOT: Materials checklist]
[INSERT SCREENSHOT: Tutorial step with SVG diagram]
[INSERT SCREENSHOT: Reflection flashcards]
[INSERT SCREENSHOT: Instructor Mode]

### Video Walkthrough

[INSERT VIDEO: Screen recording of full user flow - landing page to completing a tutorial]
[INSERT VIDEO: Screen recording of Instructor Mode generating a tutorial]

---

## Source Code and Links

- **Live prototype:** https://tmemmy.github.io/CAI-final-project-prototype/
- **Source code (GitHub):** https://github.com/tmemmy/CAI-final-project-prototype
- **GitHub Pages:** Already deployed (extra credit)

### Key Files

| File | What it does |
|---|---|
| index.html | Single-page app with all views |
| js/components.js | SVG diagram renderer (collage/craft style) |
| js/instructor.js | Instructor Mode UI |
| js/generator.js | Claude API integration for tutorial generation |
| js/data.js | Data loading + localStorage for generated tutorials |
| data/tutorials/*.json | Pre-built tutorial content (4 tutorials) |
| css/variables.css | Design system tokens (colors, fonts, spacing) |

---

## Troubleshooting Log

### 1. Browser caching old CSS
**Problem:** After updating the color palette and diagram styles, the browser kept showing the old purple design.
**Fix:** Added cache-busting query parameters (?v=3) to all CSS and JS file imports in index.html. This forces the browser to load fresh files.

### 2. SVG diagrams not rendering
**Problem:** Rewrote the diagram renderers from CSS divs to inline SVGs, but nothing changed visually.
**Root cause:** Same browser caching issue, plus the Caveat font wasn't loading because I used @import inside a CSS file instead of a link tag in the HTML.
**Fix:** Moved the Google Fonts import to the HTML link tag and added cache-busting.

### 3. CSS-to-SVG diagram transition
**Problem:** The original diagrams were CSS grids (divs with borders). Converting to inline SVGs required rewriting the entire rendering pipeline.
**Approach:** Instead of creating individual SVG files for each step (would have been 30+ files), I rewrote the JavaScript renderers to programmatically generate inline SVGs from the tutorial JSON data. This means any new tutorial automatically gets the collage/craft style diagrams.

### 4. PowerPoint export quality
**Problem:** Instructor wanted a Google Slides deck. Built the presentation as HTML first (looked great), but converting to PDF and then to PowerPoint lost all the visual quality.
**Lesson learned:** Should have asked about the output format before building. Eventually rebuilt the slides using python-pptx, which produced an editable .pptx file that uploaded to Google Slides.

### 5. Generative tutorial accuracy concerns
**Problem:** Worried about AI generating inaccurate educational content.
**Solution:** Made tutorial generation instructor-only. The instructor reviews and edits before publishing. Students only see approved tutorials. Also constrained the generation to a fixed material kit and strict format to reduce hallucination risk.

### 6. GitHub Pages deployment
**Problem:** The app uses ES6 modules, which require a server (won't work with file:// protocol).
**Fix:** GitHub Pages serves files over HTTPS, so ES6 modules work. No additional configuration needed. Just push to the repo and Pages serves the site.

---

## What Support Do I Need From the Instructor

1. **Claude API key for Instructor Mode:** The generative tutorial feature is built and ready, but I need a Claude API key to demo it. I've built it so the instructor enters the key once and it's stored locally. Students never need API keys.

2. **Feedback on color palette:** I'm deciding between three palette options (Calm Classroom, Craft Table, Gentle Focus). Would love the instructor's input on which feels most appropriate for an educational tool.

3. **Feedback on tutorial content accuracy:** I've physically tested all 4 current tutorials myself. As I build the remaining 6, I want to make sure the physical simulations actually teach the right concepts. If any DSA instructors or TAs could try them and flag issues, that would be very helpful.

4. **Illustration approach:** The instructor suggested looking for free graphic packs and using AI to generate illustrations. I'd appreciate any specific recommendations for illustration packs that match a hand-drawn/craft style, or best practices for using AI image generators (like ChatGPT's image generation) to create consistent educational illustrations.

---

## What's Next (Remaining Week)

- Finalize color palette and apply across the entire app
- Build 6 more static tutorials (linked list, doubly linked list, binary search, insertion sort, binary trees, Big-O comparison)
- Test generative tutorial feature with Claude API key
- Add basic CSS animations to SVG diagrams (cards sliding in on push, lifting off on pop)
- Add quiz checkpoints mid-tutorial to break up repetitiveness
- Polish mobile responsiveness
- Record video walkthroughs
