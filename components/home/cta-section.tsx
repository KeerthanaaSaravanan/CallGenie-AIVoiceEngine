import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Play, Clock, Check } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-24 lg:py-32 bg-ink relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/15 rounded-full blur-[150px]" />
        <div className="absolute top-1/3 left-1/3 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[100px]" />
      </div>

      <div className="relative container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="glass-dark rounded-3xl p-8 lg:p-16 border border-white/10 text-center relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-40 h-40 bg-primary/20 rounded-full blur-[80px]" />
            <div className="absolute bottom-0 right-0 w-40 h-40 bg-accent/20 rounded-full blur-[80px]" />

            <div className="relative z-10">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
                <Clock className="w-4 h-4 text-primary" />
                <span className="text-sm text-primary font-medium">Setup takes less than 15 minutes</span>
              </div>

              {/* Headline */}
              <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6 tracking-tight">
                Activate Your AI Receptionist <span className="gradient-text">Today</span>
              </h2>

              {/* Subheadline */}
              <p className="text-lg lg:text-xl text-white/60 mb-10 max-w-2xl mx-auto leading-relaxed">
                A fully autonomous AI receptionist that answers calls and WhatsApp messages, books appointments, manages
                schedules, and personalizes itself to your business.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
                <Button
                  size="lg"
                  className="gradient-primary text-ink font-semibold text-base px-8 gap-2 h-14 group relative overflow-hidden"
                  asChild
                >
                  <Link href="/contact">
                    <span className="relative z-10 flex items-center gap-2">
                      Start 15-Day Free Trial
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                    <div className="absolute inset-0 animate-shimmer opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/20 text-white bg-white/5 backdrop-blur-sm gap-2 h-14 hover:bg-white/10"
                  asChild
                >
                  <Link href="/demo">
                    <Play className="w-4 h-4" />
                    Watch 2-Min Product Video
                  </Link>
                </Button>
              </div>

              {/* Trust Elements */}
              <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-white/50">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-primary" />
                  <span>No credit card required</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-primary" />
                  <span>Full access during trial</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs px-2.5 py-1 rounded-full bg-gold/20 text-gold font-medium">Razorpay</span>
                  <span>Powered billing</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
