'use client';

import { useState } from 'react';
import Layout from '@/components/Layout';

const faqs = [
  {
    question: "What is GoViral and how does it work?",
    answer: "GoViral is a smart SMM (Social Media Marketing) panel that helps brands, creators, and businesses skyrocket their visibility across all major social platforms. Our system automatically finds the fastest, cheapest, and highest quality services, ensuring you always get the best results without stress."
  },
  {
    question: "Which social media platforms do you support?",
    answer: "We support all major social media platforms including Instagram, YouTube, TikTok, Twitter, Facebook, and LinkedIn. Our services cover followers, likes, views, comments, shares, and more across these platforms."
  },
  {
    question: "How fast are your services?",
    answer: "Our smart aggregation system automatically selects the fastest providers for each service. Most orders start processing within minutes, with completion times varying from instant to 24-48 hours depending on the service type and quantity."
  },
  {
    question: "Are your services safe and legitimate?",
    answer: "Yes, we only work with high-quality, legitimate service providers. Our system uses real, active accounts and organic methods to ensure your account safety. We never ask for your passwords and comply with all platform guidelines."
  },
  {
    question: "What makes GoViral different from other SMM panels?",
    answer: "Our smart aggregation technology automatically finds the best combination of speed, price, and quality from multiple providers. This means you don't have to research different services - we do the work for you and always deliver optimal results."
  },
  {
    question: "How do I get started?",
    answer: "Simply sign up for a free account, add funds to your wallet, browse our services, place your order, and watch your social media presence grow. Our user-friendly dashboard makes it easy to track all your campaigns."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major payment methods including credit/debit cards, PayPal, cryptocurrency, and bank transfers. All transactions are processed securely through encrypted payment gateways."
  },
  {
    question: "Do you offer refunds?",
    answer: "Yes, we offer a satisfaction guarantee. If a service doesn't deliver as promised, we provide refunds or replacement services. Contact our support team for assistance with any issues."
  },
  {
    question: "Can I track my orders?",
    answer: "Absolutely! Your dashboard provides real-time tracking of all your orders. You can see the status, progress, and completion of each service you've purchased."
  },
  {
    question: "Do you provide customer support?",
    answer: "Yes, we offer 24/7 customer support through live chat, email, and our support ticket system. Our team is always ready to help with any questions or issues you may have."
  },
  {
    question: "Is there a minimum order amount?",
    answer: "We accommodate orders of all sizes, from small personal campaigns to large enterprise solutions. Most services have very low minimum quantities to make our platform accessible to everyone."
  },
  {
    question: "How do you ensure quality?",
    answer: "Our smart system continuously monitors provider performance, customer feedback, and delivery quality. We only work with top-rated providers and automatically route orders to the best performing services."
  }
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Layout>
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold font-oswald text-foreground mb-6">
              Frequently Asked <span className="text-primary">Questions</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Find answers to common questions about GoViral's SMM services and platform.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-secondary/20 border border-border rounded-none"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-primary/5 transition-colors"
                >
                  <h3 className="text-lg font-medium text-foreground pr-4">
                    {faq.question}
                  </h3>
                  <svg
                    className={`w-5 h-5 text-primary transition-transform ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-4">
                    <p className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Still have questions?
            </h2>
            <p className="text-muted-foreground mb-6">
              Can't find the answer you're looking for? Our support team is here to help.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <a
                href="/contact"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 font-medium transition-colors"
              >
                Contact Support
              </a>
              <a
                href="/support"
                className="border border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 font-medium transition-colors"
              >
                Visit Help Center
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    </Layout>
  );
}