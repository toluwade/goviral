'use client';

import Layout from '@/components/Layout';

export default function PrivacyPage() {
  const sections = [
    {
      title: "1. Information We Collect",
      content: [
        "When you use GoViral, we may collect the following types of information:",
        "• Personal Information: Name, email address, phone number, and other contact details you provide when creating an account or contacting us.",
        "• Payment Information: Credit card details, billing address, and transaction history when you purchase our services.",
        "• Social Media Information: Social media account usernames, profile URLs, and engagement metrics for the services you purchase.",
        "• Technical Information: IP address, browser type, device information, and usage data collected through cookies and similar technologies.",
        "• Communication Data: Messages, support tickets, and other communications you send to us."
      ]
    },
    {
      title: "2. How We Use Your Information",
      content: [
        "We use the information we collect for the following purposes:",
        "• To provide and maintain our SMM panel services",
        "• To process payments and fulfill your orders",
        "• To communicate with you about your account and our services",
        "• To provide customer support and respond to your inquiries",
        "• To improve our services and develop new features",
        "• To detect, prevent, and address fraud and security issues",
        "• To comply with legal obligations and enforce our terms of service",
        "• To send you marketing communications (with your consent)"
      ]
    },
    {
      title: "3. Information Sharing and Disclosure",
      content: [
        "We do not sell, trade, or rent your personal information to third parties. However, we may share your information in the following circumstances:",
        "• Service Providers: We may share information with trusted third-party providers who help us deliver our services, such as payment processors and customer support tools.",
        "• Social Media Platforms: We share necessary information with social media platforms to fulfill your service orders (such as usernames or profile URLs).",
        "• Legal Requirements: We may disclose information when required by law, legal process, or government request.",
        "• Business Transfers: In the event of a merger, acquisition, or sale of assets, your information may be transferred to the new entity.",
        "• Protection of Rights: We may share information to protect our rights, property, or safety, or that of our users or others."
      ]
    },
    {
      title: "4. Data Security",
      content: [
        "We implement appropriate technical and organizational measures to protect your personal information:",
        "• Encryption: All sensitive data is encrypted in transit and at rest using industry-standard encryption protocols.",
        "• Access Controls: We limit access to personal information to authorized personnel only.",
        "• Regular Monitoring: We continuously monitor our systems for potential security threats.",
        "• Secure Infrastructure: Our services are hosted on secure, regularly updated servers.",
        "• Payment Security: All payment processing is handled by PCI-compliant payment processors.",
        "However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security."
      ]
    },
    {
      title: "5. Data Retention",
      content: [
        "We retain your personal information for as long as necessary to provide our services and fulfill the purposes outlined in this privacy policy:",
        "• Account Information: Retained while your account is active and for a reasonable period after account closure.",
        "• Transaction Data: Retained for accounting and legal compliance purposes, typically 7 years.",
        "• Communication Records: Retained for customer service and legal purposes, typically 3 years.",
        "• Technical Data: Retained for system optimization and security purposes, typically 12 months.",
        "You may request deletion of your personal information, subject to legal and contractual obligations."
      ]
    },
    {
      title: "6. Your Rights and Choices",
      content: [
        "Depending on your location, you may have the following rights regarding your personal information:",
        "• Access: You can request access to the personal information we hold about you.",
        "• Rectification: You can request correction of inaccurate or incomplete information.",
        "• Erasure: You can request deletion of your personal information in certain circumstances.",
        "• Portability: You can request a copy of your data in a structured, machine-readable format.",
        "• Restriction: You can request limitation of processing in certain circumstances.",
        "• Objection: You can object to certain types of processing, including direct marketing.",
        "• Withdrawal of Consent: You can withdraw consent for processing based on consent at any time.",
        "To exercise these rights, please contact us at privacy@goviral.com."
      ]
    },
    {
      title: "7. Cookies and Tracking Technologies",
      content: [
        "We use cookies and similar tracking technologies to enhance your experience:",
        "• Essential Cookies: Required for the basic functionality of our website and services.",
        "• Analytics Cookies: Help us understand how you use our services to improve performance.",
        "• Preference Cookies: Remember your settings and preferences.",
        "• Marketing Cookies: Used to deliver relevant advertisements and measure campaign effectiveness.",
        "You can control cookies through your browser settings, but disabling certain cookies may affect the functionality of our services."
      ]
    },
    {
      title: "8. Third-Party Services",
      content: [
        "Our services may contain links to third-party websites or integrate with third-party services:",
        "• We are not responsible for the privacy practices of third-party websites or services.",
        "• We encourage you to read the privacy policies of any third-party services you use.",
        "• Social media platforms have their own privacy policies governing the use of your data.",
        "• Payment processors may collect and process your payment information according to their own privacy policies."
      ]
    },
    {
      title: "9. Children's Privacy",
      content: [
        "Our services are not intended for children under the age of 13:",
        "• We do not knowingly collect personal information from children under 13.",
        "• If we become aware that we have collected information from a child under 13, we will take steps to delete it.",
        "• Parents or guardians who believe their child has provided information to us should contact us immediately.",
        "• For users between 13-18, parental consent may be required in certain jurisdictions."
      ]
    },
    {
      title: "10. International Data Transfers",
      content: [
        "Your information may be transferred to and processed in countries other than your own:",
        "• We ensure appropriate safeguards are in place for international transfers.",
        "• Data transfers to countries outside the EU are protected by adequacy decisions or appropriate safeguards.",
        "• We may use standard contractual clauses or other approved transfer mechanisms.",
        "• By using our services, you consent to the transfer of your information as described in this policy."
      ]
    },
    {
      title: "11. Updates to This Privacy Policy",
      content: [
        "We may update this privacy policy from time to time:",
        "• We will notify you of any material changes by email or through our services.",
        "• The updated policy will be posted on our website with the effective date.",
        "• Your continued use of our services after changes become effective constitutes acceptance of the updated policy.",
        "• We encourage you to review this policy periodically for any changes."
      ]
    },
    {
      title: "12. Contact Information",
      content: [
        "If you have any questions or concerns about this privacy policy or our data practices, please contact us:",
        "• Email: privacy@goviral.com",
        "• Support: support@goviral.com",
        "• Address: [Company Address]",
        "• Phone: [Company Phone Number]",
        "We will respond to your inquiries within a reasonable timeframe, typically within 30 days."
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
              Privacy <span className="text-primary">Policy</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-4">
              Your privacy is important to us. This policy explains how we collect, use, and protect your personal information.
            </p>
            <p className="text-sm text-muted-foreground">
              Last updated: September 1, 2025
            </p>
          </div>

          {/* Introduction */}
          <div className="bg-secondary/20 border border-border p-6 mb-8">
            <h2 className="text-xl font-bold text-foreground mb-4">Introduction</h2>
            <p className="text-muted-foreground leading-relaxed">
              GoViral ("we", "our", or "us") is committed to protecting your privacy and personal information. 
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information when 
              you use our social media marketing (SMM) panel services, visit our website, or interact with us 
              in any way. Please read this policy carefully to understand our practices regarding your personal 
              information and how we treat it.
            </p>
          </div>

          {/* Policy Sections */}
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

          {/* Effective Date */}
          <div className="mt-12 p-6 bg-primary/10 border border-primary/20">
            <h3 className="text-lg font-bold text-foreground mb-2">Effective Date</h3>
            <p className="text-muted-foreground">
              This Privacy Policy is effective as of September 1, 2025. By using GoViral's services, 
              you acknowledge that you have read, understood, and agree to be bound by this Privacy Policy.
            </p>
          </div>

          {/* Contact Section */}
          <div className="mt-8 text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Questions About Privacy?
            </h3>
            <p className="text-muted-foreground mb-6">
              If you have any questions or concerns about our privacy practices, we're here to help.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <a
                href="/contact"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 font-medium transition-colors"
              >
                Contact Privacy Team
              </a>
              <a
                href="mailto:privacy@goviral.com"
                className="border border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 font-medium transition-colors"
              >
                privacy@goviral.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    </Layout>
  );
}