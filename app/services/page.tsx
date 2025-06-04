import { Home, Building2, PencilRuler, Settings2, BarChart3, Users2 } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function ServicesPage() {
  const mainServices = [
    {
      icon: Home,
      title: "Residential Projects",
      description: "Custom residential design and construction solutions tailored to modern living requirements.",
      features: [
        "Individual Houses & Villas",
        "Apartment Complexes",
        "Residential Renovations",
        "Interior Design Services",
      ],
    },
    {
      icon: Building2,
      title: "Commercial Development",
      description: "Comprehensive commercial building solutions for businesses and enterprises.",
      features: ["Office Buildings", "Retail Complexes", "Industrial Facilities", "Mixed-Use Developments"],
    },
  ]

  const supportServices = [
    {
      icon: PencilRuler,
      title: "Structural Design",
      description: "Expert structural engineering and design services for all project types.",
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
      description: "Expert structural engineering consultation and advisory services.",
    },
  ]

  return (
    <>
      <section className="bg-muted py-12 md:py-24">
        <div className="container">
          <div className="max-w-[900px]">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">Our Services</h1>
            <p className="mt-4 text-xl text-muted-foreground">
              We specialize in residential and commercial structural engineering and construction services.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-24">
        <div className="container">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-8">Main Services</h2>
          <div className="grid gap-8 lg:grid-cols-2">
            {mainServices.map((service) => (
              <Card key={service.title} className="h-full">
                <CardHeader>
                  <service.icon className="h-12 w-12 text-primary mb-4" />
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm">
                        <div className="mr-3 h-2 w-2 rounded-full bg-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t bg-muted py-12 md:py-24">
        <div className="container">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-8">Supporting Services</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {supportServices.map((service) => (
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

      <section className="py-12 md:py-24">
        <div className="container">
          <div className="grid gap-12 md:grid-cols-3">
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Our Process</h3>
              <p className="text-muted-foreground">
                We follow a systematic approach from concept to completion, ensuring every detail meets the highest
                standards of quality and safety.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Quality Assurance</h3>
              <p className="text-muted-foreground">
                Our team maintains the highest standards of structural integrity and construction quality throughout the
                project lifecycle.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Client Support</h3>
              <p className="text-muted-foreground">
                We provide ongoing support and maintenance services after project completion to ensure long-term
                satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
