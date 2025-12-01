"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/lib/auth-context"
import { useOnboarding } from "@/lib/onboarding-context"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import Link from "next/link"
import {
  Sparkles,
  ArrowLeft,
  ArrowRight,
  Check,
  Scissors,
  Users,
  Clock,
  ShieldCheck,
  MessageSquare,
} from "lucide-react"
import { ServicesStep } from "@/components/onboarding/services-step"
import { StaffStep } from "@/components/onboarding/staff-step"
import { HoursStep } from "@/components/onboarding/hours-step"
import { RulesStep } from "@/components/onboarding/rules-step"
import { ToneStep } from "@/components/onboarding/tone-step"

const steps = [
  { id: 1, title: "Services & Prices", icon: Scissors, description: "Add your services and pricing" },
  { id: 2, title: "Staff & Timing", icon: Users, description: "Set up your team" },
  { id: 3, title: "Business Hours", icon: Clock, description: "Configure your schedule" },
  { id: 4, title: "Rules", icon: ShieldCheck, description: "Set booking rules" },
  { id: 5, title: "Tone & Voice", icon: MessageSquare, description: "Personalize your AI" },
]

export default function OnboardingPage() {
  const router = useRouter()
  const { user, updateUser, isLoading } = useAuth()
  const { currentStep, setCurrentStep, data } = useOnboarding()

  useEffect(() => {
    if (!isLoading && !user) {
      router.push("/login")
    }
  }, [user, isLoading, router])

  if (isLoading || !user) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
      </div>
    )
  }

  const progress = (currentStep / steps.length) * 100

  const handleNext = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleComplete = () => {
    updateUser({ onboardingComplete: true })
    router.push("/dashboard")
  }

  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return data.services.length > 0
      case 2:
        return data.staff.length > 0
      case 3:
        return data.businessHours.some((h) => h.isOpen)
      case 4:
        return true
      case 5:
        return data.tone !== undefined
      default:
        return false
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-white/10 bg-background/80 backdrop-blur-xl sticky top-0 z-50">
        <div className="container mx-auto px-4 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-ink" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-white text-lg leading-tight">SalonAI</span>
                <span className="text-xs text-primary font-medium -mt-0.5">VoiceEngine</span>
              </div>
            </Link>

            {/* Progress */}
            <div className="hidden md:flex items-center gap-4 flex-1 max-w-2xl mx-8">
              <Progress value={progress} className="h-2 bg-white/10" />
              <span className="text-white/60 text-sm whitespace-nowrap">
                Step {currentStep} of {steps.length}
              </span>
            </div>

            {/* Skip button */}
            <Button variant="ghost" className="text-white/60 hover:text-white" onClick={handleComplete}>
              Skip for now
            </Button>
          </div>

          {/* Mobile Progress */}
          <div className="md:hidden mt-4">
            <Progress value={progress} className="h-2 bg-white/10" />
            <span className="text-white/60 text-sm mt-2 block">
              Step {currentStep} of {steps.length}
            </span>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 lg:px-8 py-8">
        <div className="flex gap-8">
          {/* Sidebar - Steps */}
          <aside className="hidden lg:block w-72 shrink-0">
            <div className="sticky top-32 space-y-2">
              {steps.map((step) => {
                const isActive = currentStep === step.id
                const isComplete = currentStep > step.id
                const Icon = step.icon

                return (
                  <button
                    key={step.id}
                    onClick={() => isComplete && setCurrentStep(step.id)}
                    disabled={!isComplete && !isActive}
                    className={`w-full flex items-center gap-4 p-4 rounded-xl transition-all text-left ${
                      isActive
                        ? "glass-card border border-primary/30"
                        : isComplete
                          ? "glass-card border border-white/10 cursor-pointer hover:border-white/20"
                          : "opacity-50 cursor-not-allowed"
                    }`}
                  >
                    <div
                      className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                        isActive ? "gradient-primary" : isComplete ? "bg-primary/20" : "bg-white/10"
                      }`}
                    >
                      {isComplete ? (
                        <Check className={`w-5 h-5 ${isActive ? "text-ink" : "text-primary"}`} />
                      ) : (
                        <Icon className={`w-5 h-5 ${isActive ? "text-ink" : "text-white/60"}`} />
                      )}
                    </div>
                    <div>
                      <h3 className={`font-medium ${isActive ? "text-white" : "text-white/80"}`}>{step.title}</h3>
                      <p className="text-xs text-white/50">{step.description}</p>
                    </div>
                  </button>
                )
              })}
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1 min-w-0">
            <div className="glass-card border border-white/10 rounded-2xl p-6 lg:p-8">
              {/* Step Header */}
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-2">
                  {(() => {
                    const Icon = steps[currentStep - 1].icon
                    return (
                      <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center">
                        <Icon className="w-5 h-5 text-ink" />
                      </div>
                    )
                  })()}
                  <div>
                    <h1 className="text-2xl font-bold text-white">{steps[currentStep - 1].title}</h1>
                    <p className="text-white/60">{steps[currentStep - 1].description}</p>
                  </div>
                </div>
              </div>

              {/* Step Content */}
              <div className="min-h-[400px]">
                {currentStep === 1 && <ServicesStep />}
                {currentStep === 2 && <StaffStep />}
                {currentStep === 3 && <HoursStep />}
                {currentStep === 4 && <RulesStep />}
                {currentStep === 5 && <ToneStep />}
              </div>

              {/* Navigation */}
              <div className="flex items-center justify-between mt-8 pt-6 border-t border-white/10">
                <Button
                  variant="outline"
                  onClick={handlePrev}
                  disabled={currentStep === 1}
                  className="bg-white/5 border-white/10 text-white hover:bg-white/10 gap-2"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Previous
                </Button>

                {currentStep === steps.length ? (
                  <Button
                    onClick={handleComplete}
                    disabled={!canProceed()}
                    className="gradient-primary text-ink font-semibold gap-2 relative overflow-hidden group"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      Complete Setup
                      <Check className="w-4 h-4" />
                    </span>
                    <div className="absolute inset-0 animate-shimmer opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Button>
                ) : (
                  <Button
                    onClick={handleNext}
                    disabled={!canProceed()}
                    className="gradient-primary text-ink font-semibold gap-2 relative overflow-hidden group"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      Continue
                      <ArrowRight className="w-4 h-4" />
                    </span>
                    <div className="absolute inset-0 animate-shimmer opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Button>
                )}
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}
