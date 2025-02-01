import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { FaUsers, FaLanguage, FaLaptopCode, FaComments } from "react-icons/fa"

const features = [
  {
    icon: <FaUsers className="h-6 w-6" />,
    title: "Peer-Based Learning",
    description: "Learn from friends and peers who've mastered the concepts through real experience.",
  },
  {
    icon: <FaLanguage className="h-6 w-6" />,
    title: "Tanglish Support",
    description: "Break language barriers with our unique Tanglish (Tamil + English) teaching approach.",
  },
  {
    icon: <FaLaptopCode className="h-6 w-6" />,
    title: "Live Coding Sessions",
    description: "Experience real-time coding, debugging, and problem-solving during interactive sessions.",
  },
  {
    icon: <FaComments className="h-6 w-6" />,
    title: "Feedback-Driven Platform",
    description: "Our courses evolve based on your feedback, ensuring a personalized learning experience.",
  },
]

export default function Features() {
  return (
    <section id="features" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-3xl font-bold text-center">Why Choose TechBuddySpace?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="flex items-center">
                  {feature.icon}
                  <span className="ml-2">{feature.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

