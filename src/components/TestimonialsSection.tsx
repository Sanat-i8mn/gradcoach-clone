import { Card, CardContent } from "@/components/ui/card";

const TestimonialsSection = () => {
  const testimonials = [
    {
      text: "Overall, this program was the turning point in my PhD journey...",
      author: "Teresa Marsh, PhD"
    },
    {
      text: "I thought I wasn't smart enough - Grad Coach helped me accept that I was...",
      author: "anonymous"
    },
    {
      text: "Grad Coach gave me structure, clarity, and confidence.",
      video: true
    },
    {
      text: "Writing and Research have been my thing but there are a lot of processes...",
      author: "Tracy Williams, EdD"
    },
    {
      text: "Grad Coach helped de-stress and break it down into manageable parts...",
      video: true
    },
    {
      text: "Thank you GradCoach team! I am 2 out of 4 chapters...",
      author: "Roy Wilson, EdD"
    },
    {
      text: "Grad Coach turned stress into structure.",
      video: true
    },
    {
      text: "Every time I hit a wall, Grad Coach got me unstuck.",
      video: true
    },
    {
      text: "I was out of my depth but Grad Coach helped me...",
      author: "Anonymous Nightingale, EdD"
    },
    {
      text: "If you're stuck, Grad Coach is your way forward.",
      video: true
    },
  ];

  return (
    <section className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-3 text-foreground">
          Loved by <span className="bg-gradient-to-r from-purple-500 via-blue-500 to-teal-500 bg-clip-text text-transparent">millions.</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12">
          Here's what our private coaching clients had to say, in their words (we haven't even heard)...
        </p>
        
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className={testimonial.video ? "bg-gradient-to-r from-purple-500 to-blue-500 text-white" : "bg-background"}>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  {testimonial.video && (
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                        <span className="text-2xl">▶</span>
                      </div>
                    </div>
                  )}
                  <div className="flex-1">
                    <p className={`text-sm ${testimonial.video ? 'text-primary-foreground' : 'text-foreground'} mb-2`}>
                      {testimonial.text}
                    </p>
                    {testimonial.author && (
                      <p className={`text-xs ${testimonial.video ? 'text-primary-foreground/80' : 'text-muted-foreground'}`}>
                        {testimonial.author}
                      </p>
                    )}
                    {testimonial.video && (
                      <button className="mt-3 px-4 py-1 bg-white/20 backdrop-blur rounded text-sm font-bold">
                        WATCH ▶
                      </button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
