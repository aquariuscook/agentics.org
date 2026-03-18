import React from 'react';
import Section from '../components/Section';

export default function About() {
  return (
    <div className="pt-20">
      <Section 
        id="about" 
        title="About Agentics" 
        subtitle="We are a global foundation dedicated to making AI innovation and education open to everyone through open-source agentic AI systems."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold uppercase tracking-tight">Our Mission</h3>
            <p className="text-neutral-600 leading-relaxed">
              The Agentics Foundation was born from a simple belief: the future of AI should be built by the many, not the few. We focus on open-source agentic systems that empower individuals and organizations to create autonomous solutions that are ethical, transparent, and accessible.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="p-4 border border-neutral-100 bg-neutral-50">
                <h4 className="font-bold text-brand mb-1">Open Source</h4>
                <p className="text-xs text-neutral-500">Transparent and collaborative development.</p>
              </div>
              <div className="p-4 border border-neutral-100 bg-neutral-50">
                <h4 className="font-bold text-brand mb-1">Education</h4>
                <p className="text-xs text-neutral-500">Free resources for all skill levels.</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://picsum.photos/seed/mission/800/600" 
              alt="Team working" 
              className="w-full h-auto grayscale"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-brand/10 -z-10"></div>
          </div>
        </div>
      </Section>
      
      <Section id="team" title="Our Leadership" subtitle="Meet the people driving the foundation forward.">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="text-center">
              <img 
                src={`https://i.pravatar.cc/300?u=leader${i}`} 
                alt="Leader" 
                className="w-full aspect-square object-cover grayscale mb-4"
                referrerPolicy="no-referrer"
              />
              <h4 className="font-bold uppercase">Leader Name {i}</h4>
              <p className="text-xs text-neutral-500 uppercase tracking-widest">Board Member</p>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}
