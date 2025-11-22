import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { BlogCard } from "@/components/ui/blog-card";
import { getAllPosts, getAllTags } from "@/lib/blog";
import { BookOpen, Tag } from "lucide-react";

export function Blog() {
  const allPosts = getAllPosts();
  const allTags = getAllTags();
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const filteredPosts = selectedTag
    ? allPosts.filter((post) =>
        post.tags.map((t) => t.toLowerCase()).includes(selectedTag.toLowerCase())
      )
    : allPosts;

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 md:py-32">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Technical <span className="text-accent">Blog</span>
            </h1>
            <p className="mt-6 text-xl text-foreground-muted">
              Insights, tutorials, and lessons learned from solving complex
              technical challenges.
            </p>
          </div>
        </div>
      </section>

      {/* Tags Filter Section */}
      {allTags.length > 0 && (
        <section className="pb-8">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="flex flex-wrap items-center gap-2">
              <Tag className="h-5 w-5 text-foreground-muted" />
              <button
                onClick={() => setSelectedTag(null)}
                className={`px-3 py-1 text-sm rounded-md transition-colors ${
                  selectedTag === null
                    ? "bg-accent text-accent-foreground"
                    : "bg-muted text-foreground-muted hover:bg-accent/20"
                }`}
              >
                All
              </button>
              {allTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setSelectedTag(tag)}
                  className={`px-3 py-1 text-sm rounded-md transition-colors ${
                    selectedTag === tag
                      ? "bg-accent text-accent-foreground"
                      : "bg-muted text-foreground-muted hover:bg-accent/20"
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Blog Posts Section */}
      <section className="py-12">
        <div className="max-w-[1200px] mx-auto px-6">
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPosts.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <BookOpen className="h-16 w-16 text-foreground-muted mx-auto mb-4" />
              <h2 className="text-2xl font-bold mb-2">No posts yet</h2>
              <p className="text-foreground-muted">
                Check back soon for new content!
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background-secondary">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">
            Have a Technical Challenge?
          </h2>
          <p className="mt-4 text-foreground-muted max-w-2xl mx-auto">
            Let's discuss how I can help solve your complex engineering problems.
          </p>
          <div className="mt-8">
            <Button size="lg" asChild>
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
