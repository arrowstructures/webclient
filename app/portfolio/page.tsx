// "use client"

// import { useEffect, useState } from "react"
// import Image from "next/image"
// import Link from "next/link"
// import { Button } from "@/components/ui/button"
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
// import { supabase } from "@/lib/supabase"

// // Import supabase client
// export default function PortfolioPage() {
//   // States for categories and projects
//   const [categories, setCategories] = useState<string[]>(["All"])
//   const [projects, setProjects] = useState<any[]>([])

//   useEffect(() => {
//     async function fetchData() {
//       // Fetch projects from supabase
//       const { data: projectsData, error: projectsError } = await supabase
//         .from("projects") // your table name
//         .select("*")
//         .order("id", { ascending: true })

//       if (projectsError) {
//         console.error("Error fetching projects:", projectsError)
//         return
//       }

//       if (projectsData) {
//         setProjects(projectsData)
        
//         // Extract unique categories from projects and add "All" at the front
//         const uniqueCategories = Array.from(new Set(projectsData.map((p) => p.category)))
//         setCategories(["All", ...uniqueCategories])
//       }
//     }

//     fetchData()
//   }, [])

//   return (
//     <div className="container py-12 md:py-24">
//       <div className="space-y-4">
//         <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">Our Portfolio</h1>
//         <p className="max-w-[700px] text-muted-foreground">
//           Explore our diverse portfolio of structural engineering and construction projects across various sectors.
//         </p>
//       </div>

//       <Tabs defaultValue="All" className="mt-12">
//         <TabsList className="flex flex-wrap">
//           {categories.map((category) => (
//             <TabsTrigger key={category} value={category} className="text-sm">
//               {category}
//             </TabsTrigger>
//           ))}
//         </TabsList>
//         {categories.map((category) => (
//           <TabsContent key={category} value={category}>
//             <div className="grid gap-6 lg:grid-cols-2">
//               {projects
//                 .filter((project) => category === "All" || project.category === category)
//                 .map((project: any, index: number) => (
//                   <Card key={project.id} className="overflow-hidden">
//                     <div className="relative aspect-video">
//                       <Image
//                         src={project.image || "/placeholder.svg"}
//                         alt={project.title}
//                         fill
//                         className="object-cover"
//                         sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
//                         priority={index === 0}
//                       />
//                     </div>
//                     <CardHeader>
//                       <CardTitle>{project.project_name}</CardTitle>
//                       <CardDescription>{project.category}</CardDescription>
//                     </CardHeader>
//                     <CardContent>
//                       <p className="mb-4 text-sm text-muted-foreground">
//                         {project.description || "No description available."}
//                       </p>
//                       <div className="mb-4 grid grid-cols-2 gap-2">
//                         {(project.details || []).map((detail: string, idx: number) => (
//                           <div key={idx} className="flex items-center text-sm">
//                             <div className="mr-2 h-1.5 w-1.5 rounded-full bg-primary" />
//                             {detail}
//                           </div>
//                         ))}
//                       </div>
//                       <div className="mt-6 flex gap-2">
//                         {(project.gallery || []).slice(0, 3).map((image: string, idx: number) => (
//                           <div key={idx} className="relative h-16 w-16 overflow-hidden rounded-md">
//                             <Image
//                               src={image || "/placeholder.svg"}
//                               alt={`${project.title} gallery ${idx + 1}`}
//                               fill
//                               className="object-cover"
//                             />
//                           </div>
//                         ))}
//                         {(project.gallery || []).length > 3 && (
//                           <div className="relative h-16 w-16 overflow-hidden rounded-md bg-muted flex items-center justify-center">
//                             <span className="text-sm font-medium">
//                               +{(project.gallery || []).length - 3}
//                             </span>
//                           </div>
//                         )}
//                       </div>
//                       <Button asChild className="mt-4" aria-label={`View details for ${project.title}`}>
//                         <Link href={`/portfolio/${project.id}`}>View Project Details</Link>
//                       </Button>
//                     </CardContent>
//                   </Card>
//                 ))}
//             </div>
//           </TabsContent>
//         ))}
//       </Tabs>
//     </div>
//   )
// }
"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { supabase } from "@/lib/supabase"

export default function PortfolioPage() {
  const [categories, setCategories] = useState<string[]>(["All"])
  const [projects, setProjects] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchData() {
      const { data: projectsData, error: projectsError } = await supabase
        .from("projects")
        .select("*")
        .order("id", { ascending: true })

      if (projectsError) {
        console.error("Error fetching projects:", projectsError)
        return
      }

      if (projectsData) {
        setProjects(projectsData)
        const uniqueCategories = Array.from(new Set(projectsData.map((p) => p.category)))
        setCategories(["All", ...uniqueCategories])
      }

      setLoading(false)
    }

    fetchData()
  }, [])

  return (
    <div className="container py-12 md:py-24">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">Our Portfolio</h1>
        <p className="max-w-[700px] text-muted-foreground">
          Explore our diverse portfolio of structural engineering and construction projects across various sectors.
        </p>
      </div>

      {loading ? (
        <div className="flex justify-center items-center py-32">
          <div className="w-12 h-12 border-4 border-red-500 border-t-transparent rounded-full animate-spin" />
        </div>
      ) : (
        <Tabs defaultValue="All" className="mt-12">
          <TabsList className="flex flex-wrap">
            {categories.map((category) => (
              <TabsTrigger key={category} value={category} className="text-sm">
                {category}
              </TabsTrigger>
            ))}
          </TabsList>

          {categories.map((category) => (
            <TabsContent key={category} value={category}>
              <div className="grid gap-6 lg:grid-cols-2">
                {projects
                  .filter((project) => category === "All" || project.category === category)
                  .map((project: any, index: number) => (
                    <Card key={project.id} className="overflow-hidden">
                      <div className="relative aspect-video">
                        <Image
                          src={project.image || "/placeholder.svg"}
                          alt={project.project_name}
                          fill
                          className="object-cover"
                          priority={index === 0}
                        />
                      </div>
                      <CardHeader>
                        <CardTitle>{project.project_name}</CardTitle>
                        <CardDescription>{project.category}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="mb-4 text-sm text-muted-foreground">
                          {project.description || "No description available."}
                        </p>
                        <Button asChild className="mt-4">
                          <Link href={`/portfolio/${project.id}`}>View Project Details</Link>
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      )}
    </div>
  )
}
