import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const testimonials = [
  {
    name: "Priya Raman",
    role: "Web Developer",
    content:
      "TechBuddySpace transformed my learning experience. The peer-based approach and real-world projects in Tanglish gave me the confidence to land my dream job.",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    name: "Karthik Sundar",
    role: "Data Scientist",
    content:
      "The community support and hands-on learning at TechBuddySpace are unparalleled. Learning in Tanglish made complex concepts so much easier to grasp!",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    name: "Lakshmi Venkat",
    role: "Mobile App Developer",
    content:
      "The Learn-Practice-Build-Compete cycle really works! I've grown so much as a developer and even won a hackathon thanks to TechBuddySpace.",
    avatar: "/placeholder.svg?height=40&width=40",
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-3xl font-bold text-center glow-text" data-aos="fade-up">
          What Our Students Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="transition-all duration-300 hover:shadow-lg glow-card"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Avatar className="mr-2">
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div>{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{testimonial.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

