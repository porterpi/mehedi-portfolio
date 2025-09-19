import ProjectCard from "@/components/ProjectCard";

const projects = [
  {
    title: "Portfolio Website",
    description: "Modern portfolio built with Next.js 15, Tailwind v4, and next-themes.",
    tech: ["Next.js", "Tailwind", "TypeScript"],
    link: "#",
  },
  {
    title: "AI Research Tool",
    description: "Biomedical QA model research project with lightweight BERT implementation.",
    tech: ["Python", "PyTorch", "Transformers"],
    link: "#",
  },
];

export default function ProjectsPage() {
  return (
    <section className="space-y-8">
      <h1 className="text-3xl font-bold">Projects</h1>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p) => (
          <ProjectCard key={p.title} {...p} />
        ))}
      </div>
    </section>
  );
}
