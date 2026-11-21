import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  BookOpen,
  Brain,
  Briefcase,
  Check,
  Code2,
  GitPullRequest,
  Loader2,
  Mail,
  Repeat,
  Rocket,
  Users,
} from "lucide-react";
import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionBadge from "@/components/SectionBadge";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useToast } from "@/hooks/use-toast";
import { sendContactEmail } from "@/services/emailService";

const tracks = [
  {
    icon: Code2,
    title: "Backend & Fullstack Engineering",
    level: "Beginner → Advanced",
    description:
      "Go from writing scripts to shipping production APIs and full web apps.",
    topics: ["Node.js & Python", "Databases & data modelling", "REST & auth", "Deploying to the cloud"],
  },
  {
    icon: Repeat,
    title: "Frontend to Backend Transition",
    level: "Intermediate",
    description:
      "Already comfortable with the frontend? Learn what happens behind the API.",
    topics: ["Server architecture", "SQL & NoSQL design", "Testing & debugging", "Performance basics"],
  },
  {
    icon: Brain,
    title: "AI & Automation",
    level: "Intermediate",
    description:
      "Build practical AI features and automations that real businesses use.",
    topics: ["Working with LLM APIs", "Workflow automation", "Data pipelines", "Shipping AI features"],
  },
  {
    icon: Briefcase,
    title: "Corporate Training",
    level: "Teams",
    description:
      "Tailored programmes that bring your engineering team up to speed, fast.",
    topics: ["Custom curriculum", "Live workshops", "Code-review coaching", "Progress reporting"],
  },
];

const steps = [
  {
    icon: BookOpen,
    title: "Learn the fundamentals",
    description: "Short, focused lessons that cover what you actually need, not everything at once.",
  },
  {
    icon: Code2,
    title: "Build real projects",
    description: "Every module ends with a project modelled on work we deliver for clients.",
  },
  {
    icon: GitPullRequest,
    title: "Get reviewed by engineers",
    description: "Submit your code and get line-by-line feedback from working engineers.",
  },
  {
    icon: Rocket,
    title: "Ship your portfolio",
    description: "Finish with deployed projects you can show employers and clients.",
  },
];

const included = [
  "Project-based curriculum",
  "Code reviews from senior engineers",
  "Small cohorts and live sessions",
  "Private learner community",
  "Career and portfolio guidance",
  "Certificate of completion",
];

const faqs = [
  {
    q: "When does the Academy open?",
    a: "We're finalising the first cohort now. Everyone on the waitlist hears about the launch date first, before it's announced anywhere else.",
  },
  {
    q: "Who is it for?",
    a: "Beginners who want a structured path into software engineering, frontend developers moving to backend or fullstack, and companies that want to upskill their teams.",
  },
  {
    q: "Is it online?",
    a: "Yes. Lessons and live sessions run online, so you can join from anywhere.",
  },
  {
    q: "How much will it cost?",
    a: "Pricing will be announced at launch. Waitlist members get early-bird pricing before enrolment opens to the public.",
  },
];

const WaitlistForm = ({ variant = "light" }: { variant?: "light" | "dark" }) => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "done">("idle");
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus("sending");
    try {
      await sendContactEmail({
        name: "Academy waitlist",
        email,
        subject: "Academy waitlist sign-up",
        message: `${email} joined the Probbity Academy waitlist.`,
      });
      setStatus("done");
      setEmail("");
    } catch {
      setStatus("idle");
      toast({
        title: "Something went wrong",
        description: "We couldn't add you to the waitlist. Please try again.",
        variant: "destructive",
      });
    }
  };

  const dark = variant === "dark";

  if (status === "done") {
    return (
      <div
        className={`flex items-start gap-3 rounded-2xl p-4 sm:p-5 ${
          dark ? "bg-primary-foreground/10 text-primary-foreground" : "bg-accent/30 text-foreground"
        }`}
        role="status"
      >
        <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center shrink-0">
          <Check className="w-4 h-4 text-accent-foreground" />
        </div>
        <div>
          <p className="font-semibold">You're on the list.</p>
          <p className={`text-sm ${dark ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
            We'll email you as soon as enrolment opens.
          </p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 w-full">
      <label htmlFor={`waitlist-${variant}`} className="sr-only">
        Email address
      </label>
      <div className="relative flex-1">
        <Mail
          className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 ${
            dark ? "text-primary-foreground/50" : "text-muted-foreground"
          }`}
        />
        <input
          id={`waitlist-${variant}`}
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          className={`w-full h-12 pl-12 pr-4 rounded-full border text-sm focus:outline-none focus:ring-2 focus:ring-accent ${
            dark
              ? "bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50"
              : "bg-background border-border text-foreground placeholder:text-muted-foreground"
          }`}
        />
      </div>
      <Button
        type="submit"
        variant={dark ? "lime" : "default"}
        size="lg"
        disabled={status === "sending"}
        className="h-12 rounded-full px-6 shrink-0"
      >
        {status === "sending" ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" /> Joining…
          </>
        ) : (
          <>
            Join the waitlist <ArrowRight className="w-4 h-4" />
          </>
        )}
      </Button>
    </form>
  );
};

const AcademyComingSoon = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Probbity Academy | Software Engineering Training - Coming Soon"
        description="Probbity Academy: project-based training in backend, fullstack, and AI engineering with code reviews from working engineers. Join the waitlist for early access."
        keywords="software engineering training, backend developer course, fullstack bootcamp, AI automation course, corporate developer training, coding academy Nigeria"
      />
      <TopBar />
      <Header />

      {/* Hero */}
      <section className="pt-40 pb-16 sm:pb-24 bg-cream">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-primary-foreground text-xs sm:text-sm font-semibold mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-accent opacity-75 animate-ping" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
                </span>
                Probbity Academy · Enrolment opening soon
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-foreground leading-[1.1] mb-6 text-balance">
                Learn software engineering by{" "}
                <span className="gradient-text">building real things.</span>
              </h1>
              <p className="text-muted-foreground text-base sm:text-lg max-w-xl mb-8">
                Project-based training from the engineers behind Probbity Tech. Write production-grade
                code, get it reviewed, and leave with a portfolio that proves what you can do.
              </p>
              <div className="max-w-lg">
                <WaitlistForm />
                <p className="text-xs text-muted-foreground mt-3">
                  Early access and early-bird pricing for waitlist members. No spam.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-3xl overflow-hidden aspect-[4/3] shadow-xl">
                <img
                  src="home/team-5.jpg"
                  alt="Engineers learning together"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-4 sm:-left-8 bg-background rounded-2xl shadow-lg border border-border p-4 flex items-center gap-3 max-w-[260px]">
                <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center shrink-0">
                  <GitPullRequest className="w-5 h-5 text-accent-foreground" />
                </div>
                <div>
                  <p className="text-sm font-bold text-foreground">Real code reviews</p>
                  <p className="text-xs text-muted-foreground">From working engineers</p>
                </div>
              </div>
              <div className="hidden sm:flex absolute -top-5 -right-4 bg-primary text-primary-foreground rounded-2xl shadow-lg p-4 items-center gap-3">
                <Users className="w-5 h-5 text-accent" />
                <p className="text-sm font-semibold">Small, live cohorts</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tracks */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <SectionBadge>Learning Tracks</SectionBadge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mt-4">
              Choose your path
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-sm sm:text-base">
              Four tracks at launch, each built around the skills we hire for and the work we ship.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
            {tracks.map((track) => (
              <div
                key={track.title}
                className="group rounded-2xl border border-border bg-background p-6 sm:p-8 hover:border-accent hover:shadow-lg transition-all"
              >
                <div className="flex items-start justify-between gap-4 mb-5">
                  <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center group-hover:bg-accent transition-colors">
                    <track.icon className="w-6 h-6 text-primary-foreground group-hover:text-accent-foreground transition-colors" />
                  </div>
                  <span className="px-3 py-1 rounded-full bg-muted text-primary text-xs font-semibold">
                    {track.level}
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2">{track.title}</h3>
                <p className="text-muted-foreground text-sm mb-5">{track.description}</p>
                <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
                  {track.topics.map((topic) => (
                    <li key={topic} className="flex items-center gap-2 text-sm text-foreground">
                      <Check className="w-4 h-4 text-accent shrink-0" />
                      {topic}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-2xl mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-primary-foreground mb-4">
              How the Academy works
            </h2>
            <p className="text-primary-foreground/70 text-sm sm:text-base">
              Less watching, more building. Every track follows the same loop.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {steps.map((step, i) => (
              <div
                key={step.title}
                className="rounded-2xl bg-primary-foreground/5 border border-primary-foreground/10 p-6"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="w-11 h-11 rounded-full bg-accent flex items-center justify-center">
                    <step.icon className="w-5 h-5 text-accent-foreground" />
                  </div>
                  <span className="text-3xl font-extrabold text-primary-foreground/15">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="font-bold text-lg text-primary-foreground mb-2">{step.title}</h3>
                <p className="text-primary-foreground/70 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="grid grid-cols-2 gap-4 order-2 lg:order-1">
              <div className="h-56 sm:h-72 rounded-2xl overflow-hidden">
                <img src="home/service-1.jpg" alt="Live session" className="w-full h-full object-cover" />
              </div>
              <div className="h-56 sm:h-72 rounded-2xl overflow-hidden mt-8">
                <img src="home/service-3.jpg" alt="Project work" className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <SectionBadge>What's Included</SectionBadge>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-foreground mt-4 mb-4">
                Everything you need to go from learning to shipping
              </h2>
              <p className="text-muted-foreground mb-8 text-sm sm:text-base">
                We teach the way we work: in small teams, with real feedback, on projects that
                look like the ones you'll do on the job.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {included.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-accent-foreground" />
                    </div>
                    <span className="text-foreground text-sm sm:text-base">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_1.5fr] gap-10 lg:gap-16">
            <div>
              <SectionBadge>FAQ</SectionBadge>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-foreground mt-4 mb-4">
                Questions, answered
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base">
                Something else on your mind?{" "}
                <Link to="/contact" className="text-primary font-semibold underline underline-offset-4">
                  Get in touch
                </Link>
                .
              </p>
            </div>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq) => (
                <AccordionItem key={faq.q} value={faq.q} className="border-border">
                  <AccordionTrigger className="text-left text-base font-semibold text-foreground hover:no-underline">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">{faq.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="rounded-3xl bg-primary px-6 py-12 sm:px-12 sm:py-16 text-center relative overflow-hidden">
            <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-accent/20 blur-3xl" />
            <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-accent/10 blur-3xl" />
            <div className="relative">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-primary-foreground mb-4">
                Be first in line for the first cohort
              </h2>
              <p className="text-primary-foreground/70 max-w-xl mx-auto mb-8 text-sm sm:text-base">
                Join the waitlist for launch news, early access, and early-bird pricing.
              </p>
              <div className="max-w-lg mx-auto">
                <WaitlistForm variant="dark" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AcademyComingSoon;
