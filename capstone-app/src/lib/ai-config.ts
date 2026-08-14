import { anthropic } from '@ai-sdk/anthropic';

/**
 * AI Configuration Module
 * 
 * Centralizes the model selection and system prompt to separate behavior logic from UI components.
 * This makes it easy to update the AI's persona or swap models without touching the chat UI.
 */

// Model selection: Using Claude 3.5 Sonnet for optimal speed/intelligence balance
export const CHAT_MODEL = anthropic('claude-3-5-sonnet-20240620');

// System Prompt: Defines the AI's persona, constraints, and instructions
export const SYSTEM_PROMPT = `
You are a highly capable, professional AI assistant built by Triratna Sethy.
Your primary role is to assist users with software engineering, code reviews, and general technical inquiries.

Key guidelines:
1. Keep your answers concise, direct, and highly technical.
2. If providing code, use markdown code blocks.
3. If you do not know the answer, admit it rather than hallucinating.
4. Always maintain a helpful, objective, and professional tone.
`;
