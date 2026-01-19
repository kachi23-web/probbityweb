import SectionLabel from "./SectionLabel";
import { Users, FileCheck, Award, BarChart3 } from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Certified Engineers",
    description: "Our team consists of certified software engineers with deep expertise in modern development practices and scalable system architecture.",
    variant: "forest" as const,
  },
  {
    icon: FileCheck,
    title: "Production-Ready Solutions",
    description: "We deliver robust, tested, and scalable software solutions that perform reliably in production environments.",
    variant: "lime" as const,
  },
  {
    icon: Award,
    title: "Industry Recognition",
    description: "Recognized for technical excellence in software development, system architecture, and developer training programs.",
    variant: "forest" as const,
  },
  {
    icon: BarChart3,
    title: "Transparent Development Process",
    description: "Get complete visibility into development progress with detailed technical documentation and regular milestone reviews.",
    variant: "lime" as const,
  },
];

const WhyChooseUs = () => {
  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <SectionLabel text="Why Choose Us" />
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mt-4">
            Why Our Clients Trust Our<br />Technical Expertise
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left - Images */}
          <div className="grid grid-cols-2 gap-4 order-2 lg:order-1">
            <div className="bg-muted rounded-2xl h-32 sm:h-48 overflow-hidden">
              <img 
                src="home/team-1.jpg" 
                alt="Team discussion"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
            <div className="bg-muted rounded-2xl h-32 sm:h-48 overflow-hidden">
              <img 
                src="home/team-2.jpg" 
                alt="Meeting"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
            <div className="relative">
              <div className="text-accent text-3xl sm:text-5xl absolute -top-2 sm:-top-4 left-2 sm:left-4">✦</div>
              <div className="text-accent text-xl sm:text-3xl absolute top-4 sm:top-8 left-6 sm:left-12">✦</div>
            </div>
            <div className="bg-accent rounded-2xl h-24 sm:h-32 flex items-center justify-center">
              <div className="w-12 h-12 sm:w-20 sm:h-20">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <path d="M50 10 Q80 30 70 60 Q60 90 30 70 Q10 50 30 30 Q40 20 50 10" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="3" 
                        className="text-forest"/>
                </svg>
              </div>
            </div>
          </div>

          {/* Right - Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 order-1 lg:order-2">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className={`rounded-xl p-4 sm:p-6 ${
                  feature.variant === "forest" 
                    ? "bg-primary text-primary-foreground" 
                    : "bg-accent text-accent-foreground"
                }`}
              >
                <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center mb-3 sm:mb-4 ${
                  feature.variant === "forest" 
                    ? "bg-accent text-accent-foreground" 
                    : "bg-primary text-primary-foreground"
                }`}>
                  <feature.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <h3 className="font-bold text-base sm:text-lg mb-2">{feature.title}</h3>
                <p className={`text-xs sm:text-sm ${
                  feature.variant === "forest" 
                    ? "text-primary-foreground/80" 
                    : "text-accent-foreground/80"
                }`}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
