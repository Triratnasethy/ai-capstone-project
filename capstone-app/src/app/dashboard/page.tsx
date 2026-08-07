export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 bg-white border rounded-xl shadow-sm">
          <h2 className="font-semibold text-lg mb-2">Metrics</h2>
          <p className="text-slate-500 text-sm">Dashboard metrics placeholder.</p>
        </div>
        <div className="p-6 bg-white border rounded-xl shadow-sm">
          <h2 className="font-semibold text-lg mb-2">Recent Activity</h2>
          <p className="text-slate-500 text-sm">Activity feed placeholder.</p>
        </div>
        <div className="p-6 bg-white border rounded-xl shadow-sm">
          <h2 className="font-semibold text-lg mb-2">Alerts</h2>
          <p className="text-slate-500 text-sm">System alerts placeholder.</p>
        </div>
      </div>
    </div>
  );
}
