import React from 'react';
import { Modal } from '@/components/playground/Modal';
import { Tabs } from '@/components/playground/Tabs';
import { Disclosure } from '@/components/playground/Disclosure';

export default function PlaygroundPage() {
  const tabsData = [
    {
      id: 'tab1',
      label: 'Account',
      content: <div className="p-4 bg-white border rounded-lg">Account settings content goes here. Test keyboard navigation using arrows!</div>,
    },
    {
      id: 'tab2',
      label: 'Password',
      content: <div className="p-4 bg-white border rounded-lg">Change your password here. Notice how focus moves automatically.</div>,
    },
    {
      id: 'tab3',
      label: 'Notifications',
      content: <div className="p-4 bg-white border rounded-lg">Manage your notification preferences.</div>,
    },
  ];

  return (
    <div className="max-w-4xl mx-auto py-12 space-y-16">
      <div>
        <h1 className="text-3xl font-bold tracking-tight mb-2">Accessibility Playground</h1>
        <p className="text-slate-600 mb-8">
          These components were built from scratch following the W3C ARIA Authoring Practices Guide.
          Test them exclusively using your keyboard (Tab, Enter, Space, Arrows, Escape).
        </p>
      </div>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold border-b pb-2">1. Modal Dialog</h2>
        <p className="text-sm text-slate-500 mb-4">Traps focus inside while open. Closes on Escape. Returns focus to trigger when closed.</p>
        <Modal triggerText="Open Modal" title="Accessible Modal">
          <p className="mb-4">This modal traps your focus. If you press Tab, you can only cycle between the buttons inside this dialog.</p>
          <button className="px-3 py-1 bg-slate-100 rounded mr-2 hover:bg-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500">
            Action 1
          </button>
          <button className="px-3 py-1 bg-slate-100 rounded hover:bg-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500">
            Action 2
          </button>
        </Modal>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold border-b pb-2">2. Tabs</h2>
        <p className="text-sm text-slate-500 mb-4">Uses Left/Right arrows to switch tabs (automatic activation). Uses Tab to enter the active panel.</p>
        <Tabs tabs={tabsData} />
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold border-b pb-2">3. Disclosure (Accordion)</h2>
        <p className="text-sm text-slate-500 mb-4">Uses Enter or Space to toggle visibility. Relies on aria-expanded and aria-controls.</p>
        <Disclosure title="Why is accessibility important?">
          <p>
            Accessibility ensures that web applications can be used by everyone, including people with disabilities.
            It is a fundamental aspect of building high-quality, professional software.
          </p>
          <a href="#" className="text-blue-600 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-1 mt-2 inline-block">
            Learn more about W3C standards
          </a>
        </Disclosure>
      </section>
    </div>
  );
}
