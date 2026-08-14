'use client';

import React, { useState, useRef, KeyboardEvent } from 'react';

interface Tab {
  id: string;
  label: string;
  content: React.ReactNode;
}

interface TabsProps {
  tabs: Tab[];
  defaultSelectedId?: string;
}

export function Tabs({ tabs, defaultSelectedId }: TabsProps) {
  const [selectedId, setSelectedId] = useState(defaultSelectedId || tabs[0]?.id);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const handleKeyDown = (e: KeyboardEvent<HTMLButtonElement>, index: number) => {
    let newIndex = -1;
    if (e.key === 'ArrowRight') {
      newIndex = index === tabs.length - 1 ? 0 : index + 1;
    } else if (e.key === 'ArrowLeft') {
      newIndex = index === 0 ? tabs.length - 1 : index - 1;
    } else if (e.key === 'Home') {
      newIndex = 0;
    } else if (e.key === 'End') {
      newIndex = tabs.length - 1;
    }

    if (newIndex !== -1) {
      e.preventDefault();
      const newTabId = tabs[newIndex].id;
      setSelectedId(newTabId);
      tabRefs.current[newIndex]?.focus();
    }
  };

  return (
    <div className="w-full max-w-2xl">
      <div 
        role="tablist" 
        aria-label="Example Tabs"
        className="flex border-b border-slate-200"
      >
        {tabs.map((tab, index) => {
          const isSelected = selectedId === tab.id;
          return (
            <button
              key={tab.id}
              ref={(el) => {
                tabRefs.current[index] = el;
              }}
              role="tab"
              aria-selected={isSelected}
              aria-controls={`panel-${tab.id}`}
              id={`tab-${tab.id}`}
              tabIndex={isSelected ? 0 : -1}
              onClick={() => setSelectedId(tab.id)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              className={`px-4 py-2 font-medium text-sm transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 ${
                isSelected 
                  ? 'border-b-2 border-blue-600 text-blue-600' 
                  : 'text-slate-500 hover:text-slate-700 hover:border-slate-300 border-b-2 border-transparent'
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>
      
      <div className="pt-4">
        {tabs.map((tab) => {
          const isSelected = selectedId === tab.id;
          return (
            <div
              key={tab.id}
              role="tabpanel"
              id={`panel-${tab.id}`}
              aria-labelledby={`tab-${tab.id}`}
              hidden={!isSelected}
              tabIndex={0}
              className="focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 rounded-md"
            >
              {isSelected && tab.content}
            </div>
          );
        })}
      </div>
    </div>
  );
}
