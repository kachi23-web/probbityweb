"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full bg-brand-purple-deep/95 backdrop-blur-xl border-b border-brand-purple/20">
      <div className="container flex h-16 items-center justify-between">
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

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-brand-purple",
                pathname === link.href
                  ? "text-brand-purple"
                  : "text-white/80"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <Button className="bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-full px-6" size="sm" asChild>
            <Link href="/contact">Pricing</Link>
          </Button>
          <Button className="gradient-primary text-white rounded-full px-6 hover:glow-primary transition-all duration-300" size="sm" asChild>
            <Link href="/contact">Get A Quote</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-white"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t border-brand-purple/20 bg-brand-purple-deep">
          <nav className="container py-4 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-brand-purple py-2",
                  pathname === link.href
                    ? "text-brand-purple"
                    : "text-white/80"
                )}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex flex-col space-y-2 pt-4 border-t border-brand-purple/20">
              <Button className="bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-full" asChild>
                <Link href="/contact" onClick={() => setIsOpen(false)}>Pricing</Link>
              </Button>
              <Button className="gradient-primary text-white rounded-full hover:glow-primary transition-all duration-300" asChild>
                <Link href="/contact" onClick={() => setIsOpen(false)}>Get A Quote</Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
