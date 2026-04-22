# CutAndCode — Interaction Design Guide

Reference for building drag-and-drop interactions across all tutorials.
Follow this when adding interactions to any new tutorial.

---

## Interaction Engine Architecture

- **File:** `js/interactions.js` — all interaction types and drag-and-drop logic
- **CSS:** `css/interactions.css` — styling for drag cards, drop zones, feedback
- **Wired in:** `js/tutorial.js` — detects `interaction` field in step JSON, renders it, locks Next button until complete
- **JSON field:** Add `"interaction": { ... }` to any step in a tutorial JSON file

## Available Interaction Types

### `stack-push-multi`
Drag multiple cards into a stack in a specific order.
```json
"interaction": {
  "type": "stack-push-multi",
  "cards": ["CALL", "BACK", "UNDO"],
  "stackContents": [],
  "capacity": 5
}
```

### `stack-push`
Drag a single card into a stack.
```json
"interaction": {
  "type": "stack-push",
  "cards": ["E"],
  "stackContents": ["A", "B", "C", "D"],
  "capacity": 8
}
```

### `stack-pop`
Drag the top card out of the stack into a discard zone.
```json
"interaction": {
  "type": "stack-pop",
  "stackContents": ["CALL", "BACK", "UNDO"],
  "expectedPop": "UNDO",
  "capacity": 5
}
```

## Planned Interaction Types (not yet built)

### `array-fill`
Drag letter cards into numbered array slots.

### `array-resize`
Two strips side by side; drag cards from old strip to new strip.

### `queue-enqueue`
Drag items into the right (IN) side of a queue.

### `queue-dequeue`
Items exit from the left (OUT) side.

### `linkedlist-insert`
Drag a node into position, then draw an arrow to connect (click/tap to draw).

### `sorting-swap`
Drag two cards to swap positions.

### `comprehension-check`
After an interaction, a popup asks "What just happened?" with multiple choice.

---

## Design Rules (from Maria's feedback)

### Tone
- **Wrong answers:** Use warm, encouraging language. Say "Good try! [hint], try again." Never use red/harsh styling.
- **Error feedback color:** Warm amber (#FFF8F0 background, #8A6A30 text, #E8D4A0 border), NOT red.
- **Success feedback:** Green (existing success color).
- **Completion feedback:** Blue/primary color.

### UX
- **Next button stays as "Next"** even when locked. Do NOT change button text to "Complete the activity first" or similar — it's annoying. Just disable the button silently.
- Keep interactions optional-feeling even though the Next button is locked. The student should feel invited, not blocked.
- Feedback messages auto-dismiss after 2.5 seconds (except completion messages which persist).

### Touch Support
- All interactions must work on mobile/tablet via touch events.
- Use a visual clone that follows the finger during touch drag.
- Highlight drop targets when finger hovers over them.

### Accessibility
- Respect `prefers-reduced-motion` — disable drag animations.
- All interactive elements need sufficient contrast.
- Drop zones should have visible dashed borders.

---

## How to Add Interactions to a New Tutorial

1. Identify which steps have a physical action the student could simulate on screen
2. Add an `"interaction"` field to that step's JSON (see types above)
3. Set `"diagram": null` for that step (the interaction replaces the static diagram)
4. Update the step's `"action"` text to reference dragging instead of physical materials
5. Test on both desktop (mouse drag) and mobile (touch drag)

## Animations Roadmap

These should be added to `css/interactions.css` and `js/interactions.js`:

- **Push animation:** Card slides down into the stack can with a slight wobble
- **Pop animation:** Card lifts up and out with a slight arc
- **Swap animation:** Two cards cross paths (for sorting tutorials)
- **Resize animation:** Old array fades/crumples away, new array slides in (for ArrayList)
- **Completion celebration:** Subtle confetti or pulse effect when all cards are placed

## Graphic Style Decisions

- **Illustration pack:** [To be decided — browsing Open Peeps, unDraw, Humaaans]
- **AI-generated illustrations:** Use ChatGPT/Gemini to create matching header images per tutorial
- **Interactive elements:** Keep craft-paper aesthetic (Caveat font, paper textures, tape, shadows)
- **Colors:** Stick to existing palette (blues, greens, lavender from variables.css)

## Standard Material Kit (7 items only)

All tutorials and generated content must use ONLY these materials:

1. **Paper** (strips, sheets, or squares)
2. **Colored pencils/pens**
3. **Tape**
4. **Sticky notes/squares**
5. **Paperclips**
6. **Coin/token**
7. **Bowls/cups**

**Removed:** scissors, string/yarn. String didn't work in testing. Complex structures like linked lists and binary trees are better implemented by drawing on paper with colored pens rather than connecting physical objects.
