
import React from 'react';
import { Partner } from '@/lib/types';

// Sample partner data
const partners: Partner[] = [
  {
    id: 1,
    name: 'Global G.A.P',
    logo: 'https://via.placeholder.com/150x80?text=Global+G.A.P',
  },
  {
    id: 2,
    name: 'APEDA',
    logo: 'https://via.placeholder.com/150x80?text=APEDA',
  },
  {
    id: 3,
    name: 'FSSAI',
    logo: 'https://via.placeholder.com/150x80?text=FSSAI',
  },
  {
    id: 4,
    name: 'Make in India',
    logo: 'https://via.placeholder.com/150x80?text=Make+in+India',
  },
  {
    id: 5,
    name: 'Startup India',
    logo: 'https://via.placeholder.com/150x80?text=Startup+India',
  },
];

const PartnersSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6">
            Registered With
          </h2>
          <div className="w-16 h-1 bg-brand-500 mx-auto"></div>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {partners.map((partner) => (
            <div
              key={partner.id}
              className="grayscale hover:grayscale-0 opacity-80 hover:opacity-100 transition-all duration-300"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-16 md:h-20 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
