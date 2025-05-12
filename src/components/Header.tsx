import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CircuitBoard, Menu, X } from 'lucide-react';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-cyber-black bg-opacity-90 backdrop-blur-md shadow-lg shadow-cyber-pink/30' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Link 
              to="/" 
              className="flex items-center"
            >
              <CircuitBoard size={28} className="text-cyber-green mr-2 animate-pulse" />
              <div>
                <h1 className="font-display text-xl md:text-3xl font-bold text-white">
                  <span className="relative neon-text animate-color-cycle">CRAZY</span> 
                  <span className="text-cyber-blue"> EDDIE'S</span>
                </h1>
                <p className="text-xs md:text-sm font-cyber uppercase tracking-widest text-cyber-yellow animate-blink">
                  HIS PRICES ARE INSANE!
                </p>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 font-display uppercase">
            <Link to="/deck-deals" className="nav-link text-cyber-pink hover:text-cyber-green transition-colors duration-300">
              DECK DEALS!
            </Link>
            <Link to="/cyberdeck-chaos" className="nav-link text-cyber-blue hover:text-cyber-green transition-colors duration-300">
              CYBERDECK CHAOS!
            </Link>
            <Link to="/about-eddie" className="nav-link text-cyber-yellow hover:text-cyber-green transition-colors duration-300">
              ABOUT EDDIE
            </Link>
            <Link to="/find-the-hideout" className="nav-link text-cyber-green hover:text-cyber-pink transition-colors duration-300">
              FIND THE HIDEOUT
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-cyber-blue hover:text-cyber-pink transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-cyber-dark bg-opacity-95 backdrop-blur-sm border-t border-cyber-blue border-opacity-30">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4 font-display uppercase">
            <Link to="/deck-deals" className="py-2 px-4 border-l-4 border-cyber-pink text-cyber-pink hover:bg-cyber-black hover:bg-opacity-30 transition-colors">
              DECK DEALS!
            </Link>
            <Link to="/cyberdeck-chaos" className="py-2 px-4 border-l-4 border-cyber-blue text-cyber-blue hover:bg-cyber-black hover:bg-opacity-30 transition-colors">
              CYBERDECK CHAOS!
            </Link>
            <Link to="/about-eddie" className="py-2 px-4 border-l-4 border-cyber-yellow text-cyber-yellow hover:bg-cyber-black hover:bg-opacity-30 transition-colors">
              ABOUT EDDIE
            </Link>
            <Link to="/find-the-hideout" className="py-2 px-4 border-l-4 border-cyber-green text-cyber-green hover:bg-cyber-black hover:bg-opacity-30 transition-colors">
              FIND THE HIDEOUT
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};