import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Target, Users, TrendingUp } from "lucide-react"

const values = [
  {
    icon: Target,
    title: "Business-First Approach",
    description:
      "Every technical decision is made with business outcomes in mind. Technology should serve your goals, not dictate them.",
  },
  {
    icon: Users,
    title: "Collaborative Process",
    description:
      "We work closely with stakeholders to understand the problem before writing a single line of code.",
  },
  {
    icon: TrendingUp,
    title: "Measurable Results",
    description:
      "Success is defined by ROI, efficiency gains, and tangible business improvements—not just shipped features.",
  },
]

export function About() {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 md:py-32">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold">About Us</h1>
            <p className="mt-6 text-xl text-foreground-muted">
              Strategic software engineering for growth-focused businesses.
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-16 bg-background-secondary">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold">Our Philosophy</h2>
              <p className="mt-6 text-foreground-muted text-lg leading-relaxed">
                Technology should serve business goals, not the other way around. Too
                often, we've seen companies invest in solutions that look impressive but
                fail to move the needle on what actually matters.
              </p>
              <p className="mt-4 text-foreground-muted text-lg leading-relaxed">
                Our approach is different. Before writing any code, we invest time
                understanding your business model, challenges, and goals. This ensures
                every technical decision is aligned with delivering real, measurable
                value.
              </p>
            </div>
            <div className="space-y-6">
              {values.map((value) => (
                <div key={value.title} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <value.icon className="h-8 w-8 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{value.title}</h3>
                    <p className="mt-1 text-foreground-muted">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold">Our Journey</h2>
            <div className="mt-8 space-y-6 text-foreground-muted text-lg leading-relaxed">
              <p>
                With over <span className="text-foreground font-semibold">10 years of combined experience</span> in
                full-stack development and data science, our team has had the privilege of
                working with startups, agencies, and enterprise clients across diverse
                industries.
              </p>
              <p>
                Our expertise spans the full technology stack—from building performant
                backend systems and APIs to crafting intuitive user interfaces. We
                specialize in creating scalable, robust software solutions that stand
                the test of time.
              </p>
              <p>
                Beyond traditional development, we bring expertise in AI integration,
                algorithmic trading systems, and process automation. This diverse skill
                set allows us to approach problems from multiple angles and find the
                most effective solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background-secondary">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Let's Work Together</h2>
          <p className="mt-4 text-foreground-muted max-w-2xl mx-auto">
            Whether you have a specific project in mind or want to explore how
            technology can drive your business forward, we'd love to hear from you.
          </p>
          <div className="mt-8">
            <Button size="lg" asChild>
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
