"use client";

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Building2, Users2, Award, Lightbulb } from "lucide-react"
import { Button } from "@/components/ui/button"
import MainLayout from "@/components/layouts/main-layout"
import { HeroSlider } from "@/components/hero-slider"
import { useEffect, useState } from "react"
import { supabase } from "@/lib/supabase"

type Project = {
  id: string
  project_name: string
  description: string
  image: string
}

export default function HomePage() {
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)

    useEffect(() => {
    const fetchProjects = async () => {
      const { data, error } = await supabase.from("projects").select("*")
      .order("created_at", { ascending: false })
      .limit(3)
      if (error) {
        console.error("Error fetching projects:", error.message)
      } else {
        setProjects(data as Project[])
      }
      setLoading(false)
    }
    fetchProjects()
  }, [])

  console.log("Projects:", projects)


  const stats = [
    { icon: Building2, value: "500+", label: "Projects Completed" },
    { icon: Users2, value: "50+", label: "Team Members" },
    { icon: Award, value: "25+", label: "Awards Won" },
    { icon: Lightbulb, value: "15+", label: "Years Experience" },
  ]

  return (
<div>
      <HeroSlider />

      <section className="py-12 md:py-24">
        <div className="container">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Featured Projects</h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <Link
                key={project.id}
                href={`/portfolio/${project.id}`}
                className="group relative overflow-hidden rounded-lg"
              >
               <img
              src={`${project.image}`}
              width={500}
              height={500}
              className="aspect-[4/3] object-cover transition-transform duration-300 group-hover:scale-105"
              />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 p-4 text-white">
                  <h3 className="text-lg font-bold">{project.project_name}</h3>
                  <p className="text-sm opacity-80">{project.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t bg-muted py-12 md:py-24" id="about">
        <div className="container">
          <div className="grid gap-12 md:grid-cols-2">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">About Arrow Structures</h2>
              <p className="text-muted-foreground">
                Founded in 2017, Arrow Structures has steadily grown into one of the leading Structural Consultancy and
                Civil Construction firms in the region. Spearheaded by Dr. Prabu Dev, M.E., Ph.D., our Principal
                Structural Engineer, the company was built on a foundation of technical excellence, quality commitment,
                and client-centric values.
              </p>
              <p className="text-muted-foreground">
                At Arrow Structures, we believe that every structure tells a story — and we make sure yours is built
                with strength, elegance, and trust. From concept to completion, we ensure that all our projects meet
                industry standards while maintaining the perfect balance between quality, cost-efficiency,
                serviceability, and sustainability.
              </p>
              <Button asChild>
                <Link href="/about">
                  Learn More About Us <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="grid gap-8 sm:grid-cols-2">
              {stats.map((stat) => (
                <div key={stat.label} className="flex flex-col items-center space-y-2 text-center">
                  <stat.icon className="h-12 w-12 text-primary" />
                  <div className="text-3xl font-bold">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-24" id="services">
        <div className="container">
          <div className="mx-auto max-w-[900px] text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Services</h2>
            <p className="mt-4 text-muted-foreground">Comprehensive structural engineering and construction services</p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
            <div className="rounded-lg border bg-card p-6">
              <h3 className="font-bold">Residential Projects</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Custom residential design and construction solutions for modern living.
              </p>
            </div>
            <div className="rounded-lg border bg-card p-6">
              <h3 className="font-bold">Commercial Development</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Commercial buildings and infrastructure development projects.
              </p>
            </div>
          </div>
          <div className="mt-8 text-center">
            <Button asChild>
              <Link href="/services">
                View All Services <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="border-t bg-muted py-12 md:py-24" id="contact">
        <div className="container">
          <div className="grid gap-12 md:grid-cols-2">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Get in Touch</h2>
              <p className="text-muted-foreground">
                Interested in working with us? Contact our team to discuss your project requirements.
              </p>
              <div className="space-y-2">
                <p className="text-sm">Email: contact@arrowstructures.com</p>
                <p className="text-sm">Phone: +91 88705 94827</p>
                <p className="text-sm">
                  Address: 5, Guru Govind Singh Road, R.S Puram,
                  <br /> Coimbatore – 641002, Tamil Nadu, India.
                </p>
              </div>
              <Button asChild>
                <Link href="/contact">
                  Contact Us <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="relative aspect-video overflow-hidden rounded-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.360271171325!2d76.95477537416216!3d11.00215795480896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba858fc91c8cf23%3A0x1a2e6e134d037a35!2s5%2C%20Guru%20Govind%20Singh%20Rd%2C%20R.S.%20Puram%2C%20Coimbatore%2C%20Tamil%20Nadu%20641002!5e0!3m2!1sen!2sin!4v1707744235092!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
      </div>
    
  )
}
