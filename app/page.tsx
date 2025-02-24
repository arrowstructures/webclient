"use client"; 

import Image from "next/image";
import Link from "next/link";
import Marquee from 'react-fast-marquee';
import { Button } from "@/components/ui/button";
import { ArrowRight, Users2, Building2, Leaf, Settings2 } from "lucide-react";



export default function HomePage() {
  const clientLogos = [
    "/cust1.jpg",
    "/cust2.jpg",
    "/cust3.jpg",
    "/cust4.png",
    "/cust5.jpg",
    "/cust6.jpg",
    "/cust7.jpg",
  ];

  const projects = [
    {
      id: "01",
      title: "KKD Nagar Bus Stand",
      category: "Transportation",
      image: "/proj 1.jpg",
      description: "Modern bus terminus with sustainable design features",
    },
    {
      id: "02",
      title: "Mandaveli West Bus Depot",
      category: "Mixed-Use",
      image: "/proj 2.jpg",
      description: "Integrated commercial complex and transport hub",
    },
    {
      id: "03",
      title: "Anna Nagar West Bus Depot",
      category: "Transit-Oriented",
      image: "/proj 3.jpg",
      description: "Multi-modal transit station with retail spaces",
    },
  ]

  return (
    <>
      <section className="relative h-[80vh] overflow-hidden">
        <Image
          src="/home.jpg"
          alt="Hero Image"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="container relative z-10 flex h-full flex-col justify-center text-white">
          <h1 className="text-5xl font-bold tracking-tighter sm:text-6xl xl:text-7xl/none">ARROW STRUCTURES</h1>
          <p className="mt-4 max-w-[600px] text-base sm:text-xl">
            Innovative architectural solutions for modern transportation infrastructure and urban development.
          </p>
          <Button asChild className="mt-8 w-fit" size="lg">
            <Link href="/projects">
              View Projects <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      <section className="py-12 md:py-24">
        <div className="container">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Featured Projects</h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <Link
                key={project.id}
                href={`/projects/${project.id}`}
                className="group relative overflow-hidden rounded-lg"
              >
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={400}
                  height={500}
                  className="aspect-[4/3] object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 p-4 text-white">
                  <div className="text-sm font-medium">{project.id}</div>
                  <h3 className="text-lg font-bold">{project.title}</h3>
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
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">About Us</h2>
              <p className="text-muted-foreground">
                Arrow Structures specializes in designing and developing modern transportation infrastructure and urban
                spaces. With years of experience in creating sustainable and efficient transit solutions, we transform
                cities through innovative architectural design.
              </p>
              <Button asChild>
                <Link href="/about">
                  Learn More About Us <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Users2 className="h-8 w-8 text-primary" />
                <h3 className="font-bold">Expert Team</h3>
                <p className="text-sm text-muted-foreground">
                  Experienced professionals dedicated to excellence in design and execution.
                </p>
              </div>
              <div className="space-y-2">
                <Building2 className="h-8 w-8 text-primary" />
                <h3 className="font-bold">Modern Design</h3>
                <p className="text-sm text-muted-foreground">
                  Contemporary architectural solutions that prioritize functionality.
                </p>
              </div>
              <div className="space-y-2">
                <Leaf className="h-8 w-8 text-primary" />
                <h3 className="font-bold">Sustainability</h3>
                <p className="text-sm text-muted-foreground">
                  Eco-friendly approaches to urban infrastructure development.
                </p>
              </div>
              <div className="space-y-2">
                <Settings2 className="h-8 w-8 text-primary" />
                <h3 className="font-bold">Innovation</h3>
                <p className="text-sm text-muted-foreground">Cutting-edge solutions for modern transit requirements.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-24" id="services">
        <div className="container">
          <div className="mx-auto max-w-[900px] text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Services</h2>
            <p className="mt-4 text-muted-foreground">
              Comprehensive architectural and infrastructure development services
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg border bg-card p-6">
              <h3 className="font-bold">Transport Infrastructure</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Design and development of bus terminals, depots, and transit stations.
              </p>
            </div>
            <div className="rounded-lg border bg-card p-6">
              <h3 className="font-bold">Urban Planning</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Integrated solutions for urban mobility and space utilization.
              </p>
            </div>
            <div className="rounded-lg border bg-card p-6">
              <h3 className="font-bold">Commercial Development</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Mixed-use developments integrated with transport infrastructure.
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

      <section className="mt-3">
      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-center">Our Esteemed Customers</h2>
      <Marquee speed={50} className="mt-20" pauseOnHover={true} loop={0}>
        <div className="flex items-center">
          {/* First Set of Logos */}
          {clientLogos.map((logo, index) => (
            <div
              key={`first-${index}`}
              className="flex-shrink-0 w-32 h-32 flex items-center justify-center overflow-hidden mx-5"
            >
              <img src={logo} alt={`Client Logo ${index + 1}`} className="w-full h-full object-contain " />
            </div>
          ))}
          {/* Add an explicit spacer between the first and duplicated sets */}
          <div className="flex-shrink-0 w-10 h-32"></div>
          {/* Second Set of Logos */}
          {clientLogos.map((logo, index) => (
            <div
              key={`second-${index}`}
              className="flex-shrink-0 w-32 h-32  flex items-center justify-center overflow-hidden mx-5"
            >
              <img src={logo} alt={`Client Logo ${index + 1}`} className="w-full h-full object-contain " />
            </div>
          ))}
        </div>
      </Marquee>
    </section><br/><br/><br/>
      

      <section className="border-t bg-muted py-12 md:py-24" id="contact">
        <div className="container">
          <div className="grid gap-12 md:grid-cols-2">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Get in Touch</h2>
              <p className="text-muted-foreground">
                Interested in working with us? Contact our team to discuss your project requirements.
              </p>
              <div className="space-y-2">
                <p className="text-sm">Email: info@arrowstructures.com</p>
                <p className="text-sm">Phone: +91 88705 94827</p>
                <p className="text-sm">Address: 5, Guru Govind Singh Road, R.S Puram,<br/> Coimbatore – 641002, Tamil Nadu, India.</p>
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
    </>
  )
}

