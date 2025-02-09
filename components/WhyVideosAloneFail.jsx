import UniqueCard from "./UniqueCard"
import { Video, X } from "lucide-react"

export default function WhyVideosAloneFail() {
  return (
    <UniqueCard title="Why 'Only Watching Videos' Fails" icon={Video}>
      <p className="mb-4">Watching videos may give knowledge, but it doesn't lead to improvement. Why?</p>
      <ul className="space-y-2">
        {[
          "There's no interaction—you can't ask questions or clarify doubts.",
          "There's no practice—you're just consuming, not doing.",
          "Mistakes and debugging are crucial to learning, and videos can't simulate this experience.",
        ].map((item, index) => (
          <li key={index} className="flex items-start">
            <X className="mr-2 h-5 w-5 text-red-500 flex-shrink-0 mt-1" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </UniqueCard>
  )
}

