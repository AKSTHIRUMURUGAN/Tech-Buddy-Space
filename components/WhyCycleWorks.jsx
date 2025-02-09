import UniqueCard from "./UniqueCard"
import { CheckCircle } from "lucide-react"

export default function WhyCycleWorks() {
  return (
    <UniqueCard title="Why This Cycle Works Better Than Traditional Learning" icon={CheckCircle}>
      <ul className="space-y-2">
        {[
          "Active Engagement: Each stage builds on the previous one, keeping students involved throughout.",
          "Hands-On Learning: The process emphasizes doing, not just watching, ensuring practical understanding.",
          "Real-World Preparation: By the time students complete the cycle, they have both knowledge and tangible outcomes.",
          "Intrinsic Motivation: Rewards and recognition create a sense of accomplishment, motivating students to keep improving.",
        ].map((item, index) => (
          <li key={index} className="flex items-start">
            <CheckCircle className="mr-2 h-5 w-5 text-green-500 flex-shrink-0 mt-1" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </UniqueCard>
  )
}

