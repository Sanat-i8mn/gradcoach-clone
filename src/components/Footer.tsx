import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-5 gap-8">
          <div>
            <div className="mb-6">
              <span className="text-2xl font-bold">
                GRAD<span className="text-primary">COACH</span>
              </span>
            </div>
            <div className="mt-4">
              <img src="/f.webp" alt="Awards and Certifications" className="w-full max-w-xs" />
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-4 flex items-center text-white">
              <span className="text-pink-500 mr-2">🚀</span> SERVICES
            </h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-primary hover:underline">Private Coaching</a></li>
              <li><a href="#" className="text-primary hover:underline">Language Editing</a></li>
              <li><a href="#" className="text-primary hover:underline">Transcription</a></li>
              <li><a href="#" className="text-primary hover:underline">Qualitative Coding</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4 flex items-center text-white">
              <span className="text-yellow-500 mr-2">✨</span> RESOURCES
            </h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-primary hover:underline">Blueprints</a></li>
              <li><a href="#" className="text-primary hover:underline">Templates</a></li>
              <li><a href="#" className="text-primary hover:underline">Workshops</a></li>
              <li><a href="#" className="text-primary hover:underline">Blog</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4 flex items-center text-white">
              <span className="text-purple-500 mr-2">👥</span> ABOUT
            </h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-primary hover:underline">The Team</a></li>
              <li><a href="#" className="text-primary hover:underline">Reviews</a></li>
              <li><a href="#" className="text-primary hover:underline">Pricing</a></li>
              <li><a href="#" className="text-primary hover:underline">FAQs</a></li>
              <li><a href="#" className="text-primary hover:underline">Work With Us</a></li>
            </ul>
          </div>
          
          <div>
            <Button className="bg-primary hover:bg-primary/90 w-full mb-3 font-bold py-2 text-white">
              GET STARTED
            </Button>
            
            <Button className="w-full mb-4 font-bold py-2 bg-gray-600 text-white hover:bg-gray-500">
              LOG IN
            </Button>
            
            <div className="flex gap-1 mb-4">
              <a href="#" className="w-8 h-8 bg-primary rounded flex items-center justify-center text-white font-bold text-sm">f</a>
              <a href="#" className="w-8 h-8 bg-primary rounded flex items-center justify-center text-white font-bold text-xs">yt</a>
              <a href="#" className="w-8 h-8 bg-primary rounded flex items-center justify-center text-white font-bold text-xs">in</a>
              <a href="#" className="w-8 h-8 bg-primary rounded flex items-center justify-center text-white font-bold text-sm">@</a>
            </div>
            
            <p className="text-sm text-white font-medium">perceptaire</p>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-gray-700 text-xs text-gray-300">
          <p>© All content copyright Think Digital Limited t/a Grad Coach 2025 · Use of our website, resources and services is subject to our <a href="#" className="text-primary underline">standard terms</a> and <a href="#" className="text-primary underline">privacy policy</a>.</p>
          <p className="mt-1">Company Registration: 2904310 · US Trademark: 98175833 · UK Trademark: UK00003956375 · Tutors' Association ID: 55870609</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
