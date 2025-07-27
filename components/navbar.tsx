'use client';

import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { ThemeToggle } from '@/components/theme-toggle';

export function Navbar() {
  const router = useRouter();
  
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
      <div className="container flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-8">
          <div 
            className="flex items-center gap-2 font-bold text-xl cursor-pointer"
            onClick={() => router.push('/')}
          >
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold">A</span>
            </div>
            AnalyticsPro
          </div>
          
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <a href="#features" className="transition-colors hover:text-foreground/80">
              Features
            </a>
            <a href="#pricing" className="transition-colors hover:text-foreground/80">
              Pricing
            </a>
            <a href="#" className="transition-colors hover:text-foreground/80">
              Documentation
            </a>
            <a href="#" className="transition-colors hover:text-foreground/80">
              Blog
            </a>
          </nav>
        </div>
        
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button variant="ghost" onClick={() => router.push('/login')}>
            Log in
          </Button>
          <Button onClick={() => router.push('/signup')}>
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
}
