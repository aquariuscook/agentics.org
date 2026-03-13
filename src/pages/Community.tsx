import React from 'react';
import Section from '../components/Section';

export default function Community() {
  return (
    <div className="pt-20">
      <Section 
        id="community" 
        title="Our Community" 
        subtitle="Connect with builders, researchers, and enthusiasts from around the world."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-neutral-50 p-12 border-l-4 border-brand">
            <h3 className="text-2xl font-bold mb-6">Member Directory</h3>
            <p className="text-neutral-600 mb-8">
              Access our global directory of 100K+ members. Connect with experts, find collaborators, and grow your network.
            </p>
            <div className="flex -space-x-4 mb-8">
              {[1, 2, 3, 4, 5].map(i => (
                <img 
                  key={i} 
                  src={`https://i.pravatar.cc/150?u=${i}`} 
                  alt="User" 
                  className="w-12 h-12 rounded-full border-4 border-white"
                  referrerPolicy="no-referrer"
                />
              ))}
              <div className="w-12 h-12 rounded-full border-4 border-white bg-neutral-200 flex items-center justify-center text-xs font-bold">
                +99k
              </div>
            </div>
            <button className="btn-primary">Search Directory</button>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="p-6 bg-white border border-neutral-100 shadow-sm">
              <h4 className="font-bold mb-2">Discussion Forum</h4>
              <p className="text-xs text-neutral-500">Join the conversation on Reddit and Discord.</p>
            </div>
            <div className="p-6 bg-white border border-neutral-100 shadow-sm">
              <h4 className="font-bold mb-2">Swarm Groups</h4>
              <p className="text-xs text-neutral-500">Local chapters and specialized interest groups.</p>
            </div>
            <div className="p-6 bg-white border border-neutral-100 shadow-sm">
              <h4 className="font-bold mb-2">Newsletter</h4>
              <p className="text-xs text-neutral-500">Weekly updates on the state of agentics.</p>
            </div>
            <div className="p-6 bg-white border border-neutral-100 shadow-sm">
              <h4 className="font-bold mb-2">Blog / News</h4>
              <p className="text-xs text-neutral-500">Latest announcements and research.</p>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
