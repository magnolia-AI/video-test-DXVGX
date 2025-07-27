'use client';

import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from '@/components/ui/accordion';

const faqs = [
  {
    question: "How long does implementation take?",
    answer: "Most customers are up and running within 24-48 hours. Our onboarding process is designed to be as seamless as possible with minimal technical requirements."
  },
  {
    question: "Do you offer custom integrations?",
    answer: "Yes, our enterprise plan includes custom integration services. We can connect with your existing CRM, ERP, or other business systems."
  },
  {
    question: "What kind of support do you provide?",
    answer: "All plans include email support. Professional and Enterprise plans include priority support with faster response times. Enterprise customers get 24/7 dedicated support."
  },
  {
    question: "Can I change plans later?",
    answer: "Absolutely. You can upgrade, downgrade, or cancel your plan at any time. Changes take effect at the start of your next billing cycle."
  },
  {
    question: "Is there a free trial?",
    answer: "Yes, our Professional plan includes a 14-day free trial with full access to all features. No credit card required to start."
  },
  {
    question: "How secure is my data?",
    answer: "We take security seriously. All data is encrypted in transit and at rest. We comply with industry standards including SOC 2, GDPR, and CCPA."
  }
];

export function FAQSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground">
              Everything you need to know about the platform
            </p>
          </div>
          
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-lg">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
