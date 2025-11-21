import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Code, Bot, LineChart, Check } from "lucide-react"

const services = [
  {
    icon: Code,
    title: "Business Apps",
    description: "Custom software solutions tailored to your business processes and workflows.",
    features: [
      "CRM Tools",
      "E-commerce Platforms",
      "Data Dashboards",
      "Internal Tools",
      "API Development",
      "Database Design",
    ],
  },
  {
    icon: Bot,
    title: "AI & Automation",
    description: "Leverage artificial intelligence and automation to streamline your operations.",
    features: [
      "Custom Chatbots",
      "Process Automation",
      "Predictive Analytics",
      "Document Processing",
      "Workflow Optimization",
      "Integration Services",
    ],
  },
  {
    icon: LineChart,
    title: "Algorithmic Systems",
    description: "High-performance systems for quantitative and data-intensive applications.",
    features: [
      "Backtesting Engines",
      "Trading Bots",
      "Data Pipelines",
      "Real-time Processing",
      "Market Analysis Tools",
      "Risk Management Systems",
    ],
  },
]

export function Services() {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 md:py-32">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold">Services</h1>
            <p className="mt-6 text-xl text-foreground-muted">
              Strategic software solutions designed to deliver measurable business results.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-background-secondary">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Card key={service.title} className="flex flex-col">
                <CardHeader>
                  <service.icon className="h-12 w-12 text-accent mb-4" />
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3">
                        <Check className="h-5 w-5 text-accent flex-shrink-0" />
                        <span className="text-foreground-muted">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">How I Work</h2>
            <p className="mt-4 text-foreground-muted max-w-2xl mx-auto">
              A collaborative approach focused on understanding your needs and delivering value.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", description: "Understanding your business, goals, and challenges" },
              { step: "02", title: "Strategy", description: "Designing a solution aligned with your objectives" },
              { step: "03", title: "Development", description: "Building with quality, transparency, and iteration" },
              { step: "04", title: "Delivery", description: "Launching, measuring, and optimizing for results" },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="text-5xl font-bold text-accent/30">{item.step}</div>
                <h3 className="mt-4 text-xl font-semibold">{item.title}</h3>
                <p className="mt-2 text-foreground-muted">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background-secondary">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Ready to Get Started?</h2>
          <p className="mt-4 text-foreground-muted max-w-2xl mx-auto">
            Let's discuss your project and explore how I can help you achieve your goals.
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
