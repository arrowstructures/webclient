import { BarChart3, Building2, Compass, Home, Leaf, PencilRuler, Settings2, Users2 } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function ServicesPage() {
  const services = [
    {
      icon: Home,
      title: "Residential Architecture",
      description: "Custom home design and renovation solutions tailored to your lifestyle.",
    },
    {
      icon: Building2,
      title: "Commercial Architecture",
      description: "Innovative commercial spaces that enhance productivity and user experience.",
    },
    {
      icon: PencilRuler,
      title: "Interior Design",
      description: "Thoughtful interior spaces that blend aesthetics with functionality.",
    },
    {
      icon: Compass,
      title: "Urban Planning",
      description: "Sustainable urban development solutions for communities.",
    },
    {
      icon: Leaf,
      title: "Sustainable Design",
      description: "Eco-friendly architectural solutions for a better future.",
    },
    {
      icon: Settings2,
      title: "Project Management",
      description: "End-to-end project management and construction supervision.",
    },
    {
      icon: BarChart3,
      title: "Feasibility Studies",
      description: "Comprehensive analysis and planning for project success.",
    },
    {
      icon: Users2,
      title: "Consultation",
      description: "Expert architectural consultation and advisory services.",
    },
  ]

  return (
    <>
      <section className="bg-muted py-12 md:py-24">
        <div className="container">
          <div className="max-w-[900px]">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">Our Services</h1>
            <p className="mt-4 text-xl text-muted-foreground">
              We offer comprehensive architectural and design services to bring your vision to life.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-24">
        <div className="container">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Card key={service.title}>
                <CardHeader>
                  <service.icon className="h-10 w-10 text-primary" />
                  <CardTitle className="mt-4">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t bg-muted py-12 md:py-24">
        <div className="container">
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Our Process</h3>
              <p className="text-muted-foreground">
                We follow a systematic approach from concept to completion, ensuring every detail is perfect.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Quality Assurance</h3>
              <p className="text-muted-foreground">
                Our team maintains the highest standards of quality throughout the project lifecycle.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Client Support</h3>
              <p className="text-muted-foreground">
                We provide ongoing support and maintenance services after project completion.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

