import { notFound } from "next/navigation"
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, MapPin, Calendar, Ruler, Building2, CheckCircle } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export default async function ProjectDetails({ params }: { params: { id: string } }) {
  const supabase = createServerComponentClient({ cookies })

  const { data: project, error } = await supabase.from("projects").select("*").eq("id", params.id).single()

  if (error || !project) {
    console.error("Error fetching project:", error)
    return notFound()
  }

  // Mock data for features (replace with actual data from your database)
  const projectFeatures = [
    "Modern architectural design with curved roof structure",
    "Covered waiting areas for passenger comfort",
    "Efficient bus bay layout and circulation",
    "Integrated landscaping and street furniture",
    "Sustainable lighting and ventilation systems",
    "Passenger information display systems",
    "Accessible design for all users",
    "Integration with existing urban infrastructure",
  ]

  const galleryImages = [
    project.image || "/placeholder.svg?height=400&width=600",
    "/placeholder.svg?height=400&width=600",
    "/placeholder.svg?height=400&width=600",
    "/placeholder.svg?height=400&width=600",
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="py-12 border-b-4 border-red-500">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <Link
              href="/portfolio"
              className="inline-flex items-center text-gray-600 hover:text-red-500 transition-colors"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Portfolio
            </Link>
            <Badge className="bg-red-500 text-white hover:bg-red-600">
              <CheckCircle className="w-4 h-4 mr-2" />
              Completed
            </Badge>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{project.project_name}</h1>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">{project.description}</p>

              {/* Project Meta */}
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <div className="flex items-center text-gray-600">
                  <Building2 className="w-5 h-5 mr-3 text-red-500" />
                  <span>{project.category || "Infrastructure"}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <MapPin className="w-5 h-5 mr-3 text-red-500" />
                  <span>Chennai, Tamil Nadu</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Calendar className="w-5 h-5 mr-3 text-red-500" />
                  <span>Completed 2024</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Ruler className="w-5 h-5 mr-3 text-red-500" />
                  <span>25,000 sq.ft</span>
                </div>
              </div>
            </div>

            <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-lg">
              <Image
                src={project.image || "/placeholder.svg?height=600&width=800"}
                alt={project.project_name}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-2">Key Features</h2>
            <div className="w-20 h-1 bg-red-500"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {projectFeatures.map((feature, index) => (
              <div
                key={index}
                className="flex items-start p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-2 h-2 rounded-full bg-red-500 mt-2 mr-4 flex-shrink-0" />
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Gallery */}
      <section className="py-16 bg-white">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-2">Project Gallery</h2>
            <div className="w-20 h-1 bg-red-500"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="relative aspect-square overflow-hidden rounded-lg shadow-lg group cursor-pointer"
              >
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`${project.project_name} gallery ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Specifications */}
    

           
         

      {/* Call to Action */}
      <section className="py-16 bg-white border-t-4 border-red-500">
        <div className="container max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Interested in Similar Projects?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Contact our team to discuss your structural engineering and construction requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-red-500 hover:bg-red-600 text-white px-8 py-3">
              <Link href="/contact">Get In Touch</Link>
            </Button>
            <Button asChild variant="outline" className="border-red-500 text-red-500 hover:bg-red-50 px-8 py-3">
              <Link href="/portfolio">View More Projects</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
