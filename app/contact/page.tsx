"use client"

import type React from "react"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Mail, Clock, CheckCircle2, Sparkles, Calendar, MessageSquare, ArrowRight } from "lucide-react"

const businessTypes = [
  "Salon / Hair Studio",
  "Spa / Wellness Center",
  "Skin Clinic",
  "Dental Clinic",
  "Cosmetic Clinic",
  "Fitness Studio / Gym",
  "Photography Studio",
  "Other",
]

const staffSizes = ["Just me (solo)", "2-5 staff", "6-10 staff", "11-20 staff", "20+ staff"]

const currentSystems = [
  "No booking system (phone/paper)",
  "Google Calendar",
  "Calendly / Cal.com",
  "Fresha / Vagaro",
  "Custom software",
  "Other",
]

const demoSlots = [
  { day: "Today", slots: ["2:00 PM", "4:00 PM", "6:00 PM"] },
  { day: "Tomorrow", slots: ["10:00 AM", "12:00 PM", "2:00 PM", "4:00 PM"] },
  { day: "Day After", slots: ["10:00 AM", "11:00 AM", "2:00 PM", "3:00 PM", "5:00 PM"] },
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    businessName: "",
    email: "",
    phone: "",
    businessType: "",
    staffSize: "",
    currentSystem: "",
    message: "",
  })
  const [selectedSlot, setSelectedSlot] = useState<{ day: string; time: string } | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <main className="min-h-screen">
        <Navigation />
        <section className="pt-32 pb-20 lg:pt-40 lg:pb-32 bg-ink min-h-screen flex items-center">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-2xl mx-auto text-center">
              <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-8">
                <CheckCircle2 className="w-10 h-10 text-primary" />
              </div>
              <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Thank You! We'll Be in Touch Soon.
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                {selectedSlot
                  ? `Your demo is scheduled for ${selectedSlot.day} at ${selectedSlot.time}. Check your email for confirmation and meeting details.`
                  : "We've received your message and will get back to you within 24 hours."}
              </p>
              <div className="bg-background/5 rounded-2xl p-6 border border-border mb-8">
                <h3 className="font-semibold text-foreground mb-4">While you wait, explore:</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  <a
                    href="/features"
                    className="flex items-center gap-3 p-4 rounded-xl bg-ink/50 border border-border hover:border-primary/50 transition-colors"
                  >
                    <Sparkles className="w-5 h-5 text-primary" />
                    <span className="text-foreground">See All Features</span>
                  </a>
                  <a
                    href="/dashboard-tour"
                    className="flex items-center gap-3 p-4 rounded-xl bg-ink/50 border border-border hover:border-primary/50 transition-colors"
                  >
                    <Calendar className="w-5 h-5 text-primary" />
                    <span className="text-foreground">Dashboard Tour</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    )
  }

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
          <span className="text-sm font-medium text-primary mb-4 block">Get Started</span>
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Prefer a Human to Show You the AI?
            <span className="text-primary"> Book a 1:1 Demo.</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See SalonAI VoiceEngine in action with a personalized walkthrough. Our team will show you exactly how it
            works for your type of business.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 lg:py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div>
              <div className="bg-ink/50 rounded-3xl p-8 border border-border">
                <h2 className="text-2xl font-bold text-foreground mb-2">Tell Us About Your Business</h2>
                <p className="text-muted-foreground mb-8">
                  Fill out the form below and we'll schedule a personalized demo.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:outline-none text-foreground placeholder:text-muted-foreground"
                      placeholder="Enter your full name"
                    />
                  </div>

                  {/* Business Name */}
                  <div>
                    <label htmlFor="businessName" className="block text-sm font-medium text-foreground mb-2">
                      Business Name *
                    </label>
                    <input
                      type="text"
                      id="businessName"
                      name="businessName"
                      required
                      value={formData.businessName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:outline-none text-foreground placeholder:text-muted-foreground"
                      placeholder="Your salon, spa, or clinic name"
                    />
                  </div>

                  {/* Email & Phone */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:outline-none text-foreground placeholder:text-muted-foreground"
                        placeholder="you@business.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                        Phone *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:outline-none text-foreground placeholder:text-muted-foreground"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                  </div>

                  {/* Business Type */}
                  <div>
                    <label htmlFor="businessType" className="block text-sm font-medium text-foreground mb-2">
                      Business Type *
                    </label>
                    <select
                      id="businessType"
                      name="businessType"
                      required
                      value={formData.businessType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:outline-none text-foreground"
                    >
                      <option value="">Select your business type</option>
                      {businessTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Staff Size */}
                  <div>
                    <label htmlFor="staffSize" className="block text-sm font-medium text-foreground mb-2">
                      Team Size *
                    </label>
                    <select
                      id="staffSize"
                      name="staffSize"
                      required
                      value={formData.staffSize}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:outline-none text-foreground"
                    >
                      <option value="">Select your team size</option>
                      {staffSizes.map((size) => (
                        <option key={size} value={size}>
                          {size}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Current System */}
                  <div>
                    <label htmlFor="currentSystem" className="block text-sm font-medium text-foreground mb-2">
                      Current Booking System
                    </label>
                    <select
                      id="currentSystem"
                      name="currentSystem"
                      value={formData.currentSystem}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:outline-none text-foreground"
                    >
                      <option value="">Select (optional)</option>
                      {currentSystems.map((system) => (
                        <option key={system} value={system}>
                          {system}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Anything else we should know?
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:outline-none text-foreground placeholder:text-muted-foreground resize-none"
                      placeholder="Tell us about your specific needs, challenges, or questions..."
                    />
                  </div>

                  {/* Submit */}
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary hover:bg-primary/90 text-ink py-6 text-lg"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="w-5 h-5 border-2 border-ink/30 border-t-ink rounded-full animate-spin" />
                        Submitting...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        Book Your Demo
                        <ArrowRight className="w-5 h-5" />
                      </span>
                    )}
                  </Button>
                </form>
              </div>
            </div>

            {/* Demo Scheduler & Info */}
            <div className="space-y-8">
              {/* Demo Slot Picker */}
              <div className="bg-ink/50 rounded-3xl p-8 border border-border">
                <h3 className="text-xl font-bold text-foreground mb-2">Pick a Demo Time</h3>
                <p className="text-muted-foreground text-sm mb-6">
                  Select a slot that works for you. 30-minute personalized demo.
                </p>

                <div className="space-y-6">
                  {demoSlots.map((day) => (
                    <div key={day.day}>
                      <h4 className="text-sm font-medium text-muted-foreground mb-3">{day.day}</h4>
                      <div className="flex flex-wrap gap-2">
                        {day.slots.map((time) => {
                          const isSelected = selectedSlot?.day === day.day && selectedSlot?.time === time
                          return (
                            <button
                              key={`${day.day}-${time}`}
                              type="button"
                              onClick={() => setSelectedSlot({ day: day.day, time })}
                              className={`px-4 py-2 rounded-xl text-sm font-medium transition-colors ${
                                isSelected
                                  ? "bg-primary text-ink"
                                  : "bg-background border border-border text-foreground hover:border-primary/50"
                              }`}
                            >
                              {time}
                            </button>
                          )
                        })}
                      </div>
                    </div>
                  ))}
                </div>

                {selectedSlot && (
                  <div className="mt-6 p-4 rounded-xl bg-primary/10 border border-primary/30">
                    <p className="text-sm text-foreground">
                      <span className="font-medium">Selected:</span> {selectedSlot.day} at {selectedSlot.time}
                    </p>
                  </div>
                )}
              </div>

              {/* What to Expect */}
              <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl p-8 border border-primary/20">
                <h3 className="text-xl font-bold text-foreground mb-6">What to Expect in Your Demo</h3>
                <ul className="space-y-4">
                  {[
                    "Live walkthrough of AI call handling",
                    "WhatsApp integration demonstration",
                    "Dynamic Slot Optimizer in action",
                    "AI Memory Twin customization preview",
                    "Q&A tailored to your business",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact Info */}
              <div className="bg-ink/50 rounded-3xl p-8 border border-border">
                <h3 className="text-xl font-bold text-foreground mb-6">Other Ways to Reach Us</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <a href="mailto:hello@salonai.in" className="text-foreground hover:text-primary">
                        hello@salonai.in
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                      <MessageSquare className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">WhatsApp</p>
                      <a href="https://wa.me/919876543210" className="text-foreground hover:text-primary">
                        +91 98765 43210
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                      <Clock className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Support Hours</p>
                      <p className="text-foreground">Mon-Sat, 9 AM - 7 PM IST</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-ink">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <p className="text-muted-foreground mb-2">Want to skip the demo and dive right in?</p>
          <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-6">Start Your 15-Day Free Trial Now</h2>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-ink">
            <a href="/pricing">
              View Plans & Start Free
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  )
}
