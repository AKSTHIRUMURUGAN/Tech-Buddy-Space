import UniqueCard from "./UniqueCard"
import { DollarSign, X, CheckCircle } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function BreakingPriceBarrier() {
  return (
    <UniqueCard title="Breaking the Price Barrier: Affordable Learning for All" icon={DollarSign}>
      <p className="mb-4">
        At <Badge variant="secondary">TechBuddySpace</Badge>, we believe quality education shouldn't come at a premium.
        Our prices are intentionally set <strong>very low</strong>, breaking the overpriced learning industry norm.
      </p>

      <h3 className="font-semibold mb-2">What We DON'T Do:</h3>
      <ul className="space-y-2 mb-4">
        <li className="flex items-start">
          <X className="mr-2 h-5 w-5 text-red-500 flex-shrink-0 mt-1" />
          <span>
            <strong>No Fake Certificates:</strong> Certifications at TechBuddySpace are <em>earned</em>, not bought.
          </span>
        </li>
        <li className="flex items-start">
          <X className="mr-2 h-5 w-5 text-red-500 flex-shrink-0 mt-1" />
          <span>
            <strong>No Famous Professors or Experts:</strong> We focus on <em>peer-to-peer learning</em>.
          </span>
        </li>
      </ul>

      <h3 className="font-semibold mb-2">Why "Friend Teaching" Is Better:</h3>
      <ul className="space-y-2 mb-4">
        {[
          "Researched endlessly, watched countless videos, and solved real problems.",
          "Made mistakes, debugged errors, and discovered simple, practical solutions.",
          "Developed clear, easy-to-understand methods to explain concepts.",
        ].map((item, index) => (
          <li key={index} className="flex items-start">
            <CheckCircle className="mr-2 h-5 w-5 text-green-500 flex-shrink-0 mt-1" />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <blockquote className="border-l-4 border-primary pl-4 italic mb-4">
        "A 1-hour session with a friend is often more impactful than a full year of study or lectures."
      </blockquote>
    </UniqueCard>
  )
}

