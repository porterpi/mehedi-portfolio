export default function NewsletterForm() {
  return (
    <section className="my-12 border p-6 rounded-xl bg-gray-100 dark:bg-gray-800 max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-2">Subscribe to my newsletter</h2>
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        Get notified when I post new blogs.
      </p>
      <form className="flex flex-col gap-3">
        <input
          type="email"
          placeholder="Your email"
          className="px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-brand dark:bg-gray-700"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-brand text-white rounded hover:bg-brand-dark transition"
        >
          Subscribe
        </button>
      </form>
    </section>
  );
}
