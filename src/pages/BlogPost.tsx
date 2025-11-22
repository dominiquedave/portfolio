import { useParams, Link, Navigate } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Button } from "@/components/ui/button";
import { getPostBySlug, formatDate } from "@/lib/blog";
import { ArrowLeft, Calendar, Clock, Tag } from "lucide-react";

export function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPostBySlug(slug) : null;

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <div>
      {/* Header Section */}
      <section className="py-12 md:py-20">
        <div className="max-w-[800px] mx-auto px-6">
          <Button variant="ghost" asChild className="mb-8 -ml-4">
            <Link to="/blog">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Link>
          </Button>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 mt-6 text-foreground-muted">
            <span className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              {formatDate(post.date)}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              {post.readingTime}
            </span>
          </div>

          <div className="flex flex-wrap gap-2 mt-4">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center gap-1 px-3 py-1 text-sm rounded-md bg-accent/10 text-accent"
              >
                <Tag className="h-3 w-3" />
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="pb-20">
        <div className="max-w-[800px] mx-auto px-6">
          <article className="prose prose-invert prose-lg max-w-none prose-headings:text-foreground prose-p:text-foreground-muted prose-strong:text-foreground prose-a:text-accent prose-a:no-underline hover:prose-a:underline prose-code:text-accent prose-code:bg-muted prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-code:before:content-none prose-code:after:content-none prose-pre:bg-transparent prose-pre:p-0">
            <ReactMarkdown
              components={{
                code({ className, children, ...props }) {
                  const match = /language-(\w+)/.exec(className || "");
                  const isInline = !match;

                  if (isInline) {
                    return (
                      <code className={className} {...props}>
                        {children}
                      </code>
                    );
                  }

                  return (
                    <SyntaxHighlighter
                      style={oneDark}
                      language={match[1]}
                      PreTag="div"
                      customStyle={{
                        margin: 0,
                        borderRadius: "0.5rem",
                        fontSize: "0.875rem",
                      }}
                    >
                      {String(children).replace(/\n$/, "")}
                    </SyntaxHighlighter>
                  );
                },
              }}
            >
              {post.content}
            </ReactMarkdown>
          </article>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background-secondary">
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold">
            Found this helpful?
          </h2>
          <p className="mt-4 text-foreground-muted">
            Let's connect and discuss how I can help with your technical challenges.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/contact">Get in Touch</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/blog">Read More Posts</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
