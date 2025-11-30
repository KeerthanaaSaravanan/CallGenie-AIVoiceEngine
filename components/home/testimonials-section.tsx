import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Anita Verma",
    role: "Owner, Glam Studio",
    business: "Salon",
    content:
      "We stopped missing calls. Our bookings increased 40% in the first month, and my front desk team finally has time to focus on walk-in customers.",
    rating: 5,
  },
  {
    name: "Dr. Rahul Mehta",
    role: "Founder, SkinCare Clinic",
    business: "Clinic",
    content:
      "The AI handles patient inquiries so professionally. It even remembers follow-up appointments and sends reminders. Our no-show rate dropped by 60%.",
    rating: 5,
  },
  {
    name: "Priya Kapoor",
    role: "Manager, Serenity Spa",
    business: "Spa",
    content:
      "My front desk finally breathes. Customers love booking via WhatsApp at their convenience, and the slot optimizer has filled our off-peak hours.",
    rating: 5,
  },
  {
    name: "Vikram Singh",
    role: "Owner, Flex Fitness",
    business: "Gym",
    content:
      "Personal training bookings increased during off-peak hours. The AI suggests optimal slots that work for both trainers and clients.",
    rating: 5,
  },
  {
    name: "Meera Sharma",
    role: "Founder, Beauty Bliss",
    business: "Salon",
    content:
      "The memory feature is incredible. My regular clients feel so valued when the AI remembers their preferred stylist and usual services.",
    rating: 5,
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-primary mb-4 block">Testimonials</span>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance">
            Trusted by Business Owners
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See what salon, spa, and clinic owners say about SalonAI VoiceEngine.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl border border-border bg-card hover:border-primary/30 transition-colors"
            >
              {/* Quote Icon */}
              <Quote className="w-8 h-8 text-primary/30 mb-4" />

              {/* Content */}
              <p className="text-foreground leading-relaxed mb-6">&quot;{testimonial.content}&quot;</p>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center">
                  <span className="text-ink font-semibold text-sm">
                    {testimonial.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>
                <div>
                  <p className="font-medium text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
                <span className="ml-auto text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">
                  {testimonial.business}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Second Row */}
        <div className="grid md:grid-cols-2 gap-6 mt-6 max-w-4xl mx-auto">
          {testimonials.slice(3, 5).map((testimonial, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl border border-border bg-card hover:border-primary/30 transition-colors"
            >
              <Quote className="w-8 h-8 text-primary/30 mb-4" />
              <p className="text-foreground leading-relaxed mb-6">&quot;{testimonial.content}&quot;</p>
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center">
                  <span className="text-ink font-semibold text-sm">
                    {testimonial.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>
                <div>
                  <p className="font-medium text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
                <span className="ml-auto text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">
                  {testimonial.business}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
