import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import privateCoachingImg from "@/assets/private-coaching.jpg";
import expressServicesImg from "@/assets/express-services.jpg";
import blueprintsImg from "@/assets/blueprints.jpg";

const ServicesSection = () => {
  return (
    <section className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
          It's time to <span className="bg-gradient-to-r from-purple-500 via-blue-500 to-teal-500 bg-clip-text text-transparent">work smarter.</span>
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card className="hover:shadow-xl transition-shadow">
            <CardContent className="p-0">
              <div className="aspect-square overflow-hidden">
                <img 
                  src={privateCoachingImg} 
                  alt="Private Coaching" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent mb-3">PRIVATE COACHING</h3>
                <p className="text-foreground mb-4">
                  Your rocket fuel for your research – Private Coaching helps you speed up every step of the research process and submit with confidence.
                </p>
                <Button className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-bold">
                  CHAT WITH A COACH
                </Button>
              </div>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-xl transition-shadow">
            <CardContent className="p-0">
              <div className="aspect-square overflow-hidden">
                <img 
                  src={expressServicesImg} 
                  alt="Express Services" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold bg-gradient-to-r from-blue-500 to-teal-500 bg-clip-text text-transparent mb-3">EXPRESS SERVICES</h3>
                <p className="text-foreground mb-4">
                  Focus your time and energy on analysis and writing while we handle our language-related aspects of your research project.
                </p>
                <Button className="w-full bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 text-white font-bold">
                  GET A QUOTE
                </Button>
              </div>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-xl transition-shadow">
            <CardContent className="p-0">
              <div className="aspect-square overflow-hidden">
                <img 
                  src={blueprintsImg} 
                  alt="Blueprints" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold bg-gradient-to-r from-teal-500 to-orange-500 bg-clip-text text-transparent mb-3">BLUEPRINTS™</h3>
                <p className="text-foreground mb-4">
                  Kickstart your research with our plug-and-play Blueprints™ covering topic ideation, proposal writing, literature review and methodology.
                </p>
                <Button className="w-full bg-gradient-to-r from-teal-500 to-orange-500 hover:from-teal-600 hover:to-orange-600 text-white font-bold">
                  GET A BLUEPRINT™
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
