import React from 'react';
import Section from '../components/Section';
import { Mail, MapPin, Phone } from 'lucide-react';

export default function Contact() {
  return (
    <div className="pt-20">
      <Section 
        id="contact" 
        title="Contact Us" 
        subtitle="Have questions? We're here to help you navigate the agentic future."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h3 className="text-2xl font-bold uppercase tracking-tight mb-8">Get in Touch</h3>
            <form className="space-y-6">
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-neutral-500 mb-2">Name</label>
                <input type="text" className="w-full p-4 bg-neutral-50 border border-neutral-200 focus:border-brand outline-none" />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-neutral-500 mb-2">Email</label>
                <input type="email" className="w-full p-4 bg-neutral-50 border border-neutral-200 focus:border-brand outline-none" />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-neutral-500 mb-2">Message</label>
                <textarea rows={6} className="w-full p-4 bg-neutral-50 border border-neutral-200 focus:border-brand outline-none resize-none"></textarea>
              </div>
              <button className="btn-primary w-full py-4">Send Message</button>
            </form>
          </div>
          
          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-bold uppercase tracking-tight mb-8">Foundation HQ</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-brand/10 flex items-center justify-center text-brand shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm uppercase">Address</h4>
                    <p className="text-neutral-500 text-sm">123 Agentic Way, Suite 400<br />San Francisco, CA 94103</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-brand/10 flex items-center justify-center text-brand shrink-0">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm uppercase">Email</h4>
                    <p className="text-neutral-500 text-sm">hello@agentics.foundation</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-brand/10 flex items-center justify-center text-brand shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm uppercase">Phone</h4>
                    <p className="text-neutral-500 text-sm">+1 (555) 123-4567</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-8 bg-neutral-50 border border-neutral-100">
              <h4 className="font-bold uppercase mb-4">Press Inquiries</h4>
              <p className="text-sm text-neutral-500 mb-4">For media and press related questions, please reach out to our communications team.</p>
              <a href="mailto:press@agentics.foundation" className="text-brand font-bold text-sm">press@agentics.foundation</a>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
