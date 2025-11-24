import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Star, Search, FileText, BookOpen, FlaskConical } from "lucide-react";

const Blueprints = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Finish your research faster with<br />
            our <span className="text-primary">tried & trusted</span> Blueprints™
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
            <Button className="bg-primary hover:bg-brand-orange-hover text-white font-bold py-6 px-8 text-lg w-full flex items-center justify-center gap-2">
              <Search className="w-6 h-6" />
              FIND YOUR RESEARCH TOPIC
            </Button>
            
            <Button className="bg-primary hover:bg-brand-orange-hover text-white font-bold py-6 px-8 text-lg w-full flex items-center justify-center gap-2">
              <FileText className="w-6 h-6" />
              WRITE YOUR PROPOSAL
            </Button>
            
            <Button className="bg-primary hover:bg-brand-orange-hover text-white font-bold py-6 px-8 text-lg w-full flex items-center justify-center gap-2">
              <BookOpen className="w-6 h-6" />
              WRITE YOUR LITERATURE REVIEW
            </Button>
            
            <Button className="bg-primary hover:bg-brand-orange-hover text-white font-bold py-6 px-8 text-lg w-full flex items-center justify-center gap-2">
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
