import React from 'react';
import { Cpu, Zap, MessageSquare } from 'lucide-react';
import { blogPosts } from '../data/products';

export const Blog: React.FC = () => {
  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center">
          <Cpu size={28} className="text-cyber-blue mr-2" />
          <h1 className="font-display text-3xl text-cyber-blue uppercase font-bold">
            CYBERDECK CHAOS!
          </h1>
        </div>
        <p className="font-cyber text-cyber-green text-sm mt-2">
          Eddie's unfiltered thoughts, tech tips, and stories from the underground.
        </p>
      </div>

      {/* Featured post */}
      <div className="border-2 border-cyber-pink bg-cyber-dark rounded-lg overflow-hidden mb-10">
        <div className="h-40 md:h-56 bg-gradient-to-r from-cyber-blue to-cyber-purple relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <h2 className="font-display text-3xl text-white font-bold text-center px-4 glitch-text">
              {blogPosts[0].title}
            </h2>
          </div>
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/noise.png')] opacity-40 mix-blend-overlay"></div>
        </div>
        <div className="p-6">
          <div className="flex items-center text-sm font-cyber text-cyber-green mb-4">
            <MessageSquare size={16} className="mr-1" />
            <span>{blogPosts[0].date}</span>
          </div>
          <p className="font-cyber text-white mb-4">
            {blogPosts[0].excerpt}
          </p>
          <p className="font-cyber text-white mb-6">
            Look, I'm gonna give it to you straight. The corps don't want you to have this tech. Why? Because they're TERRIFIED of what happens when regular citizens have the same tools they use to monitor and control us!
          </p>
          <p className="font-cyber text-white mb-6">
            Last week, I got my hands on a shipment of NetRunner X9s that "fell off" a Militech transport. Their security? LAUGHABLE. Three rotating patrols and predictable camera sweeps. I was in and out in 7 minutes flat.
          </p>
          <p className="font-cyber text-white mb-6">
            And now YOU can benefit from my "procurement expertise" with prices that'll make your implants short-circuit!
          </p>
          <p className="text-right">
            <button className="cyber-btn">
              READ MORE!
            </button>
          </p>
        </div>
      </div>

      {/* Other posts grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {blogPosts.slice(1).map((post) => (
          <div key={post.id} className="border-2 border-cyber-blue bg-cyber-dark rounded-lg overflow-hidden">
            <div className="p-5">
              <h3 className="font-display text-xl text-cyber-green font-bold mb-2">{post.title}</h3>
              <div className="flex items-center text-xs font-cyber text-cyber-blue mb-3">
                <MessageSquare size={14} className="mr-1" />
                <span>{post.date}</span>
              </div>
              <p className="font-cyber text-white text-sm mb-4">{post.excerpt}</p>
              <button className="cyber-btn text-sm">
                READ MORE
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Eddie's Rant */}
      <div className="mt-10 bg-cyber-dark border-l-4 border-cyber-orange p-6 rounded-md">
        <h3 className="font-display text-xl text-cyber-orange mb-4 flex items-center">
          <Zap size={20} className="mr-2" />
          EDDIE'S RANT OF THE WEEK
        </h3>
        <p className="font-cyber text-white mb-3">
          Listen up, deck-jockeys! I'm sick of customers coming in asking for "official warranty" or "manufacturer support" for their rigs. THIS IS THE UNDERGROUND!
        </p>
        <p className="font-cyber text-white mb-3">
          You want corporate hand-holding? Go pay triple at their sterile, surveillance-filled storefronts! Here at Eddie's, we give you FREEDOM, not paperwork!
        </p>
        <p className="font-cyber text-white">
          But hey, bring me a six-pack of SynthBrew and I might just take a look at that glitching interface module for free. Eddie's word is better than any warranty!
        </p>
        <div className="text-right mt-4">
          <p className="font-display text-sm text-cyber-yellow">
            - CRAZY EDDIE (STILL AT LARGE)
          </p>
        </div>
      </div>
    </div>
  );
};