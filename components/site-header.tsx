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

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Services", href: "/services" },
    { name: "Blogs", href: "/blogs" },
    { name: "Newsroom", href: "/newsroom" },
    { name: "Career", href: "/career" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-50 w-full transition-all duration-200",
          isScrolled ? "bg-white shadow-md" : "bg-transparent",
        )}
      >
        <div className="container flex h-14 sm:h-16 items-center justify-between px-4 sm:px-6 py-2 sm:py-4">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center space-x-2 sm:space-x-3 transition-all duration-200 ease-in-out hover:scale-105 transform"
          >
            <Image
              src="/logo.png"
              alt="Logo"
              width={32}
              height={32}
              className="object-contain sm:w-10 sm:h-10"
              priority
            />
            <div className="flex flex-col items-start">
              <span
                className="text-gray-900 font-bold leading-none tracking-tight text-sm sm:text-lg"
                style={{
                  fontFamily: "Roboto, 'Helvetica Neue', Arial, sans-serif",
                  letterSpacing: "0.1em",
                }}
              >
                ARROW
              </span>
              <span
                className="text-gray-900 font-bold leading-none tracking-tight text-sm sm:text-lg"
                style={{
                  fontFamily: "Roboto, 'Helvetica Neue', Arial, sans-serif",
                  letterSpacing: "0.1em",
                }}
              >
                STRUCTURES
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-all duration-200 ease-in-out hover:scale-105 hover:text-primary transform",
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
            className="lg:hidden h-10 w-10"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </header>

      {/* Mobile Navigation Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          {/* Backdrop */}
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setIsOpen(false)} />

          {/* Mobile Menu */}
          <div className="fixed top-14 sm:top-16 left-0 right-0 bg-white border-t shadow-lg">
            <div className="container py-6 px-4 sm:px-6">
              <nav className="flex flex-col space-y-1">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={cn(
                      "text-base font-medium transition-all duration-200 ease-in-out hover:bg-gray-50 rounded-lg px-4 py-3 -mx-4",
                      pathname === item.href
                        ? "text-primary font-semibold bg-primary/5"
                        : "text-muted-foreground hover:text-primary",
                    )}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
