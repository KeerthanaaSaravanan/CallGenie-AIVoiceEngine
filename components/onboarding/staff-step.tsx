"use client"

import { useState } from "react"
import { useOnboarding, type StaffMember } from "@/lib/onboarding-context"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Plus, Trash2, User, Clock } from "lucide-react"

const roles = [
  { value: "stylist", label: "Stylist" },
  { value: "therapist", label: "Therapist" },
  { value: "technician", label: "Technician" },
  { value: "manager", label: "Manager" },
  { value: "receptionist", label: "Receptionist" },
]

const weekDays = [
  { value: 0, label: "Sun" },
  { value: 1, label: "Mon" },
  { value: 2, label: "Tue" },
  { value: 3, label: "Wed" },
  { value: 4, label: "Thu" },
  { value: 5, label: "Fri" },
  { value: 6, label: "Sat" },
]

export function StaffStep() {
  const { data, updateData } = useOnboarding()
  const [showForm, setShowForm] = useState(false)
  const [newStaff, setNewStaff] = useState<Partial<StaffMember>>({
    name: "",
    role: "stylist",
    services: [],
    workingDays: [1, 2, 3, 4, 5],
    startTime: "09:00",
    endTime: "18:00",
  })

  const addStaff = () => {
    if (newStaff.name && newStaff.role) {
      const staff: StaffMember = {
        id: crypto.randomUUID(),
        name: newStaff.name,
        role: newStaff.role,
        services: newStaff.services || [],
        workingDays: newStaff.workingDays || [1, 2, 3, 4, 5],
        startTime: newStaff.startTime || "09:00",
        endTime: newStaff.endTime || "18:00",
      }
      updateData({ staff: [...data.staff, staff] })
      setNewStaff({
        name: "",
        role: "stylist",
        services: [],
        workingDays: [1, 2, 3, 4, 5],
        startTime: "09:00",
        endTime: "18:00",
      })
      setShowForm(false)
    }
  }

  const removeStaff = (id: string) => {
    updateData({ staff: data.staff.filter((s) => s.id !== id) })
  }

  const toggleWorkingDay = (day: number) => {
    const days = newStaff.workingDays || []
    if (days.includes(day)) {
      setNewStaff({ ...newStaff, workingDays: days.filter((d) => d !== day) })
    } else {
      setNewStaff({ ...newStaff, workingDays: [...days, day].sort() })
    }
  }

  const toggleService = (serviceId: string) => {
    const services = newStaff.services || []
    if (services.includes(serviceId)) {
      setNewStaff({ ...newStaff, services: services.filter((s) => s !== serviceId) })
    } else {
      setNewStaff({ ...newStaff, services: [...services, serviceId] })
    }
  }

  return (
    <div className="space-y-6">
      {/* Staff List */}
      {data.staff.length > 0 && (
        <div>
          <h3 className="text-sm font-medium text-white/80 mb-3">Your team ({data.staff.length})</h3>
          <div className="space-y-2">
            {data.staff.map((staff) => (
              <div
                key={staff.id}
                className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/10"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                    <User className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-white">{staff.name}</h4>
                    <div className="flex items-center gap-3 text-sm text-white/60">
                      <span className="capitalize">{staff.role}</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {staff.startTime} - {staff.endTime}
                      </span>
                    </div>
                    <div className="flex gap-1 mt-1">
                      {weekDays.map((day) => (
                        <span
                          key={day.value}
                          className={`text-xs px-1.5 py-0.5 rounded ${
                            staff.workingDays.includes(day.value)
                              ? "bg-primary/20 text-primary"
                              : "bg-white/5 text-white/30"
                          }`}
                        >
                          {day.label}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => removeStaff(staff.id)}
                  className="text-white/40 hover:text-red-400 hover:bg-red-500/10"
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Add Staff Form */}
      {showForm ? (
        <div className="p-4 rounded-xl bg-white/5 border border-primary/30 space-y-4">
          <h3 className="font-medium text-white">Add team member</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label className="text-white/80">Name</Label>
              <Input
                placeholder="e.g., Priya Sharma"
                value={newStaff.name}
                onChange={(e) => setNewStaff({ ...newStaff, name: e.target.value })}
                className="bg-white/5 border-white/10 text-white"
              />
            </div>

            <div className="space-y-2">
              <Label className="text-white/80">Role</Label>
              <Select value={newStaff.role} onValueChange={(value) => setNewStaff({ ...newStaff, role: value })}>
                <SelectTrigger className="bg-white/5 border-white/10 text-white">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-card border-white/10">
                  {roles.map((role) => (
                    <SelectItem key={role.value} value={role.value}>
                      {role.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label className="text-white/80">Start time</Label>
              <Input
                type="time"
                value={newStaff.startTime}
                onChange={(e) => setNewStaff({ ...newStaff, startTime: e.target.value })}
                className="bg-white/5 border-white/10 text-white"
              />
            </div>

            <div className="space-y-2">
              <Label className="text-white/80">End time</Label>
              <Input
                type="time"
                value={newStaff.endTime}
                onChange={(e) => setNewStaff({ ...newStaff, endTime: e.target.value })}
                className="bg-white/5 border-white/10 text-white"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label className="text-white/80">Working days</Label>
            <div className="flex gap-2">
              {weekDays.map((day) => (
                <button
                  key={day.value}
                  type="button"
                  onClick={() => toggleWorkingDay(day.value)}
                  className={`w-10 h-10 rounded-lg text-sm font-medium transition-colors ${
                    newStaff.workingDays?.includes(day.value)
                      ? "gradient-primary text-ink"
                      : "bg-white/5 text-white/60 hover:bg-white/10"
                  }`}
                >
                  {day.label}
                </button>
              ))}
            </div>
          </div>

          {data.services.length > 0 && (
            <div className="space-y-2">
              <Label className="text-white/80">Services (optional)</Label>
              <div className="flex flex-wrap gap-2">
                {data.services.map((service) => (
                  <label
                    key={service.id}
                    className={`flex items-center gap-2 px-3 py-2 rounded-lg cursor-pointer transition-colors ${
                      newStaff.services?.includes(service.id)
                        ? "bg-primary/20 text-primary border border-primary/30"
                        : "bg-white/5 text-white/70 border border-white/10 hover:bg-white/10"
                    }`}
                  >
                    <Checkbox
                      checked={newStaff.services?.includes(service.id)}
                      onCheckedChange={() => toggleService(service.id)}
                      className="hidden"
                    />
                    {service.name}
                  </label>
                ))}
              </div>
            </div>
          )}

          <div className="flex justify-end gap-2">
            <Button variant="ghost" onClick={() => setShowForm(false)} className="text-white/60 hover:text-white">
              Cancel
            </Button>
            <Button onClick={addStaff} disabled={!newStaff.name} className="gradient-primary text-ink">
              Add Team Member
            </Button>
          </div>
        </div>
      ) : (
        <Button
          variant="outline"
          onClick={() => setShowForm(true)}
          className="w-full bg-white/5 border-white/10 border-dashed text-white hover:bg-white/10 gap-2 h-12"
        >
          <Plus className="w-4 h-4" />
          Add team member
        </Button>
      )}

      {data.staff.length === 0 && !showForm && (
        <div className="text-center py-8">
          <User className="w-12 h-12 text-white/20 mx-auto mb-3" />
          <p className="text-white/60">Add your team members to assign them to services</p>
        </div>
      )}
    </div>
  )
}
