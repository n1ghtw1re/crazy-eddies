import React, { useState } from 'react';
import { MapPin, Shield, ZapOff } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    codename: '',
    contact: '',
    message: '',
    securityCheck: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData(prev => ({ ...prev, [name]: checked }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // This would normally submit the form data, but we'll just simulate it
    console.log('Form data submitted:', formData);
    alert('MESSAGE SENT TO EDDIE\'S SECURE DROP! He\'ll contact you if he feels like it.');
    setFormData({
      codename: '',
      contact: '',
      message: '',
      securityCheck: false,
    });
  };

  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center">
          <MapPin size={28} className="text-cyber-green mr-2" />
          <h1 className="font-display text-3xl text-cyber-green uppercase font-bold">
            FIND THE HIDEOUT
          </h1>
        </div>
        <p className="font-cyber text-cyber-yellow text-sm mt-2">
          Need to track down Eddie? Follow these deliberately vague directions...
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Map & Directions */}
        <div className="bg-cyber-dark border-2 border-cyber-blue p-6 rounded-lg relative overflow-hidden">
          <div className="absolute top-0 right-0 w-full h-full bg-[url('/glitch-lines.svg')] opacity-5"></div>
          
          <h2 className="font-display text-2xl text-cyber-blue mb-4 flex items-center">
            <MapPin size={20} className="mr-2" />
            LOCATION DATA
          </h2>
          
          {/* Deliberately glitchy "map" */}
          <div className="h-48 bg-cyber-black mb-6 rounded relative overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="font-glitch text-cyber-red text-xl animate-pulse">
                MAP DATA CORRUPTED
              </p>
            </div>
            <div className="absolute inset-0 bg-[url('/glitch-map.svg')] opacity-20"></div>
            <div className="absolute inset-0 bg-[url('/scanlines.svg')] opacity-30"></div>
          </div>
          
          <div className="space-y-4 relative z-10">
            <p className="font-cyber text-white">
              Eddie's shop moves around. A lot. Current intel suggests he's operating somewhere in the:
            </p>
            
            <div className="border-l-4 border-cyber-green pl-4 py-2">
              <p className="font-cyber text-cyber-green">
                <span className="font-bold">WATSON DISTRICT</span> - Two blocks east of the old MegaMart. 
                Look for the flickering neon sign that says "TECH REPAIRS" (the 'R' is burnt out). 
                Use the back door, and knock three times, pause, then twice more.
              </p>
            </div>
            
            <div className="bg-cyber-black p-4 rounded border border-cyber-red">
              <p className="font-cyber text-cyber-red text-sm flex items-start">
                <AlertIcon size={16} className="mr-2 flex-shrink-0 mt-1" />
                <span>
                  <span className="font-bold">SECURITY NOTICE:</span> If you see any Arasaka or Militech 
                  vehicles in the area, walk away and try again tomorrow. Eddie values his freedom 
                  (and yours).
                </span>
              </p>
            </div>
            
            <p className="font-cyber text-white text-sm italic">
              * Location valid as of [DATA CORRUPTED]. Eddie moves shop approximately every 3-4 weeks.
            </p>
          </div>
        </div>
        
        {/* Contact Form */}
        <div className="bg-cyber-dark border-2 border-cyber-green p-6 rounded-lg">
          <h2 className="font-display text-2xl text-cyber-green mb-4 flex items-center">
            <Shield size={20} className="mr-2" />
            SECURE DATA DROP
          </h2>
          
          <p className="font-cyber text-white mb-6">
            Not feeling like a physical visit? Drop Eddie a secure message. 
            <span className="text-cyber-yellow block mt-2">
              Just remember: he only responds to interesting opportunities.
            </span>
          </p>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="codename" className="block font-cyber text-cyber-blue text-sm mb-1">
                YOUR CODENAME:
              </label>
              <input
                type="text"
                id="codename"
                name="codename"
                value={formData.codename}
                onChange={handleChange}
                required
                className="cyber-input w-full"
                placeholder="ENTER ALIAS HERE"
              />
            </div>
            
            <div>
              <label htmlFor="contact" className="block font-cyber text-cyber-blue text-sm mb-1">
                SECURE CONTACT METHOD:
              </label>
              <input
                type="text"
                id="contact"
                name="contact"
                value={formData.contact}
                onChange={handleChange}
                required
                className="cyber-input w-full"
                placeholder="ENCRYPTED CHANNEL PREFERRED"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block font-cyber text-cyber-blue text-sm mb-1">
                YOUR MESSAGE:
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="cyber-input w-full resize-none"
                placeholder="KEEP IT BRIEF AND INTERESTING"
              ></textarea>
            </div>
            
            <div className="flex items-start">
              <input
                type="checkbox"
                id="securityCheck"
                name="securityCheck"
                checked={formData.securityCheck}
                onChange={handleCheckboxChange}
                required
                className="mt-1 mr-2"
              />
              <label htmlFor="securityCheck" className="font-cyber text-cyber-pink text-sm">
                I confirm I am not affiliated with any corporation, law enforcement agency, 
                or other organization that would make Eddie nervous. I also acknowledge that 
                Eddie may choose to ignore this message entirely.
              </label>
            </div>
            
            <div className="text-center pt-4">
              <button type="submit" className="cyber-btn w-full sm:w-auto">
                TRANSMIT DATA
              </button>
              <p className="font-cyber text-cyber-green text-xs mt-2">
                * ALL CHANNELS ENCRYPTED. PROBABLY.
              </p>
            </div>
          </form>
        </div>
      </div>
      
      {/* Operating Hours */}
      <div className="mt-8 bg-cyber-black border-2 border-cyber-yellow p-6 rounded-lg">
        <h2 className="font-display text-xl text-cyber-yellow mb-4">
          OPERATING HOURS*
        </h2>
        
        <div className="grid grid-cols-2 gap-4 font-cyber">
          <div>
            <p className="text-cyber-green">MONDAY - THURSDAY:</p>
            <p className="text-white">"After dark until whenever"</p>
          </div>
          <div>
            <p className="text-cyber-green">FRIDAY - SATURDAY:</p>
            <p className="text-white">"When Eddie feels like it"</p>
          </div>
          <div>
            <p className="text-cyber-green">SUNDAY:</p>
            <p className="text-white">"Only for regulars with cash"</p>
          </div>
          <div>
            <p className="text-cyber-green">DURING CORP RAIDS:</p>
            <p className="text-white">"Absolutely closed, come back later"</p>
          </div>
        </div>
        
        <p className="font-cyber text-cyber-yellow text-xs mt-4 italic">
          * Hours subject to change based on Eddie's mood, local police activity, 
          and whether he won or lost at cards the night before.
        </p>
      </div>

      {/* N1ghtw1re Collective */}
      <div className="mt-8 bg-cyber-black border-2 border-cyber-pink p-6 rounded-lg relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-cyber-purple/20 to-cyber-blue/20"></div>
        
        <h2 className="font-display text-xl text-cyber-pink mb-4 relative z-10 glitch-text">
          JOIN THE N1GHTW1RE COLLECTIVE
        </h2>
        
        <p className="font-cyber text-cyber-green mb-6 relative z-10 animate-pulse">
          If you're reading this, it may already be too late
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 relative z-10">
          <a 
            href="https://n1ghtw1re.neocities.org" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="cyber-btn text-sm border-cyber-blue text-cyber-blue hover:bg-cyber-blue"
          >
            N1GHTW1RE COLLECTIVE
          </a>
          <a 
            href="https://circuit-breach.neocities.org" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="cyber-btn text-sm border-cyber-pink text-cyber-pink hover:bg-cyber-pink"
          >
            CIRCUIT BREACH
          </a>
          <a 
            href="https://n1ghtw1re.gumroad.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="cyber-btn text-sm border-cyber-green text-cyber-green hover:bg-cyber-green"
          >
            GUMROAD
          </a>
          <a 
            href="https://github.com/n1ghtw1re" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="cyber-btn text-sm border-cyber-yellow text-cyber-yellow hover:bg-cyber-yellow"
          >
            GITHUB
          </a>
          <a 
            href="https://synapse-express.netlify.app" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="cyber-btn text-sm border-cyber-purple text-cyber-purple hover:bg-cyber-purple"
          >
            SYNAPSE EXPRESS
          </a>
          <a 
            href="https://taco-bell-sanangeles.netlify.app" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="cyber-btn text-sm border-cyber-orange text-cyber-orange hover:bg-cyber-orange"
          >
            TACO BELL SANANGELES
          </a>
          <a 
            href="https://into-ideaspace.lovable.app" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="cyber-btn text-sm border-cyber-pink text-cyber-pink hover:bg-cyber-pink"
          >
            INTO IDEASPACE
          </a>
          <a 
            href="https://interlinked-records.lovable.app" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="cyber-btn text-sm border-cyber-blue text-cyber-blue hover:bg-cyber-blue"
          >
            INTERLINKED RECORDS
          </a>
        </div>
      </div>
    </div>
  );
};

// Alert icon component
const AlertIcon: React.FC<{ size: number; className: string }> = ({ size, className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
      <line x1="12" y1="9" x2="12" y2="13"></line>
      <line x1="12" y1="17" x2="12.01" y2="17"></line>
    </svg>
  );
};