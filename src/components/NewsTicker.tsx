import React from 'react';

const newsItems = [
  "CORPORATE RAID ALERT: Eddie somehow got a shipment of top-tier NetStar decks!",
  "BREAKING: Crazy Eddie just slashed prices on ALL TechDiver models!",
  "WARNING: Night City officials looking for unlicensed cyberdeck dealers again...",
  "HOT TIP: Come after midnight for the REAL under-the-counter specials!",
  "RUMOR: Eddie might have gotten his hands on a prototype Militech tactical model...",
  "CUSTOMER ALERT: The '3-second reboot' feature on last week's models was TOTALLY intentional!",
  "THEFT REPORT: Crazy Eddie denies allegations of 'falling off the back of a corp truck'"
];

export const NewsTicker: React.FC = () => {
  return (
    <div className="bg-cyber-black border-y border-cyber-pink overflow-hidden py-1 relative">
      <div className="news-ticker whitespace-nowrap inline-block font-glitch text-cyber-green">
        {newsItems.map((item, index) => (
          <span key={index} className="mx-8">{item}</span>
        ))}
      </div>
      {/* Add slight gradient overlay at edges to fade out text */}
      <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-cyber-black to-transparent z-10"></div>
      <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-cyber-black to-transparent z-10"></div>
    </div>
  );
};