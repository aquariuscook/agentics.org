import React from 'react';
import Hero from '../components/Hero';
import Section from '../components/Section';
import { Check } from 'lucide-react';

const tiers = [
  {
    name: 'Explorer',
    price: 'Free',
    description: 'Perfect for those just starting their journey in agentic AI.',
    features: [
      'Access to public community forums',
      'Weekly newsletter',
      'Basic learning resources',
      'Public event notifications'
    ],
    cta: 'Start for Free',
    highlight: false
  },
  {
    name: 'Builder',
    price: '$19',
    period: '/mo',
    description: 'For active developers and researchers building the future.',
    features: [
      'All Explorer benefits',
      'Access to private Discord channels',
      'Early access to open-source tools',
      'Member directory listing',
      'Exclusive webinars'
    ],
    cta: 'Join as Builder',
    highlight: true
  },
  {
    name: 'Foundation',
    price: '$49',
    period: '/mo',
    description: 'For professionals and organizations leading the space.',
    features: [
      'All Builder benefits',
      'Priority support',
      'Job board posting credits',
      'Partner network access',
      'Foundation voting rights'
    ],
    cta: 'Join Foundation',
    highlight: false
  }
];

export default function Home() {
  return (
    <>
      <Hero />

      {/* Membership Tiers Section */}
      <Section 
        id="membership" 
        title="Membership Tiers" 
        subtitle="Choose the level of involvement that fits your journey. Every member helps us build a more open and accessible AI future."
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((tier) => (
            <div 
              key={tier.name}
              className={`flex flex-col p-8 border ${tier.highlight ? 'border-brand ring-1 ring-brand bg-brand/5' : 'border-neutral-200'} relative`}
            >
              {tier.highlight && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1">
                  Most Popular
                </div>
              )}
              <div className="mb-8">
                <h3 className="text-2xl font-bold uppercase tracking-tight mb-2">{tier.name}</h3>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-4xl font-bold">{tier.price}</span>
                  {tier.period && <span className="text-neutral-500 text-sm">{tier.period}</span>}
                </div>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  {tier.description}
                </p>
              </div>
              
              <ul className="space-y-4 mb-10 flex-grow">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm text-neutral-600">
                    <Check size={16} className="text-brand shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button className={`w-full py-3 font-display uppercase tracking-wider text-sm font-bold ${tier.highlight ? 'bg-brand text-white hover:bg-brand-dark' : 'bg-neutral-900 text-white hover:bg-neutral-800'}`}>
                {tier.cta}
              </button>
            </div>
          ))}
        </div>
      </Section>

      {/* Simple About Section */}
      <Section 
        id="about-preview" 
        title="Our Mission" 
        subtitle="The Agentics Foundation is a global non-profit dedicated to open-source agentic AI."
        dark
      >
        <div className="max-w-3xl">
          <p className="text-xl text-neutral-400 leading-relaxed mb-8">
            We believe that the most powerful technology in human history should be open, transparent, and accessible to everyone. Our mission is to provide the infrastructure, education, and community needed to build ethical autonomous systems.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div>
              <h4 className="text-white font-bold uppercase tracking-tight mb-2">Open Ecosystem</h4>
              <p className="text-sm text-neutral-500">We maintain core open-source libraries that power thousands of agentic applications worldwide.</p>
            </div>
            <div>
              <h4 className="text-white font-bold uppercase tracking-tight mb-2">Global Community</h4>
              <p className="text-sm text-neutral-500">With over 100,000 members across 50 countries, we are the largest community in the space.</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Join CTA Section */}
      <section id="join" className="py-32 bg-brand text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <h2 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            Join the Movement
          </h2>
          <p className="text-xl mb-12 opacity-90 max-w-2xl mx-auto">
            Whether you're a developer, researcher, or enthusiast, there's a place for you in the Agentics Foundation.
          </p>
          <button className="bg-white text-brand px-12 py-4 font-display text-xl font-bold uppercase tracking-widest hover:bg-neutral-100 shadow-2xl">
            Become a Member
          </button>
        </div>
      </section>
    </>
  );
}
