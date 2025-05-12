import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ZapOff, AlertTriangle, Cpu } from 'lucide-react';
import { CountdownTimer } from '../components/CountdownTimer';
import { ProductCard } from '../components/ProductCard';
import { products } from '../data/products';

export const Home = () => {
  const [glitchText, setGlitchText] = useState('WELCOME TO THE UNDERGROUND');
  
  // Glitch text effect
  useEffect(() => {
    const glitchInterval = setInterval(() => {
      const messages = [
        'WELCOME TO THE UNDERGROUND',
        'BEST DECKS IN NIGHT CITY',
        'PRICES SO LOW THEY\'RE ILLEGAL',
        'DON\'T TELL THE CORPS'
      ];
      const randomIndex = Math.floor(Math.random() * messages.length);
      setGlitchText(messages[randomIndex]);
    }, 3000);
    
    return () => clearInterval(glitchInterval);
  }, []);
  
  // Featured products (only show 3)
  const featuredProducts = products.filter(product => product.featured).slice(0, 3);
  
  return (
    <div className="space-y-10">
      {/* Hero section */}
      <section className="relative rounded-lg overflow-hidden bg-cyber-dark border-2 border-cyber-blue mb-8">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/cyberdeck1.jpg)',
            filter: 'brightness(0.3) contrast(1.2) hue-rotate(-5deg)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-cyber-black/80 to-transparent mix-blend-multiply" />
        <div className="absolute inset-0" style={{ backdropFilter: 'blur(1px)' }} />
        
        <div className="relative z-10 p-6 md:p-10">
          <div className="flex flex-col items-center text-center">
            <h1 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold mb-4">
              <span className="block text-cyber-yellow animate-glitch">CRAZY EDDIE'S</span>
              <span className="block text-cyber-pink">CYBERDECK EMPORIUM</span>
            </h1>
            
            <p className="font-glitch text-xl md:text-2xl text-cyber-green mb-6 animate-color-cycle">
              {glitchText}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <Link 
                to="/deck-deals" 
                className="cyber-btn text-base md:text-lg"
              >
                BROWSE INSANE DEALS!
              </Link>
              <Link 
                to="/find-the-hideout" 
                className="border-2 border-cyber-blue bg-transparent text-cyber-blue hover:bg-cyber-blue hover:text-black px-5 py-2 font-glitch text-base md:text-lg uppercase transition-all"
              >
                FIND THE HIDEOUT
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Countdown timer */}
      <CountdownTimer hours={24} />
      
      {/* Featured products */}
      <section className="container mx-auto">
        <div className="mb-6 flex items-center">
          <Sparkles size={24} className="text-cyber-yellow mr-2" />
          <h2 className="font-display text-2xl md:text-3xl text-cyber-yellow">
            FRESH DROPS!
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
        
        <div className="mt-8 text-center">
          <Link 
            to="/deck-deals" 
            className="cyber-btn inline-block"
          >
            SEE ALL DECKS!
          </Link>
        </div>
      </section>
      
      {/* Why buy from Eddie */}
      <section className="bg-cyber-dark border-2 border-cyber-green rounded-lg p-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[url('/glitch-lines.svg')] opacity-10"></div>
        
        <div className="mb-6 flex items-center">
          <AlertTriangle size={24} className="text-cyber-green mr-2" />
          <h2 className="font-display text-2xl md:text-3xl text-cyber-green">
            WHY BUY FROM EDDIE?
          </h2>
        </div>
        
        <ul className="space-y-4 relative z-10">
          <li className="flex items-start">
            <ZapOff size={24} className="text-cyber-yellow mr-2 flex-shrink-0 mt-1" />
            <p className="font-cyber text-cyber-yellow">
              <span className="font-bold animate-pulse">PRICES SO LOW THEY'RE ILLEGAL!</span> - Seriously, don't ask where this stuff came from. It's better for both of us.
            </p>
          </li>
          <li className="flex items-start">
            <ZapOff size={24} className="text-cyber-pink mr-2 flex-shrink-0 mt-1" />
            <p className="font-cyber text-cyber-pink">
              <span className="font-bold animate-blink">TOP TIER TECH (PROBABLY!)</span> - All decks passed at least one diagnostic test before hitting the shelves!
            </p>
          </li>
          <li className="flex items-start">
            <ZapOff size={24} className="text-cyber-blue mr-2 flex-shrink-0 mt-1" />
            <p className="font-cyber text-cyber-blue">
              <span className="font-bold">NO REFUNDS (PROBABLY!)</span> - But Eddie might fix it for free if you bring him a six-pack of that synthetic beer he likes.
            </p>
          </li>
          <li className="flex items-start">
            <ZapOff size={24} className="text-cyber-green mr-2 flex-shrink-0 mt-1" />
            <p className="font-cyber text-cyber-green">
              <span className="font-bold">CUSTOM MODS AVAILABLE!</span> - Eddie's personal touch can boost any deck's performance (results may vary wildly).
            </p>
          </li>
        </ul>
      </section>
      
      {/* CTA Banner */}
      <section className="bg-gradient-to-r from-cyber-dark via-cyber-black to-cyber-dark border-2 border-cyber-orange rounded-lg p-6 text-center animate-pulse">
        <h2 className="font-display text-2xl md:text-3xl text-cyber-orange mb-4">
          🔥 HOT LIMITED-TIME DEAL ALERT! 🔥
        </h2>
        <p className="font-cyber text-lg text-white mb-4">
          Buy any NetRunner model and get a FREE datajack adapter!
          <span className="block text-sm text-cyber-green mt-2">
            * While supplies last. Adapter might be slightly used. Compatibility not guaranteed.
          </span>
        </p>
        <Link 
          to="/deck-deals" 
          className="cyber-btn inline-block text-cyber-orange border-cyber-orange hover:bg-cyber-orange"
        >
          CLAIM NOW!
        </Link>
      </section>
    </div>
  );
};