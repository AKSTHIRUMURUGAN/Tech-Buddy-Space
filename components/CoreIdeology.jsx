import UniqueCard from "./UniqueCard"
import { Users, CheckCircle } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function CoreIdeology() {
  return (
    <UniqueCard title="The Core Ideology of TechBuddySpace: Friends Teaching Friends" icon={Users}>
      <p className="mb-4">
        At <Badge variant="secondary">TechBuddySpace</Badge>, we believe that learning from a <em>friend</em> is more
        impactful than learning from a professor, YouTube videos, or lengthy courses.
      </p>

      <h3 className="font-semibold mb-2">A Friend's Teaching Advantage:</h3>
      <p className="mb-4">
        A friend simplifies complexity because they've already been where you are. They don't just explain—they{" "}
        <em>relate</em> to your perspective.
      </p>

      <h3 className="font-semibold mb-2">Why Friends Make Better Teachers:</h3>
      <ul className="space-y-2 mb-4">
        {[
          "Friends explain concepts in your language—no jargon or overwhelming details.",
          "They focus on what's practical and necessary, skipping unnecessary fluff.",
          "They've made mistakes, found solutions, and now teach from real experience.",
        ].map((item, index) => (
          <li key={index} className="flex items-start">
            <CheckCircle className="mr-2 h-5 w-5 text-green-500 flex-shrink-0 mt-1" />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <p className="italic">
        Ever noticed how a 1-hour session with a friend before an exam clears things up better than an entire year of
        lectures? That's the magic we harness at TechBuddySpace.
      </p>
    </UniqueCard>
  )
}

