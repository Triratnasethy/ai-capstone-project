# Portfolio Pressure Test (Assignment 2)

### The Setup
**Custom Instructions Provided to Claude:**
*"You are my portfolio tutor. My core proof statement is: 'Shipping production-ready web apps with the speed and precision of AI assistance.' Your job is to aggressively pressure-test my design decisions and ensure every single page earns its place."*

### The Prompt I Ran
> "Here is my sitemap:
> 1. Home (Hero, Featured Case Study, Bottom Banner)
> 2. Dashboard (Grid of 3 technical case studies)
> 3. Profile (My journey, skill stack)
> 
> My one ultimate action is getting visitors to click 'Let's connect on LinkedIn'. Does this sitemap effectively support my core claim of shipping production-ready apps fast, and does it drive people to my one action?"

### The AI Output (Pressure-Test Results)
> "Your sitemap is refreshingly concise—three pages is exactly the limit you want. However, it currently has a critical gap when measured against your claim and your ultimate action.
> 
> **The Problem:** 
> Your claim emphasizes *'the speed and precision of AI assistance.'* Yet, your sitemap buries the actual proof of AI usage in the 'Profile' page (as a skill tag) and implicitly within the Dashboard case studies. If a visitor lands on Home and reads your claim, they immediately want proof that you actually use AI to build faster. If they don't see it on the Home page, they will bounce before ever reaching your LinkedIn.
> 
> **The Fix (What you must change):**
> 1. **Revise the Home Page Featured Case Study:** The featured case study on the Home page *must* explicitly highlight AI. Instead of just focusing on 'React state management', it should explicitly demonstrate a 'Vague vs Precise Prompting' workflow, or showcase the Streaming AI Chat interface. Prove the 'precision of AI' instantly on page one.
> 2. **Strengthen the LinkedIn CTAs:** Ensure the LinkedIn button is sticky or placed directly adjacent to your strongest proof. The moment they think, 'Wow, this person builds fast,' the LinkedIn button must be right there."

### What I Will Change
Based on this pressure test, I am updating my `CONTENT_MAP.md`. I will change the Home Page's "Featured Case Study" from the basic Movie Explorer to the **Streaming AI Chat** component, because that is a direct, interactive proof of my core claim regarding AI assistance.
