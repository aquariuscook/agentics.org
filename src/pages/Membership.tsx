import React from 'react';
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

export default function Membership() {
  return (
    <div className="pt-20">
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
              
              <button className={`w-full py-3 font-display uppercase tracking-wider text-sm font-bold transition-all ${tier.highlight ? 'bg-brand text-white hover:bg-brand-dark' : 'bg-neutral-900 text-white hover:bg-neutral-800'}`}>
                {tier.cta}
              </button>
            </div>
          ))}
        </div>
      </Section>
      
      <Section id="faq" title="Membership FAQ" subtitle="Common questions about joining the foundation." dark>
        <div className="max-w-3xl space-y-8">
          <div>
            <h4 className="text-white font-bold mb-2">Can I upgrade my tier later?</h4>
            <p className="text-neutral-400 text-sm">Yes, you can upgrade or downgrade your membership tier at any time through your account dashboard.</p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-2">Are memberships tax-deductible?</h4>
            <p className="text-neutral-400 text-sm">As a 501(c)(3) non-profit, your membership fees may be tax-deductible. Please consult with a tax professional.</p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-2">How do I access the private Discord?</h4>
            <p className="text-neutral-400 text-sm">Once you join as a Builder or Foundation member, you will receive an automated invite link via email.</p>
          </div>
        </div>
      </Section>
    </div>
  );
}
