"use client"

import { useState } from "react"
import { useOnboarding } from "@/lib/onboarding-context"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Switch } from "@/components/ui/switch"
import { Calendar, Plus, X, CalendarDays } from "lucide-react"

export function HoursStep() {
  const { data, updateData } = useOnboarding()
  const [newHoliday, setNewHoliday] = useState("")

  const toggleDay = (dayIndex: number) => {
    const updatedHours = data.businessHours.map((h) => (h.day === dayIndex ? { ...h, isOpen: !h.isOpen } : h))
    updateData({ businessHours: updatedHours })
  }

  const updateTime = (dayIndex: number, field: "openTime" | "closeTime", value: string) => {
    const updatedHours = data.businessHours.map((h) => (h.day === dayIndex ? { ...h, [field]: value } : h))
    updateData({ businessHours: updatedHours })
  }

  const addHoliday = () => {
    if (newHoliday && !data.holidays.includes(newHoliday)) {
      updateData({ holidays: [...data.holidays, newHoliday] })
      setNewHoliday("")
    }
  }

  const removeHoliday = (holiday: string) => {
    updateData({ holidays: data.holidays.filter((h) => h !== holiday) })
  }

  return (
    <div className="space-y-8">
      {/* Business Hours */}
      <div>
        <h3 className="text-sm font-medium text-white/80 mb-4 flex items-center gap-2">
          <Calendar className="w-4 h-4" />
          Weekly Schedule
        </h3>
        <div className="space-y-3">
          {data.businessHours.map((day) => (
            <div
              key={day.day}
              className={`flex items-center gap-4 p-4 rounded-xl transition-colors ${
                day.isOpen ? "bg-white/5 border border-white/10" : "bg-white/[0.02] border border-white/5"
              }`}
            >
              <Switch
                checked={day.isOpen}
                onCheckedChange={() => toggleDay(day.day)}
                className="data-[state=checked]:bg-primary"
              />
              <span className={`w-24 font-medium ${day.isOpen ? "text-white" : "text-white/40"}`}>{day.dayName}</span>
              {day.isOpen ? (
                <div className="flex items-center gap-2 flex-1">
                  <Input
                    type="time"
                    value={day.openTime}
                    onChange={(e) => updateTime(day.day, "openTime", e.target.value)}
                    className="bg-white/5 border-white/10 text-white w-32"
                  />
                  <span className="text-white/40">to</span>
                  <Input
                    type="time"
                    value={day.closeTime}
                    onChange={(e) => updateTime(day.day, "closeTime", e.target.value)}
                    className="bg-white/5 border-white/10 text-white w-32"
                  />
                </div>
              ) : (
                <span className="text-white/40 text-sm">Closed</span>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Holidays */}
      <div>
        <h3 className="text-sm font-medium text-white/80 mb-4 flex items-center gap-2">
          <CalendarDays className="w-4 h-4" />
          Holidays & Closures
        </h3>
        <p className="text-white/50 text-sm mb-4">
          Add dates when your business will be closed (e.g., national holidays, annual closures)
        </p>

        <div className="flex gap-2 mb-4">
          <Input
            type="date"
            value={newHoliday}
            onChange={(e) => setNewHoliday(e.target.value)}
            className="bg-white/5 border-white/10 text-white flex-1"
          />
          <Button onClick={addHoliday} disabled={!newHoliday} className="gradient-primary text-ink">
            <Plus className="w-4 h-4 mr-2" />
            Add
          </Button>
        </div>

        {data.holidays.length > 0 ? (
          <div className="flex flex-wrap gap-2">
            {data.holidays.map((holiday) => (
              <div
                key={holiday}
                className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 border border-white/10"
              >
                <span className="text-white text-sm">
                  {new Date(holiday).toLocaleDateString("en-IN", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  })}
                </span>
                <button
                  onClick={() => removeHoliday(holiday)}
                  className="text-white/40 hover:text-red-400 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-6 bg-white/[0.02] rounded-xl border border-dashed border-white/10">
            <p className="text-white/40 text-sm">No holidays added yet</p>
          </div>
        )}
      </div>
    </div>
  )
}
