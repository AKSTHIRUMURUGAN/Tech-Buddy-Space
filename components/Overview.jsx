import WhyDifferent from "./WhyDifferent"
import WhatWeOffer from "./WhatWeOffer"
import KeyDifferentiators from "./KeyDifference"
import TheGoal from "./TheGoal"
import WhatSetsTechBuddySpaceApart from "./SetsApart"

export default function TechBuddySpaceOverview() {
  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">
          TechBuddySpace: Revolutionizing Tech Education
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <WhyDifferent />
          <WhatWeOffer />
          <KeyDifferentiators />
          <TheGoal />
          <div className="md:col-span-2">
            <WhatSetsTechBuddySpaceApart />
          </div>
        </div>
      </div>
    </section>
  )
}

