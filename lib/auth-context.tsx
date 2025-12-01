"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { useRouter } from "next/navigation"

interface User {
  id: string
  email: string
  name: string
  phone: string
  businessName?: string
  businessType?: string
  onboardingComplete: boolean
  subscriptionStatus: "trial" | "active" | "inactive"
  trialStartDate?: string
  trialEndDate?: string
}

interface AuthContextType {
  user: User | null
  isLoading: boolean
  login: (email: string, password: string) => Promise<{ success: boolean; error?: string }>
  signup: (data: SignupData) => Promise<{ success: boolean; error?: string }>
  logout: () => void
  updateUser: (data: Partial<User>) => void
}

interface SignupData {
  name: string
  email: string
  phone: string
  password: string
  businessName: string
  businessType: string
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    // Check for existing session in localStorage
    const storedUser = localStorage.getItem("salonai_user")
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
    setIsLoading(false)
  }, [])

  const login = async (email: string, password: string) => {
    setIsLoading(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Demo validation
    if (!email || !password) {
      setIsLoading(false)
      return { success: false, error: "Please enter email and password" }
    }

    // Check if user exists in localStorage (simulating DB)
    const storedUsers = JSON.parse(localStorage.getItem("salonai_users") || "[]")
    const existingUser = storedUsers.find((u: User & { password: string }) => u.email === email)

    if (!existingUser) {
      setIsLoading(false)
      return { success: false, error: "No account found with this email" }
    }

    if (existingUser.password !== password) {
      setIsLoading(false)
      return { success: false, error: "Incorrect password" }
    }

    const { password: _, ...userWithoutPassword } = existingUser
    setUser(userWithoutPassword)
    localStorage.setItem("salonai_user", JSON.stringify(userWithoutPassword))
    setIsLoading(false)

    if (!userWithoutPassword.onboardingComplete) {
      router.push("/onboarding")
    } else {
      router.push("/dashboard")
    }

    return { success: true }
  }

  const signup = async (data: SignupData) => {
    setIsLoading(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Check if user already exists
    const storedUsers = JSON.parse(localStorage.getItem("salonai_users") || "[]")
    const existingUser = storedUsers.find((u: User) => u.email === data.email)

    if (existingUser) {
      setIsLoading(false)
      return { success: false, error: "An account with this email already exists" }
    }

    const now = new Date()
    const trialEnd = new Date(now.getTime() + 15 * 24 * 60 * 60 * 1000) // 15 days

    const newUser: User & { password: string } = {
      id: crypto.randomUUID(),
      email: data.email,
      name: data.name,
      phone: data.phone,
      password: data.password,
      businessName: data.businessName,
      businessType: data.businessType,
      onboardingComplete: false,
      subscriptionStatus: "trial",
      trialStartDate: now.toISOString(),
      trialEndDate: trialEnd.toISOString(),
    }

    storedUsers.push(newUser)
    localStorage.setItem("salonai_users", JSON.stringify(storedUsers))

    const { password: _, ...userWithoutPassword } = newUser
    setUser(userWithoutPassword)
    localStorage.setItem("salonai_user", JSON.stringify(userWithoutPassword))
    setIsLoading(false)

    router.push("/onboarding")
    return { success: true }
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem("salonai_user")
    router.push("/")
  }

  const updateUser = (data: Partial<User>) => {
    if (user) {
      const updatedUser = { ...user, ...data }
      setUser(updatedUser)
      localStorage.setItem("salonai_user", JSON.stringify(updatedUser))

      // Also update in users array
      const storedUsers = JSON.parse(localStorage.getItem("salonai_users") || "[]")
      const userIndex = storedUsers.findIndex((u: User) => u.id === user.id)
      if (userIndex !== -1) {
        storedUsers[userIndex] = { ...storedUsers[userIndex], ...data }
        localStorage.setItem("salonai_users", JSON.stringify(storedUsers))
      }
    }
  }

  return (
    <AuthContext.Provider value={{ user, isLoading, login, signup, logout, updateUser }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
