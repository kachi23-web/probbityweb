import { useEffect } from "react";
import { Link } from "react-router-dom";
import { CheckCircle, Mail, Phone, ArrowRight, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";

const BookingConfirmation = () => {
  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-cream to-background flex items-center justify-center px-4 py-12">
      <SEO 
        title="Booking Confirmed - Probbity Tech"
        description="Thank you for booking your appointment with Probbity Tech. We'll be in touch shortly to confirm your consultation."
      />
      
      <div className="max-w-2xl w-full">
        {/* Success Icon */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-accent mb-6 animate-bounce">
            <CheckCircle className="w-12 h-12 text-accent-foreground" />
          </div>
          
          {/* Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground mb-4">
            ✅ Thank You for Booking!
          </h1>
          
          {/* Subheadline */}
          <p className="text-lg text-muted-foreground mb-8">
            We've received your appointment request and will be in touch shortly to confirm your consultation.
          </p>
        </div>

        {/* Confirmation Card */}
        <div className="bg-background border border-border rounded-2xl p-6 sm:p-8 mb-8 shadow-lg">
          <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
            <Calendar className="w-5 h-5 text-accent" />
            What Happens Next?
          </h2>
          
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center shrink-0 mt-0.5">
                <span className="text-accent font-bold text-sm">1</span>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Check Your Email</h3>
                <p className="text-sm text-muted-foreground">
                  You'll receive a confirmation message with all the details of your appointment.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center shrink-0 mt-0.5">
                <span className="text-accent font-bold text-sm">2</span>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">We'll Confirm Your Time</h3>
                <p className="text-sm text-muted-foreground">
                  Our team will reach out within 24 hours to confirm your preferred date and time.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center shrink-0 mt-0.5">
                <span className="text-accent font-bold text-sm">3</span>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Prepare for Your Consultation</h3>
                <p className="text-sm text-muted-foreground">
                  Think about your project goals, timeline, and any questions you'd like to discuss.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 mb-8">
          <h3 className="font-bold text-foreground mb-4">Need Immediate Assistance?</h3>
          <div className="space-y-3">
            <a 
              href="mailto:hello@probbity.com" 
              className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
            >
              <Mail className="w-5 h-5 text-accent" />
              <span className="text-sm">hello@probbity.com</span>
            </a>
            <a 
              href="tel:+2348156669858" 
              className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
            >
              <Phone className="w-5 h-5 text-accent" />
              <span className="text-sm">+234 815-666-9858</span>
            </a>
          </div>
        </div>

        {/* CTAs */}
        <div className="space-y-4">
          <h3 className="font-bold text-foreground text-center mb-4">
            While You Wait, Explore More
          </h3>
          
          <div className="grid sm:grid-cols-2 gap-4">
            <Link to="/services" className="block">
              <Button variant="default" size="lg" className="w-full">
                View Our Services
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            
            <Link to="/about" className="block">
              <Button variant="outline" size="lg" className="w-full">
                Learn About Us
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>

          <Link to="/" className="block">
            <Button variant="ghost" size="lg" className="w-full">
              Return to Homepage
            </Button>
          </Link>
        </div>

        {/* Footer Message */}
        <div className="text-center mt-12 pt-8 border-t border-border">
          <p className="text-muted-foreground text-sm mb-2">
            Thank you for choosing <span className="font-semibold text-foreground">Probbity Tech</span>
          </p>
          <p className="text-accent font-medium">
            We're excited to help you grow your online presence! 🚀
          </p>
        </div>
      </div>
    </div>
  );
};

export default BookingConfirmation;
