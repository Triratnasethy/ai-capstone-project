import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-start justify-center min-h-[70vh] py-32 max-w-4xl mx-auto">
      <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-[#171717] leading-tight mb-8">
        Shipping production-ready web apps with the speed and precision of AI assistance.
      </h1>
      
      <p className="text-xl md:text-2xl text-[#171717]/70 font-sans leading-relaxed font-light mb-12 max-w-2xl">
        I'm Triratna, a product-focused frontend developer who builds faster and smarter by treating AI as an engineering partner, not a replacement.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4 items-center">
        <Link 
          href="/dashboard"
          className="px-6 py-3 bg-[#0F766E] text-white font-medium rounded-md shadow-sm hover:bg-[#0F766E]/90 transition-colors"
        >
          View My Work
        </Link>
        <a 
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-transparent text-[#171717] border border-[#171717]/20 font-medium rounded-md hover:bg-[#171717]/5 transition-colors"
        >
          Let's Connect
        </a>
      </div>
    </div>
  );
}
