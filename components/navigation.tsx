"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Sparkles } from "lucide-react"
import { cn } from "@/lib/utils"
import { ScrollLink } from "./scroll-link"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { href: "/features", label: "Product" },
    { href: "/how-it-works", label: "How it Works" },
    { href: "/pricing", label: "Pricing" },
    { href: "/industries", label: "Use Cases" },
    { href: "/resources", label: "Resources" },
  ]

  const closeMobileMenu = () => setIsMobileMenuOpen(false)

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out",
          isScrolled ? "glass-nav-scrolled py-3" : "glass-nav py-4",
        )}
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <ScrollLink href="/" className="flex items-center gap-3 group" onClick={closeMobileMenu}>
              <div className="relative w-10 h-10 rounded-xl gradient-primary flex items-center justify-center overflow-hidden">
                <Sparkles className="w-5 h-5 text-ink relative z-10" />
                <div className="absolute inset-0 animate-shimmer" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-white text-lg leading-tight tracking-tight">CallGenie</span>
                <span className="text-xs text-primary font-medium -mt-0.5 tracking-wide">AIVoiceEngine</span>
              </div>
            </ScrollLink>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <ScrollLink
                  key={link.href}
                  href={link.href}
                  className="relative px-4 py-2 text-white/70 hover:text-white transition-colors text-sm font-medium rounded-lg hover:bg-white/5"
                >
                  {link.label}
                </ScrollLink>
              ))}
            </div>

            {/* Desktop CTAs */}
            <div className="hidden lg:flex items-center gap-3">
              <Button variant="ghost" size="sm" className="text-white/80 hover:text-white hover:bg-white/10" asChild>
                <ScrollLink href="/login">Login</ScrollLink>
              </Button>
              <Button
                size="sm"
                className="gradient-primary text-ink font-semibold relative overflow-hidden group"
                asChild
              >
                <ScrollLink href="/contact">
                  <span className="relative z-10">Start Free Trial</span>
                  <div className="absolute inset-0 animate-shimmer opacity-0 group-hover:opacity-100 transition-opacity" />
                </ScrollLink>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-white rounded-lg hover:bg-white/10 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        <div
          className={cn(
            "lg:hidden overflow-hidden transition-all duration-300 ease-out",
            isMobileMenuOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0",
          )}
        >
          <div className="glass-dark mx-4 mt-4 rounded-2xl p-6 border border-white/10">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <ScrollLink
                  key={link.href}
                  href={link.href}
                  className="text-white/90 py-3 text-base font-medium text-left px-4 rounded-xl hover:bg-white/5 transition-colors"
                  onClick={closeMobileMenu}
                >
                  {link.label}
                </ScrollLink>
              ))}
              <hr className="border-white/10 my-3" />
              <Button
                variant="ghost"
                className="justify-start text-white/80 hover:text-white hover:bg-white/10"
                asChild
              >
                <ScrollLink href="/login" onClick={closeMobileMenu}>
                  Login
                </ScrollLink>
              </Button>
              <Button className="gradient-primary text-ink font-semibold mt-2" asChild>
                <ScrollLink href="/contact" onClick={closeMobileMenu}>
                  Start Free Trial
                </ScrollLink>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <div className="fixed bottom-6 right-6 z-50">
        <Button
          size="lg"
          className="gradient-primary text-ink font-semibold rounded-full shadow-2xl hover:shadow-primary/30 transition-all duration-300 gap-2 group animate-glow-pulse"
          asChild
        >
          <ScrollLink href="/contact" className="flex items-center gap-2">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-ink/40 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-ink/60"></span>
            </span>
            Book Live Demo
          </ScrollLink>
        </Button>
      </div>
    </>
  )
}
