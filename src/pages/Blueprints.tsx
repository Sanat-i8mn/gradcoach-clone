import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Star, Search, FileText, BookOpen, FlaskConical } from "lucide-react";
import { Helmet } from "react-helmet-async";

const Blueprints = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Research Blueprints™ | Step-by-Step Academic Research Guides</title>
        <meta name="description" content="Proven research blueprints and step-by-step roadmaps for academic success. Learn how to find your research topic, write proposals, literature reviews, and design methodology. Trusted by 10,000+ successful students globally." />
        <meta name="keywords" content="research blueprints, research methodology guide, dissertation roadmap, thesis planning, literature review guide, research proposal template, academic research courses" />
      </Helmet>
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Finish your research faster with<br />
            our <span className="bg-gradient-to-r from-purple-500 via-blue-500 to-teal-500 bg-clip-text text-transparent">tried & trusted</span> Blueprints™
          </h1>
          <p className="text-lg mb-12">
            Step-by-step roadmaps proven by <strong>10,000+ successful students globally</strong>
          </p>
        </div>
      </section>

      {/* Blueprints List */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="space-y-4">
            <Button className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-bold py-6 px-8 text-lg w-full flex items-center justify-center gap-2">
              <Search className="w-6 h-6" />
              FIND YOUR RESEARCH TOPIC
            </Button>
            
            <Button className="bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 text-white font-bold py-6 px-8 text-lg w-full flex items-center justify-center gap-2">
              <FileText className="w-6 h-6" />
              WRITE YOUR PROPOSAL
            </Button>
            
            <Button className="bg-gradient-to-r from-teal-500 to-orange-500 hover:from-teal-600 hover:to-orange-600 text-white font-bold py-6 px-8 text-lg w-full flex items-center justify-center gap-2">
              <BookOpen className="w-6 h-6" />
              WRITE YOUR LITERATURE REVIEW
            </Button>
            
            <Button className="bg-gradient-to-r from-orange-500 to-purple-500 hover:from-orange-600 hover:to-purple-600 text-white font-bold py-6 px-8 text-lg w-full flex items-center justify-center gap-2">
              <FlaskConical className="w-6 h-6" />
              DESIGN YOUR METHODOLOGY
            </Button>
          </div>
        </div>
      </section>

      {/* Trustpilot Section */}
      <section className="py-12 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-4 flex-wrap mb-6">
            <span className="font-bold text-lg">Excellent</span>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-green-600 text-green-600" />
              ))}
            </div>
            <span className="text-sm">4,688 reviews on</span>
            <span className="font-semibold text-green-600">★ Trustpilot</span>
          </div>
          <div className="flex items-center justify-center gap-4">
            <img src="/placeholder.svg" alt="Coaches" className="w-32 h-8 object-cover rounded" />
            <span className="font-bold">10,000+ success stories</span>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blueprints;
