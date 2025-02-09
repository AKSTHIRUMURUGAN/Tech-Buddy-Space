import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function UniqueCard({ title, children, icon: Icon }) {
  return (
    <Card className="h-full hover:shadow-lg transition-shadow duration-300">
      <CardHeader>
        <div className="flex items-center space-x-2">
          {Icon && <Icon className="h-6 w-6 text-primary" />}
          <CardTitle className="text-2xl font-bold">{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  )
}

