"use client"

import { useState } from "react"
import { useOnboarding, type Service } from "@/lib/onboarding-context"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Plus, Trash2, Clock, IndianRupee, Scissors, Sparkles, Heart, Leaf } from "lucide-react"

const serviceCategories = [
  { value: "hair", label: "Hair Services", icon: Scissors },
  { value: "skin", label: "Skin Care", icon: Sparkles },
  { value: "nails", label: "Nail Services", icon: Heart },
  { value: "spa", label: "Spa & Wellness", icon: Leaf },
  { value: "other", label: "Other", icon: Plus },
]

const popularServices = [
  { name: "Haircut", duration: 30, price: 500, category: "hair" },
  { name: "Hair Color", duration: 120, price: 2500, category: "hair" },
  { name: "Blowout", duration: 45, price: 800, category: "hair" },
  { name: "Facial", duration: 60, price: 1500, category: "skin" },
  { name: "Cleanup", duration: 30, price: 600, category: "skin" },
  { name: "Manicure", duration: 30, price: 400, category: "nails" },
  { name: "Pedicure", duration: 45, price: 600, category: "nails" },
  { name: "Full Body Massage", duration: 60, price: 2000, category: "spa" },
]

export function ServicesStep() {
  const { data, updateData } = useOnboarding()
  const [showForm, setShowForm] = useState(false)
  const [newService, setNewService] = useState<Partial<Service>>({
    name: "",
    duration: 30,
    price: 0,
    category: "hair",
  })

  const addService = (service: Omit<Service, "id">) => {
    const newSvc: Service = {
      id: crypto.randomUUID(),
      ...service,
    }
    updateData({ services: [...data.services, newSvc] })
  }

  const removeService = (id: string) => {
    updateData({ services: data.services.filter((s) => s.id !== id) })
  }

  const handleAddService = () => {
    if (newService.name && newService.duration && newService.price && newService.category) {
      addService(newService as Omit<Service, "id">)
      setNewService({ name: "", duration: 30, price: 0, category: "hair" })
      setShowForm(false)
    }
  }

  const getCategoryIcon = (category: string) => {
    const cat = serviceCategories.find((c) => c.value === category)
    return cat ? cat.icon : Plus
  }

  return (
    <div className="space-y-6">
      {/* Quick Add Popular Services */}
      <div>
        <h3 className="text-sm font-medium text-white/80 mb-3">Quick add popular services</h3>
        <div className="flex flex-wrap gap-2">
          {popularServices.map((service) => {
            const isAdded = data.services.some((s) => s.name === service.name)
            return (
              <Button
                key={service.name}
                variant="outline"
                size="sm"
                disabled={isAdded}
                onClick={() => addService(service)}
                className={`bg-white/5 border-white/10 text-white hover:bg-white/10 gap-2 ${
                  isAdded ? "opacity-50" : ""
                }`}
              >
                <Plus className="w-3 h-3" />
                {service.name}
              </Button>
            )
          })}
        </div>
      </div>

      {/* Services List */}
      {data.services.length > 0 && (
        <div>
          <h3 className="text-sm font-medium text-white/80 mb-3">Your services ({data.services.length})</h3>
          <div className="space-y-2">
            {data.services.map((service) => {
              const Icon = getCategoryIcon(service.category)
              return (
                <div
                  key={service.id}
                  className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/10"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium text-white">{service.name}</h4>
                      <div className="flex items-center gap-3 text-sm text-white/60">
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {service.duration} min
                        </span>
                        <span className="flex items-center gap-1">
                          <IndianRupee className="w-3 h-3" />
                          {service.price}
                        </span>
                      </div>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => removeService(service.id)}
                    className="text-white/40 hover:text-red-400 hover:bg-red-500/10"
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              )
            })}
          </div>
        </div>
      )}

      {/* Add Custom Service Form */}
      {showForm ? (
        <div className="p-4 rounded-xl bg-white/5 border border-primary/30 space-y-4">
          <h3 className="font-medium text-white">Add custom service</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label className="text-white/80">Service name</Label>
              <Input
                placeholder="e.g., Keratin Treatment"
                value={newService.name}
                onChange={(e) => setNewService({ ...newService, name: e.target.value })}
                className="bg-white/5 border-white/10 text-white"
              />
            </div>

            <div className="space-y-2">
              <Label className="text-white/80">Category</Label>
              <Select
                value={newService.category}
                onValueChange={(value) => setNewService({ ...newService, category: value })}
              >
                <SelectTrigger className="bg-white/5 border-white/10 text-white">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-card border-white/10">
                  {serviceCategories.map((cat) => (
                    <SelectItem key={cat.value} value={cat.value}>
                      {cat.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label className="text-white/80">Duration (minutes)</Label>
              <Select
                value={String(newService.duration)}
                onValueChange={(value) => setNewService({ ...newService, duration: Number.parseInt(value) })}
              >
                <SelectTrigger className="bg-white/5 border-white/10 text-white">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-card border-white/10">
                  {[15, 30, 45, 60, 90, 120, 150, 180].map((dur) => (
                    <SelectItem key={dur} value={String(dur)}>
                      {dur} minutes
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label className="text-white/80">Price (INR)</Label>
              <Input
                type="number"
                placeholder="0"
                value={newService.price || ""}
                onChange={(e) => setNewService({ ...newService, price: Number.parseInt(e.target.value) || 0 })}
                className="bg-white/5 border-white/10 text-white"
              />
            </div>
          </div>

          <div className="flex justify-end gap-2">
            <Button variant="ghost" onClick={() => setShowForm(false)} className="text-white/60 hover:text-white">
              Cancel
            </Button>
            <Button
              onClick={handleAddService}
              disabled={!newService.name || !newService.price}
              className="gradient-primary text-ink"
            >
              Add Service
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
          Add custom service
        </Button>
      )}
    </div>
  )
}
