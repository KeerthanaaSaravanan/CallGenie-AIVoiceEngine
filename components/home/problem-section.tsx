import { PhoneOff, Users, Moon, RotateCcw } from "lucide-react"

const problems = [
  {
    icon: PhoneOff,
    title: "Missed calls during peak hours",
    description: "When your salon is busy, customers can't get through. Every missed call is a missed booking.",
  },
  {
    icon: Users,
    title: "Staff juggling calls + walk-ins",
    description: "Your team is stretched thin between answering phones and serving customers in front of them.",
  },
  {
    icon: Moon,
    title: "Closed hours = zero bookings",
    description: "Customers want to book at midnight. Your phone is off. They book elsewhere.",
  },
  {
    icon: RotateCcw,
    title: "Clients repeating details every time",
    description: "No memory of past visits. Customers frustrated explaining preferences again and again.",
  },
]

export function ProblemSection() {
  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-primary mb-4 block">The Problem</span>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance">
            Your Front Desk is Overloaded
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Appointment-based businesses lose thousands of rupees monthly due to communication gaps.
          </p>
        </div>

        {/* Problem Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl border border-border bg-card hover:border-destructive/50 hover:bg-destructive/5 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center mb-4 group-hover:bg-destructive/20 transition-colors">
                <problem.icon className="w-6 h-6 text-destructive" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{problem.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
