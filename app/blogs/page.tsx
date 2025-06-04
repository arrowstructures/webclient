// "use client"

// import { useEffect, useState } from "react"
// import { Button } from "@/components/ui/button"
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card"
// import {
//   Tabs,
//   TabsContent,
//   TabsList,
//   TabsTrigger,
// } from "@/components/ui/tabs"
// import Image from "next/image"
// import Link from "next/link"
// import { supabase } from "@/lib/supabase"

// export default function BlocksPage() {
//   const [blocks, setBlocks] = useState<any[]>([])
//   const [categories, setCategories] = useState<string[]>(["All"])
//   const [loading, setLoading] = useState(true)

//   useEffect(() => {
//     const fetchData = async () => {
//       // Fetch blocks
//       const { data: blocksData, error: blocksError } = await supabase
//         .from("blogs")
//         .select("*")

//       // Fetch categories
//       const { data: categoriesData, error: categoriesError } = await supabase
//         .from("blogs_category")
//         .select("name")

//       if (blocksError) {
//         console.error("Error fetching blocks:", blocksError.message)
//       } else {
//         setBlocks(blocksData || [])
//       }

//       if (categoriesError) {
//         console.error("Error fetching categories:", categoriesError.message)
//       } else {
//         const categoryList = categoriesData?.map((cat) => cat.name) || []
//         setCategories(["All", ...categoryList])
//       }

//       setLoading(false)
//     }

//     fetchData()
//   }, [])

//   return (
//     <>
//       <section className="bg-muted py-12 md:py-24">
//         <div className="container">
//           <div className="max-w-[900px]">
//             <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">Construction Blogs</h1>
//             <p className="mt-4 text-xl text-muted-foreground">
//               Explore our range of high-quality construction blocks for your building projects.
//             </p>
//           </div>
//         </div>
//       </section>

//       <section className="py-12 md:py-24">
//         <div className="container">
//           {loading ? (
//             <p>Loading...</p>
//           ) : (
//             <Tabs defaultValue="All" className="w-full">
//               <TabsList className="mb-8">
//                 {categories.map((category) => (
//                   <TabsTrigger key={category} value={category}>
//                     {category}
//                   </TabsTrigger>
//                 ))}
//               </TabsList>

//               {categories.map((category) => (
//                 <TabsContent key={category} value={category} className="w-full">
//                   <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
//                     {blocks
//                       .filter(
//                         (block) =>
//                           category === "All" || block.category === category
//                       )
//                       .map((block) => (
//                         <Card key={block.id} className="overflow-hidden">
//                           <div className="relative h-[200px] w-full">
//                             <Image
//                               src={block.image || "/placeholder.svg"}
//                               alt={block.title}
//                               fill
//                               className="object-cover"
//                               sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
//                             />
//                           </div>
//                           <CardHeader>
//                             <CardTitle>{block.title}</CardTitle>
//                             <CardDescription>{block.category}</CardDescription>
//                           </CardHeader>
//                           <CardContent>
//                             <p className="text-sm text-muted-foreground mb-4">{block.content}</p>
//                             <div className="space-y-1">
//                               {(block.specifications || []).map(
//                                 (spec: string, index: number) => (
//                                   <div key={index} className="flex items-center text-sm">
//                                     <div className="mr-2 h-1.5 w-1.5 rounded-full bg-primary" />
//                                     {spec}
//                                   </div>
//                                 )
//                               )}
//                             </div>
//                           </CardContent>
//                           <CardFooter>
//                             <Button asChild variant="outline" className="w-full">
//                             <Link href={`/blogs/${block.id}`}>
//                               View Details
//                             </Link>
//                             </Button>
//                           </CardFooter>
//                         </Card>
//                       ))}
//                   </div>
//                 </TabsContent>
//               ))}
//             </Tabs>
//           )}
//         </div>
//       </section>
//     </>
//   )
// }
"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import Image from "next/image"
import Link from "next/link"
import { supabase } from "@/lib/supabase"

export default function BlocksPage() {
  const [blocks, setBlocks] = useState<any[]>([])
  const [categories, setCategories] = useState<string[]>(["All"])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      // Fetch blocks
      const { data: blocksData, error: blocksError } = await supabase
        .from("blogs")
        .select("*")

      // Fetch categories
      const { data: categoriesData, error: categoriesError } = await supabase
        .from("blogs_category")
        .select("name")

      if (blocksError) {
        console.error("Error fetching blocks:", blocksError.message)
      } else {
        setBlocks(blocksData || [])
      }

      if (categoriesError) {
        console.error("Error fetching categories:", categoriesError.message)
      } else {
        const categoryList = categoriesData?.map((cat) => cat.name) || []
        setCategories(["All", ...categoryList])
      }

      setLoading(false)
    }

    fetchData()
  }, [])

  return (
    <>
      <section className="bg-muted py-12 md:py-24">
        <div className="container">
          <div className="max-w-[900px]">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">Construction Blogs</h1>
            <p className="mt-4 text-xl text-muted-foreground">
              Explore our range of high-quality construction blocks for your building projects.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-24">
        <div className="container">
          {loading ? (
            <div className="flex justify-center items-center py-32">
              <div className="w-12 h-12 border-4 border-red-500 border-t-transparent rounded-full animate-spin" />
            </div>
          ) : (
            <Tabs defaultValue="All" className="w-full">
              <TabsList className="mb-8 flex flex-wrap gap-2">
                {categories.map((category) => (
                  <TabsTrigger key={category} value={category}>
                    {category}
                  </TabsTrigger>
                ))}
              </TabsList>

              {categories.map((category) => (
                <TabsContent key={category} value={category} className="w-full">
                  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {blocks
                      .filter(
                        (block) =>
                          category === "All" || block.category === category
                      )
                      .map((block) => (
                        <Card key={block.id} className="overflow-hidden">
                          <div className="relative h-[200px] w-full">
                            <Image
                              src={block.image || "/placeholder.svg"}
                              alt={block.title}
                              fill
                              className="object-cover"
                              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                          </div>
                          <CardHeader>
                            <CardTitle>{block.title}</CardTitle>
                            <CardDescription>{block.category}</CardDescription>
                          </CardHeader>
                          <CardContent>
                            <p className="text-sm text-muted-foreground mb-4">{block.content}</p>
                            <div className="space-y-1">
                              {(block.specifications || []).map(
                                (spec: string, index: number) => (
                                  <div key={index} className="flex items-center text-sm">
                                    <div className="mr-2 h-1.5 w-1.5 rounded-full bg-primary" />
                                    {spec}
                                  </div>
                                )
                              )}
                            </div>
                          </CardContent>
                          <CardFooter>
                            <Button asChild variant="outline" className="w-full">
                              <Link href={`/blogs/${block.id}`}>View Details</Link>
                            </Button>
                          </CardFooter>
                        </Card>
                      ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          )}
        </div>
      </section>
    </>
  )
}
