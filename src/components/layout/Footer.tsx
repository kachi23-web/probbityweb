import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Phone, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const footerLinks = {
  services: [
    { href: "/services#marketing", label: "Digital Marketing" },
    { href: "/services#branding", label: "Brand Development" },
    { href: "/services#seo", label: "SEO & Analytics" },
  ],
  company: [
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact" },
    { href: "/services", label: "Services" },
  ],
};

const socialLinks = [
  { href: "#", icon: Facebook, label: "Facebook" },
  { href: "#", icon: Twitter, label: "Twitter" },
  { href: "#", icon: Instagram, label: "Instagram" },
  { href: "#", icon: Linkedin, label: "LinkedIn" },
];

export function Footer() {
  return (
    <footer className="gradient-hero border-t border-brand-purple/20">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/img/probbity-logo-2.png"
                alt="Digital Marketing Agency"
                width={36}
                height={36}
                className="object-contain"
                priority
              />      
              <span className="text-xl font-bold text-white font-heading">Digital Marketing</span>
            </Link>
            <p className="text-sm text-white/60 max-w-xs">
              Empowering your success with digital expertise. Creative campaigns that drive real results.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4 pt-2">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-brand-purple flex items-center justify-center transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-4 w-4 text-white" />
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-white">Services</h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-brand-purple transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-white">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-brand-purple transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-white">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2 text-sm text-white/60">
                <Mail className="h-4 w-4 text-brand-purple" />
                <span>[email]@agency.com</span>
              </li>
              <li className="flex items-center space-x-2 text-sm text-white/60">
                <Phone className="h-4 w-4 text-brand-purple" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start space-x-2 text-sm text-white/60">
                <MapPin className="h-4 w-4 text-brand-purple mt-0.5" />
                <span>123 Business Ave, City, State 12345</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-white/50">
            © {new Date().getFullYear()} Digital Marketing Agency. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link href="#" className="text-sm text-white/50 hover:text-brand-purple transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm text-white/50 hover:text-brand-purple transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
