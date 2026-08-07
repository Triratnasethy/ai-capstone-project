export default function SettingsPage() {
  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
      <div className="p-6 bg-white border rounded-xl shadow-sm space-y-4">
        <h2 className="font-semibold text-lg border-b pb-2">Preferences</h2>
        <div className="flex items-center justify-between py-2">
          <span className="text-slate-700">Email Notifications</span>
          <div className="w-10 h-5 bg-blue-600 rounded-full relative">
            <div className="w-4 h-4 bg-white rounded-full absolute right-1 top-0.5"></div>
          </div>
        </div>
        <div className="flex items-center justify-between py-2">
          <span className="text-slate-700">Dark Mode</span>
          <div className="w-10 h-5 bg-slate-200 rounded-full relative">
            <div className="w-4 h-4 bg-white rounded-full absolute left-1 top-0.5 shadow-sm"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
