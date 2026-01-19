import { Facebook, Twitter, Instagram, Linkedin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* CTA Section */}
      <div className="container mx-auto px-4 lg:px-8 py-12 sm:py-16">
        <div className="bg-forest-light rounded-2xl p-6 sm:p-8 lg:p-12 flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8">
          <div className="text-center lg:text-left">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-2">
              Ready to Build Your Next Solution?
            </h3>
            <p className="text-primary-foreground/80 text-sm sm:text-base">
              Let's discuss how we can help you develop scalable software and train your team.
            </p>
          </div>
          <Link to="/contact">
            <Button variant="lime" size="lg" className="w-full sm:w-auto">
              Talk to a Solutions Engineer
              <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 lg:px-8 py-8 sm:py-12 border-t border-forest-light">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1 text-center sm:text-left">
            <Link to="/" className="flex items-center gap-2 mb-4 sm:mb-6 justify-center sm:justify-start">
            <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center">
              <img src="/img/probbity-logo-3.png" alt="" />
              </div>
              <span className="text-lg sm:text-xl font-bold">Probbity Tech</span>
            </Link>
            <p className="text-primary-foreground/70 mb-4 sm:mb-6 text-sm sm:text-base">
              Building scalable software solutions and training technical talent. Proven expertise in engineering and system architecture.
            </p>
            <div className="flex gap-3 sm:gap-4 justify-center sm:justify-start">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-forest-light flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
                >
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center sm:text-left">
            <h4 className="font-bold text-base sm:text-lg mb-4 sm:mb-6">Quick Links</h4>
            <ul className="space-y-2 sm:space-y-3">
              {["About Us", "Services", "Projects", "Blog", "Contact"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-primary-foreground/70 hover:text-accent transition-colors text-sm sm:text-base">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="text-center sm:text-left">
            <h4 className="font-bold text-base sm:text-lg mb-4 sm:mb-6">Services</h4>
            <ul className="space-y-2 sm:space-y-3">
              {["Backend Development", "Frontend Engineering", "AI & Automation", "Cloud & DevOps", "Training Programs"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-primary-foreground/70 hover:text-accent transition-colors text-sm sm:text-base">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="text-center sm:text-left">
            <h4 className="font-bold text-base sm:text-lg mb-4 sm:mb-6">Newsletter</h4>
            <p className="text-primary-foreground/70 mb-4 text-sm sm:text-base">
              Subscribe to get the latest tips and insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-3 sm:px-4 py-2 rounded-full bg-forest-light text-primary-foreground placeholder:text-primary-foreground/50 border border-forest-light focus:border-accent focus:outline-none text-sm"
              />
              <Button variant="lime" size="icon" className="rounded-full mx-auto sm:mx-0">
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-forest-light">
        <div className="container mx-auto px-4 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-primary-foreground/70 text-sm">
            © {new Date().getFullYear()} Probbity Tech. All rights reserved.
          </p>

          <div className="flex gap-6 text-sm">
            <a href="#" className="text-primary-foreground/70 hover:text-accent transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-primary-foreground/70 hover:text-accent transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
