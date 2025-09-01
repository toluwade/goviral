import Layout from '@/components/Layout';

export default function SupportPage() {
  const supportOptions = [
    {
      title: "Live Chat",
      description: "Get instant help from our support team. Available 24/7 for urgent matters.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
      action: "Start Chat",
      available: "Available Now"
    },
    {
      title: "Email Support",
      description: "Send us a detailed message and we'll get back to you within 2-4 hours.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      action: "Send Email",
      available: "2-4 hour response"
    },
    {
      title: "Help Center",
      description: "Browse our comprehensive knowledge base and tutorials.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      action: "Browse Articles",
      available: "Self-service"
    },
    {
      title: "Submit Ticket",
      description: "Create a support ticket for complex issues that need detailed attention.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
        </svg>
      ),
      action: "Create Ticket",
      available: "Tracked support"
    }
  ];

  const quickHelp = [
    {
      title: "Getting Started",
      description: "Learn how to set up your account and place your first order",
      link: "#"
    },
    {
      title: "Payment Issues",
      description: "Troubleshoot payment problems and billing questions",
      link: "#"
    },
    {
      title: "Order Tracking",
      description: "How to monitor your order status and delivery progress",
      link: "#"
    },
    {
      title: "Account Security",
      description: "Best practices for keeping your account safe and secure",
      link: "#"
    },
    {
      title: "Service Quality",
      description: "Understanding our quality standards and guarantees",
      link: "#"
    },
    {
      title: "Platform Guidelines",
      description: "Social media platform policies and compliance information",
      link: "#"
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold font-oswald text-foreground mb-6">
              Support <span className="text-primary">Center</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We&rsquo;re here to help you succeed. Get the support you need, when you need it.
            </p>
          </div>

          {/* Support Options */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {supportOptions.map((option, index) => (
              <div key={index} className="bg-secondary/20 border border-border p-6 hover:bg-primary/5 transition-colors">
                <div className="text-primary mb-4">
                  {option.icon}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {option.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {option.description}
                </p>
                <div className="flex flex-col gap-2">
                  <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-2 text-sm font-medium transition-colors">
                    {option.action}
                  </button>
                  <span className="text-primary text-xs font-medium">
                    {option.available}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Help Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold font-oswald text-foreground mb-8 text-center">
              Quick <span className="text-primary">Help</span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {quickHelp.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  className="bg-secondary/10 border border-border p-4 hover:bg-primary/5 hover:border-primary/30 transition-colors group"
                >
                  <h4 className="font-medium text-foreground mb-2 group-hover:text-primary transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </a>
              ))}
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-secondary/20 border border-border p-8 text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Need Personal Assistance?
            </h2>
            <p className="text-muted-foreground mb-6">
              Our dedicated support team is available 24/7 to help you with any questions or issues.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="text-center">
                <div className="text-primary font-medium">Email</div>
                <div className="text-muted-foreground">support@goviral.com</div>
              </div>
              <div className="hidden sm:block text-muted-foreground">•</div>
              <div className="text-center">
                <div className="text-primary font-medium">Response Time</div>
                <div className="text-muted-foreground">Average 2-4 hours</div>
              </div>
              <div className="hidden sm:block text-muted-foreground">•</div>
              <div className="text-center">
                <div className="text-primary font-medium">Availability</div>
                <div className="text-muted-foreground">24/7 Support</div>
              </div>
            </div>
          </div>

          {/* Status */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-2 text-primary">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              <span className="text-sm font-medium">All systems operational</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    </Layout>
  );
}