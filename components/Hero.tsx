import { Button } from "@/components/ui/button"
import { FaRocket } from "react-icons/fa"

export default function Hero() {
  return (
    <section className="py-20 text-center">
      <div className="container mx-auto px-4">
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
          Learn, Practice, Build, and Compete in Tanglish
        </h1>
        <p className="mb-8 text-lg font-normal text-gray-600 sm:px-16 lg:text-xl xl:px-48">
          Join TechBuddySpace for affordable, practical, and community-driven learning. Build real-world skills, create
          meaningful projects, and advance your tech career using Tanglish.
        </p>
        <Button size="lg" className="mr-4">
          Start Learning
          <FaRocket className="ml-2" />
        </Button>
        <Button variant="outline" size="lg">
          Explore Courses
        </Button>
      </div>
    </section>
  )
}

