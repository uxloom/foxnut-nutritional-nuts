
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-24 overflow-hidden relative subtle-bg">
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-left">
            <div className="inline-block px-4 py-1 rounded-full bg-brand-100 text-brand-700 font-medium text-sm mb-6">
              Premium Quality
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Premium Quality
              <br/>
              <span className="text-brand-500">FoxNuts</span> (Makhana)
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-lg">
              We've been a supplier of high-quality Makhana products from Bihar, India for over 20 years.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="button-primary">
                <span>Get a Quote</span>
                <ArrowRight size={18} />
              </Button>
              <Button className="button-secondary">
                Explore Products
              </Button>
            </div>
          </div>
          
          <div className="relative animate-fade-in-right">
            <div className="relative z-10">
              <img
                src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=800"
                alt="Foxnuts in a bowl"
                className="rounded-xl shadow-2xl"
              />
            </div>
            
            {/* Floating foxnut elements */}
            <div className="absolute top-1/4 left-0 transform -translate-x-1/2 animate-float" style={{ animationDelay: '0.5s' }}>
              <div className="w-16 h-16 rounded-full bg-white shadow-lg p-3">
                <img src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=200" alt="" className="w-full h-full object-cover rounded-full" />
              </div>
            </div>
            <div className="absolute bottom-1/4 right-0 transform translate-x-1/2 animate-float" style={{ animationDelay: '1.5s' }}>
              <div className="w-20 h-20 rounded-full bg-white shadow-lg p-3">
                <img src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=200" alt="" className="w-full h-full object-cover rounded-full" />
              </div>
            </div>
            <div className="absolute top-1/3 right-1/3 animate-float" style={{ animationDelay: '1s' }}>
              <div className="w-12 h-12 rounded-full bg-white shadow-lg p-2">
                <img src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=200" alt="" className="w-full h-full object-cover rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Wave SVG at the bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full">
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
