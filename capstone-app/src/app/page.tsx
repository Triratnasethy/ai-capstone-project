import Link from 'next/link';

export default function Home() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-[85vh] text-center overflow-hidden rounded-2xl">
      {/* Background Image Layer */}
      <div 
        className="absolute inset-0 z-0 opacity-40 mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: "url('/images/hero-texture.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      {/* Subtle Gradient Overlay */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-slate-50/50 via-transparent to-slate-50 pointer-events-none" />

      {/* Content Layer */}
      <div className="relative z-10 max-w-4xl space-y-8 px-6">
        <div className="inline-flex items-center rounded-full border border-slate-200 bg-white/50 px-3 py-1 text-sm font-medium text-slate-600 backdrop-blur-sm">
          <span className="flex h-2 w-2 rounded-full bg-blue-500 mr-2 animate-pulse"></span>
          Available for Opportunities
        </div>
        
        <h1 className="text-5xl md:text-7xl font-heading font-extrabold tracking-tight text-slate-900 leading-tight">
          Shipping production-ready web apps with the speed and precision of <span className="text-blue-600">AI assistance</span>.
        </h1>
        
        <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto font-sans leading-relaxed">
          I'm Triratna, a product-focused frontend developer who builds faster and smarter by treating AI as an engineering partner, not a replacement.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center items-center">
          <Link 
            href="/dashboard"
            className="px-8 py-4 bg-blue-600 text-white font-heading font-semibold rounded-xl shadow-lg hover:bg-blue-700 hover:-translate-y-0.5 transition-all duration-200 ring-2 ring-transparent focus:ring-blue-500"
          >
            View My Work
          </Link>
          <a 
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-white text-slate-700 border border-slate-200 font-heading font-semibold rounded-xl shadow-sm hover:bg-slate-50 hover:border-slate-300 transition-all duration-200"
          >
            Let's Connect
          </a>
        </div>
      </div>
    </div>
  );
}
