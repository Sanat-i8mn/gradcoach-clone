import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Phone, Laptop, BookOpen } from "lucide-react";
import { Helmet } from "react-helmet-async";

const GetStarted = () => {
  const [selected, setSelected] = useState<string>("");

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Get Started with Academic Research Services | Choose Your Path</title>
        <meta name="description" content="Start your academic research journey with GradCoach. Choose from private coaching, express services, or research blueprints. Get personalized support tailored to your research needs and goals." />
        <meta name="keywords" content="academic research services, get started research help, dissertation services, thesis support, research coaching options, academic assistance" />
      </Helmet>
      <Navigation />
      
      {/* Main Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-8">
              What are you interested in?
            </h1>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Private Coaching */}
            <div 
              onClick={() => setSelected("coaching")}
              className={`cursor-pointer border-2 rounded-lg p-8 text-center transition-all ${
                selected === "coaching" ? "border-primary bg-muted" : "border-border hover:border-primary"
              }`}
            >
              <img 
                src="/placeholder.svg" 
                alt="Private Coaching" 
                className="w-full h-48 object-cover rounded-lg mb-6"
              />
              <div className="flex items-center justify-center gap-2 mb-2">
                <input 
                  type="radio" 
                  checked={selected === "coaching"}
                  onChange={() => setSelected("coaching")}
                  className="w-4 h-4"
                />
                <h3 className="text-xl font-bold">Private Coaching</h3>
              </div>
              <p className="text-sm text-muted-foreground">(hands-on support)</p>
            </div>

            {/* Done-For-You Services */}
            <div 
              onClick={() => setSelected("services")}
              className={`cursor-pointer border-2 rounded-lg p-8 text-center transition-all ${
                selected === "services" ? "border-primary bg-muted" : "border-border hover:border-primary"
              }`}
            >
              <img 
                src="/placeholder.svg" 
                alt="Done-For-You Services" 
                className="w-full h-48 object-cover rounded-lg mb-6"
              />
              <div className="flex items-center justify-center gap-2 mb-2">
                <input 
                  type="radio" 
                  checked={selected === "services"}
                  onChange={() => setSelected("services")}
                  className="w-4 h-4"
                />
                <h3 className="text-xl font-bold">Done-For-You Services</h3>
              </div>
              <p className="text-sm text-muted-foreground">(editing, coding, etc.)</p>
            </div>

            {/* Research Blueprints */}
            <div 
              onClick={() => setSelected("blueprints")}
              className={`cursor-pointer border-2 rounded-lg p-8 text-center transition-all ${
                selected === "blueprints" ? "border-primary bg-muted" : "border-border hover:border-primary"
              }`}
            >
              <img 
                src="/placeholder.svg" 
                alt="Research Blueprints" 
                className="w-full h-48 object-cover rounded-lg mb-6"
              />
              <div className="flex items-center justify-center gap-2 mb-2">
                <input 
                  type="radio" 
                  checked={selected === "blueprints"}
                  onChange={() => setSelected("blueprints")}
                  className="w-4 h-4"
                />
                <h3 className="text-xl font-bold">Research Blueprints™</h3>
              </div>
              <p className="text-sm text-muted-foreground">(mini courses)</p>
            </div>
          </div>

          <div className="text-center">
            <Button 
              className="bg-primary hover:bg-brand-orange-hover text-white font-bold py-4 px-12 text-lg"
              disabled={!selected}
            >
              Next →
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GetStarted;
