"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const steps = [
  {
    title: "Learn",
    description:
      "Grasp concepts through interactive live sessions led by experienced peers in Tanglish. Benefit from real-world examples and instant doubt resolution.",
  },
  {
    title: "Practice",
    description:
      "Apply your knowledge through hands-on coding exercises, real-time debugging sessions, and practical assignments during our engaging live sessions.",
  },
  {
    title: "Build",
    description:
      "Work on real-world projects that matter. Turn your ideas into functional products with guidance from mentors who have industry experience.",
  },
  {
    title: "Succeed",
    description:
      "Showcase your skills, participate in hackathons, and connect with potential employers. We're here to support your journey to a successful tech career.",
  },
];

export default function Methodology() {
  return (
    <section id="methodology" className="py-20 bg-white dark:bg-black transition-colors duration-500">
      <div className="container mx-auto px-4">
        <h2
          className="mb-12 text-3xl font-bold text-center text-gray-900 dark:text-white"
          data-aos="fade-up"
        >
          Your <span className="text-primary">Path to Success</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <Card
              key={index}
              className="p-6 border border-gray-200 dark:border-gray-700 dark:bg-gray-900 shadow-lg hover:scale-[1.05] transition-transform duration-300"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900 dark:text-white">
                  {index + 1}. {step.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center" data-aos="fade-up" data-aos-delay="600">
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Our methodology focuses on practical, hands-on learning that prepares you for real-world challenges in the
            tech industry. With <span className="text-primary font-semibold">TechBuddySpace</span>, you're not just learning – 
            you're <span className="text-blue-500 dark:text-blue-400">building your future</span> in tech.
          </p>
        </div>
      </div>
    </section>
  );
}
