import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of Service for Shiba Software Consulting - Terms and conditions for using our services.",
}

export default function TermsOfServicePage() {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="text-4xl font-heading font-bold tracking-tight sm:text-5xl mb-4">
            Terms of Service
          </h1>
          <p className="text-muted-foreground">
            Last updated: December 9, 2024
          </p>
        </div>

        <div className="prose prose-neutral dark:prose-invert max-w-none">
          <section className="mb-12">
            <h2 className="text-2xl font-heading font-bold mb-4">1. Agreement to Terms</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              By accessing or using the website shibasoftwareconsulting.com ("Website") or engaging 
              the services of Shiba Software Consulting LLC ("Company," "we," "our," or "us"), you 
              agree to be bound by these Terms of Service ("Terms"). If you do not agree to these 
              Terms, please do not use our Website or services.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-heading font-bold mb-4">2. Services</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Shiba Software Consulting provides software development consulting services, including 
              but not limited to:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
              <li>Cloud-native full-stack application development</li>
              <li>REST API design and development</li>
              <li>Microservices architecture consulting</li>
              <li>Event-driven systems implementation</li>
              <li>AI and RAG application development</li>
              <li>MLOps and LLM pipeline development</li>
              <li>Technical consultation and code review</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              Specific services, deliverables, timelines, and fees will be outlined in a separate 
              Statement of Work (SOW) or service agreement for each engagement.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-heading font-bold mb-4">3. Client Responsibilities</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              As a client, you agree to:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
              <li>Provide accurate and complete information necessary for the project</li>
              <li>Respond to communications and requests in a timely manner</li>
              <li>Provide access to necessary systems, accounts, and resources</li>
              <li>Review and provide feedback on deliverables within agreed timeframes</li>
              <li>Make payments according to the agreed payment schedule</li>
              <li>Comply with all applicable laws and regulations</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-heading font-bold mb-4">4. Intellectual Property</h2>
            
            <h3 className="text-xl font-heading font-semibold mb-3 mt-6">Work Product</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Unless otherwise specified in a written agreement, upon full payment for services:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
              <li>Client receives ownership of custom code and deliverables created specifically for the project</li>
              <li>Company retains ownership of pre-existing tools, libraries, and methodologies</li>
              <li>Company may use general knowledge and skills gained during the project</li>
            </ul>

            <h3 className="text-xl font-heading font-semibold mb-3 mt-6">Third-Party Components</h3>
            <p className="text-muted-foreground leading-relaxed">
              Projects may incorporate open-source or third-party components subject to their 
              respective licenses. Client is responsible for complying with these licenses.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-heading font-bold mb-4">5. Confidentiality</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Both parties agree to maintain the confidentiality of proprietary information shared 
              during the engagement. This includes:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
              <li>Business strategies and plans</li>
              <li>Technical specifications and source code</li>
              <li>Customer data and user information</li>
              <li>Financial information</li>
              <li>Any information marked as confidential</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              Confidentiality obligations survive the termination of the engagement for a period 
              of three (3) years.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-heading font-bold mb-4">6. Payment Terms</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Payment terms will be specified in the applicable Statement of Work. General terms include:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
              <li>Invoices are due within 30 days of receipt unless otherwise agreed</li>
              <li>Late payments may incur interest at 1.5% per month</li>
              <li>Company reserves the right to suspend work for overdue payments</li>
              <li>All fees are non-refundable unless otherwise stated</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-heading font-bold mb-4">7. Warranties and Disclaimers</h2>
            
            <h3 className="text-xl font-heading font-semibold mb-3 mt-6">Limited Warranty</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We warrant that services will be performed in a professional and workmanlike manner 
              consistent with industry standards. We will correct any defects reported within 30 
              days of delivery at no additional cost.
            </p>

            <h3 className="text-xl font-heading font-semibold mb-3 mt-6">Disclaimer</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              EXCEPT AS EXPRESSLY PROVIDED HEREIN, SERVICES ARE PROVIDED "AS IS" WITHOUT WARRANTY 
              OF ANY KIND. WE DISCLAIM ALL IMPLIED WARRANTIES, INCLUDING WARRANTIES OF MERCHANTABILITY, 
              FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We do not warrant that services will be uninterrupted, error-free, or completely secure. 
              Client is responsible for maintaining backups and security measures.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-heading font-bold mb-4">8. Limitation of Liability</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              TO THE MAXIMUM EXTENT PERMITTED BY LAW:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
              <li>Company's total liability shall not exceed the fees paid for the specific services giving rise to the claim</li>
              <li>Company shall not be liable for indirect, incidental, special, consequential, or punitive damages</li>
              <li>Company shall not be liable for lost profits, data loss, or business interruption</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-heading font-bold mb-4">9. Indemnification</h2>
            <p className="text-muted-foreground leading-relaxed">
              Client agrees to indemnify and hold harmless Company from any claims, damages, losses, 
              and expenses arising from: (a) Client's breach of these Terms; (b) Client's use of 
              deliverables; (c) Client's violation of any third-party rights; or (d) Client's 
              violation of applicable laws.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-heading font-bold mb-4">10. Termination</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Either party may terminate an engagement:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
              <li>With 30 days written notice for convenience</li>
              <li>Immediately upon material breach that remains uncured for 15 days after notice</li>
              <li>Immediately if the other party becomes insolvent or files for bankruptcy</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              Upon termination, Client shall pay for all services rendered through the termination date.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-heading font-bold mb-4">11. Independent Contractor</h2>
            <p className="text-muted-foreground leading-relaxed">
              Company is an independent contractor and not an employee, agent, or partner of Client. 
              Nothing in these Terms creates an employment relationship, partnership, or joint venture 
              between the parties.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-heading font-bold mb-4">12. Governing Law and Disputes</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              These Terms shall be governed by the laws of the State of California, without regard 
              to conflict of law principles. Any disputes arising from these Terms or our services 
              shall be resolved through:
            </p>
            <ol className="list-decimal list-inside text-muted-foreground space-y-2 mb-4">
              <li>Good faith negotiation between the parties</li>
              <li>Mediation in California</li>
              <li>Binding arbitration in accordance with AAA Commercial Arbitration Rules</li>
            </ol>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-heading font-bold mb-4">13. Website Use</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              When using our Website, you agree not to:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
              <li>Use the Website for any unlawful purpose</li>
              <li>Attempt to gain unauthorized access to any systems</li>
              <li>Interfere with or disrupt the Website's operation</li>
              <li>Transmit malware, viruses, or harmful code</li>
              <li>Scrape or collect data without permission</li>
              <li>Impersonate any person or entity</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-heading font-bold mb-4">14. Changes to Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              We reserve the right to modify these Terms at any time. Changes will be effective 
              upon posting to the Website. Continued use of our Website or services after changes 
              constitutes acceptance of the modified Terms.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-heading font-bold mb-4">15. Miscellaneous</h2>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
              <li><strong>Entire Agreement:</strong> These Terms, together with any SOW, constitute the entire agreement between the parties</li>
              <li><strong>Severability:</strong> If any provision is found unenforceable, the remaining provisions shall continue in effect</li>
              <li><strong>Waiver:</strong> Failure to enforce any right does not constitute a waiver of that right</li>
              <li><strong>Assignment:</strong> Client may not assign these Terms without written consent</li>
              <li><strong>Force Majeure:</strong> Neither party is liable for delays due to circumstances beyond reasonable control</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-heading font-bold mb-4">16. Contact Information</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              For questions about these Terms, please contact us:
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

