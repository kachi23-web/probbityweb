import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, BookOpen, Users, Award, Code, Zap, Target, Home } from "lucide-react";
import { Link } from "react-router-dom";

const AcademyComingSoon = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  // Set academy launch date (45 days from now)
  const launchDate = new Date();
  launchDate.setDate(launchDate.getDate() + 45);

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
        <div className="absolute top-10 left-20 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-32 right-16 w-80 h-80 bg-lime/8 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/3 left-1/4 w-48 h-48 bg-accent/5 rounded-full blur-2xl animate-pulse delay-500"></div>
        
        {/* Floating Code Elements */}
        <div className="absolute top-20 right-1/4 text-accent/20 text-6xl font-mono animate-bounce delay-300">{"{ }"}</div>
        <div className="absolute bottom-40 left-1/3 text-accent/15 text-4xl font-mono animate-bounce delay-700">{"</>"}</div>
        <div className="absolute top-1/2 right-20 text-accent/10 text-5xl font-mono animate-bounce delay-1000">{"[ ]"}</div>
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
          <div className="w-24 h-24 mx-auto mb-4 rounded-3xl bg-gradient-to-br from-accent to-lime flex items-center justify-center shadow-2xl">
            <BookOpen className="w-12 h-12 text-accent-foreground" />
          </div>
          <h1 className="text-2xl font-bold text-primary-foreground">Probbity Academy</h1>
          <p className="text-primary-foreground/60 text-sm">Learn. Build. Excel.</p>
        </div>

        {/* Main Heading */}
        <div className="mb-12 max-w-5xl">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-primary-foreground mb-6 leading-tight">
            Master the Art of
            <br />
            <span className="bg-gradient-to-r from-accent via-lime to-accent bg-clip-text text-transparent animate-pulse">
              Software Development
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-primary-foreground/80 max-w-3xl mx-auto">
            Join thousands of developers transforming their careers through hands-on training, 
            real-world projects, and expert mentorship. Your journey to technical excellence starts here.
          </p>
        </div>

        {/* Countdown Timer */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-primary-foreground mb-6">
            Academy Opens In:
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {[
              { label: "Days", value: timeLeft.days },
              { label: "Hours", value: timeLeft.hours },
              { label: "Minutes", value: timeLeft.minutes },
              { label: "Seconds", value: timeLeft.seconds },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-primary-foreground/20 hover:border-accent/50 transition-colors"
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

        {/* Course Preview */}
        <div className="mb-12 w-full max-w-6xl">
          <h3 className="text-2xl font-bold text-primary-foreground mb-8">
            What You'll Learn
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Code,
                title: "Full-Stack Development",
                description: "Master React, Node.js, databases, and modern deployment strategies",
                level: "Beginner to Advanced"
              },
              {
                icon: Zap,
                title: "AI & Automation",
                description: "Build intelligent applications with machine learning and AI integration",
                level: "Intermediate"
              },
              {
                icon: Target,
                title: "System Architecture",
                description: "Design scalable, maintainable systems that handle real-world complexity",
                level: "Advanced"
              },
              {
                icon: Users,
                title: "Team Collaboration",
                description: "Learn Git workflows, code reviews, and agile development practices",
                level: "All Levels"
              },
              {
                icon: Award,
                title: "Industry Certification",
                description: "Earn recognized credentials that boost your career prospects",
                level: "Certification"
              },
              {
                icon: BookOpen,
                title: "Mentorship Program",
                description: "Get personalized guidance from senior engineers and tech leads",
                level: "Premium"
              },
            ].map((course, index) => (
              <div
                key={index}
                className="bg-primary-foreground/5 backdrop-blur-sm rounded-xl p-6 border border-primary-foreground/10 hover:border-accent/30 transition-all duration-300 hover:scale-105"
              >
                <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center mb-4">
                  <course.icon className="w-6 h-6 text-accent" />
                </div>
                <h4 className="text-lg font-semibold text-primary-foreground mb-2">
                  {course.title}
                </h4>
                <p className="text-primary-foreground/70 text-sm mb-3">
                  {course.description}
                </p>
                <span className="inline-block px-3 py-1 rounded-full bg-accent/20 text-accent text-xs font-medium">
                  {course.level}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Email Signup */}
        <div className="mb-12 w-full max-w-lg">
          <div className="mb-6">
            <Mail className="w-8 h-8 text-accent mx-auto mb-3" />
            <h3 className="text-xl font-semibold text-primary-foreground mb-2">
              Get Early Access
            </h3>
            <p className="text-primary-foreground/70">
              Join our waitlist for exclusive early bird pricing and bonus content.
            </p>
          </div>

          {!isSubscribed ? (
            <form onSubmit={handleEmailSubmit} className="space-y-4">
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-primary-foreground/50" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email for early access"
                  className="w-full pl-12 pr-4 py-4 rounded-lg bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:border-accent focus:outline-none text-center"
                  required
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-accent to-lime text-accent-foreground hover:from-accent/90 hover:to-lime/90 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Reserve My Spot
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </form>
          ) : (
            <div className="bg-accent/20 border border-accent/30 rounded-lg p-6 text-accent">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Award className="w-6 h-6" />
                <span className="font-semibold text-lg">Welcome to the Academy!</span>
              </div>
              <p className="text-sm text-accent/80">
                You'll receive exclusive updates and early access when we launch.
              </p>
            </div>
          )}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl w-full mb-12">
          {[
            { number: "50+", label: "Expert Instructors" },
            { number: "100+", label: "Hands-on Projects" },
            { number: "24/7", label: "Community Support" },
            { number: "95%", label: "Job Placement Rate" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">
                {stat.number}
              </div>
              <div className="text-primary-foreground/70 text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Early Bird Offer */}
        <div className="bg-gradient-to-r from-accent/20 to-lime/20 backdrop-blur-sm rounded-2xl p-8 border border-accent/30 max-w-2xl w-full">
          <h3 className="text-2xl font-bold text-primary-foreground mb-4">
            🎯 Early Bird Special
          </h3>
          <p className="text-primary-foreground/80 mb-4">
            First 100 students get <span className="text-accent font-bold">50% off</span> lifetime access 
            plus exclusive 1-on-1 mentorship sessions.
          </p>
          <div className="flex items-center justify-center gap-4 text-sm text-primary-foreground/60">
            <span>✓ Lifetime Access</span>
            <span>✓ Personal Mentor</span>
            <span>✓ Job Guarantee</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AcademyComingSoon;