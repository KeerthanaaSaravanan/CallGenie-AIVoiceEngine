import type React from "react"
import type { Metadata } from "next"
import { Inter, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" })

export const metadata: Metadata = {
  title: "SalonAI VoiceEngine | 24/7 AI Receptionist for Salons, Spas & Clinics",
  description:
    "A fully autonomous AI receptionist that answers calls and WhatsApp messages, books appointments, manages schedules, personalizes itself to each business, and runs on a 15-day free trial with Razorpay-powered subscriptions.",
  keywords:
    "AI receptionist for salons, AI receptionist for spas, AI receptionist for clinics, WhatsApp booking assistant, AI call answering, 24/7 virtual receptionist, appointment booking automation",
    generator: 'v0.app'
}

export const viewport = {
  themeColor: "#0a1628",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${geistMono.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
