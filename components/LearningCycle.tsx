import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FaBook, FaCode, FaTools, FaTrophy } from "react-icons/fa"

const cycleSteps = [
  {
    icon: <FaBook className="h-8 w-8 text-blue-500" />,
    title: "Learn",
    description:
      "Interactive live sessions with peer mentors, real-world examples, and instant doubt resolution in Tanglish.",
  },
  {
    icon: <FaCode className="h-8 w-8 text-green-500" />,
    title: "Practice",
    description:
      "Hands-on coding, real-time debugging, and error-solving to build practical skills during live sessions.",
  },
  {
    icon: <FaTools className="h-8 w-8 text-yellow-500" />,
    title: "Build",
    description: "Create real-world projects and solutions, both individually and in teams, with guidance from peers.",
  },
  {
    icon: <FaTrophy className="h-8 w-8 text-red-500" />,
    title: "Compete",
    description:
      "Participate in hackathons, win rewards, and showcase your skills to potential employers while earning badges.",
  },
]

export default function LearningCycle() {
  return (
    <section id="learning-cycle" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-3xl font-bold text-center">Our Revolutionary Learning Cycle</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cycleSteps.map((step, index) => (
            <Card
              key={index}
              className="border-t-4"
              style={{
                borderTopColor: step.icon.props.className
                  .split(" ")
                  .find((c) => c.startsWith("text-"))
                  .split("-")[1],
              }}
            >
              <CardHeader>
                <CardTitle className="flex flex-col items-center">
                  {step.icon}
                  <span className="mt-2 text-2xl">{step.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

