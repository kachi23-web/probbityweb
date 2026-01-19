import SectionLabel from "./SectionLabel";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const plans = [
  {
    name: "TRAINING PROGRAMS",
    price: 299,
    featured: false,
    features: [
      "Backend/Fullstack Engineering",
      "Frontend to Backend transition",
      "Monthly progress assessments",
      "Technical mentorship support",
      "Real-world project portfolio",
      "Career guidance sessions",
      "Industry certification prep",
      "Job placement assistance",
    ],
  },
  {
    name: "DEVELOPMENT PROJECTS",
    price: 2499,
    featured: true,
    features: [
      "MVP development & launch",
      "Web & Mobile applications",
      "SaaS platform architecture",
      "Internal system integration",
      "Cloud deployment & DevOps",
      "Performance optimization",
      "Technical documentation",
      "Post-launch support & maintenance",
    ],
  },
  {
    name: "CONSULTING SERVICES",
    price: 4999,
    featured: false,
    features: [
      "Architecture audits & reviews",
      "Cloud & DevOps strategy",
      "AI implementation roadmap",
      "Process digitization planning",
      "Technical team training",
      "Scalability assessments",
      "Security & compliance review",
      "Long-term technical partnership",
    ],
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 bg-cream">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <SectionLabel text="Pricing" />
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mt-4">
            Software Solutions Pricing
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Transparent pricing for proven software development and training services. Delivered by experienced engineers.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl overflow-hidden ${
                plan.featured 
                  ? "bg-primary text-primary-foreground lg:scale-105 shadow-2xl" 
                  : "bg-background border border-border"
              }`}
            >
              <div className="p-4 sm:p-6 pb-3 sm:pb-4">
                <p className={`text-xs sm:text-sm font-medium mb-2 ${
                  plan.featured ? "text-primary-foreground/80" : "text-muted-foreground"
                }`}>
                  {plan.name}
                </p>
                <div className="flex items-baseline gap-1">
                  <span className={`text-3xl sm:text-5xl font-extrabold ${
                    plan.featured ? "text-primary-foreground" : "text-foreground"
                  }`}>
                    ${plan.price}
                  </span>
                  <span className={`text-xs sm:text-sm ${
                    plan.featured ? "text-primary-foreground/80" : "text-muted-foreground"
                  }`}>
                    {plan.name === "TRAINING PROGRAMS" ? "/ Month" : "/ Project"}
                  </span>
                </div>
              </div>

              <div className={`px-4 sm:px-6 py-2 sm:py-3 font-semibold text-xs sm:text-sm ${
                plan.featured 
                  ? "bg-accent text-accent-foreground" 
                  : "bg-accent text-accent-foreground"
              }`}>
                WHAT YOU'LL GET
              </div>

              <div className="p-4 sm:p-6 space-y-2 sm:space-y-3">
                {plan.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-2 sm:gap-3">
                    <Check className={`w-4 h-4 sm:w-5 sm:h-5 shrink-0 mt-0.5 ${
                      plan.featured ? "text-accent" : "text-accent"
                    }`} />
                    <span className={`text-xs sm:text-sm ${
                      plan.featured ? "text-primary-foreground/90" : "text-muted-foreground"
                    }`}>
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <div className="p-4 sm:p-6 pt-3 sm:pt-4">
                <Button 
                  variant={plan.featured ? "lime" : "forest"} 
                  className="w-full text-xs sm:text-sm"
                  size="lg"
                >
                  {plan.name === "TRAINING PROGRAMS" ? "Start Your Tech Journey" : 
                   plan.name === "DEVELOPMENT PROJECTS" ? "Build Your Product With Us" : 
                   "Talk to a Solutions Engineer"}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
