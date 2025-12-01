import { Brain, Calendar, Phone, MessageCircle, Sparkles, Zap, ArrowRight } from "lucide-react"
import Link from "next/link"

const features = [
  {
    icon: Brain,
    title: "AI Memory Twin",
    description:
      "Your business's brain in AI form. It knows your services, prices, staff, and speaks in your brand voice.",
    color: "primary",
    gradient: "from-primary/20 to-primary/5",
  },
  {
    icon: Calendar,
    title: "Dynamic Slot Optimizer",
    description: "Turn your calendar into a revenue engine. Fill gaps, cluster bookings, and predict rush hours.",
    color: "accent",
    gradient: "from-accent/20 to-accent/5",
  },
  {
    icon: Phone,
    title: "Smart Call Handling",
    description: "AI answers every call with human-like conversation. Never miss a booking opportunity again.",
    color: "primary",
    gradient: "from-primary/20 to-primary/5",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp Integration",
    description: "Seamless WhatsApp conversations with quick-reply buttons and rich appointment confirmations.",
    color: "accent",
    gradient: "from-accent/20 to-accent/5",
  },
]

export function SolutionSection() {
  return (
    <section className="py-24 lg:py-32 bg-ink relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px]" />
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-dark border border-white/10 mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-white/90">The Solution</span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6 tracking-tight">
            Meet Your <span className="gradient-text">AI Memory Twin</span>
          </h2>
          <p className="text-lg text-white/60 max-w-3xl mx-auto leading-relaxed">
            A fully autonomous AI receptionist that answers calls and WhatsApp messages, books appointments, manages
            schedules, personalizes itself to each business, and runs on a 15-day free trial.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group glass-dark rounded-2xl p-8 card-hover border border-white/10 relative overflow-hidden`}
            >
              {/* Gradient background on hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              <div className="relative z-10">
                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 duration-300 ${
                    feature.color === "primary" ? "bg-primary/20 text-primary" : "bg-accent/20 text-accent"
                  }`}
                >
                  <feature.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-white/60 leading-relaxed mb-4">{feature.description}</p>
                <Link
                  href="/features"
                  className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:gap-2 transition-all"
                >
                  Learn more <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 px-8 py-4 rounded-2xl glass-dark border border-white/10">
            <Sparkles className="w-5 h-5 text-gold" />
            <span className="text-white font-medium text-lg">
              &quot;Not just a bot. Your business&apos;s brain in AI form.&quot;
            </span>
            <Zap className="w-5 h-5 text-gold" />
          </div>
        </div>
      </div>
    </section>
  )
}
