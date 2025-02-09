import SectionCard from "./SectionCard"
import { Badge } from "@/components/ui/badge"

export default function WhatWeOffer() {
  return (
    <SectionCard title="What We Offer">
      <div className="space-y-4">
        <div>
          <h3 className="font-semibold mb-2">Core Learning Features</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Lowest pricing</li>
            <li>Tangible skills development</li>
            <li>
              Peer-to-peer learning via <Badge variant="secondary">Tech by Buddy</Badge>
            </li>
            <li>
              <Badge variant="secondary">Live classes</Badge> for interactive learning
            </li>
            <li>Assignments to practice concepts</li>
            <li>Weekly competitions to foster engagement</li>
            <li>
              Monthly or bi-monthly <Badge variant="secondary">hackathons</Badge>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Weekend Specials</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>
              <Badge variant="outline">Personal Branding</Badge> Sessions on LinkedIn optimization
            </li>
            <li>
              <Badge variant="outline">GitHub Management</Badge> Building a strong portfolio
            </li>
            <li>
              <Badge variant="outline">Resume Building</Badge> Tailoring resumes for tech roles
            </li>
            <li>
              <Badge variant="outline">Guest Speeches</Badge> Insights from industry professionals
            </li>
            <li>
              Hackathon training, including <Badge variant="secondary">pitching tricks</Badge>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Networking Opportunities</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Team formation for real-world collaborations</li>
            <li>Build real products, turn ideas into startups</li>
            <li>Pitching workshops for funding or recognition</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Hosting and Deployment</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>
              Focus on <Badge variant="secondary">production environment challenges</Badge>
            </li>
            <li>Hands-on coding during sessions with no prewritten code</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Comprehensive Support</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>
              Doubt and error clearance <Badge variant="secondary">anytime</Badge>
            </li>
            <li>Offline meetups to strengthen community connections</li>
            <li>Feedback-driven teaching that adapts dynamically</li>
            <li>
              <Badge variant="secondary">Personal mentors</Badge> for tracking and guidance
            </li>
          </ul>
        </div>
      </div>
    </SectionCard>
  )
}

