import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Shiba Software Consulting - How we collect, use, and protect your information.",
}

export default function PrivacyPolicyPage() {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="text-4xl font-heading font-bold tracking-tight sm:text-5xl mb-4">
            Privacy Policy
          </h1>
          <p className="text-muted-foreground">
            Last updated: December 9, 2024
          </p>
        </div>

        <div className="prose prose-neutral dark:prose-invert max-w-none">
          <section className="mb-12">
            <h2 className="text-2xl font-heading font-bold mb-4">Introduction</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Shiba Software Consulting LLC ("we," "our," or "us") respects your privacy and is committed 
              to protecting your personal data. This privacy policy explains how we collect, use, and 
              safeguard your information when you visit our website shibasoftwareconsulting.com or engage 
              with our services.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-heading font-bold mb-4">Information We Collect</h2>
            
            <h3 className="text-xl font-heading font-semibold mb-3 mt-6">Information You Provide</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              When you contact us through our website or engage our services, we may collect:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
              <li>Name and contact information (email address, phone number)</li>
              <li>Company name and job title</li>
              <li>Project details and requirements you share with us</li>
              <li>Communication history between you and our team</li>
            </ul>

            <h3 className="text-xl font-heading font-semibold mb-3 mt-6">Automatically Collected Information</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              When you visit our website, we may automatically collect:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
              <li>IP address and general location data</li>
              <li>Browser type and version</li>
              <li>Device information</li>
              <li>Pages visited and time spent on our site</li>
              <li>Referring website or source</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-heading font-bold mb-4">How We Use Your Information</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
              <li>Respond to your inquiries and provide requested services</li>
              <li>Communicate with you about projects and services</li>
              <li>Send relevant updates and information (with your consent)</li>
              <li>Improve our website and services</li>
              <li>Comply with legal obligations</li>
              <li>Protect against fraudulent or unauthorized activity</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-heading font-bold mb-4">Data Sharing and Disclosure</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We do not sell your personal information. We may share your information with:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
              <li>Service providers who assist in our operations (e.g., email services, hosting providers)</li>
              <li>Professional advisors (lawyers, accountants) when necessary</li>
              <li>Law enforcement or regulatory authorities when required by law</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              All third-party service providers are contractually obligated to protect your data and 
              use it only for the purposes we specify.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-heading font-bold mb-4">Data Security</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We implement appropriate technical and organizational measures to protect your personal 
              data against unauthorized access, alteration, disclosure, or destruction. These measures include:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
              <li>Encryption of data in transit (HTTPS/TLS)</li>
              <li>Secure storage with access controls</li>
              <li>Regular security assessments</li>
              <li>Limited access to personal data on a need-to-know basis</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-heading font-bold mb-4">Data Retention</h2>
            <p className="text-muted-foreground leading-relaxed">
              We retain your personal data only for as long as necessary to fulfill the purposes for 
              which it was collected, including to satisfy legal, accounting, or reporting requirements. 
              Contact form submissions are typically retained for up to 2 years unless you request earlier deletion.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-heading font-bold mb-4">Your Rights</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Depending on your location, you may have the following rights regarding your personal data:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
              <li><strong>Access:</strong> Request a copy of your personal data</li>
              <li><strong>Correction:</strong> Request correction of inaccurate data</li>
              <li><strong>Deletion:</strong> Request deletion of your personal data</li>
              <li><strong>Portability:</strong> Request transfer of your data to another service</li>
              <li><strong>Objection:</strong> Object to certain processing of your data</li>
              <li><strong>Withdrawal:</strong> Withdraw consent where processing is based on consent</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              To exercise any of these rights, please contact us at{" "}
              <a href="mailto:mail@shibasoftwareconsulting.com" className="text-primary hover:underline">
                mail@shibasoftwareconsulting.com
              </a>.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-heading font-bold mb-4">Cookies</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Our website uses essential cookies to ensure proper functionality. We may also use 
              analytics cookies to understand how visitors interact with our site. You can control 
              cookie preferences through your browser settings.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-heading font-bold mb-4">Third-Party Links</h2>
            <p className="text-muted-foreground leading-relaxed">
              Our website may contain links to third-party websites. We are not responsible for the 
              privacy practices of these external sites. We encourage you to review their privacy 
              policies before providing any personal information.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-heading font-bold mb-4">Children's Privacy</h2>
            <p className="text-muted-foreground leading-relaxed">
              Our services are not directed to individuals under 18 years of age. We do not knowingly 
              collect personal information from children. If you believe we have collected information 
              from a child, please contact us immediately.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-heading font-bold mb-4">Changes to This Policy</h2>
            <p className="text-muted-foreground leading-relaxed">
              We may update this privacy policy from time to time. We will notify you of any material 
              changes by posting the new policy on this page and updating the "Last updated" date. 
              We encourage you to review this policy periodically.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-heading font-bold mb-4">Contact Us</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              If you have any questions about this privacy policy or our data practices, please contact us:
            </p>
            <div className="bg-card border border-border/50 rounded-xl p-6">
              <p className="font-heading font-semibold mb-2">Shiba Software Consulting LLC</p>
              <p className="text-muted-foreground">
                Email:{" "}
                <a href="mailto:mail@shibasoftwareconsulting.com" className="text-primary hover:underline">
                  mail@shibasoftwareconsulting.com
                </a>
              </p>
              <p className="text-muted-foreground">
                Location: California, United States
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

