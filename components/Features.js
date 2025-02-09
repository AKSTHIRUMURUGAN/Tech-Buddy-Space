"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FaGraduationCap, FaUsers, FaAward, FaWhatsapp } from "react-icons/fa";

const features = [
  {
    icon: <FaGraduationCap className="text-primary text-3xl" />,
    title: "Interactive Learning",
    description:
      "Engage in live sessions with real-time debugging, fun activities, and collaborative group projects. Experience hands-on learning that prepares you for real-world challenges.",
  },
  {
    icon: <FaUsers className="text-blue-500 text-3xl" />,
    title: "Your Success Journey",
    description:
      "Learn, build, and grow with us. Your journey starts here! We provide a structured path to help you acquire in-demand skills, create impressive projects, and advance your tech career.",
  },
  {
    icon: <FaAward className="text-yellow-500 text-3xl" />,
    title: "Earn Rewards",
    description:
      "Get recognized for your hard work and progress. Earn certificates, badges, and more for active participation and successful completion of projects and courses.",
  },
  {
    icon: <FaWhatsapp className="text-green-500 text-3xl" />,
    title: "24/7 Support",
    description:
      "Never feel stuck in your learning journey. Get your questions answered any time on WhatsApp or our community forums. Our supportive community is always here to help you succeed.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-white dark:bg-black transition-colors duration-500">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-3xl font-bold text-center text-gray-900 dark:text-white" data-aos="fade-up">
          The <span className="text-primary">TechBuddySpace</span> Advantage
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="p-6 border border-gray-200 dark:border-gray-700 dark:bg-gray-900 shadow-lg hover:scale-[1.02] transition-transform duration-300"
              data-aos="flip-up"
              data-aos-delay={index * 100}
            >
              <CardHeader className="flex items-center space-x-3">
                {feature.icon}
                <CardTitle className="text-lg font-semibold text-gray-900 dark:text-white">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
