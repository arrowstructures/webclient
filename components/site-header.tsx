// "use client"

// import { useState, useEffect } from "react"
// import Link from "next/link"
// import { usePathname } from "next/navigation"
// import { Menu, X } from "lucide-react"
// import { cn } from "@/lib/utils"
// import { Button } from "@/components/ui/button"

// export function SiteHeader() {
//   const [isOpen, setIsOpen] = useState(false)
//   const [isScrolled, setIsScrolled] = useState(false)
//   const pathname = usePathname()

//   // Handle scroll effect for header
//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 10)
//     }
//     window.addEventListener("scroll", handleScroll)
//     return () => window.removeEventListener("scroll", handleScroll)
//   }, [])

//   // Close mobile menu when route changes
//   useEffect(() => {
//     setIsOpen(false)
//   }, [pathname])

//   const navItems = [
//     { name: "Home", href: "/" },
//     { name: "About", href: "/about" },
//     { name: "Portfolio", href: "/portfolio" },
//     { name: "Services", href: "/services" },
//     { name: "Blogs", href: "/blogs" },
//     // { name: "Newsletter", href: "/newsletter" },
//     { name: "Career", href: "/career" },
//     { name: "Contact", href: "/contact" },
//   ]

//   return (
//     <header
//       className={cn(
//         "sticky top-0 z-50 w-full transition-all duration-200",
//         isScrolled ? "bg-white shadow-md" : "bg-transparent",
//       )}
//     >
//       <div className="container flex h-16 items-center justify-between py-4">
//         {/* Logo */}
//         <Link href="/" className="flex items-center space-x-2">
//           <div className="flex flex-col items-start">
//             <span className="text-2xl font-bold leading-none tracking-tight">ARROW</span>
//             <span className="text-2xl font-bold leading-none tracking-tight">STRUCTURES</span>
//             <span className="text-xs text-muted-foreground">Structural Solutions</span>
//           </div>
//         </Link>

//         {/* Desktop Navigation */}
//         <nav className="hidden md:flex items-center space-x-6">
//           {navItems.map((item) => (
//             <Link
//               key={item.name}
//               href={item.href}
//               className={cn(
//                 "text-sm font-medium transition-colors hover:text-primary",
//                 pathname === item.href ? "text-primary font-semibold" : "text-muted-foreground",
//               )}
//             >
//               {item.name}
//             </Link>
//           ))}
//         </nav>

//         {/* Mobile Menu Button */}
//         <Button
//           variant="ghost"
//           size="icon"
//           className="md:hidden"
//           onClick={() => setIsOpen(!isOpen)}
//           aria-label="Toggle menu"
//         >
//           {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//         </Button>
//       </div>

//       {/* Mobile Navigation */}
//       {isOpen && (
//         <div className="md:hidden">
//           <div className="container py-4 flex flex-col space-y-4 bg-white">
//             {navItems.map((item) => (
//               <Link
//                 key={item.name}
//                 href={item.href}
//                 className={cn(
//                   "text-sm font-medium transition-colors hover:text-primary py-2",
//                   pathname === item.href ? "text-primary font-semibold" : "text-muted-foreground",
//                 )}
//               >
//                 {item.name}
//               </Link>
//             ))}
//           </div>
//         </div>
//       )}
//     </header>
//   )
// }

"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import Image from "next/image" 

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Services", href: "/services" },
    { name: "Blogs", href: "/blogs" },
    { name: "Newsletter", href: "/newsletter" },
    { name: "Career", href: "/career" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-200",
        isScrolled ? "bg-white shadow-md" : "bg-transparent",
      )}
    >
      <div className="container flex h-16 items-center justify-between py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-3">
  <Image
    src="/logo.png"
    alt="Logo"
    width={40}
    height={40}
    className="object-contain"
    priority
  />
 <div className="leading-snug space-y-0 font-sans text-gray-900">
  <p className="text-xl font-bold leading-tight m-0 p-0">ARROW</p>
  <p className="text-xl font-bold leading-tight m-0 p-0">STRUCTURES</p>
</div>

</Link>


        {/* <Link href="/" className="flex items-center space-x-2">
          <div className="flex flex-col items-start">
            <span className="text-2xl font-bold leading-none tracking-tight">ARROW</span>
            <span className="text-2xl font-bold leading-none tracking-tight">STRUCTURES</span>
            <span className="text-xs text-muted-foreground">Structural Solutions</span>
          </div>
        </Link> */}

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                pathname === item.href ? "text-primary font-semibold" : "text-muted-foreground",
              )}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="container py-4 flex flex-col space-y-4 bg-white">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary py-2",
                  pathname === item.href ? "text-primary font-semibold" : "text-muted-foreground",
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
