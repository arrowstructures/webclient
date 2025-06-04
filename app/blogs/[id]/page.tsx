import { notFound } from "next/navigation"
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"
import Image from "next/image"
import Link from "next/link"

export default async function BlogDetailPage({ params }: { params: { id: string } }) {
  const supabase = createServerComponentClient({ cookies })

  const { data: blog, error } = await supabase
    .from("blogs")
    .select("*") // Only fetch what you need
    .eq("id", params.id)
    .single()

  if (error || !blog) return notFound()

  return (
    <div className="container py-12">
      {/* Back button */}
      <Link href="/blogs" className="mb-4 inline-block text-sm text-red-600 underline">
        ← Back to Blogs
      </Link>

      {/* Title */}
      <h1 className="text-4xl font-bold mb-3">{blog.title}</h1>
      <p className="text-lg text-gray-500 py-2">{blog.category}</p>
      {/* Image */}
      {blog.image && (
        <div className="relative w-full h-[400px] mb-6">
          <Image
            src={blog.image}
            alt={blog.title}
            fill
            className="object-cover rounded"
          />
        </div>
      )}
      <h1 className="font-bold text-2xl pb-4">{blog.excerpt}</h1>
      {/* Content */}
      <p className="text-lg">{blog.content}</p>
    </div>
  )
}
//excerpt
