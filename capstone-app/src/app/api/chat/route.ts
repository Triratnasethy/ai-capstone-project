import { streamText } from 'ai';
import { CHAT_MODEL, SYSTEM_PROMPT } from '@/lib/ai-config';

// Next.js config to ensure this route is dynamically evaluated
export const dynamic = 'force-dynamic';
// Vercel config: allow longer execution time for LLM streams
export const maxDuration = 30;

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    // Call the Anthropic API through the Vercel AI SDK
    const result = streamText({
      model: CHAT_MODEL,
      system: SYSTEM_PROMPT,
      messages,
    });

    // Return the streaming response back to the client
    return result.toTextStreamResponse();
  } catch (error) {
    console.error('Chat API Error:', error);
    return new Response(
      JSON.stringify({ error: 'An error occurred during chat completion.' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
