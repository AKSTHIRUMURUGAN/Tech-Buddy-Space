"use client"

import { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"

import Hero from "@/components/Hero"
import About from "@/components/About"
import Features from "@/components/Features"
import Methodology from "@/components/Methodology"
import Pricing from "@/components/Pricing"
import Testimonials from "@/components/Testimonials"
import CTA from "@/components/CTA"

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Run animations only once
      easing: "ease-in-out",
    })
  }, [])

  return (
    <div className="w-[100vw] min-h-screen bg-gradient-to-b from-gray-100 to-white">
      <Hero />
      <About />
      <Features />
      <Methodology />
      <Pricing />
      <Testimonials />
      <CTA />
    </div>
  )
}

