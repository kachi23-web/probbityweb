import SectionLabel from "./SectionLabel";

const steps = [
  {
    number: "01",
    title: "Understand & Analyze",
    description: "We analyze your requirements, understand the problem domain, and define technical specifications.",
  },
  {
    number: "02",
    title: "Design & Architect",
    description: "Our team designs scalable system architecture and creates detailed technical blueprints.",
  },
  {
    number: "03",
    title: "Build & Deploy",
    description: "We develop iteratively with continuous testing, then deploy and scale your solution.",
  },
];

const WorkProcess = () => {
  return (
    <section className="py-20 bg-cream">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <SectionLabel text="Our Software Development Methodology" />
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mt-4">
              Systematic Approach to<br />Technical Excellence
            </h2>
          </div>
          <div className="lg:pt-12">
            <p className="text-muted-foreground text-lg">
              Our proven software development methodology ensures reliable delivery and scalable solutions through systematic problem analysis, thoughtful system design, and iterative development with rigorous testing.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="bg-background rounded-2xl p-4 sm:p-6 relative overflow-hidden border border-border hover:border-accent transition-colors group"
            >
              {/* Background number */}
              <span className="absolute -right-1 sm:-right-2 -top-2 sm:-top-4 text-6xl sm:text-8xl font-extrabold text-muted/50 select-none">
                {step.number}
              </span>
              
              <div className="relative z-10">
                <h3 className="font-bold text-lg sm:text-xl mb-2 sm:mb-3 text-foreground">{step.title}</h3>
                <p className="text-muted-foreground text-xs sm:text-sm mb-6 sm:mb-8">{step.description}</p>
              </div>

              {/* Bottom bar */}
              <div className="absolute bottom-0 left-0 right-0 bg-primary py-2 sm:py-3 px-4 sm:px-6 flex justify-between items-center">
                <span className="text-primary-foreground font-semibold text-xs sm:text-sm">STEP</span>
                <span className="text-accent font-bold text-sm sm:text-base">{step.number}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkProcess;
