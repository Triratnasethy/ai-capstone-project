'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useChat, Message } from 'ai/react';
import ReactMarkdown from 'react-markdown';
import { Send, Square, ArrowDown, Bot, User } from 'lucide-react';

export function ChatInterface() {
  const [initialMessages] = useState<Message[]>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('chat_messages');
      if (saved) {
        try {
          return JSON.parse(saved);
        } catch {
          // ignore parse errors
        }
      }
    }
    return [];
  });
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsMounted(true);
  }, []);

  const { messages, input, handleInputChange, handleSubmit, stop, isLoading } = useChat({
    api: '/api/chat',
    initialMessages: initialMessages,
    onFinish: () => {
      // Save to localStorage when generation finishes
      // We need to wait for the next render to grab all messages, 
      // but useChat doesn't pass the full list to onFinish.
      // We will handle this in an effect instead.
    }
  });

  // Save messages whenever they change
  useEffect(() => {
    if (isMounted && messages.length > 0) {
      localStorage.setItem('chat_messages', JSON.stringify(messages));
    }
  }, [messages, isMounted]);

  // Auto-scroll logic
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isAutoScrollEnabled, setIsAutoScrollEnabled] = useState(true);
  const [showJumpToBottom, setShowJumpToBottom] = useState(false);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    setIsAutoScrollEnabled(true);
    setShowJumpToBottom(false);
  };

  useEffect(() => {
    if (isAutoScrollEnabled) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'instant' });
    }
  }, [messages, status, isAutoScrollEnabled]);

  const handleScroll = () => {
    if (!scrollContainerRef.current) return;
    const { scrollTop, scrollHeight, clientHeight } = scrollContainerRef.current;
    
    // If we scroll up by more than 50px from the bottom, disable auto-scroll
    const isAtBottom = scrollHeight - scrollTop - clientHeight < 50;
    
    if (isAtBottom) {
      setIsAutoScrollEnabled(true);
      setShowJumpToBottom(false);
    } else {
      setIsAutoScrollEnabled(false);
      setShowJumpToBottom(true);
    }
  };

  if (!isMounted) return null; // Prevent hydration mismatch on localStorage

  const isStreaming = isLoading;

  return (
    <div className="flex flex-col h-[calc(100vh-8rem)] max-w-3xl mx-auto bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden relative">
      
      {/* Header */}
      <div className="px-6 py-4 border-b border-slate-100 bg-slate-50 flex items-center justify-between">
        <h2 className="font-semibold text-slate-800 flex items-center gap-2">
          <Bot className="w-5 h-5 text-blue-600" />
          AI Assistant
        </h2>
        {messages.length > 0 && (
          <button 
            onClick={() => {
              localStorage.removeItem('chat_messages');
              window.location.reload();
            }}
            className="text-xs text-slate-500 hover:text-slate-700"
          >
            Clear Chat
          </button>
        )}
      </div>

      {/* Messages Area */}
      <div 
        ref={scrollContainerRef}
        onScroll={handleScroll}
        className="flex-1 overflow-y-auto p-6 space-y-6"
      >
        {messages.length === 0 ? (
          <div className="h-full flex flex-col items-center justify-center text-slate-400 space-y-4">
            <Bot className="w-12 h-12 opacity-20" />
            <p>Send a message to start the conversation.</p>
          </div>
        ) : (
          messages.map((m) => (
            <div key={m.id} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`flex max-w-[85%] ${m.role === 'user' ? 'flex-row-reverse' : 'flex-row'} gap-3`}>
                <div className="shrink-0 mt-1">
                  {m.role === 'user' ? (
                    <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center border border-slate-200">
                      <User className="w-4 h-4 text-slate-600" />
                    </div>
                  ) : (
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center border border-blue-200">
                      <Bot className="w-4 h-4 text-blue-600" />
                    </div>
                  )}
                </div>
                
                <div className={`rounded-2xl px-5 py-3 ${
                  m.role === 'user' 
                    ? 'bg-slate-900 text-white' 
                    : 'bg-slate-50 border border-slate-100 text-slate-800'
                }`}>
                  <div className="prose prose-sm prose-slate max-w-none break-words">
                    {/* Using ReactMarkdown to prevent broken raw markdown mid-stream */}
                    <ReactMarkdown>{m.content}</ReactMarkdown>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
        
        {/* Thinking Indicator */}
        {isLoading && messages[messages.length - 1]?.role === 'user' && (
          <div className="flex justify-start">
            <div className="flex gap-3 max-w-[85%]">
              <div className="shrink-0 mt-1">
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center border border-blue-200">
                  <Bot className="w-4 h-4 text-blue-600" />
                </div>
              </div>
              <div className="rounded-2xl px-5 py-4 bg-slate-50 border border-slate-100 flex items-center gap-1.5 h-12">
                <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Jump to bottom button */}
      {showJumpToBottom && (
        <button
          onClick={scrollToBottom}
          className="absolute bottom-24 left-1/2 -translate-x-1/2 bg-white border border-slate-200 shadow-md rounded-full px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 flex items-center gap-2 transition-all"
        >
          <ArrowDown className="w-4 h-4" />
          Jump to latest
        </button>
      )}

      {/* Input Area */}
      <div className="p-4 bg-white border-t border-slate-100">
        <form onSubmit={handleSubmit} className="relative flex items-end gap-2 max-w-3xl mx-auto">
          <textarea
            className="flex-1 max-h-32 min-h-[52px] bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow text-slate-800 placeholder:text-slate-400"
            value={input}
            placeholder="Type your message..."
            onChange={handleInputChange}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                handleSubmit(e);
              }
            }}
            disabled={isStreaming}
            rows={1}
          />
          
          {isStreaming ? (
            <button
              type="button"
              onClick={stop}
              className="shrink-0 w-12 h-12 rounded-xl bg-slate-900 text-white flex items-center justify-center hover:bg-slate-800 transition-colors shadow-sm mb-[2px]"
              aria-label="Stop generating"
            >
              <Square className="w-5 h-5 fill-current" />
            </button>
          ) : (
            <button
              type="submit"
              disabled={!input.trim()}
              className="shrink-0 w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition-colors shadow-sm disabled:opacity-50 disabled:cursor-not-allowed mb-[2px]"
              aria-label="Send message"
            >
              <Send className="w-5 h-5" />
            </button>
          )}
        </form>
        <div className="text-center mt-2">
          <p className="text-xs text-slate-400">AI can make mistakes. Verify important information.</p>
        </div>
      </div>
    </div>
  );
}
