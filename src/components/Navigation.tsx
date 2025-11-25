import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-background border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold">
              GRAD<span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">COACH</span>
            </span>
            <span className="text-primary text-sm">®</span>
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/private-coaching" className="text-sm text-foreground hover:text-primary transition-colors">
              🌱 PRIVATE COACHING
            </Link>
            <Link to="/express-services" className="text-sm text-foreground hover:text-primary transition-colors">
              ⚡ EXPRESS SERVICES
            </Link>
            <Link to="/blueprints" className="text-sm text-foreground hover:text-primary transition-colors">
              ⚙️ BLUEPRINTS
            </Link>
            <Link to="/get-started">
              <Button className="bg-gradient-to-r from-purple-500 to-teal-500 hover:from-purple-600 hover:to-teal-600 text-white font-semibold">
                GET STARTED 🚀
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border">
            <div className="flex flex-col space-y-4 pt-4">
              <Link 
                to="/private-coaching" 
                className="text-sm text-foreground hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                🌱 PRIVATE COACHING
              </Link>
              <Link 
                to="/express-services" 
                className="text-sm text-foreground hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                ⚡ EXPRESS SERVICES
              </Link>
              <Link 
                to="/blueprints" 
                className="text-sm text-foreground hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                ⚙️ BLUEPRINTS
              </Link>
              <Link to="/get-started" onClick={() => setIsMenuOpen(false)}>
                <Button className="bg-gradient-to-r from-purple-500 to-teal-500 hover:from-purple-600 hover:to-teal-600 text-white font-semibold w-full">
                  GET STARTED 🚀
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
