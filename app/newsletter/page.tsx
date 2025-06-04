// "use client"

// import type React from "react"

// import { useEffect, useState } from "react"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
// import { CalendarIcon, FileText, Mail } from "lucide-react"
// import { toast } from "sonner"
// import { supabase } from "@/lib/supabase"

// // Sample newsletter data
// type News = {
//   id: string;
//   headline: string;
//   summary: string;
//   content: string;
// }

// export default function NewsletterPage() {
//   const [email, setEmail] = useState("")
//   const [isSubmitting, setIsSubmitting] = useState(false)
//     const [newsletters, setNewsletters] = useState<News[]>([])

//       useEffect(() => {
//     const fetchNewsletters = async () => {
//       const { data, error } = await supabase
//         .from('news')
//         .select('*')
//       if (error) {
//         console.error("Error fetching newsletters:", error)
//       } else {
//         setNewsletters(data as News[])
//       }
//     }

//     fetchNewsletters()
//   }, [])


//   const handleSubscribe = (e: React.FormEvent) => {
//     e.preventDefault()
//     setIsSubmitting(true)

//     // Simulate API call
//     setTimeout(() => {
//       toast.success("Thank you for subscribing to our newsletter!")
//       setEmail("")
//       setIsSubmitting(false)
//     }, 1000)
//   }

//   return (
//     <>
//       <section className="bg-muted py-12 md:py-24">
//         <div className="container">
//           <div className="max-w-[800px] mx-auto text-center">
//             <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">Newsletter</h1>
//             <p className="mt-4 text-xl text-muted-foreground">
//               Subscribe to our newsletter for the latest updates on structural engineering trends, project showcases,
//               and industry insights.
//             </p>
//           </div>
//         </div>
//       </section>

//       <section className="py-12 md:py-24">
//         <div className="container">
//           <div className="grid gap-12 md:grid-cols-2">
//             <div className="space-y-6">
//               <h2 className="text-3xl font-bold">Stay Updated</h2>
//               <p className="text-muted-foreground">
//                 Our monthly newsletter provides valuable insights into the world of structural engineering, construction
//                 techniques, and project management. Join our community of professionals and enthusiasts.
//               </p>
//               <div className="space-y-2">
//                 <div className="flex items-center">
//                   <Mail className="h-5 w-5 text-primary mr-2" />
//                   <span>Monthly updates on industry trends</span>
//                 </div>
//                 <div className="flex items-center">
//                   <FileText className="h-5 w-5 text-primary mr-2" />
//                   <span>Exclusive technical articles and case studies</span>
//                 </div>
//                 <div className="flex items-center">
//                   <CalendarIcon className="h-5 w-5 text-primary mr-2" />
//                   <span>Invitations to webinars and events</span>
//                 </div>
//               </div>
//             </div>

//             <div className="bg-muted p-6 rounded-lg">
//               <h3 className="text-xl font-bold mb-4">Subscribe Now</h3>
//               <form onSubmit={handleSubscribe} className="space-y-4">
//                 <div className="space-y-2">
//                   <label htmlFor="email" className="text-sm font-medium">
//                     Email Address
//                   </label>
//                   <Input
//                     id="email"
//                     type="email"
//                     placeholder="your@email.com"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     required
//                   />
//                 </div>
//                 <Button type="submit" className="w-full" disabled={isSubmitting}>
//                   {isSubmitting ? "Subscribing..." : "Subscribe"}
//                 </Button>
//                 <p className="text-xs text-muted-foreground text-center">
//                   By subscribing, you agree to receive our newsletter and accept our privacy policy.
//                 </p>
//               </form>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className="border-t py-12 md:py-24">
//         <div className="container">
//           <h2 className="text-3xl font-bold mb-8">Recent Newsletters</h2>
//           <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
//             {newsletters.map((newsletter) => (
//               <Card key={newsletter.id}>
//                 <CardHeader>
//                   <CardTitle>{newsletter.headline}</CardTitle>
//                   <CardDescription>{newsletter.summary}</CardDescription>
//                 </CardHeader>
//                 <CardContent>
//                   <p className="text-sm text-muted-foreground">{newsletter.content}</p>
//                 </CardContent>
//                 <div className="px-6 pb-6">
//                   <Button variant="outline" className="w-full" asChild>
//                     <a href={`/newsletter/${newsletter.id}`}>
//                       Read Newsletter
//                     </a>
//                   </Button>
//                 </div>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </section>
//     </>
//   )
// }
"use client"

import type React from "react"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { CalendarIcon, FileText, Mail } from "lucide-react"
import { toast } from "sonner"
import { supabase } from "@/lib/supabase"

type News = {
  id: string
  headline: string
  summary: string
  content: string
}

export default function NewsletterPage() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [newsletters, setNewsletters] = useState<News[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchNewsletters = async () => {
      setLoading(true)
      const { data, error } = await supabase.from("news").select("*")
      if (error) {
        console.error("Error fetching newsletters:", error)
      } else {
        setNewsletters(data as News[])
      }
      setLoading(false)
    }

    fetchNewsletters()
  }, [])

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    setTimeout(() => {
      toast.success("Thank you for subscribing to our newsletter!")
      setEmail("")
      setIsSubmitting(false)
    }, 1000)
  }

  return (
    <>
      <section className="bg-muted py-12 md:py-24">
        <div className="container">
          <div className="max-w-[800px] mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">Newsletter</h1>
            <p className="mt-4 text-xl text-muted-foreground">
              Subscribe to our newsletter for the latest updates on structural engineering trends, project showcases,
              and industry insights.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-24">
        <div className="container">
          <div className="grid gap-12 md:grid-cols-2">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Stay Updated</h2>
              <p className="text-muted-foreground">
                Our monthly newsletter provides valuable insights into the world of structural engineering, construction
                techniques, and project management. Join our community of professionals and enthusiasts.
              </p>
              <div className="space-y-2">
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-primary mr-2" />
                  <span>Monthly updates on industry trends</span>
                </div>
                <div className="flex items-center">
                  <FileText className="h-5 w-5 text-primary mr-2" />
                  <span>Exclusive technical articles and case studies</span>
                </div>
                <div className="flex items-center">
                  <CalendarIcon className="h-5 w-5 text-primary mr-2" />
                  <span>Invitations to webinars and events</span>
                </div>
              </div>
            </div>

            <div className="bg-muted p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Subscribe Now</h3>
              <form onSubmit={handleSubscribe} className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? "Subscribing..." : "Subscribe"}
                </Button>
                <p className="text-xs text-muted-foreground text-center">
                  By subscribing, you agree to receive our newsletter and accept our privacy policy.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t py-12 md:py-24">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8">Recent Newsletters</h2>

          {loading ? (
            <div className="flex justify-center items-center py-32">
              <div className="w-12 h-12 border-4 border-red-500 border-t-transparent rounded-full animate-spin" />
            </div>
          ) : (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {newsletters.map((newsletter) => (
                <Card key={newsletter.id}>
                  <CardHeader>
                    <CardTitle>{newsletter.headline}</CardTitle>
                    <CardDescription>{newsletter.summary}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{newsletter.content}</p>
                  </CardContent>
                  <div className="px-6 pb-6">
                    <Button variant="outline" className="w-full" asChild>
                      <a href={`/newsletter/${newsletter.id}`}>
                        Read Newsletter
                      </a>
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  )
}
