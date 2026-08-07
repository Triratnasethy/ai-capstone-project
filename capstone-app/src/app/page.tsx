import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center space-y-6">
      <h1 className="text-5xl font-extrabold tracking-tight text-slate-900">
        Welcome to the Capstone App
      </h1>
      <p className="text-lg text-slate-600 max-w-2xl">
        This is a Next.js application scaffolded for the Foundations phase. It features Server Components by default, Tailwind CSS styling, and a responsive layout ready for Vercel deployment.
      </p>
      <div className="flex gap-4 mt-8">
        <Link 
          href="/dashboard"
          className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-sm hover:bg-blue-700 transition-colors"
        >
          Go to Dashboard
        </Link>
        <Link 
          href="/health"
          className="px-6 py-3 bg-white text-slate-700 border border-slate-300 font-semibold rounded-lg shadow-sm hover:bg-slate-50 transition-colors"
        >
          Check API Health
        </Link>
      </div>
    </div>
  );
}
