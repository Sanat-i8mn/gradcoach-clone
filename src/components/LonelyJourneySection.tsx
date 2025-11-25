import { ChevronDown } from "lucide-react";

const LonelyJourneySection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-foreground">
          Academic research can be a <span className="bg-gradient-to-r from-purple-500 via-blue-500 to-teal-500 bg-clip-text text-transparent">lonely journey</span>
        </h2>
        
        <div className="max-w-2xl mx-auto space-y-4 text-lg">
          <p className="text-foreground">
            You're not getting <strong>meaningful support</strong> from your advisor.
          </p>
          <p className="text-foreground">
            You're struggling to <strong>balance</strong> work, family and study.
          </p>
          <p className="text-foreground">
            You're <strong>overwhelmed</strong> by the sheer scope of it all.
          </p>
          <p className="text-foreground">
            You're crippled by <strong>perfectionism</strong>.
          </p>
          <p className="text-foreground">
            You're <strong>wasting time</strong>.
          </p>
        </div>
        
        <div className="mt-12">
          <ChevronDown className="w-12 h-12 text-purple-500 mx-auto animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default LonelyJourneySection;
