import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  Phone,
  MessageCircle,
  Calendar,
  BarChart3,
  Brain,
  CreditCard,
  Settings,
  ArrowRight,
  Check,
  Play,
  Volume2,
  Download,
  Search,
  Filter,
  ChevronDown,
  Users,
  Zap,
  Star,
} from "lucide-react"

export default function DashboardTourPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-32 bg-ink relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
        </div>

        <div className="relative container mx-auto px-4 lg:px-8 text-center">
          <span className="text-sm font-medium text-primary mb-4 block">Product Tour</span>
          <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
            See the AI Receptionist in Action
          </h1>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty mb-8">
            A visual walkthrough of your complete dashboard — from call logs to analytics to billing.
          </p>
          <Button size="lg" className="gradient-primary text-ink font-semibold gap-2" asChild>
            <Link href="/signup">
              Start Free Trial
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Call Center View */}
      <section className="py-20 lg:py-24 bg-background border-b border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center">
              <Phone className="w-6 h-6 text-ink" />
            </div>
            <div>
              <h2 className="text-2xl lg:text-3xl font-bold text-foreground">Call Center View</h2>
              <p className="text-muted-foreground">Track every call with full transcripts and recordings</p>
            </div>
          </div>

          {/* Call Center Mock */}
          <div className="rounded-2xl border border-border bg-card overflow-hidden">
            {/* Toolbar */}
            <div className="flex items-center justify-between p-4 border-b border-border bg-secondary/30">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-background border border-border">
                  <Search className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">Search calls...</span>
                </div>
                <button className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-background border border-border text-sm text-muted-foreground">
                  <Filter className="w-4 h-4" />
                  Filters
                </button>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">Today</span>
                <ChevronDown className="w-4 h-4 text-muted-foreground" />
              </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-secondary/20">
                  <tr>
                    <th className="text-left p-4 text-sm font-medium text-muted-foreground">Caller</th>
                    <th className="text-left p-4 text-sm font-medium text-muted-foreground">Status</th>
                    <th className="text-left p-4 text-sm font-medium text-muted-foreground">Outcome</th>
                    <th className="text-left p-4 text-sm font-medium text-muted-foreground">Duration</th>
                    <th className="text-left p-4 text-sm font-medium text-muted-foreground">Time</th>
                    <th className="text-left p-4 text-sm font-medium text-muted-foreground">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      name: "Priya Sharma",
                      phone: "+91 98765 43210",
                      status: "Answered",
                      outcome: "Booked",
                      duration: "2:34",
                      time: "10:32 AM",
                    },
                    {
                      name: "Rahul Mehta",
                      phone: "+91 87654 32109",
                      status: "Answered",
                      outcome: "Info",
                      duration: "1:45",
                      time: "10:15 AM",
                    },
                    {
                      name: "Anita Verma",
                      phone: "+91 76543 21098",
                      status: "Answered",
                      outcome: "Rescheduled",
                      duration: "3:12",
                      time: "9:48 AM",
                    },
                    {
                      name: "Unknown",
                      phone: "+91 65432 10987",
                      status: "Missed",
                      outcome: "-",
                      duration: "-",
                      time: "9:30 AM",
                    },
                    {
                      name: "Vikram Singh",
                      phone: "+91 54321 09876",
                      status: "Answered",
                      outcome: "Complaint",
                      duration: "5:21",
                      time: "9:12 AM",
                    },
                  ].map((call, i) => (
                    <tr key={i} className="border-t border-border hover:bg-secondary/10 transition-colors">
                      <td className="p-4">
                        <div>
                          <p className="font-medium text-foreground">{call.name}</p>
                          <p className="text-xs text-muted-foreground">{call.phone}</p>
                        </div>
                      </td>
                      <td className="p-4">
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-medium ${
                            call.status === "Answered"
                              ? "bg-primary/10 text-primary"
                              : "bg-destructive/10 text-destructive"
                          }`}
                        >
                          {call.status}
                        </span>
                      </td>
                      <td className="p-4">
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-medium ${
                            call.outcome === "Booked"
                              ? "bg-primary/10 text-primary"
                              : call.outcome === "Info"
                                ? "bg-accent/10 text-accent"
                                : call.outcome === "Rescheduled"
                                  ? "bg-gold/10 text-gold"
                                  : call.outcome === "Complaint"
                                    ? "bg-destructive/10 text-destructive"
                                    : "bg-secondary text-muted-foreground"
                          }`}
                        >
                          {call.outcome}
                        </span>
                      </td>
                      <td className="p-4 text-sm text-muted-foreground">{call.duration}</td>
                      <td className="p-4 text-sm text-muted-foreground">{call.time}</td>
                      <td className="p-4">
                        <div className="flex items-center gap-2">
                          <button className="p-1.5 rounded-lg hover:bg-secondary/50 text-muted-foreground hover:text-primary transition-colors">
                            <Play className="w-4 h-4" />
                          </button>
                          <button className="p-1.5 rounded-lg hover:bg-secondary/50 text-muted-foreground hover:text-primary transition-colors">
                            <Download className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Transcript Preview */}
            <div className="p-4 border-t border-border bg-secondary/10">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <button className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                    <Play className="w-5 h-5 text-ink" />
                  </button>
                  <div className="flex-1 h-8 bg-primary/10 rounded-full flex items-center px-4">
                    <div className="flex gap-0.5 flex-1">
                      {[...Array(50)].map((_, i) => (
                        <div
                          key={i}
                          className="w-1 bg-primary/50 rounded-full"
                          style={{ height: `${Math.random() * 20 + 8}px` }}
                        />
                      ))}
                    </div>
                  </div>
                  <span className="text-xs text-muted-foreground">2:34</span>
                </div>
                <button className="px-3 py-1.5 rounded-lg bg-background border border-border text-sm text-foreground">
                  View Transcript
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp Center View */}
      <section className="py-20 lg:py-24 bg-ink border-b border-border/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-xl bg-[#25D366] flex items-center justify-center">
              <MessageCircle className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-2xl lg:text-3xl font-bold text-foreground">WhatsApp Center View</h2>
              <p className="text-muted-foreground">Manage all WhatsApp conversations in one place</p>
            </div>
          </div>

          {/* WhatsApp Center Mock */}
          <div className="rounded-2xl border border-border/30 glass-dark overflow-hidden">
            <div className="grid lg:grid-cols-12 min-h-[500px]">
              {/* Chat List */}
              <div className="lg:col-span-4 border-r border-border/30">
                <div className="p-4 border-b border-border/30">
                  <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-ink-light border border-border/30">
                    <Search className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">Search chats...</span>
                  </div>
                </div>
                <div className="divide-y divide-border/30">
                  {[
                    {
                      name: "Priya Sharma",
                      message: "Thanks! See you Saturday",
                      time: "10:45 AM",
                      unread: 0,
                      active: true,
                    },
                    {
                      name: "Rahul Mehta",
                      message: "What are your facial prices?",
                      time: "10:32 AM",
                      unread: 1,
                      active: false,
                    },
                    { name: "Anita Verma", message: "Can I reschedule?", time: "9:55 AM", unread: 0, active: false },
                    {
                      name: "Meera Singh",
                      message: "Confirmed for tomorrow",
                      time: "Yesterday",
                      unread: 0,
                      active: false,
                    },
                  ].map((chat, i) => (
                    <div
                      key={i}
                      className={`p-4 cursor-pointer transition-colors ${chat.active ? "bg-primary/10" : "hover:bg-ink-light"}`}
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-secondary/30 flex items-center justify-center">
                          <span className="text-sm font-medium text-foreground">
                            {chat.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between">
                            <p className="font-medium text-foreground truncate">{chat.name}</p>
                            <span className="text-xs text-muted-foreground">{chat.time}</span>
                          </div>
                          <p className="text-sm text-muted-foreground truncate">{chat.message}</p>
                        </div>
                        {chat.unread > 0 && (
                          <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center">
                            <span className="text-xs text-ink font-medium">{chat.unread}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Chat View */}
              <div className="lg:col-span-5 border-r border-border/30 flex flex-col">
                <div className="p-4 border-b border-border/30 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-secondary/30 flex items-center justify-center">
                      <span className="text-sm font-medium text-foreground">PS</span>
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Priya Sharma</p>
                      <p className="text-xs text-muted-foreground">+91 98765 43210</p>
                    </div>
                  </div>
                </div>

                <div className="flex-1 p-4 space-y-4 overflow-y-auto">
                  <div className="flex justify-end">
                    <div className="max-w-[70%] bg-[#DCF8C6] rounded-xl rounded-tr-md p-3">
                      <p className="text-sm text-ink">Hi, I want to book a haircut for Saturday</p>
                      <span className="text-xs text-ink/60 mt-1 block text-right">10:30 AM</span>
                    </div>
                  </div>
                  <div className="flex justify-start">
                    <div className="max-w-[70%] bg-ink-light rounded-xl rounded-tl-md p-3">
                      <p className="text-sm text-foreground">Hi Priya! I have these slots available on Saturday:</p>
                      <div className="flex flex-wrap gap-2 mt-2">
                        <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs">11:15 AM</span>
                        <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs">2:30 PM</span>
                        <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs">4:00 PM</span>
                      </div>
                      <span className="text-xs text-muted-foreground mt-2 block">10:31 AM</span>
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <div className="max-w-[70%] bg-[#DCF8C6] rounded-xl rounded-tr-md p-3">
                      <p className="text-sm text-ink">11:15 works!</p>
                      <span className="text-xs text-ink/60 mt-1 block text-right">10:32 AM</span>
                    </div>
                  </div>
                  <div className="flex justify-start">
                    <div className="max-w-[70%] bg-ink-light rounded-xl rounded-tl-md p-3">
                      <p className="text-sm text-foreground">
                        Perfect! Booked: Haircut with Priya on Saturday at 11:15 AM. See you then!
                      </p>
                      <span className="text-xs text-muted-foreground mt-2 block">10:32 AM</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Customer Info */}
              <div className="lg:col-span-3 p-4">
                <h4 className="font-medium text-foreground mb-4">Customer Info</h4>
                <div className="space-y-4">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 rounded-full bg-secondary/30 flex items-center justify-center mx-auto mb-2">
                      <span className="text-xl font-medium text-foreground">PS</span>
                    </div>
                    <p className="font-medium text-foreground">Priya Sharma</p>
                    <p className="text-sm text-muted-foreground">Regular Customer</p>
                  </div>
                  <div className="space-y-3">
                    <div className="p-3 rounded-lg bg-ink-light">
                      <p className="text-xs text-muted-foreground mb-1">Phone</p>
                      <p className="text-sm text-foreground">+91 98765 43210</p>
                    </div>
                    <div className="p-3 rounded-lg bg-ink-light">
                      <p className="text-xs text-muted-foreground mb-1">Total Visits</p>
                      <p className="text-sm text-foreground">12</p>
                    </div>
                    <div className="p-3 rounded-lg bg-ink-light">
                      <p className="text-xs text-muted-foreground mb-1">Labels</p>
                      <div className="flex flex-wrap gap-1 mt-1">
                        <span className="px-2 py-0.5 rounded-full bg-primary/10 text-primary text-xs">VIP</span>
                        <span className="px-2 py-0.5 rounded-full bg-accent/10 text-accent text-xs">Regular</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Calendar View */}
      <section className="py-20 lg:py-24 bg-background border-b border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center">
              <Calendar className="w-6 h-6 text-accent" />
            </div>
            <div>
              <h2 className="text-2xl lg:text-3xl font-bold text-foreground">Calendar View</h2>
              <p className="text-muted-foreground">Multi-staff scheduling with smart optimization</p>
            </div>
          </div>

          {/* Calendar Mock */}
          <div className="rounded-2xl border border-border bg-card overflow-hidden">
            {/* Calendar Header */}
            <div className="flex items-center justify-between p-4 border-b border-border">
              <div className="flex items-center gap-4">
                <h3 className="font-semibold text-foreground">December 2024</h3>
                <div className="flex items-center gap-1">
                  <button className="px-3 py-1.5 rounded-lg bg-primary text-ink text-sm font-medium">Day</button>
                  <button className="px-3 py-1.5 rounded-lg text-muted-foreground text-sm hover:bg-secondary/50">
                    Week
                  </button>
                  <button className="px-3 py-1.5 rounded-lg text-muted-foreground text-sm hover:bg-secondary/50">
                    Staff
                  </button>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button className="p-2 rounded-lg hover:bg-secondary/50 text-muted-foreground">
                  <ChevronDown className="w-4 h-4 rotate-90" />
                </button>
                <span className="text-sm font-medium text-foreground">Saturday, Dec 7</span>
                <button className="p-2 rounded-lg hover:bg-secondary/50 text-muted-foreground">
                  <ChevronDown className="w-4 h-4 -rotate-90" />
                </button>
              </div>
            </div>

            {/* Calendar Grid */}
            <div className="p-4">
              <div className="grid grid-cols-4 gap-4">
                {/* Time Column */}
                <div className="space-y-2">
                  <div className="h-12"></div>
                  {[
                    "9:00 AM",
                    "10:00 AM",
                    "11:00 AM",
                    "12:00 PM",
                    "1:00 PM",
                    "2:00 PM",
                    "3:00 PM",
                    "4:00 PM",
                    "5:00 PM",
                  ].map((time) => (
                    <div key={time} className="h-16 flex items-start justify-end pr-4">
                      <span className="text-xs text-muted-foreground">{time}</span>
                    </div>
                  ))}
                </div>

                {/* Staff Columns */}
                {["Priya", "Rahul", "Meera"].map((staff, staffIndex) => (
                  <div key={staff} className="space-y-2">
                    <div className="h-12 flex items-center justify-center">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full gradient-primary flex items-center justify-center">
                          <span className="text-xs text-ink font-medium">{staff[0]}</span>
                        </div>
                        <span className="text-sm font-medium text-foreground">{staff}</span>
                      </div>
                    </div>
                    <div className="relative h-[576px] bg-secondary/10 rounded-lg">
                      {/* Appointments */}
                      {staffIndex === 0 && (
                        <>
                          <div className="absolute top-0 left-1 right-1 h-24 bg-primary/20 border-l-4 border-primary rounded-lg p-2">
                            <p className="text-xs font-medium text-foreground">Haircut</p>
                            <p className="text-xs text-muted-foreground">Priya S.</p>
                          </div>
                          <div className="absolute top-32 left-1 right-1 h-32 bg-accent/20 border-l-4 border-accent rounded-lg p-2">
                            <p className="text-xs font-medium text-foreground">Hair Coloring</p>
                            <p className="text-xs text-muted-foreground">Anita V.</p>
                          </div>
                          <div className="absolute top-80 left-1 right-1 h-24 bg-primary/20 border-l-4 border-primary rounded-lg p-2">
                            <p className="text-xs font-medium text-foreground">Haircut</p>
                            <p className="text-xs text-muted-foreground">Rahul M.</p>
                          </div>
                        </>
                      )}
                      {staffIndex === 1 && (
                        <>
                          <div className="absolute top-16 left-1 right-1 h-16 bg-gold/20 border-l-4 border-gold rounded-lg p-2">
                            <p className="text-xs font-medium text-foreground">Beard Trim</p>
                            <p className="text-xs text-muted-foreground">Vikram S.</p>
                          </div>
                          <div className="absolute top-48 left-1 right-1 h-24 bg-primary/20 border-l-4 border-primary rounded-lg p-2">
                            <p className="text-xs font-medium text-foreground">Haircut</p>
                            <p className="text-xs text-muted-foreground">Meera S.</p>
                          </div>
                        </>
                      )}
                      {staffIndex === 2 && (
                        <>
                          <div className="absolute top-0 left-1 right-1 h-32 bg-accent/20 border-l-4 border-accent rounded-lg p-2">
                            <p className="text-xs font-medium text-foreground">Gold Facial</p>
                            <p className="text-xs text-muted-foreground">Priya K.</p>
                          </div>
                          <div className="absolute top-64 left-1 right-1 h-24 bg-primary/20 border-l-4 border-primary rounded-lg p-2">
                            <p className="text-xs font-medium text-foreground">Cleanup</p>
                            <p className="text-xs text-muted-foreground">Anita V.</p>
                          </div>
                        </>
                      )}
                      {/* Optimized Slot Indicator */}
                      <div className="absolute top-[416px] left-1 right-1 h-16 border-2 border-dashed border-primary rounded-lg flex items-center justify-center">
                        <div className="flex items-center gap-1 text-xs text-primary">
                          <Zap className="w-3 h-3" />
                          <span>Optimized Slot</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Legend */}
            <div className="flex items-center justify-between p-4 border-t border-border bg-secondary/10">
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded bg-primary" />
                  <span className="text-xs text-muted-foreground">Haircut</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded bg-accent" />
                  <span className="text-xs text-muted-foreground">Facial/Color</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded bg-gold" />
                  <span className="text-xs text-muted-foreground">Quick Service</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded border-2 border-dashed border-primary" />
                  <span className="text-xs text-muted-foreground">AI Suggested</span>
                </div>
              </div>
              <Button size="sm" variant="outline">
                + Add Booking
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Analytics Dashboard */}
      <section className="py-20 lg:py-24 bg-ink border-b border-border/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-xl bg-gold/20 flex items-center justify-center">
              <BarChart3 className="w-6 h-6 text-gold" />
            </div>
            <div>
              <h2 className="text-2xl lg:text-3xl font-bold text-foreground">Analytics Dashboard</h2>
              <p className="text-muted-foreground">Track performance and identify opportunities</p>
            </div>
          </div>

          {/* Analytics Mock */}
          <div className="grid lg:grid-cols-4 gap-6 mb-8">
            {[
              { label: "Total Calls", value: "847", change: "+12%", icon: Phone },
              { label: "Bookings Made", value: "623", change: "+18%", icon: Calendar },
              { label: "AI Success Rate", value: "94%", change: "+3%", icon: Zap },
              { label: "Returning Customers", value: "67%", change: "+5%", icon: Users },
            ].map((stat, i) => (
              <div key={i} className="glass-dark rounded-xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <stat.icon className="w-5 h-5 text-primary" />
                  <span className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary">{stat.change}</span>
                </div>
                <p className="text-3xl font-bold text-foreground mb-1">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            {/* Peak Hours Chart */}
            <div className="glass-dark rounded-xl p-6">
              <h4 className="font-semibold text-foreground mb-6">Peak Hours</h4>
              <div className="flex items-end justify-between h-48 gap-2">
                {[
                  { hour: "9AM", value: 30 },
                  { hour: "10AM", value: 45 },
                  { hour: "11AM", value: 80 },
                  { hour: "12PM", value: 60 },
                  { hour: "1PM", value: 40 },
                  { hour: "2PM", value: 55 },
                  { hour: "3PM", value: 90 },
                  { hour: "4PM", value: 85 },
                  { hour: "5PM", value: 70 },
                  { hour: "6PM", value: 50 },
                ].map((item, i) => (
                  <div key={i} className="flex-1 flex flex-col items-center gap-2">
                    <div
                      className={`w-full rounded-t-lg ${item.value > 75 ? "bg-primary" : "bg-primary/40"}`}
                      style={{ height: `${item.value * 1.8}px` }}
                    />
                    <span className="text-xs text-muted-foreground">{item.hour}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Top Services */}
            <div className="glass-dark rounded-xl p-6">
              <h4 className="font-semibold text-foreground mb-6">Top Services</h4>
              <div className="space-y-4">
                {[
                  { service: "Haircut & Styling", bookings: 245, percentage: 85 },
                  { service: "Gold Facial", bookings: 128, percentage: 65 },
                  { service: "Hair Coloring", bookings: 96, percentage: 50 },
                  { service: "Manicure & Pedicure", bookings: 84, percentage: 42 },
                  { service: "Cleanup", bookings: 70, percentage: 35 },
                ].map((item, i) => (
                  <div key={i}>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm text-foreground">{item.service}</span>
                      <span className="text-sm text-muted-foreground">{item.bookings} bookings</span>
                    </div>
                    <div className="h-2 bg-ink-light rounded-full overflow-hidden">
                      <div className="h-full gradient-primary rounded-full" style={{ width: `${item.percentage}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Memory Twin Editor */}
      <section className="py-20 lg:py-24 bg-background border-b border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center">
              <Brain className="w-6 h-6 text-accent" />
            </div>
            <div>
              <h2 className="text-2xl lg:text-3xl font-bold text-foreground">AI Memory Twin Editor</h2>
              <p className="text-muted-foreground">Customize your AI&apos;s knowledge and personality</p>
            </div>
          </div>

          {/* Editor Mock */}
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Tone */}
            <div className="rounded-xl border border-border bg-card p-6">
              <h4 className="font-medium text-foreground mb-4 flex items-center gap-2">
                <Volume2 className="w-4 h-4 text-primary" />
                Brand Tone
              </h4>
              <div className="space-y-3">
                {["Casual", "Friendly", "Professional", "Luxury"].map((tone, i) => (
                  <button
                    key={tone}
                    className={`w-full p-3 rounded-lg text-left text-sm transition-colors ${
                      i === 2
                        ? "bg-primary/10 border-2 border-primary text-primary"
                        : "bg-secondary/30 border border-border text-muted-foreground hover:bg-secondary/50"
                    }`}
                  >
                    {tone}
                    {i === 2 && <Check className="w-4 h-4 float-right" />}
                  </button>
                ))}
              </div>
            </div>

            {/* Services */}
            <div className="rounded-xl border border-border bg-card p-6">
              <h4 className="font-medium text-foreground mb-4 flex items-center gap-2">
                <Star className="w-4 h-4 text-primary" />
                Services
              </h4>
              <div className="space-y-2">
                {[
                  { name: "Haircut & Styling", price: "₹600", duration: "45 min" },
                  { name: "Gold Facial", price: "₹2,000", duration: "60 min" },
                  { name: "Hair Coloring", price: "₹3,500", duration: "120 min" },
                ].map((service, i) => (
                  <div key={i} className="p-3 rounded-lg bg-secondary/30 flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-foreground">{service.name}</p>
                      <p className="text-xs text-muted-foreground">{service.duration}</p>
                    </div>
                    <span className="text-sm text-primary">{service.price}</span>
                  </div>
                ))}
                <button className="w-full p-3 rounded-lg border-2 border-dashed border-border text-sm text-muted-foreground hover:border-primary hover:text-primary transition-colors">
                  + Add Service
                </button>
              </div>
            </div>

            {/* FAQs & Rules */}
            <div className="rounded-xl border border-border bg-card p-6">
              <h4 className="font-medium text-foreground mb-4 flex items-center gap-2">
                <Settings className="w-4 h-4 text-primary" />
                Rules & FAQs
              </h4>
              <div className="space-y-2">
                {[
                  "No hair coloring on Mondays",
                  "VIP clients get priority slots",
                  "30-min buffer after color services",
                ].map((rule, i) => (
                  <div key={i} className="p-3 rounded-lg bg-secondary/30 flex items-center gap-2">
                    <Check className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-sm text-foreground">{rule}</span>
                  </div>
                ))}
                <button className="w-full p-3 rounded-lg border-2 border-dashed border-border text-sm text-muted-foreground hover:border-primary hover:text-primary transition-colors">
                  + Add Rule
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Billing & System Status */}
      <section className="py-20 lg:py-24 bg-ink">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Billing */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gold/20 flex items-center justify-center">
                  <CreditCard className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-foreground">Billing & Subscription</h2>
                  <p className="text-muted-foreground">Powered by Razorpay</p>
                </div>
              </div>

              <div className="glass-dark rounded-xl p-6">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <span className="text-xs px-2 py-1 rounded-full bg-primary/20 text-primary mb-2 inline-block">
                      Growth Plan
                    </span>
                    <p className="text-3xl font-bold text-foreground">
                      ₹2,999<span className="text-lg text-muted-foreground">/month</span>
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-muted-foreground">Next billing</p>
                    <p className="text-foreground font-medium">Jan 7, 2025</p>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between p-3 rounded-lg bg-ink-light">
                    <span className="text-sm text-muted-foreground">Call minutes used</span>
                    <span className="text-sm text-foreground">847 / 1,000</span>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-lg bg-ink-light">
                    <span className="text-sm text-muted-foreground">WhatsApp messages</span>
                    <span className="text-sm text-foreground">1,234 / 2,000</span>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-lg bg-ink-light">
                    <span className="text-sm text-muted-foreground">Staff supported</span>
                    <span className="text-sm text-foreground">3 / 5</span>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Button variant="outline" className="flex-1 border-border/50 bg-transparent">
                    Manage Plan
                  </Button>
                  <Button className="flex-1 gradient-primary text-ink font-semibold">Upgrade</Button>
                </div>
              </div>
            </div>

            {/* System Status */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                  <Settings className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-foreground">System Status</h2>
                  <p className="text-muted-foreground">Real-time connection status</p>
                </div>
              </div>

              <div className="glass-dark rounded-xl p-6 space-y-4">
                {[
                  { name: "AI Receptionist", status: "Active", statusColor: "primary" },
                  { name: "Twilio Calls", status: "Connected", statusColor: "primary" },
                  { name: "WhatsApp API", status: "Connected", statusColor: "primary" },
                  { name: "Calendar Sync", status: "Active", statusColor: "primary" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between p-4 rounded-lg bg-ink-light">
                    <div className="flex items-center gap-3">
                      <div className={`w-2 h-2 rounded-full bg-${item.statusColor} animate-pulse`} />
                      <span className="text-foreground">{item.name}</span>
                    </div>
                    <span className={`text-sm text-${item.statusColor}`}>{item.status}</span>
                  </div>
                ))}

                <div className="pt-4 border-t border-border/30">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Last synced</span>
                    <span className="text-sm text-foreground">Just now</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-32 bg-background">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">Ready to See It in Action?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Start your 15-day free trial and experience the full dashboard yourself.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gradient-primary text-ink font-semibold gap-2" asChild>
              <Link href="/signup">
                Start Free Trial
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-border text-foreground bg-transparent" asChild>
              <Link href="/demo">Book Live Demo</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
