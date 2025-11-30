import { Brain, Calendar, Phone, MessageCircle, BarChart3, Users, Shield, CreditCard } from "lucide-react"

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
    <section className="py-20 lg:py-32 bg-ink relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
      </div>

      <div className="relative container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-primary mb-4 block">Features</span>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance">
            Everything You Need to Automate
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A complete AI receptionist platform with powerful tools for every aspect of customer communication.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="glass-dark rounded-2xl p-6 hover:scale-[1.02] transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
