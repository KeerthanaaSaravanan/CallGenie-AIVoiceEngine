import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  Brain,
  Calendar,
  Phone,
  MessageCircle,
  Settings,
  Heart,
  Zap,
  ArrowRight,
  Check,
  Sparkles,
  BarChart3,
  Users,
  Clock,
} from "lucide-react"

export default function FeaturesPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-32 bg-ink relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
        </div>

        <div className="relative container mx-auto px-4 lg:px-8 text-center">
          <span className="text-sm font-medium text-primary mb-4 block">Product Features</span>
          <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
            Inside CallGenie AI VoiceEngine
          </h1>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            A fully autonomous AI receptionist that answers calls and WhatsApp messages, books appointments, manages
            schedules, personalizes itself to each business, and runs on a 15-day free trial.
          </p>
        </div>
      </section>

      {/* AI Memory Twin Section */}
      <section className="py-20 lg:py-32 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
                <Brain className="w-4 h-4 text-accent" />
                <span className="text-sm text-accent font-medium">Core Innovation</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">AI Memory Twin</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Not just a bot. Your business&apos;s brain in AI form. The AI Memory Twin learns everything about your
                business and speaks like your best front-desk staff.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  "Services & pricing with durations",
                  "Staff availability & preferences",
                  "Business hours & holiday calendar",
                  "Custom rules (e.g., 'No coloring on Mondays')",
                  "Brand tone & personality",
                  "FAQs & customer patterns",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>

              <Button className="gradient-primary text-ink font-semibold gap-2" asChild>
                <Link href="/signup">
                  Create Your AI Twin
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>

            {/* Memory Twin Editor Mock */}
            <div className="glass rounded-2xl p-6 border border-border">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-semibold text-foreground">Memory Twin Editor</h3>
                <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">Live</span>
              </div>

              <div className="space-y-4">
                {/* Tone Slider */}
                <div className="p-4 rounded-xl bg-secondary/50">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-medium text-foreground">Brand Tone</span>
                    <span className="text-xs text-primary">Professional & Warm</span>
                  </div>
                  <div className="flex gap-2">
                    {["Casual", "Friendly", "Professional", "Luxury"].map((tone, i) => (
                      <button
                        key={tone}
                        className={`flex-1 py-2 rounded-lg text-xs font-medium transition-colors ${
                          i === 2 ? "bg-primary text-ink" : "bg-background text-muted-foreground hover:text-foreground"
                        }`}
                      >
                        {tone}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Rules Card */}
                <div className="p-4 rounded-xl bg-secondary/50">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-medium text-foreground">Business Rules</span>
                    <button className="text-xs text-primary">+ Add Rule</button>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between p-2 rounded-lg bg-background">
                      <span className="text-xs text-muted-foreground">No hair coloring on Mondays</span>
                      <div className="w-8 h-4 rounded-full bg-primary relative">
                        <div className="absolute right-0.5 top-0.5 w-3 h-3 rounded-full bg-ink" />
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-2 rounded-lg bg-background">
                      <span className="text-xs text-muted-foreground">VIP clients get priority slots</span>
                      <div className="w-8 h-4 rounded-full bg-primary relative">
                        <div className="absolute right-0.5 top-0.5 w-3 h-3 rounded-full bg-ink" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Preview Chat */}
                <div className="p-4 rounded-xl bg-secondary/50">
                  <span className="text-sm font-medium text-foreground block mb-3">Preview Greeting</span>
                  <div className="bg-primary/10 rounded-xl p-3 border border-primary/20">
                    <p className="text-sm text-foreground">
                      &quot;Good afternoon! Thank you for calling Glam Studio. This is your AI assistant. How may I help
                      you with your appointment today?&quot;
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dynamic Slot Optimizer Section */}
      <section className="py-20 lg:py-32 bg-ink relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
        </div>

        <div className="relative container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Calendar Mock */}
            <div className="order-2 lg:order-1 glass-dark rounded-2xl p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-semibold text-foreground">Smart Calendar</h3>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  <span className="text-xs text-primary">Optimizing...</span>
                </div>
              </div>

              {/* Calendar Grid */}
              <div className="space-y-3">
                {/* Time headers */}
                <div className="grid grid-cols-8 gap-2 text-xs text-muted-foreground">
                  <div></div>
                  {["9AM", "10AM", "11AM", "12PM", "2PM", "3PM", "4PM"].map((time) => (
                    <div key={time} className="text-center">
                      {time}
                    </div>
                  ))}
                </div>

                {/* Staff rows */}
                {["Priya", "Rahul", "Meera"].map((staff, staffIndex) => (
                  <div key={staff} className="grid grid-cols-8 gap-2">
                    <div className="text-xs text-muted-foreground py-2">{staff}</div>
                    {[0, 1, 2, 3, 4, 5, 6].map((slot) => {
                      const isBooked =
                        (staffIndex === 0 && [0, 1, 4, 5].includes(slot)) ||
                        (staffIndex === 1 && [1, 2, 3, 6].includes(slot)) ||
                        (staffIndex === 2 && [0, 3, 4].includes(slot))
                      const isOptimized =
                        (staffIndex === 0 && slot === 3) ||
                        (staffIndex === 1 && slot === 0) ||
                        (staffIndex === 2 && slot === 2)
                      const isPeak = slot === 4 || slot === 5

                      return (
                        <div
                          key={slot}
                          className={`h-10 rounded-lg flex items-center justify-center text-xs ${
                            isBooked
                              ? "bg-primary/30 border border-primary/50 text-primary"
                              : isOptimized
                                ? "bg-accent/20 border-2 border-dashed border-accent text-accent animate-pulse-slow"
                                : isPeak
                                  ? "bg-gold/10 border border-gold/30"
                                  : "bg-secondary/20 border border-border/30"
                          }`}
                        >
                          {isOptimized && <Zap className="w-3 h-3" />}
                        </div>
                      )
                    })}
                  </div>
                ))}
              </div>

              {/* Legend */}
              <div className="flex flex-wrap gap-4 mt-6 pt-4 border-t border-border/30">
                <div className="flex items-center gap-2 text-xs">
                  <div className="w-3 h-3 rounded bg-primary/30 border border-primary/50" />
                  <span className="text-muted-foreground">Booked</span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <div className="w-3 h-3 rounded bg-accent/20 border-2 border-dashed border-accent" />
                  <span className="text-muted-foreground">AI Suggested</span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <div className="w-3 h-3 rounded bg-gold/10 border border-gold/30" />
                  <span className="text-muted-foreground">Peak Hours</span>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <Calendar className="w-4 h-4 text-primary" />
                <span className="text-sm text-primary font-medium">Revenue-First Scheduling</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">Dynamic Slot Optimizer</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Turn your calendar into a revenue engine. The AI analyzes booking patterns, predicts rush hours, and
                suggests optimal slots to maximize your daily revenue.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Zap, title: "Fill Empty Gaps", desc: "AI suggests slots that minimize idle time" },
                  { icon: Users, title: "Cluster Bookings", desc: "Group appointments for efficiency" },
                  { icon: Clock, title: "Predict Rush Hours", desc: "Prepare for busy periods ahead" },
                  { icon: BarChart3, title: "Upsell Suggestions", desc: "Recommend add-on services" },
                ].map((feature, i) => (
                  <div key={i} className="p-4 rounded-xl glass-dark">
                    <feature.icon className="w-5 h-5 text-primary mb-2" />
                    <h4 className="font-medium text-foreground text-sm mb-1">{feature.title}</h4>
                    <p className="text-xs text-muted-foreground">{feature.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dual-Channel Receptionist Section */}
      <section className="py-20 lg:py-32 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <MessageCircle className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium">Dual-Channel Communication</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6 text-balance">
              Smart Dual-Channel Receptionist
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Customer can start on WhatsApp, call later — AI remembers everything. No repeated questions. Continuous
              conversation memory.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Call Interface */}
            <div className="rounded-2xl border border-border bg-card p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center">
                  <Phone className="w-6 h-6 text-ink" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Voice Calls</h3>
                  <p className="text-sm text-muted-foreground">Powered by Twilio</p>
                </div>
              </div>

              {/* Call Transcript */}
              <div className="space-y-3 p-4 rounded-xl bg-secondary/30">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-xs font-medium">
                    C
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-foreground">
                      &quot;Hi, I&apos;d like to book a haircut for Saturday&quot;
                    </p>
                    <span className="text-xs text-muted-foreground mt-1 inline-block px-2 py-0.5 rounded bg-secondary">
                      Intent: Booking
                    </span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full gradient-primary flex items-center justify-center">
                    <Sparkles className="w-4 h-4 text-ink" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-foreground">
                      &quot;Of course! I have 11:15 AM with Priya or 2:30 PM with Rahul available. Which works better
                      for you?&quot;
                    </p>
                    <span className="text-xs text-primary mt-1 inline-block px-2 py-0.5 rounded bg-primary/10">
                      Slot Offered
                    </span>
                  </div>
                </div>
              </div>

              {/* Waveform */}
              <div className="mt-4 h-12 bg-primary/5 rounded-lg flex items-center justify-center gap-0.5 px-4">
                {[...Array(40)].map((_, i) => (
                  <div
                    key={i}
                    className="w-1 bg-primary rounded-full animate-pulse"
                    style={{
                      height: `${Math.random() * 30 + 10}px`,
                      animationDelay: `${i * 0.05}s`,
                    }}
                  />
                ))}
              </div>
            </div>

            {/* WhatsApp Interface */}
            <div className="rounded-2xl border border-border bg-card p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#25D366] flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">WhatsApp</h3>
                  <p className="text-sm text-muted-foreground">Cloud API Integration</p>
                </div>
              </div>

              {/* WhatsApp Chat */}
              <div className="space-y-3 p-4 rounded-xl bg-secondary/30">
                <div className="flex justify-end">
                  <div className="max-w-[80%] bg-[#DCF8C6] rounded-xl rounded-tr-md p-3">
                    <p className="text-sm text-ink">Can I reschedule my appointment to next week?</p>
                    <span className="text-xs text-ink/60 mt-1 block text-right">10:32 AM</span>
                  </div>
                </div>
                <div className="flex justify-start">
                  <div className="max-w-[80%] bg-card border border-border rounded-xl rounded-tl-md p-3">
                    <p className="text-sm text-foreground">
                      Hi Priya! I see your haircut with Rahul this Saturday. I can move it to:
                    </p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      <button className="px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-medium">
                        Mon 11:00 AM
                      </button>
                      <button className="px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-medium">
                        Tue 3:30 PM
                      </button>
                      <button className="px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-medium">
                        Wed 10:00 AM
                      </button>
                    </div>
                    <span className="text-xs text-muted-foreground mt-2 block">10:32 AM</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Key Benefits */}
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full glass">
              <Check className="w-4 h-4 text-primary" />
              <span className="text-sm text-foreground">Continuous conversation memory</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full glass">
              <Check className="w-4 h-4 text-primary" />
              <span className="text-sm text-foreground">Cross-channel context sync</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full glass">
              <Check className="w-4 h-4 text-primary" />
              <span className="text-sm text-foreground">No repeated questions</span>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Engine Section */}
      <section className="py-20 lg:py-32 bg-ink relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        </div>

        <div className="relative container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
                <Settings className="w-4 h-4 text-accent" />
                <span className="text-sm text-accent font-medium">Intelligent Booking</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">Smart Booking Engine</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                The AI handles complex booking scenarios automatically — from service selection to staff assignment to
                conflict avoidance.
              </p>

              <div className="space-y-4">
                {[
                  "Intelligent service selection based on customer history",
                  "Auto-assignment to preferred or available staff",
                  "Smart slot recommendations that optimize calendar",
                  "Instant confirmation with booking summary",
                  "Automatic conflict detection and resolution",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-accent" />
                    </div>
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Booking Flow Mock */}
            <div className="glass-dark rounded-2xl p-6">
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-ink-light border border-border/30">
                  <span className="text-xs text-muted-foreground mb-2 block">Step 1: Service</span>
                  <div className="flex items-center justify-between">
                    <span className="text-foreground font-medium">Haircut & Styling</span>
                    <span className="text-primary">₹600 • 45 min</span>
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-ink-light border border-border/30">
                  <span className="text-xs text-muted-foreground mb-2 block">Step 2: Staff</span>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center">
                      <span className="text-ink font-semibold text-sm">P</span>
                    </div>
                    <div>
                      <span className="text-foreground font-medium block">Priya Sharma</span>
                      <span className="text-xs text-muted-foreground">Your preferred stylist</span>
                    </div>
                    <Check className="w-5 h-5 text-primary ml-auto" />
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-ink-light border border-border/30">
                  <span className="text-xs text-muted-foreground mb-2 block">Step 3: Slot</span>
                  <div className="flex gap-2">
                    <button className="flex-1 py-2 rounded-lg bg-primary/20 border-2 border-primary text-primary text-sm font-medium">
                      11:15 AM
                    </button>
                    <button className="flex-1 py-2 rounded-lg bg-secondary/20 border border-border/30 text-muted-foreground text-sm">
                      2:30 PM
                    </button>
                    <button className="flex-1 py-2 rounded-lg bg-secondary/20 border border-border/30 text-muted-foreground text-sm">
                      4:00 PM
                    </button>
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-primary/10 border border-primary/30">
                  <div className="flex items-center gap-2 mb-2">
                    <Check className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium text-primary">Booking Confirmed</span>
                  </div>
                  <p className="text-sm text-foreground">Haircut & Styling with Priya on Saturday, 11:15 AM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emotional Tone Section */}
      <section className="py-20 lg:py-32 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/20 mb-6">
              <Heart className="w-4 h-4 text-gold" />
              <span className="text-sm text-gold font-medium">Emotional Intelligence</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">Emotional Tone Adjustment</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The AI detects customer emotions and adjusts its response style accordingly — more empathy for upset
              customers, clearer explanations for confused ones.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              {
                emotion: "Upset",
                icon: "😔",
                response: "I completely understand your frustration. Let me make this right for you immediately.",
                style: "Extra empathy, solution-focused",
              },
              {
                emotion: "Confused",
                icon: "🤔",
                response: "Let me explain that more clearly. We have three simple options for you...",
                style: "Clearer, step-by-step",
              },
              {
                emotion: "Elderly",
                icon: "👴",
                response: "Of course! I've booked you for 10 AM on Thursday. Would you like me to repeat that?",
                style: "Slower, patient, repeat key info",
              },
              {
                emotion: "Rushed",
                icon: "⚡",
                response: "Got it! Tomorrow 3 PM with Priya. Confirmed. Anything else?",
                style: "Quick, efficient, no fluff",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl border border-border bg-card hover:border-primary/30 transition-colors"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-semibold text-foreground mb-2">{item.emotion} Customer</h3>
                <p className="text-sm text-muted-foreground mb-4 italic">&quot;{item.response}&quot;</p>
                <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">{item.style}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-ink">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">Ready to Meet Your AI Receptionist?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Start your 15-day free trial today. No credit card required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gradient-primary text-ink font-semibold gap-2" asChild>
              <Link href="/signup">
                Start Free Trial
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-border/50 text-foreground bg-transparent" asChild>
              <Link href="/demo">Book Live Demo</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
