export default function SettingsPage() {
  return (
    <div className="max-w-2xl mx-auto space-y-8 animate-in slide-in-from-right-4 duration-500">
      <div>
        <h1 className="text-4xl font-heading font-bold tracking-tight text-white">Settings</h1>
        <p className="text-slate-400 mt-2">Manage your app preferences and configurations.</p>
      </div>
      <div className="p-8 bg-slate-900/40 border border-slate-800/60 rounded-3xl backdrop-blur-sm shadow-xl space-y-6">
        <h2 className="font-heading font-semibold text-xl text-slate-200 border-b border-slate-800/50 pb-4">Preferences</h2>
        
        <div className="flex items-center justify-between py-3 group">
          <div>
            <span className="text-slate-300 font-medium block">Email Notifications</span>
            <span className="text-slate-500 text-sm">Receive daily activity summaries</span>
          </div>
          <button className="w-12 h-6 bg-blue-600 rounded-full relative shadow-[0_0_10px_rgba(59,130,246,0.3)] transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-900">
            <div className="w-5 h-5 bg-white rounded-full absolute right-0.5 top-0.5 shadow-sm transition-transform"></div>
          </button>
        </div>
        
        <div className="flex items-center justify-between py-3 group">
          <div>
            <span className="text-slate-300 font-medium block">Dark Mode</span>
            <span className="text-slate-500 text-sm">Always enabled for premium aesthetic</span>
          </div>
          <button className="w-12 h-6 bg-blue-600/50 rounded-full relative cursor-not-allowed opacity-80" disabled>
            <div className="w-5 h-5 bg-white rounded-full absolute right-0.5 top-0.5 shadow-sm"></div>
          </button>
        </div>
      </div>
    </div>
  );
}
