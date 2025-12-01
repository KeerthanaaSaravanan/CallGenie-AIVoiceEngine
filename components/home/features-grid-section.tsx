import { Brain, Calendar, Phone, MessageCircle, BarChart3, Users, Shield, CreditCard, ArrowRight } from "lucide-react"
import Link from "next/link"

const features = [
  {
    icon: Brain,
    title: "AI Memory Twin Editor",
    description: "Edit your AI's knowledge base, tone, FAQs, and business rules from one intuitive dashboard.",
  },
  {
    icon: Calendar,
    title: "Dynamic Slot Optimizer",
    description: "AI-powered scheduling that fills gaps, clusters bookings, and maximizes revenue.",
  },
  {
    icon: Phone,
    title: "Call Center View",
    description: "See all call logs, recordings, transcripts, and outcomes in real-time.",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp Center View",
    description: "Manage all WhatsApp conversations with customer labels and context.",
  },
  {
    icon: Users,
    title: "Multi-Staff Calendar",
    description: "Coordinate multiple staff schedules, handle preferences, and avoid conflicts.",
  },
  {
    icon: BarChart3,
    title: "Analytics Dashboard",
    description: "Track peak hours, popular services, return customers, and booking patterns.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Data encryption, role-based access, detailed audit logs, and compliance.",
  },
  {
    icon: CreditCard,
    title: "Razorpay Billing",
    description: "Secure subscription management with transparent billing and easy upgrades.",
  },
]

export function FeaturesGridSection() {
  return (
    <section className="py-24 lg:py-32 bg-ink relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
      </div>

      <div className="relative container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-dark border border-white/10 mb-6">
            <span className="text-sm font-medium text-white/90">Complete Platform</span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6 tracking-tight">
            Everything You Need to <span className="gradient-text">Automate</span>
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            A complete AI receptionist platform with powerful tools for every aspect of customer communication.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group glass-dark rounded-2xl p-6 card-hover border border-white/10 relative overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Hover gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-sm text-white/50 leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/features"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass-dark border border-white/10 text-white font-medium hover:bg-white/10 transition-colors group"
          >
            Explore All Features
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  )
}
