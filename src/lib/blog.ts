export interface BlogPost {
  title: string;
  slug: string;
  excerpt: string;
  date: string;
  content: string; // can be Markdown
}

export const blogPosts: BlogPost[] = [
  {
    title: "How I Built My Portfolio with Next.js 15 & Tailwind 4",
    slug: "built-portfolio-nextjs-tailwind",
    excerpt: "A detailed guide on building a modern, minimalistic portfolio.",
    date: "2025-09-19",
    content: "This is the full blog content. You can use Markdown here later.",
  },
  {
    title: "My AI Research Project",
    slug: "ai-research-project",
    excerpt: "An overview of my biomedical QA lightweight BERT project.",
    date: "2025-09-15",
    content: "Details about my AI research project...",
  },
];

export function getAllPosts() {
  return blogPosts;
}

export function getPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
