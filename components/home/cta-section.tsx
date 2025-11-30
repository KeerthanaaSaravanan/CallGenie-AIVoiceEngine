import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Play, Sparkles, Zap, Clock } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-20 lg:py-32 bg-background relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="relative container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
            <Clock className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-medium">Setup takes less than 15 minutes</span>
          </div>

          {/* Headline */}
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Activate Your AI Receptionist <span className="text-transparent bg-clip-text gradient-primary">Today</span>
          </h2>

          {/* Subheadline */}
          <p className="text-lg lg:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto text-pretty">
            A fully autonomous AI receptionist that answers calls and WhatsApp messages, books appointments, manages
            schedules, and personalizes itself to your business.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <Button size="lg" className="gradient-primary text-ink font-semibold text-base px-8 gap-2" asChild>
              <Link href="/signup">
                Start 15-Day Free Trial
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-border text-foreground gap-2 bg-transparent" asChild>
              <Link href="/demo">
                <Play className="w-4 h-4" />
                Watch 2-Min Product Video
              </Link>
            </Button>
          </div>

          {/* Trust Elements */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-primary" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-primary" />
              <span>Full access during trial</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs px-2 py-1 rounded bg-gold/20 text-gold">Razorpay</span>
              <span>Powered billing</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
