"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

export interface Service {
  id: string
  name: string
  duration: number
  price: number
  category: string
}

export interface StaffMember {
  id: string
  name: string
  role: string
  services: string[]
  workingDays: number[]
  startTime: string
  endTime: string
}

export interface BusinessHours {
  day: number
  dayName: string
  isOpen: boolean
  openTime: string
  closeTime: string
}

export interface BusinessRule {
  id: string
  rule: string
  enabled: boolean
}

export interface OnboardingData {
  // Step 1: Services & Prices
  services: Service[]

  // Step 2: Staff & Timing
  staff: StaffMember[]

  // Step 3: Business Hours & Holidays
  businessHours: BusinessHours[]
  holidays: string[]

  // Step 4: Rules
  rules: BusinessRule[]
  customRules: string[]

  // Step 5: Tone & Personality
  tone: "professional" | "friendly" | "luxury" | "casual"
  personality: {
    greeting: string
    farewell: string
    handling: string
  }
  brandVoice: string
  faqs: { question: string; answer: string }[]
}

interface OnboardingContextType {
  data: OnboardingData
  currentStep: number
  setCurrentStep: (step: number) => void
  updateData: (updates: Partial<OnboardingData>) => void
  resetData: () => void
}

const defaultBusinessHours: BusinessHours[] = [
  { day: 0, dayName: "Sunday", isOpen: false, openTime: "09:00", closeTime: "18:00" },
  { day: 1, dayName: "Monday", isOpen: true, openTime: "09:00", closeTime: "18:00" },
  { day: 2, dayName: "Tuesday", isOpen: true, openTime: "09:00", closeTime: "18:00" },
  { day: 3, dayName: "Wednesday", isOpen: true, openTime: "09:00", closeTime: "18:00" },
  { day: 4, dayName: "Thursday", isOpen: true, openTime: "09:00", closeTime: "18:00" },
  { day: 5, dayName: "Friday", isOpen: true, openTime: "09:00", closeTime: "18:00" },
  { day: 6, dayName: "Saturday", isOpen: true, openTime: "10:00", closeTime: "16:00" },
]

const defaultRules: BusinessRule[] = [
  { id: "1", rule: "Require 24-hour advance booking", enabled: true },
  { id: "2", rule: "Allow same-day cancellations", enabled: false },
  { id: "3", rule: "Send reminder 2 hours before appointment", enabled: true },
  { id: "4", rule: "Auto-assign staff based on availability", enabled: true },
  { id: "5", rule: "Block back-to-back appointments for complex services", enabled: true },
]

const defaultData: OnboardingData = {
  services: [],
  staff: [],
  businessHours: defaultBusinessHours,
  holidays: [],
  rules: defaultRules,
  customRules: [],
  tone: "friendly",
  personality: {
    greeting: "warm",
    farewell: "friendly",
    handling: "empathetic",
  },
  brandVoice: "",
  faqs: [],
}

const OnboardingContext = createContext<OnboardingContextType | undefined>(undefined)

export function OnboardingProvider({ children }: { children: ReactNode }) {
  const [data, setData] = useState<OnboardingData>(defaultData)
  const [currentStep, setCurrentStep] = useState(1)

  const updateData = (updates: Partial<OnboardingData>) => {
    setData((prev) => ({ ...prev, ...updates }))
  }

  const resetData = () => {
    setData(defaultData)
    setCurrentStep(1)
  }

  return (
    <OnboardingContext.Provider value={{ data, currentStep, setCurrentStep, updateData, resetData }}>
      {children}
    </OnboardingContext.Provider>
  )
}

export function useOnboarding() {
  const context = useContext(OnboardingContext)
  if (context === undefined) {
    throw new Error("useOnboarding must be used within an OnboardingProvider")
  }
  return context
}
