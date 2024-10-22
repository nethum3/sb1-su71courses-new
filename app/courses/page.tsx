import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import CategoryRow from "@/components/CategoryRow"

export default function CoursesPage() {
  const categories = [
    { id: 1, name: "Business" },
    { id: 2, name: "Marketing" },
    { id: 3, name: "Design" },
    { id: 4, name: "Technology" },
  ]

  return (
    <main className="container mx-auto px-4 py-8">
      <header className="mb-8">
        <h1 className="text-4xl font-bold mb-4">All Courses</h1>
        <div className="flex gap-2">
          <Input placeholder="Search courses..." className="flex-grow" />
          <Button>
            <Search className="mr-2 h-4 w-4" /> Search
          </Button>
        </div>
      </header>

      {categories.map((category) => (
        <CategoryRow key={category.id} category={category} />
      ))}
    </main>
  )
}