import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Building2, Calendar, MapPin, Ruler } from "lucide-react";
import { Button } from "@/components/ui/button";
import { notFound } from "next/navigation";

interface Project {
  title: string;
  category: string;
  location: string;
  completionDate: string;
  area: string;
  description: string;
  image: string;
  features: string[];
  specifications: string[];
}

// 📌 Project Data (Modify this as needed)
const projects: { [key: string]: Project } = {
  "01": {
    title: "KKD Nagar Bus Stand",
    category: "Transportation",
    location: "KKD Nagar, Chennai",
    completionDate: "2024",
    area: "25,000 sq.ft",
    description: "A state-of-the-art bus terminus designed to enhance public transportation infrastructure.",
    image: "/proj-1.jpg",
    features: ["Modern design", "Efficient layout", "Sustainable lighting"],
    specifications: ["10 bus bays", "Parking: 50 vehicles", "Green spaces"],
  },
  "02": {
    title: "Mandaveli West Bus Depot",
    category: "Mixed-Use",
    location: "Mandaveli, Chennai",
    completionDate: "2025",
    area: "75,000 sq.ft",
    description: "An innovative mixed-use development with a modern bus depot & commercial spaces.",
    image: "/proj-2.jpg",
    features: ["Retail spaces", "Energy-efficient design", "Multi-level parking"],
    specifications: ["15 bus bays", "Parking: 200 vehicles", "Green spaces"],
  },
};

// ✅ Generate static paths for Next.js (Pre-renders project pages)
export function generateStaticParams() {
  return Object.keys(projects).map((id) => ({ id }));
}

// ✅ Generate metadata for SEO
export async function generateMetadata({ params }: { params: { id?: string } }) {
  if (!params?.id) return notFound();
  const id = decodeURIComponent(params.id);
  if (!projects[id]) return notFound(); // Redirect to 404 if project not found

  const project = projects[id];
  return {
    title: project.title,
    description: project.description,
  };
}

// ✅ Dynamic Project Page Component
export default function ProjectPage({ params }: { params: { id?: string } }) {
  if (!params?.id) return <div className="text-center text-xl font-bold text-red-500">Project not found</div>;
  const id = decodeURIComponent(params.id);
  if (!projects[id]) {
    return <div className="text-center text-xl font-bold text-red-500">Project not found</div>;
  }

  const project = projects[id];

  return (
    <div className="container py-12 md:py-24">
      <Button variant="ghost" asChild className="mb-8">
        <Link href="/projects">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Projects
        </Link>
      </Button>

      <div className="grid gap-12 lg:grid-cols-2">
        <div className="space-y-6">
          <h1 className="text-4xl font-bold tracking-tighter">{project.title}</h1>
          <p className="mt-2 text-xl text-muted-foreground">{project.category}</p>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-primary" />
              <span className="text-sm">{project.location}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-primary" />
              <span className="text-sm">Completion: {project.completionDate}</span>
            </div>
            <div className="flex items-center gap-2">
              <Ruler className="h-4 w-4 text-primary" />
              <span className="text-sm">Area: {project.area}</span>
            </div>
            <div className="flex items-center gap-2">
              <Building2 className="h-4 w-4 text-primary" />
              <span className="text-sm">{project.category}</span>
            </div>
          </div>

          <h2 className="text-2xl font-bold">Project Overview</h2>
          <p className="text-muted-foreground">{project.description}</p>

          <h2 className="text-2xl font-bold">Key Features</h2>
          <ul className="grid gap-2 sm:grid-cols-2">
            {project.features.map((feature, index) => (
              <li key={index} className="text-sm text-muted-foreground">{feature}</li>
            ))}
          </ul>
        </div>

        <div className="space-y-6">
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}