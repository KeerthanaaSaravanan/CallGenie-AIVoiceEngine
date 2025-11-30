import { Shield, Lock, FileText, CreditCard } from "lucide-react"

const securityFeatures = [
  {
    icon: Lock,
    title: "Data Encryption",
    description: "End-to-end encryption for all calls, messages, and customer data.",
  },
  {
    icon: Shield,
    title: "Role-Based Access",
    description: "Control who can access what with granular permission settings.",
  },
  {
    icon: FileText,
    title: "Audit Logs",
    description: "Complete audit trails for compliance and accountability.",
  },
  {
    icon: CreditCard,
    title: "Razorpay Secure",
    description: "PCI-compliant billing powered by India's leading payment gateway.",
  },
]

export function SecuritySection() {
  return (
    <section className="py-16 bg-secondary/50 border-y border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="text-center lg:text-left">
            <h3 className="text-xl font-semibold text-foreground mb-2">Enterprise-Grade Security</h3>
            <p className="text-muted-foreground">Your data is protected with bank-level security measures.</p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 lg:gap-8">
            {securityFeatures.map((feature, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <feature.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">{feature.title}</p>
                  <p className="text-xs text-muted-foreground hidden lg:block">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
