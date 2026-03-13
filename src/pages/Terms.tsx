import React from 'react';
import Section from '../components/Section';

export default function Terms() {
  return (
    <div className="pt-20">
      <Section 
        id="terms" 
        title="Terms of Use" 
        subtitle="Last updated: March 13, 2026"
      >
        <div className="max-w-3xl prose prose-neutral">
          <p className="text-neutral-600 leading-relaxed mb-6">
            By accessing or using the Agentics Foundation website and services, you agree to be bound by these Terms of Use.
          </p>
          
          <h3 className="text-xl font-bold uppercase tracking-tight mt-12 mb-4">1. Acceptance of Terms</h3>
          <p className="text-neutral-600 leading-relaxed mb-6">
            If you do not agree to these terms, please do not use our services. We reserve the right to modify these terms at any time, and your continued use of the services constitutes acceptance of the updated terms.
          </p>
          
          <h3 className="text-xl font-bold uppercase tracking-tight mt-12 mb-4">2. Use of Services</h3>
          <p className="text-neutral-600 leading-relaxed mb-6">
            You agree to use our services only for lawful purposes and in accordance with these terms. You are responsible for maintaining the confidentiality of your account information.
          </p>
          
          <h3 className="text-xl font-bold uppercase tracking-tight mt-12 mb-4">3. Intellectual Property</h3>
          <p className="text-neutral-600 leading-relaxed mb-6">
            All content on our website, including text, graphics, logos, and software, is the property of Agentics Foundation or its licensors and is protected by intellectual property laws.
          </p>
          
          <h3 className="text-xl font-bold uppercase tracking-tight mt-12 mb-4">4. Limitation of Liability</h3>
          <p className="text-neutral-600 leading-relaxed mb-6">
            Agentics Foundation shall not be liable for any direct, indirect, incidental, or consequential damages arising out of your use of our services.
          </p>
        </div>
      </Section>
    </div>
  );
}
