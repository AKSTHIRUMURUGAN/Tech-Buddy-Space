import UniqueCard from "./UniqueCard"
import { Badge } from "@/components/ui/badge"
import { Book, Code, Hammer, Trophy } from "lucide-react"

const CycleStep = ({ title, icon: Icon, description, example }) => (
  <div className="mb-4">
    <h3 className="text-lg font-semibold flex items-center">
      <Icon className="mr-2 h-5 w-5 text-primary" />
      {title}
    </h3>
    <p className="mt-1">{description}</p>
    <p className="mt-1 text-sm text-muted-foreground">
      <strong>Example:</strong> {example}
    </p>
  </div>
)

export default function LearningCycle() {
  return (
    <UniqueCard title="Learn-Practice-Build-Compete (Rewards): The Ultimate Learning Cycle" icon={Book}>
      <p className="mb-4">
        This cycle forms the foundation of our startup's <Badge variant="secondary">core learning methodology</Badge>.
      </p>

      <CycleStep
        title="1. Learn"
        icon={Book}
        description="Structured live sessions led by peers or mentors. Concepts explained with real-world examples, memory techniques, and hands-on demonstrations."
        example="In our live sessions, students interact directly, solving problems as they arise."
      />

      <CycleStep
        title="2. Practice"
        icon={Code}
        description="Assignments, problem-solving sessions, and error debugging during or after live sessions."
        example="Our Practice stage bridges the gap between learning syntax and applying it in real scenarios."
      />

      <CycleStep
        title="3. Build"
        icon={Hammer}
        description="Real-world projects where students apply their skills to build meaningful solutions."
        example="Students might design a parking slot allocation system or an interactive food donation app."
      />

      <CycleStep
        title="4. Compete (Rewards)"
        icon={Trophy}
        description="Weekly competitions, hackathons, and challenges to push students beyond their limits."
        example="Participate in a hackathon to create a startup-worthy product in 48 hours."
      />
    </UniqueCard>
  )
}

