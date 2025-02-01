"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function Pricing() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    // Set the countdown target date (Feb 5, 2025, 6 PM local time)
    const countdownDate = new Date("2025-02-05T18:00:00").getTime()

    const timer = setInterval(() => {
      const now = new Date().getTime()
      const distance = countdownDate - now

      if (distance <= 0) {
        clearInterval(timer)
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        })
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <section id="pricing" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="mb-4 text-3xl font-bold text-center glow-text" data-aos="fade-up">
          The Lowest Cost You'll Ever Imagine
        </h2>
        <p className="mb-12 text-center text-gray-600" data-aos="fade-up" data-aos-delay="200">
          Affordable learning without compromising quality. Learn, build, and thrive with TechBuddySpace.
        </p>
        <Card className="max-w-md mx-auto glassmorphism" data-aos="zoom-in" data-aos-delay="400">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center">TechBuddySpace Membership</CardTitle>
            <CardDescription className="text-center">All-inclusive access to our courses and community</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-center">
              <p className="text-3xl font-bold mb-4 glow-text">Price Revealing Soon!</p>
              <div className="grid grid-cols-4 gap-2 text-sm">
                <div>
                  <span className="block text-2xl font-bold">{timeLeft.days}</span>
                  Days
                </div>
                <div>
                  <span className="block text-2xl font-bold">{timeLeft.hours}</span>
                  Hours
                </div>
                <div>
                  <span className="block text-2xl font-bold">{timeLeft.minutes}</span>
                  Minutes
                </div>
                <div>
                  <span className="block text-2xl font-bold">{timeLeft.seconds}</span>
                  Seconds
                </div>
              </div>
            </div>
            <ul className="mt-6 space-y-2">
              <li className="flex items-center">
                <svg
                  className="w-4 h-4 mr-2 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Access to all courses and live sessions
              </li>
              <li className="flex items-center">
                <svg
                  className="w-4 h-4 mr-2 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                24/7 community support
              </li>
              <li className="flex items-center">
                <svg
                  className="w-4 h-4 mr-2 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Real-world project assignments
              </li>
              <li className="flex items-center">
                <svg
                  className="w-4 h-4 mr-2 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Certificates and badges
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button className="w-full glow-button">Join the Waitlist</Button>
          </CardFooter>
        </Card>
      </div>
    </section>
  )
}
