import "@/styles/globals.css"
import { Inter } from "next/font/google"
import type React from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "TechBuddySpace - Learn, Build, and Grow in Tech with Tanglish",
  description:
    "Join our community-driven platform for hands-on learning, real-world projects, and career advancement in tech using Tanglish.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}



import './globals.css'