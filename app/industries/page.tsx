import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Scissors, Sparkles, Stethoscope, Building2, Phone, Clock, Users, CheckCircle2, ArrowRight } from "lucide-react"

const industries = [
  {
    id: "salons",
    icon: Scissors,
    name: "Salons & Hair Studios",
    tagline: "Never miss a booking during a haircut again",
    description:
      "From solo stylists to multi-chair salons, SalonAI VoiceEngine handles appointment requests while you focus on your craft.",
    painPoints: [
      "Stylists can't answer phones mid-cut",
      "Walk-ins disrupt scheduled clients",
      "After-hours booking requests lost",
      "Double bookings from rushed scheduling",
    ],
    aiSolutions: [
      "AI answers calls while you're with clients",
      "Smart waitlist management for walk-ins",
      "24/7 booking via calls and WhatsApp",
      "Automatic conflict detection and resolution",
    ],
    exampleConversation: {
      customer: "Hi, can I book a balayage with color for this Saturday afternoon?",
      ai: "Hi! I'd love to help you book a balayage with color. Our colorist Priya has availability at 2 PM and 4:30 PM this Saturday. The service takes about 3 hours. Which time works better for you?",
      customer: "4:30 works. How much will it cost?",
      ai: "Perfect! Balayage with color is ₹4,500. I've booked you with Priya at 4:30 PM on Saturday. You'll receive a WhatsApp confirmation with all the details. Is there anything else I can help with?",
    },
    calendarBefore: [
      { time: "10:00", service: "Haircut", staff: "Priya" },
      { time: "12:00", service: "Empty", staff: "" },
      { time: "14:00", service: "Color", staff: "Priya" },
      { time: "16:00", service: "Empty", staff: "" },
    ],
    calendarAfter: [
      { time: "10:00", service: "Haircut", staff: "Priya" },
      { time: "11:30", service: "Blowout", staff: "Priya", optimized: true },
      { time: "14:00", service: "Color", staff: "Priya" },
      { time: "16:30", service: "Balayage", staff: "Priya", optimized: true },
    ],
  },
  {
    id: "spas",
    icon: Sparkles,
    name: "Spas & Wellness Centers",
    tagline: "Create a seamless wellness experience from first contact",
    description:
      "Luxury spas demand a premium experience. Our AI receptionist maintains your brand voice while handling complex multi-service bookings.",
    painPoints: [
      "Complex multi-treatment packages hard to explain",
      "Couples' appointments require double coordination",
      "Premium clients expect immediate responses",
      "Therapist specializations need careful matching",
    ],
    aiSolutions: [
      "Detailed package explanations on demand",
      "Intelligent multi-person booking coordination",
      "Instant 24/7 response with luxury tone",
      "Smart therapist matching based on preferences",
    ],
    exampleConversation: {
      customer: "We want to book a couples' massage for our anniversary next weekend. What do you recommend?",
      ai: "Happy anniversary! I'd recommend our Couples' Bliss package — it includes a 90-minute aromatherapy massage, private jacuzzi access, and champagne. We have availability Saturday at 3 PM or Sunday at 11 AM. Would either of those work for your celebration?",
      customer: "Sunday 11 AM sounds perfect. Can we request female therapists?",
      ai: "Absolutely. I've noted your preference for female therapists. Your Couples' Bliss package is confirmed for Sunday at 11 AM. The total is ₹12,000. You'll receive a WhatsApp confirmation with spa arrival guidelines. We recommend arriving 15 minutes early to enjoy the relaxation lounge.",
    },
    calendarBefore: [
      { time: "10:00", service: "Swedish", staff: "Anjali" },
      { time: "12:00", service: "Empty", staff: "" },
      { time: "13:00", service: "Empty", staff: "" },
      { time: "15:00", service: "Facial", staff: "Meera" },
    ],
    calendarAfter: [
      { time: "10:00", service: "Swedish", staff: "Anjali" },
      { time: "11:30", service: "Hot Stone", staff: "Anjali", optimized: true },
      { time: "13:00", service: "Couples'", staff: "Both", optimized: true },
      { time: "15:00", service: "Facial", staff: "Meera" },
    ],
  },
  {
    id: "clinics",
    icon: Stethoscope,
    name: "Skin, Dental & Cosmetic Clinics",
    tagline: "Professional healthcare scheduling, handled with care",
    description:
      "Medical aesthetics and dental clinics need precision scheduling and professional communication. Our AI handles sensitive inquiries with appropriate care.",
    painPoints: [
      "Patients need detailed procedure information",
      "Follow-up appointments require specific timing",
      "Insurance and payment questions are complex",
      "Emergency slots need careful management",
    ],
    aiSolutions: [
      "Comprehensive procedure FAQs built-in",
      "Smart follow-up scheduling with reminders",
      "Payment and package information on demand",
      "Priority handling for urgent cases",
    ],
    exampleConversation: {
      customer: "I'm interested in laser hair removal. How many sessions do I need and what's the cost?",
      ai: "Great question! Laser hair removal typically requires 6-8 sessions, spaced 4-6 weeks apart, for optimal results. Our full-body package is ₹45,000 for 6 sessions, or you can start with individual areas. Would you like to schedule a free consultation to discuss your specific needs?",
      customer: "Yes, I'd like a consultation this week if possible.",
      ai: "I have consultation slots available Thursday at 4 PM or Friday at 11 AM with Dr. Sharma. The consultation is complimentary and takes about 20 minutes. Which works better for you?",
    },
    calendarBefore: [
      { time: "09:00", service: "Consult", staff: "Dr. Sharma" },
      { time: "10:00", service: "Empty", staff: "" },
      { time: "11:00", service: "Laser", staff: "Dr. Sharma" },
      { time: "14:00", service: "Empty", staff: "" },
    ],
    calendarAfter: [
      { time: "09:00", service: "Consult", staff: "Dr. Sharma" },
      { time: "09:30", service: "Quick Check", staff: "Dr. Sharma", optimized: true },
      { time: "11:00", service: "Laser", staff: "Dr. Sharma" },
      { time: "14:00", service: "Facial", staff: "Dr. Patel", optimized: true },
    ],
  },
  {
    id: "others",
    icon: Building2,
    name: "Other Appointment Businesses",
    tagline: "Any business that runs on appointments, we've got you covered",
    description:
      "From fitness studios to photography sessions, any appointment-based business can benefit from an AI receptionist that never sleeps.",
    painPoints: [
      "Staff too busy serving to answer phones",
      "Irregular hours make phone coverage difficult",
      "Seasonal demand spikes overwhelm reception",
      "Repeat customers expect personalized service",
    ],
    aiSolutions: [
      "24/7 coverage regardless of business hours",
      "Scales instantly during peak periods",
      "Remembers customer preferences and history",
      "Adapts to any service-based business model",
    ],
    exampleConversation: {
      customer: "Hi, I'd like to book a personal training session for tomorrow morning.",
      ai: "Hi! I can help you with that. I see you've trained with Coach Raj before — would you like to book with him again? He has availability at 7 AM and 9 AM tomorrow.",
      customer: "7 AM with Raj would be great.",
      ai: "Perfect! I've booked your personal training session with Coach Raj tomorrow at 7 AM. Remember to bring water and wear comfortable workout clothes. See you then!",
    },
    calendarBefore: [
      { time: "07:00", service: "Empty", staff: "" },
      { time: "09:00", service: "Group Class", staff: "Raj" },
      { time: "11:00", service: "Empty", staff: "" },
      { time: "17:00", service: "PT Session", staff: "Raj" },
    ],
    calendarAfter: [
      { time: "07:00", service: "PT Session", staff: "Raj", optimized: true },
      { time: "09:00", service: "Group Class", staff: "Raj" },
      { time: "11:00", service: "PT Session", staff: "Raj", optimized: true },
      { time: "17:00", service: "PT Session", staff: "Raj" },
    ],
  },
]

export default function IndustriesPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-24 bg-ink relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
        </div>

        <div className="relative container mx-auto px-4 lg:px-8 text-center">
          <span className="text-sm font-medium text-primary mb-4 block">Industries</span>
          <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
            Built for Salons, Spas & Clinics
            <span className="text-primary"> — and Beyond</span>
          </h1>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
            A fully autonomous AI receptionist that answers calls and WhatsApp messages, books appointments, manages
            schedules, and personalizes itself to each business.
          </p>
        </div>
      </section>

      {/* Industry Selector */}
      <section className="py-8 bg-background sticky top-16 z-40 border-b border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {industries.map((industry) => (
              <a
                key={industry.id}
                href={`#${industry.id}`}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-ink/50 border border-border hover:border-primary/50 hover:bg-primary/10 transition-colors"
              >
                <industry.icon className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-foreground">{industry.name.split(" ")[0]}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Sections */}
      {industries.map((industry, index) => (
        <section
          key={industry.id}
          id={industry.id}
          className={`py-20 ${index % 2 === 0 ? "bg-background" : "bg-ink/30"}`}
        >
          <div className="container mx-auto px-4 lg:px-8">
            {/* Industry Header */}
            <div className="max-w-4xl mx-auto text-center mb-16">
              <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center mx-auto mb-6">
                <industry.icon className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">{industry.name}</h2>
              <p className="text-xl text-primary mb-4">{industry.tagline}</p>
              <p className="text-muted-foreground">{industry.description}</p>
            </div>

            {/* Pain Points vs Solutions */}
            <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
              {/* Pain Points */}
              <div className="bg-red-500/5 rounded-3xl p-8 border border-red-500/20">
                <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-red-500/20 flex items-center justify-center">
                    <Clock className="w-5 h-5 text-red-400" />
                  </div>
                  Common Pain Points
                </h3>
                <ul className="space-y-4">
                  {industry.painPoints.map((point, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-red-400 mt-2 shrink-0" />
                      <span className="text-muted-foreground">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* AI Solutions */}
              <div className="bg-primary/5 rounded-3xl p-8 border border-primary/20">
                <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                  </div>
                  How AI Solves It
                </h3>
                <ul className="space-y-4">
                  {industry.aiSolutions.map((solution, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-foreground">{solution}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Example Conversation */}
            <div className="max-w-4xl mx-auto mb-16">
              <h3 className="text-xl font-bold text-foreground mb-6 text-center">Real Conversation Example</h3>
              <div className="bg-ink rounded-3xl p-6 lg:p-8 border border-border">
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-border">
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-primary" />
                    <span className="text-sm text-muted-foreground">AI Receptionist Call</span>
                  </div>
                  <div className="flex items-center gap-2 ml-auto">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-sm text-green-400">Live</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center shrink-0">
                      <Users className="w-4 h-4 text-muted-foreground" />
                    </div>
                    <div className="bg-muted/50 rounded-2xl rounded-tl-sm px-4 py-3 max-w-md">
                      <p className="text-foreground text-sm">{industry.exampleConversation.customer}</p>
                    </div>
                  </div>
                  <div className="flex gap-4 justify-end">
                    <div className="bg-primary/20 rounded-2xl rounded-tr-sm px-4 py-3 max-w-md">
                      <p className="text-foreground text-sm">{industry.exampleConversation.ai}</p>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                      <Sparkles className="w-4 h-4 text-primary" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Calendar Before/After */}
            <div className="max-w-5xl mx-auto">
              <h3 className="text-xl font-bold text-foreground mb-6 text-center">Dynamic Slot Optimizer in Action</h3>
              <div className="grid md:grid-cols-2 gap-8">
                {/* Before */}
                <div>
                  <div className="text-center mb-4">
                    <span className="text-sm font-medium text-muted-foreground bg-muted/50 px-3 py-1 rounded-full">
                      Before: Empty Gaps
                    </span>
                  </div>
                  <div className="bg-ink rounded-2xl p-4 border border-border">
                    {industry.calendarBefore.map((slot, i) => (
                      <div
                        key={i}
                        className={`flex items-center gap-4 p-3 rounded-xl mb-2 last:mb-0 ${
                          slot.service === "Empty"
                            ? "bg-muted/20 border border-dashed border-muted"
                            : "bg-primary/10 border border-primary/20"
                        }`}
                      >
                        <span className="text-sm font-mono text-muted-foreground w-14">{slot.time}</span>
                        <span
                          className={`text-sm flex-1 ${
                            slot.service === "Empty" ? "text-muted-foreground italic" : "text-foreground"
                          }`}
                        >
                          {slot.service === "Empty" ? "Empty slot" : slot.service}
                        </span>
                        {slot.staff && <span className="text-xs text-muted-foreground">{slot.staff}</span>}
                      </div>
                    ))}
                  </div>
                </div>

                {/* After */}
                <div>
                  <div className="text-center mb-4">
                    <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                      After: Optimized Schedule
                    </span>
                  </div>
                  <div className="bg-ink rounded-2xl p-4 border border-primary/30">
                    {industry.calendarAfter.map((slot, i) => (
                      <div
                        key={i}
                        className={`flex items-center gap-4 p-3 rounded-xl mb-2 last:mb-0 ${
                          slot.optimized
                            ? "bg-gradient-to-r from-primary/20 to-accent/20 border border-primary/30"
                            : "bg-primary/10 border border-primary/20"
                        }`}
                      >
                        <span className="text-sm font-mono text-muted-foreground w-14">{slot.time}</span>
                        <span className="text-sm flex-1 text-foreground">{slot.service}</span>
                        <span className="text-xs text-muted-foreground">{slot.staff}</span>
                        {slot.optimized && (
                          <span className="text-xs text-primary bg-primary/10 px-2 py-0.5 rounded-full">AI Filled</span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="py-20 bg-ink">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Ready to Transform Your Business?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Start your 15-day free trial today. No credit card required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-ink">
              <Link href="/contact">
                Start Free Trial
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-foreground/20 text-foreground hover:bg-foreground/10 bg-transparent"
            >
              <Link href="/contact">Book Live Demo</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
