import SectionBadge from "./SectionBadge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const skills = [
  { name: "Software Development & Engineering", percentage: 95 },
  { name: "System Architecture & Design", percentage: 90 },
  { name: "Technical Training & Mentorship", percentage: 85 },
];

const stats = [
  { value: "50+", label: "Successful Projects" },
  // { value: "200+", label: "Expert Team" },
  { value: "50+", label: "Happy Customers" },
  { value: "5+", label: "Years of Experience" },
];

const About = () => {
  return (
    <section id="about-us" className="py-20 bg-cream">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <SectionBadge>About Us</SectionBadge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mt-4">
            Empowering Your Success<br />with Digital Expertise
          </h2>
        </div>
 
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Left - Images with HIRE US Badge */}
          <div className="relative order-2 lg:order-1">
            {/* Top Image */}
            <div className="bg-muted rounded-3xl h-48 sm:h-56 overflow-hidden mb-4">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=500&h=300&fit=crop" 
                alt="Team collaboration"
                className="w-80% h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>


            {/* HIRE US Badge */}

            
              {/* <svg width="150" height="150" viewBox="0 0 120 120">
                  {/* <!-- Top filled semi-circle --> */}
                  {/* <path
                    d="M20 60
                      A40 40 0 0 1 100 60
                      L100 60
                      L20 60 Z"
                    fill="#F3F3F3"
                     stroke="#330f3dff"
                    strokeWidth="2"
                  />         
              </svg> */} 



            {/* HIRE US Badge - Professional SVG Version */}
            <div className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-10">
              <div className="w-20 h-20 sm:w-28 sm:h-28 hover:scale-105 transition-transform duration-300 cursor-pointer">
                <svg
                  width="100%"
                  height="100%"
                  viewBox="0 0 140 140"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-label="Hire Us Badge"
                  className="drop-shadow-lg"
                >
                  {/* Outer scalloped ring */}
                  <defs>
                    <path
                      id="text-circle"
                      d="M 70,70m -52,0a 52,52 0 1,1 104,0a 52,52 0 1,1 -104,0"
                    />
                  </defs>
                  
                  {/* Scalloped background */}
                  <circle
                    cx="70"
                    cy="70"
                    r="64"
                    fill="#330f3dff"
                    stroke="#330f3dff"
                    strokeWidth="6"
                    strokeDasharray="4 4"
                  />
                  
                  {/* Inner solid ring */}
                  <circle cx="70" cy="70" r="52" fill="#330f3dff" />
                  
                  {/* Circular text */}
                  <text
                    fill="#E9F5EE"
                    fontSize="11"
                    fontWeight="600"
                    letterSpacing="2"
                    className="animate-spin uppercase"
                    style={{ animationDuration: '20s', transformOrigin: '70px 70px' }}
                  >
                    <textPath href="#text-circle" startOffset="0%">
                      HIRE US • HIRE US • HIRE US • HIRE US •
                    </textPath>
                  </text>
                  
                  {/* Center lime circle */}
                  <circle cx="70" cy="70" r="22" fill="#ce32daff" />
                  
                  {/* Arrow icon */}
                  <path
                    d="M64 70h12m0 0-4-4m4 4-4 4"
                    stroke="#330f3dff"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
              


            {/* </div> */}
            {/* Bottom Image */}
            <div className="bg-muted rounded-3xl h-56 sm:h-64 overflow-hidden relative">
              <img 
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=500&h=400&fit=crop" 
                alt="Strategy session"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
              {/* Dark overlay for contrast */}
              <div className="absolute inset-0 bg-black/20"></div>
            


          {/* Right - Content */}
          <div className="space-y-6 sm:space-y-8 order-1 lg:order-2">
            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
              We are a team of experienced software engineers and technical mentors dedicated to building scalable systems and developing exceptional talent. With deep expertise in modern technologies and a proven track record of delivery, we create solutions that drive real business outcomes for developers, startups, and enterprises.
            </p>

            {/* Progress Bars */}
            <div className="space-y-6 sm:space-y-8">
              {skills.map((skill) => (
                <div key={skill.name} className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-foreground font-medium text-sm sm:text-base">{skill.name}</span>
                    <span className="text-foreground font-bold text-sm sm:text-base">{skill.percentage}%</span>
                  </div>
                  <div className="relative">
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-primary rounded-full animate-progress transition-all duration-2000 ease-out"
                        style={{ width: `${skill.percentage}%` }}
                      />
                    </div>
                    {/* Circular indicator at the end */}
                    <div 
                      className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-accent rounded-full border-2 border-background shadow-sm transition-all duration-2000 ease-out"
                      style={{ left: `calc(${skill.percentage}% - 8px)` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* About Us Button */}
            <div className="pt-4">
              <Button variant="lime" size="lg" className="rounded-full">
                About Us
                <ArrowRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 mt-12 sm:mt-16 pt-12 sm:pt-16 border-t border-border">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="flex items-center justify-center gap-1 sm:gap-2">
                <span className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-foreground">{stat.value}</span>
                <span className="text-accent text-lg sm:text-2xl">✦</span>
              </div>
              <p className="text-muted-foreground mt-1 sm:mt-2 text-xs sm:text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
      </div>
    </section>
  );
};

export default About;