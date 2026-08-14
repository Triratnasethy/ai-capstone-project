import Link from 'next/link';
import './globals.css';
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <body className="antialiased min-h-screen bg-slate-50 text-slate-900 font-sans">
        <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
          <div className="container mx-auto px-4 h-14 flex items-center justify-between">
            <Link href="/" className="font-bold text-lg text-blue-600">
              CapstoneApp
            </Link>
            <nav className="flex items-center gap-6 text-sm font-medium">
              <Link href="/dashboard" className="transition-colors hover:text-blue-600">Dashboard</Link>
              <Link href="/chat" className="transition-colors hover:text-blue-600 font-bold text-blue-600">Chat</Link>
              <Link href="/profile" className="transition-colors hover:text-blue-600">Profile</Link>
              <Link href="/settings" className="transition-colors hover:text-blue-600">Settings</Link>
              <Link href="/health" className="transition-colors hover:text-blue-600">Health</Link>
            </nav>
          </div>
        </header>
        <main className="container mx-auto px-4 py-8">
          {children}
        </main>
      </body>
    </html>
  );
}
