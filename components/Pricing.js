"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Pricing() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const countdownDate = new Date("2025-02-23T18:00:00").getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      if (distance <= 0) {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="pricing"
      className="py-20 bg-white dark:bg-black transition-colors duration-500"
    >
      <div className="container mx-auto px-4">
        <h2 className="mb-4 text-3xl font-bold text-center text-gray-900 dark:text-white glow-text" data-aos="fade-up">
          The Lowest Cost You'll Ever Imagine
        </h2>
        <p className="mb-12 text-center text-gray-600 dark:text-gray-300" data-aos="fade-up" data-aos-delay="200">
          Affordable learning without compromising quality. Learn, build, and thrive with TechBuddySpace.
        </p>

        <Card className="max-w-md mx-auto glassmorphism shadow-lg transition-transform transform hover:scale-[1.05]" data-aos="zoom-in" data-aos-delay="400">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center text-gray-900 dark:text-white">
              TechBuddySpace Membership
            </CardTitle>
            <CardDescription className="text-center text-gray-600 dark:text-gray-300">
              All-inclusive access to our courses and community
            </CardDescription>
          </CardHeader>
          <CardContent>
            {/* Countdown Timer */}
            <div className="text-center">
              <p className="text-2xl font-semibold mb-2 glow-text">Price Revealed In:</p>
              <div className="grid grid-cols-4 gap-2 text-sm text-gray-600 dark:text-gray-300">
                <div>
                  <span className="block text-sm font-semibold">{timeLeft.days}</span>
                  Days
                </div>
                <div>
                  <span className="block text-sm font-semibold">{timeLeft.hours}</span>
                  Hours
                </div>
                <div>
                  <span className="block text-sm font-semibold">{timeLeft.minutes}</span>
                  Minutes
                </div>
                <div>
                  <span className="block text-sm font-semibold">{timeLeft.seconds}</span>
                  Seconds
                </div>
              </div>
            </div>

            {/* Pricing Section */}
            <p className="text-center text-2xl font-semibold mb-2 glow-text">Price Revealed🎉</p>
            <div className="text-center mt-6">
              <p className="text-4xl font-extrabold text-gray-600 dark:text-gray-300 glow-text shadow-lg">
                ₹499<span className="text-sm font-bold">/month</span>
              </p> 
            </div>

            {/* Features List */}
            <ul className="mt-6 space-y-2 text-gray-600 dark:text-gray-300">
              <li className="flex items-center">
                <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Access to all courses and live sessions
              </li>
              <li className="flex items-center">
                <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                24/7 community support
              </li>
              <li className="flex items-center">
                <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Real-world project assignments
              </li>
              <li className="flex items-center">
                <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Certificates and badges
              </li>
            </ul>
          </CardContent>

          {/* Call to Action */}
          <CardFooter className="flex justify-center">
            <Button className="glow-button">Join Now</Button>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
}
