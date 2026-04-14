import type { Metadata } from "next"
import "./globals.css"
import Navbar from "@/components/navbar"
import { Toaster } from "@/components/ui/toaster"

export const metadata: Metadata = {
  title: "CyberShield | Security Without the Scare Tactics",
  description: "A cyber-security platform with serious controls, sensible dashboards, and copy that does not read like it was approved by a committee of fax machines.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Toaster />
      </body>
    </html>
  )
}
