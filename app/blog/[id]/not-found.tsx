import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="container flex min-h-[400px] flex-col items-center justify-center space-y-4">
      <h2 className="text-2xl font-bold">Blog Post Not Found</h2>
      <p className="text-muted-foreground">Could not find the requested blog post.</p>
      <Button asChild>
        <Link href="/blog">View All Blog Posts</Link>
      </Button>
    </div>
  )
}

