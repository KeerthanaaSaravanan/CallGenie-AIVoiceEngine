"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  ChevronDown,
  Search,
  BookOpen,
  Settings,
  Phone,
  MessageSquare,
  CreditCard,
  Shield,
  HelpCircle,
  CheckCircle2,
  ExternalLink,
  Mail,
  Calendar,
} from "lucide-react"

const faqCategories = [
  {
    id: "setup",
    icon: Settings,
    name: "Setup & Onboarding",
    faqs: [
      {
        question: "How long does it take to set up CallGenie AI VoiceEngine?",
        answer:
          "Most businesses complete the setup in under 5 minutes. Our onboarding wizard guides you through entering your services, prices, staff, business hours, and tone preferences. Once done, your AI receptionist is immediately active.",
      },
      {
        question: "Do I need any technical knowledge to use CallGenie AI VoiceEngine?",
        answer:
          "Not at all. Our platform is designed for non-technical business owners. Everything is done through a simple, visual interface. If you can use WhatsApp, you can set up and manage your AI receptionist.",
      },
      {
        question: "Can I customize how the AI sounds and responds?",
        answer:
          "Yes! During onboarding, you'll answer 3 personality questions and choose a tone (professional, friendly, luxury, or casual). You can also add custom rules, FAQs, and specific phrases. The AI adapts to match your brand voice.",
      },
      {
        question: "What information do I need to provide during setup?",
        answer:
          "You'll need: your services and prices, service durations, staff names and availability, business hours and holidays, and any special booking rules. You can update all of this anytime after setup.",
      },
    ],
  },
  {
    id: "calls",
    icon: Phone,
    name: "Calls & Exotel",
    faqs: [
      {
        question: "How does the call integration work?",
        answer:
          "We use Exotel's enterprise-grade infrastructure to route your calls. Customers call your business number, and if you're busy or unavailable, the AI answers. You can set up forwarding rules, fallback numbers, and specific routing schedules.",
      },
      {
        question: "Can I keep my existing phone number?",
        answer:
          "Yes! You can port your existing number to Exotel or set up call forwarding from your current provider. We'll guide you through the process during setup.",
      },
      {
        question: "What happens if the AI can't handle a call?",
        answer:
          "The AI is trained to recognize when to escalate. If a customer explicitly requests a human, has a complaint, or asks something outside its training, it will politely offer to transfer the call or take a message for callback.",
      },
      {
        question: "Are calls recorded?",
        answer:
          "Yes, for quality assurance and training purposes. All recordings are stored securely and can be accessed from your Call Center dashboard. You can disable recording if required by local regulations.",
      },
    ],
  },
  {
    id: "whatsapp",
    icon: MessageSquare,
    name: "WhatsApp Integration",
    faqs: [
      {
        question: "How do I connect WhatsApp?",
        answer:
          "You can either connect your WhatsApp Business account via the Cloud API (recommended for existing business accounts) or use our system number for quick setup. Both options are fully automated.",
      },
      {
        question: "Can the AI send images and documents via WhatsApp?",
        answer:
          "Yes! The AI can send rich messages including service menus, price lists, location maps, and booking confirmations with all relevant details formatted beautifully.",
      },
      {
        question: "What if a customer calls and later texts on WhatsApp?",
        answer:
          "Our Smart Dual-Channel system syncs all conversations. If a customer calls about a haircut, then later texts on WhatsApp asking about the same booking, the AI remembers the entire context. No repeated questions needed.",
      },
      {
        question: "Is there a limit on WhatsApp messages?",
        answer:
          "Each plan includes a monthly message allowance. Starter: 1,000 messages, Growth: 3,000 messages, Scale: 10,000 messages. Additional messages can be purchased if needed.",
      },
    ],
  },
  {
    id: "billing",
    icon: CreditCard,
    name: "Billing & Razorpay",
    faqs: [
      {
        question: "How does the 15-day free trial work?",
        answer:
          "Start immediately with full access to all features. No credit card required. After 15 days, you'll be prompted to subscribe. If you don't, the AI pauses but your data is preserved for 30 days.",
      },
      {
        question: "What payment methods do you accept?",
        answer:
          "We use Razorpay for secure payments. Accepted methods include credit/debit cards, UPI, net banking, and digital wallets. All transactions use bank-level encryption.",
      },
      {
        question: "Can I change my plan later?",
        answer:
          "Yes! Upgrade anytime and pay the prorated difference. Downgrade at the end of your billing cycle. All changes are instant and your data is preserved.",
      },
      {
        question: "Is there a contract or commitment?",
        answer:
          "No long-term contracts. Pay monthly or yearly (save 17% with yearly). Cancel anytime with no cancellation fees. Your data is preserved for 30 days after cancellation.",
      },
    ],
  },
  {
    id: "security",
    icon: Shield,
    name: "Security & Data",
    faqs: [
      {
        question: "How is my data protected?",
        answer:
          "We use enterprise-grade encryption for all data in transit and at rest. Your business data is stored in secure, SOC 2 compliant data centers. We never share your data with third parties.",
      },
      {
        question: "Who can access my account?",
        answer:
          "Only users you explicitly authorize. We offer role-based access control so you can give staff limited access to specific features (e.g., view calendar but not billing).",
      },
      {
        question: "Are customer conversations private?",
        answer:
          "Yes. All call recordings and chat logs are encrypted and only accessible to authorized account users. We maintain detailed audit logs for security compliance.",
      },
      {
        question: "What happens to my data if I cancel?",
        answer:
          "Your data is preserved for 30 days after cancellation, during which you can reactivate and pick up where you left off. After 30 days, data is permanently deleted per our privacy policy.",
      },
    ],
  },
]

const gettingStartedSteps = [
  {
    step: 1,
    title: "Create Your Account",
    description: "Sign up with your email and verify your phone number via OTP.",
  },
  {
    step: 2,
    title: "Complete Onboarding",
    description: "Enter your services, prices, staff, hours, and customize your AI's tone.",
  },
  {
    step: 3,
    title: "Connect Your Channels",
    description: "Set up Exotel call routing and connect WhatsApp Business.",
  },
  {
    step: 4,
    title: "Test Your AI",
    description: "Make a test call and send a test WhatsApp message to see your AI in action.",
  },
  {
    step: 5,
    title: "Go Live",
    description: "Activate your AI receptionist and start accepting real bookings.",
  },
]

export default function ResourcesPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [openFaqs, setOpenFaqs] = useState<{ [key: string]: number | null }>({})
  const [activeCategory, setActiveCategory] = useState("setup")

  const toggleFaq = (categoryId: string, faqIndex: number) => {
    setOpenFaqs((prev) => ({
      ...prev,
      [categoryId]: prev[categoryId] === faqIndex ? null : faqIndex,
    }))
  }

  const filteredCategories = faqCategories
    .map((category) => ({
      ...category,
      faqs: category.faqs.filter(
        (faq) =>
          faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
          faq.answer.toLowerCase().includes(searchQuery.toLowerCase()),
      ),
    }))
    .filter((category) => category.faqs.length > 0)

  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-12 lg:pt-40 lg:pb-16 bg-ink relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
        </div>

        <div className="relative container mx-auto px-4 lg:px-8 text-center">
          <span className="text-sm font-medium text-primary mb-4 block">Resources</span>
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">Help Center & FAQ</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Everything you need to know about CallGenie AI VoiceEngine. Can't find what you're looking for? Contact our
            support team.
          </p>

          {/* Search */}
          <div className="max-w-xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search for answers..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-2xl bg-background border border-border focus:border-primary focus:outline-none text-foreground placeholder:text-muted-foreground"
            />
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-12 bg-background border-b border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link
              href="#getting-started"
              className="flex items-center gap-3 p-4 rounded-2xl bg-ink/50 border border-border hover:border-primary/50 transition-colors"
            >
              <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-medium text-foreground">Getting Started</h3>
                <p className="text-sm text-muted-foreground">Quick setup guide</p>
              </div>
            </Link>
            <Link
              href="#faq"
              className="flex items-center gap-3 p-4 rounded-2xl bg-ink/50 border border-border hover:border-primary/50 transition-colors"
            >
              <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                <HelpCircle className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-medium text-foreground">FAQ</h3>
                <p className="text-sm text-muted-foreground">Common questions</p>
              </div>
            </Link>
            <Link
              href="/contact"
              className="flex items-center gap-3 p-4 rounded-2xl bg-ink/50 border border-border hover:border-primary/50 transition-colors"
            >
              <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-medium text-foreground">Contact Support</h3>
                <p className="text-sm text-muted-foreground">Get help from our team</p>
              </div>
            </Link>
            <Link
              href="/contact"
              className="flex items-center gap-3 p-4 rounded-2xl bg-ink/50 border border-border hover:border-primary/50 transition-colors"
            >
              <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                <Calendar className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-medium text-foreground">Book Onboarding</h3>
                <p className="text-sm text-muted-foreground">1:1 setup assistance</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Getting Started */}
      <section id="getting-started" className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Getting Started Checklist</h2>
              <p className="text-muted-foreground">Follow these steps to get your AI receptionist up and running</p>
            </div>

            <div className="space-y-4">
              {gettingStartedSteps.map((item, index) => (
                <div key={item.step} className="flex items-start gap-4 p-6 rounded-2xl bg-ink/50 border border-border">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                    <span className="text-sm font-bold text-primary">{item.step}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </div>
                  <CheckCircle2 className="w-5 h-5 text-muted-foreground/30 shrink-0" />
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <Button asChild className="bg-primary hover:bg-primary/90 text-ink">
                <Link href="/contact">Start Your Free Trial</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-ink/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
            <p className="text-muted-foreground">Find answers to common questions about CallGenie AI VoiceEngine</p>
          </div>

          <div className="max-w-5xl mx-auto">
            {/* Category Tabs */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {faqCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeCategory === category.id
                      ? "bg-primary text-ink"
                      : "bg-ink/50 text-muted-foreground hover:text-foreground border border-border"
                  }`}
                >
                  <category.icon className="w-4 h-4" />
                  {category.name}
                </button>
              ))}
            </div>

            {/* FAQ Items */}
            <div className="space-y-4">
              {(searchQuery ? filteredCategories : faqCategories.filter((c) => c.id === activeCategory)).map(
                (category) => (
                  <div key={category.id}>
                    {searchQuery && (
                      <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                        <category.icon className="w-5 h-5 text-primary" />
                        {category.name}
                      </h3>
                    )}
                    <div className="space-y-3">
                      {category.faqs.map((faq, faqIndex) => (
                        <div key={faqIndex} className="bg-background rounded-2xl border border-border overflow-hidden">
                          <button
                            onClick={() => toggleFaq(category.id, faqIndex)}
                            className="w-full flex items-center justify-between p-5 text-left"
                          >
                            <span className="font-medium text-foreground pr-4">{faq.question}</span>
                            <ChevronDown
                              className={`w-5 h-5 text-muted-foreground shrink-0 transition-transform ${
                                openFaqs[category.id] === faqIndex ? "rotate-180" : ""
                              }`}
                            />
                          </button>
                          {openFaqs[category.id] === faqIndex && (
                            <div className="px-5 pb-5">
                              <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                ),
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Support */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">Still Need Help?</h2>
            <p className="text-muted-foreground mb-8">
              Our support team is here to help you succeed. Reach out and we'll get back to you within 24 hours.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-ink/50 rounded-2xl p-6 border border-border">
                <Mail className="w-8 h-8 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-foreground mb-2">Email Support</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Send us a message and we'll respond within 24 hours
                </p>
                <a href="mailto:inesh2010nj@gmail.com" className="text-primary hover:underline">
                  inesh2010nj@gmail.com
                </a>
              </div>

              <div className="bg-ink/50 rounded-2xl p-6 border border-border">
                <Calendar className="w-8 h-8 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-foreground mb-2">Book Onboarding Call</h3>
                <p className="text-muted-foreground text-sm mb-4">Get 1:1 setup assistance from our onboarding team</p>
                <Button
                  asChild
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary/10 bg-transparent"
                >
                  <Link href="/contact">
                    Schedule Call
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
