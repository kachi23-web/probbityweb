const services = [
  "Backend Development",
  "Frontend Engineering",
  "AI & Automation",
  "Cloud & DevOps",
  "Training Programs",
  "Digital Transformation",
  "Technical Consulting",
];

const ServicesMarquee = () => {
  return (
    <div className="bg-primary py-3 sm:py-4 overflow-hidden">
      <div className="flex animate-marquee">
        {[...services, ...services].map((service, index) => (
          <div key={index} className="flex items-center shrink-0">
            <span className="text-primary-foreground text-base sm:text-lg font-semibold whitespace-nowrap px-4 sm:px-8">
              {service}
            </span>
            <span className="text-accent text-lg sm:text-2xl">✳</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesMarquee;
