export default function ProfilePage() {
  return (
    <div className="max-w-2xl mx-auto space-y-12">
      <header className="border-b border-[#171717]/10 pb-8">
        <h1 className="text-3xl font-bold tracking-tight text-[#171717]">About</h1>
      </header>
      
      <div className="flex flex-col sm:flex-row gap-8 items-start">
        <div className="w-24 h-24 rounded-md bg-[#171717]/5 border border-[#171717]/10 flex-shrink-0 flex items-center justify-center">
           <span className="text-xl font-bold text-[#171717]/40">TS</span>
        </div>
        
        <div className="space-y-4">
          <div>
            <h2 className="text-xl font-bold text-[#171717]">Triratna Sethy</h2>
            <p className="text-[#0F766E] text-sm font-medium mt-1">Frontend Developer</p>
          </div>
          
          <div className="prose prose-sm text-[#171717]/70 leading-relaxed max-w-none">
            <p>
              I build web applications that prioritize clarity, performance, and user experience. 
              By leveraging AI as an engineering partner, I focus on architecture and product decisions 
              rather than boilerplate, allowing me to ship higher quality code faster.
            </p>
            <p className="mt-4">
              This portfolio demonstrates a philosophy of restraint: making a few intentional choices 
              and repeating them, so the work speaks for itself.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
