
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 overflow-hidden">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative z-10 rounded-xl overflow-hidden shadow-xl animate-fade-in-left">
              <img
                src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=800"
                alt="Foxnuts (Makhana) in a wooden bowl"
                className="w-full h-auto object-cover"
              />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-24 h-24 bg-brand-500/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-brand-500/10 rounded-full translate-x-1/4 translate-y-1/4"></div>
            <div className="absolute top-1/2 right-0 w-16 h-16 bg-brand-500/20 rounded-full translate-x-1/3"></div>
          </div>
          
          <div className="animate-fade-in-right">
            <div className="inline-block px-4 py-1 rounded-full bg-brand-100 text-brand-700 font-medium text-sm mb-6">
              About FoxNut (Makhana)
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              A Superfood with Centuries of History
            </h2>
            
            <p className="text-gray-700 mb-6">
              Makhana, or fox nuts, has been cultivated in the Indian subcontinent for centuries. Known as a superfood, it has been included in traditional diets and Ayurvedic medicine for its nutritional benefits and healing properties.
            </p>
            
            <p className="text-gray-700 mb-6">
              Harvested from the Euryale Ferox plant that grows in ponds, foxnuts are processed to create the white, popped seed kernels that are low in calories, high in protein, and packed with essential nutrients.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-brand-500">100%</span>
                <span className="text-gray-600">Natural & Pure</span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-brand-500">20+</span>
                <span className="text-gray-600">Years Experience</span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-brand-500">5+</span>
                <span className="text-gray-600">Varieties</span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-brand-500">50+</span>
                <span className="text-gray-600">Countries Served</span>
              </div>
            </div>
            
            <Button className="button-primary">
              <span>Learn More</span>
              <ArrowRight size={18} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
