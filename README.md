# Cut and Code

**Learn Data Structures & Algorithms with your hands, not just your eyes.**

An interactive web app that teaches CS 1134 (Data Structures & Algorithms at NYU) through physical, hands-on simulations using household items. Students pick a topic, gather simple materials (paper, scissors, bowls, tape, pen), and follow step-by-step tutorials that guide them through physically running algorithms. No coding answers are ever given; the student builds understanding through doing, then codes on their own.

**Live demo:** https://tmemmy.github.io/CAI-final-project/

**Creative AI angle:** Claude was used as a creative collaborator to design all tutorials and interactive components. The app uses pre-generated content (no API keys needed for students).

## Topics (22 tutorials)

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

## Features

### Drag-and-drop interactions
- Stack: push single card, push multiple in order, pop top card
- Queue: enqueue (drag into IN end), dequeue (drag front item out)
- Sorting: tap two highlighted cards to swap (animated cross-slide)
- Sliding window: slide a frame across an array with running sum
- Draw curve: sketch Big-O curves on a graph

### Animations
- Stack push/pop with slide in/out
- Sorting swap with cross-slide and bounce
- Queue enqueue cell slide-in
- Step bubble entrance, diagram reveal, flashcard 3D flip
- All respect prefers-reduced-motion

### SVG Diagrams (craft/collage style)
- Arrays with paper cards, tape, scissors, pushpins
- Stacks as 3D see-through Pringles cans with chips
- Queues as arrow shapes (conveyor belt)
- Linked lists as node-pointer chains
- DLLs as trains with engine (header) and caboose (trailer)
- Trees as circles with wavy-line connections on a corkboard
- Call stacks as sticky notes with paper folds
- Growth curves graph

### Other
- **Materials checklist** before each tutorial with doodle illustrations
- **Reflection flashcards** with 3D flip animation at the end of each tutorial
- **No frameworks, no build tools.** Pure HTML/CSS/JavaScript
- Deployed on GitHub Pages

## Instructor Mode

Instructors can generate new tutorials from any concept by entering a Claude API key. Generated tutorials are constrained to a standard kit of 7 materials and follow the same format as pre-built tutorials. The instructor reviews before publishing. Students never need API keys.

## Design Rules

1. **NEVER show complete code solutions.** The student understands physically, then codes on their own.
2. **Accessibility first.** Design for low-income students. Only use materials everyone has at home.
3. **Complexity labels:** Warm-up / Core Practice / Challenge.
4. **Recursion has 3 parts:** base case, recursive assumption, work done by current call.
5. **ArrayQueue tracks front + size, not front + back.** Back is always computed as (front + size) % capacity.
6. **DLL tutorials with sentinels use train-dll diagrams** (engine = header, caboose = trailer).
7. **Pre-generated content.** No API keys, no runtime model. Everything is baked in.

## Tech Stack

- HTML / CSS / JavaScript (ES6 modules)
- No frameworks, no build tools
- GitHub Pages for hosting
- Claude (Anthropic) for tutorial generation in Instructor Mode

## Credits

Created by Maria Fraguas for Creativity and AI at NYU, 2026.

Built collaboratively with Claude Code (Anthropic).
