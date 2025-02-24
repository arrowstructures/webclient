import Link from "next/link"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="w-full border-t bg-background">
      <div className="container grid gap-8 py-12 md:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">About Us</h3>
          <p className="text-sm text-muted-foreground">
            Arrow Structures specializes in creating innovative and sustainable architectural solutions for modern
            living spaces.
          </p>
        </div>
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Quick Links</h3>
          <nav className="flex flex-col space-y-2">
            <Link href="/projects" className="text-sm hover:text-primary">
              Our Projects
            </Link>
            <Link href="/services" className="text-sm hover:text-primary">
              Services
            </Link>
            <Link href="/about" className="text-sm hover:text-primary">
              About Us
            </Link>
            <Link href="/contact" className="text-sm hover:text-primary">
              Contact
            </Link>
          </nav>
        </div>
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Contact Info</h3>
          <div className="text-sm space-y-2">
            <p>5, Guru Govind Singh Road, R.S Puram, Coimbatore – 641002, Tamil Nadu, India</p>
            <p>Phone: +91 88705 94827</p>
            <p>Email: info@arrowstructures.com</p>
          </div>
        </div>
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Follow Us</h3>
          <div className="flex space-x-4">
            <Link href="#" className="hover:text-primary">
              <Facebook className="h-5 w-5" />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link href="#" className="hover:text-primary">
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link href="#" className="hover:text-primary">
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link href="#" className="hover:text-primary">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </div>
        </div>
      </div>
      <div className="border-t py-6">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Arrow Structures. All rights reserved.
          </p>
          <nav className="flex gap-4 text-sm text-muted-foreground">
            <Link href="/privacy" className="hover:underline underline-offset-4">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:underline underline-offset-4">
              Terms of Service
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}

