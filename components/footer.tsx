import Link from "next/link"
import { Sparkles, Phone, Mail, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-ink text-foreground">
      <div className="container mx-auto px-4 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-ink" />
              </div>
              <div className="flex flex-col">
                <span className="font-semibold text-foreground text-lg leading-tight">SalonAI</span>
                <span className="text-xs text-primary font-medium -mt-0.5">VoiceEngine</span>
              </div>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs mb-6">
              Your 24/7 AI receptionist for calls and WhatsApp — built uniquely for your business.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                24/7 AI Receptionist
              </span>
              <span className="text-xs px-3 py-1 rounded-full bg-accent/10 text-accent border border-accent/20">
                15-Day Free Trial
              </span>
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Product</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <Link href="/features" className="hover:text-primary transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/how-it-works" className="hover:text-primary transition-colors">
                  How it Works
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-primary transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/dashboard-tour" className="hover:text-primary transition-colors">
                  Dashboard Tour
                </Link>
              </li>
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Industries</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <Link href="/industries#salons" className="hover:text-primary transition-colors">
                  Salons
                </Link>
              </li>
              <li>
                <Link href="/industries#spas" className="hover:text-primary transition-colors">
                  Spas
                </Link>
              </li>
              <li>
                <Link href="/industries#clinics" className="hover:text-primary transition-colors">
                  Clinics
                </Link>
              </li>
              <li>
                <Link href="/industries#other" className="hover:text-primary transition-colors">
                  Other
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Resources</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <Link href="/resources" className="hover:text-primary transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/resources#docs" className="hover:text-primary transition-colors">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary transition-colors">
                  Support
                </Link>
              </li>
              <li>
                <Link href="/demo" className="hover:text-primary transition-colors">
                  Book Demo
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary" />
                <a href="mailto:hello@salonai.app" className="hover:text-primary transition-colors">
                  hello@salonai.app
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-primary mt-0.5" />
                <span>Bangalore, India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-border/30 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
            <span>© 2025 SalonAI VoiceEngine. All rights reserved.</span>
            <Link href="/privacy" className="hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xs text-muted-foreground">Powered by</span>
            <div className="flex items-center gap-2 text-xs">
              <span className="px-2 py-1 rounded bg-secondary/50 text-secondary-foreground">Twilio</span>
              <span className="px-2 py-1 rounded bg-secondary/50 text-secondary-foreground">WhatsApp Cloud API</span>
              <span className="px-2 py-1 rounded bg-secondary/50 text-secondary-foreground">Razorpay</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
