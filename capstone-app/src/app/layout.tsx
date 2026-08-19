import Link from 'next/link';
import './globals.css';
import { Outfit, Inter } from "next/font/google";
import { cn } from "@/lib/utils";

const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit' });
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn(outfit.variable, inter.variable)}>
      <body className="antialiased min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-blue-500/30">
        <header className="sticky top-0 z-50 w-full border-b border-slate-800/50 bg-slate-950/60 backdrop-blur-md supports-[backdrop-filter]:bg-slate-950/40">
          <div className="container mx-auto px-4 h-16 flex items-center justify-between">
            <Link href="/" className="font-heading font-extrabold text-xl tracking-tight text-white flex items-center gap-2">
              <div className="w-6 h-6 rounded-md bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-[0_0_10px_rgba(59,130,246,0.5)]">
                <span className="text-[10px] font-black text-white">TS</span>
              </div>
              Capstone
            </Link>
            <nav className="flex items-center gap-6 text-sm font-medium">
              <Link href="/dashboard" className="text-slate-400 hover:text-white hover:drop-shadow-[0_0_5px_rgba(255,255,255,0.5)] transition-all">Dashboard</Link>
              <Link href="/chat" className="text-blue-400 font-bold hover:text-blue-300 drop-shadow-[0_0_5px_rgba(59,130,246,0.4)] transition-all">Chat</Link>
              <Link href="/profile" className="text-slate-400 hover:text-white hover:drop-shadow-[0_0_5px_rgba(255,255,255,0.5)] transition-all">Profile</Link>
              <Link href="/settings" className="text-slate-400 hover:text-white hover:drop-shadow-[0_0_5px_rgba(255,255,255,0.5)] transition-all">Settings</Link>
            </nav>
          </div>
        </header>
        <main className="container mx-auto px-4 py-8 relative">
          {/* Subtle background glow for all pages */}
          <div className="fixed top-20 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none -z-10"></div>
          {children}
        </main>
      </body>
    </html>
  );
}
