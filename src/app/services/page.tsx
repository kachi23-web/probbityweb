import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Code2, Lightbulb, ArrowRight, Check } from "lucide-react";

const trainingPackages = [
  {
    name: "Starter Program",
    badge: "Beginner",
    description: "Perfect for students & beginners starting their tech journey",
    features: [
      "Core programming fundamentals",
      "Hands-on mini projects",
      "Weekly mentorship sessions",
      "Community access",
    ],
    duration: "8–12 weeks",
    pricing: "Entry-level",
  },
  {
    name: "Professional Program",
    badge: "Career Track",
    popular: true,
    description: "For junior–mid developers ready to level up",
    features: [
      "Backend / Fullstack / AI track",
      "Real-world projects",
      "Code reviews",
      "Portfolio & CV support",
      "Interview prep",
    ],
    duration: "12–16 weeks",
    pricing: "Premium",
  },
  {
    name: "Corporate Training",
    badge: "Teams",
    description: "Custom training for companies & teams",
    features: [
      "Customized curriculum",
      "Secure APIs, Cloud, AI, DevOps",
      "Live workshops",
      "Documentation & support",
    ],
    duration: "Flexible",
    pricing: "Contract-based",
  },
];

const softwarePackages = [
  {
    name: "MVP Launch Package",
    description: "Get your startup from idea to working product",
    features: [
      "Product scoping",
      "UI/UX collaboration",
      "Backend & frontend development",
      "Deployment & handover",
    ],
    timeline: "30–90 days",
    pricing: "Fixed project cost",
  },
  {
    name: "Growth & Scale Package",
    description: "For growing businesses ready to expand",
    features: [
      "System refactoring",
      "Performance optimization",
      "Feature expansion",
      "Ongoing support",
    ],
    timeline: "Ongoing",
    pricing: "Monthly or milestone-based",
  },
];

const consultingPackages = [
  {
    name: "Tech Audit & Strategy",
    description: "Get clarity on your technical landscape",
    features: [
      "System & code review",
      "Architecture recommendations",
      "Security & performance analysis",
      "Roadmap documentation",
    ],
    pricing: "One-time engagement",
  },
  {
    name: "AI & Automation Consulting",
    description: "Leverage AI to transform your operations",
    features: [
      "AI readiness assessment",
      "Chatbots & workflow automation",
      "Internal tools",
      "Training for staff",
    ],
    pricing: "Premium / Retainer",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="gradient-hero py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-lg text-muted-foreground text-white">
              From training talent to building software to transforming organizations — we deliver solutions that scale.
            </p>
          </div>
        </div>
      </section>

      {/* Training Section */}
      <section id="training" className="py-20 md:py-28 bg-background scroll-mt-20">
        <div className="container">
          <div className="flex items-center space-x-4 mb-8">
            <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center">
              <GraduationCap className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h2 className="text-3xl font-bold">Training & Career Development</h2>
              <p className="text-muted-foreground">We don't just teach — we prepare you for real-world tech roles.</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {trainingPackages.map((pkg, index) => (
              <Card key={index} className={`relative ${pkg.popular ? "border-primary shadow-lg" : "border-border/50"}`}>
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground">Most Popular</Badge>
                  </div>
                )}
                <CardHeader>
                  <Badge variant="secondary" className="w-fit mb-2">{pkg.badge}</Badge>
                  <CardTitle>{pkg.name}</CardTitle>
                  <CardDescription>{pkg.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-start space-x-2 text-sm">
                        <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="pt-4 border-t border-border space-y-1">
                    <p className="text-sm"><strong>Duration:</strong> {pkg.duration}</p>
                    <p className="text-sm"><strong>Pricing:</strong> {pkg.pricing}</p>
                  </div>
                  <Button className="w-full" asChild>
                    <Link href="/contact">Get Started</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Software Development Section */}
      <section id="software" className="py-20 md:py-28 bg-muted/30 scroll-mt-20">
        <div className="container">
          <div className="flex items-center space-x-4 mb-8">
            <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center">
              <Code2 className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h2 className="text-3xl font-bold">Software Development</h2>
              <p className="text-muted-foreground">From idea to production-ready software.</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl">
            {softwarePackages.map((pkg, index) => (
              <Card key={index} className="border-border/50">
                <CardHeader>
                  <CardTitle>{pkg.name}</CardTitle>
                  <CardDescription>{pkg.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-start space-x-2 text-sm">
                        <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="pt-4 border-t border-border space-y-1">
                    <p className="text-sm"><strong>Timeline:</strong> {pkg.timeline}</p>
                    <p className="text-sm"><strong>Pricing:</strong> {pkg.pricing}</p>
                  </div>
                  <Button className="w-full" asChild>
                    <Link href="/contact">Start a Project</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Consulting Section */}
      <section id="consulting" className="py-20 md:py-28 bg-background scroll-mt-20">
        <div className="container">
          <div className="flex items-center space-x-4 mb-8">
            <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center">
              <Lightbulb className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h2 className="text-3xl font-bold">Consulting & Digital Transformation</h2>
              <p className="text-muted-foreground">We help organizations use technology the right way.</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl">
            {consultingPackages.map((pkg, index) => (
              <Card key={index} className="border-border/50">
                <CardHeader>
                  <CardTitle>{pkg.name}</CardTitle>
                  <CardDescription>{pkg.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-start space-x-2 text-sm">
                        <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="pt-4 border-t border-border">
                    <p className="text-sm"><strong>Pricing:</strong> {pkg.pricing}</p>
                  </div>
                  <Button className="w-full" asChild>
                    <Link href="/contact">Book a Consultation</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Not sure which service is right for you?</h2>
          <p className="text-lg opacity-90 mb-6">Let's discuss your needs and find the perfect solution.</p>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/contact">
              Book a Free Strategy Call
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}