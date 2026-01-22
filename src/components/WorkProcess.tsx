import React from 'react';
// import SectionBadge from '@/components/SectionBadge';
import SectionBadge from "./SectionBadge";



const WorkProcess: React.FC = () => {
  const steps = [
   {
         number: "01",
            title: "Understand & Analyze",
            description: "We analyze your requirements, understand the problem domain, and define technical specifications.",
        },
        {
            number: "02",
            title: "Design & Architect",
            description: "Our team designs scalable system architecture and creates detailed technical blueprints to ensure reliability & performance.",
        },
        {
            number: "03",
            title: "Build & Deploy",
            description: "We develop iteratively with continuous testing, then deploy and scale your solution using robust CI/CD pipelines & performance monitoring.",
        },
  ];

  return (
    <section id="process" className="py-24  bg-cream">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <div>
            <SectionBadge>Our Work Process</SectionBadge>
            <h2 className="section-title mt-6">
             Systematic Approach to<br />Technical Excellence
            </h2>
          </div>
          <div className="flex items-end">
            <p className="text-muted-foreground text-lg">
              Our proven software development methodology ensures reliable delivery and scalable solutions through systematic problem analysis, thoughtful system design, and iterative development with rigorous testing.
        
            </p>
          </div>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl overflow-hidden shadow-md border border-border relative group hover:shadow-lg transition-shadow"
            >
              {/* Background Number */}
              <div className="absolute top-4 right-4 text-8xl font-bold text-secondary/80 select-none">
                {step.number}
              </div>

              {/* Content */}
              <div className="p-8 relative z-10">
                <h3 className="text-xl font-bold text-foreground mb-4">
                  {step.title}
                </h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>

              {/* Footer */}
              <div
                className="px-6 py-4 flex justify-between items-center mt-8"
                style={{
                  background: `linear-gradient(135deg, hsl(285 88% 17%) 0%, hsl(285 70% 22%) 100%)`,
                  backgroundImage: `repeating-linear-gradient(
                    -45deg,
                    transparent,
                    transparent 8px,
                    hsl(285 88% 20%) 8px,
                    hsl(285 88% 20%) 16px
                  ), linear-gradient(135deg, hsl(285 88% 17%) 0%, hsl(285 70% 22%) 100%)`,
                }}
              >
                <span className="text-primary-foreground font-semibold uppercase tracking-wider text-sm">
                  Step
                </span>
                <span className="text-accent font-bold text-xl">{step.number}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};




export default WorkProcess;
