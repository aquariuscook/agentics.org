import React from 'react';
import Section from '../components/Section';
import { Calendar, ArrowRight } from 'lucide-react';

export default function Events() {
  return (
    <div className="pt-20">
      <Section 
        id="events" 
        title="Upcoming Events" 
        subtitle="Join us for workshops, webinars, and global summits."
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: 'Global Agentics Summit 2026', date: 'Oct 12-14', location: 'San Francisco, CA', type: 'Conference' },
            { title: 'Open Source AI Workshop', date: 'Nov 05', location: 'Virtual', type: 'Workshop' },
            { title: 'Agentic Systems Webinar', date: 'Dec 01', location: 'Virtual', type: 'Webinar' },
            { title: 'Developer Meetup', date: 'Jan 15', location: 'London, UK', type: 'Meetup' },
            { title: 'AI Ethics Roundtable', date: 'Feb 10', location: 'Virtual', type: 'Discussion' },
            { title: 'Hackathon: Agents for Good', date: 'Mar 20-22', location: 'Berlin, DE', type: 'Hackathon' }
          ].map((event, i) => (
            <div key={i} className="group bg-white p-8 border border-neutral-100 hover:border-brand transition-all cursor-pointer shadow-sm hover:shadow-xl">
              <div className="text-brand font-display font-bold mb-2">{event.date}</div>
              <h3 className="text-xl font-bold mb-4 group-hover:text-brand transition-colors">{event.title}</h3>
              <div className="flex items-center gap-2 text-sm text-neutral-400 mb-6">
                <Calendar size={14} />
                <span>{event.location} • {event.type}</span>
              </div>
              <a href="#" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest group-hover:gap-4 transition-all">
                View Details <ArrowRight size={14} />
              </a>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}
