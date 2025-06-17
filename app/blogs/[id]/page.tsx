"use client"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Calendar, Clock, Share2, User, Tag } from "lucide-react"
import { supabase } from "@/lib/supabase"
import { formatTimeAgo } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"
import { useParams } from "next/navigation"

type Blog = {
  id: string
  title: string
  excerpt: string
  content: string
  category: string
  image?: string
  created_at: string
}

// Loading skeleton component
function ArticleSkeleton() {
  return (
    <div className="min-h-screen bg-white animate-pulse">
      <section className="py-6 border-b border-gray-100">
        <div className="container max-w-4xl mx-auto px-4">
          <div className="w-32 h-6 bg-gray-200 rounded"></div>
        </div>
      </section>

      <section className="py-12">
        <div className="container max-w-4xl mx-auto px-4">
          <div className="w-20 h-6 bg-red-200 rounded mb-6"></div>
          <div className="w-full h-12 bg-gray-200 rounded mb-6"></div>
          <div className="flex space-x-6 mb-8">
            <div className="w-32 h-4 bg-gray-200 rounded"></div>
            <div className="w-24 h-4 bg-gray-200 rounded"></div>
            <div className="w-20 h-4 bg-gray-200 rounded"></div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <div className="container max-w-4xl mx-auto px-4">
          <div className="aspect-[16/9] bg-gray-200 rounded-2xl"></div>
        </div>
      </section>

      <section className="pb-16">
        <div className="container max-w-4xl mx-auto px-4">
          <div className="space-y-4">
            <div className="w-full h-4 bg-gray-200 rounded"></div>
            <div className="w-full h-4 bg-gray-200 rounded"></div>
            <div className="w-3/4 h-4 bg-gray-200 rounded"></div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default function BlogDetailPage() {
  const params = useParams()
  const [blog, setBlog] = useState<Blog | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchBlogDetail = async () => {
      if (!params.id) return

      try {
        // Fetch main blog first for faster initial render
        const { data: blogData, error: blogError } = await supabase
          .from("blogs")
          .select("*")
          .eq("id", params.id)
          .single()

        if (blogError) {
          console.error("Error fetching blog:", blogError)
          setBlog(null)
        } else {
          setBlog(blogData as Blog)
        }
        setLoading(false)
      } catch (error) {
        console.error("Unexpected error:", error)
        setLoading(false)
      }
    }

    fetchBlogDetail()
  }, [params.id])

  if (loading) {
    return <ArticleSkeleton />
  }

  if (!blog) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Blog Post Not Found</h1>
          <Link href="/blogs">
            <Button className="bg-red-500 hover:bg-red-600 text-white">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blogs
            </Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <section className="py-6 border-b border-gray-100">
        <div className="container max-w-4xl mx-auto px-4">
          <Link href="/blogs" prefetch={true}>
            <Button variant="ghost" className="text-red-500 hover:text-red-600 hover:bg-red-50 p-0">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blogs
            </Button>
          </Link>
        </div>
      </section>

      {/* Article Header */}
      <section className="py-12">
        <div className="container max-w-4xl mx-auto px-4">
          <div className="mb-6">
            <span className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide flex items-center gap-2 w-fit">
              <Tag className="w-3 h-3" />
              {blog.category}
            </span>
          </div>

          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">{blog.title}</h1>

          <div className="flex items-center space-x-6 text-gray-600 mb-8">
            <div className="flex items-center space-x-2">
              <User className="w-4 h-4" />
              <span className="font-medium">Arrow Structures</span>
            </div>
            <div className="flex items-center space-x-2">
              <Calendar className="w-4 h-4" />
              <span>
                {new Date(blog.created_at).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4" />
              <span>{formatTimeAgo(new Date(blog.created_at))}</span>
            </div>
          </div>

          <div className="flex items-center space-x-4 mb-8">
            <Button
              variant="outline"
              size="sm"
              className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white"
            >
              <Share2 className="w-4 h-4 mr-2" />
              Share Article
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      {blog.image && (
        <section className="mb-12">
          <div className="container max-w-4xl mx-auto px-4">
            <div className="relative aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={blog.image || "/placeholder.svg"}
                alt={blog.title}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1000px"
              />
            </div>
          </div>
        </section>
      )}

      {/* Article Content */}
      <section className="pb-16">
        <div className="container max-w-4xl mx-auto px-4">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 leading-relaxed mb-8 font-medium">{blog.excerpt}</p>

            <div className="text-gray-800 leading-relaxed space-y-6">
              {blog.content.split("\n").map(
                (paragraph, index) =>
                  paragraph.trim() && (
                    <p key={index} className="text-lg leading-relaxed">
                      {paragraph.trim()}
                    </p>
                  ),
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
