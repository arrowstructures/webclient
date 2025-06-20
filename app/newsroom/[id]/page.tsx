import type { Metadata } from "next"
import NewsDetailClient from "./NewsDetailPageClient"

type News = {
  id: string
  headline: string
  summary: string
  image: string
}

type Props = {
  params: { id: string }
}

import { supabase } from "@/lib/supabase"

// Server-side metadata generation for rich social sharing
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  try {
    // Fetch the news article for metadata
    const { data: news, error } = await supabase
      .from("news")
      .select("headline, summary, image, updated_at")
      .eq("id", params.id)
      .eq("publish_immediately", true)
      .single()

    const baseUrl = "https://arrowstructures.com"
    const articleUrl = `${baseUrl}/newsroom/${params.id}`

    if (error || !news) {
      return {
        title: "Article Not Found - Arrow Structures",
        description: "The requested news article could not be found.",
      }
    }

    // Ensure image URL is absolute
    const imageUrl = news.image?.startsWith("http")
      ? news.image
      : news.image
        ? `${baseUrl}${news.image}`
        : `${baseUrl}/placeholder.svg?height=630&width=1200`

    return {
      title: news.headline,
      description: news.summary,
      keywords: ["Arrow Structures", "news", "construction", "engineering"],
      authors: [{ name: "Arrow Structures" }],
      publisher: "Arrow Structures",
      openGraph: {
        title: news.headline,
        description: news.summary,
        url: articleUrl,
        siteName: "Arrow Structures",
        locale: "en_US",
        type: "article",
        publishedTime: news.updated_at,
        authors: ["Arrow Structures"],
        images: [
          {
            url: imageUrl,
            width: 1200,
            height: 630,
            alt: news.headline,
            type: "image/jpeg",
          },
          {
            url: imageUrl,
            width: 800,
            height: 600,
            alt: news.headline,
            type: "image/jpeg",
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        site: "@arrowstructures",
        creator: "@arrowstructures",
        title: news.headline,
        description: news.summary,
        images: {
          url: imageUrl,
          alt: news.headline,
        },
      },
      alternates: {
        canonical: articleUrl,
      },
    }
  } catch (error) {
    console.error("Error generating metadata:", error)
    return {
      title: "Arrow Structures News",
      description: "Latest news and updates from Arrow Structures",
    }
  }
}

// Main Page Component
export default function NewsDetailPage({ params }: Props) {
  return (
    <>
      <NewsDetailClient />
    </>
  )
}
