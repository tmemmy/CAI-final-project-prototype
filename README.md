# CutAndCode

**Learn Data Structures & Algorithms with your hands, not just your eyes.**

CutAndCode is a web app that teaches CS data structures and algorithms through physical, hands-on simulations using household items. Students follow step-by-step tutorials that guide them through physically running algorithms with paper, scissors, bowls, tape, and pens.

**Live demo:** https://tmemmy.github.io/CAI-final-project-prototype/

## Topics

| Category | Tutorials |
|---|---|
| Foundations | ArrayList |
| Stacks | Intro to Stacks, ArrayStack, MidStack |
| Queues | Intro to Queues, ArrayQueue |
| Linked Lists | Intro to Singly Linked Lists, Intro to Doubly Linked Lists |
| Recursion | Intro to Recursion |
| Sorting | Bubble Sort |
| Searching & Pointers | Binary Search, Two Pointers |
| Trees | Intro to Binary Trees |
| Complexity | Coming soon |

## Features

- Step-by-step physical simulation tutorials
- SVG diagrams rendered in real-time (stacks, queues, linked lists, trees)
- Materials checklist before each tutorial
- Reflection flashcards at the end of each tutorial
- Instructor Mode: generate new tutorials using Claude API
- No frameworks, no build tools. Pure HTML/CSS/JavaScript.
- Deployed on GitHub Pages

## Instructor Mode

Instructors can generate new tutorials from any concept by entering a Claude API key. Generated tutorials are constrained to a standard kit of 10 materials and follow the same format as pre-built tutorials. The instructor reviews before publishing. Students never need API keys.

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

Created by Maria Fraguas for Creative AI at NYU, 2026.

Built collaboratively with Claude Code (Anthropic).
