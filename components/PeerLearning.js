import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function PeerLearning() {
  return (
    <section id="peer-learning" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-3xl font-bold text-center">The Power of Peer Learning in Tanglish</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="transition-all duration-300 hover:shadow-lg">
            <CardHeader>
              <CardTitle>Why Friends Make Better Teachers</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-2">
                <li>They explain concepts in Tanglish—no jargon or overwhelming details.</li>
                <li>They focus on what's practical and necessary, skipping unnecessary fluff.</li>
                <li>They've made mistakes, found solutions, and now teach from real experience.</li>
                <li>They understand your struggles and can relate to your learning journey.</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="transition-all duration-300 hover:shadow-lg">
            <CardHeader>
              <CardTitle>The Friend's Teaching Advantage</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                A friend simplifies complexity because they've already been where you are. They don't just explain—they
                relate to your perspective. The tricks, methods, and clarity they bring stem from their personal journey
                of trial, error, and success, all explained in comfortable Tanglish.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

