"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Play, BookOpen } from "lucide-react"

interface CourseContentProps {
  id: string
}

export default function CourseContent({ id }: CourseContentProps) {
  const [activeLesson, setActiveLesson] = useState(1)

  // Mock course data
  const course = {
    id,
    title: `Course ${id}`,
    description: "This is a detailed description of the course.",
    lessons: [
      { id: 1, title: "Introduction", duration: "10:00" },
      { id: 2, title: "Getting Started", duration: "15:30" },
      { id: 3, title: "Advanced Concepts", duration: "20:45" },
    ],
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">{course.title}</h1>
      <p className="text-lg mb-8">{course.description}</p>

      <Tabs defaultValue="lessons" className="w-full">
        <TabsList>
          <TabsTrigger value="lessons">Lessons</TabsTrigger>
          <TabsTrigger value="resources">Resources</TabsTrigger>
          <TabsTrigger value="discussion">Discussion</TabsTrigger>
        </TabsList>
        <TabsContent value="lessons">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <div className="aspect-w-16 aspect-h-9 mb-4">
                <iframe
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
              <h2 className="text-2xl font-semibold mb-2">
                Lesson {activeLesson}: {course.lessons[activeLesson - 1].title}
              </h2>
              <p>Lesson content goes here...</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Course Content</h3>
              {course.lessons.map((lesson) => (
                <Card
                  key={lesson.id}
                  className={`mb-4 ${
                    activeLesson === lesson.id ? "border-primary" : ""
                  }`}
                >
                  <CardHeader className="p-4">
                    <CardTitle className="text-lg flex justify-between items-center">
                      <span>{lesson.title}</span>
                      <span className="text-sm text-gray-500">
                        {lesson.duration}
                      </span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 pt-0">
                    <Button
                      onClick={() => setActiveLesson(lesson.id)}
                      variant={activeLesson === lesson.id ? "default" : "outline"}
                    >
                      {activeLesson === lesson.id ? (
                        <Play className="mr-2 h-4 w-4" />
                      ) : (
                        <BookOpen className="mr-2 h-4 w-4" />
                      )}
                      {activeLesson === lesson.id ? "Continue" : "Start"}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </TabsContent>
        <TabsContent value="resources">
          <p>Course resources will be displayed here.</p>
        </TabsContent>
        <TabsContent value="discussion">
          <p>Course discussion forum will be displayed here.</p>
        </TabsContent>
      </Tabs>
    </div>
  )
}