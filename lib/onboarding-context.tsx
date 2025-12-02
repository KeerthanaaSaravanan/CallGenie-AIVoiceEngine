"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

export interface Service {
  id: string
  name: string
  duration: number // in minutes - VERY IMPORTANT for booking
  price: number
  category: string
  gender?: "unisex" | "female" | "male"
  staffSkillRequired?: string // e.g., "junior", "senior", "therapist"
}

export interface StaffMember {
  id: string
  name: string
  role: string
  skills: string[] // services they can perform
  maxSimultaneousCustomers?: number
  workingDays: number[] // 0-6 (Sun-Sat)
  startTime: string
  endTime: string
}

export interface BusinessHours {
  day: number
  dayName: string
  isOpen: boolean
  openTime: string
  closeTime: string
  breakStart?: string
  breakEnd?: string
}

export interface Holiday {
  id: string
  date: string
  name: string
}

export interface BusinessRule {
  id: string
  rule: string
  enabled: boolean
}

export interface WhatsAppConfig {
  hasExistingSetup: boolean
  whatsappBusinessNumber: string
  whatsappBusinessId: string
  whatsappPhoneNumberId: string
  whatsappApiToken: string
  isConnected: boolean
}

export interface OnboardingData {
  // Step 1: Business Type
  businessType: "salon" | "spa" | "clinic" | "other" | null

  // Step 2: Owner / Business Details
  ownerName: string
  businessName: string
  businessEmail: string
  primaryPhone: string // This is the client's main number customers call
  city: string
  area: string

  // Step 3: Business Hours & Staff
  businessHours: BusinessHours[]
  holidays: Holiday[]
  staff: StaffMember[]

  // Step 4: Service Menu
  services: Service[]

  // Step 5: AI Script & Personality
  aiTone: "friendly" | "luxury" | "professional" | "casual" | "hyper-energetic"
  aiGreeting: string
  businessRules: string[]
  faqOverrides: { question: string; answer: string }[]
  walkInPolicy: string
  cancellationPolicy: string
  parkingInfo: string

  // Step 6: WhatsApp Business Cloud API
  whatsappConfig: WhatsAppConfig

  // Meta
  onboardingStep: number
  isComplete: boolean
}

interface OnboardingContextType {
  data: OnboardingData
  currentStep: number
  setCurrentStep: (step: number) => void
  updateData: (updates: Partial<OnboardingData>) => void
  resetData: () => void
  saveToStorage: () => void
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

const defaultData: OnboardingData = {
  // Step 1
  businessType: null,

  // Step 2
  ownerName: "",
  businessName: "",
  businessEmail: "",
  primaryPhone: "",
  city: "",
  area: "",

  // Step 3
  businessHours: defaultBusinessHours,
  holidays: [],
  staff: [],

  // Step 4
  services: [],

  // Step 5
  aiTone: "friendly",
  aiGreeting: "",
  businessRules: [],
  faqOverrides: [],
  walkInPolicy: "",
  cancellationPolicy: "",
  parkingInfo: "",

  // Step 6
  whatsappConfig: {
    hasExistingSetup: false,
    whatsappBusinessNumber: "",
    whatsappBusinessId: "",
    whatsappPhoneNumberId: "",
    whatsappApiToken: "",
    isConnected: false,
  },

  // Meta
  onboardingStep: 1,
  isComplete: false,
}

const OnboardingContext = createContext<OnboardingContextType | undefined>(undefined)

export function OnboardingProvider({ children }: { children: ReactNode }) {
  const [data, setData] = useState<OnboardingData>(defaultData)
  const [currentStep, setCurrentStep] = useState(1)

  // Load from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem("salonai_onboarding")
    if (stored) {
      try {
        const parsed = JSON.parse(stored)
        setData({ ...defaultData, ...parsed })
        setCurrentStep(parsed.onboardingStep || 1)
      } catch (e) {
        console.error("Failed to parse onboarding data", e)
      }
    }
  }, [])

  const updateData = (updates: Partial<OnboardingData>) => {
    setData((prev) => {
      const newData = { ...prev, ...updates }
      localStorage.setItem("salonai_onboarding", JSON.stringify(newData))
      return newData
    })
  }

  const saveToStorage = () => {
    localStorage.setItem("salonai_onboarding", JSON.stringify({ ...data, onboardingStep: currentStep }))
  }

  const resetData = () => {
    setData(defaultData)
    setCurrentStep(1)
    localStorage.removeItem("salonai_onboarding")
  }

  return (
    <OnboardingContext.Provider
      value={{
        data,
        currentStep,
        setCurrentStep: (step) => {
          setCurrentStep(step)
          updateData({ onboardingStep: step })
        },
        updateData,
        resetData,
        saveToStorage,
      }}
    >
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
