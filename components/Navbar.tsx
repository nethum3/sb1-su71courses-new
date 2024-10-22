"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"

export default function Navbar() {
  const pathname = usePathname()

  return (
    <nav className="bg-background border-b">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold">
              WACE
            </Link>
            <div className="ml-10 flex items-baseline space-x-4">
              <NavLink href="/" current={pathname === "/"}>
                Home
              </NavLink>
              <NavLink href="/courses" current={pathname.startsWith("/courses")}>
                Courses
              </NavLink>
              <NavLink href="/admin/upload" current={pathname === "/admin/upload"}>
                Upload Course
              </NavLink>
            </div>
          </div>
          <div className="flex items-center">
            <ModeToggle />
            <Button className="ml-4">Sign In</Button>
          </div>
        </div>
      </div>
    </nav>
  )
}

function NavLink({ href, current, children }: { href: string; current: boolean; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className={`px-3 py-2 rounded-md text-sm font-medium ${
        current
          ? "bg-primary text-primary-foreground"
          : "text-foreground hover:bg-accent hover:text-accent-foreground"
      }`}
    >
      {children}
    </Link>
  )
}