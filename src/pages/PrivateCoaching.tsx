import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Star, Phone, Calendar, Gauge, Lock, ChevronRight, Building2 } from "lucide-react";
import heroImage from "@/assets/private-coaching.jpg";

const PrivateCoaching = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-muted py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Finish your research.<br />
                <span className="text-primary">Get your life back.</span>
              </h1>
              <p className="text-lg mb-6">
                Hands-on Private Coaching for busy adult learners serious about finishing.
              </p>
              <Button className="bg-primary hover:bg-brand-orange-hover text-white font-bold py-6 px-8 text-lg mb-6">
                BOOK MY FREE CONSULTATION
              </Button>
              <div className="flex items-center gap-4 mb-4">
                <img src="/placeholder.svg" alt="Coaches" className="w-32 h-8 object-cover rounded" />
                <span className="font-bold">10,000+ success stories</span>
              </div>
              <div className="flex gap-4 flex-wrap">
                <img src="/placeholder.svg" alt="Award 1" className="h-16" />
                <img src="/placeholder.svg" alt="Award 2" className="h-16" />
                <img src="/placeholder.svg" alt="Award 3" className="h-16" />
                <img src="/placeholder.svg" alt="Award 4" className="h-16" />
              </div>
            </div>
            <div>
              <img src={heroImage} alt="Private Coaching" className="w-full rounded-lg shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Lonely Journey Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            A dissertation can be a <span className="text-primary">lonely journey</span>
          </h2>
          <div className="max-w-2xl mx-auto space-y-4 text-lg">
            <p>You're not getting <strong>meaningful support</strong> from your advisor.</p>
            <p>You're <strong>struggling to balance</strong> work, family and study.</p>
            <p>You're <strong>overwhelmed</strong> by the sheer scope of it all.</p>
            <p>You're <strong>crippled by perfectionism</strong>.</p>
            <p>You're <strong>wasting time</strong>.</p>
          </div>
          <div className="mt-8">
            <ChevronRight className="w-12 h-12 mx-auto text-primary" />
          </div>
        </div>
      </section>

      {/* 10,000+ Clients Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                We've helped <span className="text-primary">10,000+ clients</span><br />
                cross the finish line, faster.
              </h2>
              <p className="text-lg mb-6">
                With <strong>Private Coaching</strong>, you get the hands-on, personal support and guidance you need, whenever you need it.
              </p>
              <p className="text-lg mb-6">
                Having a dissertation coach by your side means you'll avoid dead-ends, make the right decisions, focus on the things that matter – and finish your dissertation faster.
              </p>
              <Button className="bg-primary hover:bg-brand-orange-hover text-white font-bold py-6 px-8 text-lg">
                BOOK MY INITIAL CONSULTATION
              </Button>
              <div className="mt-6 flex items-center gap-2">
                <span className="font-bold">Excellent</span>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-green-600 text-green-600" />
                  ))}
                </div>
                <span className="text-sm">1,288 reviews on Trustpilot</span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[...Array(6)].map((_, i) => (
                <img key={i} src="/placeholder.svg" alt={`Coach ${i + 1}`} className="w-full rounded-lg" />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Adult Learners Choose Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Why <span className="text-primary">adult learners</span> choose Grad Coach.
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="border border-border rounded-lg p-8">
              <Phone className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-4">On-Demand Access</h3>
              <p>Getting help from your dedicated coach is simple. Book a live session, chat via email or send your written work to us for an in-depth review. We're here when you need us.</p>
            </div>
            <div className="border border-border rounded-lg p-8">
              <Lock className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-4">Insider Advantage</h3>
              <p>Our award-winning Dissertation Coaches all hold doctoral-level degrees and share 100+ years of combined experience. Having worked on the inside, they know what markers want.</p>
            </div>
            <div className="border border-border rounded-lg p-8">
              <Gauge className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-4">Guaranteed Results</h3>
              <p>We take a vested interest in your project. If we sign off your final written work for submission and it doesn't achieve a pass, we'll give you your money back. P.S. That's never happened.</p>
            </div>
            <div className="border border-border rounded-lg p-8">
              <Building2 className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-4">Trusted Track Record</h3>
              <p>Over 10 million students have taken our online lessons, while 5000+ students have worked with us 1:1 to cross the finish line. We're a trusted name in a sea of scammers.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Loved by <span className="text-primary">millions.</span>
          </h2>
          <p className="text-center mb-12">
            View 1:1 video interviews across the world via our <span className="text-primary">YouTube channel</span> or read over 1,000 reviews from learners.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-background border border-border rounded-lg p-6">
                <div className="flex items-start gap-4 mb-4">
                  <img src="/placeholder.svg" alt="User" className="w-12 h-12 rounded-full" />
                  <div className="flex-1">
                    <div className="flex mb-2">
                      {[...Array(5)].map((_, j) => (
                        <Star key={j} className="w-4 h-4 fill-green-600 text-green-600" />
                      ))}
                    </div>
                    <p className="text-sm mb-2">
                      "Grad Coach gave me structure, clarity, and confidence."
                    </p>
                    <p className="text-xs text-muted-foreground">Student | Unaffiliated (UK)</p>
                  </div>
                </div>
                {i % 2 === 0 && (
                  <div className="bg-primary text-white px-4 py-2 rounded inline-flex items-center gap-2">
                    <span className="font-bold">WATCH ▶</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Get Unstuck Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to <span className="text-primary">get unstuck?</span>
          </h2>
          <p className="text-lg mb-12">You're just three steps away from getting on the fast track.</p>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-muted p-8 rounded-lg">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Step 1: Initial Chat</h3>
              <p>Schedule a free, no-obligation consultation for us to understand your unique situation and needs.</p>
            </div>
            <div className="bg-muted p-8 rounded-lg">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Gauge className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Step 2: Accelerate</h3>
              <p>Your dedicated Dissertation Coach will work with you to fast-track every step of the process.</p>
            </div>
            <div className="bg-muted p-8 rounded-lg">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Step 3: Submit</h3>
              <p>Submit your Grad Coach approved work with confidence, protected by our Pass Or Pay Guarantee.</p>
            </div>
          </div>
          <Button className="bg-primary hover:bg-brand-orange-hover text-white font-bold py-6 px-12 text-lg">
            BOOK MY FREE CONSULTATION
          </Button>
          <div className="mt-8 flex items-center justify-center gap-2">
            <span className="font-bold">Excellent</span>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-green-600 text-green-600" />
              ))}
            </div>
            <span className="text-sm">Based on 1,088 reviews</span>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
            Still have <span className="text-primary">questions?</span>
          </h2>
          <p className="text-center mb-12">
            Check out our FAQs below or <span className="text-primary">pop us an email</span>.
          </p>
          <div className="space-y-4">
            {[
              "Is the consultation really free?",
              "Is this service allowed by universities?",
              "Will my work be treated confidentially?",
              "How much does Private Coaching cost?",
              "Can you write my dissertation/thesis for me?",
              "I still have questions..."
            ].map((question, i) => (
              <div key={i} className="bg-background border border-border rounded-lg p-6 flex items-center justify-between">
                <span className="font-medium">{question}</span>
                <ChevronRight className="w-5 h-5 text-muted-foreground" />
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Button className="bg-primary hover:bg-brand-orange-hover text-white font-bold py-6 px-12 text-lg w-full">
              BOOK MY INITIAL CONSULTATION
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PrivateCoaching;
