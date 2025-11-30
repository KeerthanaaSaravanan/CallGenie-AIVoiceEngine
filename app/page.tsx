import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/home/hero-section"
import { ProblemSection } from "@/components/home/problem-section"
import { SolutionSection } from "@/components/home/solution-section"
import { HowItWorksSection } from "@/components/home/how-it-works-section"
import { UseCasesSection } from "@/components/home/use-cases-section"
import { TestimonialsSection } from "@/components/home/testimonials-section"
import { FeaturesGridSection } from "@/components/home/features-grid-section"
import { SecuritySection } from "@/components/home/security-section"
import { CTASection } from "@/components/home/cta-section"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <HowItWorksSection />
      <UseCasesSection />
      <TestimonialsSection />
      <FeaturesGridSection />
      <SecuritySection />
      <CTASection />
      <Footer />
    </main>
  )
}
