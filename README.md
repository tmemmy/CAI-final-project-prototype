# CutAndCode

**Learn Data Structures & Algorithms with your hands, not just your eyes.**

CutAndCode is a web app that teaches CS data structures and algorithms through physical, hands-on simulations using household items. Students follow step-by-step tutorials that guide them through physically running algorithms with paper, scissors, bowls, tape, and pens.

**Live demo:** https://tmemmy.github.io/CAI-final-project-prototype/

## Topics (22 tutorials)

| Category | Tutorials |
|---|---|
| Foundations | ArrayList |
| Stacks | Intro to Stacks, ArrayStack, MidStack |
| Queues | Intro to Queues, ArrayQueue (with resize) |
| Linked Lists | Intro to SLL, Intro to DLL, Reversing DLL by Node, Reversing DLL by Data, Manually Moving Nodes |
| Recursion | Intro to Recursion, Counting Lowercase |
| Sorting | Bubble Sort, Insertion Sort, Merge Sort |
| Searching & Pointers | Binary Search, Two Pointers, Sliding Window |
| Trees | Intro to Binary Trees, Tree Traversals |
| Complexity | Growth Curves |

## Features

- **Step-by-step physical simulation tutorials** using household items (paper, bowls, tape, pens)
- **Interactive drag-and-drop**: push/pop cards on stacks, enqueue/dequeue in queues, tap-to-swap in sorting, slide windows across arrays
- **SVG diagrams** rendered in real-time: arrays, stacks (3D Pringles can), queues (arrow/conveyor), linked lists, DLL trains (engine + caboose), trees, call stacks, growth curves
- **Animations**: stack push/pop, sorting swap cross-slide, queue enqueue slide-in, all with reduced-motion support
- **Materials checklist** before each tutorial with doodle illustrations
- **Reflection flashcards** with 3D flip animation at the end of each tutorial
- **Instructor Mode**: generate new tutorials using Claude API
- **No frameworks, no build tools.** Pure HTML/CSS/JavaScript
- Deployed on GitHub Pages

## Instructor Mode

Instructors can generate new tutorials from any concept by entering a Claude API key. Generated tutorials are constrained to a standard kit of 7 materials and follow the same format as pre-built tutorials. The instructor reviews before publishing. Students never need API keys.

## Running Locally

```bash
cd "AlgoHands CAI"
python3 -m http.server 8080
# Open http://localhost:8080
```

## Tech Stack

- HTML / CSS / JavaScript (ES6 modules)
- No frameworks, no build tools
- GitHub Pages for hosting
- Claude (Anthropic) for tutorial generation in Instructor Mode

## Credits

Created by Maria Fraguas for Creativity and AI at NYU, 2026.

Built collaboratively with Claude Code (Anthropic).
