import SectionCard from "./SectionCard"
import { Target } from "lucide-react"

export default function TheGoal() {
  return (
    <SectionCard title="The Goal">
      <div className="flex items-center space-x-4">
        <Target className="h-12 w-12 text-blue-500" />
        <p className="text-lg">
          Help learners <span className="font-bold">build real products</span>, develop{" "}
          <span className="font-bold">startups</span>, and gain practical knowledge that is{" "}
          <span className="font-bold">immediately applicable in the real world</span>.
        </p>
      </div>
    </SectionCard>
  )
}

