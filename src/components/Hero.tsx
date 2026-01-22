import { Button } from "@/components/ui/button";
import SectionBadge from "./SectionBadge";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="pt-40 pb-16 lg:pt-48 lg:pb-24 overflow-hidden bg-cream">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <SectionBadge>Build People, Software & Systems</SectionBadge>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground leading-tight">
              We Build Talent, Software, and{" "}
              <span className="text-primary">Digital Systems That Scale</span>
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-lg">
              Transform careers through hands-on training, build production-ready software, 
              and architect scalable systems that power modern businesses. Serving developers, startups, 
              and enterprises globally.
            </p>
            
            <div className="flex flex-col sm:flex-row flex-wrap items-center gap-4">
              <Button variant="hero" size="lg" className="w-full sm:w-auto">
                Start Your Tech Journey
                <ArrowRight className="w-5 h-5" />
              </Button>

              <Link to="/academycomingsoon">
              <Button variant="heroOutline" size="lg" className="w-full sm:w-auto">
                Explore Training Programs
              </Button></Link>
            </div>
          </div>

          {/* Right Content - Image Grid */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              {/* Main large image */}
              <div className="col-span-1 row-span-2">
                <div className="bg-muted rounded-3xl h-64 sm:h-80 overflow-hidden">
                  <img 
                    src="home/team-2.jpg" 
                    alt="Team collaboration"
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  />
                </div>
              </div>
              
              {/* Top right image */}
              <div className="bg-muted rounded-3xl h-28 sm:h-36 overflow-hidden">
                <img 
                  src="home/hero-1.jpg" 
                  alt="Professional woman"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
              
              {/* Bottom right image */}
              <div className="bg-muted rounded-3xl h-32 sm:h-40 overflow-hidden">
                <img 
                  src="home/hero-2.jpg" 
                  alt="Business man"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 w-16 h-16 sm:w-20 sm:h-20 bg-primary rounded-full flex items-center justify-center border-4 border-accent animate-pulse">
              <div className="text-center">
                <ArrowRight className="w-4 h-4 sm:w-6 sm:h-6 text-accent mx-auto" />
                <span className="text-[6px] sm:text-[8px] text-primary-foreground font-semibold">HIRE US</span>
              </div>
            </div>

            {/* Decorative stars */}
            <div className="absolute -bottom-2 sm:-bottom-4 right-8 sm:right-12 text-accent text-2xl sm:text-4xl">✦</div>
            <div className="absolute -bottom-4 sm:-bottom-8 right-2 sm:right-4 text-accent text-xl sm:text-2xl">✦</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
