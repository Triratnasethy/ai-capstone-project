# Agents, Workflows, and the Model Context Protocol (MCP)

The word "agent" is currently the most overloaded term in the AI ecosystem, often used as marketing speak for anything that involves an LLM. However, from an engineering perspective, there is a stark, defining line between an AI workflow and a true AI agent. Understanding this distinction—and the protocols that make agents possible—is the foundation of building robust AI software.

### Workflows vs. Agents
An **AI Workflow** is a predefined, deterministic sequence of steps orchestrated by humans or hard-coded software. The execution path is known in advance. The FL-04 "Draft, Critique, Revise" pipeline we built previously is a classic workflow. The LLM was purely a processor: it received text, applied a prompt, and handed the text to the next step. It did not decide *when* to critique, nor did it decide *how* to revise. It simply followed the rails we laid down.

An **AI Agent**, on the other hand, is an LLM given agency over its own control flow. Instead of following a strict script, an agent is given an overarching goal, a set of tools, and the autonomy to loop, reason, and decide which tools to call and when. If a workflow is a factory assembly line, an agent is a junior employee told to "go figure out why this bug is happening and fix it." The agent might read a file, realize it needs to search the web for documentation, read the docs, and then rewrite the file—all without human orchestration.

Because our FL-04 pipeline followed a rigid, human-dictated sequence (Draft -> Critique -> Revise), it is undeniably a **workflow**, not an agent.

### The Model Context Protocol (MCP)
For an agent to do anything useful, it must interact with the outside world. It cannot just generate text; it must read databases, execute code, or query APIs. This is where the **Model Context Protocol (MCP)** comes in. 

MCP is essentially a "USB-C port for AI." Before MCP, connecting an LLM to a specific database or tool required writing custom, tightly-coupled integration code for every single AI model. MCP standardizes this. It is an open, universal protocol that allows any AI client to plug into any data source. 

MCP exposes three fundamental primitives:
1. **Resources:** Read-only data that the AI can pull into its context. Think of this as the AI "reading a file" or pulling a specific API endpoint's JSON response.
2. **Tools:** Executable functions the AI can call to take action in the real world. This is the "write" capability—allowing the AI to run a script, update a database, or send an email. 
3. **Prompts:** Reusable templates and instructions exposed by the server to give the AI immediate context on how to interact with the provided tools and resources.

By standardizing these three primitives, MCP allows developers to build a tool once (e.g., a GitHub integration) and immediately use it with Claude, ChatGPT, or any local open-source model that supports the protocol.

### Upgrading FL-04 to a True Agent
To upgrade our static FL-04 "Draft, Critique, Revise" workflow into an autonomous agent, we would need to replace the rigid 3-step sequence with a loop and give the LLM tools.

Instead of forcing the LLM to output a draft, we would give it a `read_file` tool and a `search_web` tool, and provide the prompt: *"Write a case study about our accessible modal. Research the codebase and the web until you have enough context, draft it, critique your own work against W3C standards, and revise until perfect."*

The LLM would then:
1. Use `read_file` to read the actual `Modal.tsx` code (no manual pasting required).
2. Decide it needs to know what W3C says, so it uses `search_web` to look up the ARIA guidelines.
3. Write a draft.
4. Read its own draft, decide it missed the `overflow: hidden` scroll lock, and revise it.

By giving the LLM the tools (via MCP) to gather its own context and the autonomy to dictate its own steps, the rigid pipeline transforms into a dynamic, problem-solving agent.
