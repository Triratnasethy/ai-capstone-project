import Link from 'next/link';
import './globals.css';
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased min-h-screen bg-[#FAFAFA] text-[#171717] font-sans">
        <header className="w-full">
          <div className="container mx-auto px-6 h-24 flex items-center justify-between">
            <Link href="/" className="font-semibold text-lg tracking-tight hover:opacity-70 transition-opacity">
              Triratna Sethy
            </Link>
            <nav className="flex items-center gap-8 text-sm font-medium text-[#171717]/60">
              <Link href="/dashboard" className="hover:text-[#171717] transition-colors">Work</Link>
              <Link href="/chat" className="hover:text-[#171717] transition-colors">Chat</Link>
              <Link href="/profile" className="hover:text-[#171717] transition-colors">About</Link>
              <Link href="/settings" className="hover:text-[#171717] transition-colors">Settings</Link>
            </nav>
          </div>
        </header>
        <main className="container mx-auto px-6 pb-20">
          {children}
        </main>
      </body>
    </html>
  );
}
