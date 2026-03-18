import React from 'react';

interface SectionProps {
  id: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  dark?: boolean;
}

export default function Section({ id, title, subtitle, children, dark = false }: SectionProps) {
  return (
    <section 
      id={id} 
      className={`py-24 ${dark ? 'bg-neutral-900 text-white' : 'bg-white text-neutral-900'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">{title}</h2>
            {subtitle && (
              <p className={`text-lg max-w-2xl ${dark ? 'text-neutral-400' : 'text-neutral-600'}`}>
                {subtitle}
              </p>
            )}
            <div className="w-20 h-1.5 bg-brand mt-6"></div>
          </div>
        </div>
        
        <div>
          {children}
        </div>
      </div>
    </section>
  );
}
