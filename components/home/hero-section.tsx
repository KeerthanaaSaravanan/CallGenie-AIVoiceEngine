"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Phone, MessageCircle, Calendar, Play, Check, Sparkles, Zap, ArrowRight } from "lucide-react"

const rotatingWords = ["Calls & WhatsApp", "Salons & Spas", "Clinics & Wellness", "Your Business"]

export function HeroSection() {
  const [currentWord, setCurrentWord] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % rotatingWords.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-screen bg-ink overflow-hidden">
      <div className="absolute inset-0">
        {/* Gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] animate-pulse-slow" />
        <div
          className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent/15 rounded-full blur-[100px] animate-pulse-slow"
          style={{ animationDelay: "1.5s" }}
        />
        <div className="absolute top-1/2 right-1/3 w-[300px] h-[300px] bg-primary/10 rounded-full blur-[80px] animate-float" />

        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />

        {/* Radial gradient overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-ink/50 to-ink" />
      </div>

      <div className="relative container mx-auto px-4 lg:px-8 pt-32 pb-20 lg:pt-40 lg:pb-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <div className="text-center lg:text-left animate-fade-in-up">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full glass-dark mb-8 border border-white/10">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="text-sm text-white/90 font-medium">24/7 AI Receptionist</span>
              <span className="text-xs px-2.5 py-1 rounded-full bg-gold/20 text-gold font-semibold">
                15-Day Free Trial
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] mb-6 tracking-tight">
              Your 24/7 AI Receptionist for{" "}
              <span className="relative inline-block">
                <span className="gradient-text">{rotatingWords[currentWord]}</span>
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg lg:text-xl text-white/70 leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
              Let AI answer every call, chat on WhatsApp, book appointments, and optimize your schedule — perfectly
              tailored to your business.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button
                size="lg"
                className="gradient-primary text-ink font-semibold text-base px-8 group relative overflow-hidden h-12"
                asChild
              >
                <Link href="/contact" className="flex items-center gap-2">
                  Start 15-Day Free Trial
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  <div className="absolute inset-0 animate-shimmer opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10 gap-2 bg-white/5 backdrop-blur-sm h-12"
                asChild
              >
                <Link href="/demo">
                  <Play className="w-4 h-4" />
                  Watch Demo
                </Link>
              </Button>
            </div>

            {/* Trust Markers */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 justify-center lg:justify-start text-sm text-white/60">
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
          <div className="relative animate-scale-in" style={{ animationDelay: "0.2s" }}>
            <div className="relative glass-dark rounded-3xl p-4 lg:p-6 glow-primary border border-white/10">
              {/* Dashboard Mock */}
              <div className="rounded-2xl bg-ink-light/80 overflow-hidden border border-white/5">
                {/* Header */}
                <div className="flex items-center justify-between p-4 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 border border-primary/30">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                    </span>
                    <span className="text-xs text-primary font-medium">AI Active</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 lg:p-6 grid grid-cols-2 gap-4">
                  {/* Call Panel */}
                  <div className="glass-dark rounded-xl p-4 card-hover border border-white/5">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center">
                        <Phone className="w-5 h-5 text-ink" />
                      </div>
                      <div>
                        <p className="text-xs text-white/50">Incoming Call</p>
                        <p className="text-sm font-semibold text-white">Ayushi Sharma</p>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                        </span>
                        <span className="text-xs text-primary font-medium">AI is answering...</span>
                      </div>
                      <div className="h-10 bg-primary/10 rounded-lg flex items-center px-3 border border-primary/20">
                        <div className="flex gap-0.5 items-center h-full">
                          {[...Array(24)].map((_, i) => (
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
                  <div className="glass-dark rounded-xl p-4 card-hover border border-white/5">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-full bg-[#25D366] flex items-center justify-center">
                        <MessageCircle className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="text-xs text-white/50">WhatsApp</p>
                        <p className="text-sm font-semibold text-white">Priya Kapoor</p>
                      </div>
                    </div>
                    <div className="space-y-2 text-xs">
                      <div className="bg-white/10 rounded-xl rounded-tl-sm p-3 text-white/80">
                        Can I book a facial this Thursday after 5?
                      </div>
                      <div className="bg-primary/20 rounded-xl rounded-tr-sm p-3 text-primary ml-4 border border-primary/20">
                        Hi Priya! I have 5:30 PM or 6:00 PM available. Which works for you?
                      </div>
                    </div>
                  </div>

                  {/* Calendar Strip */}
                  <div className="col-span-2 glass-dark rounded-xl p-4 border border-white/5">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-primary" />
                        <span className="text-sm font-semibold text-white">Today's Schedule</span>
                      </div>
                      <span className="text-xs px-2.5 py-1 rounded-full bg-primary/20 text-primary font-medium border border-primary/30">
                        Optimized
                      </span>
                    </div>
                    <div className="flex gap-2">
                      {["9:00", "10:30", "12:00", "2:00", "3:30", "5:00", "6:30"].map((time, i) => (
                        <div
                          key={time}
                          className={`flex-1 h-10 rounded-lg flex items-center justify-center text-xs font-medium transition-all ${
                            i === 2 || i === 5
                              ? "bg-primary/20 text-primary border border-primary/30"
                              : i === 3
                                ? "bg-accent/20 text-accent border border-accent/30"
                                : "bg-white/5 text-white/50 border border-white/5"
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

            <div
              className="absolute -top-4 -right-4 glass-dark rounded-xl p-3 flex items-center gap-2 animate-float border border-white/10"
              style={{ animationDelay: "1s" }}
            >
              <div className="w-8 h-8 rounded-lg bg-gold/20 flex items-center justify-center">
                <Zap className="w-4 h-4 text-gold" />
              </div>
              <span className="text-sm text-white font-semibold">+47% bookings</span>
            </div>
            <div
              className="absolute -bottom-4 -left-4 glass-dark rounded-xl p-3 flex items-center gap-2 animate-float border border-white/10"
              style={{ animationDelay: "2s" }}
            >
              <div className="w-8 h-8 rounded-lg bg-accent/20 flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-accent" />
              </div>
              <span className="text-sm text-white font-semibold">0 missed calls</span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-white/40">
        <span className="text-xs font-medium tracking-wide uppercase">Scroll to explore</span>
        <div className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center pt-2">
          <div className="w-1.5 h-3 rounded-full bg-primary animate-bounce" />
        </div>
      </div>
    </section>
  )
}
