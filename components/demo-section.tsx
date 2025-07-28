'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { BarChart3, Zap, Users } from 'lucide-react';
import { motion } from 'framer-motion';

export function DemoSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">See It In Action</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience our powerful analytics dashboard with real-time data visualization
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-primary" />
                  Interactive Dashboard
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Our intuitive dashboard provides real-time insights into your business metrics with interactive charts and visualizations.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <Zap className="w-4 h-4 text-primary" />
                    <span>Real-time data updates</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <BarChart3 className="w-4 h-4 text-primary" />
                    <span>Multiple chart types</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-primary" />
                    <span>Team collaboration features</span>
                  </li>
                </ul>
                <div className="pt-4">
                  <Button asChild>
                    <Link href="/dashboard">
                      View Live Demo
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-xl overflow-hidden border shadow-2xl">
              <div className="bg-gradient-to-br from-primary/20 to-secondary/20 p-8">
                <div className="grid grid-cols-4 gap-4 mb-6">
                  <div className="h-4 bg-primary/30 rounded col-span-2"></div>
                  <div className="h-4 bg-primary/20 rounded"></div>
                  <div className="h-4 bg-primary/10 rounded"></div>
                </div>
                <div className="grid grid-cols-12 gap-4">
                  <div className="col-span-8 h-64 bg-background/50 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <BarChart3 className="w-12 h-12 text-primary mx-auto mb-2" />
                      <p className="text-sm text-muted-foreground">Interactive Charts</p>
                    </div>
                  </div>
                  <div className="col-span-4 space-y-4">
                    <div className="h-32 bg-background/50 rounded-lg"></div>
                    <div className="h-32 bg-background/50 rounded-lg"></div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating elements for visual effect */}
            <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full bg-primary/10 blur-xl"></div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full bg-secondary/10 blur-xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
