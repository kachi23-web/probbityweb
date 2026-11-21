import { Button } from "@/components/ui/button";
import { ArrowRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { scheduleConsultation } from "@/services/calendarService";
import Logo from "@/components/Logo";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Academy", href: "/academycomingsoon", badge: "Soon" },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu whenever the route changes
  useEffect(() => setMobileMenuOpen(false), [location.pathname]);

  const isActive = (href: string) => {
    if (href === "/") return location.pathname === "/";
    return location.pathname.startsWith(href.split("#")[0]);
  };

  return (
    <header
      className={cn(
        "fixed top-11 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b transition-shadow",
        scrolled || mobileMenuOpen ? "border-border shadow-sm" : "border-transparent",
      )}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-6">
          <Link to="/" aria-label="Probbity Tech home" className="shrink-0">
            <Logo size="md" />
          </Link>

          {/* Desktop navigation */}
          <nav className="hidden lg:flex items-center gap-1 rounded-full bg-muted/70 p-1.5">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                aria-current={isActive(item.href) ? "page" : undefined}
                className={cn(
                  "relative inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium transition-colors",
                  isActive(item.href)
                    ? "bg-background text-primary shadow-sm"
                    : "text-muted-foreground hover:text-primary",
                )}
              >
                {item.label}
                {item.badge && (
                  <span className="rounded-full bg-accent px-1.5 py-0.5 text-[10px] font-bold uppercase leading-none text-accent-foreground">
                    {item.badge}
                  </span>
                )}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:block shrink-0">
            <Button variant="hero" onClick={() => scheduleConsultation()}>
              Let's Talk <ArrowRight className="w-4 h-4" />
            </Button>
          </div>

          {/* Mobile menu toggle */}
          <button
            className="lg:hidden w-11 h-11 rounded-full flex items-center justify-center bg-muted text-primary"
            onClick={() => setMobileMenuOpen((o) => !o)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-border bg-background">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-1">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                aria-current={isActive(item.href) ? "page" : undefined}
                className={cn(
                  "flex items-center justify-between rounded-xl px-4 py-3 text-base font-medium transition-colors",
                  isActive(item.href)
                    ? "bg-muted text-primary"
                    : "text-foreground/80 hover:bg-muted hover:text-primary",
                )}
              >
                <span className="flex items-center gap-2">
                  {item.label}
                  {item.badge && (
                    <span className="rounded-full bg-accent px-1.5 py-0.5 text-[10px] font-bold uppercase leading-none text-accent-foreground">
                      {item.badge}
                    </span>
                  )}
                </span>
                <ArrowRight className="w-4 h-4 opacity-40" />
              </Link>
            ))}
            <Button variant="hero" className="mt-3 w-full" onClick={() => scheduleConsultation()}>
              Let's Talk <ArrowRight className="w-4 h-4" />
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
