import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-3xl font-bold text-center" data-aos="fade-up">
          Why Choose TechBuddySpace?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="glassmorphism" data-aos="flip-left">
            <CardHeader>
              <CardTitle>Buddy Teaching: Better Than Professors or YouTube</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                At TechBuddySpace, we believe in the power of peer learning. Our buddy teaching approach is more
                effective, engaging, and enjoyable than traditional methods. Here's why:
              </p>
              <ul className="list-disc pl-5 mt-4 space-y-2">
                <li>Relatable explanations in Tanglish (Tamil + English)</li>
                <li>Real-world examples from recent industry experience</li>
                <li>Interactive sessions with instant doubt resolution</li>
                <li>Collaborative learning environment</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="glassmorphism" data-aos="flip-right">
            <CardHeader>
              <CardTitle>Affordable Learning Without Compromise</CardTitle>
            </CardHeader>
            <CardContent>
              <p>We're committed to making quality tech education accessible to everyone. Our approach ensures:</p>
              <ul className="list-disc pl-5 mt-4 space-y-2">
                <li>The lowest cost you'll ever imagine for top-notch tech education</li>
                <li>No compromise on learning quality or resources</li>
                <li>Focus on practical skills that matter in the industry</li>
                <li>Continuous improvement based on learner feedback</li>
              </ul>
              <p className="mt-4">
                Our simple website is just the start of your success story. We invest in your learning, not fancy
                marketing.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

