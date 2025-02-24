import Image from "next/image"
import "./loading"
import { Award, Users, Building, Lightbulb } from "lucide-react"

export default function AboutPage() {
  const stats = [
    { icon: Building, value: "500+", label: "Projects Completed" },
    { icon: Users, value: "50+", label: "Team Members" },
    { icon: Award, value: "25+", label: "Awards Won" },
    { icon: Lightbulb, value: "15+", label: "Years Experience" },
  ]

  const team = [
    {
      name: "John Smith",
      role: "Principal Architect",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      name: "Sarah Johnson",
      role: "Design Director",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      name: "Michael Brown",
      role: "Project Manager",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      name: "Emily Davis",
      role: "Interior Designer",
      image: "/placeholder.svg?height=400&width=400",
    },
  ]

  return (
    <>
      <section className="bg-muted py-12 md:py-24">
        <div className="container">
          <div className="grid gap-12 md:grid-cols-2">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">About Arrow Structures</h1>
              <p className="text-xl text-muted-foreground">
              Arrow Structures is a design-led Structural and Civil Engineering Consultancy based in India, established in 2017. The company is driven by a passion for innovation, creativity, and practical engineering solutions. Arrow Structures specializes in delivering superior and cost-effective structural designs across all stages of building construction. From initial concept and feasibility studies to complete design development, we ensure each project is meticulously planned and executed.
              </p>
            </div>
            <div className="relative aspect-video overflow-hidden rounded-lg">
              <Image src="/home.jpg?height=400&width=600" alt="Office" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-24">
        <div className="container">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col items-center space-y-2 text-center">
                <stat.icon className="h-12 w-12 text-primary" />
                <div className="text-3xl font-bold">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t bg-muted py-12 md:py-24">
        <div className="container">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Mission</h2>
          <div className="mt-8 grid gap-12 md:grid-cols-3">
            <p className="text-muted-foreground">
              To create innovative architectural solutions that enhance the way people live, work, and interact with
              their environment.
            </p>
            <p className="text-muted-foreground">
              To promote sustainable design practices that minimize environmental impact while maximizing comfort and
              functionality.
            </p>
            <p className="text-muted-foreground">
              To collaborate with our clients in bringing their architectural visions to life through creative and
              practical solutions.
            </p>
          </div>
        </div>
      </section>

    </>
  )
}

