import { Sparkles, Phone, Mail, MapPin } from "lucide-react"
import { ScrollLink } from "./scroll-link"

export function Footer() {
  return (
    <footer className="bg-ink text-foreground">
      <div className="container mx-auto px-4 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="col-span-2">
            <ScrollLink href="/" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-ink" />
              </div>
              <div className="flex flex-col">
                <span className="font-semibold text-foreground text-lg leading-tight">CallGenie</span>
                <span className="text-xs text-primary font-medium -mt-0.5">AIVoiceEngine</span>
              </div>
            </ScrollLink>
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
                <ScrollLink href="/features" className="hover:text-primary transition-colors">
                  Features
                </ScrollLink>
              </li>
              <li>
                <ScrollLink href="/how-it-works" className="hover:text-primary transition-colors">
                  How it Works
                </ScrollLink>
              </li>
              <li>
                <ScrollLink href="/pricing" className="hover:text-primary transition-colors">
                  Pricing
                </ScrollLink>
              </li>
              <li>
                <ScrollLink href="/dashboard-tour" className="hover:text-primary transition-colors">
                  Dashboard Tour
                </ScrollLink>
              </li>
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Industries</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <ScrollLink href="/industries#salons" className="hover:text-primary transition-colors">
                  Salons
                </ScrollLink>
              </li>
              <li>
                <ScrollLink href="/industries#spas" className="hover:text-primary transition-colors">
                  Spas
                </ScrollLink>
              </li>
              <li>
                <ScrollLink href="/industries#clinics" className="hover:text-primary transition-colors">
                  Clinics
                </ScrollLink>
              </li>
              <li>
                <ScrollLink href="/industries#other" className="hover:text-primary transition-colors">
                  Other
                </ScrollLink>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Resources</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <ScrollLink href="/resources" className="hover:text-primary transition-colors">
                  FAQ
                </ScrollLink>
              </li>
              <li>
                <ScrollLink href="/resources#getting-started" className="hover:text-primary transition-colors">
                  Documentation
                </ScrollLink>
              </li>
              <li>
                <ScrollLink href="/contact" className="hover:text-primary transition-colors">
                  Support
                </ScrollLink>
              </li>
              <li>
                <ScrollLink href="/contact" className="hover:text-primary transition-colors">
                  Book Demo
                </ScrollLink>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Legal</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <ScrollLink href="/terms" className="hover:text-primary transition-colors">
                  Terms & Conditions
                </ScrollLink>
              </li>
              <li>
                <ScrollLink href="/privacy" className="hover:text-primary transition-colors">
                  Privacy Policy
                </ScrollLink>
              </li>
              <li>
                <ScrollLink href="/refund" className="hover:text-primary transition-colors">
                  Refund Policy
                </ScrollLink>
              </li>
              <li>
                <ScrollLink href="/disclaimer" className="hover:text-primary transition-colors">
                  Disclaimer
                </ScrollLink>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact Row */}
        <div className="mt-12 pt-8 border-t border-border/30">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Email us</p>
                <a
                  href="mailto:inesh2010nj@gmail.com"
                  className="text-sm text-foreground hover:text-primary transition-colors"
                >
                  inesh2010nj@gmail.com
                </a>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Call us</p>
                <a href="tel:+918939744434" className="text-sm text-foreground hover:text-primary transition-colors">
                  +91-8939744434
                </a>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Location</p>
                <span className="text-sm text-foreground">Chennai, India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border/30 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-4 gap-y-2 text-xs text-muted-foreground">
            <span>© 2025 CallGenie AIVoiceEngine. All rights reserved.</span>
            <span className="hidden md:inline">•</span>
            <ScrollLink href="/privacy" className="hover:text-primary transition-colors">
              Privacy
            </ScrollLink>
            <ScrollLink href="/terms" className="hover:text-primary transition-colors">
              Terms
            </ScrollLink>
            <ScrollLink href="/refund" className="hover:text-primary transition-colors">
              Refunds
            </ScrollLink>
            <ScrollLink href="/disclaimer" className="hover:text-primary transition-colors">
              Disclaimer
            </ScrollLink>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xs text-muted-foreground">Powered by</span>
            <div className="flex items-center gap-2 text-xs">
              <span className="px-2 py-1 rounded bg-muted/50 text-muted-foreground">Exotel</span>
              <span className="px-2 py-1 rounded bg-muted/50 text-muted-foreground">WhatsApp</span>
              <span className="px-2 py-1 rounded bg-muted/50 text-muted-foreground">Razorpay</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
