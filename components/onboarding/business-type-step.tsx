"use client"

import { useOnboarding } from "@/lib/onboarding-context"
import { Scissors, Flower2, Stethoscope, Building2 } from "lucide-react"

const businessTypes = [
  {
    id: "salon",
    name: "Salon & Hair Studio",
    description: "Haircuts, styling, coloring, treatments",
    icon: Scissors,
    color: "from-pink-500 to-rose-500",
  },
  {
    id: "spa",
    name: "Spa & Wellness Center",
    description: "Massages, facials, body treatments",
    icon: Flower2,
    color: "from-purple-500 to-violet-500",
  },
  {
    id: "clinic",
    name: "Clinic",
    description: "Skin, dental, cosmetic treatments",
    icon: Stethoscope,
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: "other",
    name: "Other Business",
    description: "Boutiques, gyms, studios & more",
    icon: Building2,
    color: "from-amber-500 to-orange-500",
  },
]

export function BusinessTypeStep() {
  const { data, updateData } = useOnboarding()

  return (
    <div className="space-y-6">
      <p className="text-white/70">
        Select the type of business you operate. This helps us customize your AI receptionist for your specific
        industry.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {businessTypes.map((type) => {
          const Icon = type.icon
          const isSelected = data.businessType === type.id

          return (
            <button
              key={type.id}
              onClick={() => updateData({ businessType: type.id as typeof data.businessType })}
              className={`relative p-6 rounded-2xl border-2 text-left transition-all duration-300 group ${
                isSelected
                  ? "border-primary bg-primary/10"
                  : "border-white/10 bg-white/5 hover:border-white/20 hover:bg-white/10"
              }`}
            >
              {/* Selected indicator */}
              {isSelected && (
                <div className="absolute top-4 right-4 w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                  <svg className="w-4 h-4 text-ink" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              )}

              {/* Icon */}
              <div
                className={`w-14 h-14 rounded-xl bg-gradient-to-br ${type.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
              >
                <Icon className="w-7 h-7 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-lg font-semibold text-white mb-1">{type.name}</h3>
              <p className="text-white/60 text-sm">{type.description}</p>
            </button>
          )
        })}
      </div>

      {data.businessType && (
        <div className="p-4 rounded-xl bg-primary/10 border border-primary/20">
          <p className="text-primary text-sm">
            <strong>Great choice!</strong> We&apos;ll customize the onboarding experience for your{" "}
            {businessTypes.find((t) => t.id === data.businessType)?.name.toLowerCase()}.
          </p>
        </div>
      )}
    </div>
  )
}
