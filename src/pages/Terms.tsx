import React from 'react';
import { Scale } from 'lucide-react';

export const Terms: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <div className="flex items-center">
          <Scale size={28} className="text-cyber-blue mr-2" />
          <h1 className="font-display text-3xl text-cyber-blue uppercase font-bold">
            Terms of Service
          </h1>
        </div>
      </div>

      <div className="bg-cyber-dark border-2 border-cyber-blue p-6 rounded-lg space-y-6">
        <p className="font-cyber text-cyber-yellow">
          LAST UPDATED: Whenever Eddie last had to dodge a corp raid
        </p>

        <div className="space-y-4">
          <p className="font-cyber text-white">
            By accessing Crazy Eddie's Cyberdeck Emporium, you agree to the following terms:
          </p>

          <div className="border-l-4 border-cyber-green pl-4 py-2">
            <p className="font-cyber text-cyber-green">
              Contact: n1ghtw1re@proton.me
            </p>
          </div>

          <h2 className="font-display text-xl text-cyber-pink mt-6">1. ACCEPTANCE OF TERMS</h2>
          <p className="font-cyber text-white">
            By using this site, you agree to not ask where the merchandise came from. 
            Eddie has receipts, but the dog ate them. All of them.
          </p>

          <h2 className="font-display text-xl text-cyber-pink mt-6">2. WARRANTIES</h2>
          <p className="font-cyber text-white">
            All products are sold "as is" with a guarantee that they worked at least 
            once in the past week. Maybe. Eddie's memory isn't what it used to be.
          </p>

          <h2 className="font-display text-xl text-cyber-pink mt-6">3. RETURNS</h2>
          <p className="font-cyber text-white">
            Returns are accepted only if you can find Eddie's shop again. Good luck 
            with that, he moves it every few weeks.
          </p>

          <h2 className="font-display text-xl text-cyber-pink mt-6">4. LIABILITY</h2>
          <p className="font-cyber text-white">
            Eddie is not responsible for any corporate entanglements, neural 
            meltdowns, or spontaneous deck combustions that may occur.
          </p>

          <div className="bg-cyber-black p-4 rounded border border-cyber-yellow mt-6">
            <p className="font-cyber text-cyber-yellow text-sm">
              <span className="font-bold">REMEMBER:</span> These terms are as binding 
              as Eddie's word, which means they're subject to change based on his mood 
              and the current corporate threat level.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};