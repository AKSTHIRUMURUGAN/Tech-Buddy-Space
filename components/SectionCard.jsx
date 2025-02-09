import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function SectionCard({ title, children }) {
  return (
    <Card className="h-full hover:shadow-lg transition-shadow duration-300">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">{title}</CardTitle>
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  )
}

