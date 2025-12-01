"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/lib/auth-context"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import {
  Sparkles,
  Phone,
  MessageCircle,
  Calendar,
  BarChart3,
  Brain,
  Settings,
  LogOut,
  Bell,
  CheckCircle2,
  Clock,
  TrendingUp,
  Zap,
} from "lucide-react"

export default function DashboardPage() {
  const router = useRouter()
  const { user, logout, isLoading } = useAuth()

  useEffect(() => {
    if (!isLoading && !user) {
      router.push("/login")
    }
  }, [user, isLoading, router])

  if (isLoading || !user) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
      </div>
    )
  }

  const trialDaysLeft = user.trialEndDate
    ? Math.max(0, Math.ceil((new Date(user.trialEndDate).getTime() - Date.now()) / (1000 * 60 * 60 * 24)))
    : 0

  const stats = [
    { label: "Calls Today", value: "24", icon: Phone, change: "+12%", color: "text-primary" },
    { label: "WhatsApp Chats", value: "38", icon: MessageCircle, change: "+8%", color: "text-secondary" },
    { label: "Bookings", value: "15", icon: Calendar, change: "+23%", color: "text-accent" },
    { label: "AI Success Rate", value: "94%", icon: Zap, change: "+2%", color: "text-primary" },
  ]

  const recentActivity = [
    { type: "call", message: "Missed call from +91 98765 43210", time: "2 min ago" },
    { type: "booking", message: "New booking: Haircut with Priya at 3:00 PM", time: "15 min ago" },
    { type: "whatsapp", message: "WhatsApp inquiry about facial packages", time: "32 min ago" },
    { type: "booking", message: "Rescheduled: Spa session moved to tomorrow", time: "1 hour ago" },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-white/10 bg-background/80 backdrop-blur-xl sticky top-0 z-50">
        <div className="container mx-auto px-4 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/dashboard" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-ink" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-white text-lg leading-tight">SalonAI</span>
                <span className="text-xs text-primary font-medium -mt-0.5">VoiceEngine</span>
              </div>
            </Link>

            {/* Right side */}
            <div className="flex items-center gap-4">
              {/* Trial Badge */}
              {user.subscriptionStatus === "trial" && (
                <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20">
                  <Clock className="w-4 h-4 text-primary" />
                  <span className="text-primary text-sm font-medium">{trialDaysLeft} days left in trial</span>
                </div>
              )}

              <Button variant="ghost" size="icon" className="text-white/60 hover:text-white">
                <Bell className="w-5 h-5" />
              </Button>

              <Button variant="ghost" size="icon" className="text-white/60 hover:text-white">
                <Settings className="w-5 h-5" />
              </Button>

              <div className="flex items-center gap-3 pl-4 border-l border-white/10">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                  <span className="text-ink font-semibold text-sm">{user.name?.charAt(0).toUpperCase()}</span>
                </div>
                <div className="hidden md:block">
                  <p className="text-white text-sm font-medium">{user.name}</p>
                  <p className="text-white/50 text-xs">{user.businessName}</p>
                </div>
                <Button variant="ghost" size="icon" onClick={logout} className="text-white/40 hover:text-red-400">
                  <LogOut className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Welcome back, {user.name?.split(" ")[0]}!</h1>
          <p className="text-white/60">Here's what's happening with your AI receptionist today.</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <Card key={index} className="glass-card border-white/10">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center`}>
                      <Icon className={`w-6 h-6 ${stat.color}`} />
                    </div>
                    <span className="text-primary text-sm font-medium flex items-center gap-1">
                      <TrendingUp className="w-3 h-3" />
                      {stat.change}
                    </span>
                  </div>
                  <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-white/50 text-sm">{stat.label}</div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* AI Status Card */}
          <Card className="glass-card border-white/10 lg:col-span-2">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <Zap className="w-5 h-5 text-primary" />
                AI Receptionist Status
              </CardTitle>
              <CardDescription className="text-white/60">
                Your AI is actively handling customer communications
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 rounded-xl bg-primary/10 border border-primary/20">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                    <span className="text-primary text-sm font-medium">Calls</span>
                  </div>
                  <p className="text-white font-medium">Active & Ready</p>
                  <p className="text-white/50 text-xs mt-1">Connected via Twilio</p>
                </div>
                <div className="p-4 rounded-xl bg-secondary/10 border border-secondary/20">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                    <span className="text-secondary text-sm font-medium">WhatsApp</span>
                  </div>
                  <p className="text-white font-medium">Active & Ready</p>
                  <p className="text-white/50 text-xs mt-1">Cloud API Connected</p>
                </div>
                <div className="p-4 rounded-xl bg-accent/10 border border-accent/20">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                    <span className="text-accent text-sm font-medium">Memory Twin</span>
                  </div>
                  <p className="text-white font-medium">Synced</p>
                  <p className="text-white/50 text-xs mt-1">Last updated 5 min ago</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card className="glass-card border-white/10">
            <CardHeader>
              <CardTitle className="text-white">Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button
                variant="outline"
                className="w-full justify-start bg-white/5 border-white/10 text-white hover:bg-white/10"
              >
                <Phone className="w-4 h-4 mr-3" />
                View Call Logs
              </Button>
              <Button
                variant="outline"
                className="w-full justify-start bg-white/5 border-white/10 text-white hover:bg-white/10"
              >
                <MessageCircle className="w-4 h-4 mr-3" />
                WhatsApp Center
              </Button>
              <Button
                variant="outline"
                className="w-full justify-start bg-white/5 border-white/10 text-white hover:bg-white/10"
              >
                <Calendar className="w-4 h-4 mr-3" />
                View Calendar
              </Button>
              <Button
                variant="outline"
                className="w-full justify-start bg-white/5 border-white/10 text-white hover:bg-white/10"
              >
                <Brain className="w-4 h-4 mr-3" />
                Edit AI Memory
              </Button>
              <Button
                variant="outline"
                className="w-full justify-start bg-white/5 border-white/10 text-white hover:bg-white/10"
              >
                <BarChart3 className="w-4 h-4 mr-3" />
                Analytics
              </Button>
            </CardContent>
          </Card>

          {/* Recent Activity */}
          <Card className="glass-card border-white/10 lg:col-span-2">
            <CardHeader>
              <CardTitle className="text-white">Recent Activity</CardTitle>
              <CardDescription className="text-white/60">
                Latest customer interactions handled by your AI
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-center gap-4 p-3 rounded-xl bg-white/5">
                    <div
                      className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                        activity.type === "call"
                          ? "bg-primary/10"
                          : activity.type === "whatsapp"
                            ? "bg-secondary/10"
                            : "bg-accent/10"
                      }`}
                    >
                      {activity.type === "call" ? (
                        <Phone className="w-5 h-5 text-primary" />
                      ) : activity.type === "whatsapp" ? (
                        <MessageCircle className="w-5 h-5 text-secondary" />
                      ) : (
                        <Calendar className="w-5 h-5 text-accent" />
                      )}
                    </div>
                    <div className="flex-1">
                      <p className="text-white text-sm">{activity.message}</p>
                      <p className="text-white/40 text-xs">{activity.time}</p>
                    </div>
                    <CheckCircle2 className="w-4 h-4 text-primary/60" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Today's Schedule */}
          <Card className="glass-card border-white/10">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <Calendar className="w-5 h-5 text-accent" />
                Today's Schedule
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {[
                  { time: "10:00 AM", service: "Haircut", client: "Rahul M.", staff: "Priya" },
                  { time: "11:30 AM", service: "Facial", client: "Sneha K.", staff: "Anita" },
                  { time: "2:00 PM", service: "Hair Color", client: "Meera S.", staff: "Priya" },
                  { time: "4:30 PM", service: "Massage", client: "Vikram P.", staff: "Ravi" },
                ].map((apt, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-white/5">
                    <div className="text-primary font-mono text-sm w-20">{apt.time}</div>
                    <div className="flex-1">
                      <p className="text-white text-sm">{apt.service}</p>
                      <p className="text-white/50 text-xs">
                        {apt.client} • {apt.staff}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
