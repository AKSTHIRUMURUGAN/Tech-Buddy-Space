import SectionCard from "./SectionCard"
import { CheckCircle } from "lucide-react"

export default function WhatSetsTechBuddySpaceApart() {
  return (
    <SectionCard title="What Sets TechBuddySpace Apart?">
      <ul className="space-y-2">
        {[
          "Practical, hands-on learning tailored for real-world challenges",
          "Affordable pricing with a focus on accessibility",
          "A strong sense of community with peer-driven support and guidance",
          "Opportunities for networking, internships, and career advancement",
          "A holistic approach that balances technical, soft skills, and industry insights",
        ].map((item, index) => (
          <li key={index} className="flex items-center">
            <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </SectionCard>
  )
}

