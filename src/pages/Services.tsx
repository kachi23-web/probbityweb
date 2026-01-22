import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServicesMarquee from "@/components/ServicesMarquee";
import SectionBadge from "@/components/SectionBadge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  // Training & Career Development
  {
    id: "backend-fullstack",
    title: "Backend/Fullstack Engineering",
    description: "Master server-side development with Node.js, Python, and cloud technologies. Build scalable APIs and systems.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=300&fit=crop",
    featured: false,
    category: "training"
  },
  {
    id: "frontend-backend-transition",
    title: "Frontend to Backend Transition",
    description: "Bridge the gap from frontend to full-stack development. Learn backend architecture and database design.",
    image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=400&h=300&fit=crop",
    featured: true,
    category: "training"
  },
  {
    id: "ai-automation",
    title: "AI & Automation",
    description: "Implement machine learning solutions and automation workflows. Build intelligent systems that scale.",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=300&fit=crop",
    featured: false,
    category: "training"
  },
  {
    id: "corporate-training",
    title: "Corporate Training",
    description: "Upskill your development teams with customized training programs. Accelerate technical growth.",
    image: "home/team-5.jpg",
    featured: false,
    category: "training"
  },
  // Software Development
  {
    id: "mvps",
    title: "MVPs",
    description: "Rapid prototyping and MVP development to validate your product ideas. Get to market faster.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
    featured: true,
    category: "development"
  },
  {
    id: "web-mobile-apps",
    title: "Web & Mobile Apps",
    description: "Full-stack web applications and cross-platform mobile apps. Modern, responsive, and scalable.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop",
    featured: false,
    category: "development"
  },
  {
    id: "saas-platforms",
    title: "SaaS Platforms",
    description: "End-to-end SaaS development with subscription management, multi-tenancy, and enterprise features.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
    featured: false,
    category: "development"
  },
  {
    id: "internal-systems",
    title: "Internal Systems",
    description: "Custom business applications and workflow automation. Streamline operations with tailored solutions.",
    image: "home/team-4.jpg",
    featured: true,
    category: "development"
  },
  // Consulting & Digital Transformation
  {
    id: "architecture-audits",
    title: "Architecture & Audits",
    description: "System architecture reviews and technical audits. Optimize performance and scalability.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop",
    featured: false,
    category: "consulting"
  },
  {
    id: "cloud-devops",
    title: "Cloud & DevOps",
    description: "Cloud migration and DevOps implementation. Automate deployments and improve system reliability.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop",
    featured: false,
    category: "consulting"
  },
  {
    id: "ai-strategy",
    title: "AI Strategy",
    description: "Strategic AI implementation roadmaps. Identify opportunities and build intelligent solutions.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop",
    featured: true,
    category: "consulting"
  },
  {
    id: "process-digitization",
    title: "Process Digitization",
    description: "Transform manual processes into automated digital workflows. Increase efficiency and reduce errors.",
    image: "home/service-4.jpg",
    featured: false,
    category: "consulting"
  }
];

const expertiseItems = [
  { number: "01", title: "Full-Stack Development", description: "End-to-end application development with modern frameworks and scalable architecture." },
  { number: "02", title: "Cloud & DevOps Engineering", description: "Infrastructure automation, CI/CD pipelines, and cloud-native solutions for reliable deployments." },
  { number: "03", title: "AI & Machine Learning", description: "Intelligent systems development with ML models, automation, and data-driven solutions." },
  { number: "04", title: "System Architecture & Design", description: "Scalable system design, microservices architecture, and performance optimization strategies." },
  { number: "05", title: "Training & Mentorship", description: "Technical skill development programs and career transition support for developers." },
  { number: "06", title: "Digital Transformation", description: "Process automation, legacy system modernization, and strategic technology implementation." },
];

const benefits = [
  "Accelerated technical skill development",
  "Production-ready software solutions",
  "Scalable system architecture",
  "Reduced development time and costs",
  "Expert mentorship and guidance",
  "Long-term technical partnerships",
];

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <TopBar />
      <Header />
      
      {/* Hero Section */}
      <section className="pt-40 pb-12 sm:pb-16 bg-cream">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground mb-4">
            Services
          </h1>
          <div className="flex items-center justify-center gap-2 text-muted-foreground text-sm sm:text-base">
            <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
            <span>/</span>
            <span className="text-foreground">Services</span>
          </div>
        </div>
      </section>

      <ServicesMarquee />

      {/* Services Grid Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <SectionBadge>Our Services</SectionBadge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mt-4">
              Build Your Tech Future<br className="hidden sm:block" />with Our Proven Expertise
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-sm sm:text-base">
              Comprehensive software solutions for developers, startups, and enterprises. From career development to scalable system architecture.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {services.map((service, index) => (
              <div
                key={service.id}
                className={`rounded-2xl overflow-hidden border transition-all hover:shadow-lg group ${
                  service.featured 
                    ? "bg-accent border-accent" 
                    : "bg-background border-border hover:border-accent"
                }`}
              >
                {/* Image or Content First based on featured */}
                {service.featured ? (
                  <>
                    <div className="p-4 sm:p-6">
                      <h3 className="text-lg sm:text-xl font-bold text-accent-foreground mb-2 sm:mb-3">
                        {service.title}
                      </h3>
                      <p className="text-accent-foreground/80 text-xs sm:text-sm mb-3 sm:mb-4">
                        {service.description}
                      </p>
                      <Link 
                        to={`/services/${service.id}`}
                        className="inline-flex items-center gap-2 text-accent-foreground font-semibold hover:gap-3 transition-all text-sm"
                      >
                        Learn more <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                    <div className="h-40 sm:h-48 overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                      />
                    </div>
                  </>
                ) : (
                  <>
                    <div className="h-40 sm:h-48 overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                      />
                    </div>
                    <div className="p-4 sm:p-6">
                      <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2 sm:mb-3">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground text-xs sm:text-sm mb-3 sm:mb-4">
                        {service.description}
                      </p>
                      <Link 
                        to={`/services/${service.id}`}
                        className="inline-flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all text-sm"
                      >
                        Learn more <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <ServicesMarquee />

      {/* Expertise Section */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-foreground mb-4">
              Our Expertise In Software Development
            </h2>
            <p className="text-muted-foreground max-w-3xl text-sm sm:text-base">
              We provide comprehensive software development solutions that help businesses build scalable systems, train technical teams, and achieve digital transformation through strategic planning and expert execution.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {expertiseItems.map((item) => (
              <div
                key={item.number}
                className="bg-background rounded-2xl p-4 sm:p-6 border border-border hover:border-accent transition-colors"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold mb-3 sm:mb-4 text-sm sm:text-base">
                  {item.number}
                </div>
                <h3 className="font-bold text-base sm:text-lg text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-xs sm:text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
                Services Benefits
              </h2>
              <p className="text-muted-foreground mb-8">
                Partner with us to unlock the full potential of software development. Our comprehensive approach ensures scalable solutions and sustainable technical growth for your business. Proven expertise delivering results for developers and enterprises.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-accent-foreground" />
                    </div>
                    <span className="text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="h-64 rounded-2xl overflow-hidden">
                  <img 
                    src="home/service-1.jpg"
                    alt="Team collaboration"
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                <div className="h-40 rounded-2xl overflow-hidden">
                  <img 
                    src="home/service-2.jpg"
                    alt="Strategy session"
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  />
                </div>
              </div>
              <div className="pt-8">
                <div className="h-72 rounded-2xl overflow-hidden">
                  <img 
                    src="home/service-3.jpg"
                    alt="Software development"
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-primary-foreground mb-4">
            Ready to Build Your Next Software Solution?
          </h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-6 sm:mb-8 text-sm sm:text-base">
            Let's discuss how our technical expertise can help you achieve your development goals and deliver scalable solutions for your business.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="lime" size="lg" className="w-full sm:w-auto">
              Start Your Tech Journey
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="outline" size="lg" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary w-full sm:w-auto">
              Explore Training Programs
            </Button>
          </div>
        </div>
      </section>

      <ServicesMarquee />
      <Footer />
    </div>
  );
};

export default Services;
