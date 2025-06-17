"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Award, Users, Building, Lightbulb, Mail, Phone, MapPin, ArrowRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Skeleton } from "@/components/ui/skeleton"
import { supabase } from "@/lib/supabase"
import { StructuralBackground } from "@/components/structural-background"
import Link from "next/link"
import { Button } from "@/components/ui/button"

type TeamMember = {
  id?: number
  name: string
  designation: string
  profile_image: string
  email: string
  phone?: string
  specialization?: string[]
  bio?: string
  phdProgress?: number
  phdStatus?: string
}

export default function AboutPage() {
  const stats = [
    { icon: Building, value: "500+", label: "Projects Completed" },
    { icon: Users, value: "50+", label: "Team Members" },
    { icon: Award, value: "25+", label: "Awards Won" },
    { icon: Lightbulb, value: "15+", label: "Years Experience" },
  ]

  const ceoData: TeamMember = {
    name: "Er. Prabhu Dev",
    designation: "Principal Structural Engineer & CEO",
    profile_image: "/team1.jpg?height=400&width=400",
    email: "prabu@arrowstructures.com",
    phone: "+91 98765 43210",
    specialization: ["Structural Engineering", "Project Management", "Research & Development"],
    bio: "Er. Prabhu Dev M.E., P̅h̅.D̅.,,is the visionary leader and Principal Structural Engineer behind Arrow Structures. With a rich academic background and extensive field experience, he brings a rare blend of engineering depth and practical insight, steering the firm with integrity, innovation, and a relentless pursuit of perfection. Currently advancing his doctoral research while leading the company's mission to deliver innovative structural solutions.\n\nProfessional Recognitions & Industry Leadership:\n\n• Chartered Structural Engineer – Member of the Institution of Engineers (India), upholding the highest standards in professional engineering.\n\n• Grade-1 Licensed Structural Engineer – Certified by the Chennai Metropolitan Development Authority (CMDA) to handle complex structural projects.\n\n• Registered Gardening-1 Structural Engineer (CMDA) – Authorized for specialized roles in urban development and green structure planning.\n\n• Lifetime Member – Association of Consulting Civil Engineers (India), contributing to the growth of engineering best practices nationwide.\n\n• Academic Panel Member – Serves on the Board of Studies in multiple universities, ensuring that academic curricula remain aligned with industry advancements.",
  }

  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchTeam = async () => {
      try {
        const { data, error } = await supabase.from("team_members").select("*").order("created_at", { ascending: true })

        if (error) {
          throw error
        }

        setTeamMembers([ceoData, ...(data || [])])
      } catch (err) {
        console.error("Failed to fetch team members:", err)
        setError("Failed to load team members. Please try again later.")
        setTeamMembers([ceoData])
      } finally {
        setLoading(false)
      }
    }

    fetchTeam()
  }, [])

  const TeamMemberSkeleton = () => (
    <div className="flex flex-col md:flex-row items-center gap-6 sm:gap-8">
      <Skeleton className="w-full max-w-[280px] sm:max-w-[300px] md:w-[300px] h-[280px] sm:h-[300px] rounded-lg" />
      <div className="flex-1 space-y-4 w-full">
        <Skeleton className="h-6 sm:h-8 w-3/4" />
        <Skeleton className="h-4 sm:h-6 w-full" />
        <Skeleton className="h-3 sm:h-4 w-full" />
        <Skeleton className="h-3 sm:h-4 w-full" />
        <Skeleton className="h-3 sm:h-4 w-3/4" />
      </div>
    </div>
  )

  return (
    <div className="relative">
      <StructuralBackground />
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="bg-muted py-8 sm:py-12 md:py-16 lg:py-24">
          <div className="container px-4 sm:px-6">
            <div className="grid gap-8 sm:gap-10 md:gap-12 lg:grid-cols-2 items-center">
              <div className="space-y-4 sm:space-y-6 order-2 lg:order-1">
                <Badge className="w-fit">Established 2017 • Growing Excellence</Badge>
                <div>
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter leading-tight">
                    About Arrow Structures
                  </h1>
                  <div className="mt-3 sm:mt-4 h-1 w-12 sm:w-16 bg-primary rounded-full"></div>
                </div>
                <p className="text-base sm:text-lg lg:text-xl text-muted-foreground leading-relaxed">
                  Established in 2017, Arrow Structures has emerged as a trusted name in the field of Structural
                  Consultancy and Civil Construction, recognized for its technical expertise, quality-driven approach,
                  and unwavering commitment to client satisfaction. What began as a focused structural engineering
                  practice has grown into one of the region's most respected firms, delivering excellence across a wide
                  spectrum of residential, commercial, and infrastructure projects.
                </p>
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    <span>Regional Leader</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="h-4 w-4" />
                    <span>Quality Certified</span>
                  </div>
                </div>
              </div>
              <div className="relative h-[300px] sm:h-[400px] md:h-[500px] w-full overflow-hidden rounded-xl shadow-2xl order-1 lg:order-2">
                <Image src="/home.jpg" alt="Arrow Structures Office" fill className="object-cover" priority />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-8 sm:py-12 md:py-16 lg:py-24">
          <div className="container px-4 sm:px-6">
            <div className="grid gap-4 sm:gap-6 md:gap-8 grid-cols-2 lg:grid-cols-4">
              {stats.map((stat, index) => (
                <Card key={stat.label} className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="pt-4 sm:pt-6 pb-4 sm:pb-6 px-3 sm:px-6">
                    <stat.icon className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 text-primary mx-auto mb-3 sm:mb-4" />
                    <div className="text-2xl sm:text-3xl font-bold mb-1 sm:mb-2">{stat.value}</div>
                    <div className="text-xs sm:text-sm text-muted-foreground leading-tight">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Company Story Section */}
        <section className="py-8 sm:py-12 md:py-16 lg:py-24 bg-gray-100">
          <div className="container px-4 sm:px-6">
            <div className="max-w-4xl mx-auto text-center space-y-6 sm:space-y-8">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tighter">Our Story</h2>
              <div className="space-y-4 sm:space-y-6 text-left">
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                  At the heart of Arrow Structures is Er.Prabhu Dev, M.E., Ph.D., our Principal Structural Engineer and
                  the visionary behind the firm. With a rich academic background and extensive field experience, Dr.
                  Prabhu Dev brings a rare blend of engineering depth and practical insight, steering the firm with
                  integrity, innovation, and a relentless pursuit of perfection.
                </p>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  We believe that every structure is more than just concrete and steel — it is a story of purpose,
                  design, and resilience. At Arrow Structures, we work closely with architects, contractors, and clients
                  to ensure that each project reflects these values, from initial concept through to final completion.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className="border-t py-8 sm:py-12 md:py-16 lg:py-24">
          <div className="container px-4 sm:px-6">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tighter mb-3 sm:mb-4">
                Our Mission & Vision
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
                Driving innovation in structural engineering while maintaining our commitment to excellence and
                sustainability.
              </p>
            </div>
            <div className="grid gap-6 sm:gap-8 grid-cols-1 md:grid-cols-3">
              <Card className="border-0 shadow-sm hover:shadow-md transition-shadow duration-200">
                <CardContent className="pt-4 sm:pt-6 px-4 sm:px-6">
                  <Lightbulb className="h-6 w-6 sm:h-8 sm:w-8 text-primary mb-3 sm:mb-4" />
                  <h3 className="font-semibold mb-2 sm:mb-3 text-base sm:text-lg">Innovation</h3>
                  <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                    To create innovative structural solutions that enhance the way people live, work, and interact with
                    their environment through superior engineering and design.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-sm hover:shadow-md transition-shadow duration-200">
                <CardContent className="pt-4 sm:pt-6 px-4 sm:px-6">
                  <Building className="h-6 w-6 sm:h-8 sm:w-8 text-primary mb-3 sm:mb-4" />
                  <h3 className="font-semibold mb-2 sm:mb-3 text-base sm:text-lg">Sustainability</h3>
                  <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                    To promote sustainable construction practices that minimize environmental impact while maximizing
                    structural integrity, functionality, and cost-effectiveness.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-sm hover:shadow-md transition-shadow duration-200">
                <CardContent className="pt-4 sm:pt-6 px-4 sm:px-6">
                  <Users className="h-6 w-6 sm:h-8 sm:w-8 text-primary mb-3 sm:mb-4" />
                  <h3 className="font-semibold mb-2 sm:mb-3 text-base sm:text-lg">Collaboration</h3>
                  <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                    To collaborate with our clients in bringing their structural visions to life through creative and
                    practical engineering solutions that stand the test of time.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-8 sm:py-12 md:py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-white">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center mb-8 sm:mb-12 md:mb-16">
              <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-red-100 rounded-full mb-4 sm:mb-6">
                <Users className="h-6 w-6 sm:h-8 sm:w-8 text-red-600" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 mb-3 sm:mb-4">
                Meet Our <span className="text-red-600">Leadership</span>
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
                Our experienced professionals bring together decades of expertise in structural engineering and
                construction, leading innovation in every project we undertake.
              </p>
              <div className="w-16 sm:w-24 h-1 bg-red-600 mx-auto mt-4 sm:mt-6"></div>
            </div>

            {error && (
              <div className="bg-red-50 border border-red-200 rounded-xl p-4 sm:p-6 mb-8 sm:mb-12 text-center max-w-2xl mx-auto">
                <p className="text-red-700 font-medium text-sm sm:text-base">{error}</p>
              </div>
            )}

            {loading ? (
              <div className="space-y-8 sm:space-y-12">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="max-w-6xl mx-auto">
                    <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                      <div className="p-6 sm:p-8 md:p-12">
                        <TeamMemberSkeleton />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="space-y-8 sm:space-y-12">
                {teamMembers.map((member, index) => {
                  const isEven = index % 2 === 0

                  return (
                    <div key={member.name} className="max-w-6xl mx-auto">
                      <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100">
                        <div className="p-6 sm:p-8 md:p-12">
                          <div
                            className={`flex flex-col lg:flex-row ${
                              isEven ? "" : "lg:flex-row-reverse"
                            } items-center gap-8 sm:gap-10 md:gap-12`}
                          >
                            {/* Profile Image */}
                            <div className="relative group flex-shrink-0">
                              <div className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 relative overflow-hidden rounded-2xl shadow-lg">
                                <Image
                                  src={member.profile_image || "/placeholder.svg?height=320&width=320"}
                                  alt={member.name}
                                  width={320}
                                  height={320}
                                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                              </div>
                              <div className="absolute -bottom-4 -right-4 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-red-600 rounded-full opacity-10 -z-10" />
                            </div>

                            {/* Content */}
                            <div className="flex-1 space-y-4 sm:space-y-6 text-center lg:text-left">
                              {/* Header */}
                              <div className="space-y-2 sm:space-y-3">
                                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 leading-tight">
                                  {member.name}
                                </h3>
                                <p className="text-lg sm:text-xl font-semibold text-red-600 leading-relaxed">
                                  {member.designation}
                                </p>
                              </div>

                              {/* Specializations */}
                              {member.specialization && (
                                <div className="flex flex-wrap gap-2 sm:gap-3 justify-center lg:justify-start">
                                  {member.specialization.map((spec) => (
                                    <Badge
                                      key={spec}
                                      className="bg-gray-100 text-gray-700 hover:bg-gray-200 px-3 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm font-medium border-0"
                                    >
                                      {spec}
                                    </Badge>
                                  ))}
                                </div>
                              )}

                              {/* Bio */}
                              <div className="prose prose-gray max-w-none">
                                <p className="text-gray-600 leading-relaxed text-sm sm:text-base lg:text-lg whitespace-pre-line">
                                  {member.name === "Er. Prabhu Dev"
                                    ? member.bio?.split("\n\nProfessional Recognitions")[0] + "..."
                                    : member.bio || member.email}
                                </p>
                              </div>

                              {/* Read More Button for CEO */}
                              {member.name === "Er. Prabhu Dev" && (
                                <div className="pt-2">
                                  <Button
                                    asChild
                                    variant="outline"
                                    className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white w-full sm:w-auto"
                                  >
                                    <Link
                                      href="/about/er-prabhu-dev"
                                      className="inline-flex items-center justify-center"
                                    >
                                      Read Full Profile <ArrowRight className="ml-2 h-4 w-4" />
                                    </Link>
                                  </Button>
                                </div>
                              )}

                              {/* Contact Information */}
                              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 pt-4 border-t border-gray-100 justify-center lg:justify-start">
                                {member.email && (
                                  <div className="flex items-center gap-3 group justify-center lg:justify-start">
                                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-red-50 rounded-full flex items-center justify-center group-hover:bg-red-100 transition-colors">
                                      <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-red-600" />
                                    </div>
                                    <div className="text-center lg:text-left">
                                      <p className="text-xs sm:text-sm font-medium text-gray-900">Email</p>
                                      <p className="text-xs sm:text-sm text-gray-600 break-all">{member.email}</p>
                                    </div>
                                  </div>
                                )}
                                {member.phone && (
                                  <div className="flex items-center gap-3 group justify-center lg:justify-start">
                                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-red-50 rounded-full flex items-center justify-center group-hover:bg-red-100 transition-colors">
                                      <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-red-600" />
                                    </div>
                                    <div className="text-center lg:text-left">
                                      <p className="text-xs sm:text-sm font-medium text-gray-900">Phone</p>
                                      <p className="text-xs sm:text-sm text-gray-600">{member.phone}</p>
                                    </div>
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  )
}
