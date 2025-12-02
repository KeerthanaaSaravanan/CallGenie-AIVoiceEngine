import type { Metadata } from "next"
import { FileText, AlertCircle, Phone, Mail } from "lucide-react"

export const metadata: Metadata = {
  title: "Terms & Conditions | SalonAI VoiceEngine",
  description: "Read our terms and conditions for using SalonAI VoiceEngine AI receptionist services.",
}

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-ink pt-24 pb-16">
      {/* Hero */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
              <FileText className="w-4 h-4" />
              Legal Document
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">Terms & Conditions</h1>
            <p className="text-lg text-muted-foreground">Last updated: December 2, 2025</p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-8">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="glass-card rounded-3xl p-8 lg:p-12 space-y-10">
              {/* Introduction */}
              <div className="space-y-4">
                <p className="text-foreground/90 leading-relaxed">
                  Welcome to SalonAI VoiceEngine. These Terms & Conditions ("Terms") govern your use of our AI
                  receptionist platform, including our website, dashboard, APIs, and related services (collectively, the
                  "Service"). By accessing or using SalonAI VoiceEngine, you agree to be bound by these Terms.
                </p>
                <p className="text-foreground/90 leading-relaxed">
                  SalonAI VoiceEngine is operated by SalonAI Technologies ("we", "us", or "our"), a company registered
                  in India.
                </p>
              </div>

              {/* Section 1 */}
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center text-primary text-sm font-bold">
                    1
                  </span>
                  Acceptance of Terms
                </h2>
                <div className="pl-11 space-y-3 text-foreground/80 leading-relaxed">
                  <p>By creating an account, accessing, or using our Service, you confirm that:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>You have read, understood, and agree to be bound by these Terms</li>
                    <li>You are at least 18 years of age</li>
                    <li>You have the legal authority to enter into this agreement on behalf of your business</li>
                    <li>Your use of the Service complies with all applicable laws and regulations</li>
                  </ul>
                  <p>If you do not agree to these Terms, you may not access or use the Service.</p>
                </div>
              </div>

              {/* Section 2 */}
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center text-primary text-sm font-bold">
                    2
                  </span>
                  Eligibility
                </h2>
                <div className="pl-11 space-y-3 text-foreground/80 leading-relaxed">
                  <p>To use SalonAI VoiceEngine, you must:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Be a registered business entity or sole proprietor</li>
                    <li>Operate in the salon, spa, clinic, wellness, or similar appointment-based industry</li>
                    <li>Have a valid phone number and email address</li>
                    <li>Provide accurate and complete registration information</li>
                    <li>Maintain the security of your account credentials</li>
                  </ul>
                </div>
              </div>

              {/* Section 3 */}
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center text-primary text-sm font-bold">
                    3
                  </span>
                  Service Description
                </h2>
                <div className="pl-11 space-y-3 text-foreground/80 leading-relaxed">
                  <p>SalonAI VoiceEngine provides:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>AI Call Answering:</strong> Automated phone call handling using artificial intelligence
                    </li>
                    <li>
                      <strong>WhatsApp Integration:</strong> AI-powered messaging via WhatsApp Business API
                    </li>
                    <li>
                      <strong>Appointment Booking:</strong> Automated scheduling and calendar management
                    </li>
                    <li>
                      <strong>Dashboard:</strong> Web-based interface for managing bookings, staff, and analytics
                    </li>
                    <li>
                      <strong>Notifications:</strong> WhatsApp confirmations and reminders to customers
                    </li>
                  </ul>
                  <p className="mt-4">
                    The Service is provided "as-is" and we continuously work to improve its accuracy and reliability.
                    However, AI-generated responses may occasionally contain errors or misunderstandings.
                  </p>
                </div>
              </div>

              {/* Section 4 */}
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center text-primary text-sm font-bold">
                    4
                  </span>
                  Fair Use Policy
                </h2>
                <div className="pl-11 space-y-3 text-foreground/80 leading-relaxed">
                  <p>Your subscription includes a fair usage allocation based on your plan:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Call minutes and WhatsApp messages are subject to plan limits</li>
                    <li>
                      Excessive usage beyond reasonable business needs may result in additional charges or service
                      throttling
                    </li>
                    <li>Automated or scripted calls designed to artificially inflate usage are prohibited</li>
                    <li>The Service must not be used for spam, harassment, or illegal purposes</li>
                  </ul>
                  <p>We reserve the right to suspend accounts that violate fair use policies.</p>
                </div>
              </div>

              {/* Section 5 */}
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center text-primary text-sm font-bold">
                    5
                  </span>
                  Call Recording Consent
                </h2>
                <div className="pl-11 space-y-3 text-foreground/80 leading-relaxed">
                  <p>If you enable call recording features:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>You are responsible for informing callers that calls may be recorded</li>
                    <li>
                      You must comply with all applicable laws regarding call recording consent in your jurisdiction
                    </li>
                    <li>Recordings are stored securely and accessible only to authorized account users</li>
                    <li>We do not use recordings for any purpose other than providing the Service</li>
                  </ul>
                  <div className="mt-4 p-4 bg-secondary/10 rounded-xl border border-secondary/20">
                    <p className="text-sm text-secondary flex items-start gap-2">
                      <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                      <span>
                        In India, single-party consent is generally sufficient for call recording. However, we recommend
                        informing callers via your AI greeting.
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Section 6 */}
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center text-primary text-sm font-bold">
                    6
                  </span>
                  Client Responsibilities
                </h2>
                <div className="pl-11 space-y-3 text-foreground/80 leading-relaxed">
                  <p>As a client, you agree to:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Provide accurate business information during onboarding</li>
                    <li>Keep your account credentials secure and confidential</li>
                    <li>Notify us immediately of any unauthorized account access</li>
                    <li>Ensure your staff members using the dashboard are properly trained</li>
                    <li>Maintain accurate service pricing and availability information</li>
                    <li>Honor appointments booked through the AI system</li>
                    <li>Comply with all applicable laws in your business operations</li>
                  </ul>
                </div>
              </div>

              {/* Section 7 */}
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center text-primary text-sm font-bold">
                    7
                  </span>
                  Our Responsibilities
                </h2>
                <div className="pl-11 space-y-3 text-foreground/80 leading-relaxed">
                  <p>We commit to:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Providing reliable AI receptionist services as described</li>
                    <li>Maintaining reasonable uptime and service availability</li>
                    <li>Protecting your data with industry-standard security measures</li>
                    <li>Providing customer support during business hours</li>
                    <li>Notifying you of planned maintenance or service disruptions</li>
                    <li>Continuously improving AI accuracy and features</li>
                  </ul>
                </div>
              </div>

              {/* Section 8 */}
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center text-primary text-sm font-bold">
                    8
                  </span>
                  Subscription & Billing
                </h2>
                <div className="pl-11 space-y-3 text-foreground/80 leading-relaxed">
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>Billing Cycle:</strong> Subscriptions are billed monthly or annually, depending on your
                      chosen plan
                    </li>
                    <li>
                      <strong>Auto-Renewal:</strong> Subscriptions automatically renew at the end of each billing period
                      unless cancelled
                    </li>
                    <li>
                      <strong>Payment Processing:</strong> All payments are securely processed through Razorpay
                    </li>
                    <li>
                      <strong>Price Changes:</strong> We will notify you at least 30 days before any price increases
                    </li>
                    <li>
                      <strong>Failed Payments:</strong> If payment fails, we will attempt to charge again. Continued
                      failure may result in service suspension
                    </li>
                    <li>
                      <strong>Taxes:</strong> Prices are exclusive of GST and other applicable taxes
                    </li>
                  </ul>
                </div>
              </div>

              {/* Section 9 */}
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center text-primary text-sm font-bold">
                    9
                  </span>
                  Refund Policy
                </h2>
                <div className="pl-11 space-y-3 text-foreground/80 leading-relaxed">
                  <ul className="list-disc pl-6 space-y-2">
                    <li>No refunds are provided for subscription periods that have already been used</li>
                    <li>Refunds may be issued for duplicate payments or billing errors</li>
                    <li>
                      Refunds for major service outages lasting more than 24 hours will be considered on a case-by-case
                      basis
                    </li>
                    <li>To request a refund, contact us at inesh2010nj@gmail.com</li>
                  </ul>
                  <p className="mt-4">
                    For detailed refund information, please see our{" "}
                    <a href="/refund" className="text-primary hover:underline">
                      Refund Policy
                    </a>
                    .
                  </p>
                </div>
              </div>

              {/* Section 10 */}
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center text-primary text-sm font-bold">
                    10
                  </span>
                  Free Trial
                </h2>
                <div className="pl-11 space-y-3 text-foreground/80 leading-relaxed">
                  <ul className="list-disc pl-6 space-y-2">
                    <li>New users receive a 15-day free trial with full access to all features</li>
                    <li>No credit card is required to start the trial</li>
                    <li>Trial accounts have the same usage limits as paid Starter plans</li>
                    <li>At the end of the trial, you must subscribe to continue using the Service</li>
                    <li>
                      If you do not subscribe, your AI receptionist will be deactivated, but your data will be retained
                      for 30 days
                    </li>
                    <li>Only one free trial is allowed per business</li>
                  </ul>
                </div>
              </div>

              {/* Section 11 */}
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center text-primary text-sm font-bold">
                    11
                  </span>
                  WhatsApp & Telephony Integration
                </h2>
                <div className="pl-11 space-y-3 text-foreground/80 leading-relaxed">
                  <ul className="list-disc pl-6 space-y-2">
                    <li>We use third-party telephony providers (Twilio, Exotel) and Meta WhatsApp Business API</li>
                    <li>You must comply with WhatsApp's Business Policy and Terms of Service</li>
                    <li>We are not responsible for outages or changes in third-party provider services</li>
                    <li>WhatsApp message templates must be approved by Meta before use</li>
                    <li>Spam or promotional messaging without consent is strictly prohibited</li>
                  </ul>
                </div>
              </div>

              {/* Section 12 */}
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center text-primary text-sm font-bold">
                    12
                  </span>
                  Data Privacy
                </h2>
                <div className="pl-11 space-y-3 text-foreground/80 leading-relaxed">
                  <p>
                    Your privacy is important to us. We collect and process data as described in our
                    <a href="/privacy" className="text-primary hover:underline ml-1">
                      Privacy Policy
                    </a>
                    . By using the Service, you consent to:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Collection of business and customer data necessary to provide the Service</li>
                    <li>Processing of call recordings and transcripts (if enabled)</li>
                    <li>Sharing data with third-party providers (Twilio, Meta, Razorpay) as necessary</li>
                    <li>Storage of data on secure cloud servers</li>
                  </ul>
                </div>
              </div>

              {/* Section 13 */}
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center text-primary text-sm font-bold">
                    13
                  </span>
                  Termination
                </h2>
                <div className="pl-11 space-y-3 text-foreground/80 leading-relaxed">
                  <p>
                    <strong>By You:</strong>
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mb-4">
                    <li>You may cancel your subscription at any time from the dashboard</li>
                    <li>Cancellation takes effect at the end of the current billing period</li>
                    <li>You may request complete data deletion after cancellation</li>
                  </ul>
                  <p>
                    <strong>By Us:</strong>
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>We may suspend or terminate your account for violation of these Terms</li>
                    <li>We may terminate with 30 days notice for any reason</li>
                    <li>Immediate termination may occur for illegal activity or severe policy violations</li>
                  </ul>
                </div>
              </div>

              {/* Section 14 */}
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center text-primary text-sm font-bold">
                    14
                  </span>
                  Limitation of Liability
                </h2>
                <div className="pl-11 space-y-3 text-foreground/80 leading-relaxed">
                  <p>To the maximum extent permitted by law:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>We are not liable for any indirect, incidental, special, or consequential damages</li>
                    <li>We are not liable for lost profits, business interruption, or data loss</li>
                    <li>We are not liable for AI errors, misunderstandings, or incorrect bookings</li>
                    <li>
                      Our total liability is limited to the amount paid by you in the 12 months preceding the claim
                    </li>
                    <li>We are not liable for third-party service outages (telephony, WhatsApp, payments)</li>
                  </ul>
                </div>
              </div>

              {/* Section 15 */}
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center text-primary text-sm font-bold">
                    15
                  </span>
                  Governing Law
                </h2>
                <div className="pl-11 space-y-3 text-foreground/80 leading-relaxed">
                  <p>
                    These Terms shall be governed by and construed in accordance with the laws of India. Any disputes
                    arising from these Terms or your use of the Service shall be subject to the exclusive jurisdiction
                    of the courts in Bangalore, Karnataka, India.
                  </p>
                </div>
              </div>

              {/* Section 16 */}
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center text-primary text-sm font-bold">
                    16
                  </span>
                  Changes to Terms
                </h2>
                <div className="pl-11 space-y-3 text-foreground/80 leading-relaxed">
                  <p>
                    We may update these Terms from time to time. We will notify you of material changes via email or
                    dashboard notification at least 15 days before they take effect. Continued use of the Service after
                    changes constitutes acceptance of the new Terms.
                  </p>
                </div>
              </div>

              {/* Contact Section */}
              <div className="mt-12 p-6 bg-primary/5 rounded-2xl border border-primary/20">
                <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Phone className="w-5 h-5 text-primary" />
                  Contact Us
                </h2>
                <p className="text-foreground/80 mb-4">
                  If you have any questions about these Terms & Conditions, please contact us:
                </p>
                <div className="space-y-2 text-foreground/80">
                  <p className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-primary" />
                    <a href="mailto:inesh2010nj@gmail.com" className="text-primary hover:underline">
                      inesh2010nj@gmail.com
                    </a>
                  </p>
                  <p className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-primary" />
                    <span>+91-8939744434</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
