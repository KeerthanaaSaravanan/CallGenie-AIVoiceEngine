import { Settings, Link2, Zap, BarChart3 } from "lucide-react"

const steps = [
  {
    number: "01",
    icon: Settings,
    title: "Onboard in 5 Minutes",
    description:
      "Enter your services, prices, staff availability, business hours, and brand tone. Our wizard guides you through every step.",
  },
  {
    number: "02",
    icon: Link2,
    title: "Connect Calls & WhatsApp",
    description:
      "One-click integration with Twilio for calls and WhatsApp Cloud API. Your AI receptionist is ready to go live.",
  },
  {
    number: "03",
    icon: Zap,
    title: "AI Starts Answering Immediately",
    description:
      "Calls and WhatsApp messages are handled automatically 24/7. Your customers get instant, personalized responses.",
  },
  {
    number: "04",
    icon: BarChart3,
    title: "Watch Bookings & Analytics Grow",
    description:
      "Your calendar fills intelligently while analytics track peak hours, popular services, and customer patterns.",
  },
]

export function HowItWorksSection() {
  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-primary mb-4 block">How It Works</span>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance">
            From Signup to Fully Autonomous
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Get your AI receptionist up and running in less time than a coffee break.
          </p>
        </div>

        {/* Steps Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Connecting Line */}
          <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-primary opacity-30 hidden md:block" />

          <div className="space-y-8 lg:space-y-0">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`relative flex flex-col lg:flex-row items-start gap-6 lg:gap-12 ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Step Number */}
                <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-ink border-4 border-primary items-center justify-center z-10">
                  <span className="text-xl font-bold text-primary">{step.number}</span>
                </div>

                {/* Content Card */}
                <div className={`flex-1 ${index % 2 === 1 ? "lg:text-right" : ""}`}>
                  <div
                    className={`p-6 rounded-2xl border border-border bg-card hover:border-primary/50 transition-colors ${
                      index % 2 === 1 ? "lg:ml-auto" : "lg:mr-auto"
                    } max-w-md`}
                  >
                    <div className={`flex items-center gap-4 mb-4 ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
                      <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center lg:hidden">
                        <span className="text-ink font-bold">{step.number}</span>
                      </div>
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                        <step.icon className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>
                </div>

                {/* Spacer */}
                <div className="hidden lg:block flex-1" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
