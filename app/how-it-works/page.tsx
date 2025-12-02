import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  User,
  Link2,
  BarChart3,
  Phone,
  MessageCircle,
  Calendar,
  ArrowRight,
  Check,
  Sparkles,
  Database,
  AlertTriangle,
  Clock,
} from "lucide-react"

export default function HowItWorksPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-32 bg-ink relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
        </div>

        <div className="relative container mx-auto px-4 lg:px-8 text-center">
          <span className="text-sm font-medium text-primary mb-4 block">Workflow</span>
          <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
            From Signup to Fully Autonomous
          </h1>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            See exactly how CallGenie AI VoiceEngine transforms your business communication in just a few steps.
          </p>
        </div>
      </section>

      {/* Step 1: Signup */}
      <section className="py-20 lg:py-24 bg-background border-b border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center">
                  <span className="text-ink font-bold text-xl">1</span>
                </div>
                <span className="text-sm font-medium text-primary">Step 1</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Business Signup & Account Creation
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Create your account in under 2 minutes. We just need the basics to get you started.
              </p>

              <div className="space-y-4">
                {[
                  "Business name & category",
                  "Owner name & email",
                  "Phone number with OTP verification",
                  "Automatic 15-day trial activation",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-primary" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-4 rounded-xl bg-primary/5 border border-primary/20">
                <p className="text-sm text-muted-foreground">
                  <span className="text-primary font-medium">What happens behind the scenes:</span> Your account is
                  created with
                  <code className="mx-1 px-1.5 py-0.5 rounded bg-primary/10 text-primary text-xs">
                    subscription_status: &quot;trial&quot;
                  </code>
                  and trial dates are set automatically.
                </p>
              </div>
            </div>

            {/* Signup Form Mock */}
            <div className="rounded-2xl border border-border bg-card p-8">
              <h3 className="text-xl font-semibold text-foreground mb-6">Create Your Account</h3>
              <div className="space-y-4">
                <div>
                  <label className="text-sm text-muted-foreground mb-1.5 block">Business Name</label>
                  <div className="h-11 rounded-lg bg-secondary/50 border border-border px-4 flex items-center text-foreground">
                    Glam Studio
                  </div>
                </div>
                <div>
                  <label className="text-sm text-muted-foreground mb-1.5 block">Category</label>
                  <div className="h-11 rounded-lg bg-secondary/50 border border-border px-4 flex items-center justify-between text-foreground">
                    <span>Salon & Hair Studio</span>
                    <svg
                      className="w-4 h-4 text-muted-foreground"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm text-muted-foreground mb-1.5 block">Owner Name</label>
                    <div className="h-11 rounded-lg bg-secondary/50 border border-border px-4 flex items-center text-foreground">
                      Anita Verma
                    </div>
                  </div>
                  <div>
                    <label className="text-sm text-muted-foreground mb-1.5 block">Phone</label>
                    <div className="h-11 rounded-lg bg-secondary/50 border border-border px-4 flex items-center text-foreground">
                      +91 98765 43210
                    </div>
                  </div>
                </div>
                <div>
                  <label className="text-sm text-muted-foreground mb-1.5 block">Email</label>
                  <div className="h-11 rounded-lg bg-secondary/50 border border-border px-4 flex items-center text-foreground">
                    anita@glamstudio.com
                  </div>
                </div>
                <Button className="w-full gradient-primary text-ink font-semibold mt-2">
                  Create Account & Start Trial
                </Button>
                <p className="text-xs text-center text-muted-foreground">No credit card required • 15-day free trial</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Step 2: Onboarding Wizard */}
      <section className="py-20 lg:py-24 bg-ink border-b border-border/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Wizard Mock */}
            <div className="order-2 lg:order-1 glass-dark rounded-2xl p-8">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-xl font-semibold text-foreground">Onboarding Wizard</h3>
                <span className="text-sm text-primary">Step 3 of 5</span>
              </div>

              {/* Progress Bar */}
              <div className="flex gap-2 mb-8">
                {[1, 2, 3, 4, 5].map((step) => (
                  <div
                    key={step}
                    className={`flex-1 h-2 rounded-full ${step <= 3 ? "gradient-primary" : "bg-secondary/30"}`}
                  />
                ))}
              </div>

              {/* Step Content */}
              <div className="space-y-4">
                <h4 className="font-medium text-foreground">Business Hours & Holidays</h4>

                <div className="grid grid-cols-7 gap-2">
                  {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day, i) => (
                    <div
                      key={day}
                      className={`p-3 rounded-lg text-center text-sm ${
                        i === 6
                          ? "bg-destructive/10 border border-destructive/20 text-destructive"
                          : "bg-primary/10 border border-primary/20 text-primary"
                      }`}
                    >
                      <div className="font-medium">{day}</div>
                      <div className="text-xs mt-1">{i === 6 ? "Closed" : "9-7"}</div>
                    </div>
                  ))}
                </div>

                <div className="p-4 rounded-xl bg-secondary/20 border border-border/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-foreground">Holiday: Diwali Week</span>
                    <span className="text-xs text-muted-foreground">Oct 28 - Nov 3</span>
                  </div>
                  <button className="text-xs text-primary">+ Add Holiday</button>
                </div>

                <div className="flex gap-3 mt-6">
                  <Button variant="outline" className="flex-1 border-border/50 bg-transparent">
                    Back
                  </Button>
                  <Button className="flex-1 gradient-primary text-ink font-semibold">Next: Rules</Button>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center">
                  <span className="text-ink font-bold text-xl">2</span>
                </div>
                <span className="text-sm font-medium text-primary">Step 2</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">Onboarding Wizard (5 Minutes)</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                A guided wizard walks you through setting up your AI Memory Twin. Everything the AI needs to know about
                your business.
              </p>

              <div className="space-y-4">
                {[
                  { num: 1, title: "Services & Prices", desc: "Add your services with durations and pricing" },
                  { num: 2, title: "Staff & Timing", desc: "Configure staff schedules and preferences" },
                  { num: 3, title: "Business Hours & Holidays", desc: "Set operating hours and holiday calendar" },
                  { num: 4, title: "Business Rules", desc: "Add custom rules like 'No coloring on Mondays'" },
                  { num: 5, title: "Tone & Personality", desc: "3 questions to shape your AI's voice" },
                ].map((step) => (
                  <div key={step.num} className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-primary font-medium text-sm">{step.num}</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground">{step.title}</h4>
                      <p className="text-sm text-muted-foreground">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Step 3: Dashboard Generated */}
      <section className="py-20 lg:py-24 bg-background border-b border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center">
                  <span className="text-ink font-bold text-xl">3</span>
                </div>
                <span className="text-sm font-medium text-primary">Step 3</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">Automatic Dashboard Generation</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Your personalized dashboard is created instantly with all the tools you need to manage your AI
                receptionist.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Phone, title: "Call Logs", desc: "View all call transcripts & recordings" },
                  { icon: MessageCircle, title: "WhatsApp Center", desc: "Manage all chat conversations" },
                  { icon: Calendar, title: "Smart Calendar", desc: "See optimized booking schedule" },
                  { icon: BarChart3, title: "Analytics", desc: "Track performance metrics" },
                ].map((item, i) => (
                  <div key={i} className="p-4 rounded-xl bg-secondary/50 border border-border">
                    <item.icon className="w-6 h-6 text-primary mb-2" />
                    <h4 className="font-medium text-foreground text-sm">{item.title}</h4>
                    <p className="text-xs text-muted-foreground">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Dashboard Preview */}
            <div className="rounded-2xl border border-border bg-card overflow-hidden">
              <div className="flex items-center gap-2 p-4 bg-secondary/50 border-b border-border">
                <div className="w-3 h-3 rounded-full bg-destructive" />
                <div className="w-3 h-3 rounded-full bg-gold" />
                <div className="w-3 h-3 rounded-full bg-primary" />
                <span className="ml-4 text-sm text-muted-foreground">dashboard.salonai.app</span>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="font-semibold text-foreground">Welcome back, Anita</h3>
                    <p className="text-sm text-muted-foreground">Glam Studio Dashboard</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                    <span className="text-xs text-primary font-medium">AI Active</span>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-6">
                  {[
                    { label: "Today's Bookings", value: "12" },
                    { label: "Calls Handled", value: "8" },
                    { label: "WhatsApp Chats", value: "15" },
                  ].map((stat, i) => (
                    <div key={i} className="p-4 rounded-xl bg-secondary/30">
                      <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                      <p className="text-xs text-muted-foreground">{stat.label}</p>
                    </div>
                  ))}
                </div>

                <div className="p-4 rounded-xl bg-primary/5 border border-primary/20">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Link2 className="w-4 h-4 text-primary" />
                      <span className="text-sm text-foreground">Exotel Connection</span>
                    </div>
                    <span className="px-2 py-0.5 rounded-full bg-primary/20 text-primary text-xs">Connected</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Step 4 & 5: Integrations */}
      <section className="py-20 lg:py-24 bg-ink border-b border-border/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Exotel Integration */}
            <div>
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center">
                  <span className="text-ink font-bold text-xl">4</span>
                </div>
                <span className="text-sm font-medium text-primary">Step 4</span>
              </div>
              <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">Exotel Call Integration</h2>
              <p className="text-muted-foreground mb-8">
                Connect your phone number to enable AI-powered call handling. One-click setup.
              </p>

              {/* Flow Diagram */}
              <div className="glass-dark rounded-xl p-6">
                <div className="flex items-center justify-between">
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-full bg-secondary/30 flex items-center justify-center mx-auto mb-2">
                      <User className="w-8 h-8 text-muted-foreground" />
                    </div>
                    <span className="text-xs text-muted-foreground">Customer</span>
                  </div>
                  <ArrowRight className="w-6 h-6 text-primary" />
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-full bg-[#F22F46]/20 flex items-center justify-center mx-auto mb-2">
                      <Phone className="w-8 h-8 text-[#F22F46]" />
                    </div>
                    <span className="text-xs text-muted-foreground">Exotel</span>
                  </div>
                  <ArrowRight className="w-6 h-6 text-primary" />
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-full gradient-primary flex items-center justify-center mx-auto mb-2">
                      <Sparkles className="w-8 h-8 text-ink" />
                    </div>
                    <span className="text-xs text-muted-foreground">AI</span>
                  </div>
                  <ArrowRight className="w-6 h-6 text-primary" />
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-2">
                      <Calendar className="w-8 h-8 text-accent" />
                    </div>
                    <span className="text-xs text-muted-foreground">Calendar</span>
                  </div>
                </div>
                <div className="mt-6 pt-4 border-t border-border/30 flex items-center justify-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  <span className="text-xs text-primary font-medium">Connected & Live</span>
                </div>
              </div>
            </div>

            {/* WhatsApp Integration */}
            <div>
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center">
                  <span className="text-ink font-bold text-xl">5</span>
                </div>
                <span className="text-sm font-medium text-primary">Step 5</span>
              </div>
              <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">WhatsApp Integration</h2>
              <p className="text-muted-foreground mb-8">
                Connect WhatsApp Business Cloud API or use our system number to start receiving messages.
              </p>

              {/* Connection Status */}
              <div className="glass-dark rounded-xl p-6 space-y-4">
                <div className="flex items-center justify-between p-4 rounded-lg bg-[#25D366]/10 border border-[#25D366]/20">
                  <div className="flex items-center gap-3">
                    <MessageCircle className="w-6 h-6 text-[#25D366]" />
                    <div>
                      <p className="text-sm font-medium text-foreground">WhatsApp Business</p>
                      <p className="text-xs text-muted-foreground">Cloud API Connected</p>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-[#25D366]/20 text-[#25D366] text-xs font-medium">
                    Connected
                  </span>
                </div>

                <div className="p-4 rounded-lg bg-secondary/20">
                  <p className="text-xs text-muted-foreground mb-2">Sample Template Message:</p>
                  <div className="p-3 rounded-lg bg-card border border-border">
                    <p className="text-sm text-foreground">
                      ✅ <strong>Appointment Confirmed!</strong>
                      <br />📅 Saturday, Dec 7 at 11:15 AM
                      <br />💇 Haircut & Styling with Priya
                      <br />📍 Glam Studio, MG Road
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Step 6: Live AI */}
      <section className="py-20 lg:py-24 bg-background border-b border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 mb-6 mx-auto">
              <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center">
                <span className="text-ink font-bold text-xl">6</span>
              </div>
              <span className="text-sm font-medium text-primary">Step 6</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Live AI Receptionist Flow</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Your AI starts handling calls and WhatsApp messages immediately. Here&apos;s what a typical interaction
              looks like.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Call Flow */}
            <div className="rounded-2xl border border-border bg-card p-6">
              <div className="flex items-center gap-3 mb-6">
                <Phone className="w-6 h-6 text-primary" />
                <h3 className="font-semibold text-foreground">Voice Call Flow</h3>
              </div>
              <div className="space-y-4">
                {[
                  { role: "Customer", text: "Hi, I want to book an appointment" },
                  {
                    role: "AI",
                    text: "Good afternoon! I'd be happy to help you book. What service are you looking for?",
                  },
                  { role: "Customer", text: "A haircut please, maybe this Saturday?" },
                  {
                    role: "AI",
                    text: "I have 11:15 AM with Priya or 2:30 PM with Rahul available on Saturday. Which time works for you?",
                  },
                  { role: "Customer", text: "11:15 with Priya sounds good" },
                  {
                    role: "AI",
                    text: "Booked! Haircut with Priya on Saturday at 11:15 AM. You'll get a WhatsApp confirmation shortly.",
                  },
                ].map((msg, i) => (
                  <div key={i} className={`flex ${msg.role === "AI" ? "justify-start" : "justify-end"}`}>
                    <div
                      className={`max-w-[80%] p-3 rounded-xl ${
                        msg.role === "AI"
                          ? "bg-primary/10 border border-primary/20 rounded-tl-md"
                          : "bg-secondary/50 rounded-tr-md"
                      }`}
                    >
                      <p className="text-xs text-muted-foreground mb-1">{msg.role}</p>
                      <p className="text-sm text-foreground">{msg.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* WhatsApp Flow */}
            <div className="rounded-2xl border border-border bg-card p-6">
              <div className="flex items-center gap-3 mb-6">
                <MessageCircle className="w-6 h-6 text-[#25D366]" />
                <h3 className="font-semibold text-foreground">WhatsApp Flow</h3>
              </div>
              <div className="space-y-4">
                {[
                  { role: "Customer", text: "Hi, what's your pricing for facials?" },
                  {
                    role: "AI",
                    text: "Hi! Here are our facial options:\n\n✨ Classic Facial - ₹1,200 (45 min)\n✨ Gold Facial - ₹2,000 (60 min)\n✨ Diamond Facial - ₹3,500 (90 min)\n\nWould you like to book one?",
                  },
                  { role: "Customer", text: "Gold facial please, tomorrow if possible" },
                  {
                    role: "AI",
                    text: "I have these slots tomorrow for Gold Facial:",
                    buttons: ["10:30 AM", "2:00 PM", "4:30 PM"],
                  },
                  { role: "Customer", text: "2 PM works" },
                  { role: "AI", text: "✅ Confirmed! Gold Facial tomorrow at 2:00 PM with Meera. See you then! 💆‍♀️" },
                ].map((msg, i) => (
                  <div key={i} className={`flex ${msg.role === "AI" ? "justify-start" : "justify-end"}`}>
                    <div
                      className={`max-w-[80%] p-3 rounded-xl ${
                        msg.role === "AI" ? "bg-card border border-border rounded-tl-md" : "bg-[#DCF8C6] rounded-tr-md"
                      }`}
                    >
                      <p
                        className={`text-sm ${msg.role === "AI" ? "text-foreground" : "text-ink"} whitespace-pre-line`}
                      >
                        {msg.text}
                      </p>
                      {msg.buttons && (
                        <div className="flex flex-wrap gap-2 mt-2">
                          {msg.buttons.map((btn, j) => (
                            <span key={j} className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs">
                              {btn}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Steps 7-10: Additional Features */}
      <section className="py-20 lg:py-24 bg-ink">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Step 7 */}
            <div className="glass-dark rounded-2xl p-6">
              <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center mb-4">
                <span className="text-ink font-bold">7</span>
              </div>
              <h3 className="font-semibold text-foreground mb-2">Intelligent Booking Engine</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Smart staff assignment, conflict avoidance, and optimal slot selection.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Check className="w-3 h-3 text-primary" />
                  <span>Auto staff assignment</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Check className="w-3 h-3 text-primary" />
                  <span>Conflict detection</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Check className="w-3 h-3 text-primary" />
                  <span>Buffer time management</span>
                </div>
              </div>
            </div>

            {/* Step 8 */}
            <div className="glass-dark rounded-2xl p-6">
              <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center mb-4">
                <span className="text-ink font-bold">8</span>
              </div>
              <h3 className="font-semibold text-foreground mb-2">Dashboard Experience</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Four main centers: Call, WhatsApp, Calendar, and Analytics.
              </p>
              <div className="grid grid-cols-2 gap-2">
                {[Phone, MessageCircle, Calendar, BarChart3].map((Icon, i) => (
                  <div key={i} className="p-3 rounded-lg bg-ink-light flex items-center justify-center">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                ))}
              </div>
            </div>

            {/* Step 9 */}
            <div className="glass-dark rounded-2xl p-6">
              <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center mb-4">
                <span className="text-ink font-bold">9</span>
              </div>
              <h3 className="font-semibold text-foreground mb-2">Trial to Paid via Razorpay</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Seamless subscription activation after your 15-day trial.
              </p>
              <div className="space-y-2">
                <div className="flex items-center justify-between p-2 rounded-lg bg-gold/10 border border-gold/20">
                  <span className="text-xs text-gold">Trial</span>
                  <span className="text-xs text-muted-foreground">Active</span>
                </div>
                <div className="flex items-center justify-between p-2 rounded-lg bg-primary/10 border border-primary/20">
                  <span className="text-xs text-primary">Paid</span>
                  <span className="text-xs text-muted-foreground">Subscribe</span>
                </div>
              </div>
            </div>

            {/* Step 10 */}
            <div className="glass-dark rounded-2xl p-6">
              <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center mb-4">
                <span className="text-ink font-bold">10</span>
              </div>
              <h3 className="font-semibold text-foreground mb-2">Admin Panel</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Powerful internal tools for managing all client accounts.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Database className="w-3 h-3 text-primary" />
                  <span>All client accounts</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <BarChart3 className="w-3 h-3 text-primary" />
                  <span>Usage statistics</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <AlertTriangle className="w-3 h-3 text-primary" />
                  <span>Error logs & alerts</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-background">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
            <Clock className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-medium">Setup takes less than 15 minutes</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">Ready to Get Started?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join hundreds of salons, spas, and clinics already using CallGenie AI VoiceEngine to handle their customer
            communications.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gradient-primary text-ink font-semibold gap-2" asChild>
              <Link href="/signup">
                Start 15-Day Free Trial
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-border text-foreground bg-transparent" asChild>
              <Link href="/demo">Book Live Demo</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
