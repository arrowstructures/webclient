// "use client"

// import React, { useEffect, useState } from "react"
// import { supabase } from "@/lib/supabase" // make sure this path matches your project
// import { Button } from "@/components/ui/button"
// import {
//   Card, CardContent, CardDescription,
//   CardFooter, CardHeader, CardTitle
// } from "@/components/ui/card"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import { Textarea } from "@/components/ui/textarea"
// import { toast } from "sonner"
// import { Briefcase, MapPin, Upload } from "lucide-react"

// type JobOpening = {
//   id: string
//   job_title: string
//   department: string
//   location: string
//   job_type: string
//   job_description: string
//   requirements: string[]
// }

// export default function CareerPage() {
//   const [jobOpenings, setJobOpenings] = useState<JobOpening[]>([])
//   const [loadingJobs, setLoadingJobs] = useState(true)
//   const [selectedFile, setSelectedFile] = useState<File | null>(null)
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     position: "",
//     message: "",
//   })
//   const [isSubmitting, setIsSubmitting] = useState(false)

//   useEffect(() => {
//     async function fetchJobs() {
//       setLoadingJobs(true)
//       const { data, error } = await supabase
//         .from("careers")
//         .select("id, job_title, department, location, job_type, job_description, requirements")
//         .eq("publish_immediately", true)
//         .order("created_at", { ascending: false })

//       if (error) {
//         console.error("Error fetching jobs:", error)
//         toast.error("Failed to load job openings.")
//       } else {
//         setJobOpenings(data || [])
//       }
//       setLoadingJobs(false)
//     }

//     fetchJobs()
//   }, [])

//   const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     if (e.target.files?.[0]) {
//       setSelectedFile(e.target.files[0])
//     }
//   }

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
//     const { name, value } = e.target
//     setFormData((prev) => ({ ...prev, [name]: value }))
//   }

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault()
//     setIsSubmitting(true)

//     // Simulate API call
//     setTimeout(() => {
//       toast.success("Your application has been submitted successfully!")
//       setFormData({
//         name: "",
//         email: "",
//         phone: "",
//         position: "",
//         message: "",
//       })
//       setSelectedFile(null)
//       setIsSubmitting(false)
//     }, 1500)
//   }

//   return (
//     <>
//       <section className="bg-muted py-12 md:py-24">
//         <div className="container">
//           <div className="max-w-[800px]">
//             <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">Careers</h1>
//             <p className="mt-4 text-xl text-muted-foreground">
//               Join our team of talented professionals and build a rewarding career in structural engineering and
//               construction.
//             </p>
//           </div>
//         </div>
//       </section>

//       <section className="py-12 md:py-24">
//         <div className="container">
//           <h2 className="text-3xl font-bold mb-8">Current Openings</h2>
//           <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
//             {jobOpenings.map((job) => (
//               <Card key={job.id} className="flex flex-col">
//                 <CardHeader>
//                   <CardTitle>{job.job_title}</CardTitle>
//                   <CardDescription className="flex items-center gap-2">
//                     <Briefcase className="h-4 w-4" />
//                     {job.job_type}
//                   </CardDescription>
//                 </CardHeader>
//                 <CardContent className="flex-1">
//                   <div className="flex items-center text-sm text-muted-foreground mb-4">
//                     <MapPin className="h-4 w-4 mr-1" />
//                     {job.location}
//                   </div>
//                   <p className="text-sm mb-4">{job.job_description}</p>
//                   <div className="space-y-2">
//                     <p className="text-sm font-medium">Requirements:</p>
//                     {/* <ul className="text-sm text-muted-foreground space-y-1">
//                       {job.requirements.map((req, index) => (
//                         <li key={index} className="flex items-start">
//                           <div className="mr-2 h-1.5 w-1.5 rounded-full bg-primary mt-1.5" />
//                           <span>{req}</span>
//                         </li>
//                       ))}
//                     </ul> */}
//                     <p className="text-sm mb-4">{job.requirements}</p>
//                   </div>
//                 </CardContent>
//                 <CardFooter>
//   <Button
//     className="w-full"
//     onClick={() => {
//       const subject = encodeURIComponent(`Application for ${job.job_title}`);
//       const body = encodeURIComponent(`Dear Hiring Team,\n\nI am interested in applying for the position of ${job.job_title}.\n\nBest regards,\n`);
//       window.location.href = `mailto:arrowstructures@gmail.com?subject=${subject}&body=${body}`;
//     }}
//   >
//     Apply Now
//   </Button>
// </CardFooter>

//               </Card>
//             ))}
//           </div>
//         </div>
//       </section>

//       <section className="border-t bg-muted py-12 md:py-24" id="apply">
//         <div className="container">
//           <div className="max-w-[800px] mx-auto">
//             <h2 className="text-3xl font-bold mb-8">Apply Now</h2>
//             <form onSubmit={handleSubmit} className="space-y-6">
//               <div className="grid gap-6 sm:grid-cols-2">
//                 <div className="space-y-2">
//                   <Label htmlFor="name">Full Name</Label>
//                   <Input id="name" name="name" value={formData.name} onChange={handleInputChange} required />
//                 </div>
//                 <div className="space-y-2">
//                   <Label htmlFor="email">Email</Label>
//                   <Input
//                     id="email"
//                     name="email"
//                     type="email"
//                     value={formData.email}
//                     onChange={handleInputChange}
//                     required
//                   />
//                 </div>
//                 <div className="space-y-2">
//                   <Label htmlFor="phone">Phone Number</Label>
//                   <Input id="phone" name="phone" value={formData.phone} onChange={handleInputChange} required />
//                 </div>
//                 <div className="space-y-2">
//                   <Label htmlFor="position">Position</Label>
//                   <select
//                     id="position"
//                     name="position"
//                     className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
//                     value={formData.position}
//                     onChange={handleInputChange}
//                     required
//                   >
//                     <option value="">Select a position</option>
//                     {jobOpenings.map((job) => (
//                       <option key={job.id} value={job.job_title}>
//                         {job.job_title}
//                       </option>
//                     ))}
//                     <option value="Other">Other</option>
//                   </select>
//                 </div>
//               </div>

//               <div className="space-y-2">
//                 <Label htmlFor="resume">Resume/CV</Label>
//                 <div className="flex items-center gap-4">
//                   <label
//                     htmlFor="resume"
//                     className="flex h-10 items-center justify-center rounded-md border border-dashed border-input bg-background px-3 py-2 text-sm ring-offset-background cursor-pointer hover:bg-muted/50 flex-1"
//                   >
//                     <Upload className="h-4 w-4 mr-2" />
//                     {selectedFile ? selectedFile.name : "Upload your resume"}
//                     <input
//                       id="resume"
//                       type="file"
//                       accept=".pdf,.doc,.docx"
//                       className="sr-only"
//                       onChange={handleFileChange}
//                       required
//                     />
//                   </label>
//                   {selectedFile && (
//                     <Button type="button" variant="outline" size="sm" onClick={() => setSelectedFile(null)}>
//                       Clear
//                     </Button>
//                   )}
//                 </div>
//                 <p className="text-xs text-muted-foreground">
//                   Accepted formats: PDF, DOC, DOCX. Maximum file size: 5MB
//                 </p>
//               </div>

//               <div className="space-y-2">
//                 <Label htmlFor="message">Cover Letter / Additional Information</Label>
//                 <Textarea id="message" name="message" rows={5} value={formData.message} onChange={handleInputChange} />
//               </div>

//               <Button type="submit" className="w-full" disabled={isSubmitting}>
//                 {isSubmitting ? "Submitting..." : "Submit Application"}
//               </Button>
//             </form>
//           </div>
//         </div>
//       </section>
//     </>
//   )
// }
"use client"

import React, { useEffect, useState } from "react"
import { supabase } from "@/lib/supabase" // make sure this path matches your project
import { Button } from "@/components/ui/button"
import {
  Card, CardContent, CardDescription,
  CardFooter, CardHeader, CardTitle
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "sonner"
import { Briefcase, MapPin, Upload } from "lucide-react"

type JobOpening = {
  id: string
  job_title: string
  department: string
  location: string
  job_type: string
  job_description: string
  requirements: string[]
}

export default function CareerPage() {
  const [jobOpenings, setJobOpenings] = useState<JobOpening[]>([])
  const [loadingJobs, setLoadingJobs] = useState(true)
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    async function fetchJobs() {
      setLoadingJobs(true)
      const { data, error } = await supabase
        .from("careers")
        .select("id, job_title, department, location, job_type, job_description, requirements")
        .eq("publish_immediately", true)
        .order("created_at", { ascending: false })

      if (error) {
        console.error("Error fetching jobs:", error)
        toast.error("Failed to load job openings.")
      } else {
        setJobOpenings(data || [])
      }
      setLoadingJobs(false)
    }

    fetchJobs()
  }, [])

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      setSelectedFile(e.target.files[0])
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      toast.success("Your application has been submitted successfully!")
      setFormData({
        name: "",
        email: "",
        phone: "",
        position: "",
        message: "",
      })
      setSelectedFile(null)
      setIsSubmitting(false)
    }, 1500)
  }

  return (
    <>
      <section className="bg-muted py-12 md:py-24">
        <div className="container">
          <div className="max-w-[800px]">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">Careers</h1>
            <p className="mt-4 text-xl text-muted-foreground">
              Join our team of talented professionals and build a rewarding career in structural engineering and
              construction.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-24">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8">Current Openings</h2>

          {loadingJobs ? (
            <div className="flex justify-center items-center py-32">
              <div className="w-12 h-12 border-4 border-red-500 border-t-transparent rounded-full animate-spin" />
            </div>
          ) : (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {jobOpenings.map((job) => (
                <Card key={job.id} className="flex flex-col">
                  <CardHeader>
                    <CardTitle>{job.job_title}</CardTitle>
                    <CardDescription className="flex items-center gap-2">
                      <Briefcase className="h-4 w-4" />
                      {job.job_type}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <div className="flex items-center text-sm text-muted-foreground mb-4">
                      <MapPin className="h-4 w-4 mr-1" />
                      {job.location}
                    </div>
                    <p className="text-sm mb-4">{job.job_description}</p>
                    <div className="space-y-2">
                      <p className="text-sm font-medium">Requirements:</p>
                      <p className="text-sm mb-4">{job.requirements}</p>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button
                      className="w-full"
                      onClick={() => {
                        const subject = encodeURIComponent(`Application for ${job.job_title}`)
                        const body = encodeURIComponent(
                          `Dear Hiring Team,\n\nI am interested in applying for the position of ${job.job_title}.\n\nBest regards,\n`
                        )
                        window.location.href = `mailto:arrowstructures@gmail.com?subject=${subject}&body=${body}`
                      }}
                    >
                      Apply Now
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* <section className="border-t bg-muted py-12 md:py-24" id="apply">
        <div className="container">
          <div className="max-w-[800px] mx-auto">
            <h2 className="text-3xl font-bold mb-8">Apply Now</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" name="name" value={formData.name} onChange={handleInputChange} required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" name="phone" value={formData.phone} onChange={handleInputChange} required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="position">Position</Label>
                  <select
                    id="position"
                    name="position"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    value={formData.position}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Select a position</option>
                    {jobOpenings.map((job) => (
                      <option key={job.id} value={job.job_title}>
                        {job.job_title}
                      </option>
                    ))}
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="resume">Resume/CV</Label>
                <div className="flex items-center gap-4">
                  <label
                    htmlFor="resume"
                    className="flex h-10 items-center justify-center rounded-md border border-dashed border-input bg-background px-3 py-2 text-sm ring-offset-background cursor-pointer hover:bg-muted/50 flex-1"
                  >
                    <Upload className="h-4 w-4 mr-2" />
                    {selectedFile ? selectedFile.name : "Upload your resume"}
                    <input
                      id="resume"
                      type="file"
                      accept=".pdf,.doc,.docx"
                      className="sr-only"
                      onChange={handleFileChange}
                      required
                    />
                  </label>
                  {selectedFile && (
                    <Button type="button" variant="outline" size="sm" onClick={() => setSelectedFile(null)}>
                      Clear
                    </Button>
                  )}
                </div>
                <p className="text-xs text-muted-foreground">
                  Accepted formats: PDF, DOC, DOCX. Maximum file size: 5MB
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Cover Letter / Additional Information</Label>
                <Textarea id="message" name="message" rows={5} value={formData.message} onChange={handleInputChange} />
              </div>

              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Submitting..." : "Submit Application"}
              </Button>
            </form>
          </div>
        </div>
      </section> */}
    </>
  )
}
