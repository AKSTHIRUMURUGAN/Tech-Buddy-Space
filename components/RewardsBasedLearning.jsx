import UniqueCard from "./UniqueCard"
import { Gift, Award, Users } from "lucide-react"

const RewardItem = ({ icon: Icon, description }) => (
  <div className="flex items-start space-x-2 mb-2">
    <Icon className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
    <span>{description}</span>
  </div>
)

export default function RewardsBasedLearning() {
  return (
    <UniqueCard title="Rewards-Based Learning" icon={Gift}>
      <p className="mb-4">To make learning even more exciting, we've integrated a reward system:</p>

      <RewardItem
        icon={Award}
        description="Earn badges and coins for completing assignments, hackathons, and challenges."
      />

      <RewardItem icon={Gift} description="Redeem coins for exclusive swag, goodies, or additional perks." />

      <RewardItem icon={Users} description="Refer friends and earn rewards while building a community of learners." />
    </UniqueCard>
  )
}

