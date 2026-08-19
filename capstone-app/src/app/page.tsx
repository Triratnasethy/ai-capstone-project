import Link from 'next/link';

export default function Home() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-[90vh] text-center overflow-hidden rounded-3xl bg-slate-950 border border-slate-800/50 shadow-2xl">
      
      {/* Base Dark Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 z-0"></div>

      {/* Abstract Glowing Orbs */}
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-blue-600/20 blur-[120px] z-0 animate-pulse mix-blend-screen"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-indigo-600/20 blur-[100px] z-0 animate-pulse mix-blend-screen" style={{ animationDelay: '1s' }}></div>

      {/* Hero Texture Overlay */}
      <div 
        className="absolute inset-0 z-0 opacity-20 mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: "url('/images/hero-texture.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Content Layer */}
      <div className="relative z-10 max-w-5xl space-y-10 px-6 py-20 flex flex-col items-center">
        
        {/* Availability Badge */}
        <div className="inline-flex items-center rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-sm font-medium text-blue-200 backdrop-blur-md shadow-[0_0_15px_rgba(59,130,246,0.2)]">
          <span className="relative flex h-2.5 w-2.5 mr-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-500"></span>
          </span>
          Available for Opportunities
        </div>
        
        {/* Main Headline */}
        <h1 className="text-6xl md:text-8xl font-heading font-extrabold tracking-tighter leading-[1.1] text-transparent bg-clip-text bg-gradient-to-br from-white via-slate-200 to-slate-500">
          Shipping production-ready web apps with the speed & precision of <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400 drop-shadow-[0_0_15px_rgba(59,130,246,0.3)]">AI assistance.</span>
        </h1>
        
        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto font-sans leading-relaxed font-light">
          I'm Triratna, a product-focused frontend developer who builds faster and smarter by treating AI as an engineering partner, not a replacement.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 mt-10 justify-center items-center w-full">
          <Link 
            href="/dashboard"
            className="group relative px-8 py-4 bg-blue-600 text-white font-heading font-semibold rounded-full shadow-[0_0_40px_-10px_rgba(59,130,246,0.8)] hover:shadow-[0_0_60px_-15px_rgba(59,130,246,1)] hover:-translate-y-1 transition-all duration-300 overflow-hidden"
          >
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-[150%] group-hover:animate-[shimmer_1.5s_infinite]"></div>
            <span className="relative flex items-center">
              View My Work
              <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
          </Link>
          <a 
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-slate-900/50 text-slate-200 border border-slate-700/50 font-heading font-semibold rounded-full backdrop-blur-md shadow-lg hover:bg-slate-800 hover:text-white hover:border-slate-600 transition-all duration-300"
          >
            Let's Connect
          </a>
        </div>

        {/* Floating Glass Cards (Tech Stack Visual) */}
        <div className="pt-16 w-full max-w-3xl mx-auto grid grid-cols-3 gap-4 opacity-70">
          {['Next.js 15 App Router', 'Tailwind CSS v4', 'Vercel AI SDK'].map((tech) => (
            <div key={tech} className="bg-slate-900/40 border border-slate-800/60 rounded-xl p-4 backdrop-blur-sm text-slate-400 text-sm font-medium hover:text-slate-200 hover:border-slate-700 transition-colors">
              {tech}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
