import { supabase } from "@/lib/supabase"

type Props = {
  params: { id: string }
}

export default async function Head({ params }: Props) {
  const { data: news } = await supabase
    .from("news")
    .select("headline, summary, image")
    .eq("id", params.id)
    .eq("publish_immediately", true)
    .single()

  if (!news) {
    return (
      <>
        <title>Article Not Found - Arrow Structures</title>
        <meta name="description" content="The requested news article could not be found." />
      </>
    )
  }

  const baseUrl = "https://arrowstructures.com"
  const articleUrl = `${baseUrl}/newsroom/${params.id}`
  const imageUrl = news.image?.startsWith("http")
    ? news.image
    : news.image
      ? `${baseUrl}${news.image}`
      : `${baseUrl}/placeholder.svg?height=630&width=1200`

  return (
    <>
      <title>{news.headline}</title>
      <meta name="description" content={news.summary} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="article" />
      <meta property="og:url" content={articleUrl} />
      <meta property="og:title" content={news.headline} />
      <meta property="og:description" content={news.summary} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Arrow Structures" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={articleUrl} />
      <meta property="twitter:title" content={news.headline} />
      <meta property="twitter:description" content={news.summary} />
      <meta property="twitter:image" content={imageUrl} />

      {/* WhatsApp specific */}
      <meta property="og:image:alt" content={news.headline} />
      <meta property="og:locale" content="en_US" />
    </>
  )
}
