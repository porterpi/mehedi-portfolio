import { BlogPost } from "@/lib/blog";

export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <div className="border rounded-xl p-6 shadow hover:shadow-lg transition hover:-translate-y-1 bg-white dark:bg-gray-800">
      <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
      <p className="text-gray-600 dark:text-gray-300 mb-2">{post.excerpt}</p>
      <p className="text-sm text-gray-400">{post.date}</p>
    </div>
  );
}
