import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionLabel from "@/components/SectionLabel";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <TopBar />
      <Header />
      
      {/* Hero Section */}
      <section className="pt-40 pb-12 sm:pb-16 bg-cream">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground mb-4">
            About Us
          </h1>
          <div className="flex items-center justify-center gap-2 text-muted-foreground text-sm sm:text-base">
            <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
            <span>/</span>
            <span className="text-foreground">About</span>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <SectionLabel text="About Our Company" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mt-4">
              Building Talent & Systems<br className="hidden sm:block" />That Scale Globally
            </h2>
            <p className="text-muted-foreground mt-4 max-w-3xl mx-auto text-sm sm:text-base">
              We are a team of experienced software engineers and technical mentors dedicated to building scalable systems and developing exceptional talent. With deep expertise in modern technologies and a proven track record of delivery, we create solutions that drive real business outcomes.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            {/* Left - Images */}
            <div className="grid grid-cols-2 gap-4 order-2 lg:order-1">
              <div className="space-y-4">
                <div className="bg-muted rounded-2xl h-48 sm:h-64 overflow-hidden">
                  <img 
                    src="home/team-1.jpg" 
                    alt="Team meeting"
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                <div className="bg-muted rounded-2xl h-32 sm:h-48 overflow-hidden">
                  <img 
                    src="home/team-3.jpg" 
                    alt="Team collaboration"
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  />
                </div>
              </div>
              <div className="pt-4 sm:pt-8">
                <div className="bg-muted rounded-2xl h-64 sm:h-80 overflow-hidden relative">
                  <img 
                    src="home/service-2.jpg" 
                    alt="Strategy session"
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  />
                </div>
              </div>
            </div>

            {/* Right - Content */}
            <div className="space-y-6 sm:space-y-8 order-1 lg:order-2">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4">Our Mission</h3>
                <p className="text-muted-foreground text-sm sm:text-base">
                  To empower developers and businesses with the technical skills and scalable software solutions needed to thrive in the digital age. We bridge the gap between learning and real-world application through hands-on training and expert development services.
                </p>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4">Our Approach</h3>
                <p className="text-muted-foreground text-sm sm:text-base">
                  We combine deep technical expertise with practical mentorship to deliver results that matter. Our systematic approach to software development and training ensures sustainable growth and long-term success for our clients and students.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="default" size="lg" className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                  Start Your Journey
                  <ArrowRight className="w-5 h-5" />
                </Button>
                <Button variant="outline" size="lg" className="w-full sm:w-auto border-2 border-primary bg-transparent text-primary hover:bg-primary hover:text-primary-foreground rounded-lg transition-all duration-300">
                  View Our Services
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;