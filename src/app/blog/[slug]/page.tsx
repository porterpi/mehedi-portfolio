import { getPostBySlug } from "@/lib/blog";
import { notFound } from "next/navigation";

interface Props {
  params: { slug: string };
}

export default function BlogPostPage({ params }: Props) {
  const post = getPostBySlug(params.slug);

  if (!post) return notFound();

  return (
    <article className="prose dark:prose-invert max-w-3xl mx-auto py-12">
      <h1>{post.title}</h1>
      <p className="text-gray-400">{post.date}</p>
      <div>{post.content}</div>
    </article>
  );
}
