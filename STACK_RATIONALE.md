# Stack Rationale: Why Next.js?

*Here is the rationale for the stack we chose, written so you can copy and paste it directly into your track thread for submission!*

### The Constraints
- **Budget:** 100% Free.
- **Skill Level:** Junior/Intern, heavily leveraging AI assistants.
- **Needs:** A Home page, a Dashboard, and a Profile page (as defined in my content map).
- **Display Requirements:** I need to embed a live Streaming AI Chat demo, showcase interactive components (Modal, Tabs), and link to code repositories. 
- **Dynamic Needs:** Yes, the AI Chat demo requires a secure server-side route to hide the Anthropic API key.

### The Three Roads Considered

1. **The Simplest: Static HTML/CSS/JS (GitHub Pages)**
   - **How:** Hand-coded files, no build step.
   - **Host:** GitHub Pages (Free).
   - **Backend:** None.
   - **Trade-off:** Fast to start, but I can't safely use my Anthropic API key for the live AI Chat demo without exposing it to the public, because there is no server. 

2. **The Middle: React SPA via Vite (Netlify)**
   - **How:** Component-based UI using React.
   - **Host:** Netlify (Free).
   - **Backend:** Would require setting up Netlify Edge Functions or a separate backend server just to handle the AI API requests.
   - **Trade-off:** Great for the UI playground, but managing a separate backend just for one API key makes maintenance incredibly messy.

3. **The Most Powerful: Next.js App Router + Tailwind (Vercel)**
   - **How:** A full-stack React framework. 
   - **Host:** Vercel (Free).
   - **Backend:** Built-in API routes (`/api/chat`).
   - **Trade-off:** A steeper learning curve and complex routing rules, but it natively solves the API key security issue.

### Pressure-Testing the Front Runner (Next.js)
If I picked the simplest (Static HTML), my AI Chat demo would break because I can't secure the API key. 
By picking Next.js, I take on the burden of understanding Server vs. Client components. However, can I finish in two weeks? Yes, because AI assistants are exceptionally good at writing Next.js code. Does it show my work the way it needs to be shown? Yes—it natively supports the Vercel AI SDK and complex interactive React components.

### My Final Decision
**I am choosing Next.js with Tailwind CSS, deployed on Vercel.**

The primary reason I rejected the simpler alternatives is that my portfolio requires an embedded, live AI chat demonstration. The static and SPA routes would force me to build a completely separate backend just to keep my API keys safe, which I do not want to maintain. Next.js allows me to write a secure server route (`/api/chat`) in the exact same codebase as my frontend. 

**Can I maintain this?** Yes. Next.js is the most widely documented framework for AI assistants, meaning Cursor and Claude can easily help me maintain and debug it.
**Does it show my work well?** Yes, it allows me to flawlessly render the complex, interactive components required for my playground and AI demonstrations.
