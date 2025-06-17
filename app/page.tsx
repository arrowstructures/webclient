"use client"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { HeroSlider } from "@/components/hero-slider"
import { useEffect, useState } from "react"
import { supabase } from "@/lib/supabase"
import { ClientLogos } from "@/components/client-logos"
import { StructuralBackground } from "@/components/structural-background"

type Project = {
  id: string
  project_name: string
  description: string
  image: string
}

export default function HomePage() {
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)
  const [clients, setClients] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      // Fetch projects
      const { data: projectsData, error: projectsError } = await supabase
        .from("projects")
        .select("*")
        .order("created_at", { ascending: false })
        .limit(3)

      if (projectsError) {
        console.error("Error fetching projects:", projectsError.message)
      } else {
        setProjects(projectsData as Project[])
      }

      // Fetch clients
      const { data: clientsData, error: clientsError } = await supabase
        .from("clients")
        .select("*")
        .order("created_at", { ascending: true })

      if (clientsError) {
        console.error("Error fetching clients:", clientsError.message)
      } else {
        setClients(clientsData || [])
      }

      setLoading(false)
    }

    fetchData()
  }, [])

  return (
    <>
      <StructuralBackground opacity={0.06} />
      <div className="relative z-10">
        <HeroSlider />

        {/* Featured Projects Section */}
        <section className="py-8 sm:py-12 md:py-16 lg:py-24">
          <div className="container px-4 sm:px-6">
            <div className="text-center sm:text-left mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter">
                Featured Projects
              </h2>
              <div className="w-16 sm:w-20 h-1 bg-red-500 mx-auto sm:mx-0 mt-3 sm:mt-4"></div>
            </div>

            <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {projects.map((project) => (
                <Link
                  key={project.id}
                  href={`/portfolio/${project.id}`}
                  className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="aspect-[4/3] relative overflow-hidden">
                    <img
                      src={`${project.image}`}
                      alt={project.project_name}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-white">
                    <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2 line-clamp-2">
                      {project.project_name}
                    </h3>
                    <p className="text-xs sm:text-sm opacity-90 line-clamp-2 leading-relaxed">{project.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="border-t bg-muted/50 py-8 sm:py-12 md:py-16 lg:py-24" id="about">
          <div className="container px-4 sm:px-6">
            <div className="grid gap-8 sm:gap-10 md:gap-12 lg:grid-cols-2 items-center">
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-lg order-2 lg:order-1">
                <img
                  src="/placeholder.svg?height=400&width=600"
                  alt="Arrow Structures team and office"
                  className="object-cover w-full h-full"
                />
              </div>

              {/* Content */}
              <div className="space-y-4 sm:space-y-6 order-1 lg:order-2">
                <div>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tighter mb-3 sm:mb-4">
                    About Arrow Structures
                  </h2>
                  <div className="w-16 sm:w-20 h-1 bg-red-500 mb-4 sm:mb-6"></div>
                </div>

                <div className="space-y-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
                  <p>
                    Established in 2017, Arrow Structures has emerged as a trusted name in the field of Structural
                    Consultancy and Civil Construction, recognized for its technical expertise, quality-driven approach,
                    and unwavering commitment to client satisfaction. What began as a focused structural engineering
                    practice has grown into one of the region's most respected firms, delivering excellence across a
                    wide spectrum of residential, commercial, and infrastructure projects.
                  </p>
                  <p>
                    We believe that every structure is more than just concrete and steel — it is a story of purpose,
                    design, and resilience. At Arrow Structures, we work closely with architects, contractors, and
                    clients to ensure that each project reflects these values, from initial concept through to final
                    completion.
                  </p>
                </div>

                <Button asChild className="w-full sm:w-auto mt-6">
                  <Link href="/about" className="inline-flex items-center justify-center">
                    Learn More About Us <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <ClientLogos clients={clients} />

        {/* Contact Section */}
        <section className="border-t bg-muted/50 py-8 sm:py-12 md:py-16 lg:py-24" id="contact">
          <div className="container px-4 sm:px-6">
            {/* Header Section */}
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-3 sm:mb-4">
                Get In <span className="text-red-500">Touch</span>
              </h2>
              <p className="text-gray-600 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto leading-relaxed px-4">
                Ready to start your next project? Contact our team of experts to discuss your structural engineering
                needs.
              </p>
              <div className="w-16 sm:w-20 h-1 bg-red-500 mt-4 mx-auto"></div>
            </div>

            {/* Contact Content */}
            <div className="grid gap-8 sm:gap-10 md:gap-12 lg:grid-cols-2">
              {/* Contact Information */}
              <div className="space-y-4 sm:space-y-6 order-2 lg:order-1">
                <h3 className="text-xl sm:text-2xl font-bold tracking-tighter">Contact Information</h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  Interested in working with us? Contact our team to discuss your project requirements.
                </p>

                <div className="space-y-3 sm:space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                    <span className="text-xs sm:text-sm font-medium text-gray-900">Email:</span>
                    <Link
                      href="mailto:contact@arrowstructures.com"
                      className="text-xs sm:text-sm text-red-600 hover:text-red-700 transition-colors"
                    >
                      contact@arrowstructures.com
                    </Link>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                    <span className="text-xs sm:text-sm font-medium text-gray-900">Phone:</span>
                    <Link
                      href="tel:+918870594827"
                      className="text-xs sm:text-sm text-red-600 hover:text-red-700 transition-colors"
                    >
                      +91 88705 94827
                    </Link>
                  </div>
                  <div className="flex flex-col gap-2">
                    <span className="text-xs sm:text-sm font-medium text-gray-900">Address:</span>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      5, Guru Govind Singh Road, R.S Puram,
                      <br className="hidden sm:block" />
                      Coimbatore – 641002, Tamil Nadu, India.
                    </p>
                  </div>
                </div>

                <Button asChild className="w-full sm:w-auto mt-6">
                  <Link href="/contact" className="inline-flex items-center justify-center">
                    Contact Us <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>

              {/* Map */}
              <div className="relative aspect-video sm:aspect-square lg:aspect-video overflow-hidden rounded-lg shadow-lg order-1 lg:order-2">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.360271171325!2d76.95477537416216!3d11.00215795480896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba858fc91c8cf23%3A0x1a2e6e134d037a35!2s5%2C%20Guru%20Govind%20Singh%20Rd%2C%20R.S.%20Puram%2C%20Coimbatore%2C%20Tamil%20Nadu%20641002!5e0!3m2!1sen!2sin!4v1707744235092!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
