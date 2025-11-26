import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Star, Pencil, Keyboard, FileEdit } from "lucide-react";
import { Helmet } from "react-helmet-async";

const ExpressServices = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Express Academic Services | Transcription, Coding & Editing Services</title>
        <meta name="description" content="Professional academic express services including qualitative coding, interview transcription, and editing & proofreading. Expert PhD-qualified specialists deliver accurate, time-saving solutions for your research needs." />
        <meta name="keywords" content="qualitative coding services, interview transcription, academic editing, proofreading services, research transcription, thesis editing, dissertation proofreading" />
      </Helmet>
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            It's time to <span className="bg-gradient-to-r from-purple-500 via-blue-500 to-teal-500 bg-clip-text text-transparent">work smarter.</span>
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
              <Pencil className="w-16 h-16 text-purple-500 mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-4">Qualitative Coding</h3>
              <p className="mb-6">
                Our PhD-qualified specialists will systematically code your transcripts, saving you time.
              </p>
              <Button className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-bold py-3 px-8 mb-4 w-full">
                GET A QUOTE
              </Button>
              <p className="text-sm">
                Or <a href="#" className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent underline">learn more about coding</a>
              </p>
            </div>

            {/* Interview Transcription */}
            <div className="bg-muted rounded-lg p-8 text-center">
              <Keyboard className="w-16 h-16 text-blue-500 mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-4">Interview Transcription</h3>
              <p className="mb-6">
                Our expert team will manually transcribe your recordings, ensuring 100% accuracy.
              </p>
              <Button className="bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 text-white font-bold py-3 px-8 mb-4 w-full">
                GET A QUOTE
              </Button>
              <p className="text-sm">
                Or <a href="#" className="bg-gradient-to-r from-blue-500 to-teal-500 bg-clip-text text-transparent underline">learn more about transcription</a>
              </p>
            </div>

            {/* Editing & Proofreading */}
            <div className="bg-muted rounded-lg p-8 text-center">
              <FileEdit className="w-16 h-16 text-teal-500 mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-4">Editing & Proofreading</h3>
              <p className="mb-6">
                Our seasoned editors will review your work for language, formatting and referencing.
              </p>
              <Button className="bg-gradient-to-r from-teal-500 to-orange-500 hover:from-teal-600 hover:to-orange-600 text-white font-bold py-3 px-8 mb-4 w-full">
                GET A QUOTE
              </Button>
              <p className="text-sm">
                Or <a href="#" className="bg-gradient-to-r from-teal-500 to-orange-500 bg-clip-text text-transparent underline">learn more about editing</a>
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
