"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Check, X, ChevronDown, Shield, CreditCard, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const plans = [
  {
    name: "Starter",
    description: "For solo salons & clinics",
    monthlyPrice: 1499,
    yearlyPrice: 14990,
    popular: false,
    features: [
      { name: "1 staff member", included: true },
      { name: "500 call minutes/month", included: true },
      { name: "1,000 WhatsApp messages/month", included: true },
      { name: "AI Memory Twin", included: true },
      { name: "Dynamic Slot Optimizer", included: true },
      { name: "Call Center View", included: true },
      { name: "WhatsApp Center View", included: true },
      { name: "Basic Analytics", included: true },
      { name: "Email Support", included: true },
      { name: "5 Custom Rules", included: true },
      { name: "Advanced Analytics", included: false },
      { name: "Priority Support", included: false },
    ],
  },
  {
    name: "Growth",
    description: "For 2-5 staff teams",
    monthlyPrice: 2999,
    yearlyPrice: 29990,
    popular: true,
    features: [
      { name: "Up to 5 staff members", included: true },
      { name: "1,500 call minutes/month", included: true },
      { name: "3,000 WhatsApp messages/month", included: true },
      { name: "AI Memory Twin", included: true },
      { name: "Dynamic Slot Optimizer", included: true },
      { name: "Call Center View", included: true },
      { name: "WhatsApp Center View", included: true },
      { name: "Advanced Analytics", included: true },
      { name: "Priority Support", included: true },
      { name: "Unlimited Custom Rules", included: true },
      { name: "Multi-staff Calendar", included: true },
      { name: "Custom Integrations", included: false },
    ],
  },
  {
    name: "Scale",
    description: "For multi-branch locations",
    monthlyPrice: 5999,
    yearlyPrice: 59990,
    popular: false,
    features: [
      { name: "Unlimited staff", included: true },
      { name: "5,000 call minutes/month", included: true },
      { name: "10,000 WhatsApp messages/month", included: true },
      { name: "AI Memory Twin", included: true },
      { name: "Dynamic Slot Optimizer", included: true },
      { name: "Call Center View", included: true },
      { name: "WhatsApp Center View", included: true },
      { name: "Enterprise Analytics", included: true },
      { name: "Dedicated Account Manager", included: true },
      { name: "Unlimited Custom Rules", included: true },
      { name: "Multi-branch Support", included: true },
      { name: "Custom Integrations & API", included: true },
    ],
  },
]

const faqs = [
  {
    question: "What happens after my 15-day trial ends?",
    answer:
      "After your trial ends, the AI will pause and calls will be routed to your fallback number or voicemail. WhatsApp will show a message asking customers to contact you directly. Your calendar becomes read-only. Simply subscribe to reactivate everything instantly.",
  },
  {
    question: "Can I cancel anytime?",
    answer:
      "Yes, you can cancel your subscription anytime. There are no long-term contracts or cancellation fees. Your data will be preserved for 30 days after cancellation in case you want to reactivate.",
  },
  {
    question: "Do I need my own Twilio or WhatsApp account?",
    answer:
      "We handle the Twilio integration for you — just connect your existing number or get a new one. For WhatsApp, you can either connect your WhatsApp Business Cloud API or use our system number for quick setup.",
  },
  {
    question: "Is there any setup fee?",
    answer:
      "No, there are no setup fees, hidden charges, or extra costs. The pricing you see is what you pay. All features including AI Memory Twin, Slot Optimizer, and integrations are included in every plan.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major payment methods through Razorpay including credit/debit cards, UPI, net banking, and wallets. All transactions are secured with bank-level encryption.",
  },
  {
    question: "Can I upgrade or downgrade my plan?",
    answer:
      "Yes, you can change your plan anytime. Upgrades are instant and you'll be charged the prorated difference. Downgrades take effect at the start of your next billing cycle.",
  },
]

export default function PricingPage() {
  const [isYearly, setIsYearly] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-24 bg-ink relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
        </div>

        <div className="relative container mx-auto px-4 lg:px-8 text-center">
          <span className="text-sm font-medium text-primary mb-4 block">Pricing</span>
          <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
            Simple Pricing. <span className="text-primary">15 Days Free.</span>
          </h1>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Start your free trial today. No credit card required. All AI features included from day one.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4 mb-12">
            <span className={`text-sm font-medium ${!isYearly ? "text-foreground" : "text-muted-foreground"}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className={`relative w-14 h-7 rounded-full transition-colors ${isYearly ? "bg-primary" : "bg-muted"}`}
            >
              <span
                className={`absolute top-1 w-5 h-5 bg-foreground rounded-full transition-transform ${
                  isYearly ? "translate-x-8" : "translate-x-1"
                }`}
              />
            </button>
            <span className={`text-sm font-medium ${isYearly ? "text-foreground" : "text-muted-foreground"}`}>
              Yearly
            </span>
            {isYearly && (
              <span className="text-xs font-semibold text-gold bg-gold/10 px-2 py-1 rounded-full">Save 17%</span>
            )}
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 bg-background relative -mt-10">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <div
                key={plan.name}
                className={`relative rounded-3xl p-8 ${
                  plan.popular
                    ? "bg-gradient-to-b from-primary/20 to-ink border-2 border-primary"
                    : "bg-ink/50 border border-border"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-primary text-ink text-sm font-semibold px-4 py-1 rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                  <p className="text-muted-foreground text-sm">{plan.description}</p>
                </div>

                <div className="text-center mb-8">
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-2xl text-muted-foreground">₹</span>
                    <span className="text-5xl font-bold text-foreground">
                      {isYearly ? Math.round(plan.yearlyPrice / 12) : plan.monthlyPrice}
                    </span>
                    <span className="text-muted-foreground">/mo</span>
                  </div>
                  {isYearly && (
                    <p className="text-sm text-muted-foreground mt-2">
                      ₹{plan.yearlyPrice.toLocaleString()} billed yearly
                    </p>
                  )}
                </div>

                <Button
                  asChild
                  className={`w-full mb-8 ${
                    plan.popular
                      ? "bg-primary hover:bg-primary/90 text-ink"
                      : "bg-foreground/10 hover:bg-foreground/20 text-foreground"
                  }`}
                >
                  <Link href="/contact">Start 15-Day Free Trial</Link>
                </Button>

                <ul className="space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      {feature.included ? (
                        <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      ) : (
                        <X className="w-5 h-5 text-muted-foreground/50 shrink-0 mt-0.5" />
                      )}
                      <span className={`text-sm ${feature.included ? "text-foreground" : "text-muted-foreground/50"}`}>
                        {feature.name}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap items-center justify-center gap-8 mt-16">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Shield className="w-5 h-5 text-primary" />
              <span className="text-sm">Secure Payments</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <CreditCard className="w-5 h-5 text-primary" />
              <span className="text-sm">Razorpay Powered</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Zap className="w-5 h-5 text-primary" />
              <span className="text-sm">Instant Activation</span>
            </div>
          </div>
        </div>
      </section>

      {/* Trial Behavior Section */}
      <section className="py-20 bg-ink">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                What Happens During & After Your Trial
              </h2>
              <p className="text-muted-foreground">Full transparency on how your trial works</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* During Trial */}
              <div className="bg-gradient-to-br from-primary/10 to-transparent rounded-3xl p-8 border border-primary/30">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-primary/20 flex items-center justify-center">
                    <Zap className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">During Trial</h3>
                    <span className="text-sm text-primary">15 Days Free</span>
                  </div>
                </div>
                <ul className="space-y-4">
                  {[
                    "AI Receptionist ON — answering all calls & WhatsApp",
                    "Unlimited bookings and schedule management",
                    "Full access to AI Memory Twin editor",
                    "Dynamic Slot Optimizer active",
                    "Complete analytics dashboard",
                    "All integrations enabled",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-foreground text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* After Trial */}
              <div className="bg-muted/30 rounded-3xl p-8 border border-border">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-muted flex items-center justify-center">
                    <X className="w-6 h-6 text-muted-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">After Trial (No Subscription)</h3>
                    <span className="text-sm text-muted-foreground">Paused State</span>
                  </div>
                </div>
                <ul className="space-y-4">
                  {[
                    "AI Receptionist OFF — calls go to fallback/voicemail",
                    "WhatsApp shows 'Contact business directly' message",
                    "Calendar becomes read-only",
                    "Existing data preserved for 30 days",
                    "One-click reactivation when you subscribe",
                    "No data loss — pick up right where you left off",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full border-2 border-muted-foreground/50 shrink-0 mt-0.5" />
                      <span className="text-muted-foreground text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild className="w-full mt-6 bg-primary hover:bg-primary/90 text-ink">
                  <Link href="/contact">Subscribe to Reactivate AI</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
              <p className="text-muted-foreground">Everything you need to know about pricing and billing</p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-ink/50 rounded-2xl border border-border overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full flex items-center justify-between p-6 text-left"
                  >
                    <span className="font-medium text-foreground pr-4">{faq.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-muted-foreground shrink-0 transition-transform ${
                        openFaq === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openFaq === index && (
                    <div className="px-6 pb-6">
                      <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-ink">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Ready to Get Started?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join hundreds of salons, spas, and clinics who never miss a call anymore.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-ink">
              <Link href="/contact">Start 15-Day Free Trial</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-foreground/20 text-foreground hover:bg-foreground/10 bg-transparent"
            >
              <Link href="/contact">Book Live Demo</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
