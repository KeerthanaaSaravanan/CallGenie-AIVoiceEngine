"use client"

import { useState } from "react"
import { useOnboarding, type StaffMember, type Holiday } from "@/lib/onboarding-context"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Clock, Users, Calendar, Plus, X, Trash2 } from "lucide-react"

export function OperationsStep() {
  const { data, updateData } = useOnboarding()
  const [showStaffModal, setShowStaffModal] = useState(false)
  const [showHolidayModal, setShowHolidayModal] = useState(false)
  const [newStaff, setNewStaff] = useState<Partial<StaffMember>>({
    name: "",
    role: "",
    skills: [],
    workingDays: [1, 2, 3, 4, 5],
    startTime: "09:00",
    endTime: "18:00",
  })
  const [newHoliday, setNewHoliday] = useState({ date: "", name: "" })

  const toggleDay = (day: number) => {
    const hours = data.businessHours.map((h) => (h.day === day ? { ...h, isOpen: !h.isOpen } : h))
    updateData({ businessHours: hours })
  }

  const updateHours = (day: number, field: "openTime" | "closeTime", value: string) => {
    const hours = data.businessHours.map((h) => (h.day === day ? { ...h, [field]: value } : h))
    updateData({ businessHours: hours })
  }

  const addStaff = () => {
    if (newStaff.name && newStaff.role) {
      const staff: StaffMember = {
        id: Date.now().toString(),
        name: newStaff.name,
        role: newStaff.role,
        skills: newStaff.skills || [],
        workingDays: newStaff.workingDays || [1, 2, 3, 4, 5],
        startTime: newStaff.startTime || "09:00",
        endTime: newStaff.endTime || "18:00",
      }
      updateData({ staff: [...data.staff, staff] })
      setNewStaff({
        name: "",
        role: "",
        skills: [],
        workingDays: [1, 2, 3, 4, 5],
        startTime: "09:00",
        endTime: "18:00",
      })
      setShowStaffModal(false)
    }
  }

  const removeStaff = (id: string) => {
    updateData({ staff: data.staff.filter((s) => s.id !== id) })
  }

  const addHoliday = () => {
    if (newHoliday.date && newHoliday.name) {
      const holiday: Holiday = {
        id: Date.now().toString(),
        date: newHoliday.date,
        name: newHoliday.name,
      }
      updateData({ holidays: [...data.holidays, holiday] })
      setNewHoliday({ date: "", name: "" })
      setShowHolidayModal(false)
    }
  }

  const removeHoliday = (id: string) => {
    updateData({ holidays: data.holidays.filter((h) => h.id !== id) })
  }

  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

  return (
    <div className="space-y-6">
      <p className="text-white/70">
        Configure your business hours, staff members, and holidays. This information is crucial for accurate appointment
        scheduling.
      </p>

      <Tabs defaultValue="hours" className="w-full">
        <TabsList className="grid w-full grid-cols-3 bg-white/5 border border-white/10">
          <TabsTrigger value="hours" className="data-[state=active]:bg-primary/20 text-white">
            <Clock className="w-4 h-4 mr-2" />
            Hours
          </TabsTrigger>
          <TabsTrigger value="staff" className="data-[state=active]:bg-primary/20 text-white">
            <Users className="w-4 h-4 mr-2" />
            Staff
          </TabsTrigger>
          <TabsTrigger value="holidays" className="data-[state=active]:bg-primary/20 text-white">
            <Calendar className="w-4 h-4 mr-2" />
            Holidays
          </TabsTrigger>
        </TabsList>

        <TabsContent value="hours" className="mt-6 space-y-4">
          {data.businessHours.map((hours) => (
            <div
              key={hours.day}
              className={`flex items-center gap-4 p-4 rounded-xl transition-all ${
                hours.isOpen ? "bg-white/5 border border-white/10" : "bg-white/[0.02] border border-white/5 opacity-60"
              }`}
            >
              <Switch checked={hours.isOpen} onCheckedChange={() => toggleDay(hours.day)} />
              <span className="w-24 font-medium text-white">{hours.dayName}</span>
              {hours.isOpen && (
                <div className="flex items-center gap-2 ml-auto">
                  <Input
                    type="time"
                    value={hours.openTime}
                    onChange={(e) => updateHours(hours.day, "openTime", e.target.value)}
                    className="w-32 bg-white/5 border-white/10 text-white"
                  />
                  <span className="text-white/50">to</span>
                  <Input
                    type="time"
                    value={hours.closeTime}
                    onChange={(e) => updateHours(hours.day, "closeTime", e.target.value)}
                    className="w-32 bg-white/5 border-white/10 text-white"
                  />
                </div>
              )}
              {!hours.isOpen && <span className="ml-auto text-white/40">Closed</span>}
            </div>
          ))}
        </TabsContent>

        <TabsContent value="staff" className="mt-6 space-y-4">
          {/* Staff List */}
          {data.staff.length > 0 && (
            <div className="space-y-3">
              {data.staff.map((staff) => (
                <div
                  key={staff.id}
                  className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/10"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                      <span className="text-ink font-semibold">{staff.name.charAt(0)}</span>
                    </div>
                    <div>
                      <h4 className="text-white font-medium">{staff.name}</h4>
                      <p className="text-white/50 text-sm">{staff.role}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="hidden md:flex gap-1">
                      {dayNames.map((day, idx) => (
                        <span
                          key={day}
                          className={`w-6 h-6 text-xs flex items-center justify-center rounded ${
                            staff.workingDays.includes(idx) ? "bg-primary/20 text-primary" : "bg-white/5 text-white/30"
                          }`}
                        >
                          {day[0]}
                        </span>
                      ))}
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => removeStaff(staff.id)}
                      className="text-white/40 hover:text-red-400"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Add Staff Modal */}
          <Dialog open={showStaffModal} onOpenChange={setShowStaffModal}>
            <DialogTrigger asChild>
              <Button className="w-full gradient-primary text-ink">
                <Plus className="w-4 h-4 mr-2" />
                Add Staff Member
              </Button>
            </DialogTrigger>
            <DialogContent className="bg-card border-white/10 text-white">
              <DialogHeader>
                <DialogTitle>Add Staff Member</DialogTitle>
              </DialogHeader>
              <div className="space-y-4 pt-4">
                <div className="space-y-2">
                  <Label className="text-white/80">Name</Label>
                  <Input
                    placeholder="Staff name"
                    value={newStaff.name}
                    onChange={(e) => setNewStaff({ ...newStaff, name: e.target.value })}
                    className="bg-white/5 border-white/10 text-white"
                  />
                </div>
                <div className="space-y-2">
                  <Label className="text-white/80">Role</Label>
                  <Input
                    placeholder="e.g., Stylist, Therapist, Doctor"
                    value={newStaff.role}
                    onChange={(e) => setNewStaff({ ...newStaff, role: e.target.value })}
                    className="bg-white/5 border-white/10 text-white"
                  />
                </div>
                <div className="space-y-2">
                  <Label className="text-white/80">Working Days</Label>
                  <div className="flex gap-2">
                    {dayNames.map((day, idx) => (
                      <button
                        key={day}
                        type="button"
                        onClick={() => {
                          const days = newStaff.workingDays || []
                          const newDays = days.includes(idx) ? days.filter((d) => d !== idx) : [...days, idx]
                          setNewStaff({ ...newStaff, workingDays: newDays })
                        }}
                        className={`w-10 h-10 rounded-lg text-sm font-medium transition-all ${
                          (newStaff.workingDays || []).includes(idx)
                            ? "bg-primary text-ink"
                            : "bg-white/10 text-white/60 hover:bg-white/20"
                        }`}
                      >
                        {day}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label className="text-white/80">Start Time</Label>
                    <Input
                      type="time"
                      value={newStaff.startTime}
                      onChange={(e) => setNewStaff({ ...newStaff, startTime: e.target.value })}
                      className="bg-white/5 border-white/10 text-white"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-white/80">End Time</Label>
                    <Input
                      type="time"
                      value={newStaff.endTime}
                      onChange={(e) => setNewStaff({ ...newStaff, endTime: e.target.value })}
                      className="bg-white/5 border-white/10 text-white"
                    />
                  </div>
                </div>
                <Button onClick={addStaff} className="w-full gradient-primary text-ink">
                  Add Staff
                </Button>
              </div>
            </DialogContent>
          </Dialog>

          {data.staff.length === 0 && (
            <div className="text-center py-8 text-white/50">
              <Users className="w-12 h-12 mx-auto mb-3 opacity-50" />
              <p>No staff members added yet</p>
              <p className="text-sm">Add your team members to enable booking assignments</p>
            </div>
          )}
        </TabsContent>

        <TabsContent value="holidays" className="mt-6 space-y-4">
          {/* Holiday List */}
          {data.holidays.length > 0 && (
            <div className="space-y-3">
              {data.holidays.map((holiday) => (
                <div
                  key={holiday.id}
                  className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/10"
                >
                  <div>
                    <h4 className="text-white font-medium">{holiday.name}</h4>
                    <p className="text-white/50 text-sm">{new Date(holiday.date).toLocaleDateString()}</p>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => removeHoliday(holiday.id)}
                    className="text-white/40 hover:text-red-400"
                  >
                    <X className="w-4 h-4" />
                  </Button>
                </div>
              ))}
            </div>
          )}

          {/* Add Holiday Modal */}
          <Dialog open={showHolidayModal} onOpenChange={setShowHolidayModal}>
            <DialogTrigger asChild>
              <Button className="w-full gradient-primary text-ink">
                <Plus className="w-4 h-4 mr-2" />
                Add Holiday
              </Button>
            </DialogTrigger>
            <DialogContent className="bg-card border-white/10 text-white">
              <DialogHeader>
                <DialogTitle>Add Holiday</DialogTitle>
              </DialogHeader>
              <div className="space-y-4 pt-4">
                <div className="space-y-2">
                  <Label className="text-white/80">Holiday Name</Label>
                  <Input
                    placeholder="e.g., Diwali, Christmas"
                    value={newHoliday.name}
                    onChange={(e) => setNewHoliday({ ...newHoliday, name: e.target.value })}
                    className="bg-white/5 border-white/10 text-white"
                  />
                </div>
                <div className="space-y-2">
                  <Label className="text-white/80">Date</Label>
                  <Input
                    type="date"
                    value={newHoliday.date}
                    onChange={(e) => setNewHoliday({ ...newHoliday, date: e.target.value })}
                    className="bg-white/5 border-white/10 text-white"
                  />
                </div>
                <Button onClick={addHoliday} className="w-full gradient-primary text-ink">
                  Add Holiday
                </Button>
              </div>
            </DialogContent>
          </Dialog>

          {data.holidays.length === 0 && (
            <div className="text-center py-8 text-white/50">
              <Calendar className="w-12 h-12 mx-auto mb-3 opacity-50" />
              <p>No holidays added yet</p>
              <p className="text-sm">Add holidays when your business will be closed</p>
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  )
}
