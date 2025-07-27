'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CTO, TechCorp",
    content: "This platform transformed how we analyze customer data. We've seen a 40% increase in conversion rates since implementation.",
  },
  {
    name: "Michael Chen",
    role: "Product Manager, InnovateX",
    content: "The predictive analytics capabilities are unmatched. We've reduced inventory costs by 25% while improving customer satisfaction.",
  },
  {
    name: "Emma Rodriguez",
    role: "Data Director, GrowthLabs",
    content: "Implementation was seamless and the support team is exceptional. Our data team went from spending 20 hours/week on reports to 2 hours.",
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Trusted by Industry Leaders</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join thousands of companies transforming their business with our platform
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                <p className="text-muted-foreground">{testimonial.role}</p>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground italic">"{testimonial.content}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
