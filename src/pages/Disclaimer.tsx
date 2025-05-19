import React from 'react';
import { AlertTriangle } from 'lucide-react';

export const Disclaimer: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <div className="flex items-center">
          <AlertTriangle size={28} className="text-cyber-red mr-2" />
          <h1 className="font-display text-3xl text-cyber-red uppercase font-bold">
            Legal Disclaimer
          </h1>
        </div>
      </div>

      <div className="bg-cyber-dark border-2 border-cyber-red p-6 rounded-lg space-y-6">
        <p className="font-cyber text-cyber-yellow">
          ATTENTION CORPORATE LAWYERS: This is totally legitimate. Probably.
        </p>

        <div className="space-y-4">
          <div className="border-l-4 border-cyber-green pl-4 py-2">
            <p className="font-cyber text-cyber-green">
              Contact: n1ghtw1re@proton.me
            </p>
          </div>

          <p className="font-cyber text-white">
            Crazy Eddie's Cyberdeck Emporium operates under the following disclaimers:
          </p>

          <h2 className="font-display text-xl text-cyber-pink mt-6">LEGAL STATUS</h2>
          <p className="font-cyber text-white">
            All operations are completely legitimate according to at least one jurisdiction 
            somewhere in the world (Eddie's still looking for which one).
          </p>

          <h2 className="font-display text-xl text-cyber-pink mt-6">PRODUCT ORIGINS</h2>
          <p className="font-cyber text-white">
            All merchandise was acquired through means that Eddie's lawyer advised him 
            not to discuss in writing. Or verbally. Or ever.
          </p>

          <h2 className="font-display text-xl text-cyber-pink mt-6">WARRANTY CLAIMS</h2>
          <p className="font-cyber text-white">
            Any similarity between our products and those produced by major corporations 
            is purely coincidental and definitely not because they "fell off a truck."
          </p>

          <div className="bg-cyber-black p-4 rounded border border-cyber-yellow mt-6">
            <p className="font-cyber text-cyber-yellow text-sm">
              <span className="font-bold">NOTICE:</span> This disclaimer was written 
              by Eddie himself after watching exactly one legal drama BTL. It's probably 
              not legally binding, but who's counting?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};