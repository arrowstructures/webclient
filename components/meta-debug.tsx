"use client"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Copy } from "lucide-react"
import { toast } from "sonner"

export default function MetaDebug() {
  const [metaTags, setMetaTags] = useState<{ [key: string]: string }>({})
  const [currentUrl, setCurrentUrl] = useState("")

  useEffect(() => {
    // Get current URL
    setCurrentUrl(window.location.href)

    // Extract meta tags
    const tags: { [key: string]: string } = {}

    // Get Open Graph tags
    const ogTags = document.querySelectorAll('meta[property^="og:"]')
    ogTags.forEach((tag) => {
      const property = tag.getAttribute("property")
      const content = tag.getAttribute("content")
      if (property && content) {
        tags[property] = content
      }
    })

    // Get Twitter tags
    const twitterTags = document.querySelectorAll('meta[name^="twitter:"]')
    twitterTags.forEach((tag) => {
      const name = tag.getAttribute("name")
      const content = tag.getAttribute("content")
      if (name && content) {
        tags[name] = content
      }
    })

    // Get basic meta tags
    const title = document.querySelector("title")?.textContent
    const description = document.querySelector('meta[name="description"]')?.getAttribute("content")

    if (title) tags["title"] = title
    if (description) tags["description"] = description

    setMetaTags(tags)
  }, [])

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    toast.success("Copied to clipboard!")
  }

  const testWhatsApp = () => {
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(currentUrl)}`
    window.open(whatsappUrl, "_blank")
  }

  const testFacebook = () => {
    const facebookDebugger = `https://developers.facebook.com/tools/debug/?q=${encodeURIComponent(currentUrl)}`
    window.open(facebookDebugger, "_blank")
  }

  if (process.env.NODE_ENV === "production") {
    return null // Hide in production
  }

  return (
    <Card className="fixed bottom-4 right-4 w-96 max-h-96 overflow-y-auto z-50 shadow-lg">
      <CardHeader className="pb-2">
        <CardTitle className="text-sm">Meta Tags Debug</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="flex gap-2 mb-4">
          <Button size="sm" onClick={testWhatsApp} className="text-xs">
            Test WhatsApp
          </Button>
          <Button size="sm" onClick={testFacebook} className="text-xs">
            FB Debugger
          </Button>
        </div>

        <div className="space-y-1 text-xs">
          {Object.entries(metaTags).map(([key, value]) => (
            <div key={key} className="flex justify-between items-start gap-2 p-1 bg-gray-50 rounded">
              <span className="font-mono text-xs text-blue-600 min-w-0 flex-shrink-0">{key}:</span>
              <span className="text-xs text-gray-800 min-w-0 flex-1 break-words">{value}</span>
              <Button
                size="sm"
                variant="ghost"
                className="h-4 w-4 p-0 flex-shrink-0"
                onClick={() => copyToClipboard(value)}
              >
                <Copy className="h-2 w-2" />
              </Button>
            </div>
          ))}
        </div>

        <div className="pt-2 border-t">
          <div className="flex items-center gap-2">
            <span className="text-xs font-medium">Current URL:</span>
            <Button size="sm" variant="ghost" className="h-4 w-4 p-0" onClick={() => copyToClipboard(currentUrl)}>
              <Copy className="h-2 w-2" />
            </Button>
          </div>
          <p className="text-xs text-gray-600 break-all">{currentUrl}</p>
        </div>
      </CardContent>
    </Card>
  )
}
