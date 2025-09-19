export default function HomePage() {
  return (
    <section className="flex flex-col items-center justify-center text-center gap-6 py-24">
      <h1 className="text-5xl font-bold">Hi, I’m Mehedi Hasan 👋</h1>
      <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl">
        A graduate student and software engineer passionate about building modern web applications and AI solutions.
      </p>
      <div className="flex gap-4 mt-4 flex-wrap justify-center">
        <a
          href="#projects"
          className="px-6 py-3 rounded-lg bg-brand text-white hover:bg-brand-dark transition"
        >
          View My Work
        </a>
        <a
          href="/contact"
          className="px-6 py-3 rounded-lg border border-brand text-brand hover:bg-brand hover:text-white transition"
        >
          Contact Me
        </a>
      </div>
    </section>
  );
}
