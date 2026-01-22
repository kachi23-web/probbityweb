import SectionLabel from "./SectionLabel";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft, Star } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    name: "Marcus Okafor",
    role: "Senior Backend Engineer",
    company: "Fintech Startup",
    rating: 5,
    text: "The training program completely transformed my career. I went from frontend development to building scalable backend systems. Their mentorship approach and real-world projects gave me the confidence to architect production systems handling millions of transactions.",
    avatar: "home/testimonial-1.png",
    category: "Training Success"
  },
  {
    name: "Amara Nduka",
    role: "CTO",
    company: "E-commerce Platform",
    rating: 5,
    text: "They built our entire SaaS platform from MVP to production. Their engineering expertise and systematic approach to scalable architecture helped us grow from 100 to 50,000 users without major rewrites. The long-term partnership has been invaluable.",
    avatar: "home/testimonial-3.jpg",
    category: "Development Success"
  },
  {
    name: "David Chen",
    role: "Founder",
    company: "AI Startup",
    rating: 5,
    text: "Their AI automation consulting transformed our operations. They designed and deployed machine learning systems that reduced our processing time by 80%. The technical depth and delivery focus exceeded our expectations completely.",
    avatar: "home/testimonial-2.jpg",
    category: "Consulting Success"
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  return (
    <section className="py-16 sm:py-20">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Top Section - Header */}
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-start mb-12 sm:mb-16">
          {/* Left - Section Label and Title */}
          <div>
            <SectionLabel text="Testimonials" />
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground mt-4">
              Testimonials: Trusted<br />by Our Clients
            </h2>
          </div>

          {/* Right - Description and Button */}
          <div className="space-y-6">
            <p className="text-muted-foreground text-base sm:text-lg">
              See how we've helped developers advance their careers and companies build scalable systems through our proven expertise.
            </p>
            <Button variant="forest" size="lg" className="rounded-full">
              All Testimonials
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Bottom Section - Rating Card and Testimonial */}
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-start">
          {/* Left - Rating Card */}
          <div className="bg-primary rounded-3xl p-8 sm:p-10 text-center text-primary-foreground max-w-sm">
            <div className="text-6xl sm:text-7xl font-extrabold mb-4">4.9</div>
            
            <div className="flex justify-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 sm:w-7 sm:h-7 fill-accent text-accent" />
              ))}
            </div>
            
            <p className="text-primary-foreground/80 text-sm sm:text-base mb-6">
              (40+ Reviews)
            </p>
            
            <p className="text-primary-foreground text-lg sm:text-xl font-medium mb-6">
              Customer experiences<br />that speak for themselves
            </p>
            
            <div className="flex justify-center items-center -space-x-3">
              {testimonials.slice(0, 3).map((t, i) => (
                <img
                  key={i}
                  src={t.avatar}
                  alt={t.name}
                  className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border-3 border-primary object-cover"
                />
              ))}
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-accent flex items-center justify-center text-accent-foreground font-bold text-lg border-3 border-primary">
                +
              </div>
            </div>
          </div>

          {/* Right - Testimonial Card */}
          <div className="bg-background rounded-3xl p-8 sm:p-10 border border-border shadow-sm">
            <div className="flex items-center gap-2 mb-6">
              {[...Array(current.rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 sm:w-6 sm:h-6 fill-accent text-accent" />
              ))}
              <span className="ml-2 font-bold text-lg">{current.rating}.0</span>
            </div>
            
            <p className="text-foreground text-base sm:text-lg mb-8 leading-relaxed">
              {current.text}
            </p>

            <div className="flex items-center justify-between">
              <div>
                <p className="font-bold text-foreground text-lg">{current.name}</p>
                <p className="text-muted-foreground text-sm">{current.role}, {current.company}</p>
              </div>
              
              <div className="flex gap-3">
                <button
                  onClick={prevTestimonial}
                  className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-accent text-accent-foreground flex items-center justify-center hover:bg-accent/80 transition-colors"
                >
                  <ArrowLeft className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>
                <button
                  onClick={nextTestimonial}
                  className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:bg-primary/80 transition-colors"
                >
                  <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
