
import React from 'react';
import { FeatureItem } from '@/lib/types';
import { CheckCircle, Package, Globe, Leaf } from 'lucide-react';

const features: FeatureItem[] = [
  {
    id: 1,
    title: 'Premium Quality Assurance',
    description: 'We provide the highest grade of makhana, carefully selected and quality checked to ensure excellence in every pack.',
    icon: 'CheckCircle'
  },
  {
    id: 2,
    title: 'Customized Packaging Solutions',
    description: 'Tailor-made packaging options to meet your specific requirements for retail, bulk, or private label needs.',
    icon: 'Package'
  },
  {
    id: 3,
    title: 'Global Import & Export',
    description: 'With a strong distribution network, we export our products to many countries, maintaining quality standards throughout.',
    icon: 'Globe'
  },
  {
    id: 4,
    title: 'Sustainable & Organic Practices',
    description: 'We support eco-friendly cultivation and processing methods, ensuring our products are both sustainable and organic.',
    icon: 'Leaf'
  }
];

const IconComponent = ({ iconName }: { iconName: string }) => {
  switch (iconName) {
    case 'CheckCircle':
      return <CheckCircle className="text-brand-500" size={36} />;
    case 'Package':
      return <Package className="text-brand-500" size={36} />;
    case 'Globe':
      return <Globe className="text-brand-500" size={36} />;
    case 'Leaf':
      return <Leaf className="text-brand-500" size={36} />;
    default:
      return null;
  }
};

const WhyChooseUs = () => {
  return (
    <section id="why-choose-us" className="py-20">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-left order-2 lg:order-1">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div 
                  key={feature.id} 
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="mb-4">
                    <IconComponent iconName={feature.icon} />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="order-1 lg:order-2 animate-fade-in-right">
            <div className="mb-6">
              <div className="inline-block px-4 py-1 rounded-full bg-brand-100 text-brand-700 font-medium text-sm mb-4">
                Why Choose Us
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                The Best Foxnut Supplier You Can Trust
              </h2>
              <p className="text-gray-600 mb-6">
                With decades of experience in cultivating and processing foxnuts, we have established ourselves as a trusted supplier globally. Our commitment to quality, sustainability, and customer satisfaction sets us apart.
              </p>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=800"
                alt="Premium foxnuts being inspected" 
                className="rounded-xl shadow-lg" 
              />
              <div className="absolute -bottom-6 -right-6 bg-brand-500 text-white p-4 rounded-xl shadow-lg max-w-xs">
                <p className="text-lg font-semibold">20+ Years</p>
                <p className="text-sm">Of providing premium quality foxnuts</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
