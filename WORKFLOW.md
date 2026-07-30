# AI Workflow Drill: Vague vs Precise Prompts

This document summarizes the outcomes of building the same capstone-relevant feature (a settings form) using two drastically different prompting approaches:

1. **Round 1 (Vague Prompting):** Implemented in the `round-1-vague` branch. The prompt was a generic request ("build a settings form") with no constraints or context provided.
2. **Round 2 (Precise Prompting):** Implemented in the `round-2-precise` branch. An explore-plan-code loop was used alongside constraints ("use react-hook-form and zod") and a verification step (writing and executing unit tests).

## Diffing the Results

### 1. Correctness and Edge Cases
**Vague Prompt:** The first round generated a form that relied on uncontrolled React inputs or naive state management. Validation was virtually non-existent; it allowed submission of invalid emails and extremely short usernames. The AI mistake caught here was that it assumed "happy path" behavior without handling errors or edge cases.

**Precise Prompt:** By explicitly enforcing `react-hook-form` and `zod` via prompt constraints, the AI output in the second round had robust correctness built-in. Edge cases (like empty strings or incorrectly formatted emails) were perfectly handled by Zod schemas.

### 2. Accessibility
**Vague Prompt:** The generated form lacked basic ARIA labels and `htmlFor` attributes linking labels to inputs. It essentially produced `<div>` tags with loosely associated text, severely degrading screen-reader accessibility.

**Precise Prompt:** The code generated in Round 2 properly used semantic HTML structure, linking `<label htmlFor="username">` to inputs. It also included `aria-invalid` properties bound to validation errors and `role="alert"` for the error messages, providing an excellent accessible experience. 

### 3. Review Effort
**Vague Prompt:** At a glance, the code was "shorter" and seemingly simpler. However, the review effort was immense because to make it production-ready, one would have to essentially rewrite it to add validation, loading states, and tests manually. This proves that quick but poorly prompted code is a false economy.

**Precise Prompt:** The review effort for round two was significantly lower. Because I forced a verification step (writing a `node:test` suite for the `settingsSchema.js` file) and ran it successfully, I had much higher confidence in the output. While setting up the prompt and the explore-plan-code loop took slightly more upfront effort, the end-to-end time was faster because I didn't have to fix basic mistakes.

## Conclusion

This drill highlights that directing AI with explicit specs, constraints, and validation steps is the true engineering skill. The vague prompt produced a toy form, whereas the precise prompt generated a robust, accessible, and tested component suitable for our capstone project.
