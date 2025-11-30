import { Brain, Calendar, Phone, MessageCircle, Sparkles, Zap } from "lucide-react"

const features = [
  {
    icon: Brain,
    title: "AI Memory Twin",
    description:
      "Your business's brain in AI form. It knows your services, prices, staff, and speaks in your brand voice.",
    color: "primary",
  },
  {
    icon: Calendar,
    title: "Dynamic Slot Optimizer",
    description: "Turn your calendar into a revenue engine. Fill gaps, cluster bookings, and predict rush hours.",
    color: "accent",
  },
  {
    icon: Phone,
    title: "Smart Call Handling",
    description: "AI answers every call with human-like conversation. Never miss a booking opportunity again.",
    color: "primary",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp Integration",
    description: "Seamless WhatsApp conversations with quick-reply buttons and rich appointment confirmations.",
    color: "accent",
  },
]

export function SolutionSection() {
  return (
    <section className="py-20 lg:py-32 bg-ink relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="relative container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-primary mb-4 block">The Solution</span>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance">Meet Your AI Memory Twin</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            A fully autonomous AI receptionist that answers calls and WhatsApp messages, books appointments, manages
            schedules, personalizes itself to each business, and runs on a 15-day free trial with Razorpay-powered
            subscriptions.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="glass-dark rounded-2xl p-6 lg:p-8 hover:scale-[1.02] transition-all duration-300"
            >
              <div
                className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${
                  feature.color === "primary" ? "bg-primary/20 text-primary" : "bg-accent/20 text-accent"
                }`}
              >
                <feature.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Unique Value Prop */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full glass-dark">
            <Sparkles className="w-5 h-5 text-gold" />
            <span className="text-foreground font-medium">
              &quot;Not just a bot. Your business&apos;s brain in AI form.&quot;
            </span>
            <Zap className="w-5 h-5 text-gold" />
          </div>
        </div>
      </div>
    </section>
  )
}
