'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const pricingPlans = [
  {
    name: "Starter",
    price: "$29",
    period: "per month",
    description: "Perfect for small teams getting started",
    features: [
      "Up to 5 users",
      "Basic analytics",
      "100K data points/month",
      "Email support",
      "Standard security",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Professional",
    price: "$99",
    period: "per month",
    description: "For growing businesses",
    features: [
      "Up to 20 users",
      "Advanced analytics",
      "1M data points/month",
      "Priority support",
      "Enhanced security",
      "API access",
      "Custom dashboards",
    ],
    cta: "Try Free for 14 Days",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For large organizations",
    features: [
      "Unlimited users",
      "All features included",
      "Unlimited data points",
      "24/7 dedicated support",
      "Enterprise-grade security",
      "Custom integrations",
      "SLA guarantee",
      "Personal onboarding",
    ],
    cta: "Contact Sales",
    popular: false,
  },
];

export function PricingSection() {
  return (
    <section id="pricing" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose the plan that works best for your team
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <Card 
              key={index} 
              className={`border-2 ${plan.popular ? 'border-primary relative' : 'border-border'} ${plan.popular ? 'shadow-xl' : 'shadow-lg'}`}
            >
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary">
                  MOST POPULAR
                </Badge>
              )}
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.period && <span className="text-muted-foreground">/{plan.period}</span>}
                </div>
                <p className="text-muted-foreground mt-2">{plan.description}</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="16" 
                        height="16" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                        className="text-primary mr-2"
                      >
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button 
                  className="w-full" 
                  variant={plan.popular ? "default" : "outline"}
                >
                  {plan.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
