import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import LonelyJourneySection from "@/components/LonelyJourneySection";
import ServicesSection from "@/components/ServicesSection";
import TrustSection from "@/components/TrustSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import GetUnstuckSection from "@/components/GetUnstuckSection";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Professional Academic Research Coaching Services | GradCoach</title>
        <meta name="description" content="Expert academic research coaching services for dissertations, thesis, and research projects. Get personalized guidance, express services, and proven blueprints to complete your research faster with confidence." />
        <meta name="keywords" content="academic research coaching, dissertation help, thesis guidance, research methodology, academic writing services, PhD coaching, research support" />
      </Helmet>
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
