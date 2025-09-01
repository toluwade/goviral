'use client';

import { useState } from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import { Input } from '@/components/ui/input';

export default function DashboardFAQPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const categories = [
    { id: 'all', name: 'All Categories' },
    { id: 'getting-started', name: 'Getting Started' },
    { id: 'orders', name: 'Orders & Services' },
    { id: 'payments', name: 'Payments & Billing' },
    { id: 'technical', name: 'Technical Issues' },
    { id: 'account', name: 'Account Management' }
  ];

  const faqs = [
    {
      id: 1,
      category: 'getting-started',
      question: 'How do I place my first order?',
      answer: 'To place your first order: 1) Add funds to your wallet using the Deposit Funds section, 2) Go to New Order page, 3) Select your platform (Instagram, YouTube, etc.), 4) Choose the service type (followers, likes, views), 5) Select package type (Normal, Fast, Premium), 6) Enter your link/username and quantity, 7) Review the price estimate and click Place Order.'
    },
    {
      id: 2,
      category: 'getting-started',
      question: 'What platforms do you support?',
      answer: 'We support all major social media platforms including Instagram, YouTube, TikTok, Twitter, Facebook, LinkedIn, and Telegram. Each platform offers various services like followers, likes, views, comments, shares, and more depending on the platform\'s features.'
    },
    {
      id: 3,
      category: 'orders',
      question: 'How long does it take for orders to complete?',
      answer: 'Delivery times vary by service type and package: Normal packages typically take 24-48 hours, Fast packages take 6-12 hours, and Premium packages take 1-3 hours. You can track your order progress in real-time on the My Orders page.'
    },
    {
      id: 4,
      category: 'orders',
      question: 'What happens if my order fails or doesn\'t complete?',
      answer: 'If your order fails or doesn\'t complete as expected, we offer automatic refunds or replacements. You can request a refund through the My Orders page, or contact our support team. We also monitor all orders and proactively issue refunds for failed orders.'
    },
    {
      id: 5,
      category: 'orders',
      question: 'Can I cancel an order after placing it?',
      answer: 'Orders can only be cancelled if they haven\'t started processing yet (status: Pending). Once an order is in progress, it cannot be cancelled. However, if there are issues with delivery, we offer refunds or replacements as outlined in our refund policy.'
    },
    {
      id: 6,
      category: 'payments',
      question: 'What payment methods do you accept?',
      answer: 'We accept multiple payment methods: Credit/Debit cards (Visa, Mastercard, Amex), PayPal, cryptocurrency (Bitcoin, Ethereum, USDT), and bank transfers. Each method has different processing times and fees as shown on the deposit page.'
    },
    {
      id: 7,
      category: 'payments',
      question: 'Are there any fees for deposits?',
      answer: 'Fees vary by payment method: Credit/Debit cards have a 3.5% fee, PayPal has a 3.9% fee, cryptocurrency has a 1% fee, and bank transfers are free. The exact fee amount is shown before you complete your deposit.'
    },
    {
      id: 8,
      category: 'payments',
      question: 'How long do deposits take to appear in my wallet?',
      answer: 'Deposit times vary by method: Credit/Debit cards and PayPal are instant, cryptocurrency takes 5-60 minutes depending on network confirmations, and bank transfers take 1-3 business days.'
    },
    {
      id: 9,
      category: 'payments',
      question: 'Can I get a refund if I\'m not satisfied?',
      answer: 'Yes, we offer refunds for services that don\'t deliver as promised. Refund requests must be submitted within 30 days of the original order. Partial refunds may be provided for partially completed orders. Services that have already been delivered cannot be refunded.'
    },
    {
      id: 10,
      category: 'technical',
      question: 'Why is my order stuck or not progressing?',
      answer: 'Orders may get stuck due to: 1) Platform restrictions or changes, 2) Profile settings (private accounts), 3) Provider issues, 4) High demand periods. If your order is stuck for more than the estimated delivery time, contact support and we\'ll resolve it or provide a refund.'
    },
    {
      id: 11,
      category: 'technical',
      question: 'Do I need to provide my password?',
      answer: 'No, you never need to provide your password. We only need your public profile URL or username. Providing passwords is unsafe and unnecessary for our services. If anyone asks for your password, do not provide it and report it to our support team.'
    },
    {
      id: 12,
      category: 'technical',
      question: 'Will using your services get my account banned?',
      answer: 'We use safe, legitimate methods and real accounts to minimize any risk. However, all social media marketing carries some inherent risk. We recommend: 1) Starting with smaller quantities, 2) Spacing out orders over time, 3) Using high-quality services, 4) Following platform guidelines.'
    },
    {
      id: 13,
      category: 'account',
      question: 'How do I reset my password?',
      answer: 'To reset your password: 1) Go to the login page, 2) Click "Forgot Password", 3) Enter your email address, 4) Check your email for reset instructions, 5) Follow the link to set a new password. If you don\'t receive the email, check your spam folder or contact support.'
    },
    {
      id: 14,
      category: 'account',
      question: 'How do I update my account information?',
      answer: 'To update your account information: 1) Go to your Profile page in the dashboard, 2) Click Edit Profile, 3) Update your information (name, email, etc.), 4) Save changes. For security reasons, some changes may require email verification.'
    },
    {
      id: 15,
      category: 'account',
      question: 'How do I delete my account?',
      answer: 'To delete your account, please contact our support team with your request. We\'ll process account deletions within 48 hours. Note that you must have a zero wallet balance and no pending orders before account deletion.'
    },
    {
      id: 16,
      category: 'orders',
      question: 'What is the difference between Normal, Fast, and Premium packages?',
      answer: 'Package types differ in speed, quality, and price: Normal packages offer standard quality at base price with 24-48 hour delivery. Fast packages are 1.5x price with higher quality and 6-12 hour delivery. Premium packages are 2x price with highest quality and 1-3 hour delivery.'
    },
    {
      id: 17,
      category: 'payments',
      question: 'Is my payment information secure?',
      answer: 'Yes, all payment processing is handled by industry-leading, PCI-compliant payment processors (Stripe, PayPal, etc.). We never store your payment information on our servers. All transactions are encrypted and secure.'
    },
    {
      id: 18,
      category: 'technical',
      question: 'Can I track multiple orders at once?',
      answer: 'Yes, the My Orders page shows all your orders with real-time status updates. You can filter by platform, status, or date, and search for specific orders. Orders in progress show a progress bar indicating completion percentage.'
    }
  ];

  const filteredFAQs = faqs.filter(faq => {
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    const matchesSearch = searchTerm === '' || 
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesCategory && matchesSearch;
  });

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold font-oswald text-foreground mb-2">
            FAQ & <span className="text-primary">Documentation</span>
          </h1>
          <p className="text-muted-foreground">Find quick answers to common questions about using GoViral.</p>
        </div>

        {/* Search and Filter */}
        <div className="bg-secondary/10 border border-border p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Input
                type="text"
                placeholder="Search FAQs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="bg-input border-border text-foreground"
              />
            </div>
            <div>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full bg-input border border-border text-foreground px-3 py-2 focus:outline-none focus:ring-1 focus:ring-primary"
              >
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 border transition-colors text-sm ${
                selectedCategory === category.id
                  ? 'border-primary bg-primary/10 text-primary'
                  : 'border-border hover:bg-primary/5 text-foreground'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {filteredFAQs.map((faq, index) => (
            <div
              key={faq.id}
              className="bg-secondary/10 border border-border"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-primary/5 transition-colors"
              >
                <h3 className="text-lg font-medium text-foreground pr-4">
                  {faq.question}
                </h3>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-muted-foreground capitalize">
                    {categories.find(c => c.id === faq.category)?.name}
                  </span>
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
                </div>
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

        {/* Empty State */}
        {filteredFAQs.length === 0 && (
          <div className="text-center py-12">
            <svg className="w-16 h-16 text-muted-foreground mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <h3 className="text-lg font-medium text-foreground mb-2">No FAQs found</h3>
            <p className="text-muted-foreground mb-4">
              Try adjusting your search terms or category filter.
            </p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
              }}
              className="text-primary hover:text-primary/80 font-medium"
            >
              Clear filters
            </button>
          </div>
        )}

        {/* Contact Support */}
        <div className="bg-primary/10 border border-primary/20 p-6 text-center">
          <h3 className="text-lg font-medium text-foreground mb-2">
            Can't find what you're looking for?
          </h3>
          <p className="text-muted-foreground mb-4">
            Our support team is here to help with any questions not covered in the FAQ.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2 font-medium transition-colors">
              Create Support Ticket
            </button>
            <a
              href="mailto:support@goviral.com"
              className="border border-primary text-primary hover:bg-primary hover:text-primary-foreground px-6 py-2 font-medium transition-colors"
            >
              Email Support
            </a>
          </div>
        </div>

        {/* Results Count */}
        {filteredFAQs.length > 0 && (
          <div className="text-center text-muted-foreground text-sm">
            Showing {filteredFAQs.length} of {faqs.length} FAQs
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}