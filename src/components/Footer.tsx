import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const footerLinks = {
    services: [
      'Digital Marketing',
      'SEO Optimization',
      'Content Marketing',
      'Social Media',
    ],
    company: ['About Us', 'Our Team', 'Careers', 'Contact'],
    resources: ['Blog', 'Case Studies', 'Guides', 'FAQ'],
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* CTA Section */}
      <div className="container mx-auto px-6 py-16">
        <div className="bg-accent rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-accent-foreground mb-2">
              Ready to Grow Your Business?
            </h3>
            <p className="text-accent-foreground/80">
              Let's discuss how we can help you achieve your goals.
            </p>
          </div>
          <Button
            variant="default"
            size="lg"
            className="group whitespace-nowrap"
          >
            Get Started
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-6 py-12 border-t border-primary-foreground/10">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
              {/* <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center"> */}
                <Link to="/" className="flex items-center gap-2 mb-4 sm:mb-6 justify-center sm:justify-start">
                     <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center">
                      <img src="/img/probbity-logo-3.png" alt="" />
                     </div>
                        <span className="text-lg sm:text-xl font-bold">Probbity Tech</span>
                        </Link>
                        <p className="text-primary-foreground/70 mb-4 sm:mb-6 text-sm sm:text-base">
                        Building scalable software solutions and training technical talent. Proven expertise in engineering and system architecture.
                        </p>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/share/1FVKTDvEqd/"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/probbity?utm_source=qr&igsh=MTFvbHVsZGd5ZG50dw=="
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/probbity-tech"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
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

          

          {/* Company */}
          <div>
            <h4 className="font-bold text-lg mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-primary-foreground/70 hover:text-accent transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
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
        
        </div>
      </div>
      

      {/* Bottom Bar */}
      <div className="container mx-auto px-6 py-6 border-t border-primary-foreground/10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
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
