"use client"

import { useState } from "react"
import { useOnboarding } from "@/lib/onboarding-context"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Plus, Trash2, MessageCircle, Sparkles, Crown, Briefcase, Zap, Coffee } from "lucide-react"

const toneOptions = [
  {
    id: "friendly",
    name: "Friendly",
    description: "Warm, approachable, and conversational",
    icon: Coffee,
    example: "Hey there! Thanks for calling Glamour Studio. How can I help you today?",
    color: "from-green-500 to-emerald-500",
  },
  {
    id: "luxury",
    name: "Luxury",
    description: "Elegant, sophisticated, and premium",
    icon: Crown,
    example: "Good afternoon, welcome to Glamour Studio. How may I assist you with your beauty needs today?",
    color: "from-amber-500 to-yellow-500",
  },
  {
    id: "professional",
    name: "Professional",
    description: "Formal, efficient, and business-like",
    icon: Briefcase,
    example: "Thank you for calling Glamour Studio. How may I assist you?",
    color: "from-blue-500 to-indigo-500",
  },
  {
    id: "casual",
    name: "Casual",
    description: "Relaxed, friendly, and informal",
    icon: Sparkles,
    example: "Hi! You've reached Glamour Studio. What can I do for you?",
    color: "from-pink-500 to-rose-500",
  },
  {
    id: "hyper-energetic",
    name: "Hyper-Energetic",
    description: "Enthusiastic, upbeat, and exciting",
    icon: Zap,
    example: "Hello and welcome to Glamour Studio! We're SO excited you called! How can we make your day amazing?",
    color: "from-purple-500 to-violet-500",
  },
]

export function AiPersonalityStep() {
  const { data, updateData } = useOnboarding()
  const [newFaq, setNewFaq] = useState({ question: "", answer: "" })
  const [newRule, setNewRule] = useState("")

  const addFaq = () => {
    if (newFaq.question && newFaq.answer) {
      updateData({ faqOverrides: [...data.faqOverrides, newFaq] })
      setNewFaq({ question: "", answer: "" })
    }
  }

  const removeFaq = (index: number) => {
    updateData({ faqOverrides: data.faqOverrides.filter((_, i) => i !== index) })
  }

  const addRule = () => {
    if (newRule.trim()) {
      updateData({ businessRules: [...data.businessRules, newRule.trim()] })
      setNewRule("")
    }
  }

  const removeRule = (index: number) => {
    updateData({ businessRules: data.businessRules.filter((_, i) => i !== index) })
  }

  const selectedTone = toneOptions.find((t) => t.id === data.aiTone)

  return (
    <div className="space-y-8">
      {/* Tone Selection */}
      <div>
        <h3 className="text-lg font-medium text-white mb-2">AI Receptionist Tone</h3>
        <p className="text-white/60 text-sm mb-4">
          Choose how your AI receptionist should sound when talking to customers.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {toneOptions.map((tone) => {
            const Icon = tone.icon
            const isSelected = data.aiTone === tone.id

            return (
              <button
                key={tone.id}
                onClick={() => updateData({ aiTone: tone.id as typeof data.aiTone })}
                className={`relative p-4 rounded-xl border-2 text-left transition-all ${
                  isSelected ? "border-primary bg-primary/10" : "border-white/10 bg-white/5 hover:border-white/20"
                }`}
              >
                {isSelected && (
                  <div className="absolute top-2 right-2 w-5 h-5 rounded-full bg-primary flex items-center justify-center">
                    <svg className="w-3 h-3 text-ink" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                )}
                <div
                  className={`w-10 h-10 rounded-lg bg-gradient-to-br ${tone.color} flex items-center justify-center mb-3`}
                >
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <h4 className="font-medium text-white">{tone.name}</h4>
                <p className="text-white/50 text-xs mt-1">{tone.description}</p>
              </button>
            )
          })}
        </div>

        {/* Example Preview */}
        {selectedTone && (
          <div className="mt-4 p-4 rounded-xl bg-white/5 border border-white/10">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                <MessageCircle className="w-4 h-4 text-primary" />
              </div>
              <div>
                <p className="text-white/40 text-xs mb-1">AI Greeting Example:</p>
                <p className="text-white">&ldquo;{selectedTone.example}&rdquo;</p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Custom Greeting */}
      <div>
        <Label className="text-white/80 text-base">Custom Greeting Script</Label>
        <p className="text-white/50 text-sm mb-3">Write a custom greeting for your AI receptionist to use.</p>
        <Textarea
          placeholder={`e.g., "Welcome to ${data.businessName || "your business"}! I'm your virtual receptionist. How can I help you today?"`}
          value={data.aiGreeting}
          onChange={(e) => updateData({ aiGreeting: e.target.value })}
          className="bg-white/5 border-white/10 text-white placeholder:text-white/40 min-h-[100px]"
        />
      </div>

      {/* Business Rules */}
      <div>
        <Label className="text-white/80 text-base">Business Rules & Policies</Label>
        <p className="text-white/50 text-sm mb-3">
          Add special rules for your AI to follow (e.g., &ldquo;No hair color on Mondays&rdquo;).
        </p>

        {data.businessRules.length > 0 && (
          <div className="space-y-2 mb-3">
            {data.businessRules.map((rule, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/10"
              >
                <span className="text-white text-sm">{rule}</span>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => removeRule(index)}
                  className="text-white/40 hover:text-red-400 h-8 w-8"
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>
            ))}
          </div>
        )}

        <div className="flex gap-2">
          <Input
            placeholder="e.g., No hair coloring appointments on Mondays"
            value={newRule}
            onChange={(e) => setNewRule(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && addRule()}
            className="bg-white/5 border-white/10 text-white placeholder:text-white/40"
          />
          <Button onClick={addRule} disabled={!newRule.trim()} className="gradient-primary text-ink shrink-0">
            <Plus className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Quick Info Fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label className="text-white/80">Parking Information</Label>
          <Input
            placeholder="e.g., Free parking available behind the building"
            value={data.parkingInfo}
            onChange={(e) => updateData({ parkingInfo: e.target.value })}
            className="bg-white/5 border-white/10 text-white placeholder:text-white/40"
          />
        </div>
        <div className="space-y-2">
          <Label className="text-white/80">Walk-in Policy</Label>
          <Input
            placeholder="e.g., Walk-ins welcome, subject to availability"
            value={data.walkInPolicy}
            onChange={(e) => updateData({ walkInPolicy: e.target.value })}
            className="bg-white/5 border-white/10 text-white placeholder:text-white/40"
          />
        </div>
        <div className="space-y-2 md:col-span-2">
          <Label className="text-white/80">Cancellation Policy</Label>
          <Input
            placeholder="e.g., Please cancel at least 2 hours before your appointment"
            value={data.cancellationPolicy}
            onChange={(e) => updateData({ cancellationPolicy: e.target.value })}
            className="bg-white/5 border-white/10 text-white placeholder:text-white/40"
          />
        </div>
      </div>

      {/* FAQ Overrides */}
      <div>
        <Label className="text-white/80 text-base">Custom FAQs</Label>
        <p className="text-white/50 text-sm mb-3">Add common questions and answers for your AI to use.</p>

        {data.faqOverrides.length > 0 && (
          <div className="space-y-2 mb-4">
            {data.faqOverrides.map((faq, index) => (
              <div key={index} className="p-3 rounded-lg bg-white/5 border border-white/10">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1">
                    <p className="text-primary text-sm font-medium">Q: {faq.question}</p>
                    <p className="text-white/70 text-sm mt-1">A: {faq.answer}</p>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => removeFaq(index)}
                    className="text-white/40 hover:text-red-400 h-8 w-8 shrink-0"
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="p-4 rounded-xl bg-white/5 border border-dashed border-white/20 space-y-3">
          <Input
            placeholder="Question (e.g., Do you offer bridal packages?)"
            value={newFaq.question}
            onChange={(e) => setNewFaq({ ...newFaq, question: e.target.value })}
            className="bg-white/5 border-white/10 text-white placeholder:text-white/40"
          />
          <Input
            placeholder="Answer (e.g., Yes! We offer complete bridal packages starting at ₹25,000)"
            value={newFaq.answer}
            onChange={(e) => setNewFaq({ ...newFaq, answer: e.target.value })}
            className="bg-white/5 border-white/10 text-white placeholder:text-white/40"
          />
          <Button
            onClick={addFaq}
            disabled={!newFaq.question || !newFaq.answer}
            className="w-full gradient-primary text-ink"
          >
            <Plus className="w-4 h-4 mr-2" />
            Add FAQ
          </Button>
        </div>
      </div>
    </div>
  )
}
