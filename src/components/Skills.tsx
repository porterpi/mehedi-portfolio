const skills = [
  "JavaScript", "TypeScript", "Next.js", "React", "Tailwind CSS",
  "Node.js", "Express", "Python", "C++", "AI/ML", "Docker", "Git",
];

export default function Skills() {
  return (
    <section className="my-12">
      <h2 className="text-2xl font-bold mb-4">Skills</h2>
      <div className="flex flex-wrap gap-3">
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-sm font-medium"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
