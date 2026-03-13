import React from 'react';
import Section from '../components/Section';

export default function Privacy() {
  return (
    <div className="pt-20">
      <Section 
        id="privacy" 
        title="Privacy Policy" 
        subtitle="Last updated: March 13, 2026"
      >
        <div className="max-w-3xl prose prose-neutral">
          <p className="text-neutral-600 leading-relaxed mb-6">
            At Agentics Foundation, we take your privacy seriously. This policy describes how we collect, use, and handle your information when you use our website and services.
          </p>
          
          <h3 className="text-xl font-bold uppercase tracking-tight mt-12 mb-4">1. Information We Collect</h3>
          <p className="text-neutral-600 leading-relaxed mb-6">
            We collect information you provide directly to us, such as when you create an account, join our membership, or contact us for support. This may include your name, email address, and professional background.
          </p>
          
          <h3 className="text-xl font-bold uppercase tracking-tight mt-12 mb-4">2. How We Use Information</h3>
          <p className="text-neutral-600 leading-relaxed mb-6">
            We use the information we collect to provide, maintain, and improve our services, to communicate with you, and to protect the Agentics Foundation and our users.
          </p>
          
          <h3 className="text-xl font-bold uppercase tracking-tight mt-12 mb-4">3. Data Security</h3>
          <p className="text-neutral-600 leading-relaxed mb-6">
            We implement reasonable security measures to protect your information from unauthorized access, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
          </p>
          
          <h3 className="text-xl font-bold uppercase tracking-tight mt-12 mb-4">4. Your Choices</h3>
          <p className="text-neutral-600 leading-relaxed mb-6">
            You may update or delete your account information at any time by logging into your account settings or contacting us directly.
          </p>
        </div>
      </Section>
    </div>
  );
}
