import UniqueCard from "./UniqueCard"
import { Book, Code, Hammer, Trophy } from "lucide-react"
import { Badge } from "@/components/ui/badge"

const FormulaStep = ({ icon: Icon, title, description }) => (
  <div className="flex items-start space-x-2 mb-4">
    <Icon className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
    <div>
      <h1 className="font-semibold">{title}</h1>
      <h3 className="text-sm text-muted-foreground">{description}</h3>
    </div>
  </div>
)

export default function TechBuddySpaceFormula() {
  return (
    <UniqueCard title="The TechBuddySpace Formula: Learn, Practice, Build, Compete (with Rewards)" icon={Book}>
      <h4 className="mb-4">
        At TechBuddySpace, we don't just teach; we{" "}
        <Badge variant="secondary">transform learning into a dynamic experience</Badge>:
      </h4>

      <FormulaStep
        icon={Book}
        title="Learn"
        description="Understand concepts through interactive live sessions led by buddies who simplify the most complex topics."
      />

      <FormulaStep
        icon={Code}
        title="Practice"
        description="Apply what you've learned through real-time coding, debugging, and assignments."
      />

      <FormulaStep
        icon={Hammer}
        title="Build"
        description="Work on real-world projects, turning ideas into products with guidance from mentors."
      />

      <FormulaStep
        icon={Trophy}
        title="Compete"
        description="Participate in weekly competitions, monthly hackathons, and group projects, earning rewards, badges, and recognition."
      />
    </UniqueCard>
  )
}

