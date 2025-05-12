import React from 'react';
import { Link } from 'react-router-dom';
import { User, ZapOff, Shield, AlertTriangle } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center">
          <User size={28} className="text-cyber-yellow mr-2" />
          <h1 className="font-display text-3xl text-cyber-yellow uppercase font-bold">
            ABOUT EDDIE
          </h1>
        </div>
        <p className="font-cyber text-cyber-green text-sm mt-2">
          The man, the myth, the menace to corporate interests!
        </p>
      </div>

      {/* Eddie Bio Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="md:col-span-1">
          <div className="aspect-square bg-cyber-dark border-2 border-cyber-blue rounded-lg relative overflow-hidden">
            {/* Placeholder silhouette - deliberately obscured */}
            <div className="absolute inset-0 flex items-center justify-center bg-cyber-dark">
              <div className="w-3/4 h-3/4 bg-cyber-black opacity-70 rounded-full flex items-center justify-center">
                <User size={100} className="text-cyber-blue opacity-60" />
              </div>
            </div>
            
            {/* Glitch overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-cyber-purple opacity-20"></div>
            
            {/* Scanlines */}
            <div className="absolute inset-0 bg-[url('/scanlines.svg')] opacity-30"></div>
            
            {/* "Signal Lost" text that occasionally flashes */}
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="font-glitch text-cyber-red text-xl animate-blink">
                SIGNAL JAMMED
              </p>
            </div>
          </div>
        </div>
        
        <div className="md:col-span-2">
          <div className="bg-cyber-dark border-2 border-cyber-yellow p-6 rounded-lg h-full relative overflow-hidden">
            <div className="absolute top-0 right-0 w-full h-full bg-[url('/noise.png')] opacity-10 mix-blend-overlay"></div>
            
            <h2 className="font-display text-2xl text-cyber-yellow mb-4">THE LEGEND</h2>
            
            <div className="space-y-4 relative z-10">
              <p className="font-cyber text-white">
                Nobody knows exactly where Eddie came from. Some say he was a corporate 
                security specialist who saw too much. Others claim he's just a street 
                kid who got lucky with his first big score. Whatever the truth, one 
                thing's certain: <span className="text-cyber-green">nobody knows cyberdecks like Eddie.</span>
              </p>
              
              <p className="font-cyber text-white">
                After a <span className="line-through">messy exit</span> career change 
                from a major tech corporation around 2071, Eddie set up shop in the 
                shadier corners of Night City. Within months, word spread about his 
                "insane" prices and uncanny ability to get his hands on hardware that 
                wasn't supposed to exist outside corporate R&D labs.
              </p>
              
              <p className="font-cyber text-white">
                Eddie's philosophy is simple: high-end tech shouldn't be locked behind 
                corporate walls. Everyone deserves the chance to jack in with quality 
                gear—especially if that gear might occasionally 
                <span className="text-cyber-pink"> cause problems for the corps</span>.
              </p>
              
              <div className="border-l-4 border-cyber-green pl-4 py-1">
                <p className="font-cyber italic text-cyber-green">
                  "If it's got a chip and it can connect to the Net, I can get it 
                  for you at half the price the corps charge. Don't ask where 
                  it came from. Don't ask if it's legal. Just enjoy the savings, 
                  choomba!"
                </p>
                <p className="text-right font-display text-sm mt-1">- Eddie, probably</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Eddie's Rules */}
      <div className="bg-cyber-dark border-2 border-cyber-red rounded-lg p-6 mb-12">
        <h2 className="font-display text-2xl text-cyber-red mb-6 flex items-center">
          <AlertTriangle size={24} className="mr-2" />
          EDDIE'S SHOP RULES
        </h2>
        
        <ul className="space-y-4">
          <li className="flex items-start">
            <ZapOff size={20} className="text-cyber-yellow mr-2 flex-shrink-0 mt-1" />
            <p className="font-cyber text-cyber-yellow">
              <span className="font-bold">NO CORPO SUITS.</span> If you're wearing anything that costs more than my monthly rent, you'd better have cash to match.
            </p>
          </li>
          <li className="flex items-start">
            <ZapOff size={20} className="text-cyber-pink mr-2 flex-shrink-0 mt-1" />
            <p className="font-cyber text-cyber-pink">
              <span className="font-bold">NO REFUNDS.</span> But if something breaks in the first week, Eddie might fix it out of the goodness of his heart (and for a small fee).
            </p>
          </li>
          <li className="flex items-start">
            <ZapOff size={20} className="text-cyber-blue mr-2 flex-shrink-0 mt-1" />
            <p className="font-cyber text-cyber-blue">
              <span className="font-bold">NO QUESTIONS</span> about where the merchandise came from. Eddie definitely acquired it all legitimately (wink).
            </p>
          </li>
          <li className="flex items-start">
            <ZapOff size={20} className="text-cyber-green mr-2 flex-shrink-0 mt-1" />
            <p className="font-cyber text-cyber-green">
              <span className="font-bold">NO COPS.</span> Not that Eddie has anything to hide, but their uniforms clash with the store's aesthetic.
            </p>
          </li>
        </ul>
      </div>
      
      {/* CTA */}
      <div className="bg-gradient-to-r from-cyber-dark via-cyber-black to-cyber-dark border-2 border-cyber-blue rounded-lg p-8 text-center">
        <h2 className="font-display text-2xl sm:text-3xl text-cyber-blue mb-4">
          READY TO SCORE AN INSANE DEAL?
        </h2>
        <p className="font-cyber text-white mb-6 max-w-2xl mx-auto">
          Eddie's inventory changes faster than corporate security protocols. 
          Check out the current selection before someone else grabs that 
          deck you've been dreaming about!
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link to="/deck-deals" className="cyber-btn">
            SEE THE DEALS!
          </Link>
          <Link to="/find-the-hideout" className="border-2 border-cyber-yellow bg-transparent text-cyber-yellow hover:bg-cyber-yellow hover:text-black px-5 py-2 font-glitch uppercase transition-all">
            FIND THE HIDEOUT
          </Link>
        </div>
      </div>
    </div>
  );
};