import Link from "next/link"
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react"

export function SiteFooter() {
  const currentYear = new Date().getFullYear()

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Services", href: "/services" },
    { name: "Blocks", href: "/blocks" },
    { name: "Newsletter", href: "/newsletter" },
    { name: "Career", href: "/career" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <footer className="bg-slate-900 text-slate-200">
      <div className="container py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
  <img
    src="/logo.png" // update path if needed
    alt="Arrow Structures Logo"
    className="h-10 w-auto"
  />
  <div className="flex flex-col leading-tight">
    <span className="text-xl font-bold text-white">ARROW</span>
    <span className="text-xl font-bold text-white">STRUCTURES</span>
  </div>
</div>

            <p className="text-sm text-slate-400 max-w-xs">
              Providing innovative structural engineering solutions and construction services since 2017.
            </p>
            <div className="flex space-x-4">
              <Link href="https://facebook.com" className="text-slate-400 hover:text-white">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="https://instagram.com" className="text-slate-400 hover:text-white">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="https://linkedin.com" className="text-slate-400 hover:text-white">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm text-slate-400 hover:text-white">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services" className="text-sm text-slate-400 hover:text-white">
                  Residential Projects
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm text-slate-400 hover:text-white">
                  Commercial Development
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm text-slate-400 hover:text-white">
                  Structural Design
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm text-slate-400 hover:text-white">
                  Project Management
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm text-slate-400 hover:text-white">
                  Consultation
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-slate-400 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-slate-400">
                  5, Guru Govind Singh Road, R.S Puram, Coimbatore – 641002, Tamil Nadu, India
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-slate-400 mr-2 flex-shrink-0" />
                <span className="text-sm text-slate-400">+91 88705 94827</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-slate-400 mr-2 flex-shrink-0" />
                <span className="text-sm text-slate-400">arrowstructures@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-slate-800 text-center text-sm text-slate-400">
          <p>© {currentYear} Arrow Structures. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
