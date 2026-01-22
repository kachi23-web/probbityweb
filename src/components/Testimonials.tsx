import React, { useState } from 'react';
import SectionBadge from '@/components/SectionBadge';
import { Button } from '@/components/ui/button';
import { ArrowRight, ArrowLeft, Star } from 'lucide-react';
// import avatar1 from '@/assets/avatar-1.jpg';
// import avatar2 from '@/assets/avatar-2.jpg';
// import avatar3 from '@/assets/avatar-3.jpg';

const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
     {
    name: "Marcus Okafor",
    role: "Senior Backend Engineer",
    company: "Fintech Startup",
    rating: 5,
    content: "The training program completely transformed my career. I went from frontend development to building scalable backend systems. Their mentorship approach and real-world projects gave me the confidence to architect production systems handling millions of transactions.",
    avatar1: "home/testimonial-1.png",
    category: "Training Success"
  },
  {
    name: "Amara Nduka",
    role: "CTO",
    company: "E-commerce Platform",
    rating: 5,
    content: "They built our entire SaaS platform from MVP to production. Their engineering expertise and systematic approach to scalable architecture helped us grow from 100 to 50,000 users without major rewrites. The long-term partnership has been invaluable.",
    avatar2: "home/testimonial-3.jpg",
    category: "Development Success"
  },
  {
    name: "David Chen",
    role: "Founder",
    company: "AI Startup",
    rating: 5,
    content: "Their AI automation consulting transformed our operations. They designed and deployed machine learning systems that reduced our processing time by 80%. The technical depth and delivery focus exceeded our expectations completely.",
    avatar3: "home/testimonial-2.jpg",
    category: "Consulting Success"
  },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-24 bg-secondary/10">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <div>
            <SectionBadge>Testimonials</SectionBadge>
            <h2 className="section-title mt-6">
              Testimonials: Trusted
              <br />
              by Our Clients
            </h2>
          </div>
          <div className="flex flex-col justify-end gap-4">
            <p className="content-muted-foreground text-lg">
               See how we've helped developers advance their careers and companies build scalable systems through our proven expertise..
            </p>
            <div>
              <Button variant="default" className="group">
                All Testimonials
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>

        {/* Testimonials Content */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Rating Card */}
          <div className="bg-primary rounded-3xl p-8 text-center flex flex-col justify-center">
            <div className="text-6xl font-bold text-primary-foreground mb-2">4.9</div>
            <div className="flex justify-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-accent text-accent" />
              ))}
            </div>
            <p className="text-accent font-medium mb-4">(40+ Reviews)</p>
            <p className="text-primary-foreground/90 mb-6">
              Customer experiences
              <br />
              that speak for them selves
            </p>
            <div className="flex justify-center -space-x-3">
              <img
                src={"home/testimonial-1.png"}
                alt="Customer"
                className="w-10 h-10 rounded-full border-2 border-primary"
              />
              <img
                src={"home/testimonial-2.jpg"}
                alt="Customer"
                className="w-10 h-10 rounded-full border-2 border-primary"
              />
              <img
                src={"home/testimonial-3.jpg"}
                alt="Customer"
                className="w-10 h-10 rounded-full border-2 border-primary"
              />
              <div className="w-10 h-10 rounded-full bg-accent border-2 border-primary flex items-center justify-center text-accent-foreground text-sm font-bold">
                +
              </div>
            </div>
          </div>

          {/* Testimonial Card */}
          <div className="lg:col-span-2 bg-card rounded-3xl p-8 shadow-md border border-border">
            <div className="flex gap-1 mb-4">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-accent text-accent" />
              ))}
              <span className="ml-2 font-semibold text-foreground">
                {testimonials[currentIndex].rating}.0
              </span>
            </div>
            
            <p className="text-muted-foreground text-lg mb-8 min-h-[120px]">
              {testimonials[currentIndex].content}
            </p>

            <div className="flex items-center justify-between">
              <div>
                <p className="font-bold text-foreground text-lg">
                  {testimonials[currentIndex].name}
                </p>
                <p className="text-muted-foreground">
                  {testimonials[currentIndex].role}
                </p>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={prevTestimonial}
                  className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground hover:bg-primary/90 transition-colors"
                >
                  <ArrowLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextTestimonial}
                  className="w-12 h-12 rounded-full bg-accent flex items-center justify-center text-accent-foreground hover:bg-accent/90 transition-colors"
                >
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
