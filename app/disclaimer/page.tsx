import type { Metadata } from "next"
import { AlertTriangle, Shield, Server, Brain, Scale, FileWarning, Phone, Mail } from "lucide-react"

export const metadata: Metadata = {
  title: "Disclaimer | SalonAI VoiceEngine",
  description: "Legal disclaimer for SalonAI VoiceEngine AI receptionist services.",
}

export default function DisclaimerPage() {
  return (
    <main className="min-h-screen bg-ink pt-24 pb-16">
      {/* Hero */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 text-sm font-medium mb-6">
              <AlertTriangle className="w-4 h-4" />
              Important Notice
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">Legal Disclaimer</h1>
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
                  This Legal Disclaimer governs your use of SalonAI VoiceEngine ("Service", "Platform", "we", "us", or
                  "our"). By accessing or using our AI receptionist platform, you acknowledge that you have read,
                  understood, and agree to be bound by this Disclaimer.
                </p>
                <div className="p-4 bg-yellow-500/10 rounded-xl border border-yellow-500/20">
                  <p className="text-yellow-400 flex items-start gap-2">
                    <AlertTriangle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span>
                      Please read this Disclaimer carefully. It contains important limitations on our liability and your
                      expectations of the Service.
                    </span>
                  </p>
                </div>
              </div>

              {/* AI Accuracy */}
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground flex items-center gap-3">
                  <Brain className="w-6 h-6 text-yellow-400" />
                  AI Accuracy Disclaimer
                </h2>
                <div className="pl-9 space-y-3 text-foreground/80 leading-relaxed">
                  <p>
                    SalonAI VoiceEngine uses artificial intelligence and machine learning to handle phone calls,
                    WhatsApp messages, and appointment bookings. While we strive for high accuracy:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>AI is not perfect:</strong> Our AI may occasionally misunderstand, misinterpret, or
                      incorrectly respond to customer queries
                    </li>
                    <li>
                      <strong>Speech recognition limitations:</strong> Accents, background noise, poor call quality, or
                      unusual speech patterns may affect accuracy
                    </li>
                    <li>
                      <strong>Context understanding:</strong> Complex or ambiguous requests may not be handled correctly
                    </li>
                    <li>
                      <strong>Booking errors:</strong> While rare, the AI may book incorrect times, services, or staff
                      members
                    </li>
                    <li>
                      <strong>Continuous learning:</strong> We continuously improve our AI, but it will never be 100%
                      accurate
                    </li>
                  </ul>
                  <p className="mt-4">
                    <strong>Your responsibility:</strong> You should regularly review booking logs, call transcripts,
                    and customer feedback to catch and correct any AI errors. We recommend having a staff member
                    periodically verify bookings.
                  </p>
                </div>
              </div>

              {/* Business Losses */}
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground flex items-center gap-3">
                  <FileWarning className="w-6 h-6 text-yellow-400" />
                  No Liability for Business Losses
                </h2>
                <div className="pl-9 space-y-3 text-foreground/80 leading-relaxed">
                  <p>
                    We are <strong>not responsible</strong> for any business losses arising from:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Missed appointments due to AI booking errors or system issues</li>
                    <li>Lost revenue from incorrect scheduling or double-bookings</li>
                    <li>Customer dissatisfaction caused by AI responses or miscommunication</li>
                    <li>Reputation damage resulting from AI interactions</li>
                    <li>Staff scheduling conflicts based on AI-generated bookings</li>
                    <li>Any indirect, incidental, special, or consequential damages</li>
                  </ul>
                  <p className="mt-4">
                    You acknowledge that reliance on AI systems involves inherent risks, and you assume full
                    responsibility for implementing appropriate verification and backup procedures for your business
                    operations.
                  </p>
                </div>
              </div>

              {/* Third-Party Downtime */}
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground flex items-center gap-3">
                  <Server className="w-6 h-6 text-yellow-400" />
                  Third-Party Provider Disclaimer
                </h2>
                <div className="pl-9 space-y-3 text-foreground/80 leading-relaxed">
                  <p>
                    Our Service relies on third-party providers for essential functionality. We are{" "}
                    <strong>not responsible</strong> for:
                  </p>
                  <div className="space-y-4 mt-4">
                    <div className="p-4 bg-muted/30 rounded-xl">
                      <h4 className="font-medium text-foreground mb-2">Telephony Providers (Twilio/Exotel)</h4>
                      <p className="text-sm">
                        Service outages, call quality issues, dropped calls, or routing failures caused by telephony
                        provider downtime or technical issues.
                      </p>
                    </div>
                    <div className="p-4 bg-muted/30 rounded-xl">
                      <h4 className="font-medium text-foreground mb-2">WhatsApp/Meta</h4>
                      <p className="text-sm">
                        Message delivery failures, API outages, policy changes, or account restrictions imposed by
                        Meta/WhatsApp.
                      </p>
                    </div>
                    <div className="p-4 bg-muted/30 rounded-xl">
                      <h4 className="font-medium text-foreground mb-2">Payment Processing (Razorpay)</h4>
                      <p className="text-sm">
                        Payment failures, processing delays, or issues with payment methods caused by Razorpay or
                        banking systems.
                      </p>
                    </div>
                    <div className="p-4 bg-muted/30 rounded-xl">
                      <h4 className="font-medium text-foreground mb-2">Cloud Infrastructure</h4>
                      <p className="text-sm">
                        Outages or data issues caused by our cloud hosting providers (AWS, GCP, etc.).
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Professional Advice */}
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground flex items-center gap-3">
                  <AlertTriangle className="w-6 h-6 text-yellow-400" />
                  Not Professional Advice
                </h2>
                <div className="pl-9 space-y-3 text-foreground/80 leading-relaxed">
                  <p>
                    SalonAI VoiceEngine is a booking and communication tool. It does <strong>not</strong> provide and
                    should
                    <strong>not</strong> be relied upon for:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>Medical advice:</strong> For clinics, the AI only handles scheduling — it does not
                      diagnose, recommend treatments, or provide medical guidance
                    </li>
                    <li>
                      <strong>Legal advice:</strong> The AI cannot provide legal counsel or guidance on legal matters
                    </li>
                    <li>
                      <strong>Financial advice:</strong> The AI does not provide investment, tax, or financial planning
                      guidance
                    </li>
                    <li>
                      <strong>Emergency services:</strong> The AI is not designed for emergency response and should not
                      be used for urgent medical or safety situations
                    </li>
                  </ul>
                  <div className="mt-4 p-4 bg-red-500/10 rounded-xl border border-red-500/20">
                    <p className="text-sm text-red-400 flex items-start gap-2">
                      <AlertTriangle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                      <span>
                        <strong>For medical clinics:</strong> Ensure your staff handles all clinical inquiries. The AI
                        should only be configured to schedule appointments, not provide any health-related advice.
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Uptime */}
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground flex items-center gap-3">
                  <Server className="w-6 h-6 text-yellow-400" />
                  No Guarantee of Uptime
                </h2>
                <div className="pl-9 space-y-3 text-foreground/80 leading-relaxed">
                  <p>While we strive to maintain high availability:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      We do <strong>not guarantee 100% uptime</strong>
                    </li>
                    <li>Scheduled maintenance may cause temporary service interruptions</li>
                    <li>Unexpected technical issues may result in downtime</li>
                    <li>Features may be temporarily unavailable during updates</li>
                    <li>Third-party outages may affect service availability</li>
                  </ul>
                  <p className="mt-4">
                    We will make reasonable efforts to notify you of planned maintenance and minimize disruption. For
                    our service level commitments, please refer to your subscription plan terms.
                  </p>
                </div>
              </div>

              {/* Limitation of Liability */}
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground flex items-center gap-3">
                  <Scale className="w-6 h-6 text-yellow-400" />
                  Limitation of Liability
                </h2>
                <div className="pl-9 space-y-3 text-foreground/80 leading-relaxed">
                  <p>TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      SalonAI VoiceEngine shall not be liable for any indirect, incidental, special, consequential, or
                      punitive damages
                    </li>
                    <li>We shall not be liable for lost profits, lost revenue, lost data, or business interruption</li>
                    <li>
                      Our total liability for any claim shall not exceed the amount paid by you in the 12 months
                      preceding the claim
                    </li>
                    <li>
                      We are not liable for damages arising from your failure to maintain accurate business information
                      in the system
                    </li>
                    <li>
                      We are not liable for damages caused by unauthorized access to your account due to your failure to
                      protect credentials
                    </li>
                  </ul>
                  <p className="mt-4">
                    These limitations apply regardless of the theory of liability (contract, tort, negligence, strict
                    liability, or otherwise) and even if we have been advised of the possibility of such damages.
                  </p>
                </div>
              </div>

              {/* Indemnity */}
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground flex items-center gap-3">
                  <Shield className="w-6 h-6 text-yellow-400" />
                  Indemnification
                </h2>
                <div className="pl-9 space-y-3 text-foreground/80 leading-relaxed">
                  <p>
                    You agree to indemnify, defend, and hold harmless SalonAI VoiceEngine and its officers, directors,
                    employees, and agents from and against any claims, liabilities, damages, losses, and expenses
                    (including reasonable legal fees) arising from:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Your use of the Service</li>
                    <li>Your violation of these terms or any applicable law</li>
                    <li>Your violation of any third-party rights</li>
                    <li>Any content or information you provide to the Service</li>
                    <li>Any claims made by your customers arising from their interaction with your AI receptionist</li>
                  </ul>
                </div>
              </div>

              {/* Warranty Disclaimer */}
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground flex items-center gap-3">
                  <AlertTriangle className="w-6 h-6 text-yellow-400" />
                  Warranty Disclaimer
                </h2>
                <div className="pl-9 space-y-3 text-foreground/80 leading-relaxed">
                  <p>
                    THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR
                    IMPLIED, INCLUDING BUT NOT LIMITED TO:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Implied warranties of merchantability</li>
                    <li>Fitness for a particular purpose</li>
                    <li>Non-infringement</li>
                    <li>Accuracy or reliability of AI responses</li>
                    <li>Uninterrupted or error-free operation</li>
                    <li>Security of data transmission</li>
                  </ul>
                </div>
              </div>

              {/* Governing Law */}
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground flex items-center gap-3">
                  <Scale className="w-6 h-6 text-yellow-400" />
                  Governing Law
                </h2>
                <div className="pl-9 space-y-3 text-foreground/80 leading-relaxed">
                  <p>
                    This Disclaimer shall be governed by and construed in accordance with the laws of India. Any
                    disputes arising under this Disclaimer shall be subject to the exclusive jurisdiction of the courts
                    in Bangalore, Karnataka, India.
                  </p>
                </div>
              </div>

              {/* Contact Section */}
              <div className="mt-12 p-6 bg-yellow-500/5 rounded-2xl border border-yellow-500/20">
                <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Phone className="w-5 h-5 text-yellow-400" />
                  Questions About This Disclaimer
                </h2>
                <p className="text-foreground/80 mb-4">
                  If you have any questions about this Disclaimer, please contact us:
                </p>
                <div className="space-y-2 text-foreground/80">
                  <p className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-yellow-400" />
                    <a href="mailto:inesh2010nj@gmail.com" className="text-yellow-400 hover:underline">
                      inesh2010nj@gmail.com
                    </a>
                  </p>
                  <p className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-yellow-400" />
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
