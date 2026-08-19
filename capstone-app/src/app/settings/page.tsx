export default function SettingsPage() {
  return (
    <div className="max-w-2xl mx-auto space-y-12">
      <header className="border-b border-[#171717]/10 pb-8">
        <h1 className="text-3xl font-bold tracking-tight text-[#171717]">Settings</h1>
      </header>
      
      <div className="space-y-6">
        {[
          { id: 'notifications', title: 'Notifications', desc: 'Receive updates about new opportunities.', active: true },
          { id: 'availability', title: 'Public Availability', desc: 'Show your work status on your profile.', active: true },
          { id: 'analytics', title: 'Usage Analytics', desc: 'Share anonymous usage data.', active: false },
        ].map((setting) => (
          <div key={setting.id} className="flex items-center justify-between py-4 border-b border-[#171717]/5 last:border-0">
            <div>
              <h3 className="font-semibold text-[#171717]">{setting.title}</h3>
              <p className="text-sm text-[#171717]/60 mt-1">{setting.desc}</p>
            </div>
            <button 
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none ${setting.active ? 'bg-[#0F766E]' : 'bg-[#171717]/20'}`}
              aria-pressed={setting.active}
            >
              <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${setting.active ? 'translate-x-6' : 'translate-x-1'}`} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
