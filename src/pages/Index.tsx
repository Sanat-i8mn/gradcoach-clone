import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import LonelyJourneySection from "@/components/LonelyJourneySection";
import ServicesSection from "@/components/ServicesSection";
import TrustSection from "@/components/TrustSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import GetUnstuckSection from "@/components/GetUnstuckSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <LonelyJourneySection />
      <ServicesSection />
      <TrustSection />
      <TestimonialsSection />
      <GetUnstuckSection />
      <Footer />
    </div>
  );
};

export default Index;
