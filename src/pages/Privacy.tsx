import React from 'react';
import { Shield } from 'lucide-react';

export const Privacy: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <div className="flex items-center">
          <Shield size={28} className="text-cyber-blue mr-2" />
          <h1 className="font-display text-3xl text-cyber-blue uppercase font-bold">
            Privacy Policy
          </h1>
        </div>
      </div>

      <div className="bg-cyber-dark border-2 border-cyber-blue p-6 rounded-lg space-y-6">
        <p className="font-cyber text-cyber-yellow">
          LAST UPDATED: 2077-03-15 (or whenever Eddie remembers to check)
        </p>

        <div className="space-y-4">
          <p className="font-cyber text-white">
            Look, choomba, here's the deal with your data at Crazy Eddie's:
          </p>

          <div className="border-l-4 border-cyber-green pl-4 py-2">
            <p className="font-cyber text-cyber-green">
              Contact: n1ghtw1re@proton.me
            </p>
          </div>

          <h2 className="font-display text-xl text-cyber-pink mt-6">DATA COLLECTION</h2>
          <p className="font-cyber text-white">
            Eddie doesn't collect data because he can't remember how databases work. 
            Any information you provide is immediately forgotten (probably).
          </p>

          <h2 className="font-display text-xl text-cyber-pink mt-6">DATA STORAGE</h2>
          <p className="font-cyber text-white">
            Storage? What storage? Eddie keeps everything in his head, which means 
            it's probably safer than any corp database.
          </p>

          <h2 className="font-display text-xl text-cyber-pink mt-6">COOKIES</h2>
          <p className="font-cyber text-white">
            We use cookies because Eddie likes snacks. Digital ones too. They help 
            remember your shopping cart (when the system works).
          </p>

          <h2 className="font-display text-xl text-cyber-pink mt-6">THIRD PARTIES</h2>
          <p className="font-cyber text-white">
            Eddie doesn't share your data with anyone. Not because of privacy concerns, 
            but because he's paranoid about corps.
          </p>

          <div className="bg-cyber-black p-4 rounded border border-cyber-yellow mt-6">
            <p className="font-cyber text-cyber-yellow text-sm">
              <span className="font-bold">IMPORTANT:</span> By using this site, you 
              acknowledge that Eddie's security measures consist mainly of "looking 
              suspicious at anyone who asks questions" and "frequently changing locations."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};