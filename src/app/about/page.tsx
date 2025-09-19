import Skills from "@/components/Skills";

export default function AboutPage() {
  return (
    <section className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">About Me</h1>
        <p className="text-gray-600 dark:text-gray-300 mt-2">
          Graduate student and software engineer passionate about building modern web applications and AI solutions.
        </p>
      </div>
      <Skills />
    </section>
  );
}
