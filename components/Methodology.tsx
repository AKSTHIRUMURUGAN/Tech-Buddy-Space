import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const steps = [
  { title: "Learn", description: "Understand concepts through interactive live sessions led by peers." },
  { title: "Practice", description: "Apply knowledge through real-time coding, debugging, and assignments." },
  { title: "Build", description: "Work on real-world projects, turning ideas into products with mentor guidance." },
  { title: "Compete", description: "Participate in competitions and hackathons, earning rewards and recognition." },
]

export default function Methodology() {
  return (
    <section id="methodology" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-3xl font-bold text-center">Our Learning Approach</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="text-2xl font-bold">
                  {index + 1}. {step.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

