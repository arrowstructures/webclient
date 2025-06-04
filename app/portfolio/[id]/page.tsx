// // import Image from "next/image"
// // import Link from "next/link"
// // import { ArrowLeft, Building2, Calendar, MapPin, Ruler } from "lucide-react"
// // import { Button } from "@/components/ui/button"
// // import { notFound } from "next/navigation"

// // // Define Project type for better type-checking
// // interface Project {
// //   title: string
// //   category: string
// //   location: string
// //   completionDate: string
// //   area: string
// //   description: string
// //   image: string
// //   gallery: string[]
// //   features: string[]
// //   specifications: string[]
// // }

// // // Define the projects object with keys and their corresponding project details
// // const projects: { [key: string]: Project } = {
// //   "01": {
// //     title: "KKD Nagar Bus Stand",
// //     category: "Transportation",
// //     location: "KKD Nagar, Chennai",
// //     completionDate: "2024",
// //     area: "25,000 sq.ft",
// //     description:
// //       "A state-of-the-art bus terminus designed to enhance public transportation infrastructure. The project features modern amenities, efficient circulation patterns, and sustainable design elements.",
// //     image: "/proj 1.jpg",
// //     gallery: [
// //       "/proj 1.jpg",
// //       "/placeholder.svg?height=400&width=600",
// //       "/placeholder.svg?height=400&width=600",
// //       "/placeholder.svg?height=400&width=600",
// //     ],
// //     features: [
// //       "Modern architectural design with curved roof structure",
// //       "Covered waiting areas for passenger comfort",
// //       "Efficient bus bay layout and circulation",
// //       "Integrated landscaping and street furniture",
// //       "Sustainable lighting and ventilation systems",
// //       "Passenger information display systems",
// //       "Accessible design for all users",
// //       "Integration with existing urban infrastructure",
// //     ],
// //     specifications: [
// //       "10 bus bays",
// //       "Passenger waiting area: 5,000 sq.ft",
// //       "Commercial space: 2,000 sq.ft",
// //       "Parking capacity: 50 vehicles",
// //       "Green spaces: 3,000 sq.ft",
// //     ],
// //   },
// //   "02": {
// //     title: "Mandaveli West Bus Depot",
// //     category: "Mixed-Use",
// //     location: "Mandaveli, Chennai",
// //     completionDate: "2025",
// //     area: "75,000 sq.ft",
// //     description:
// //       "An innovative mixed-use development that combines a modern bus depot with commercial spaces. The project showcases contemporary architecture with sustainable features and seamless integration of different functions.",
// //     image: "/proj 2.jpg",
// //     gallery: [
// //       "/proj 2.jpg",
// //       "/placeholder.svg?height=400&width=600",
// //       "/placeholder.svg?height=400&width=600",
// //       "/placeholder.svg?height=400&width=600",
// //     ],
// //     features: [
// //       "Integrated commercial and transportation hub",
// //       "Glass facade with energy-efficient design",
// //       "Multi-level parking facility",
// //       "Green building certification",
// //       "Advanced building management system",
// //       "Retail and office spaces",
// //       "Public plaza and gathering spaces",
// //       "24/7 security and surveillance",
// //     ],
// //     specifications: [
// //       "15 bus bays",
// //       "Commercial space: 40,000 sq.ft",
// //       "Office space: 20,000 sq.ft",
// //       "Parking capacity: 200 vehicles",
// //       "Green spaces: 5,000 sq.ft",
// //     ],
// //   },
// //   "03": {
// //     title: "Anna Nagar West Bus Depot",
// //     category: "Transit-Oriented",
// //     location: "Anna Nagar West, Chennai",
// //     completionDate: "2025",
// //     area: "100,000 sq.ft",
// //     description:
// //       "A multi-modal transit hub that integrates bus depot facilities with metro connectivity. This transit-oriented development includes commercial spaces, digital displays, and modern architectural elements.",
// //     image: "/proj 3.jpg",
// //     gallery: [
// //       "/proj 3.jpg",
// //       "/placeholder.svg?height=400&width=600",
// //       "/placeholder.svg?height=400&width=600",
// //       "/placeholder.svg?height=400&width=600",
// //     ],
// //     features: [
// //       "Seamless integration with metro station",
// //       "Mixed-use development with retail spaces",
// //       "Digital display integration",
// //       "Modern architectural design",
// //       "Climate-controlled waiting areas",
// //       "Smart ticketing systems",
// //       "Food court and amenities",
// //       "Sustainable design features",
// //     ],
// //     specifications: [
// //       "20 bus bays",
// //       "Retail space: 30,000 sq.ft",
// //       "Metro connection: Direct access",
// //       "Parking capacity: 300 vehicles",
// //       "Food court: 5,000 sq.ft",
// //     ],
// //   },
// //   "04": {
// //     title: "Lakeside Residences",
// //     category: "Residential",
// //     location: "Coimbatore, Tamil Nadu",
// //     completionDate: "2023",
// //     area: "45,000 sq.ft",
// //     description:
// //       "A luxury residential complex featuring modern structural design with emphasis on natural lighting and ventilation. The project includes high-end amenities and sustainable building practices.",
// //     image: "/placeholder.svg?height=400&width=600",
// //     gallery: [
// //       "/placeholder.svg?height=400&width=600",
// //       "/placeholder.svg?height=400&width=600",
// //       "/placeholder.svg?height=400&width=600",
// //       "/placeholder.svg?height=400&width=600",
// //     ],
// //     features: [
// //       "Luxury apartments with modern structural design",
// //       "Emphasis on natural lighting and ventilation",
// //       "High-end amenities including pool and fitness center",
// //       "Sustainable building practices and materials",
// //       "Energy-efficient systems and appliances",
// //       "Landscaped gardens and outdoor spaces",
// //       "Advanced security systems",
// //       "Earthquake-resistant structural design",
// //     ],
// //     specifications: [
// //       "40 residential units",
// //       "Unit sizes: 1,200-2,500 sq.ft",
// //       "Common areas: 8,000 sq.ft",
// //       "Parking: 60 vehicles",
// //       "Green spaces: 10,000 sq.ft",
// //     ],
// //   },
// //   "05": {
// //     title: "Tech Park Office Complex",
// //     category: "Commercial",
// //     location: "Chennai, Tamil Nadu",
// //     completionDate: "2024",
// //     area: "120,000 sq.ft",
// //     description:
// //       "A state-of-the-art office complex designed for technology companies with flexible workspace layouts and advanced structural systems to accommodate future modifications.",
// //     image: "/placeholder.svg?height=400&width=600",
// //     gallery: [
// //       "/placeholder.svg?height=400&width=600",
// //       "/placeholder.svg?height=400&width=600",
// //       "/placeholder.svg?height=400&width=600",
// //       "/placeholder.svg?height=400&width=600",
// //     ],
// //     features: [
// //       "Flexible workspace layouts for technology companies",
// //       "Advanced structural systems for future modifications",
// //       "Smart building technology integration",
// //       "Energy-efficient design with LEED certification",
// //       "High-speed connectivity infrastructure",
// //       "Collaborative spaces and meeting rooms",
// //       "Rooftop garden and recreational areas",
// //       "Sustainable materials and construction methods",
// //     ],
// //     specifications: [
// //       "Office space: 100,000 sq.ft",
// //       "Conference facilities: 5,000 sq.ft",
// //       "Cafeteria: 3,000 sq.ft",
// //       "Parking: 250 vehicles",
// //       "Green spaces: 12,000 sq.ft",
// //     ],
// //   },
// //   "06": {
// //     title: "Green Valley Villas",
// //     category: "Residential",
// //     location: "Ooty, Tamil Nadu",
// //     completionDate: "2023",
// //     area: "60,000 sq.ft",
// //     description:
// //       "An eco-friendly residential development featuring sustainable construction materials and energy-efficient design. The project includes individual villas with modern structural solutions.",
// //     image: "/placeholder.svg?height=400&width=600",
// //     gallery: [
// //       "/placeholder.svg?height=400&width=600",
// //       "/placeholder.svg?height=400&width=600",
// //       "/placeholder.svg?height=400&width=600",
// //       "/placeholder.svg?height=400&width=600",
// //     ],
// //     features: [
// //       "Eco-friendly residential villas",
// //       "Sustainable construction materials",
// //       "Energy-efficient design and systems",
// //       "Modern structural solutions",
// //       "Rainwater harvesting and water recycling",
// //       "Solar power integration",
// //       "Landscaped gardens with native plants",
// //       "Community spaces and amenities",
// //     ],
// //     specifications: [
// //       "25 individual villas",
// //       "Villa sizes: 2,000-3,500 sq.ft",
// //       "Plot sizes: 3,000-5,000 sq.ft",
// //       "Common amenities: 5,000 sq.ft",
// //       "Green spaces: 15,000 sq.ft",
// //     ],
// //   },
// // }

// // // Await params properly before using it
// // export async function generateMetadata({ params }: { params: { id: string } }) {
// //   await new Promise((resolve) => setTimeout(resolve, 0)) // Ensures async resolution

// //   const project = projects[params.id]

// //   if (!project) {
// //     notFound()
// //   }

// //   return {
// //     title: project.title,
// //     description: project.description,
// //   }
// // }

// // export default function ProjectPage({ params }: { params: { id: string } }) {
// //   const project = projects[params.id]

// //   if (!project) {
// //     return <div className="text-center text-xl font-bold text-red-500">Project not found</div>
// //   }

// //   return (
// //     <div className="container py-12 md:py-24">
// //       <Button variant="ghost" asChild className="mb-8">
// //         <Link href="/portfolio">
// //           <ArrowLeft className="mr-2 h-4 w-4" />
// //           Back to Portfolio
// //         </Link>
// //       </Button>

// //       <div className="grid gap-12 lg:grid-cols-2">
// //         <div className="space-y-6">
// //           <div>
// //             <h1 className="text-4xl font-bold tracking-tighter">{project.title}</h1>
// //             <p className="mt-2 text-xl text-muted-foreground">{project.category}</p>
// //           </div>

// //           <div className="grid gap-4 sm:grid-cols-2">
// //             <div className="flex items-center gap-2">
// //               <MapPin className="h-4 w-4 text-primary" />
// //               <span className="text-sm">{project.location}</span>
// //             </div>
// //             <div className="flex items-center gap-2">
// //               <Calendar className="h-4 w-4 text-primary" />
// //               <span className="text-sm">Completion: {project.completionDate}</span>
// //             </div>
// //             <div className="flex items-center gap-2">
// //               <Ruler className="h-4 w-4 text-primary" />
// //               <span className="text-sm">Area: {project.area}</span>
// //             </div>
// //             <div className="flex items-center gap-2">
// //               <Building2 className="h-4 w-4 text-primary" />
// //               <span className="text-sm">{project.category}</span>
// //             </div>
// //           </div>

// //           <div className="space-y-4">
// //             <h2 className="text-2xl font-bold">Project Overview</h2>
// //             <p className="text-muted-foreground">{project.description}</p>
// //           </div>

// //           <div className="space-y-4">
// //             <h2 className="text-2xl font-bold">Key Features</h2>
// //             <ul className="grid gap-2 sm:grid-cols-2">
// //               {project.features.map((feature, index) => (
// //                 <li key={index} className="flex items-start text-sm text-muted-foreground">
// //                   <div className="mr-2 h-1.5 w-1.5 rounded-full bg-primary mt-1.5" />
// //                   <span>{feature}</span>
// //                 </li>
// //               ))}
// //             </ul>
// //           </div>

// //           <div className="space-y-4">
// //             <h2 className="text-2xl font-bold">Specifications</h2>
// //             <ul className="grid gap-2 sm:grid-cols-2">
// //               {project.specifications.map((spec, index) => (
// //                 <li key={index} className="flex items-start text-sm text-muted-foreground">
// //                   <div className="mr-2 h-1.5 w-1.5 rounded-full bg-primary mt-1.5" />
// //                   <span>{spec}</span>
// //                 </li>
// //               ))}
// //             </ul>
// //           </div>
// //         </div>

// //         <div className="space-y-6">
// //           <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
// //             <Image
// //               src={project.image || "/placeholder.svg"}
// //               alt={project.title}
// //               fill
// //               className="object-cover"
// //               priority
// //             />
// //           </div>

// //           <div className="grid grid-cols-3 gap-2">
// //             {project.gallery.slice(1, 4).map((image, index) => (
// //               <div key={index} className="relative aspect-square overflow-hidden rounded-lg">
// //                 <Image
// //                   src={image || "/placeholder.svg"}
// //                   alt={`${project.title} gallery ${index + 1}`}
// //                   fill
// //                   className="object-cover"
// //                 />
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   )
// // }
// // app/portfolio/[id]/page.tsx
// import { supabase } from "@/lib/supabase"
// import { notFound } from "next/navigation"
// import Image from "next/image"

// export default async function ProjectDetails({ params }: { params: { id: string } }) {
//   const { data: project, error } = await supabase
//     .from("projects")
//     .select("*")
//     .eq("id", params.id)
//     .single()

//   if (error || !project) return notFound()

//   return (
//     <div className="container py-12 md:py-24">
//       <h1 className="text-4xl font-bold mb-4">{project.project_name}</h1>
//       <Image
//         src={project.image || "/placeholder.svg"}
//         alt={project.project_name}
//         width={800}
//         height={400}
//         className="rounded-md object-cover"
//       />
//       <p className="mt-6 text-muted-foreground">{project.description}</p>
//       {/* Add more project details as needed */}
//     </div>
//   )
// }
import { notFound } from "next/navigation"
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default async function ProjectDetails({ params }: { params: { id: string } }) {
  const supabase = createServerComponentClient({ cookies })

  const { data: project, error } = await supabase
    .from("projects")
    .select("*")
    .eq("id", params.id)
    .single()

  if (error || !project) {
    console.error("Error fetching project:", error)
    return notFound()
  }

  return (
    <div className="container py-12 md:py-24">
      {/* Back button */}
      <Link
        href="/portfolio"
        className="inline-flex items-center mb-6 text-sm text-primary hover:underline"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Portfolio
      </Link>

      <h1 className="text-4xl font-bold mb-4">{project.project_name}</h1>
      <Image
        src={project.image || "/placeholder.svg"}
        alt={project.project_name}
        width={800}
        height={400}
        className="rounded-md object-cover"
      />
      <p className="mt-6 text-muted-foreground">{project.description}</p>
    </div>
  )
}
