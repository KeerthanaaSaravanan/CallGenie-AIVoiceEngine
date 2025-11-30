"use client"

import { useState } from "react"
import { Scissors, Sparkles, Stethoscope, Building2 } from "lucide-react"

const useCases = [
  {
    id: "salons",
    icon: Scissors,
    title: "Salons & Hair Studios",
    scenarios: [
      "Customer calls during a busy Saturday for a haircut — AI books them into the next available slot",
      "Late-night WhatsApp message asking for hair coloring prices — AI responds instantly with options",
      "Regular customer calls — AI remembers their preferred stylist and usual service",
    ],
    example: {
      customer: "Hi, can I book a haircut with Priya for Saturday around 11?",
      ai: "Hi! Priya has 11:15 AM available on Saturday. It's a 45-minute slot for ₹600. Shall I book that for you?",
    },
  },
  {
    id: "spas",
    icon: Sparkles,
    title: "Spas & Wellness",
    scenarios: [
      "Couple wants to book simultaneous massage sessions — AI finds matching slots",
      "Customer asks about package deals on WhatsApp — AI explains options and books",
      "VIP member calls — AI recognizes them and offers their preferred therapist",
    ],
    example: {
      customer: "Do you have any couples massage slots this weekend?",
      ai: "Yes! We have a 90-minute couples aromatherapy massage available Saturday at 2 PM or Sunday at 11 AM. Both include complimentary steam room access. Which works better?",
    },
  },
  {
    id: "clinics",
    icon: Stethoscope,
    title: "Skin, Dental & Cosmetic Clinics",
    scenarios: [
      "Patient needs to reschedule a consultation — AI handles it with buffer time for doctor",
      "New patient inquiry about laser treatment — AI provides info and pre-consultation booking",
      "Follow-up reminder sent via WhatsApp — patient confirms with a single tap",
    ],
    example: {
      customer: "I need to reschedule my facial appointment from Monday to later this week",
      ai: "Of course! I have Thursday at 4:30 PM or Friday at 10 AM with Dr. Mehta. Both slots have the same pricing. Which would you prefer?",
    },
  },
  {
    id: "other",
    icon: Building2,
    title: "Other Local Businesses",
    scenarios: [
      "Gym member books personal training sessions via WhatsApp at midnight",
      "Boutique customer asks about try-on appointments — AI schedules with staff",
      "Photography studio client needs multiple session booking — AI handles the complexity",
    ],
    example: {
      customer: "Can I book a fitness assessment with trainer Raj next week?",
      ai: "Raj has openings on Tuesday at 7 AM, Wednesday at 6 PM, and Friday at 8 AM. The assessment takes 60 minutes and costs ₹1,500. Which slot works for you?",
    },
  },
]

export function UseCasesSection() {
  const [activeTab, setActiveTab] = useState("salons")
  const activeCase = useCases.find((uc) => uc.id === activeTab)!

  return (
    <section className="py-20 lg:py-32 bg-ink relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="relative container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-sm font-medium text-primary mb-4 block">Use Cases</span>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance">
            Built for Appointment-Based Businesses
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See how SalonAI VoiceEngine transforms customer communication across industries.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {useCases.map((useCase) => (
            <button
              key={useCase.id}
              onClick={() => setActiveTab(useCase.id)}
              className={`flex items-center gap-2 px-5 py-3 rounded-full text-sm font-medium transition-all ${
                activeTab === useCase.id
                  ? "gradient-primary text-ink"
                  : "glass-dark text-muted-foreground hover:text-foreground"
              }`}
            >
              <useCase.icon className="w-4 h-4" />
              {useCase.title}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Scenarios */}
          <div className="glass-dark rounded-2xl p-6 lg:p-8">
            <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-3">
              <activeCase.icon className="w-6 h-6 text-primary" />
              {activeCase.title}
            </h3>
            <ul className="space-y-4">
              {activeCase.scenarios.map((scenario, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-medium text-primary">{index + 1}</span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{scenario}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Example Conversation */}
          <div className="glass-dark rounded-2xl p-6 lg:p-8">
            <h4 className="text-sm font-medium text-muted-foreground mb-6">Example Conversation</h4>
            <div className="space-y-4">
              {/* Customer Message */}
              <div className="flex justify-end">
                <div className="max-w-[80%]">
                  <p className="text-xs text-muted-foreground mb-1 text-right">Customer</p>
                  <div className="bg-secondary/30 rounded-2xl rounded-tr-md p-4">
                    <p className="text-foreground text-sm">{activeCase.example.customer}</p>
                  </div>
                </div>
              </div>

              {/* AI Response */}
              <div className="flex justify-start">
                <div className="max-w-[80%]">
                  <p className="text-xs text-primary mb-1 flex items-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    SalonAI
                  </p>
                  <div className="bg-primary/20 border border-primary/30 rounded-2xl rounded-tl-md p-4">
                    <p className="text-foreground text-sm">{activeCase.example.ai}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
