import SectionCard from "./SectionCard"
import { Star } from "lucide-react"

export default function KeyDifferentiators() {
  return (
    <SectionCard title="Key Differentiators">
      <ul className="space-y-2">
        {[
          "Real-world learning, not just theoretical concepts",
          "Community-driven, dynamic, and feedback-based teaching",
          "Hands-on coding with a focus on error resolution and real-time development challenges",
          "Affordable pricing with maximum value for students and professionals",
        ].map((item, index) => (
          <li key={index} className="flex items-center">
            <Star className="mr-2 h-5 w-5 text-yellow-500" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </SectionCard>
  )
}

