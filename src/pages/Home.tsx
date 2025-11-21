import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, Bot, LineChart, Check, ArrowRight } from "lucide-react"

const stats = [
  { value: "35%", label: "Increase in Conversion" },
  { value: "$150k", label: "Annual Savings" },
  { value: "10+", label: "Years Experience" },
]

const services = [
  {
    icon: Code,
    title: "Business Apps",
    description: "Custom CRM tools, e-commerce platforms, and data dashboards built for your specific needs.",
  },
  {
    icon: Bot,
    title: "AI & Automation",
    description: "Custom chatbots, process automation, and predictive analytics to streamline operations.",
  },
  {
    icon: LineChart,
    title: "Algorithmic Systems",
    description: "Backtesting engines, trading bots, and data pipelines for quantitative applications.",
  },
]

const caseStudyResults = [
  "40% reduction in slippage",
  "$50k/month additional revenue",
  "Sub-millisecond execution latency",
]

export function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 md:py-32">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Software That Solves{" "}
              <span className="text-accent">Business Problems</span>
            </h1>
            <p className="mt-6 text-xl text-foreground-muted">
              Full-stack development, AI integration, and algorithmic systems that
              drive revenue and efficiency.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg">
                <Link to="/contact">Schedule a Call</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/services">View Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-background-secondary">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-accent">
                  {stat.value}
                </div>
                <div className="mt-2 text-foreground-muted">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">What We Do</h2>
            <p className="mt-4 text-foreground-muted max-w-2xl mx-auto">
              Strategic software solutions designed to deliver measurable business results.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((service) => (
              <Card key={service.title} className="hover:border-accent transition-colors">
                <CardHeader>
                  <service.icon className="h-10 w-10 text-accent mb-4" />
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground-muted">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button variant="outline" asChild>
              <Link to="/services">
                View All Services <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-20 bg-background-secondary">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-accent font-medium mb-4">Featured Case Study</div>
              <h2 className="text-3xl md:text-4xl font-bold">
                FinTech Trading Platform
              </h2>
              <div className="mt-6 space-y-4">
                <div>
                  <h3 className="font-semibold text-lg">The Challenge</h3>
                  <p className="text-foreground-muted mt-1">
                    Build a low-latency execution engine for crypto arbitrage opportunities
                    across multiple exchanges.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">The Solution</h3>
                  <p className="text-foreground-muted mt-1">
                    Rust-based matching engine with real-time React dashboard for
                    monitoring and control.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Results</h3>
                  <ul className="mt-2 space-y-2">
                    {caseStudyResults.map((result) => (
                      <li key={result} className="flex items-center gap-2 text-foreground-muted">
                        <Check className="h-5 w-5 text-accent flex-shrink-0" />
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="bg-muted rounded-xl h-64 lg:h-80 flex items-center justify-center overflow-hidden">
              <img
                src="/fintech_trading_dashboard.png"
                alt="Fintech Trading Dashboard"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">
            Ready to Build Something Great?
          </h2>
          <p className="mt-4 text-foreground-muted max-w-2xl mx-auto">
            Let's discuss how strategic software development can transform your business.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/contact">Schedule a Call</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="mailto:TridentTechnologies2025@outlook.com">Email Me</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
