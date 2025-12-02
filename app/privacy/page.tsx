import type { Metadata } from "next"
import { Shield, Database, Lock, Eye, Clock, Users, Globe, Phone, Mail, AlertCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Privacy Policy | CallGenie AI VoiceEngine",
  description: "Learn how CallGenie AI VoiceEngine collects, uses, and protects your data.",
}

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-ink pt-24 pb-16">
      {/* Hero */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-sm font-medium mb-6">
              <Shield className="w-4 h-4" />
              Your Privacy Matters
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">Privacy Policy</h1>
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
                  At CallGenie AI VoiceEngine ("we", "us", or "our"), we are committed to protecting your privacy and the
                  privacy of your customers. This Privacy Policy explains how we collect, use, store, and protect
                  information when you use our AI receptionist platform.
                </p>
                <p className="text-foreground/90 leading-relaxed">
                  By using CallGenie AI VoiceEngine, you agree to the collection and use of information in accordance with
                  this policy.
                </p>
              </div>

              {/* Section 1 */}
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground flex items-center gap-3">
                  <Database className="w-6 h-6 text-secondary" />
                  Information We Collect from Clients (You)
                </h2>
                <div className="pl-9 space-y-3 text-foreground/80 leading-relaxed">
                  <p>When you sign up and use our Service, we collect:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>Account Information:</strong> Business name, owner name, email address, phone number,
                      business category
                    </li>
                    <li>
                      <strong>Business Details:</strong> Services offered, pricing, staff information, working hours,
                      holidays
                    </li>
                    <li>
                      <strong>Configuration Data:</strong> AI tone preferences, custom rules, FAQs, booking policies
                    </li>
                    <li>
                      <strong>Billing Information:</strong> Payment method details (processed securely by Razorpay - we
                      do not store card numbers)
                    </li>
                    <li>
                      <strong>Usage Data:</strong> Dashboard activity, feature usage, login history
                    </li>
                  </ul>
                </div>
              </div>

              {/* Section 2 */}
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground flex items-center gap-3">
                  <Users className="w-6 h-6 text-secondary" />
                  Information We Collect from Callers (Your Customers)
                </h2>
                <div className="pl-9 space-y-3 text-foreground/80 leading-relaxed">
                  <p>When customers interact with your AI receptionist, we collect:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>Contact Information:</strong> Phone number (from caller ID), name (if provided during
                      conversation)
                    </li>
                    <li>
                      <strong>Conversation Data:</strong> Call transcripts, WhatsApp message content
                    </li>
                    <li>
                      <strong>Booking Details:</strong> Service requested, preferred date/time, staff preferences
                    </li>
                    <li>
                      <strong>Call Recordings:</strong> Audio recordings (only if you enable this feature)
                    </li>
                    <li>
                      <strong>Interaction Metadata:</strong> Call duration, timestamps, call outcome
                    </li>
                  </ul>
                  <div className="mt-4 p-4 bg-secondary/10 rounded-xl border border-secondary/20">
                    <p className="text-sm text-secondary flex items-start gap-2">
                      <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                      <span>
                        Customer data is collected on your behalf to provide the booking service. You are the data
                        controller for your customer data.
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Section 3 */}
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground flex items-center gap-3">
                  <Lock className="w-6 h-6 text-secondary" />
                  Data Storage & Security
                </h2>
                <div className="pl-9 space-y-3 text-foreground/80 leading-relaxed">
                  <p>We implement robust security measures to protect your data:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>Encryption:</strong> All data is encrypted in transit (TLS 1.3) and at rest (AES-256)
                    </li>
                    <li>
                      <strong>Secure Infrastructure:</strong> Data is stored on enterprise-grade cloud servers with SOC
                      2 compliance
                    </li>
                    <li>
                      <strong>Access Control:</strong> Role-based access ensures only authorized personnel can access
                      data
                    </li>
                    <li>
                      <strong>Regular Audits:</strong> We conduct regular security audits and vulnerability assessments
                    </li>
                    <li>
                      <strong>Backup:</strong> Data is backed up daily with secure off-site storage
                    </li>
                  </ul>
                </div>
              </div>

              {/* Section 4 */}
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground flex items-center gap-3">
                  <Eye className="w-6 h-6 text-secondary" />
                  Your Rights (GDPR-Style)
                </h2>
                <div className="pl-9 space-y-3 text-foreground/80 leading-relaxed">
                  <p>We respect your data rights. You have the right to:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>Access:</strong> Request a copy of all data we hold about you and your business
                    </li>
                    <li>
                      <strong>Rectification:</strong> Correct any inaccurate or incomplete data
                    </li>
                    <li>
                      <strong>Erasure:</strong> Request deletion of your data (subject to legal retention requirements)
                    </li>
                    <li>
                      <strong>Portability:</strong> Receive your data in a machine-readable format
                    </li>
                    <li>
                      <strong>Restriction:</strong> Limit how we process your data in certain circumstances
                    </li>
                    <li>
                      <strong>Objection:</strong> Object to certain types of data processing
                    </li>
                  </ul>
                  <p className="mt-4">To exercise any of these rights, contact us at inesh2010nj@gmail.com</p>
                </div>
              </div>

              {/* Section 5 */}
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground flex items-center gap-3">
                  <Clock className="w-6 h-6 text-secondary" />
                  Data Retention
                </h2>
                <div className="pl-9 space-y-3 text-foreground/80 leading-relaxed">
                  <p>We retain data for the following periods:</p>
                  <div className="overflow-x-auto mt-4">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-border/30">
                          <th className="text-left py-3 px-4 font-medium">Data Type</th>
                          <th className="text-left py-3 px-4 font-medium">Retention Period</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-border/20">
                        <tr>
                          <td className="py-3 px-4">Account information</td>
                          <td className="py-3 px-4">Duration of account + 2 years</td>
                        </tr>
                        <tr>
                          <td className="py-3 px-4">Booking records</td>
                          <td className="py-3 px-4">3 years (for legal compliance)</td>
                        </tr>
                        <tr>
                          <td className="py-3 px-4">Call recordings</td>
                          <td className="py-3 px-4">90 days (configurable)</td>
                        </tr>
                        <tr>
                          <td className="py-3 px-4">Call transcripts</td>
                          <td className="py-3 px-4">1 year</td>
                        </tr>
                        <tr>
                          <td className="py-3 px-4">WhatsApp messages</td>
                          <td className="py-3 px-4">1 year</td>
                        </tr>
                        <tr>
                          <td className="py-3 px-4">Analytics data</td>
                          <td className="py-3 px-4">2 years (aggregated)</td>
                        </tr>
                        <tr>
                          <td className="py-3 px-4">Billing records</td>
                          <td className="py-3 px-4">7 years (legal requirement)</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="mt-4">
                    After account deletion, we retain minimal data for 30 days before permanent deletion, allowing for
                    account recovery if requested.
                  </p>
                </div>
              </div>

              {/* Section 6 */}
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground flex items-center gap-3">
                  <Globe className="w-6 h-6 text-secondary" />
                  Third-Party Sharing
                </h2>
                <div className="pl-9 space-y-3 text-foreground/80 leading-relaxed">
                  <p>We share data with the following third parties to provide our Service:</p>
                  <div className="space-y-4 mt-4">
                    <div className="p-4 bg-muted/30 rounded-xl">
                      <h4 className="font-medium text-foreground mb-2">Telephony Providers (Exotel)</h4>
                      <p className="text-sm">
                        Call routing, call recordings, and phone number management. They process caller phone numbers
                        and call audio.
                      </p>
                    </div>
                    <div className="p-4 bg-muted/30 rounded-xl">
                      <h4 className="font-medium text-foreground mb-2">Meta WhatsApp Business API</h4>
                      <p className="text-sm">
                        WhatsApp message delivery and templates. They process customer phone numbers and message
                        content.
                      </p>
                    </div>
                    <div className="p-4 bg-muted/30 rounded-xl">
                      <h4 className="font-medium text-foreground mb-2">Razorpay</h4>
                      <p className="text-sm">
                        Payment processing. They handle all payment card details securely. We never store your full card
                        information.
                      </p>
                    </div>
                    <div className="p-4 bg-muted/30 rounded-xl">
                      <h4 className="font-medium text-foreground mb-2">Cloud Infrastructure (AWS/GCP)</h4>
                      <p className="text-sm">
                        Secure data storage and processing. All data is encrypted and stored in compliant data centers.
                      </p>
                    </div>
                  </div>
                  <p className="mt-4">
                    We do not sell your data to third parties. We do not share data for advertising purposes.
                  </p>
                </div>
              </div>

              {/* Section 7 */}
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground flex items-center gap-3">
                  <Phone className="w-6 h-6 text-secondary" />
                  Call Transcript Handling
                </h2>
                <div className="pl-9 space-y-3 text-foreground/80 leading-relaxed">
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Call transcripts are generated automatically using AI speech-to-text technology</li>
                    <li>Transcripts are used to improve AI accuracy and provide you with call logs</li>
                    <li>Transcripts are accessible only to authorized account users via the dashboard</li>
                    <li>We may use anonymized, aggregated transcript data to improve our AI models</li>
                    <li>You can delete individual transcripts or request bulk deletion</li>
                  </ul>
                </div>
              </div>

              {/* Section 8 */}
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground flex items-center gap-3">
                  <Eye className="w-6 h-6 text-secondary" />
                  Cookies & Website Tracking
                </h2>
                <div className="pl-9 space-y-3 text-foreground/80 leading-relaxed">
                  <p>Our website and dashboard use cookies for:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>Essential Cookies:</strong> Required for login, session management, and security
                    </li>
                    <li>
                      <strong>Analytics Cookies:</strong> Help us understand how users interact with our platform
                      (anonymized)
                    </li>
                    <li>
                      <strong>Preference Cookies:</strong> Remember your settings and preferences
                    </li>
                  </ul>
                  <p className="mt-4">
                    You can manage cookie preferences through your browser settings. Disabling essential cookies may
                    affect functionality.
                  </p>
                </div>
              </div>

              {/* Section 9 */}
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground flex items-center gap-3">
                  <Lock className="w-6 h-6 text-secondary" />
                  Data Deletion
                </h2>
                <div className="pl-9 space-y-3 text-foreground/80 leading-relaxed">
                  <p>To request data deletion:</p>
                  <ol className="list-decimal pl-6 space-y-2">
                    <li>Email us at inesh2010nj@gmail.com with subject "Data Deletion Request"</li>
                    <li>Include your registered business email and business name</li>
                    <li>Specify what data you want deleted (all data, specific records, or customer data)</li>
                    <li>We will verify your identity and process the request within 30 days</li>
                  </ol>
                  <p className="mt-4">
                    Note: Some data may be retained for legal compliance (e.g., billing records for 7 years as required
                    by Indian law).
                  </p>
                </div>
              </div>

              {/* Section 10 */}
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground flex items-center gap-3">
                  <AlertCircle className="w-6 h-6 text-secondary" />
                  Changes to This Policy
                </h2>
                <div className="pl-9 space-y-3 text-foreground/80 leading-relaxed">
                  <p>
                    We may update this Privacy Policy from time to time. We will notify you of significant changes via
                    email or dashboard notification. The "Last updated" date at the top of this policy indicates when it
                    was last revised.
                  </p>
                </div>
              </div>

              {/* Contact Section */}
              <div className="mt-12 p-6 bg-secondary/5 rounded-2xl border border-secondary/20">
                <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Mail className="w-5 h-5 text-secondary" />
                  Privacy Contact
                </h2>
                <p className="text-foreground/80 mb-4">
                  For any privacy-related questions or requests, please contact our Data Protection team:
                </p>
                <div className="space-y-2 text-foreground/80">
                  <p className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-secondary" />
                    <a href="mailto:inesh2010nj@gmail.com" className="text-secondary hover:underline">
                      inesh2010nj@gmail.com
                    </a>
                  </p>
                  <p className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-secondary" />
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
