import React from 'react';
import { ChatInterface } from '@/components/chat/ChatInterface';

export const metadata = {
  title: 'AI Chat | Capstone App',
  description: 'Streaming AI chat interface powered by Vercel AI SDK and Anthropic Claude.',
};

export default function ChatPage() {
  return (
    <div className="max-w-4xl mx-auto py-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight mb-2">AI Assistant Chat</h1>
        <p className="text-slate-600">
          A production-ready streaming interface using the Vercel AI SDK. Features auto-scrolling, 
          markdown rendering, persistent state, and mid-stream stopping.
        </p>
      </div>
      
      {/* The Chat Interface Component */}
      <ChatInterface />
    </div>
  );
}
