"use client"

import { useState } from "react"
import { useOnboarding } from "@/lib/onboarding-context"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { MessageCircle, ExternalLink, Check, AlertCircle, ChevronDown, ChevronUp, Phone, Key, Hash } from "lucide-react"

export function WhatsappSetupStep() {
  const { data, updateData } = useOnboarding()
  const [showInstructions, setShowInstructions] = useState(false)

  const updateWhatsAppConfig = (updates: Partial<typeof data.whatsappConfig>) => {
    updateData({
      whatsappConfig: { ...data.whatsappConfig, ...updates },
    })
  }

  const isConfigComplete =
    data.whatsappConfig.whatsappBusinessNumber &&
    data.whatsappConfig.whatsappBusinessId &&
    data.whatsappConfig.whatsappPhoneNumberId &&
    data.whatsappConfig.whatsappApiToken

  return (
    <div className="space-y-6">
      <div className="p-4 rounded-xl bg-secondary/10 border border-secondary/20">
        <div className="flex items-start gap-3">
          <MessageCircle className="w-5 h-5 text-secondary mt-0.5" />
          <div>
            <h4 className="text-secondary font-medium">WhatsApp Business Cloud API Integration</h4>
            <p className="text-white/60 text-sm mt-1">
              Connect your WhatsApp Business to enable automated booking confirmations, reminders, and customer
              communication.
            </p>
          </div>
        </div>
      </div>

      {/* Setup Choice */}
      <div>
        <h3 className="text-lg font-medium text-white mb-4">Do you have WhatsApp Business Cloud API set up?</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <button
            onClick={() => updateWhatsAppConfig({ hasExistingSetup: true })}
            className={`p-5 rounded-xl border-2 text-left transition-all ${
              data.whatsappConfig.hasExistingSetup === true
                ? "border-primary bg-primary/10"
                : "border-white/10 bg-white/5 hover:border-white/20"
            }`}
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center">
                <Check className="w-5 h-5 text-green-400" />
              </div>
              <h4 className="font-medium text-white">Yes, I have it</h4>
            </div>
            <p className="text-white/50 text-sm">I already have WhatsApp Business Cloud API configured</p>
          </button>

          <button
            onClick={() => {
              updateWhatsAppConfig({ hasExistingSetup: false })
              setShowInstructions(true)
            }}
            className={`p-5 rounded-xl border-2 text-left transition-all ${
              data.whatsappConfig.hasExistingSetup === false
                ? "border-primary bg-primary/10"
                : "border-white/10 bg-white/5 hover:border-white/20"
            }`}
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-lg bg-amber-500/20 flex items-center justify-center">
                <AlertCircle className="w-5 h-5 text-amber-400" />
              </div>
              <h4 className="font-medium text-white">No, guide me</h4>
            </div>
            <p className="text-white/50 text-sm">I need help setting up WhatsApp Business Cloud API</p>
          </button>
        </div>
      </div>

      {/* Setup Instructions */}
      {data.whatsappConfig.hasExistingSetup === false && (
        <div className="rounded-xl border border-white/10 overflow-hidden">
          <button
            onClick={() => setShowInstructions(!showInstructions)}
            className="w-full flex items-center justify-between p-4 bg-white/5 hover:bg-white/10 transition-colors"
          >
            <span className="font-medium text-white">Setup Instructions</span>
            {showInstructions ? (
              <ChevronUp className="w-5 h-5 text-white/60" />
            ) : (
              <ChevronDown className="w-5 h-5 text-white/60" />
            )}
          </button>

          {showInstructions && (
            <div className="p-4 space-y-4 border-t border-white/10">
              <ol className="space-y-4">
                <li className="flex gap-3">
                  <span className="w-6 h-6 rounded-full bg-primary/20 text-primary text-sm flex items-center justify-center shrink-0">
                    1
                  </span>
                  <div>
                    <p className="text-white font-medium">Create a Facebook Business Manager account</p>
                    <p className="text-white/50 text-sm">Go to business.facebook.com and set up your business</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="w-6 h-6 rounded-full bg-primary/20 text-primary text-sm flex items-center justify-center shrink-0">
                    2
                  </span>
                  <div>
                    <p className="text-white font-medium">Create a WhatsApp Business App</p>
                    <p className="text-white/50 text-sm">In Meta for Developers, create a new app with WhatsApp</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="w-6 h-6 rounded-full bg-primary/20 text-primary text-sm flex items-center justify-center shrink-0">
                    3
                  </span>
                  <div>
                    <p className="text-white font-medium">Get your API credentials</p>
                    <p className="text-white/50 text-sm">Obtain your Business ID, Phone Number ID, and API Token</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="w-6 h-6 rounded-full bg-primary/20 text-primary text-sm flex items-center justify-center shrink-0">
                    4
                  </span>
                  <div>
                    <p className="text-white font-medium">Enter credentials below</p>
                    <p className="text-white/50 text-sm">Fill in the form with your WhatsApp API details</p>
                  </div>
                </li>
              </ol>

              <Button
                variant="outline"
                className="w-full bg-white/5 border-white/10 text-white hover:bg-white/10 gap-2"
                onClick={() => window.open("https://business.facebook.com/", "_blank")}
              >
                <ExternalLink className="w-4 h-4" />
                Open Meta WhatsApp Setup
              </Button>
            </div>
          )}
        </div>
      )}

      {/* API Configuration Form */}
      {data.whatsappConfig.hasExistingSetup !== null && (
        <div className="space-y-4">
          <h3 className="text-lg font-medium text-white">WhatsApp API Configuration</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label className="text-white/80 flex items-center gap-2">
                <Phone className="w-4 h-4" />
                WhatsApp Business Number
              </Label>
              <Input
                type="tel"
                placeholder="+91 98765 43210"
                value={data.whatsappConfig.whatsappBusinessNumber}
                onChange={(e) => updateWhatsAppConfig({ whatsappBusinessNumber: e.target.value })}
                className="bg-white/5 border-white/10 text-white placeholder:text-white/40"
              />
            </div>

            <div className="space-y-2">
              <Label className="text-white/80 flex items-center gap-2">
                <Hash className="w-4 h-4" />
                WhatsApp Business ID
              </Label>
              <Input
                placeholder="e.g., 123456789012345"
                value={data.whatsappConfig.whatsappBusinessId}
                onChange={(e) => updateWhatsAppConfig({ whatsappBusinessId: e.target.value })}
                className="bg-white/5 border-white/10 text-white placeholder:text-white/40"
              />
            </div>

            <div className="space-y-2">
              <Label className="text-white/80 flex items-center gap-2">
                <Hash className="w-4 h-4" />
                Phone Number ID
              </Label>
              <Input
                placeholder="e.g., 109876543210987"
                value={data.whatsappConfig.whatsappPhoneNumberId}
                onChange={(e) => updateWhatsAppConfig({ whatsappPhoneNumberId: e.target.value })}
                className="bg-white/5 border-white/10 text-white placeholder:text-white/40"
              />
            </div>

            <div className="space-y-2">
              <Label className="text-white/80 flex items-center gap-2">
                <Key className="w-4 h-4" />
                API Access Token
              </Label>
              <Input
                type="password"
                placeholder="Your long-lived access token"
                value={data.whatsappConfig.whatsappApiToken}
                onChange={(e) => updateWhatsAppConfig({ whatsappApiToken: e.target.value })}
                className="bg-white/5 border-white/10 text-white placeholder:text-white/40"
              />
            </div>
          </div>

          {/* Connection Status */}
          {isConfigComplete && (
            <div className="p-4 rounded-xl bg-green-500/10 border border-green-500/20">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center">
                  <Check className="w-5 h-5 text-green-400" />
                </div>
                <div>
                  <h4 className="text-green-400 font-medium">Configuration Complete</h4>
                  <p className="text-white/60 text-sm">Your WhatsApp Business API credentials are saved.</p>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Skip Option */}
      <div className="p-4 rounded-xl bg-white/5 border border-white/10">
        <p className="text-white/60 text-sm">
          <strong className="text-white">Note:</strong> WhatsApp integration is optional. You can skip this step and set
          it up later from your dashboard. Your AI will still handle phone calls without WhatsApp.
        </p>
      </div>
    </div>
  )
}
