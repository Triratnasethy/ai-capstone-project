export default function ProfilePage() {
  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold tracking-tight">User Profile</h1>
      <div className="p-6 bg-white border rounded-xl shadow-sm">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 bg-slate-200 rounded-full"></div>
          <div>
            <h2 className="text-xl font-semibold">Jane Doe</h2>
            <p className="text-slate-500">jane.doe@example.com</p>
          </div>
        </div>
        <p className="text-slate-600">This is a placeholder profile page.</p>
      </div>
    </div>
  );
}
