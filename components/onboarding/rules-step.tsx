"use client"

import { useState } from "react"
import { useOnboarding } from "@/lib/onboarding-context"
import { Switch } from "@/components/ui/switch"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Plus, X, ShieldCheck, AlertCircle } from "lucide-react"

export function RulesStep() {
  const { data, updateData } = useOnboarding()
  const [newRule, setNewRule] = useState("")

  const toggleRule = (ruleId: string) => {
    const updatedRules = data.rules.map((r) => (r.id === ruleId ? { ...r, enabled: !r.enabled } : r))
    updateData({ rules: updatedRules })
  }

  const addCustomRule = () => {
    if (newRule.trim() && !data.customRules.includes(newRule.trim())) {
      updateData({ customRules: [...data.customRules, newRule.trim()] })
      setNewRule("")
    }
  }

  const removeCustomRule = (rule: string) => {
    updateData({ customRules: data.customRules.filter((r) => r !== rule) })
  }

  return (
    <div className="space-y-8">
      {/* Default Rules */}
      <div>
        <h3 className="text-sm font-medium text-white/80 mb-4 flex items-center gap-2">
          <ShieldCheck className="w-4 h-4" />
          Booking Rules
        </h3>
        <p className="text-white/50 text-sm mb-4">Configure how your AI receptionist handles bookings</p>

        <div className="space-y-3">
          {data.rules.map((rule) => (
            <div
              key={rule.id}
              className={`flex items-center justify-between p-4 rounded-xl transition-colors ${
                rule.enabled ? "bg-white/5 border border-white/10" : "bg-white/[0.02] border border-white/5"
              }`}
            >
              <span className={rule.enabled ? "text-white" : "text-white/40"}>{rule.rule}</span>
              <Switch
                checked={rule.enabled}
                onCheckedChange={() => toggleRule(rule.id)}
                className="data-[state=checked]:bg-primary"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Custom Rules */}
      <div>
        <h3 className="text-sm font-medium text-white/80 mb-4 flex items-center gap-2">
          <AlertCircle className="w-4 h-4" />
          Custom Rules
        </h3>
        <p className="text-white/50 text-sm mb-4">
          Add specific rules for your business (e.g., "Don't book hair coloring on Mondays")
        </p>

        <div className="flex gap-2 mb-4">
          <Input
            placeholder="Enter a custom rule..."
            value={newRule}
            onChange={(e) => setNewRule(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && addCustomRule()}
            className="bg-white/5 border-white/10 text-white flex-1"
          />
          <Button onClick={addCustomRule} disabled={!newRule.trim()} className="gradient-primary text-ink">
            <Plus className="w-4 h-4 mr-2" />
            Add
          </Button>
        </div>

        {data.customRules.length > 0 ? (
          <div className="space-y-2">
            {data.customRules.map((rule, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/10"
              >
                <span className="text-white">{rule}</span>
                <button
                  onClick={() => removeCustomRule(rule)}
                  className="text-white/40 hover:text-red-400 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-6 bg-white/[0.02] rounded-xl border border-dashed border-white/10">
            <p className="text-white/40 text-sm">No custom rules added yet</p>
          </div>
        )}
      </div>
    </div>
  )
}
