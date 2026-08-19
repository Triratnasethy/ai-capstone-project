export default function ProfilePage() {
  return (
    <div className="max-w-2xl mx-auto space-y-8 animate-in slide-in-from-bottom-4 duration-500">
      <div>
        <h1 className="text-4xl font-heading font-bold tracking-tight text-white">User Profile</h1>
        <p className="text-slate-400 mt-2">Manage your public identity and credentials.</p>
      </div>
      <div className="relative p-8 bg-slate-900/40 border border-slate-800/60 rounded-3xl backdrop-blur-sm shadow-xl overflow-hidden">
        {/* Decorative background flare */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px] -z-10 translate-x-1/2 -translate-y-1/2"></div>
        
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-8 relative z-10">
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 p-1 shadow-[0_0_20px_rgba(59,130,246,0.3)]">
            <div className="w-full h-full bg-slate-900 rounded-full flex items-center justify-center">
               <span className="text-3xl font-heading font-bold text-white">JD</span>
            </div>
          </div>
          <div className="text-center sm:text-left mt-2">
            <h2 className="text-2xl font-heading font-bold text-white">Jane Doe</h2>
            <p className="text-blue-400 font-medium">jane.doe@example.com</p>
            <div className="mt-4 inline-flex items-center rounded-full bg-slate-800/80 px-3 py-1 text-xs font-medium text-slate-300 border border-slate-700/50">
              Pro Member
            </div>
          </div>
        </div>
        
        <div className="pt-6 border-t border-slate-800/50">
          <h3 className="font-heading font-semibold text-slate-200 mb-2">About</h3>
          <p className="text-slate-400 leading-relaxed">
            This is a premium profile layout demonstrating the updated dark glassmorphism aesthetic. It utilizes strict typographic hierarchy and subtle glowing effects to elevate the user experience.
          </p>
        </div>
      </div>
    </div>
  );
}
