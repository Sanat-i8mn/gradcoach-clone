import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import heroImage from "@/assets/hero-coach.jpg";

const HeroSection = () => {
  return (
    <section className="bg-muted py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="bg-background rounded-lg shadow-lg overflow-hidden">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="p-8 md:p-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                Stop struggling<br />on <span className="bg-gradient-to-r from-purple-500 via-blue-500 to-teal-500 bg-clip-text text-transparent">your own.</span>
              </h1>
              
              <p className="text-lg mb-6 text-foreground">
                We've helped more than <strong>10,000</strong> adult learners finish their research faster, with less stress. <strong>Let's get you moving.</strong>
              </p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="border border-border rounded-full px-4 py-2 text-sm">
                  Fast turnaround & results<br />- just what you need
                </div>
                <div className="border border-border rounded-full px-4 py-2 text-sm">
                  World-class<br />expertise
                </div>
                <div className="border border-border rounded-full px-4 py-2 text-sm">
                  5-STAR<br />rated service
                </div>
                <div className="border border-border rounded-full px-4 py-2 text-sm">
                  THE TUTORS<br />Difference Initiative
                </div>
              </div>
              
              <Button className="w-full bg-gradient-to-r from-purple-500 via-blue-500 to-teal-500 hover:from-purple-600 hover:via-blue-600 hover:to-teal-600 text-white font-bold py-6 text-lg">
                BOOK MY FREE SERVICE 📞
              </Button>
              
              <div className="mt-6 flex items-center justify-center gap-2 text-sm">
                <span className="text-muted-foreground">Our customers say</span>
                <span className="font-bold">Excellent</span>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-green-600 text-green-600" />
                  ))}
                </div>
                <span className="text-muted-foreground">4.9 out of 5 based on 1,288 reviews</span>
                <span className="font-semibold text-green-600">★ Trustpilot</span>
              </div>
            </div>
            
            <div className="h-full">
              <img 
                src={heroImage} 
                alt="GradCoach Expert" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
