import UniqueCard from "./UniqueCard"
import { Layers } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function StartupSchema() {
  return (
    <UniqueCard title="Our Startup Schema Based on This Model" icon={Layers}>
      <p className="mb-4">
        The <Badge variant="secondary">Learn-Practice-Build-Compete</Badge> cycle is at the heart of everything we do:
      </p>
      <ul className="space-y-2 mb-4">
        <li>
          <strong>Learn:</strong> Live classes with peer mentors.
        </li>
        <li>
          <strong>Practice:</strong> Assignments and debugging sessions.
        </li>
        <li>
          <strong>Build:</strong> Real-world projects and portfolio-worthy solutions.
        </li>
        <li>
          <strong>Compete:</strong> Hackathons, competitions, and a reward system to foster growth and innovation.
        </li>
      </ul>
      <p>This cycle ensures that every student leaves with:</p>
      <ol className="list-decimal list-inside space-y-1 mt-2">
        <li>A clear understanding of concepts.</li>
        <li>Practical skills to solve real-world problems.</li>
        <li>The ability to showcase their learning with projects.</li>
        <li>Experience in a competitive environment that mimics real challenges.</li>
      </ol>
    </UniqueCard>
  )
}

