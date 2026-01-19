import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Heart, Zap, Globe, Users, Lightbulb, ArrowRight } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Outcome-Driven",
    description: "We focus on results, not just deliverables. Every project is measured by the impact it creates.",
  },
  {
    icon: Heart,
    title: "People First",
    description: "Whether it's our team, students, or clients — people are at the center of everything we do.",
  },
  {
    icon: Zap,
    title: "Excellence",
    description: "We hold ourselves to the highest standards in code quality, training, and service delivery.",
  },
  {
    icon: Globe,
    title: "Global Standards",
    description: "Africa-rooted with global competitiveness. We meet international benchmarks in all we do.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "We believe the best solutions come from working together — with clients, partners, and communities.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We stay ahead of the curve, embracing new technologies and methodologies to deliver better results.",
  },
];

const team = [
  {
    name: "Oluwaseun A.",
    role: "Founder & CEO",
    bio: "10+ years in software engineering and tech education. Passionate about building Africa's tech talent pipeline.",
  },
  {
    name: "Amara O.",
    role: "Head of Training",
    bio: "Former senior engineer turned educator. Believes in practical, project-based learning that gets results.",
  },
  {
    name: "Chidi E.",
    role: "Lead Software Architect",
    bio: "System design expert with experience building scalable platforms for startups and enterprises alike.",
  },
  {
    name: "Fatima M.",
    role: "Consulting Director",
    bio: "Digital transformation specialist helping organizations navigate technology adoption and optimization.",
  },
];

const About = () => {
  return (
    <div>
      {/* Hero */}
      <section className="gradient-hero py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
            <p className="text-lg text-muted-foreground text-white">
              We're on a mission to build world-class tech talent and solutions from Africa.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      {/* <section className="py-20 md:py-28 bg-background">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Probbity was born from a simple observation: Africa has incredible talent, but too often, 
                  the training, tools, and opportunities don't match the potential. We set out to change that.
                </p>
                <p>
                  Starting as a small training initiative, we've grown into a comprehensive tech company 
                  offering training, software development, and consulting services. Our approach is 
                  practical, outcome-driven, and rooted in real-world experience.
                </p>
                <p>
                  Today, we've trained over 200 developers, shipped products for startups and enterprises, 
                  and helped organizations transform their digital operations. But we're just getting started.
                </p>
                <p className="font-medium text-foreground">
                  Our vision is simple: to prove that world-class tech can be built anywhere, by anyone, 
                  with the right guidance and tools.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-secondary rounded-2xl flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-6xl font-bold text-primary mb-2">500+</div>
                  <p className="text-lg text-muted-foreground">Developers Trained</p>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-2xl -z-10" />
            </div>
          </div>
        </div>
      </section> */}

      {/* Mission & Vision */}
      <section className="py-20 md:py-28 bg-muted/30">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="border-border/50 bg-card">
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-3">Our Mission</h3>
                <p className="text-muted-foreground">
                  To equip individuals and organizations with the skills, software, and strategies 
                  they need to thrive in the digital economy — delivering measurable outcomes at every step.
                </p>
              </CardContent>
            </Card>
            <Card className="border-border/50 bg-card">
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center mb-4">
                  <Globe className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-3">Our Vision</h3>
                <p className="text-muted-foreground">
                  To be Africa's leading technology partner — building talent pipelines, shipping 
                  world-class software, and driving digital transformation across the continent and beyond.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-lg text-muted-foreground">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {values.map((value, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-card border border-border/50 hover:border-primary/30 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center mb-4">
                  <value.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      {/* <section className="py-20 md:py-28 bg-muted/30">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-lg text-muted-foreground">
              Real practitioners building real solutions
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <div className="w-24 h-24 mx-auto rounded-full bg-secondary flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-primary">
                    {member.name.split(" ").map(n => n[0]).join("")}
                  </span>
                </div>
                <h3 className="font-semibold text-lg">{member.name}</h3>
                <p className="text-sm text-primary mb-2">{member.role}</p>
                <p className="text-sm text-muted-foreground">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to work with us?</h2>
          <p className="text-lg opacity-90 mb-6">Let's discuss how we can help you achieve your goals.</p>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/contact">
              Get in Touch
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default About;
