'use client';

import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

export function HeroSection() {
  const router = useRouter();
  
  const scrollToFeatures = () => {
    document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background video */}
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="https://storage.googleapis.com/magnolia-storage-dev-test-123/videos/ADBS3gmlO5/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-background/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-24 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Transform Your Business with <span className="text-primary">AI-Powered</span> Analytics
          </h1>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Gain actionable insights, predict trends, and drive growth with our cutting-edge analytics platform designed for modern businesses.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={() => router.push('/signup')} className="text-lg px-8 py-6">
              Get Started Free
            </Button>
            <Button size="lg" variant="outline" onClick={scrollToFeatures} className="text-lg px-8 py-6">
              Learn More
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <Button 
          variant="ghost" 
          size="icon"
          onClick={scrollToFeatures}
          className="rounded-full w-12 h-12 border border-primary"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            className="text-primary"
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
        </Button>
      </div>
    </section>
  );
}
