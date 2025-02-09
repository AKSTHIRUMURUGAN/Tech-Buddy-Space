import UniqueCard from "./UniqueCard"
import { CheckCircle, Book, Code, Hammer, Trophy } from "lucide-react"
import { Badge } from "@/components/ui/badge"

const FeatureItem = ({ icon: Icon, title, description }) => (
  <div className="flex items-start space-x-2 mb-4">
    <Icon className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
    <div>
      <h3 className="font-semibold">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  </div>
)

export default function WhyChooseUs() {
  return (
    <UniqueCard title="Why Choose Us?" icon={CheckCircle}>
      <p className="mb-4">
        We break away from outdated, overpriced education models. Instead, we focus on{" "}
        <Badge variant="secondary">real learning</Badge> through a proven, dynamic cycle.
      </p>

      <FeatureItem
        icon={Book}
        title="Learn"
        description="Live, interactive sessions taught by peers. Real-world examples, memory tricks, and live coding—no pre-recorded videos."
      />

      <FeatureItem
        icon={Code}
        title="Practice"
        description="Hands-on assignments that push you to solve errors and debug live. Learn by making mistakes and finding solutions."
      />

      <FeatureItem
        icon={Hammer}
        title="Build"
        description="Work on real-world projects, not meaningless tasks. Bring ideas to life and build a strong portfolio."
      />

      <FeatureItem
        icon={Trophy}
        title="Compete & Rewards"
        description="Weekly competitions, hackathons, and challenges. Earn badges, coins, and swag while showcasing your skills."
      />
    </UniqueCard>
  )
}

