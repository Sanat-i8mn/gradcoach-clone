import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle, Gauge, Calendar } from "lucide-react";
import { Star } from "lucide-react";

const GetUnstuckSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-3 text-foreground">
          Ready to <span className="text-primary">get unstuck?</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12">
          Go from confused to confident in three simple steps.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
          <Card className="text-center">
            <CardContent className="p-8">
              <MessageCircle className="w-16 h-16 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3 text-foreground">Step 1: Initial Chat</h3>
              <p className="text-muted-foreground">
                Schedule a free, no-obligation consultation for us to understand your unique situation and needs.
              </p>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardContent className="p-8">
              <Gauge className="w-16 h-16 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3 text-foreground">Step 2: Accelerate</h3>
              <p className="text-muted-foreground">
                Your dedicated Dissertation Coach will work with you in fast-track every step of the process.
              </p>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardContent className="p-8">
              <Calendar className="w-16 h-16 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3 text-foreground">Step 3: Submit</h3>
              <p className="text-muted-foreground">
                Submit your Grad Coach-approved work with confidence, protected by our Pass or Pay Guarantee.
              </p>
            </CardContent>
          </Card>
        </div>
        
        <div className="text-center mb-12">
          <Button className="bg-primary hover:bg-brand-orange-hover text-primary-foreground font-bold py-6 px-12 text-lg">
            BOOK MY FREE CONSULTATION
          </Button>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
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
            <div className="flex mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-green-600 text-green-600" />
              ))}
            </div>
            <p className="font-bold mb-2">Excellent templates</p>
            <p className="text-sm text-muted-foreground">Excel worksheet for organizing my...</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-green-600 text-green-600" />
              ))}
            </div>
            <p className="font-bold mb-2">Overall, this is a summary...</p>
            <p className="text-sm text-muted-foreground">The service I received with very swift...</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetUnstuckSection;
