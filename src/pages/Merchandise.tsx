import React from 'react';
import Section from '../components/Section';

export default function Merchandise() {
  return (
    <div className="pt-20">
      <Section 
        id="merchandise" 
        title="Merchandise" 
        subtitle="Support the foundation and wear your passion."
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { name: 'Agentics Hoodie', price: '$55.00', img: 'https://picsum.photos/seed/hoodie/400/500' },
            { name: 'Foundation Tee', price: '$28.00', img: 'https://picsum.photos/seed/tee/400/500' },
            { name: 'Agentic Systems Cap', price: '$24.00', img: 'https://picsum.photos/seed/cap/400/500' },
            { name: 'Developer Mug', price: '$18.00', img: 'https://picsum.photos/seed/mug/400/500' },
            { name: 'Sticker Pack', price: '$12.00', img: 'https://picsum.photos/seed/stickers/400/500' },
            { name: 'Notebook', price: '$22.00', img: 'https://picsum.photos/seed/notebook/400/500' }
          ].map((item, i) => (
            <div key={i} className="cursor-pointer">
              <div className="aspect-[4/5] overflow-hidden bg-neutral-100 mb-4 relative">
                <img 
                  src={item.img} 
                  alt={item.name} 
                  className="w-full h-full object-cover grayscale"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-brand text-white text-center font-display font-bold uppercase tracking-widest text-sm">
                  Add to Cart
                </div>
              </div>
              <h3 className="font-bold text-lg">{item.name}</h3>
              <p className="text-neutral-500 font-mono text-sm">{item.price}</p>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}
