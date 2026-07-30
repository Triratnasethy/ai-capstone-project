# Prompt Iteration Log (FL-01 Target Task)

**Target Task:** Drafting a Client Accessibility Audit Report for a local bakery's e-commerce site.

---

## Version 0 (Naive Baseline)
**Prompt:**
> Write an accessibility audit report.

**Representative Output Excerpt:**
> *Accessibility Audit Report*
> **Introduction:** Accessibility is important for all users. This report evaluates the accessibility of the website.
> **Methodology:** We used WCAG 2.1 guidelines to test the site.
> **Findings:** 
> - Images don't have alt text.
> - Contrast is poor on some pages.
> - Keyboard navigation is broken.
> **Conclusion:** Fix these issues to make the site better.

**Note (What changed & why output improved/failed):**
* **Prompt Change:** This is the baseline lazy prompt.
* **Output Observation:** The output is incredibly generic. It lacks a specific target, reads like a middle-school essay, and provides zero actionable value to a client. It "explains" what accessibility is instead of providing an audit.

---

## Version 1 (Role Assignment)
**Prompt:**
> Act as a Senior Web Accessibility Expert. Write an accessibility audit report.

**Representative Output Excerpt:**
> *Accessibility Audit Report*
> **Executive Summary:** As a Senior Web Accessibility Expert, I have conducted a comprehensive review of the digital property against WCAG 2.1 Level AA success criteria...
> **Technical Violations:**
> - 1.1.1 Non-text Content: Images lack descriptive alt attributes.
> - 1.4.3 Contrast (Minimum): Foreground and background colors fail the 4.5:1 ratio.

**Note (What changed & why output improved/failed):**
* **Prompt Change:** Added *Role Assignment* ("Act as a Senior Web Accessibility Expert").
* **Output Observation:** The tone immediately shifted from a generic essay to a highly technical, authoritative document. It started using specific terminology (WCAG 2.1 Level AA, 1.1.1 Non-text Content). However, it is *too* generic and technical, lacking any context about the actual project.

---

## Version 2 (Context and Motivation)
**Prompt:**
> Act as a Senior Web Accessibility Expert. Write an accessibility audit report for a local bakery's e-commerce site. The goal is to explain the issues in simple terms so the non-technical owner understands the legal and business risks.

**Representative Output Excerpt:**
> *Accessibility Audit Report for Sweet Treats Bakery*
> **Why This Matters to Your Bakery:** Making your website accessible isn't just about avoiding lawsuits (though that is a real risk). It's about making sure every customer, including those using screen readers, can easily buy your cakes and pastries...
> **Key Issues Found:**
> - **Missing Image Descriptions:** Pictures of your cupcakes are missing hidden text descriptions. Blind users cannot know what they are trying to buy.

**Note (What changed & why output improved/failed):**
* **Prompt Change:** Added *Context and Motivation* (a local bakery, non-technical owner, explain legal/business risks).
* **Output Observation:** The output is vastly improved. The tone shifted from overly technical to empathetic and business-focused. It automatically mapped the generic "images" issue to "cupcakes," making the abstract technical issues tangible for a bakery owner.

---

## Version 3 (Few-Shot Examples)
**Prompt:**
> Act as a Senior Web Accessibility Expert. Write an accessibility audit report for a local bakery's e-commerce site. The goal is to explain the issues in simple terms so the non-technical owner understands the legal and business risks.
> 
> Use this format for your findings:
> Example 1:
> **Issue:** Missing Alt Text
> **Business Impact:** Blind users using screen readers cannot buy your products because they cannot hear what the images represent.
> **Fix:** Add a descriptive `alt` tag (e.g., `alt="Chocolate fudge cake with sprinkles"`) to all product images.

**Representative Output Excerpt:**
> **Issue:** Keyboard Trap in the Checkout
> **Business Impact:** Customers who cannot use a mouse (due to motor disabilities) get stuck in the checkout page and cannot finalize their purchase, directly losing you sales.
> **Fix:** Ensure the "Complete Order" button is reachable and clickable using only the 'Tab' and 'Enter' keys.

**Note (What changed & why output improved/failed):**
* **Prompt Change:** Added *Few-Shot Examples* (providing a specific formatting block to emulate).
* **Output Observation:** The model flawlessly replicated the exact structure (Issue, Business Impact, Fix) provided in the prompt. By providing one example, I forced the model to frame *every* subsequent issue in terms of concrete business impact and actionable fixes, preventing it from reverting to technical jargon.

---

## Version 4 (Output Structure)
**Prompt:**
> Act as a Senior Web Accessibility Expert. Write an accessibility audit report for a local bakery's e-commerce site. The goal is to explain the issues in simple terms so the non-technical owner understands the legal and business risks.
> 
> Use this format for your findings:
> [Example block as defined in V3...]
> 
> **Format the entire report as follows:**
> # Executive Summary
> # Legal & Business Risk
> # Critical Findings (use the format provided above)
> # Recommended Next Steps

**Representative Output Excerpt:**
> # Executive Summary
> We have reviewed the Sweet Treats Bakery e-commerce platform...
> 
> # Legal & Business Risk
> Under the ADA, your website is considered a place of public accommodation...
> 
> # Critical Findings
> **Issue:** Missing Form Labels on Contact Page...

**Note (What changed & why output improved/failed):**
* **Prompt Change:** Added *Output Structure* (defined exact markdown headers to use).
* **Output Observation:** The AI stopped generating random introductions, conclusions, or "Methodology" sections that I didn't want. The report is now perfectly structured, predictable, and ready to be exported directly as a client deliverable.

---

## Version 5 (Step Decomposition)
**Prompt:**
> Act as a Senior Web Accessibility Expert. Write an accessibility audit report for a local bakery's e-commerce site. The goal is to explain the issues in simple terms so the non-technical owner understands the legal and business risks.
> 
> Follow these steps exactly:
> **Step 1:** Write a 2-paragraph Executive Summary explaining the legal and business risk of web accessibility for a bakery.
> **Step 2:** Generate 3 Critical Findings using this exact format:
>    **Issue:** [Name of issue]
>    **Business Impact:** [Why it loses them money/customers]
>    **Fix:** [Actionable step]
> **Step 3:** Write a bulleted list of 3 Recommended Next Steps for their developer.
> 
> **Format the entire report as follows:**
> # Executive Summary
> # Critical Findings
> # Recommended Next Steps

**Representative Output Excerpt:**
> *(The output perfectly follows the constraints, generating exactly 2 paragraphs for the summary, exactly 3 findings formatted flawlessly, and exactly 3 bullet points for next steps.)*

**Note (What changed & why output improved/failed):**
* **Prompt Change:** Added *Step Decomposition* (breaking the task down into sequential, numbered instructions with strict length constraints).
* **Output Observation:** The result is incredibly focused. In previous iterations, the AI might hallucinate 10 issues or write a 5-paragraph summary. Step decomposition explicitly constrained the scope and forced the AI to think linearly, guaranteeing a concise, high-quality output every time.

---

## Cross-Model Comparison: Claude vs ChatGPT

I ran the final Version 5 prompt against both Claude (3.5 Sonnet) and ChatGPT (GPT-4o). Here is the honest comparison:

* **Tone:** Claude adopted a slightly warmer, more consultative tone ("We want to ensure every customer feels welcome"), which fits the "local bakery" context perfectly. ChatGPT was slightly more clinical and direct, which is fine but felt less empathetic to a small business owner.
* **Accuracy/Nuance:** Both accurately identified realistic accessibility issues (alt text, contrast, keyboard traps). However, Claude's "Fix" suggestions were slightly more actionable for a non-technical audience (e.g., explaining *where* to put the alt text in a CMS), whereas ChatGPT defaulted to HTML code snippets.
* **Structure:** Both models followed the Output Structure and Step Decomposition flawlessly. They both hit the exact paragraph and bullet point counts.
* **Failure Points:** ChatGPT occasionally broke the "simple terms" constraint by slipping in WCAG success criteria numbers (e.g., "Violates 1.4.3") into the "Issue" title, which violates the spirit of the prompt. Claude respected the audience constraint better throughout the entire response.

---

## Final Reusable Prompt Template

*This prompt is decoupled from the personal bakery context, making it a reusable asset for any client report.*

> Act as a **[Your Role / Persona]**. Write a **[Type of Document/Report]** for a **[Client Description / Industry]**. 
> 
> **Context & Goal:** The goal is to explain the findings in simple terms so the **[Target Audience, e.g., non-technical owner]** understands the **[Key Motivator, e.g., legal and business risks]**.
> 
> **Follow these steps exactly:**
> **Step 1:** Write a **[Length constraint]** Executive Summary focusing on **[Key topic]**.
> **Step 2:** Generate **[Number]** Critical Findings using this exact format:
>    **Issue:** [Name of issue]
>    **Business Impact:** [Why they should care]
>    **Fix:** [Actionable step]
> **Step 3:** Write a bulleted list of **[Number]** Recommended Next Steps for their **[Target team/person]**.
> 
> **Format the entire report as follows:**
> # Executive Summary
> # Critical Findings
> # Recommended Next Steps
