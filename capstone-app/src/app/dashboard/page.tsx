export default function DashboardPage() {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div>
        <h1 className="text-4xl font-heading font-bold tracking-tight text-white">Dashboard</h1>
        <p className="text-slate-400 mt-2">Overview of your recent activity and metrics.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { title: 'Metrics', desc: 'Dashboard metrics placeholder.', icon: '📊' },
          { title: 'Recent Activity', desc: 'Activity feed placeholder.', icon: '⚡' },
          { title: 'Alerts', desc: 'System alerts placeholder.', icon: '🔔' }
        ].map((card, i) => (
          <div key={i} className="group p-6 bg-slate-900/40 border border-slate-800/60 rounded-2xl backdrop-blur-sm shadow-lg hover:-translate-y-1 hover:border-slate-700 hover:bg-slate-900/60 transition-all duration-300">
            <div className="w-12 h-12 bg-slate-800/80 rounded-xl flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform shadow-inner">
              {card.icon}
            </div>
            <h2 className="font-heading font-semibold text-xl text-slate-200 mb-2 group-hover:text-white transition-colors">{card.title}</h2>
            <p className="text-slate-400 text-sm leading-relaxed">{card.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
