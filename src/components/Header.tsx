import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { scheduleConsultation } from "@/services/calendarService";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    // { label: "Projects", href: "/#projects" },
    { label: "About Us", href: "/about" },
    // { label: "Pricing", href: "/#pricing" },
    { label: "Contact", href: "/contact" },
    { label: "Academy", href: "/academycomingsoon" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return location.pathname === "/";
    return location.pathname.startsWith(href.split("#")[0]);
  };

  return (
    <header className="fixed top-11 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            

              <div className="h-10 w-10 rounded-lg bg-accent flex items-center justify-center p-1 ">

              <img 
                src="probbity-logo.png" 
                alt="App Logo" 
                className="h-8 w-8 object-contain"
              /> </div>
               <h4 className="text-xl md:text-2xl font-bold text-gradient mb-0 mt-6 md:mb-4">
                           Probbity Tech
            </h4>
          
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className={`text-sm font-medium transition-colors ${
                  isActive(item.href) 
                    ? "text-foreground" 
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          

          <div className="hidden lg:block">
            <Button variant="hero" onClick={() => scheduleConsultation()}>Let's Talk</Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  className={`text-sm font-medium transition-colors ${
                    isActive(item.href) 
                      ? "text-foreground" 
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Button variant="hero" className="mt-2 w-full" onClick={() => scheduleConsultation()}>Let's Talk</Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
