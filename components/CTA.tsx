import { Button } from "@/components/ui/button"
import { FaArrowRight } from "react-icons/fa"

export default function CTA() {
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 text-center">
        <h2 className="mb-4 text-3xl font-bold">Ready to Learn, Practice, Build, and Compete in Tanglish?</h2>
        <p className="mb-8 text-lg">
          Join TechBuddySpace today and start your journey to becoming a skilled tech professional. Learn, build, and
          compete in a supportive community using Tanglish.
        </p>
        <Button size="lg" variant="secondary">
          Start Your Tech Journey
          <FaArrowRight className="ml-2" />
        </Button>
      </div>
    </section>
  )
}

