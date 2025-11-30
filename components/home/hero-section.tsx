"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Phone, MessageCircle, Calendar, Play, Check, Sparkles, Zap } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen bg-ink overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-ink-light/50 via-ink to-ink" />
      </div>

      <div className="relative container mx-auto px-4 lg:px-8 pt-32 pb-20 lg:pt-40 lg:pb-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-dark mb-8">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm text-primary font-medium">24/7 AI Receptionist</span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-gold/20 text-gold">15-Day Free Trial</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6 text-balance">
              Your 24/7 AI Receptionist for{" "}
              <span className="text-transparent bg-clip-text gradient-primary">Calls & WhatsApp</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0 text-pretty">
              Let AI answer every call, chat on WhatsApp, book appointments, and optimize your schedule — perfectly
              tailored to your business.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button size="lg" className="gradient-primary text-ink font-semibold text-base px-8" asChild>
                <Link href="/signup">Start 15-Day Free Trial</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-border/50 text-foreground hover:bg-secondary/20 gap-2 bg-transparent"
                asChild
              >
                <Link href="/demo">
                  <Play className="w-4 h-4" />
                  Book Live Demo
                </Link>
              </Button>
            </div>

            {/* Trust Markers */}
            <div className="flex flex-wrap items-center gap-4 justify-center lg:justify-start text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-primary" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-primary" />
                <span>Razorpay-powered billing</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-primary" />
                <span>Built for salons, spas & clinics</span>
              </div>
            </div>
          </div>

          {/* Right Column - Dashboard Preview */}
          <div className="relative">
            <div className="relative glass-dark rounded-3xl p-4 lg:p-6 glow-primary animate-float">
              {/* Dashboard Mock */}
              <div className="rounded-2xl bg-ink-light overflow-hidden">
                {/* Header */}
                <div className="flex items-center justify-between p-4 border-b border-border/30">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-destructive" />
                    <div className="w-3 h-3 rounded-full bg-gold" />
                    <div className="w-3 h-3 rounded-full bg-primary" />
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                    <span className="text-xs text-primary font-medium">AI Active</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 lg:p-6 grid grid-cols-2 gap-4">
                  {/* Call Panel */}
                  <div className="glass-dark rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-8 h-8 rounded-full gradient-primary flex items-center justify-center">
                        <Phone className="w-4 h-4 text-ink" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">Incoming Call</p>
                        <p className="text-sm font-medium text-foreground">Ayushi Sharma</p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                        <span className="text-xs text-primary">AI is answering...</span>
                      </div>
                      <div className="h-8 bg-primary/10 rounded-lg flex items-center px-3">
                        <div className="flex gap-0.5">
                          {[...Array(20)].map((_, i) => (
                            <div
                              key={i}
                              className="w-1 bg-primary rounded-full animate-pulse"
                              style={{
                                height: `${Math.random() * 20 + 8}px`,
                                animationDelay: `${i * 0.05}s`,
                              }}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* WhatsApp Panel */}
                  <div className="glass-dark rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-8 h-8 rounded-full bg-[#25D366] flex items-center justify-center">
                        <MessageCircle className="w-4 h-4 text-ink" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">WhatsApp</p>
                        <p className="text-sm font-medium text-foreground">Priya Kapoor</p>
                      </div>
                    </div>
                    <div className="space-y-2 text-xs">
                      <div className="bg-secondary/30 rounded-lg rounded-tl-none p-2 text-muted-foreground">
                        Can I book a facial this Thursday after 5?
                      </div>
                      <div className="bg-primary/20 rounded-lg rounded-tr-none p-2 text-primary ml-4">
                        {"Hi Priya! I have 5:30 PM or 6:00 PM available. Which works for you?"}
                      </div>
                    </div>
                  </div>

                  {/* Calendar Strip */}
                  <div className="col-span-2 glass-dark rounded-xl p-4">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-primary" />
                        <span className="text-sm font-medium text-foreground">Today&apos;s Schedule</span>
                      </div>
                      <span className="text-xs px-2 py-0.5 rounded-full bg-primary/20 text-primary">Optimized</span>
                    </div>
                    <div className="flex gap-2">
                      {["9:00", "10:30", "12:00", "2:00", "3:30", "5:00", "6:30"].map((time, i) => (
                        <div
                          key={time}
                          className={`flex-1 h-8 rounded-lg flex items-center justify-center text-xs ${
                            i === 2 || i === 5
                              ? "bg-primary/20 text-primary border border-primary/30"
                              : i === 3
                                ? "bg-accent/20 text-accent border border-accent/30"
                                : "bg-secondary/30 text-muted-foreground"
                          }`}
                        >
                          {time}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div
              className="absolute -top-4 -right-4 glass-dark rounded-xl p-3 flex items-center gap-2 animate-float"
              style={{ animationDelay: "1s" }}
            >
              <Zap className="w-4 h-4 text-gold" />
              <span className="text-xs text-foreground font-medium">+47% bookings</span>
            </div>
            <div
              className="absolute -bottom-4 -left-4 glass-dark rounded-xl p-3 flex items-center gap-2 animate-float"
              style={{ animationDelay: "2s" }}
            >
              <Sparkles className="w-4 h-4 text-accent" />
              <span className="text-xs text-foreground font-medium">0 missed calls</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground">
        <span className="text-xs">Scroll to explore</span>
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2">
          <div className="w-1.5 h-3 rounded-full bg-primary animate-bounce" />
        </div>
      </div>
    </section>
  )
}
