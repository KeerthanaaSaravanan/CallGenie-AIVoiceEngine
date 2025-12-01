"use client"

import { useState } from "react"
import { useOnboarding } from "@/lib/onboarding-context"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Plus, X, MessageSquare, Sparkles, Heart, Crown } from "lucide-react"

const toneOptions = [
  {
    value: "professional",
    label: "Professional",
    icon: Crown,
    description: "Formal, polished, and business-like",
    example: "Good afternoon. How may I assist you with your appointment today?",
  },
  {
    value: "friendly",
    label: "Friendly",
    icon: Heart,
    description: "Warm, approachable, and conversational",
    example: "Hi there! Great to hear from you. How can I help you today?",
  },
  {
    value: "luxury",
    label: "Luxury",
    icon: Sparkles,
    description: "Elegant, sophisticated, and premium",
    example: "Welcome to our salon. It would be our pleasure to arrange your appointment.",
  },
  {
    value: "casual",
    label: "Casual",
    icon: MessageSquare,
    description: "Relaxed, easygoing, and informal",
    example: "Hey! What's up? Looking to book something?",
  },
]

export function ToneStep() {
  const { data, updateData } = useOnboarding()
  const [newFaq, setNewFaq] = useState({ question: "", answer: "" })

  const selectTone = (tone: "professional" | "friendly" | "luxury" | "casual") => {
    updateData({ tone })
  }

  const addFaq = () => {
    if (newFaq.question.trim() && newFaq.answer.trim()) {
      updateData({ faqs: [...data.faqs, newFaq] })
      setNewFaq({ question: "", answer: "" })
    }
  }

  const removeFaq = (index: number) => {
    updateData({ faqs: data.faqs.filter((_, i) => i !== index) })
  }

  const selectedTone = toneOptions.find((t) => t.value === data.tone)

  return (
    <div className="space-y-8">
      {/* Tone Selection */}
      <div>
        <h3 className="text-sm font-medium text-white/80 mb-4">AI Voice Personality</h3>
        <p className="text-white/50 text-sm mb-4">Choose how your AI receptionist communicates with customers</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {toneOptions.map((option) => {
            const Icon = option.icon
            const isSelected = data.tone === option.value
            return (
              <button
                key={option.value}
                onClick={() => selectTone(option.value as typeof data.tone)}
                className={`p-4 rounded-xl text-left transition-all ${
                  isSelected
                    ? "bg-primary/10 border-2 border-primary"
                    : "bg-white/5 border border-white/10 hover:border-white/20"
                }`}
              >
                <div className="flex items-center gap-3 mb-2">
                  <div
                    className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                      isSelected ? "gradient-primary" : "bg-white/10"
                    }`}
                  >
                    <Icon className={`w-5 h-5 ${isSelected ? "text-ink" : "text-white/60"}`} />
                  </div>
                  <div>
                    <h4 className={`font-medium ${isSelected ? "text-white" : "text-white/80"}`}>{option.label}</h4>
                    <p className="text-xs text-white/50">{option.description}</p>
                  </div>
                </div>
              </button>
            )
          })}
        </div>

        {/* Tone Preview */}
        {selectedTone && (
          <div className="mt-4 p-4 rounded-xl bg-primary/5 border border-primary/20">
            <p className="text-xs text-primary mb-2">Example greeting:</p>
            <p className="text-white italic">"{selectedTone.example}"</p>
          </div>
        )}
      </div>

      {/* Brand Voice */}
      <div>
        <Label className="text-white/80 mb-2 block">Brand Voice Notes (optional)</Label>
        <Textarea
          placeholder="Any specific phrases, words to use or avoid, or special instructions for how your AI should communicate..."
          value={data.brandVoice}
          onChange={(e) => updateData({ brandVoice: e.target.value })}
          className="bg-white/5 border-white/10 text-white min-h-[100px]"
        />
      </div>

      {/* FAQs */}
      <div>
        <h3 className="text-sm font-medium text-white/80 mb-4">Frequently Asked Questions</h3>
        <p className="text-white/50 text-sm mb-4">Add common questions your AI should be able to answer</p>

        {data.faqs.length > 0 && (
          <div className="space-y-2 mb-4">
            {data.faqs.map((faq, index) => (
              <div key={index} className="p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <p className="text-white font-medium mb-1">Q: {faq.question}</p>
                    <p className="text-white/60 text-sm">A: {faq.answer}</p>
                  </div>
                  <button
                    onClick={() => removeFaq(index)}
                    className="text-white/40 hover:text-red-400 transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="p-4 rounded-xl bg-white/[0.02] border border-dashed border-white/10 space-y-3">
          <Input
            placeholder="Question (e.g., Do you offer parking?)"
            value={newFaq.question}
            onChange={(e) => setNewFaq({ ...newFaq, question: e.target.value })}
            className="bg-white/5 border-white/10 text-white"
          />
          <Textarea
            placeholder="Answer..."
            value={newFaq.answer}
            onChange={(e) => setNewFaq({ ...newFaq, answer: e.target.value })}
            className="bg-white/5 border-white/10 text-white min-h-[80px]"
          />
          <Button
            onClick={addFaq}
            disabled={!newFaq.question.trim() || !newFaq.answer.trim()}
            variant="outline"
            className="bg-white/5 border-white/10 text-white hover:bg-white/10"
          >
            <Plus className="w-4 h-4 mr-2" />
            Add FAQ
          </Button>
        </div>
      </div>
    </div>
  )
}
