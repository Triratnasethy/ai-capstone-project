# Framed Case Studies (Assignment 1, Week 2)

### The Voice Card
*Direct, highly technical, honest, zero marketing buzzwords.*

---

## 1. Featured Case Study: Streaming AI Chat Interface
**The Problem:** Standard chat UIs are surprisingly complex to build well. When generating text token-by-token, naive auto-scrolling violently hijacks the user's screen, making it impossible to read past messages while the AI is typing.
**What I Did:** I built a custom chat interface using the Vercel AI SDK. Instead of relying on a simple `useEffect` that always forces scroll-to-bottom, I calculated the user's scroll position against the container's `clientHeight`. The UI aggressively pins to the bottom by default, but the moment the user scrolls up by more than 50px, the auto-scroll gracefully disables itself. 
**The Outcome:** A buttery-smooth, production-ready AI chat interface that respects user intent and handles streaming state perfectly without hydration errors.

## 2. Dashboard Case Study: W3C Accessible Components
**The Problem:** AI tools generate beautiful React components in seconds, but they generate fundamentally inaccessible ones just as fast. You cannot properly review or debug what you do not understand.
**What I Did:** Before relying on robust component libraries like `shadcn/ui`, I built a Modal, Tabs, and Disclosure component entirely from scratch. I mapped each component strictly against its W3C ARIA Authoring Practices pattern, writing custom `useRef` logic to trap keyboard focus inside the modal and manage `aria-invalid` states dynamically.
**The Outcome:** Three 100% keyboard-navigable components that prove I understand the accessibility fundamentals sitting beneath modern UI abstractions.

## 3. Dashboard Case Study: The "Precise Prompting" Workflow
**The Problem:** Prompting an AI with "build a settings form" generates a toy component full of uncontrolled inputs and zero validation. Fixing generic AI code takes longer than writing it from scratch.
**What I Did:** I engineered a strict "explore-plan-code" loop. Instead of generic requests, I supplied strict architectural constraints (e.g., "Use `react-hook-form` and `zod` for all state") and forced the AI to write and execute a `node:test` suite *before* generating the final React component.
**The Outcome:** I cut my overall development time by 50% while shipping code that inherently handles edge cases, SSR safety, and schema validation flawlessly on the first run.

---

## The Bio & CTA
I am a product-focused frontend developer. I build production-ready web apps faster and smarter by treating AI as an engineering partner, not a replacement. 

**[Let's connect on LinkedIn]**

---

## The Before & After (Voice Check)

**Generic AI Output:** 
> *"I leveraged cutting-edge artificial intelligence to synergistically craft a bespoke, results-driven conversational interface."*

**My Edited Version:** 
> *"I built a streaming chat UI using the Vercel AI SDK, focusing on strict state management and graceful auto-scrolling."*
