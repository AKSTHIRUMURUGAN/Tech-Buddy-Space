import LearningCycle from "./LearningCycle"
import WhyCycleWorks from "./WhyCycleWorks"
import StartupSchema from "./StartupSchema"
import WhyChooseUs from "./WhyChooseUs"
import WhatMakesUsUnique from "./WhatMakesUsUnique"
import WhyItWorks from "./WhyItWorks"
import OurPromise from "./OurPromise"
import CoreIdeology from "./CoreIdeology"
import BreakingPriceBarrier from "./BreakingPriceBarrier"
import WhyVideosAloneFail from "./WhyVideosAloneFail"
import TechBuddySpaceFormula from "./TechBuddySpaceFormula"
import RewardsBasedLearning from "./RewardsBasedLearning"
import BreakingEduTechScam from "./BreakingEduTechScam"

export default function Important() {
  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">
          TechBuddySpace: Revolutionizing Tech Education
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <LearningCycle />
          <WhyCycleWorks />
          <StartupSchema />
          <WhyChooseUs />
          <WhatMakesUsUnique />
          <WhyItWorks />
          <OurPromise />
          <CoreIdeology />
          <BreakingPriceBarrier />
          <WhyVideosAloneFail />
          <TechBuddySpaceFormula />
          <RewardsBasedLearning />
          <div className="md:col-span-2 lg:col-span-3">
            <BreakingEduTechScam />
          </div>
        </div>
      </div>
    </section>
  )
}

