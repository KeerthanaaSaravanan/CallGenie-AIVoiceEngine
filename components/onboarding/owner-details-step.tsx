"use client"

import { useOnboarding } from "@/lib/onboarding-context"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Building2, User, Mail, Phone, MapPin } from "lucide-react"

export function OwnerDetailsStep() {
  const { data, updateData } = useOnboarding()

  return (
    <div className="space-y-6">
      <p className="text-white/70">
        Enter your business contact details. Your primary phone number is the number your customers will call — we'll
        set up call forwarding from this number to our AI.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Owner Name */}
        <div className="space-y-2">
          <Label htmlFor="ownerName" className="text-white/80 flex items-center gap-2">
            <User className="w-4 h-4" />
            Owner Name
          </Label>
          <Input
            id="ownerName"
            type="text"
            placeholder="John Smith"
            value={data.ownerName}
            onChange={(e) => updateData({ ownerName: e.target.value })}
            className="bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:border-primary"
          />
        </div>

        {/* Business Name */}
        <div className="space-y-2">
          <Label htmlFor="businessName" className="text-white/80 flex items-center gap-2">
            <Building2 className="w-4 h-4" />
            Business Name
          </Label>
          <Input
            id="businessName"
            type="text"
            placeholder="Glamour Studio"
            value={data.businessName}
            onChange={(e) => updateData({ businessName: e.target.value })}
            className="bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:border-primary"
          />
        </div>

        {/* Business Email */}
        <div className="space-y-2">
          <Label htmlFor="businessEmail" className="text-white/80 flex items-center gap-2">
            <Mail className="w-4 h-4" />
            Business Email
          </Label>
          <Input
            id="businessEmail"
            type="email"
            placeholder="hello@glamourstudio.com"
            value={data.businessEmail}
            onChange={(e) => updateData({ businessEmail: e.target.value })}
            className="bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:border-primary"
          />
        </div>

        {/* Primary Phone */}
        <div className="space-y-2">
          <Label htmlFor="primaryPhone" className="text-white/80 flex items-center gap-2">
            <Phone className="w-4 h-4" />
            Business Phone Number
          </Label>
          <Input
            id="primaryPhone"
            type="tel"
            placeholder="+91 98765 43210"
            value={data.primaryPhone}
            onChange={(e) => updateData({ primaryPhone: e.target.value })}
            className="bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:border-primary"
          />
          <p className="text-white/50 text-xs">This is the number customers call. We'll set up forwarding later.</p>
        </div>

        {/* City */}
        <div className="space-y-2">
          <Label htmlFor="city" className="text-white/80 flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            City
          </Label>
          <Input
            id="city"
            type="text"
            placeholder="Mumbai"
            value={data.city}
            onChange={(e) => updateData({ city: e.target.value })}
            className="bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:border-primary"
          />
        </div>

        {/* Area */}
        <div className="space-y-2">
          <Label htmlFor="area" className="text-white/80 flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            Area / Locality
          </Label>
          <Input
            id="area"
            type="text"
            placeholder="Bandra West"
            value={data.area}
            onChange={(e) => updateData({ area: e.target.value })}
            className="bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:border-primary"
          />
        </div>
      </div>

      {/* Info box */}
      <div className="p-4 rounded-xl bg-secondary/10 border border-secondary/20">
        <h4 className="text-secondary font-medium mb-1">Why we need your phone number</h4>
        <p className="text-white/60 text-sm">
          Your business phone number is used to map incoming calls to your account. When a customer calls your number,
          the call is forwarded to our AI system which answers as your virtual receptionist.
        </p>
      </div>
    </div>
  )
}
