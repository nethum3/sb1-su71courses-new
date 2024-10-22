"use client"

import { useRef } from "react"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { ChevronLeft, ChevronRight } from "lucide-react"
import CourseCard from "./CourseCard"

export default function RecommendedCourses() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current
      const scrollTo =
        direction === "left"
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth
      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" })
    }
  }

  // Mock recommended courses data
  const recommendedCourses = Array.from({ length: 5 }, (_, i) => ({
    id: i + 1,
    title: `Recommended Course ${i + 1}`,
    thumbnail: `https://source.unsplash.com/random/300x200?sig=${i + 100}`,
  }))

  return (
    <div className="relative">
      <button
        onClick={() => scroll("left")}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white dark:bg-gray-800 rounded-full p-2 shadow-md"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <ScrollArea className="w-full whitespace-nowrap rounded-md border">
        <div ref={scrollRef} className="flex space-x-4 p-4">
          {recommendedCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
      <button
        onClick={() => scroll("right")}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white dark:bg-gray-800 rounded-full p-2 shadow-md"
      >
        <ChevronRight className="h-6 w-6" />
      </button>
    </div>
  )
}