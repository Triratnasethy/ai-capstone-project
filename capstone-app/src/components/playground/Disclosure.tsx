'use client';

import React, { useState } from 'react';

interface DisclosureProps {
  title: string;
  children: React.ReactNode;
}

export function Disclosure({ title, children }: DisclosureProps) {
  const [isOpen, setIsOpen] = useState(false);
  const contentId = React.useId();

  return (
    <div className="w-full max-w-2xl border border-slate-200 rounded-lg bg-white overflow-hidden">
      <h3>
        <button
          type="button"
          aria-expanded={isOpen}
          aria-controls={contentId}
          onClick={() => setIsOpen(!isOpen)}
          className="flex w-full items-center justify-between px-4 py-4 text-left font-medium hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:bg-slate-50 transition-colors"
        >
          <span>{title}</span>
          <svg
            className={`h-5 w-5 text-slate-500 transition-transform duration-200 ${
              isOpen ? 'rotate-180' : ''
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </h3>
      
      <div
        id={contentId}
        role="region"
        className={`px-4 pb-4 text-slate-600 ${isOpen ? 'block' : 'hidden'}`}
      >
        <div className="pt-2">
          {children}
        </div>
      </div>
    </div>
  );
}
