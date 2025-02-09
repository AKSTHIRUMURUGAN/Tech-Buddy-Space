import SectionCard from "./SectionCard"
import { CheckCircle } from "lucide-react"

export default function WhyDifferent() {
  return (
    <SectionCard title="Why This Approach is Different">
      <ul className="space-y-4">
        <li className="flex items-start">
          <CheckCircle className="mr-2 h-5 w-5 text-green-500 flex-shrink-0 mt-1" />
          <div>
            <h3 className="font-semibold">Breaking the Price Barrier</h3>
            <p>
              We keep prices low without compromising quality. No reliance on fake certificates or renowned professors.
            </p>
          </div>
        </li>
        <li className="flex items-start">
          <CheckCircle className="mr-2 h-5 w-5 text-green-500 flex-shrink-0 mt-1" />
          <div>
            <h3 className="font-semibold">Peer-Based Learning</h3>
            <p>
              Learning from friends or peers creates a comfortable, relatable, and effective teaching environment. Focus
              on finding and fixing real-world errors.
            </p>
          </div>
        </li>
        <li className="flex items-start">
          <CheckCircle className="mr-2 h-5 w-5 text-green-500 flex-shrink-0 mt-1" />
          <div>
            <h3 className="font-semibold">Practical and Dynamic Methodology</h3>
            <p>Our method emphasizes a cycle: Learn → Practice → Build → Compete (with rewards).</p>
          </div>
        </li>
      </ul>
    </SectionCard>
  )
}

