// "use client"

// import { useState, useEffect } from "react"
// import Image from "next/image"
// import Link from "next/link"
// import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
// import { Button } from "@/components/ui/button"
// import { cn } from "@/lib/utils"
// import { supabase } from "@/lib/supabase"

// type Slide = {
//   id: string
//   slider_image: string
//   title: string
//   description: string
// }

// export function HeroSlider() {
//   const [slides, setSlides] = useState<Slide[]>([])
//   const [currentSlide, setCurrentSlide] = useState(0)
//   const [loading, setLoading] = useState(true)

//   useEffect(() => {
//     const fetchSlides = async () => {
//       const { data, error } = await supabase.from("slider").select("*")
//       if (error) {
//         console.error("Error fetching slides:", error.message)
//       } else {
//         setSlides(data || [])
//       }
//       setLoading(false)
//     }

//     fetchSlides()
//   }, [])

//   // Auto-advance slides (only if loaded)
//   useEffect(() => {
//     if (slides.length === 0) return
//     const interval = setInterval(() => {
//       setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
//     }, 5000)
//     return () => clearInterval(interval)
//   }, [slides])

//   if (loading) {
//     return <div>Loading...</div>
//   }

//   if (slides.length === 0) {
//     return <div>No slides found.</div>
//   }

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
//   }

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
//   }

//   return (
//     <section className="relative h-[80vh] overflow-hidden">
//       {slides.map((slide, index) => (
//         <div
//           key={slide.id}
//           className={cn(
//             "absolute inset-0 transition-opacity duration-1000",
//             index === currentSlide ? "opacity-100" : "opacity-0",
//           )}
//         >
//           <Image
//             src={slide.slider_image || "/placeholder.svg"}
//             alt={slide.title}
//             fill
//             className="object-cover"
//             priority
//           />
//           <div className="absolute inset-0 bg-black/50" />
//           <div className="container relative z-10 flex h-full flex-col justify-center text-white">
//             <h1 className="text-5xl font-bold tracking-tighter sm:text-6xl xl:text-7xl/none">{slide.title}</h1>
//             <p className="mt-4 max-w-[600px] text-base sm:text-xl">{slide.description}</p>
//             <Button asChild className="mt-8 w-fit" size="lg">
//               <Link href={slide.id}>
//               view Project
//               </Link>
//             </Button>
//           </div>
//         </div>
//       ))}

//       {/* Navigation buttons */}
//       <div className="absolute bottom-8 right-8 z-20 flex space-x-2">
//         <Button
//           variant="outline"
//           size="icon"
//           className="h-10 w-10 rounded-full bg-black/20 text-white border-white/20 hover:bg-black/40 hover:text-white"
//           onClick={prevSlide}
//         >
//           <ChevronLeft className="h-6 w-6" />
//           <span className="sr-only">Previous slide</span>
//         </Button>
//         <Button
//           variant="outline"
//           size="icon"
//           className="h-10 w-10 rounded-full bg-black/20 text-white border-white/20 hover:bg-black/40 hover:text-white"
//           onClick={nextSlide}
//         >
//           <ChevronRight className="h-6 w-6" />
//           <span className="sr-only">Next slide</span>
//         </Button>
//       </div>

//       {/* Slide indicators */}
//       <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 space-x-2">
//         {slides.map((_, index) => (
//           <button
//             key={index}
//             className={cn("h-2 w-8 rounded-full transition-all", index === currentSlide ? "bg-white" : "bg-white/50")}
//             onClick={() => setCurrentSlide(index)}
//             aria-label={`Go to slide ${index + 1}`}
//           />
//         ))}
//       </div>
//     </section>
//   )
// }

"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { supabase } from "@/lib/supabase"

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
    return (
      <div className="flex items-center justify-center h-[80vh] text-white text-lg">
        No slides found.
      </div>
    )
  }

  return (
    <section className="relative h-[80vh] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={cn(
            "absolute inset-0 transition-opacity duration-1000",
            index === currentSlide ? "opacity-100" : "opacity-0"
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
            <h1 className="text-5xl font-bold tracking-tighter sm:text-6xl xl:text-7xl/none">
              {slide.title}
            </h1>
            <p className="mt-4 max-w-[600px] text-base sm:text-xl">{slide.description}</p>
            <Button asChild className="mt-8 w-fit" size="lg">
              <Link href={slide.id}>view Project</Link>
            </Button>
          </div>
        </div>
      ))}

      {/* Navigation buttons */}
      <div className="absolute bottom-8 right-8 z-20 flex space-x-2">
        <Button
          variant="outline"
          size="icon"
          className="h-10 w-10 rounded-full bg-black/20 text-white border-white/20 hover:bg-black/40 hover:text-white"
          onClick={prevSlide}
        >
          <ChevronLeft className="h-6 w-6" />
          <span className="sr-only">Previous slide</span>
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="h-10 w-10 rounded-full bg-black/20 text-white border-white/20 hover:bg-black/40 hover:text-white"
          onClick={nextSlide}
        >
          <ChevronRight className="h-6 w-6" />
          <span className="sr-only">Next slide</span>
        </Button>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={cn("h-2 w-8 rounded-full transition-all", index === currentSlide ? "bg-white" : "bg-white/50")}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
