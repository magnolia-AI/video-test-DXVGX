'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  BarChartIcon, 
  ShieldIcon, 
  ZapIcon, 
  GlobeIcon, 
  PieChartIcon, 
  UsersIcon 
} from 'lucide-react';

const features = [
  {
    title: "Real-time Analytics",
    description: "Monitor your business metrics as they happen with our real-time dashboard.",
    icon: BarChartIcon,
  },
  {
    title: "Advanced Security",
    description: "Enterprise-grade security to keep your data safe and compliant.",
    icon: ShieldIcon,
  },
  {
    title: "Lightning Fast",
    description: "Process millions of data points in seconds with our optimized engine.",
    icon: ZapIcon,
  },
  {
    title: "Global Infrastructure",
    description: "99.9% uptime with servers located around the world for low latency.",
    icon: GlobeIcon,
  },
  {
    title: "Predictive Insights",
    description: "AI-powered forecasting to help you make better business decisions.",
    icon: PieChartIcon,
  },
  {
    title: "Team Collaboration",
    description: "Share insights and collaborate with your team in real-time.",
    icon: UsersIcon,
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful Features</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to transform data into actionable business insights
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
