import UniqueCard from "./UniqueCard"
import { Star, Users, Award, Network, RefreshCw, Bug } from "lucide-react"

const UniqueFeature = ({ icon: Icon, title, description }) => (
  <div className="flex items-start space-x-2 mb-4">
    <Icon className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
    <div>
      <h3 className="font-semibold">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  </div>
)

export default function WhatMakesUsUnique() {
  return (
    <UniqueCard title="What Makes Us Unique?" icon={Star}>
      <UniqueFeature
        icon={Star}
        title="Break the Scam"
        description="No fake promises, overpriced courses, or meaningless certificates."
      />
      <UniqueFeature
        icon={Users}
        title="Peer Learning"
        description="Learn from friends who've mastered the concepts, not professors or recorded lectures."
      />
      <UniqueFeature
        icon={Award}
        title="Skill Over Certificates"
        description="Build your knowledge, portfolio, and confidence instead of chasing certificates."
      />
      <UniqueFeature
        icon={Network}
        title="Networking"
        description="Connect with peers, mentors, and industry leaders through group projects, offline meetups, and competitions."
      />
      <UniqueFeature
        icon={RefreshCw}
        title="Dynamic Teaching"
        description="Continuous feedback-driven teaching to suit your learning style."
      />
      <UniqueFeature
        icon={Bug}
        title="Real-Time Debugging"
        description="No pre-written code; solve errors live during sessions."
      />
    </UniqueCard>
  )
}

