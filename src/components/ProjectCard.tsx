interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  link?: string;
}

export default function ProjectCard({ title, description, tech, link }: ProjectCardProps) {
  return (
    <div className="border rounded-xl p-6 shadow hover:shadow-lg transition hover:-translate-y-1">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {tech.map((t) => (
          <span key={t} className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded text-sm">
            {t}
          </span>
        ))}
      </div>
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-brand hover:underline"
        >
          View Project →
        </a>
      )}
    </div>
  );
}
