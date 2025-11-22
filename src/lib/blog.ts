import matter from "gray-matter";

// Simple reading time calculation (average 200 words per minute)
function calculateReadingTime(text: string): string {
  const wordsPerMinute = 200;
  const words = text.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return `${minutes} min read`;
}

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  tags: string[];
  excerpt: string;
  content: string;
  readingTime: string;
}

export interface BlogPostMeta {
  slug: string;
  title: string;
  date: string;
  tags: string[];
  excerpt: string;
  readingTime: string;
}

// Import all markdown files from the content/blog directory
const blogFiles = import.meta.glob("/src/content/blog/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
});

function parseMarkdownFile(
  filePath: string,
  rawContent: string
): BlogPost | null {
  try {
    const { data, content } = matter(rawContent);
    const slug = filePath.replace("/src/content/blog/", "").replace(".md", "");

    return {
      slug,
      title: data.title || "Untitled",
      date: data.date || new Date().toISOString().split("T")[0],
      tags: data.tags || [],
      excerpt: data.excerpt || content.slice(0, 150) + "...",
      content,
      readingTime: calculateReadingTime(content),
    };
  } catch (error) {
    console.error(`Error parsing ${filePath}:`, error);
    return null;
  }
}

export function getAllPosts(): BlogPostMeta[] {
  const posts: BlogPostMeta[] = [];

  for (const [path, content] of Object.entries(blogFiles)) {
    const post = parseMarkdownFile(path, content as string);
    if (post) {
      const { content: _, ...meta } = post;
      posts.push(meta);
    }
  }

  // Sort by date, newest first
  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getPostBySlug(slug: string): BlogPost | null {
  const filePath = `/src/content/blog/${slug}.md`;
  const content = blogFiles[filePath];

  if (!content) {
    return null;
  }

  return parseMarkdownFile(filePath, content as string);
}

export function getAllTags(): string[] {
  const posts = getAllPosts();
  const tagsSet = new Set<string>();

  posts.forEach((post) => {
    post.tags.forEach((tag) => tagsSet.add(tag));
  });

  return Array.from(tagsSet).sort();
}

export function getPostsByTag(tag: string): BlogPostMeta[] {
  return getAllPosts().filter((post) =>
    post.tags.map((t) => t.toLowerCase()).includes(tag.toLowerCase())
  );
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
