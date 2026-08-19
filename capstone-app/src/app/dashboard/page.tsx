export default function DashboardPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-12">
      <header className="border-b border-[#171717]/10 pb-8">
        <h1 className="text-3xl font-bold tracking-tight text-[#171717]">Work</h1>
        <p className="text-[#171717]/60 mt-2">Overview of recent activity and metrics.</p>
      </header>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {[
          { title: 'Case Study: Metric Overhaul', desc: 'A complete redesign of the metrics dashboard to improve data visibility and load times.' },
          { title: 'Feature: Activity Feed', desc: 'Implemented a real-time activity feed using server-sent events.' },
        ].map((card, i) => (
          <div key={i} className="group p-8 border border-[#171717]/10 rounded-lg hover:border-[#0F766E] hover:shadow-sm transition-all bg-white">
            <h2 className="font-semibold text-lg text-[#171717] mb-3 group-hover:text-[#0F766E] transition-colors">{card.title}</h2>
            <p className="text-[#171717]/70 text-sm leading-relaxed">{card.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
