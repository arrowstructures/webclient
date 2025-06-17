"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { supabase } from "@/lib/supabase"
import { Building2, Users2, Award, Calendar } from "lucide-react"

type Slide = {
  id: string
  slider_image: string
  title: string
  description: string
}

export function HeroSlider() {
  const [slides, setSlides] = useState<Slide[]>([])
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchSlides = async () => {
      const { data, error } = await supabase.from("slider").select("*")
      if (error) {
        console.error("Error fetching slides:", error.message)
      } else {
        setSlides(data || [])
      }
      setLoading(false)
    }

    fetchSlides()
  }, [])

  // Auto-advance slides
  useEffect(() => {
    if (slides.length === 0) return
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
    }, 5000)
    return () => clearInterval(interval)
  }, [slides])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }

  // ✅ Custom spinner UI
  if (loading) {
    return (
      <div className="flex items-center justify-center h-[80vh]">
        <div className="w-12 h-12 border-4 border-red-500 border-t-transparent rounded-full animate-spin" />
      </div>
    )
  }

  if (slides.length === 0) {
    return <div className="flex items-center justify-center h-[80vh] text-white text-lg">No slides found.</div>
  }

  return (
    <section className="relative h-[80vh] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={cn(
            "absolute inset-0 transition-opacity duration-1000",
            index === currentSlide ? "opacity-100" : "opacity-0",
          )}
        >
          <Image
            src={slide.slider_image || "/placeholder.svg"}
            alt={slide.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="container relative z-10 flex h-full flex-col justify-center text-white">
            <h1 className="text-5xl font-bold tracking-tighter sm:text-6xl xl:text-7xl/none">{slide.title}</h1>
            <p className="mt-4 max-w-[600px] text-base sm:text-xl">{slide.description}</p>
            <Button asChild className="mt-8 w-fit" size="lg">
              <Link href="/portfolio">View Project</Link>
            </Button>
          </div>
        </div>
      ))}

      {/* Stats Overlay */}
 
      <div className="absolute bottom-0 right-0 ">
        <div className="container py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-white">
            <div className="space-y-2">
              <Building2 className="h-4 w-4 mx-auto mb-2 text-white/80" />
              <div className="text-1xl md:text-2xl font-bold">500+</div>
              <div className="text-sm md:text-base opacity-90">Projects Completed</div>
            </div>
            <div className="space-y-2">
              <Users2 className="h-4 w-4 mx-auto mb-2 text-white/80" />
              <div className="text-1xl md:text-2xl font-bold">50+</div>
              <div className="text-sm md:text-base opacity-90">Team Members</div>
            </div>
            <div className="space-y-2">
              <Award className="h-4 w-4 mx-auto mb-2 text-white/80" />
              <div className="text-1xl md:text-2xl font-bold">25+</div>
              <div className="text-sm md:text-base opacity-90">Awards Won</div>
            </div>
            <div className="space-y-2">
              <Calendar className="h-4 w-4 mx-auto mb-2 text-white/80" />
              <div className="text-1xl md:text-2xl font-bold">15+</div>
              <div className="text-sm md:text-base opacity-90">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
      
    </section>
  )
}
