import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import CategoryRow from "@/components/CategoryRow"
import RecommendedCourses from "@/components/RecommendedCourses"

export default function Home() {
  const categories = [
    { id: 1, name: "Business" },
    { id: 2, name: "Marketing" },
    { id: 3, name: "Design" },
    { id: 4, name: "Technology" },
  ]

  return (
    <main className="container mx-auto px-4 py-8">
      <header className="mb-8">
        <h1 className="text-4xl font-bold mb-4">WACE Courses</h1>
        <div className="flex gap-2">
          <Input placeholder="Search courses..." className="flex-grow" />
          <Button>
            <Search className="mr-2 h-4 w-4" /> Search
          </Button>
        </div>
      </header>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Continue Watching</h2>
        <RecommendedCourses />
      </section>

      {categories.map((category) => (
        <CategoryRow key={category.id} category={category} />
      ))}
    </main>
  )
}