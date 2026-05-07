# Cut and Code — Learner Struggles & Design Notes
## Organized from Maria's Stream of Consciousness

This document captures every learning struggle and design idea Maria described, organized by topic. These insights will drive the design of every physical simulation tutorial in the Cut and Code project.

---

## 1. CLASSES & OBJECT-ORIENTED PROGRAMMING

### Struggles
- Understanding what a class IS and how it works — this is the foundation of OOP and the most confusing part of early Python
- Not knowing what the constructor (`__init__`) should contain or what variables to define
- The `self.` notation is messy and hard to read, especially when it chains (`self.something.something`)
- Looking at Lab 1's Student class and not remembering how the syntax works — getting later questions wrong (e.g., switching Peter and Tom's courses)
- Lab 2's Polynomial class and UnsignedBinaryInteger class feel extremely overwhelming
- Even now, far ahead in the course, Labs 1 and 2 coding sections remain really challenging
- Not knowing where to start when looking at a class implementation problem
- There's a mental block when looking at classes — feeling overwhelmed because you don't fully understand what they do
- Dunder methods (`__add__`, `__repr__`, `__mul__`, etc.) add another layer of confusion

### Design Ideas
- Before any coding: help the student verbalize what the program is trying to do in layman's terms — what are the inputs, what are the outputs, what's the skeleton of the program
- This may be the most complex physical simulation to design — figuring out how to represent a class with household objects
- De-mystify classes by making them feel less overwhelming and more approachable
- Uncomplicate things that shouldn't be complicated — design for people who don't naturally understand these the first time

### Relevant Exercises
- Lab 1: Student class, Complex class, word scramble game
- Lab 2: Polynomial class, UnsignedBinaryInteger class
- HW1: Vector class with operator overloading
- HW6: Integer class (large number arithmetic), CompactString class

---

## 2. MEMORY MAPS, SHALLOW COPY & DEEP COPY

### Struggles
- Understanding which operations create shallow copies vs. deep copies
- Understanding how copies work "under the hood"
- Exam 1 (Spring 2026) tested memory maps using classes, which weren't taught in lecture
- Visual/spatial representation of memory is crucial but hard to construct mentally

### Design Ideas
- Professor Romero-Cruz's GitHub has memory map visuals for the first few labs — reference those
- Physical simulation could involve actual objects representing memory addresses and arrows (string/yarn?) showing references
- Key concept to make tangible: the difference between copying the container vs. copying what's inside

### Relevant Exercises
- Lab 1: Output prediction with list/string mutation
- Lab 2: Memory diagram tracing with copy.copy and copy.deepcopy
- HW1 Q1: Memory diagram for nested list operations
- Exam 1: Memory map questions with classes

---

## 3. LIST COMPREHENSION

### Struggles
- Understanding the compact syntax

### What Helped
- Writing the for loop FIRST, then converting it into the list comprehension
- Going back and forth between the two representations to visualize the equivalence

### Design Ideas
- Implement a side-by-side physical exercise: write the for loop on one piece of paper, then "compress" it into a list comprehension on another
- Make this a consistent pattern in the tool: always show both forms

### Relevant Exercises
- Lab 2: List comprehension problems
- HW1 Q4: List comprehension to generate specific lists

---

## 4. NESTED LOOPS & PERMUTATIONS

### Struggles
- Not fully understanding nested loops from the previous class (CS 1114), which compounds confusion now
- Implementing functions that create permutations comes up repeatedly and is confusing
- Nested loops also create confusion when analyzing runtime

### Design Ideas
- Start with the basics: physically trace through a nested loop with counters (two separate paper strips, one for outer loop index, one for inner)
- Show how every combination gets visited — lay out a grid on paper

### Relevant Exercises
- Lab 1 & 2: Various nested loop problems
- HW4 Q9: Generate all permutations recursively
- HW5 Q5: Non-recursive permutation generation using stack and queue

---

## 5. HELPER FUNCTIONS

### Struggles
- Not understanding what a helper function is or when to use one
- How to implement them in the code
- When do you know you need one? Is it when you're repeating code?

### Design Ideas
- Simple rule to teach: if a function needs extra parameters (like low/high) that the user shouldn't have to provide, wrap it in a helper
- Also useful when you need to set up initial state before recursion begins
- Physical analogy: the helper is like a "setup person" who prepares the workspace before the main worker starts

### Relevant Exercises
- Lab 6: find_max with low/high helper, is_palindrome with low/high
- HW4: Multiple recursive functions using helpers

---

## 6. ASYMPTOTIC ANALYSIS & BIG-O / BIG-THETA / BIG-OMEGA

### Struggles
- No one consistent good way of doing formal proofs — different TAs teach differently
- The C1, C2, and n0 proofs feel harder than they actually are
- Sorting functions in asymptotic order — not knowing which growth rates are bigger when they're close (e.g., n*log(n) vs. sqrt(n))
- Not being able to visualize the growth curves

### Design Ideas
- Compare to Calculus II series — taking something complicated and simplifying to an equivalent form
- Draw out the graph of growth rates: constant, log(n), sqrt(n), n, n*log(n), n^2, n^3, 2^n, n!
- Especially emphasize the ones that are close together and confusing
- Simplify the proof process as much as possible — these are easier than they seem
- Even though proofs aren't heavily tested, include them because they build understanding
- Include the main summations students need to memorize (these are about memorizing, not physical simulation)
- BUT: knowing how to recognize summations when analyzing code runtime IS something to practice

### Relevant Exercises
- Lab 3: Formal proofs, true/false on complexity classes, generator function
- Lab 4: True/false complexity, summation bounds, code snippet analysis
- HW2 Q1-2: Big-O proofs, Theta characterization
- Exams: Always tested

---

## 7. TIME COMPLEXITY ANALYSIS OF CODE

### Struggles
- Takes so much time and practice
- Would be amazing to have ONE reliable way of doing it
- The professor teaches inside-out: identify cost of each line (including inside loops), analyze inner loop runtime, then outer loop(s)
- TAs tried teaching outside-in, which was confusing
- Coming up with the summation and determining best case vs. worst case and WHY
- Extra space usage is not well emphasized — barely covered in lectures
- Runtime analysis is not something readily available on YouTube; you really have to ask professors

### Design Ideas
- Stick with inside-out approach (professor's method) since it makes sense to Maria
- Provide a consistent step-by-step method for every example
- Build a library of EVERY runtime analysis example from the course documents — maximum practice
- This may not be physically simulatable, but explore ideas
- Always explain: what is the worst case scenario and WHY, what is the best case and WHY

### Relevant Exercises
- Lab 3, 4, 5: Various code analysis problems
- HW2, HW3: Complexity comparisons, amortized analysis
- Every exam includes runtime analysis

---

## 8. AMORTIZED ANALYSIS (APPEND & INSERT)

### Struggles
- TAs explained amortized append as "technically log(n)" which was very confusing
- Not understanding how to build a simulation when the algorithm uses amortized operations
- Confusion about how it differs when inserting from the beginning (because of creating a shallow copy every time?)
- Determining worst case runtime AND extra space usage with respect to input size

### Design Ideas
- Simplify the explanation: amortized O(1) for append means "usually fast, occasionally slow when resizing, but averages out"
- Physical simulation: paper strips that "double" in size when full — show the occasional expensive copy

### Relevant Exercises
- Lab 5: List method runtime analysis, amortized cost calculations
- HW3 Q1-2: ArrayList with insert/pop, capacity management

---

## 9. ARRAYLIST

### Struggles
- Very overwhelming to look at the code — avoided it for a long time
- Implementing methods for ArrayList is super challenging
- Lab 5 coding section is difficult

### Design Ideas
- De-mystify ArrayList: it's just a list that manages its own resizing
- Break down the code into small, digestible pieces
- Show how it relates to regular Python lists (which are ArrayLists under the hood)

### Relevant Exercises
- Lab 5: ArrayList extensions (__repr__, __add__, __iadd__, __getitem__, remove, removeOdds)
- HW3 Q2: Extend ArrayList with insert() and pop()
- DSA misc: ArrayList.py reference implementation

---

## 10. SEARCHING ALGORITHMS

### Struggles
- Binary search on different data types (tuples, lists, strings) — being able to apply the same algorithm regardless of syntax
- Understanding when to use which pointer technique

### Design Ideas
- Show the core algorithm first on simple numbers
- Then show it on tuples, then strings, then dictionaries — same algorithm, different containers
- Physical simulation: numbered cards laid out, physically doing the halving

### Relevant Exercises
- Lab 4: Palindrome, reverse vowels, max sum subarray, find missing number
- Lab 5: Rotated sorted list search, jump search
- HW2 Q7: Binary search for transition point

---

## 11. POINTER TECHNIQUES (TWO POINTERS, SLOW/FAST, SLIDING WINDOW)

### Struggles
- Not knowing when reading a question how to identify which pointer technique to use
- Not even knowing IF a pointer technique is needed
- Slow and fast pointers particularly challenging
- Not understanding that the fast pointer can be part of a for loop or while loop
- Not knowing how to name variables in a way that reminds you what they're doing
- Understanding that the computer must run through every repetition — even in cases where a human would "just know"

### Design Ideas
- Physical: use two fingers or two paper markers moving along a paper strip with indices
- Create a decision guide: "How to know which pointer technique to use"
- Emphasize variable naming conventions that describe the pointer's role
- Properly commenting code: write a summary at the beginning — inputs, process, output

### Relevant Exercises
- Lab 4: Two-pointer palindrome, reverse vowels, sliding window max sum
- HW2 Q6: Two-sum on sorted list
- HW3 Q4: Remove occurrences in-place

---

## 12. RECURSION

### Struggles
- THE hardest topic. Main issue: visualizing how the stack unravels afterwards
- In a recursive function, the function STOPS at the recursive call and waits until that call finishes — this pause needs to be EXPLICIT in the simulation
- Initially tried to connect recursion to iteration, but this isn't the right approach for a first introduction
- Need to take recursion for what it is and see it as nesting
- Is there anything in early Python that does the same thing (nesting, pausing, returning)? If not, that's okay — teach it from scratch

### Design Ideas
- BOWLS for the call stack: each recursive call = a bowl placed on top, with a sticky note showing the current argument and "WAITING" status
- ENVELOPES: each call is an envelope inside an envelope; innermost = base case; "return" by opening outward
- INDEX CARDS in a line: one card per call, walk to the end (base case), then walk back filling in answers
- Make the PAUSE POINT physically visible — the function is frozen, waiting
- When recursion appears inside data structures (trees, linked lists), go back to basics and de-mystify
- Show when recursive approach is more efficient vs. iterative for each data structure — state as rules where they exist, but don't invent rules that don't exist

### Relevant Exercises
- Lab 6: sum_to, product_evens, find_max, is_palindrome, binary_search, vc_count
- Lab 7: SortLst, intersection, isPowerOfTwo, split_parity, nested_sum
- HW4: All questions (recursive triangles, rulers, min-finding, char frequency, flatten, permutations)
- HW6 Q5: Merge sorted linked lists recursively
- HW7: Tree algorithms using recursion

---

## 13. GENERATORS & ITERATORS

### Struggles
- Explanation was overcomplicated in class
- Actually understands it simply as "just yield instead of return" — but wants the tool to explain what yield is ACTUALLY doing inside the code

### Design Ideas
- Keep it simple: generator = a function that can pause and resume, yielding one value at a time
- Show the difference: return sends back everything at once; yield sends one thing, remembers where it stopped, and picks up there next time
- This is actually related to recursion's "pause" concept — could be a nice connection

### Relevant Exercises
- Lab 3: powers_of_two generator
- Lab 7: yield_flattened (optional)
- HW1 Q5: Fibonacci generator
- HW2 Q3: Divisors generator
- HW7 Q2: Leaf values generator

---

## 14. SORTING ALGORITHMS

### Struggles
- Need to grasp the core algorithm first, then expand to different data types
- Same sorting algorithm should work regardless of whether it's tuples, lists, strings, dictionaries
- Need to see the algorithm AND how it works on every type of syntax

### Design Ideas
- Physical: numbered cards or paper pieces that get physically swapped/moved
- For each sort: show it on simple numbers first, then on tuples, then strings
- Bubble sort: cut out numbered pieces, physically swap adjacent pairs
- Insertion sort: pick up a card, slide it into correct position in the sorted portion
- Selection sort: scan for the minimum, swap it to the front

### Relevant Exercises
- Lab 7: SortLst (in-place sort for 0 to n-1)
- Lab 8: stack_sort
- HW4 Q7: Partition by sign
- Syllabus mentions: insertion-sort, merge-sort, heap-sort (Chapter 12 — NOT YET COVERED)

---

## 15. STACKS & QUEUES

### Struggles
- Manageable once you get past classes and recursion
- The physical paper simulation approach feels very natural here

### Design Ideas
- Paper strips with indices for the underlying array
- Cut-out numbered pieces to push/pop/enqueue/dequeue
- Show how the circular array works for queues (wrap around!)
- Stacks: pile of index cards (LIFO) — physically add to top, remove from top
- Queues: line of index cards (FIFO) — add to back, remove from front

### Relevant Exercises
- Lab 8: stack_sum, flatten_list, stack_sort, prefix/infix/postfix conversions
- Lab 9: MeanQueue, ArrayDeque, eval_prefix, flatten by depth, stack using queues
- HW5: Postfix calculator, MaxStack, MidStack, Queue from two stacks

---

## 16. LINKED LISTS (ESPECIALLY DOUBLY LINKED)

### Struggles
- So many moving parts: nodes, prev, next, head, tail — all changing
- The `self.prev.next.prev.something` chaining gets super messy
- Need ONE consistent naming convention for the simulation
- Pointer reassignment order matters — can't erase data before reassigning
- Doubly linked list is heavily emphasized in the class and on all exams

### Design Ideas
- Long strip of paper for the list, separate cut-out cards for each node
- Draw arrows (or use string/yarn) to show prev and next pointers
- Really clear instructions because the TA's paper-strip approach got confusing when it got complex
- Must establish a clear visual convention: maybe color-coding for prev (red arrows) vs. next (blue arrows)
- Physically move the arrows when reassigning pointers — show the ORDER of reassignment to avoid losing references

### Relevant Exercises
- Lab 10: Linked list operations
- HW6: LinkedQueue, Integer class on linked list, CompactString, shallow/deep copy of nested linked lists, merge sorted lists
- DSA misc: DoublyLinkedList.py reference implementation

---

## 17. BINARY TREES

### Struggles
- Drawing trees accurately and visualizing them
- Understanding height of tree, depth of nodes
- Replacing pointers without erasing data prematurely
- Drawing binary trees given traversal types (preorder vs. inorder) as in Lab 12
- BFS vs. DFS — what's the difference, when to use which
- Are trees mainly used for searching? (Would love real-world examples for each data structure)

### What Helped
- The traversal trick: draw outline from root counterclockwise, lines pointing LEFT = preorder, DOWN = inorder, RIGHT = postorder — the order lines touch the curve = the visit order

### Design Ideas
- ABSOLUTELY include the traversal outline trick — it was the most helpful thing
- Physical tree: draw on paper or use sticky notes arranged as nodes with drawn edges
- For BFS vs. DFS: physically walk the tree in both ways with a finger
- Real-world examples for every data structure:
  - Stacks: browser back button, undo in editors
  - Queues: printer queue, customer service line
  - Trees: file system folders, family tree, Amazon product categories
  - Linked lists: music playlist (next/previous song)

### Relevant Exercises
- Lab 11: Tree worksheet, Linked Binary Tree implementation
- Lab 12: Binary tree traversals, drawing trees from traversals
- HW7: Min/max in tree, leaf generator, height-balance check, expression tree, iterative in-order traversal

---

## 18. THE "SORTED LIST WITH N NUMBERS AS INDICES" PATTERN

### Struggles
- The pattern where you have numbers and use them as indices to turn something on/off is really challenging
- Comes up in multiple places

### Design Ideas
- Physical: numbered cards where you flip them face-up/face-down based on index values
- Step through the algorithm card by card

### Relevant Exercises
- HW3 Q3: Find duplicates using restricted domain (numbers as indices)
- Lab 7: SortLst for values 0 to n-1

---

## 19. GENERAL LEARNING PHILOSOPHY & ENCOURAGEMENT

### Key Points from Maria
- Make it super clear when an algorithm was designed centuries ago by geniuses — students aren't supposed to figure it out from scratch. Provide encouragement.
- Students need to verbalize what the program does in layman's terms BEFORE coding
- Write a summary before coding: what's my idea, what are the inputs, what's the process, what's the output
- Comment code properly
- Name variables in a way that reminds you what they're doing
- The computer doesn't "just know" things the way humans do — it must check every step
- De-mystify everything. Simplify as much as possible.
- Lay out rules: "this always happens" / "this never happens" — but ONLY where true rules exist. Don't invent rules.

---

## 20. TOPICS NOT YET COVERED (FROM SYLLABUS)

The following topics appear in the syllabus but Maria hasn't reached them yet. They should be included in the tool as content becomes available:

- **Search Trees (Chapter 11):** AVL trees, Red-Black trees, balanced BSTs
- **Hash Tables (Chapter 10):** Hash functions, collision handling, hash maps, dictionaries
- **Priority Queues (Chapter 9):** Heaps, heap operations
- **Sorting & Selection (Chapter 12):** Merge sort, heap sort, quicksort, selection algorithms
- **Graph Algorithms (Chapter 14):** Graph representations, BFS, DFS, shortest paths, minimum spanning trees

**NOTE:** When Maria gets access to labs, homework, or lecture materials for these topics, remind her to share them so they can be added to the project before the final submission.

---

## 21. IMPORTANT INCLUSIONS

- Include ALL optional and extra credit problems from every lab and homework — no skipping
- Include exam-style questions from the sample midterms and finals in DSA misc
- Include lab PowerPoint content when available
- Reference Professor Romero-Cruz's GitHub for memory map visuals and other resources
- Reference the Hiroki39 GitHub for LinkedBinaryTree implementation
- Include content from lecture text files and recitation materials
