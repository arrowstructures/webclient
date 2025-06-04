// "use client"

// import { useEffect, useState } from "react"
// import Image from "next/image"
// import "./loading"
// import { Award, Users, Building, Lightbulb } from "lucide-react"
// import { createClient } from "@supabase/supabase-js"
// import { supabase } from "@/lib/supabase"

// type TeamMember = {
//   name: string
//   designation: string
//   profile_image: string
//   email: string
// }

// export default function AboutPage() {
//   const stats = [
//     { icon: Building, value: "500+", label: "Projects Completed" },
//     { icon: Users, value: "50+", label: "Team Members" },
//     { icon: Award, value: "25+", label: "Awards Won" },
//     { icon: Lightbulb, value: "15+", label: "Years Experience" },
//   ]

//   const ceoData: TeamMember = {
//     name: "Dr. Prabu Dev",
//     designation: "CEO & Principal Structural Engineer",
//     profile_image: "/team1.jpg?height=400&width=400",
//     email: "M.E., Ph.D., Dr. Prabu Dev is the visionary leader behind Arrow Structures. With extensive experience in structural engineering and a commitment to excellence, he has built the company on a foundation of technical expertise, quality commitment, and client-centric values. His leadership drives our mission to deliver innovative structural solutions.",
//   }

//   const [teamMembers, setTeamMembers] = useState<TeamMember[]>([])

//   useEffect(() => {
//     const fetchTeam = async () => {
//       const { data, error } = await supabase.from("team_members").select("*")

//       if (error) {
//         console.error("Failed to fetch team members:", error)
//       } else {
//         setTeamMembers([ceoData, ...data])
//       }
//     }

//     fetchTeam()
//   }, [])

//   return (
//     <>
//       {/* About Section */}
//       <section className="bg-muted py-12 md:py-24">
//         <div className="container">
//           <div className="grid gap-12 md:grid-cols-2">
//             <div className="space-y-4">
//               <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">About Arrow Structures</h1>
//               <p className="text-xl text-muted-foreground">
//                 Founded in 2017, Arrow Structures has steadily grown into one of the leading Structural Consultancy and
//                 Civil Construction firms in the region. Spearheaded by Dr. Prabu Dev, M.E., Ph.D., our Principal
//                 Structural Engineer, the company was built on a foundation of technical excellence, quality commitment,
//                 and client-centric values.
//               </p>
//               <p className="text-muted-foreground">
//                 At Arrow Structures, we believe that every structure tells a story — and we make sure yours is built
//                 with strength, elegance, and trust. From concept to completion, we ensure that all our projects meet
//                 industry standards while maintaining the perfect balance between quality, cost-efficiency,
//                 serviceability, and sustainability.
//               </p>
//               <p className="text-muted-foreground">
//                 Our passion for structures isn&apos;t just about building — it&apos;s about building better, smarter,
//                 and stronger. This dedication fuels our steady growth and empowers us to take on increasingly diverse
//                 and challenging projects.
//               </p>
//             </div>
//             <div className="relative h-[500px] w-full overflow-hidden rounded-lg">
//               <Image src="/home.jpg" alt="Office" fill className="object-cover" priority />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Stats Section */}
//       <section className="py-12 md:py-24">
//         <div className="container">
//           <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
//             {stats.map((stat) => (
//               <div key={stat.label} className="flex flex-col items-center space-y-2 text-center">
//                 <stat.icon className="h-12 w-12 text-primary" />
//                 <div className="text-3xl font-bold">{stat.value}</div>
//                 <div className="text-sm text-muted-foreground">{stat.label}</div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Mission Section */}
//       <section className="border-t bg-muted py-12 md:py-24">
//         <div className="container">
//           <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Mission & Vision</h2>
//           <div className="mt-8 grid gap-12 md:grid-cols-3">
//             <p className="text-muted-foreground">
//               To create innovative structural solutions that enhance the way people live, work, and interact with their
//               environment through superior engineering and design.
//             </p>
//             <p className="text-muted-foreground">
//               To promote sustainable construction practices that minimize environmental impact while maximizing
//               structural integrity, functionality, and cost-effectiveness.
//             </p>
//             <p className="text-muted-foreground">
//               To collaborate with our clients in bringing their structural visions to life through creative and
//               practical engineering solutions that stand the test of time.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Team Section */}
//       <section className="py-12 md:py-24">
//         <div className="container mx-auto px-4">
//           <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-center mb-12">Meet Our Team</h2>
//           <div className="space-y-16">
//             {teamMembers.map((member, index) => {
//               const isEven = index % 2 === 0

//               return (
//                 <div
//                   key={member.name}
//                   // className={`flex items-center gap-8 ${
//                   //   isCEO ? "flex-row" : isEven ? "flex-row-reverse" : "flex-row"
//                   // } flex-col md:${isCEO ? "flex-row" : isEven ? "flex-row-reverse" : "flex-row"}`}
//                 >
//                   <div className="w-full md:w-[300px] h-[300px] flex-shrink-0">
//                     <Image
//                       src={member.profile_image || "/placeholder.svg"}
//                       alt={member.name}
//                       width={300}
//                       height={300}
//                       className="object-cover rounded-lg w-full h-full"
//                     />
//                   </div>
//                   <div >
//                     <div className="text-2xl font-semibold">{member.name}</div>
//                     <div className="text-lg text-primary font-medium mb-4">{member.designation}</div>
//                     <p className="text-muted-foreground leading-relaxed">{member.email}</p>
//                   </div>
//                 </div>
//               )
//             })}
//           </div>
//         </div>
//       </section>
//     </>
//   )
// }
"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Award, Users, Building, Lightbulb } from "lucide-react"
import { supabase } from "@/lib/supabase"

type TeamMember = {
  name: string
  designation: string
  profile_image: string
  email: string
}

export default function AboutPage() {
  const stats = [
    { icon: Building, value: "500+", label: "Projects Completed" },
    { icon: Users, value: "50+", label: "Team Members" },
    { icon: Award, value: "25+", label: "Awards Won" },
    { icon: Lightbulb, value: "15+", label: "Years Experience" },
  ]

  const ceoData: TeamMember = {
    name: "Dr. Prabu Dev",
    designation: "CEO & Principal Structural Engineer",
    profile_image: "/team1.jpg?height=400&width=400",
    email:
      "M.E., Ph.D., Dr. Prabu Dev is the visionary leader behind Arrow Structures. With extensive experience in structural engineering and a commitment to excellence, he has built the company on a foundation of technical expertise, quality commitment, and client-centric values. His leadership drives our mission to deliver innovative structural solutions.",
  }

  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchTeam = async () => {
      const { data, error } = await supabase.from("team_members").select("*")

      if (error) {
        console.error("Failed to fetch team members:", error)
      } else {
        setTeamMembers([ceoData, ...(data || [])])
      }

      setLoading(false)
    }

    fetchTeam()
  }, [])

  return (
    <>
      {/* About Section */}
      <section className="bg-muted py-12 md:py-24">
        <div className="container">
          <div className="grid gap-12 md:grid-cols-2">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">About Arrow Structures</h1>
              <p className="text-xl text-muted-foreground">
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
              <p className="text-muted-foreground">
                Our passion for structures isn&apos;t just about building — it&apos;s about building better, smarter,
                and stronger. This dedication fuels our steady growth and empowers us to take on increasingly diverse
                and challenging projects.
              </p>
            </div>
            <div className="relative h-[500px] w-full overflow-hidden rounded-lg">
              <Image src="/home.jpg" alt="Office" fill className="object-cover" priority />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
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

      {/* Mission Section */}
      <section className="border-t bg-muted py-12 md:py-24">
        <div className="container">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Mission & Vision</h2>
          <div className="mt-8 grid gap-12 md:grid-cols-3">
            <p className="text-muted-foreground">
              To create innovative structural solutions that enhance the way people live, work, and interact with their
              environment through superior engineering and design.
            </p>
            <p className="text-muted-foreground">
              To promote sustainable construction practices that minimize environmental impact while maximizing
              structural integrity, functionality, and cost-effectiveness.
            </p>
            <p className="text-muted-foreground">
              To collaborate with our clients in bringing their structural visions to life through creative and
              practical engineering solutions that stand the test of time.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-12 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-center mb-12">Meet Our Team</h2>

          {loading ? (
            <div className="flex justify-center items-center py-32">
              <div className="w-12 h-12 border-4 border-red-500 border-t-transparent rounded-full animate-spin" />
            </div>
          ) : (
            <div className="space-y-16">
              {teamMembers.map((member, index) => {
                const isEven = index % 2 === 0

                return (
                  <div
                    key={member.name}
                    className={`flex flex-col md:flex-row ${isEven ? "" : "md:flex-row-reverse"} items-center gap-8`}
                  >
                    <div className="w-full md:w-[300px] h-[300px] flex-shrink-0">
                      <Image
                        src={member.profile_image || "/placeholder.svg"}
                        alt={member.name}
                        width={300}
                        height={300}
                        className="object-cover rounded-lg w-full h-full"
                      />
                    </div>
                    <div>
                      <div className="text-2xl font-semibold">{member.name}</div>
                      <div className="text-lg text-primary font-medium mb-4">{member.designation}</div>
                      <p className="text-muted-foreground leading-relaxed">{member.email}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          )}
        </div>
      </section>
    </>
  )
}
