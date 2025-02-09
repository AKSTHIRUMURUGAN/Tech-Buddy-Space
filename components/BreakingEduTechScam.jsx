import UniqueCard from "./UniqueCard"
import { AlertTriangle, CheckCircle } from "lucide-react"
import { Badge } from "@/components/ui/badge"

const Problem = ({ description }) => (
  <div className="flex items-start space-x-2 mb-2">
    <AlertTriangle className="h-5 w-5 text-red-500 mt-1 flex-shrink-0" />
    <span>{description}</span>
  </div>
)

const Solution = ({ description }) => (
  <div className="flex items-start space-x-2 mb-2">
    <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
    <span>{description}</span>
  </div>
)

export default function BreakingEduTechScam() {
  return (
    <UniqueCard title="Breaking the Edutech Scam: The Mission of TechBuddySpace" icon={AlertTriangle}>
      <h4 className="mb-4">
        TechBuddySpace was created to <Badge variant="secondary">disrupt the scams</Badge> in the edutech industry and
        provide a genuine, affordable, and practical learning platform for college students.
      </h4>

      <h3 className="font-semibold mb-2">The Problem:</h3>
      <Problem description="Fake Promises: Companies infiltrate with flashy marketing claims." />
      <Problem description="Recorded, Non-Interactive Courses: Pre-recorded content that lacks depth and engagement." />
      <Problem description="Fake Certificate Craze: Chasing certificates rather than actual skills." />

      <h3 className="font-semibold mt-4 mb-2">How TechBuddySpace Fixes This:</h3>
      <Solution description="No More Scams: Affordable courses with no fake promises." />
      <Solution description="Practical, Interactive Learning: Live classes and learn-by-doing approach." />
      <Solution description="Focus on Fundamentals: Emphasis on the 'why' and 'how' behind concepts." />
      <Solution description="Peer-to-Peer Learning: Learn from buddies who understand the struggle." />
      <Solution description="Networking & Support: Build connections and get 24/7 doubt clearance." />
    </UniqueCard>
  )
}

