# Workflow Audit & Target Tasks

## 1. Recurring Tasks Audit

| Task | Classification | Rationale |
| :--- | :--- | :--- |
| **1. Deciding high-level app architecture** | Just me | AI lacks the long-term context of business goals and user empathy required for core structural decisions. |
| **2. Attending standups and 1-on-1s** | Just me | Relationship building and human communication cannot be outsourced. |
| **3. Writing boilerplate code (e.g., UI shells)** | Fully Automate | Highly repetitive, predictable patterns that AI generates flawlessly in seconds. |
| **4. Formatting/converting data (JSON/CSV)** | Fully Automate | A purely mechanical task where LLMs excel at syntax transformation. |
| **5. Writing commit messages** | Fully Automate | AI can perfectly summarize code diffs into conventional commit formats. |
| **6. Brainstorming feature ideas** | Collaborate with AI | AI is a great sounding board for divergent thinking, but I must filter the output. |
| **7. Debugging cryptic error messages** | Collaborate with AI | I provide the context/logs, AI suggests the root cause, and we iterate until fixed. |
| **8. Generating UI mockups (Tailwind/HTML)** | Collaborate with AI | AI gets the layout 80% right, but I need to guide the aesthetic and UX polish. |
| **9. Writing unit and integration tests** | Delegate with review | AI is excellent at generating test cases, but I must review them to ensure edge cases aren't missed. |
| **10. Refactoring messy functions** | Delegate with review | AI can suggest cleaner syntax, but I must verify it doesn't break existing logic. |
| **11. Writing weekly progress reports** | Delegate with review | I feed raw bullet points; AI drafts the formal update, which I tweak for tone. |
| **12. Reading API documentation** | Collaborate with AI | I feed the docs to the AI to ask targeted questions rather than reading top-to-bottom. |
| **13. Reviewing pull requests** | Collaborate with AI | AI can catch syntax errors, but I must review for architectural alignment and security. |
| **14. Setting up new repositories (Next.js/Vite)** | Fully Automate | AI can generate the perfect `npx` commands and config files instantly. |
| **15. Explaining complex code logic** | Collaborate with AI | I ask the AI to break down undocumented legacy code so I can understand it faster. |

---

## 2. Three Target Tasks (For Future Assignments)

These three tasks from the audit will be the focus for integrating AI deeply into my workflow:

### Target Task A: Generating UI Component Mockups (Collaborate)
- **Current state:** I spend hours writing CSS and adjusting layouts manually.
- **What "Done Well" means:** I can provide a rough wireframe description, and the AI generates a responsive Tailwind CSS component that matches my design system within 2 minutes. The code must be accessible and require less than 10 minutes of manual tweaking.

### Target Task B: Writing Unit Tests (Delegate with Review)
- **Current state:** I often skip writing tests because it is tedious and time-consuming.
- **What "Done Well" means:** I paste a completed function into the AI, and it generates a complete testing suite (e.g., using Node's native test runner or Vitest) covering happy paths and edge cases. Success means the tests pass on the first run 80% of the time, saving me 30+ minutes per file.

### Target Task C: Debugging Cryptic Error Messages (Collaborate)
- **Current state:** I copy-paste errors into Google/StackOverflow and sift through years-old forum posts.
- **What "Done Well" means:** I feed the stack trace and the relevant file directly into the AI context. The AI pinpoints the exact line causing the crash and explains *why* it failed, reducing my debugging time from 45 minutes to under 5 minutes per issue.
