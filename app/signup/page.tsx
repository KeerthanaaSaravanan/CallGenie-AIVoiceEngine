"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useAuth } from "@/lib/auth-context"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Sparkles,
  Eye,
  EyeOff,
  ArrowRight,
  Loader2,
  Check,
  Phone,
  MessageCircle,
  Calendar,
  Brain,
  Shield,
} from "lucide-react"

export default function SignupPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    businessName: "",
    businessType: "",
  })
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState("")
  const [step, setStep] = useState(1)
  const { signup, isLoading } = useAuth()

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    setError("")
  }

  const validateStep1 = () => {
    if (!formData.name || !formData.email || !formData.phone) {
      setError("Please fill in all fields")
      return false
    }
    if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      setError("Please enter a valid email address")
      return false
    }
    if (formData.phone.length < 10) {
      setError("Please enter a valid phone number")
      return false
    }
    return true
  }

  const handleContinue = () => {
    if (step === 1 && validateStep1()) {
      setStep(2)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    if (!formData.password || formData.password.length < 6) {
      setError("Password must be at least 6 characters")
      return
    }
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match")
      return
    }
    if (!formData.businessName || !formData.businessType) {
      setError("Please fill in your business details")
      return
    }

    const result = await signup({
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      password: formData.password,
      businessName: formData.businessName,
      businessType: formData.businessType,
    })

    if (!result.success && result.error) {
      setError(result.error)
    }
  }

  const benefits = [
    { icon: Phone, text: "24/7 AI call answering" },
    { icon: MessageCircle, text: "WhatsApp automation" },
    { icon: Calendar, text: "Smart appointment booking" },
    { icon: Brain, text: "AI trained on your business" },
    { icon: Shield, text: "Enterprise-grade security" },
  ]

  return (
    <div className="min-h-screen bg-background flex">
      {/* Left Side - Branding */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-secondary/20" />
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-secondary/30 rounded-full blur-3xl animate-pulse delay-1000" />

        <div className="relative z-10 flex flex-col justify-center px-16 py-12">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 mb-12">
            <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-ink" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-white text-xl leading-tight">SalonAI</span>
              <span className="text-sm text-primary font-medium -mt-0.5">VoiceEngine</span>
            </div>
          </Link>

          {/* Feature Highlights */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="text-primary text-sm font-medium">15-Day Free Trial</span>
            </div>

            <h1 className="text-4xl font-bold text-white leading-tight">
              Start your journey to
              <br />
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                zero missed calls
              </span>
            </h1>

            <p className="text-lg text-white/70 max-w-md">
              Join hundreds of salons, spas, and clinics that never miss a booking opportunity.
            </p>

            {/* Benefits */}
            <div className="space-y-4 pt-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <benefit.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-white/80">{benefit.text}</span>
                </div>
              ))}
            </div>

            {/* Trust badges */}
            <div className="flex items-center gap-4 pt-8">
              <div className="flex items-center gap-2 text-white/50 text-sm">
                <Check className="w-4 h-4 text-primary" />
                No credit card required
              </div>
              <div className="flex items-center gap-2 text-white/50 text-sm">
                <Check className="w-4 h-4 text-primary" />
                Cancel anytime
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Signup Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          {/* Mobile Logo */}
          <div className="lg:hidden flex items-center justify-center gap-3 mb-8">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-ink" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-white text-lg leading-tight">SalonAI</span>
                <span className="text-xs text-primary font-medium -mt-0.5">VoiceEngine</span>
              </div>
            </Link>
          </div>

          <Card className="glass-card border-white/10">
            <CardHeader className="text-center pb-2">
              <CardTitle className="text-2xl font-bold text-white">Create your account</CardTitle>
              <CardDescription className="text-white/60">
                {step === 1 ? "Enter your personal details" : "Set up your business"}
              </CardDescription>

              {/* Step indicator */}
              <div className="flex items-center justify-center gap-3 pt-4">
                <div
                  className={`h-2 w-16 rounded-full transition-colors ${step >= 1 ? "gradient-primary" : "bg-white/10"}`}
                />
                <div
                  className={`h-2 w-16 rounded-full transition-colors ${step >= 2 ? "gradient-primary" : "bg-white/10"}`}
                />
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <form onSubmit={handleSubmit} className="space-y-5">
                {error && (
                  <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
                    {error}
                  </div>
                )}

                {step === 1 ? (
                  <>
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-white/80">
                        Full name
                      </Label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="John Smith"
                        value={formData.name}
                        onChange={(e) => handleChange("name", e.target.value)}
                        className="bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:border-primary focus:ring-primary/20"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-white/80">
                        Work email
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="you@business.com"
                        value={formData.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        className="bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:border-primary focus:ring-primary/20"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-white/80">
                        Phone number
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => handleChange("phone", e.target.value)}
                        className="bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:border-primary focus:ring-primary/20"
                        required
                      />
                    </div>

                    <Button
                      type="button"
                      onClick={handleContinue}
                      className="w-full gradient-primary text-ink font-semibold h-11 relative overflow-hidden group"
                    >
                      <span className="relative z-10 flex items-center gap-2">
                        Continue
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </span>
                      <div className="absolute inset-0 animate-shimmer opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Button>
                  </>
                ) : (
                  <>
                    <div className="space-y-2">
                      <Label htmlFor="businessName" className="text-white/80">
                        Business name
                      </Label>
                      <Input
                        id="businessName"
                        type="text"
                        placeholder="Glamour Studio"
                        value={formData.businessName}
                        onChange={(e) => handleChange("businessName", e.target.value)}
                        className="bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:border-primary focus:ring-primary/20"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="businessType" className="text-white/80">
                        Business type
                      </Label>
                      <Select
                        value={formData.businessType}
                        onValueChange={(value) => handleChange("businessType", value)}
                      >
                        <SelectTrigger className="bg-white/5 border-white/10 text-white">
                          <SelectValue placeholder="Select your business type" />
                        </SelectTrigger>
                        <SelectContent className="bg-card border-white/10">
                          <SelectItem value="salon">Salon & Hair Studio</SelectItem>
                          <SelectItem value="spa">Spa & Wellness Center</SelectItem>
                          <SelectItem value="clinic">Clinic (Skin/Dental/Cosmetic)</SelectItem>
                          <SelectItem value="gym">Gym & Fitness Center</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="password" className="text-white/80">
                        Password
                      </Label>
                      <div className="relative">
                        <Input
                          id="password"
                          type={showPassword ? "text" : "password"}
                          placeholder="Create a strong password"
                          value={formData.password}
                          onChange={(e) => handleChange("password", e.target.value)}
                          className="bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:border-primary focus:ring-primary/20 pr-10"
                          required
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40 hover:text-white/60 transition-colors"
                        >
                          {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                        </button>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="confirmPassword" className="text-white/80">
                        Confirm password
                      </Label>
                      <Input
                        id="confirmPassword"
                        type="password"
                        placeholder="Confirm your password"
                        value={formData.confirmPassword}
                        onChange={(e) => handleChange("confirmPassword", e.target.value)}
                        className="bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:border-primary focus:ring-primary/20"
                        required
                      />
                    </div>

                    <div className="flex gap-3">
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => setStep(1)}
                        className="flex-1 bg-white/5 border-white/10 text-white hover:bg-white/10"
                      >
                        Back
                      </Button>
                      <Button
                        type="submit"
                        disabled={isLoading}
                        className="flex-1 gradient-primary text-ink font-semibold h-11 relative overflow-hidden group"
                      >
                        {isLoading ? (
                          <Loader2 className="w-5 h-5 animate-spin" />
                        ) : (
                          <>
                            <span className="relative z-10 flex items-center gap-2">
                              Start Trial
                              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </span>
                            <div className="absolute inset-0 animate-shimmer opacity-0 group-hover:opacity-100 transition-opacity" />
                          </>
                        )}
                      </Button>
                    </div>
                  </>
                )}
              </form>

              <p className="text-center text-white/60 text-sm mt-6">
                Already have an account?{" "}
                <Link href="/login" className="text-primary hover:text-primary/80 font-medium transition-colors">
                  Sign in
                </Link>
              </p>
            </CardContent>
          </Card>

          <p className="text-center text-white/40 text-xs mt-6">
            By signing up, you agree to our{" "}
            <Link href="/terms" className="text-white/60 hover:text-white/80 underline">
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link href="/privacy" className="text-white/60 hover:text-white/80 underline">
              Privacy Policy
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
