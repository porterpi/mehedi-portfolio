import Link from "next/link";
import { getAllPosts } from "@/lib/blog";
import BlogCard from "@/components/BlogCard";

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <section className="space-y-8">
      <h1 className="text-3xl font-bold">Blog</h1>
      <div className="grid gap-6 md:grid-cols-2">
        {posts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`}>
            <BlogCard post={post} />
          </Link>
        ))}
      </div>
    </section>
  );
}
