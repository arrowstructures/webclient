import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { format } from "date-fns";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

// Simulate blog posts data (replace with actual fetch or database call)
const blogPosts = {
  "1": {
    id: "1",
    title: "The Future of Sustainable Transportation",
    excerpt: "Exploring innovative approaches to eco-friendly public transit and infrastructure design.",
    content: `
      <p>The transportation sector is undergoing a radical transformation...</p>
    `,
    date: new Date("2024-01-15"),
    image: "/proj3.jpg",
    author: "John Smith",
    category: "Sustainability",
  },
  "2": {
    id: "2",
    title: "Modern Bus Terminal Design Trends 2024",
    excerpt: "Discover the latest trends in bus terminal architecture...",
    content: `
      <p>Bus terminals are evolving from simple waiting areas to sophisticated, multi-functional spaces...</p>
    `,
    date: new Date("2024-01-10"),
    image: "/proj1.jpg",
    author: "Sarah Johnson",
    category: "Design Trends",
  },
  // Add other posts here
};

// ✅ Create static props function for dynamic route
export async function getStaticProps({ params }: { params: { id: string } }) {
  const post = blogPosts[params.id as keyof typeof blogPosts];

  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: { post }, // Pass the post data to the page component
  };
}

export async function getStaticPaths() {
  // Define dynamic paths for your blog posts
  const paths = Object.keys(blogPosts).map((id) => ({
    params: { id },
  }));

  return {
    paths,
    fallback: false, // 404s for missing pages
  };
}

type BlogPostProps = {
  post: {
    id: string;
    title: string;
    excerpt: string;
    content: string;
    date: Date;
    image: string;
    author: string;
    category: string;
  };
};

export default function BlogPost({ post }: BlogPostProps) {
  return (
    <article className="container py-12 md:py-24">
      <Button variant="ghost" asChild className="mb-8">
        <Link href="/blog">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Blog
        </Link>
      </Button>

      <div className="space-y-8">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">{post.title}</h1>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <time dateTime={post.date.toISOString()}>{format(post.date, "MMMM d, yyyy")}</time>
            <span>{post.category}</span>
            <span>By {post.author}</span>
          </div>
        </div>

        <div className="relative aspect-video overflow-hidden rounded-lg">
          <Image
            src={post.image || "/placeholder.svg"}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        <div
          className="prose prose-stone mx-auto dark:prose-invert"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </div>
    </article>
  );
}
