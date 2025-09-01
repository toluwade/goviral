'use client';

import Layout from '@/components/Layout';

export default function TermsPage() {
  const sections = [
    {
      title: "1. Acceptance of Terms",
      content: [
        "By accessing and using GoViral's services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.",
        "These Terms of Service constitute a legally binding agreement between you and GoViral. Your use of our services is subject to these terms, which may be updated from time to time without prior notice.",
        "By continuing to use our services after any modifications to these terms, you agree to be bound by the revised terms."
      ]
    },
    {
      title: "2. Description of Service",
      content: [
        "GoViral is a Social Media Marketing (SMM) panel that provides various social media engagement services including but not limited to:",
        "• Followers, likes, views, comments, and shares across multiple social media platforms",
        "• Instagram, YouTube, TikTok, Twitter, Facebook, and LinkedIn services",
        "• Automated service delivery through our smart aggregation system",
        "• Dashboard and analytics tools for tracking campaign performance",
        "Our services are designed to help brands, creators, and businesses increase their social media visibility and engagement through legitimate means."
      ]
    },
    {
      title: "3. User Registration and Account",
      content: [
        "To use our services, you must create an account by providing accurate and complete information. You are responsible for:",
        "• Maintaining the confidentiality of your account credentials",
        "• All activities that occur under your account",
        "• Notifying us immediately of any unauthorized use of your account",
        "• Ensuring your account information remains current and accurate",
        "You must be at least 13 years of age to create an account. Users between 13-18 may require parental consent in certain jurisdictions.",
        "We reserve the right to suspend or terminate accounts that violate these terms or engage in fraudulent activities."
      ]
    },
    {
      title: "4. Payment Terms",
      content: [
        "Payment for services must be made in advance through our supported payment methods:",
        "• Credit/debit cards, PayPal, cryptocurrency, and bank transfers",
        "• All prices are listed in USD unless otherwise specified",
        "• Payments are non-refundable except as outlined in our refund policy",
        "• We reserve the right to change prices at any time without prior notice",
        "• Disputed charges must be reported within 30 days of the transaction",
        "• Failed payments may result in service suspension until resolved"
      ]
    },
    {
      title: "5. Service Delivery and Quality",
      content: [
        "We strive to deliver high-quality services within the specified timeframes:",
        "• Most services begin processing within minutes of order placement",
        "• Delivery times vary based on service type and quantity ordered",
        "• We use legitimate methods and real accounts to ensure service quality",
        "• Services are delivered through our network of verified providers",
        "• We monitor service quality and provider performance continuously",
        "• If services do not meet our quality standards, we offer replacements or refunds"
      ]
    },
    {
      title: "6. User Responsibilities and Prohibited Uses",
      content: [
        "Users agree to use our services responsibly and legally. Prohibited activities include:",
        "• Providing false or misleading information during registration",
        "• Using services for illegal activities or to violate platform terms of service",
        "• Attempting to manipulate or harm social media platforms",
        "• Sharing account credentials with unauthorized parties",
        "• Engaging in fraudulent activities or chargebacks",
        "• Using our services to promote hate speech, violence, or illegal content",
        "• Attempting to reverse engineer or compromise our systems"
      ]
    },
    {
      title: "7. Refund and Cancellation Policy",
      content: [
        "Our refund policy is designed to be fair while protecting our business interests:",
        "• Refunds are available for services that are not delivered as promised",
        "• Requests must be submitted within 30 days of the original order",
        "• Partial refunds may be provided for partially completed orders",
        "• Services that have already been delivered cannot be refunded",
        "• Refunds are processed through the original payment method within 5-10 business days",
        "• We reserve the right to deny refunds for violations of our terms of service"
      ]
    },
    {
      title: "8. Intellectual Property Rights",
      content: [
        "All content and materials on our platform are protected by intellectual property laws:",
        "• The GoViral name, logo, and branding are our exclusive trademarks",
        "• Our website content, software, and algorithms are proprietary",
        "• Users retain ownership of their social media content and accounts",
        "• Users grant us permission to access their accounts solely to deliver services",
        "• Third-party trademarks are the property of their respective owners",
        "• Users must not infringe on any intellectual property rights"
      ]
    },
    {
      title: "9. Privacy and Data Protection",
      content: [
        "We are committed to protecting user privacy and data:",
        "• Our Privacy Policy governs how we collect, use, and protect your information",
        "• We implement industry-standard security measures to protect your data",
        "• We do not sell or share personal information with unauthorized third parties",
        "• Users have rights regarding their personal data as outlined in our Privacy Policy",
        "• We comply with applicable data protection laws including GDPR and CCPA",
        "• Data breaches will be reported to authorities and affected users as required by law"
      ]
    },
    {
      title: "10. Limitation of Liability",
      content: [
        "To the fullest extent permitted by law, GoViral shall not be liable for:",
        "• Indirect, incidental, special, consequential, or punitive damages",
        "• Loss of profits, revenue, data, or business opportunities",
        "• Service interruptions or technical difficulties",
        "• Actions taken by social media platforms against user accounts",
        "• Third-party actions or content",
        "• Our total liability shall not exceed the amount paid for the specific service in question",
        "• Some jurisdictions do not allow limitation of liability, so these limitations may not apply to you"
      ]
    },
    {
      title: "11. Disclaimers and Warranties",
      content: [
        "Our services are provided 'as is' without warranties of any kind:",
        "• We make no guarantees about service availability or uninterrupted operation",
        "• We disclaim all warranties, express or implied, including merchantability and fitness for purpose",
        "• We do not guarantee specific results from our services",
        "• Social media platforms may change their policies, affecting our services",
        "• We are not responsible for platform-specific risks or account actions",
        "• Users assume all risks associated with using our services"
      ]
    },
    {
      title: "12. Indemnification",
      content: [
        "Users agree to indemnify and hold GoViral harmless from:",
        "• Claims arising from user's violation of these terms",
        "• User's use or misuse of our services",
        "• User's violation of any third-party rights",
        "• User's violation of applicable laws or regulations",
        "• Content uploaded or shared by the user",
        "• This indemnification obligation survives termination of your account"
      ]
    },
    {
      title: "13. Termination",
      content: [
        "Either party may terminate this agreement under certain circumstances:",
        "• Users may close their accounts at any time through their dashboard",
        "• We may suspend or terminate accounts for violations of these terms",
        "• Termination may result in immediate discontinuation of services",
        "• Outstanding balances and obligations survive termination",
        "• We may retain certain information as required by law or for legitimate business purposes",
        "• Upon termination, users lose access to their account and associated data"
      ]
    },
    {
      title: "14. Dispute Resolution and Governing Law",
      content: [
        "Disputes arising from these terms shall be resolved as follows:",
        "• Initial disputes should be addressed through our customer support",
        "• Unresolved disputes may be subject to binding arbitration",
        "• These terms are governed by the laws of [Jurisdiction]",
        "• Any legal proceedings must be conducted in [Jurisdiction] courts",
        "• Users waive the right to participate in class action lawsuits",
        "• Arbitration proceedings shall be confidential"
      ]
    },
    {
      title: "15. Force Majeure",
      content: [
        "We are not liable for failures or delays caused by circumstances beyond our control:",
        "• Natural disasters, wars, terrorism, or government actions",
        "• Internet outages, server failures, or technical infrastructure issues",
        "• Social media platform changes, outages, or policy modifications",
        "• Pandemics, labor disputes, or supply chain disruptions",
        "• We will make reasonable efforts to minimize service disruptions",
        "• Users will be notified of significant service interruptions when possible"
      ]
    },
    {
      title: "16. Modifications to Terms",
      content: [
        "We reserve the right to modify these terms at any time:",
        "• Users will be notified of material changes via email or platform notifications",
        "• Modified terms become effective 30 days after notification",
        "• Continued use of services constitutes acceptance of modified terms",
        "• If you disagree with modifications, you may terminate your account",
        "• We recommend reviewing these terms periodically for changes"
      ]
    },
    {
      title: "17. Severability and Entire Agreement",
      content: [
        "If any provision of these terms is found invalid or unenforceable:",
        "• The remaining provisions shall continue in full force and effect",
        "• Invalid provisions shall be modified to achieve their intended purpose",
        "• These terms constitute the entire agreement between parties",
        "• Previous agreements or understandings are superseded by these terms",
        "• Modifications must be made in writing and agreed upon by both parties"
      ]
    },
    {
      title: "18. Contact Information",
      content: [
        "For questions or concerns regarding these terms, please contact us:",
        "• Email: legal@goviral.com",
        "• Support: support@goviral.com",
        "• Address: [Company Address]",
        "• Phone: [Company Phone Number]",
        "We will respond to inquiries within a reasonable timeframe, typically within 48 hours during business days."
      ]
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold font-oswald text-foreground mb-6">
              Terms and <span className="text-primary">Conditions</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-4">
              Please read these terms carefully before using GoViral&rsquo;s services. By using our platform, you agree to these terms.
            </p>
            <p className="text-sm text-muted-foreground">
              Last updated: September 1, 2025
            </p>
          </div>

          {/* Introduction */}
          <div className="bg-secondary/20 border border-border p-6 mb-8">
            <h2 className="text-xl font-bold text-foreground mb-4">Agreement Overview</h2>
            <p className="text-muted-foreground leading-relaxed">
              These Terms and Conditions (&ldquo;Terms&rdquo;) govern your use of GoViral&rsquo;s social media marketing services, 
              website, and related services (collectively, the &ldquo;Service&rdquo;). These Terms constitute a legally binding 
              agreement between you (&ldquo;User&rdquo; or &ldquo;you&rdquo;) and GoViral (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;). By accessing or using 
              our Service, you acknowledge that you have read, understood, and agree to be bound by these Terms.
            </p>
          </div>

          {/* Terms Sections */}
          <div className="space-y-8">
            {sections.map((section, index) => (
              <div key={index} className="bg-secondary/10 border border-border p-6">
                <h3 className="text-xl font-bold text-foreground mb-4">
                  {section.title}
                </h3>
                <div className="space-y-3">
                  {section.content.map((paragraph, pIndex) => (
                    <p key={pIndex} className="text-muted-foreground leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Acceptance Notice */}
          <div className="mt-12 p-6 bg-primary/10 border border-primary/20">
            <h3 className="text-lg font-bold text-foreground mb-2">By Using Our Services</h3>
            <p className="text-muted-foreground">
              You acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions. 
              If you do not agree to these terms, please discontinue use of our services immediately.
            </p>
          </div>

          {/* Contact Section */}
          <div className="mt-8 text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Questions About Our Terms?
            </h3>
            <p className="text-muted-foreground mb-6">
              If you have any questions about these Terms and Conditions, our legal team is here to help.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <a
                href="/contact"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 font-medium transition-colors"
              >
                Contact Legal Team
              </a>
              <a
                href="mailto:legal@goviral.com"
                className="border border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 font-medium transition-colors"
              >
                legal@goviral.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    </Layout>
  );
}