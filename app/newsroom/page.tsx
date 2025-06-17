"use client"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
import { supabase } from "@/lib/supabase"
import { formatTimeAgo } from "@/lib/utils"
import Image from "next/image"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { StructuralBackground } from "@/components/structural-background"

type News = {
  id: string
  headline: string
  summary: string
  content: string
  created_at: string
}

// Loading skeleton for news cards
function NewsCardSkeleton() {
  return (
    <div className="animate-pulse">
      <div className="aspect-[16/10] bg-gray-200 rounded-lg mb-4"></div>
      <div className="space-y-2 p-6">
        <div className="w-full h-4 bg-gray-200 rounded"></div>
        <div className="w-3/4 h-4 bg-gray-200 rounded"></div>
        <div className="w-1/2 h-3 bg-gray-200 rounded"></div>
      </div>
    </div>
  )
}

export default function NewsroomPage() {
  const [allNews, setAllNews] = useState<News[]>([])
  const [featuredNews, setFeaturedNews] = useState<News[]>([])
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loading, setLoading] = useState(true)
  const [displayCount, setDisplayCount] = useState(9)

  useEffect(() => {
    const fetchNewsletters = async () => {
      setLoading(true)
      try {
        // Optimize query to only fetch needed fields initially
        const { data, error } = await supabase
          .from("news")
          .select("id, headline, summary, created_at")
          .order("created_at", { ascending: false })
          .limit(50) // Limit initial fetch

        if (error) {
          console.error("Error fetching newsletters:", error)
        } else {
          const newsData = data as News[]
          setFeaturedNews(newsData.slice(0, 4) || []) // Latest 4 for slider
          setAllNews(newsData || []) // All news for featured section
        }
      } catch (error) {
        console.error("Unexpected error:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchNewsletters()
  }, [])

  // Auto-slide functionality with cleanup
  useEffect(() => {
    if (featuredNews.length > 1) {
      const timer = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % featuredNews.length)
      }, 5000)
      return () => clearInterval(timer)
    }
  }, [featuredNews.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % featuredNews.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + featuredNews.length) % featuredNews.length)
  }

  const loadMore = () => {
    setDisplayCount((prev) => prev + 9)
  }

  return (
    <div className="min-h-screen bg-white relative">
      <StructuralBackground />
      <div className="relative z-10">
        {/* Title Section */}
        <section className="py-12">
          <div className="container max-w-7xl mx-auto px-4">
            <div className="md:flex md:items-center md:justify-between block">
              <div className="mb-4 md:mb-0">
                <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                  Arrow Structures <span className="text-red-500">Newsroom</span>
                </h1>
                <p className="text-gray-600 mt-2">
                  Stay updated with the latest news and developments from Arrow Structures.
                </p>
                <div className="w-20 h-1 bg-red-500 mt-4"></div>
              </div>
            
            </div>
          </div>
        </section>

        {/* News Slider */}
        {featuredNews.length > 0 && (
          <section className="py-8">
            <div className="container max-w-7xl mx-auto px-4">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <div
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {featuredNews.map((news, index) => (
                    <div key={news.id} className="w-full flex-shrink-0 relative">
                      <Link href={`/newsroom/${news.id}`} prefetch={false} className="block">
                        <div className="relative aspect-[21/9] md:aspect-[21/8]">
                          <Image
                            src="/placeholder.svg?height=400&width=1200"
                            alt={news.headline}
                            fill
                            className="object-cover"
                            priority={index === 0}
                            loading={index === 0 ? "eager" : "lazy"}
                            sizes="100vw"
                          />
                          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent"></div>

                          {/* Content Overlay */}
                          <div className="absolute inset-0 flex items-center">
                            <div className="container max-w-7xl mx-auto px-4">
                              <div className="max-w-2xl text-white">
                                <div className="flex items-center space-x-3 mb-4">
                                  <span className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
                                    BREAKING
                                  </span>
                                  <span className="text-sm opacity-90">{formatTimeAgo(new Date(news.created_at))}</span>
                                </div>
                                <h2 className="text-2xl md:text-4xl font-bold leading-tight mb-4">{news.headline}</h2>
                                <p className="text-lg opacity-90 mb-6 line-clamp-2">{news.summary}</p>
                                <Button className="bg-red-500 hover:bg-red-600 text-white font-semibold">
                                  READ FULL STORY
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>

                {/* Navigation Arrows */}
                {featuredNews.length > 1 && (
                  <>
                    <button
                      onClick={prevSlide}
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-2 rounded-full transition-all duration-200"
                      aria-label="Previous slide"
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                      onClick={nextSlide}
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-2 rounded-full transition-all duration-200"
                      aria-label="Next slide"
                    >
                      <ChevronRight className="w-6 h-6" />
                    </button>

                    {/* Slide Indicators */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                      {featuredNews.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentSlide(index)}
                          className={`w-3 h-3 rounded-full transition-all duration-200 ${
                            index === currentSlide ? "bg-red-500" : "bg-white/50 hover:bg-white/70"
                          }`}
                          aria-label={`Go to slide ${index + 1}`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>
            </div>
          </section>
        )}

        {/* All News - Featured Grid */}
        <section className="py-16">
          <div className="container max-w-7xl mx-auto px-4">
            <div className="mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-2">ALL NEWS</h2>
              <div className="w-20 h-1 bg-red-500"></div>
            </div>

            {loading ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[...Array(9)].map((_, i) => (
                  <NewsCardSkeleton key={i} />
                ))}
              </div>
            ) : (
              <>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {allNews.slice(0, displayCount).map((news, index) => (
                    <Link key={news.id} href={`/newsroom/${news.id}`} prefetch={false}>
                      <Card className="group cursor-pointer hover:shadow-2xl transition-all duration-300 border-0 overflow-hidden h-full">
                        <div className="relative aspect-[16/10] overflow-hidden">
                          <Image
                            src="/placeholder.svg?height=300&width=500"
                            alt={news.headline}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-500"
                            loading="lazy"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                          <div className="absolute bottom-4 left-4 right-4">
                            <div className="text-white">
                              <div className="text-xs mb-2 opacity-90">{formatTimeAgo(new Date(news.created_at))}</div>
                              <h3 className="font-bold text-lg leading-tight mb-2 line-clamp-2">{news.headline}</h3>
                            </div>
                          </div>
                          <div className="absolute top-4 right-4">
                            <span className="bg-red-500 text-white px-2 py-1 rounded text-xs font-bold">NEWS</span>
                          </div>
                        </div>
                        <CardContent className="p-6 bg-white flex-1">
                          <p className="text-gray-600 text-sm line-clamp-3 mb-4">{news.summary}</p>
                          <div className="flex items-center justify-between">
                            <span className="text-xs text-gray-500 font-medium">ARROW STRUCTURES</span>
                            <Button size="sm" variant="ghost" className="text-red-500 hover:text-red-600 p-0">
                              READ MORE <ArrowRight className="ml-1 h-3 w-3" />
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
                </div>

                {/* Load More Button */}
                {displayCount < allNews.length && (
                  <div className="text-center mt-12">
                    <Button
                      onClick={loadMore}
                      variant="outline"
                      className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white px-8"
                    >
                      Load More Articles
                    </Button>
                  </div>
                )}
              </>
            )}
          </div>
        </section>
      </div>
    </div>
  )
}
