import React from 'react';
import Section from '../components/Section';
import { BookOpen, Zap, Briefcase, Users } from 'lucide-react';

export default function Education() {
  return (
    <div className="pt-20">
      <Section 
        id="education" 
        title="Education & Resources" 
        subtitle="Master the world of agentic AI with our curated learning paths and guides."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: 'Glossary', icon: <BookOpen />, desc: 'Key terms and concepts in agentic AI.' },
            { title: 'Learning Paths', icon: <Zap />, desc: 'Structured courses for all levels.' },
            { title: 'Video Library', icon: <Briefcase />, desc: 'Webinars and technical deep dives.' },
            { title: 'Case Studies', icon: <Users />, desc: 'Real-world implementations.' }
          ].map((edu, i) => (
            <div key={i} className="p-8 border border-neutral-100 group">
              <div className="w-12 h-12 bg-neutral-50 flex items-center justify-center text-brand mb-6">
                {edu.icon}
              </div>
              <h3 className="text-lg font-bold mb-2">{edu.title}</h3>
              <p className="text-sm text-neutral-500">{edu.desc}</p>
            </div>
          ))}
        </div>
      </Section>
      
      <Section id="guides" title="Featured Guides" subtitle="Deep dives into specific agentic architectures." dark>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 bg-neutral-800 border border-neutral-700">
            <h4 className="text-xl font-bold mb-4">Introduction to Multi-Agent Systems</h4>
            <p className="text-neutral-400 mb-6 text-sm">Learn how to coordinate multiple autonomous agents to solve complex tasks through emergent behavior.</p>
            <button className="text-brand font-bold uppercase tracking-widest text-xs">Read Guide →</button>
          </div>
          <div className="p-8 bg-neutral-800 border border-neutral-700">
            <h4 className="text-xl font-bold mb-4">Ethical Constraints in Autonomous Agents</h4>
            <p className="text-neutral-400 mb-6 text-sm">A framework for implementing safety and alignment directly into the core logic of agentic systems.</p>
            <button className="text-brand font-bold uppercase tracking-widest text-xs">Read Guide →</button>
          </div>
        </div>
      </Section>
    </div>
  );
}
