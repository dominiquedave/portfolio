import { Link } from "react-router-dom";
import { Calendar, Clock, Tag } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "./card";
import { formatDate, type BlogPostMeta } from "@/lib/blog";

interface BlogCardProps {
  post: BlogPostMeta;
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <Link to={`/blog/${post.slug}`}>
      <Card className="h-full transition-all duration-300 hover:border-accent hover:shadow-lg hover:shadow-accent/10">
        <CardHeader>
          <div className="flex items-center gap-4 text-sm text-foreground-muted mb-2">
            <span className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              {formatDate(post.date)}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              {post.readingTime}
            </span>
          </div>
          <CardTitle className="line-clamp-2 hover:text-accent transition-colors">
            {post.title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="line-clamp-3 text-base">
            {post.excerpt}
          </CardDescription>
        </CardContent>
        <CardFooter>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center gap-1 px-2 py-1 text-xs rounded-md bg-accent/10 text-accent"
              >
                <Tag className="h-3 w-3" />
                {tag}
              </span>
            ))}
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
}
