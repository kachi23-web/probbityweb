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

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
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
