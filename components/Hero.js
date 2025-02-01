"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { FaRocket } from "react-icons/fa"
import Typed from "typed.js"

export default function Hero() {
  const typedRef = useRef(null)

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: ["BREAK THE RULE", "BREAK THE BARRIER", "BREAK THE SCAM"],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    })

    return () => {
      typed.destroy()
    }
  }, [])

  return (
    <section className="py-20 text-center relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-10"></div>
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <h1
          className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl"
          data-aos="fade-down"
        >
          Welcome to TechBuddySpace
        </h1>
        <h2
          className="mb-4 text-3xl font-bold leading-none tracking-tight text-gray-900 md:text-4xl lg:text-5xl"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Learn, Build, and Succeed Together!
        </h2>
        <p className="mb-8 text-2xl font-bold text-primary glow-text" data-aos="fade-up" data-aos-delay="400">
          <span ref={typedRef}></span>
        </p>
        <p
          className="mb-8 text-lg font-normal text-gray-600 sm:px-16 lg:text-xl xl:px-48"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          Join the TechBuddySpace revolution and learn like never before! Our unique approach combines peer learning,
          practical projects, and a supportive community to help you master tech skills in Tanglish.
        </p>
        <Button size="lg" className="animate-pulse glow-button" data-aos="zoom-in" data-aos-delay="800">
          Be Our Buddy Gang (Registration Open Soon)
          <FaRocket className="ml-2" />
        </Button>
      </div>
    </section>
  )
}

