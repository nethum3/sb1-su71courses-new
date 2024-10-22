import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"

interface CourseCardProps {
  course: {
    id: number
    title: string
    thumbnail: string
  }
}

export default function CourseCard({ course }: CourseCardProps) {
  return (
    <Link href={`/course/${course.id}`}>
      <Card className="w-[250px] hover:shadow-lg transition-shadow duration-300">
        <CardContent className="p-0">
          <div className="relative h-[140px]">
            <Image
              src={course.thumbnail}
              alt={course.title}
              layout="fill"
              objectFit="cover"
              className="rounded-t-lg"
            />
          </div>
          <div className="p-4">
            <h3 className="font-semibold text-lg truncate">{course.title}</h3>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}