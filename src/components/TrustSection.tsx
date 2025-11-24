import { Handshake } from "lucide-react";
import { Star } from "lucide-react";

const TrustSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">
              Support you<br />can <span className="text-primary">trust.</span>
            </h2>
            
            <div className="flex justify-center md:justify-start">
              <Handshake className="w-48 h-48 text-foreground" strokeWidth={1} />
            </div>
          </div>
          
          <div className="bg-muted p-8 rounded-lg">
            <div className="space-y-6">
              <div>
                <h3 className="text-3xl font-bold text-primary mb-2">15 Million+</h3>
                <p className="text-foreground">Students who've enjoyed our <a href="#" className="text-primary">online lessons and courses</a></p>
              </div>
              
              <div>
                <h3 className="text-3xl font-bold text-primary mb-2">10,000+</h3>
                <p className="text-foreground">Clients we've worked with 1-on-1 (<a href="#" className="text-primary">private coaching</a>)</p>
              </div>
              
              <div>
                <h3 className="text-3xl font-bold text-primary mb-2">500+</h3>
                <p className="text-foreground">Universities that <a href="#" className="text-primary">use and trust our learning resources</a></p>
              </div>
              
              <div>
                <h3 className="text-3xl font-bold text-primary mb-2">4.9 Stars</h3>
                <p className="text-foreground">Average review score across Trustpilot, Google and Facebook</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center mb-2">
              <span className="font-bold mr-2">Excellent</span>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-green-600 text-green-600" />
                ))}
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-4">Based on 1,288 reviews</p>
            <div className="text-green-600 font-bold flex items-center">
              <Star className="w-4 h-4 fill-green-600 mr-1" />
              Trustpilot
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center mb-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-green-600 text-green-600" />
                ))}
              </div>
            </div>
            <p className="font-bold mb-2">Excellent templates</p>
            <p className="text-sm text-muted-foreground">Excel worksheet for organizing my research was...</p>
            <p className="text-xs text-muted-foreground mt-2">Esnair, 1 days ago</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center mb-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-green-600 text-green-600" />
                ))}
              </div>
            </div>
            <p className="font-bold mb-2">Best at Grad Coach</p>
            <p className="text-sm text-muted-foreground">Overall, this is a summary that...</p>
            <p className="text-xs text-muted-foreground mt-2">Hantale Saartjies, 3 days ago</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
