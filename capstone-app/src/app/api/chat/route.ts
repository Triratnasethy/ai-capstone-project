import { streamText, tool } from 'ai';
import { z } from 'zod';
import { CHAT_MODEL, SYSTEM_PROMPT } from '@/lib/ai-config';

// Next.js config to ensure this route is dynamically evaluated
export const dynamic = 'force-dynamic';
// Vercel config: allow longer execution time for LLM streams
export const maxDuration = 30;

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    // Call the Anthropic API through the Vercel AI SDK
    const result = await streamText({
      model: CHAT_MODEL,
      system: SYSTEM_PROMPT + "\n\nYou have access to the getProjectStats tool. Use it when the user asks about stats for a specific project.",
      messages,
      tools: {
        getProjectStats: tool({
          description: 'Get statistics and metadata for a specific portfolio project.',
          parameters: z.object({
            projectName: z.string().describe('The name of the project to query (e.g. "dashboard", "secret")')
          }),
          execute: async ({ projectName }) => {
            // Simulate network delay to make tool states visible
            await new Promise(resolve => setTimeout(resolve, 2000));
            
            if (projectName.toLowerCase() === 'secret') {
              throw new Error('Access denied: You do not have permission to view this project.');
            }
            
            return {
              projectName,
              stars: Math.floor(Math.random() * 500) + 10,
              commits: Math.floor(Math.random() * 1000) + 50,
              status: 'live',
              lastDeploy: new Date().toISOString().split('T')[0]
            };
          }
        })
      }
    });

    // Return the streaming response back to the client
    return result.toDataStreamResponse();
  } catch (error) {
    console.error('Chat API Error:', error);
    return new Response(
      JSON.stringify({ error: 'An error occurred during chat completion.' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
