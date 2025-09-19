export default function ContactForm() {
  return (
    <section className="my-12">
      <h2 className="text-2xl font-bold mb-4">Contact Me</h2>
      <form className="max-w-md space-y-4">
        <div>
          <label className="block text-sm mb-1">Name</label>
          <input
            type="text"
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand dark:bg-gray-700"
            placeholder="Your Name"
          />
        </div>
        <div>
          <label className="block text-sm mb-1">Email</label>
          <input
            type="email"
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand dark:bg-gray-700"
            placeholder="you@example.com"
          />
        </div>
        <div>
          <label className="block text-sm mb-1">Message</label>
          <textarea
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand dark:bg-gray-700"
            rows={5}
            placeholder="Your message"
          />
        </div>
        <button
          type="submit"
          className="px-6 py-2 bg-brand text-white rounded hover:bg-brand-dark transition"
        >
          Send
        </button>
      </form>
    </section>
  );
}
