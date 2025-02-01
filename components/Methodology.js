import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

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
]

export default function Methodology() {
  return (
    <section id="methodology" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-3xl font-bold text-center glow-text" data-aos="fade-up">
          Your Path to Success
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <Card
              key={index}
              className="transition-all duration-300 hover:shadow-lg"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <CardHeader>
                <CardTitle className="text-2xl font-bold glow-text">
                  {index + 1}. {step.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-12 text-center" data-aos="fade-up" data-aos-delay="600">
          <p className="text-lg text-gray-600">
            Our methodology focuses on practical, hands-on learning that prepares you for real-world challenges in the
            tech industry. With TechBuddySpace, you're not just learning – you're building your future in tech.
          </p>
        </div>
      </div>
    </section>
  )
}

