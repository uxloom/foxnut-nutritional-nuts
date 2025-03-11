
import React from 'react';
import ProductCard from '@/components/ui/ProductCard';
import { Product } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

// Sample product data
const products: Product[] = [
  {
    id: 1,
    name: 'Premium Siliguri Makhana',
    slug: 'premium-siliguri-makhana',
    image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=800',
    category: 'Premium',
    sizes: ['250g', '500g', '1kg'],
    prices: [7.99, 14.99, 28.99],
    weight: ['250g', '500g', '1kg'],
    description: 'Our premium grade Siliguri makhana, known for its exceptional size and taste.',
  },
  {
    id: 2,
    name: 'Jumbo Shaped Makhana',
    slug: 'jumbo-shaped-makhana',
    image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=800',
    category: 'Premium',
    sizes: ['250g', '500g', '1kg'],
    prices: [9.99, 18.99, 35.99],
    weight: ['250g', '500g', '1kg'],
    description: 'Extra large foxnuts with superior taste and crunchy texture.',
  },
  {
    id: 3,
    name: 'Roasted Spiced Makhana',
    slug: 'roasted-spiced-makhana',
    image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=800',
    category: 'Flavored',
    sizes: ['250g', '500g', '1kg'],
    prices: [8.99, 16.99, 31.99],
    weight: ['250g', '500g', '1kg'],
    description: 'Deliciously spiced and roasted foxnuts, perfect for a healthy snack.',
  }
];

const VarietiesSection = () => {
  return (
    <section id="varieties" className="py-20 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-1 rounded-full bg-brand-100 text-brand-700 font-medium text-sm mb-4">
            Our Products
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Variety & Quality of Foxnuts
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We offer a diverse range of premium quality foxnuts to meet various culinary needs and preferences.
            Explore our selection of the finest makhana products.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button className="button-primary">
            <span>Explore All Products</span>
            <ArrowRight size={18} />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default VarietiesSection;
