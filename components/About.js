"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FaUsers, FaMoneyBillWave } from "react-icons/fa";

export default function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-black transition-colors duration-500">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-3xl font-bold text-center text-gray-900 dark:text-white" data-aos="fade-up">
          Why Choose <span className="text-primary">TechBuddySpace?</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Buddy Teaching Card */}
          <Card className="shadow-lg border border-gray-200 dark:border-gray-700 dark:bg-gray-900" data-aos="flip-left">
            <CardHeader className="flex items-center space-x-3">
              <FaUsers className="text-primary text-3xl" />
              <CardTitle className="text-lg font-semibold text-gray-900 dark:text-white">
                Buddy Teaching: Better Than Professors or YouTube
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-300">
                At TechBuddySpace, we believe in the power of peer learning. Our buddy teaching approach is more
                effective, engaging, and enjoyable than traditional methods. Here's why:
              </p>
              <ul className="list-disc pl-5 mt-4 space-y-2 text-gray-600 dark:text-gray-300">
                <li>Relatable explanations in Tanglish (Tamil + English)</li>
                <li>Real-world examples from recent industry experience</li>
                <li>Interactive sessions with instant doubt resolution</li>
                <li>Collaborative learning environment</li>
              </ul>
            </CardContent>
          </Card>

          {/* Affordable Learning Card */}
          <Card className="shadow-lg border border-gray-200 dark:border-gray-700 dark:bg-gray-900" data-aos="flip-right">
            <CardHeader className="flex items-center space-x-3">
              <FaMoneyBillWave className="text-green-500 text-3xl" />
              <CardTitle className="text-lg font-semibold text-gray-900 dark:text-white">
                Affordable Learning Without Compromise
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-300">
                We're committed to making quality tech education accessible to everyone. Our approach ensures:
              </p>
              <ul className="list-disc pl-5 mt-4 space-y-2 text-gray-600 dark:text-gray-300">
                <li>The lowest cost you'll ever imagine for top-notch tech education</li>
                <li>No compromise on learning quality or resources</li>
                <li>Focus on practical skills that matter in the industry</li>
                <li>Continuous improvement based on learner feedback</li>
              </ul>
              <p className="mt-4 text-gray-600 dark:text-gray-300">
                Our simple website is just the start of your success story. We invest in your learning, not fancy
                marketing.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
