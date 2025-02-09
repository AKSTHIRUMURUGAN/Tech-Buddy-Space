import UniqueCard from "./UniqueCard"
import { CheckCircle } from "lucide-react"

export default function WhyItWorks() {
  return (
    <UniqueCard title="Why It Works" icon={CheckCircle}>
      <ul className="space-y-2">
        {[
          "Active Engagement: Learn by doing, not just watching.",
          "Practical Skills: Gain experience solving real problems and working on industry-grade projects.",
          "Future-Ready: Stay updated with evolving tech trends and career opportunities.",
          "Rewards & Motivation: Compete, win, and grow with our reward system.",
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

