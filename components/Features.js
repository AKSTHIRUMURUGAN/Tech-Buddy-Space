import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FaGraduationCap, FaUsers, FaAward, FaWhatsapp } from "react-icons/fa"

const features = [
  {
    icon: <FaGraduationCap className="h-6 w-6" />,
    title: "Interactive Learning",
    description:
      "Engage in live sessions with real-time debugging, fun activities, and collaborative group projects. Experience hands-on learning that prepares you for real-world challenges.",
  },
  {
    icon: <FaUsers className="h-6 w-6" />,
    title: "Your Success Journey",
    description:
      "Learn, build, and grow with us. Your journey starts here! We provide a structured path to help you acquire in-demand skills, create impressive projects, and advance your tech career.",
  },
  {
    icon: <FaAward className="h-6 w-6" />,
    title: "Earn Rewards",
    description:
      "Get recognized for your hard work and progress. Earn certificates, badges, and more for active participation and successful completion of projects and courses.",
  },
  {
    icon: <FaWhatsapp className="h-6 w-6" />,
    title: "24/7 Support",
    description:
      "Never feel stuck in your learning journey. Get your questions answered any time on WhatsApp or our community forums. Our supportive community is always here to help you succeed.",
  },
]

export default function Features() {
  return (
    <section id="features" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-3xl font-bold text-center" data-aos="fade-up">
          The TechBuddySpace Advantage
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flip-card" data-aos="flip-up" data-aos-delay={index * 100}>
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <Card className="h-full flex flex-col justify-center items-center">
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        {feature.icon}
                        <span className="ml-2">{feature.title}</span>
                      </CardTitle>
                    </CardHeader>
                  </Card>
                </div>
                <div className="flip-card-back">
                  <Card className="h-full">
                    <CardContent className="flex flex-col justify-center h-full">
                      <p>{feature.description}</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

