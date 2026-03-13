import React from 'react';
import Section from '../components/Section';

export default function Jobs() {
  return (
    <div className="pt-20">
      <Section 
        id="jobs" 
        title="Agentics Job Board" 
        subtitle="Find your next role in the most exciting space in technology."
      >
        <div className="space-y-4">
          {[
            { role: 'Senior AI Agent Engineer', company: 'Nexus AI', location: 'Remote', salary: '$160k - $220k' },
            { role: 'Product Manager (Agentic Systems)', company: 'FutureFlow', location: 'New York, NY', salary: '$140k - $190k' },
            { role: 'Open Source Contributor', company: 'Agentics Foundation', location: 'Global', salary: 'Stipend' },
            { role: 'Machine Learning Researcher', company: 'DeepMinded', location: 'London, UK', salary: '£120k - £180k' },
            { role: 'Frontend Engineer (React)', company: 'AgentUI', location: 'Remote', salary: '$110k - $160k' },
            { role: 'Technical Writer', company: 'DocuAgent', location: 'Remote', salary: '$90k - $130k' }
          ].map((job, i) => (
            <div key={i} className="flex flex-col md:flex-row md:items-center justify-between p-6 border border-neutral-100 hover:bg-neutral-50 transition-colors cursor-pointer group">
              <div>
                <h3 className="text-xl font-bold group-hover:text-brand transition-colors">{job.role}</h3>
                <p className="text-neutral-400 text-sm">{job.company} • {job.location}</p>
              </div>
              <div className="mt-4 md:mt-0 flex items-center gap-6">
                <span className="text-sm font-mono text-neutral-500">{job.salary}</span>
                <button className="px-4 py-2 border border-brand text-brand text-xs font-bold uppercase tracking-widest hover:bg-brand hover:text-white transition-all">
                  Apply
                </button>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}
