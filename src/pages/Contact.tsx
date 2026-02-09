import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServicesMarquee from "@/components/ServicesMarquee";
import SectionBadge from "@/components/SectionBadge";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Clock, Send, ArrowRight } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { sendContactEmail, type ContactFormData } from "@/services/emailService";

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    details: ["+ (234) 815-666-9858"],
  },
  {
    icon: Mail,
    title: "Email",
    details: ["hello@probbity.com", "support@probbity.com"],
  },
  {
    icon: MapPin,
    title: "Address",
    details: ["Ifite, Awka, Nigeria"],
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: ["Mon - Sat: 9:00 AM - 8:00 PM", " Sun: Closed"],
  },
];

const offices = [
  {
    city: "Awka ",
    country: "Nigeria",
    address: "Ifite, Awka",
    // zipCode: "NY 10001",
    phone: "+ (234) 815-666-9858",
    image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=400&h=300&fit=crop",
  },
  {
    city: "London",
    country: "United Kingdom",
    address: "45 Digital Avenue, Floor 3",
    zipCode: "EC2A 4BX",
    phone: "+44 20 7123 4567",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=400&h=300&fit=crop",
  },
  {
    city: "Singapore",
    country: "Singapore",
    address: "78 Innovation Hub, Tower A",
    zipCode: "018956",
    phone: "+65 6123 4567",
    image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=400&h=300&fit=crop",
  },
];

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast({
        title: "Missing fields",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Send email using the email service
      await sendContactEmail(formData as ContactFormData);
      
      toast({
        title: "Message sent successfully!",
        description: "Thank you for contacting us. We'll get back to you within 24 hours.",
      });
      
      // Reset form
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
      
    } catch (error) {
      console.error('Form submission error:', error);
      toast({
        title: "Failed to send message",
        description: "There was an error sending your message. Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Contact Probbity Tech - Get Your Custom Software Solution | Nigeria"
        description="Contact Probbity Tech for custom web development, mobile app development, and software solutions. Get a free consultation with our expert development team in Nigeria."
        keywords="contact software development company, web development inquiry, mobile app development quote, custom software consultation, software development Nigeria contact"
      />
      <TopBar />
      <Header />
      
      {/* Hero Section */}
      <section className="pt-40 pb-16 bg-cream">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground mb-4">
            Contact Us
          </h1>
          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
            <span>/</span>
            <span className="text-foreground">Contact</span>
          </div>
        </div>
      </section>

      <ServicesMarquee />

      {/* Contact Info Cards */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((item) => (
              <div
                key={item.title}
                className="bg-background border border-border rounded-2xl p-6 hover:border-accent transition-colors group"
              >
                <div className="w-14 h-14 rounded-full bg-accent text-accent-foreground flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-lg text-foreground mb-2">{item.title}</h3>
                {item.details.map((detail, idx) => (
                  <p key={idx} className="text-muted-foreground text-sm">{detail}</p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map Section */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <div className="bg-background rounded-2xl p-8 border border-border">
            <SectionBadge>Get In Touch</SectionBadge>
            <h2 className="text-3xl font-extrabold text-foreground mt-4 mb-2">
                Send Us a Message
              </h2>
              <p className="text-muted-foreground mb-8">
                Have a software project in mind? Let's discuss how we can help build your solution.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={handleChange}
                      className="rounded-xl"
                      maxLength={100}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="rounded-xl"
                      maxLength={255}
                      required
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+234 815-666-9858"
                      value={formData.phone}
                      onChange={handleChange}
                      className="rounded-xl"
                      maxLength={20}
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      placeholder="Project Inquiry"
                      value={formData.subject}
                      onChange={handleChange}
                      className="rounded-xl"
                      maxLength={200}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us about your project..."
                    value={formData.message}
                    onChange={handleChange}
                    className="rounded-xl min-h-[150px] resize-none"
                    maxLength={2000}
                    required
                  />
                </div>

                <Button 
                  type="submit" 
                  variant="hero" 
                  size="lg" 
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </Button>
              </form>
            </div>

            {/* Map / Image */}
            <div className="space-y-6">
              <div className="h-80 rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=400&fit=crop"
                  alt="Our office"
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="bg-primary rounded-2xl p-8 text-primary-foreground">
                <h3 className="text-2xl font-bold mb-4">Let's Build Together</h3>
                <p className="text-primary-foreground/80 mb-6">
                  Ready to develop your next software solution? Schedule a free technical consultation with our engineering team.
                </p>
                <Button variant="lime">
                  Book a Technical Consultation
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      {/* <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <SectionBadge text="Our Offices" />
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mt-4">
              Visit Our Global Offices
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              We have offices in key locations around the world to better serve our clients.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {offices.map((office) => (
              <div
                key={office.city}
                className="bg-background border border-border rounded-2xl overflow-hidden hover:border-accent transition-colors group"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={office.image}
                    alt={`${office.city} office`}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-1">{office.city}</h3>
                  <p className="text-accent text-sm font-medium mb-4">{office.country}</p>
                  
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-start gap-2">
                      <MapPin className="w-4 h-4 shrink-0 mt-0.5 text-accent" />
                      <span>{office.address}, {office.zipCode}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 shrink-0 text-accent" />
                      <span>{office.phone}</span>
                    </div>
                  </div>

                  <Button variant="outline" size="sm" className="mt-4 w-full">
                    View Location
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* FAQ CTA */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary-foreground mb-4">
            Need Technical Support?
          </h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
            Check out our technical resources or reach out directly to our engineering team. We're here to help you build better software.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button variant="lime" size="lg">
              Explore Our Resources
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="outline" size="lg" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              Let's Talk
            </Button>
          </div>
        </div>
      </section>

      <ServicesMarquee />
      <Footer />
    </div>
  );
};

export default Contact;
