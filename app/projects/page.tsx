import Image from "next/image"
import Link from "next/link"
import "./loading"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ProjectsPage() {
  const categories = ["All", "Transportation", "Mixed-Use", "Transit-Oriented"]
  const projects = [
    {
      id: "01",
      title: "KKD Nagar Bus Stand",
      category: "Transportation",
      description:
        "A modern bus terminus featuring sustainable design elements, efficient circulation patterns, and passenger-friendly amenities. The project includes covered waiting areas, well-planned bus bays, and integrated landscaping.",
      image: "/proj 1.jpg",
      details: [
        "Modern architectural design",
        "Sustainable features",
        "Efficient passenger flow",
        "Integrated amenities",
      ],
    },
    {
      id: "02",
      title: "Mandaveli West Bus Depot",
      category: "Mixed-Use",
      description:
        "An innovative commercial complex integrated with a bus depot, featuring contemporary design with glass facades and sustainable elements. The development combines transportation infrastructure with modern office spaces.",
      image: "/proj 2.jpg",
      details: ["Integrated transport hub", "Commercial spaces", "Green building features", "Modern facades"],
    },
    {
      id: "03",
      title: "Anna Nagar West Bus Depot",
      category: "Transit-Oriented",
      description:
        "A multi-modal transit station that seamlessly integrates bus depot facilities with metro connectivity and retail spaces. The development features a distinctive architectural design with digital display integration.",
      image: "/proj 3.jpg",
      details: ["Multi-modal integration", "Retail spaces", "Metro connectivity", "Digital displays"],
    },
  ]

  return (
    <div className="container py-12 md:py-24">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">Our Projects</h1>
        <p className="max-w-[700px] text-muted-foreground">
          Explore our portfolio of innovative transportation infrastructure and urban development projects.
        </p>
      </div>

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
                .map((project, index) => (
                  <Card key={project.id} className="overflow-hidden">
                    <div className="relative aspect-video">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover"
                        priority={index === 0}
                      />
                    </div>
                    <CardHeader>
                      <CardTitle>{project.title}</CardTitle>
                      <CardDescription>{project.category}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-4 text-sm text-muted-foreground">{project.description}</p>
                      <div className="mb-4 grid grid-cols-2 gap-2">
                        {project.details.map((detail, index) => (
                          <div key={index} className="flex items-center text-sm">
                            <div className="mr-2 h-1.5 w-1.5 rounded-full bg-primary" />
                            {detail}
                          </div>
                        ))}
                      </div>
                      <Button asChild>
                        <Link href={`/projects/${project.id}`}>View Project Details</Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}

