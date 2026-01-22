import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Bell, Rocket, Home } from "lucide-react";
import { Link } from "react-router-dom";

const ComingSoon = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  // Set launch date (30 days from now)
  const launchDate = new Date();
  launchDate.setDate(launchDate.getDate() + 30);

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = launchDate.getTime() - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });

      if (distance < 0) {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail("");
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary via-primary/95 to-forest-dark relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-lime/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center">
        {/* Back to Home Link */}
        <div className="absolute top-8 left-8">
          <Link to="/">
            <Button variant="ghost" className="text-primary-foreground/70 hover:text-primary-foreground hover:bg-primary-foreground/10">
              <Home className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
        </div>
        {/* Logo/Brand */}
        <div className="mb-8">
          <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-accent flex items-center justify-center">
            <Rocket className="w-10 h-10 text-accent-foreground" />
          </div>
          <h1 className="text-2xl font-bold text-primary-foreground">Probbity Tech</h1>
        </div>

        {/* Main Heading */}
        <div className="mb-12 max-w-4xl">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-primary-foreground mb-6 leading-tight">
            Something Amazing
            <br />
            <span className="bg-gradient-to-r from-accent to-lime bg-clip-text text-transparent">
              Is Coming Soon
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-primary-foreground/80 max-w-2xl mx-auto">
            We're building the future of software development and technical training. 
            Get ready for an experience that will transform how you learn and build.
          </p>
        </div>

        {/* Countdown Timer */}
        <div className="mb-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {[
              { label: "Days", value: timeLeft.days },
              { label: "Hours", value: timeLeft.hours },
              { label: "Minutes", value: timeLeft.minutes },
              { label: "Seconds", value: timeLeft.seconds },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-primary-foreground/20"
              >
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-accent mb-2">
                  {item.value.toString().padStart(2, "0")}
                </div>
                <div className="text-sm sm:text-base text-primary-foreground/70 uppercase tracking-wider">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Email Signup */}
        <div className="mb-12 w-full max-w-md">
          <div className="mb-6">
            <Bell className="w-8 h-8 text-accent mx-auto mb-3" />
            <h3 className="text-xl font-semibold text-primary-foreground mb-2">
              Be the First to Know
            </h3>
            <p className="text-primary-foreground/70">
              Join our waitlist and get exclusive early access when we launch.
            </p>
          </div>

          {!isSubscribed ? (
            <form onSubmit={handleEmailSubmit} className="flex flex-col sm:flex-row gap-3">
              <div className="flex-1 relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-primary-foreground/50" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full pl-12 pr-4 py-3 rounded-lg bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:border-accent focus:outline-none"
                  required
                />
              </div>
              <Button
                type="submit"
                className="bg-accent text-accent-foreground hover:bg-accent/90 px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
              >
                Notify Me
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </form>
          ) : (
            <div className="bg-accent/20 border border-accent/30 rounded-lg p-4 text-accent">
              <div className="flex items-center justify-center gap-2">
                <Bell className="w-5 h-5" />
                <span className="font-semibold">You're on the list!</span>
              </div>
              <p className="text-sm mt-1 text-accent/80">
                We'll notify you as soon as we launch.
              </p>
            </div>
          )}
        </div>

        {/* Features Preview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl w-full">
          {[
            {
              title: "Expert Training",
              description: "Learn from industry professionals with real-world experience",
            },
            {
              title: "Scalable Solutions",
              description: "Build software that grows with your business needs",
            },
            {
              title: "Modern Tech Stack",
              description: "Work with cutting-edge technologies and best practices",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-primary-foreground/5 backdrop-blur-sm rounded-xl p-6 border border-primary-foreground/10 hover:border-accent/30 transition-colors"
            >
              <h4 className="text-lg font-semibold text-primary-foreground mb-2">
                {feature.title}
              </h4>
              <p className="text-primary-foreground/70 text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Social Proof */}
        <div className="mt-16 text-center">
          <p className="text-primary-foreground/60 text-sm mb-4">
            Join <span className="text-accent font-semibold">500+</span> developers already on our waitlist
          </p>
          <div className="flex justify-center space-x-2">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="w-8 h-8 rounded-full bg-primary-foreground/20 border-2 border-primary-foreground/30"
                style={{ marginLeft: i > 0 ? "-8px" : "0" }}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;