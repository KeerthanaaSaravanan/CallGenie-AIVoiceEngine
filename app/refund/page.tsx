import type { Metadata } from "next"
import { CreditCard, CheckCircle, XCircle, Clock, AlertCircle, Phone, Mail, RefreshCcw } from "lucide-react"

export const metadata: Metadata = {
  title: "Refund Policy | SalonAI VoiceEngine",
  description: "Understand our refund and cancellation policy for SalonAI VoiceEngine subscriptions.",
}

export default function RefundPage() {
  return (
    <main className="min-h-screen bg-ink pt-24 pb-16">
      {/* Hero */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium mb-6">
              <CreditCard className="w-4 h-4" />
              Billing Policy
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">Refund & Return Policy</h1>
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
                  Thank you for choosing SalonAI VoiceEngine. This Refund & Return Policy explains our policies
                  regarding subscription refunds, cancellations, and billing disputes. As a Software-as-a-Service (SaaS)
                  product, we do not have physical goods to return.
                </p>
              </div>

              {/* General Policy */}
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground flex items-center gap-3">
                  <RefreshCcw className="w-6 h-6 text-accent" />
                  General Policy
                </h2>
                <div className="pl-9 space-y-3 text-foreground/80 leading-relaxed">
                  <p>
                    SalonAI VoiceEngine is a subscription-based SaaS platform. Our refund policy is designed to be fair
                    to both our customers and our business:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      We offer a <strong>15-day free trial</strong> so you can evaluate the service before committing
                    </li>
                    <li>No credit card is required during the trial period</li>
                    <li>Subscriptions can be cancelled at any time from your dashboard</li>
                    <li>All payments are processed securely through Razorpay</li>
                  </ul>
                </div>
              </div>

              {/* No Refund Cases */}
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground flex items-center gap-3">
                  <XCircle className="w-6 h-6 text-red-400" />
                  When Refunds Are NOT Available
                </h2>
                <div className="pl-9 space-y-3 text-foreground/80 leading-relaxed">
                  <p>Refunds are generally not provided in the following cases:</p>
                  <div className="space-y-3 mt-4">
                    <div className="flex items-start gap-3 p-4 bg-red-500/5 rounded-xl border border-red-500/20">
                      <XCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-medium text-foreground">Used Subscription Period</h4>
                        <p className="text-sm mt-1">
                          No refunds for days or periods already consumed in the billing cycle.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-4 bg-red-500/5 rounded-xl border border-red-500/20">
                      <XCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-medium text-foreground">Change of Mind</h4>
                        <p className="text-sm mt-1">
                          If you decide the service is not right for you after subscribing (this is why we offer a free
                          trial).
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-4 bg-red-500/5 rounded-xl border border-red-500/20">
                      <XCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-medium text-foreground">Unused Features</h4>
                        <p className="text-sm mt-1">If you do not use all features included in your plan.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-4 bg-red-500/5 rounded-xl border border-red-500/20">
                      <XCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-medium text-foreground">Violation of Terms</h4>
                        <p className="text-sm mt-1">
                          If your account was suspended or terminated due to Terms of Service violations.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Refund Eligible Cases */}
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-green-400" />
                  When Refunds ARE Available
                </h2>
                <div className="pl-9 space-y-3 text-foreground/80 leading-relaxed">
                  <p>We will issue refunds in the following situations:</p>
                  <div className="space-y-3 mt-4">
                    <div className="flex items-start gap-3 p-4 bg-green-500/5 rounded-xl border border-green-500/20">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-medium text-foreground">Duplicate Payments</h4>
                        <p className="text-sm mt-1">
                          If you were charged twice for the same billing period due to a technical error.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-4 bg-green-500/5 rounded-xl border border-green-500/20">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-medium text-foreground">Incorrect Charges</h4>
                        <p className="text-sm mt-1">If you were charged an incorrect amount or for the wrong plan.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-4 bg-green-500/5 rounded-xl border border-green-500/20">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-medium text-foreground">Major Service Outage</h4>
                        <p className="text-sm mt-1">
                          If our service was completely unavailable for more than 24 continuous hours due to issues on
                          our end (not third-party provider outages).
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-4 bg-green-500/5 rounded-xl border border-green-500/20">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-medium text-foreground">Auto-Renewal Without Notice</h4>
                        <p className="text-sm mt-1">
                          If you were charged for renewal and we failed to send the required reminder notification
                          (within 48 hours of charge).
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* How to Request */}
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground flex items-center gap-3">
                  <Mail className="w-6 h-6 text-accent" />
                  How to Request a Refund
                </h2>
                <div className="pl-9 space-y-3 text-foreground/80 leading-relaxed">
                  <p>To request a refund, follow these steps:</p>
                  <ol className="list-decimal pl-6 space-y-3 mt-4">
                    <li>
                      <strong>Email us</strong> at{" "}
                      <a href="mailto:inesh2010nj@gmail.com" className="text-accent hover:underline">
                        inesh2010nj@gmail.com
                      </a>{" "}
                      with the subject line "Refund Request"
                    </li>
                    <li>
                      <strong>Include the following information:</strong>
                      <ul className="list-disc pl-6 mt-2 space-y-1">
                        <li>Your registered email address</li>
                        <li>Business name</li>
                        <li>Transaction ID or payment reference</li>
                        <li>Date of charge</li>
                        <li>Amount charged</li>
                        <li>Reason for refund request</li>
                      </ul>
                    </li>
                    <li>
                      <strong>Wait for our response</strong> — We will review your request and respond within 3 business
                      days
                    </li>
                    <li>
                      <strong>Verification</strong> — We may ask for additional information to verify your identity
                    </li>
                  </ol>
                </div>
              </div>

              {/* Processing Time */}
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground flex items-center gap-3">
                  <Clock className="w-6 h-6 text-accent" />
                  Processing Time
                </h2>
                <div className="pl-9 space-y-3 text-foreground/80 leading-relaxed">
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm mt-4">
                      <thead>
                        <tr className="border-b border-border/30">
                          <th className="text-left py-3 px-4 font-medium">Stage</th>
                          <th className="text-left py-3 px-4 font-medium">Timeline</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-border/20">
                        <tr>
                          <td className="py-3 px-4">Initial Response</td>
                          <td className="py-3 px-4">Within 3 business days</td>
                        </tr>
                        <tr>
                          <td className="py-3 px-4">Review & Decision</td>
                          <td className="py-3 px-4">5-7 business days</td>
                        </tr>
                        <tr>
                          <td className="py-3 px-4">Refund Processing</td>
                          <td className="py-3 px-4">5-10 business days (after approval)</td>
                        </tr>
                        <tr>
                          <td className="py-3 px-4">Bank/Card Credit</td>
                          <td className="py-3 px-4">Depends on your bank (typically 3-7 days)</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="mt-4">
                    Refunds will be credited to the original payment method used for the transaction.
                  </p>
                </div>
              </div>

              {/* Razorpay Disputes */}
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground flex items-center gap-3">
                  <AlertCircle className="w-6 h-6 text-accent" />
                  Razorpay Dispute Handling
                </h2>
                <div className="pl-9 space-y-3 text-foreground/80 leading-relaxed">
                  <p>If you file a payment dispute (chargeback) with your bank or card issuer:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Please contact us first — we aim to resolve issues faster than the dispute process</li>
                    <li>Disputes may result in immediate account suspension pending resolution</li>
                    <li>We will provide transaction evidence to Razorpay for dispute review</li>
                    <li>Fraudulent dispute claims may result in permanent account termination</li>
                    <li>
                      Dispute fees charged by Razorpay may be passed on to the customer if the dispute is found invalid
                    </li>
                  </ul>
                  <div className="mt-4 p-4 bg-accent/10 rounded-xl border border-accent/20">
                    <p className="text-sm text-accent flex items-start gap-2">
                      <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                      <span>
                        We strongly encourage you to contact us directly before filing a dispute. Most issues can be
                        resolved within 24-48 hours when you reach out to our support team.
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Cancellation */}
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground flex items-center gap-3">
                  <XCircle className="w-6 h-6 text-accent" />
                  Subscription Cancellation
                </h2>
                <div className="pl-9 space-y-3 text-foreground/80 leading-relaxed">
                  <p>To cancel your subscription:</p>
                  <ol className="list-decimal pl-6 space-y-2">
                    <li>Log in to your SalonAI VoiceEngine dashboard</li>
                    <li>Navigate to Settings → Billing</li>
                    <li>Click "Cancel Subscription"</li>
                    <li>Confirm cancellation</li>
                  </ol>
                  <p className="mt-4">
                    <strong>What happens after cancellation:</strong>
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Your subscription remains active until the end of the current billing period</li>
                    <li>You will not be charged again</li>
                    <li>After the period ends, your AI receptionist will be deactivated</li>
                    <li>Your data is retained for 30 days in case you wish to reactivate</li>
                    <li>After 30 days, data is permanently deleted unless you request otherwise</li>
                  </ul>
                </div>
              </div>

              {/* Contact Section */}
              <div className="mt-12 p-6 bg-accent/5 rounded-2xl border border-accent/20">
                <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Phone className="w-5 h-5 text-accent" />
                  Billing Support
                </h2>
                <p className="text-foreground/80 mb-4">
                  For refund requests or billing questions, contact our support team:
                </p>
                <div className="space-y-2 text-foreground/80">
                  <p className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-accent" />
                    <a href="mailto:inesh2010nj@gmail.com" className="text-accent hover:underline">
                      inesh2010nj@gmail.com
                    </a>
                  </p>
                  <p className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-accent" />
                    <span>+91-8939744434</span>
                  </p>
                  <p className="text-sm mt-3 text-muted-foreground">
                    Support hours: Monday - Friday, 9:00 AM - 6:00 PM IST
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
