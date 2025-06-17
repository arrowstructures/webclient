"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { supabase } from "@/lib/supabase"
import { Calendar, User, ArrowRight, BookOpen, Search } from "lucide-react"
import { StructuralBackground } from "@/components/structural-background"
import { Input } from "@/components/ui/input"

export default function BlogsPage() {
  const [articles, setArticles] = useState<any[]>([])
  const [filteredArticles, setFilteredArticles] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const { data, error } = await supabase
          .from("articles")
          .select("*")
          .eq("status", "published")
          .order("created_at", { ascending: false })

        if (error) {
          throw error
        }

        setArticles(data || [])
        setFilteredArticles(data || [])
      } catch (err) {
        console.error("Failed to fetch articles:", err)
        setError("Failed to load articles. Please try again later.")
      } finally {
        setLoading(false)
      }
    }

    fetchArticles()
  }, [])

  useEffect(() => {
    if (searchTerm.trim() === "") {
      setFilteredArticles(articles)
    } else {
      const filtered = articles.filter(
        (article) =>
          article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          article.excerpt?.toLowerCase().includes(searchTerm.toLowerCase()) ||
          article.category?.toLowerCase().includes(searchTerm.toLowerCase()),
      )
      setFilteredArticles(filtered)
    }
  }, [searchTerm, articles])

  if (loading) {
    return (
      <div className="relative">
        <StructuralBackground />
        <div className="relative z-10">
          {/* Header Section */}
          <section className="py-8 sm:py-12 bg-gray-50">
            <div className="container max-w-7xl mx-auto px-4 sm:px-6">
              <div className="text-center sm:text-left">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-3 sm:mb-4">
                  Our <span className="text-red-500">Blog</span>
                </h1>
                <p className="text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed max-w-3xl mx-auto sm:mx-0">
                  Insights, updates, and expertise from the world of structural engineering and construction.
                </p>
                <div className="w-16 sm:w-20 h-1 bg-red-500 mt-4 mx-auto sm:mx-0"></div>
              </div>
            </div>
          </section>

          <section className="py-8 sm:py-12 md:py-16 lg:py-24">
            <div className="container px-4 sm:px-6">
              <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {[...Array(6)].map((_, i) => (
                  <Card key={i} className="overflow-hidden animate-pulse">
                    <div className="aspect-[4/3] bg-gray-200"></div>
                    <CardContent className="p-4 sm:p-6">
                      <div className="h-4 bg-gray-200 rounded mb-2"></div>
                      <div className="h-3 bg-gray-200 rounded mb-4"></div>
                      <div className="flex gap-2">
                        <div className="h-6 w-16 bg-gray-200 rounded"></div>
                        <div className="h-6 w-20 bg-gray-200 rounded"></div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="relative">
        <StructuralBackground />
        <div className="relative z-10">
          {/* Header Section */}
          <section className="py-8 sm:py-12 bg-gray-50">
            <div className="container max-w-7xl mx-auto px-4 sm:px-6">
              <div className="text-center sm:text-left">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-3 sm:mb-4">
                  Our <span className="text-red-500">Blog</span>
                </h1>
                <p className="text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed max-w-3xl mx-auto sm:mx-0">
                  Insights, updates, and expertise from the world of structural engineering and construction.
                </p>
                <div className="w-16 sm:w-20 h-1 bg-red-500 mt-4 mx-auto sm:mx-0"></div>
              </div>
            </div>
          </section>

          <section className="py-8 sm:py-12 md:py-16 lg:py-24">
            <div className="container px-4 sm:px-6">
              <div className="text-center">
                <p className="text-red-600 mb-4 text-sm sm:text-base">{error}</p>
                <Button onClick={() => window.location.reload()} variant="outline">
                  Try Again
                </Button>
              </div>
            </div>
          </section>
        </div>
      </div>
    )
  }

  return (
    <div className="relative">
      <StructuralBackground />
      <div className="relative z-10">
        {/* Header Section */}
        <section className="py-8 sm:py-12 bg-gray-50">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center sm:text-left">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-3 sm:mb-4">
                Our <span className="text-red-500">Blog</span>
              </h1>
              <p className="text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed max-w-3xl mx-auto sm:mx-0">
                Insights, updates, and expertise from the world of structural engineering and construction.
              </p>
              <div className="w-16 sm:w-20 h-1 bg-red-500 mt-4 mx-auto sm:mx-0"></div>
            </div>
          </div>
        </section>

        {/* Search Section */}
        <section className="py-6 sm:py-8 bg-white border-b">
          <div className="container px-4 sm:px-6">
            <div className="max-w-md mx-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 h-10 sm:h-12"
                />
              </div>
              {searchTerm && (
                <p className="text-xs sm:text-sm text-gray-600 mt-2 text-center">
                  Showing {filteredArticles.length} of {articles.length} articles
                </p>
              )}
            </div>
          </div>
        </section>

        {/* Articles Grid */}
        <section className="py-8 sm:py-12 md:py-16 lg:py-24">
          <div className="container px-4 sm:px-6">
            {filteredArticles.length === 0 ? (
              <div className="text-center py-8 sm:py-12">
                <BookOpen className="h-12 w-12 sm:h-16 sm:w-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                  {searchTerm ? "No Articles Found" : "No Articles Available"}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base mb-4">
                  {searchTerm
                    ? "Try adjusting your search terms to find what you're looking for."
                    : "We're working on creating valuable content for you. Please check back soon."}
                </p>
                {searchTerm && (
                  <Button onClick={() => setSearchTerm("")} variant="outline">
                    Clear Search
                  </Button>
                )}
              </div>
            ) : (
              <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {filteredArticles.map((article) => (
                  <Card key={article.id} className="group overflow-hidden hover:shadow-xl transition-all duration-300">
                    <Link href={`/blogs/${article.id}`}>
                      <div className="aspect-[4/3] relative overflow-hidden">
                        <Image
                          src={article.featured_image || "/placeholder.svg?height=300&width=400"}
                          alt={article.title}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                        {/* Category Badge */}
                        {article.category && (
                          <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
                            <Badge className="bg-red-500 hover:bg-red-600 text-white text-xs font-medium">
                              {article.category}
                            </Badge>
                          </div>
                        )}
                      </div>

                      <CardContent className="p-4 sm:p-6">
                        <h3 className="text-lg sm:text-xl font-bold mb-2 text-gray-900 group-hover:text-red-600 transition-colors line-clamp-2">
                          {article.title}
                        </h3>

                        {article.excerpt && (
                          <p className="text-gray-600 text-sm sm:text-base mb-4 line-clamp-3 leading-relaxed">
                            {article.excerpt}
                          </p>
                        )}

                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4 text-xs sm:text-sm text-gray-500">
                          <div className="flex items-center gap-2">
                            <User className="h-3 w-3 sm:h-4 sm:w-4" />
                            <span>{article.author || "Arrow Structures"}</span>
                          </div>

                          <div className="flex items-center gap-2">
                            <Calendar className="h-3 w-3 sm:h-4 sm:w-4" />
                            <span>{new Date(article.created_at).toLocaleDateString()}</span>
                          </div>
                        </div>

                        <div className="mt-4 pt-4 border-t border-gray-100">
                          <div className="flex items-center text-red-600 text-sm font-medium group-hover:text-red-700 transition-colors">
                            Read More
                            <ArrowRight className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1" />
                          </div>
                        </div>
                      </CardContent>
                    </Link>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-8 sm:py-12 md:py-16 lg:py-24 bg-gray-50 border-t">
          <div className="container px-4 sm:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-4 sm:mb-6">
                Stay Updated
              </h2>
              <div className="h-1 w-16 sm:w-20 bg-red-500 mx-auto mb-4 sm:mb-6"></div>
              <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-6 sm:mb-8 leading-relaxed px-4">
                Get the latest insights on structural engineering, construction trends, and industry updates delivered
                to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-red-500 hover:bg-red-600 text-white">
                  <Link href="/contact">Subscribe to Newsletter</Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/projects">View Our Projects</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
