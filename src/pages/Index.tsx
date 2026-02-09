import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ServicesMarquee from "@/components/ServicesMarquee";
import About from "@/components/About";
import WhyChooseUs from "@/components/WhyChooseUs";
import WorkProcess from "@/components/WorkProcess";
import Testimonials from "@/components/Testimonials";
// import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import StructuredData from "@/components/StructuredData";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Probbity Tech - Software Development Company in Nigeria | Custom Web & Mobile Apps"
        description="Leading software development company in Nigeria specializing in custom web application development, mobile app development, and business website solutions. Expert developers for startups and enterprises."
        keywords="website development company in Nigeria, custom web application development, mobile app development company, business website developers, software development company for startups, web development Awka, enterprise software development, SaaS development, MVP development"
      />
      <StructuredData type="organization" />
      <StructuredData type="website" />
      <StructuredData type="service" />
      <TopBar />
      <Header />
      <Hero />
      <ServicesMarquee />
      {/* <About /> */}
      <WhyChooseUs />
      <ServicesMarquee />
      <WorkProcess />
      <ServicesMarquee />
      <Testimonials />
      {/* <Pricing /> */}
      <ServicesMarquee />
      <Footer />
    </div>
  );
};

export default Index;
