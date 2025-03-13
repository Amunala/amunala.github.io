// app/work/[slug]/page.js (server component)
import WorkPageClient from "@/app/components/work/WorkPageClient";
import portfolioProjects from "@/data/projects";


// This function tells Next.js which routes to pre-generate at build time
export function generateStaticParams() {
  return portfolioProjects.map((project) => ({
    slug: project.slug,
  }));
}

// Get the project data on the server
export default function Page({ params }) {
  const project = portfolioProjects.find((p) => p.slug === params.slug);
  
  // Pass the project data to your client component
  return <WorkPageClient project={project} />;
}