import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Star, Pencil, Keyboard, FileEdit } from "lucide-react";

const ExpressServices = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            It's time to <span className="text-primary">work smarter.</span>
          </h1>
          <p className="text-lg mb-12">
            Let us take care of the grunt work while you <strong>focus on the things that matter</strong>.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Qualitative Coding */}
            <div className="bg-muted rounded-lg p-8 text-center">
              <Pencil className="w-16 h-16 text-primary mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-4">Qualitative Coding</h3>
              <p className="mb-6">
                Our PhD-qualified specialists will systematically code your transcripts, saving you time.
              </p>
              <Button className="bg-primary hover:bg-brand-orange-hover text-white font-bold py-3 px-8 mb-4 w-full">
                GET A QUOTE
              </Button>
              <p className="text-sm">
                Or <a href="#" className="text-primary underline">learn more about coding</a>
              </p>
            </div>

            {/* Interview Transcription */}
            <div className="bg-muted rounded-lg p-8 text-center">
              <Keyboard className="w-16 h-16 text-primary mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-4">Interview Transcription</h3>
              <p className="mb-6">
                Our expert team will manually transcribe your recordings, ensuring 100% accuracy.
              </p>
              <Button className="bg-primary hover:bg-brand-orange-hover text-white font-bold py-3 px-8 mb-4 w-full">
                GET A QUOTE
              </Button>
              <p className="text-sm">
                Or <a href="#" className="text-primary underline">learn more about transcription</a>
              </p>
            </div>

            {/* Editing & Proofreading */}
            <div className="bg-muted rounded-lg p-8 text-center">
              <FileEdit className="w-16 h-16 text-primary mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-4">Editing & Proofreading</h3>
              <p className="mb-6">
                Our seasoned editors will review your work for language, formatting and referencing.
              </p>
              <Button className="bg-primary hover:bg-brand-orange-hover text-white font-bold py-3 px-8 mb-4 w-full">
                GET A QUOTE
              </Button>
              <p className="text-sm">
                Or <a href="#" className="text-primary underline">learn more about editing</a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trustpilot Section */}
      <section className="py-12 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <span className="text-sm">Our customers say</span>
            <span className="font-bold text-lg">Excellent</span>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-green-600 text-green-600" />
              ))}
            </div>
            <span className="text-sm">4.9 out of 5 based on 1,088 reviews</span>
            <span className="font-semibold text-green-600">★ Trustpilot</span>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ExpressServices;
