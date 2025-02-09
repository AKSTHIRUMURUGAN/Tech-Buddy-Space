import UniqueCard from "./UniqueCard"
import { Shield } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function OurPromise() {
  return (
    <UniqueCard title="Our Promise" icon={Shield}>
      <ul className="space-y-2 mb-4">
        <li>Lowest prices—accessible to all.</li>
        <li>Practical knowledge, real projects, and market-ready skills.</li>
        <li>A fun, supportive, and results-driven learning environment.</li>
      </ul>
      <Badge variant="secondary" className="text-lg">
        Transform your learning journey. Start building, competing, and achieving with us.
      </Badge>
    </UniqueCard>
  )
}

