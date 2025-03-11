
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ProductCard from '@/components/ui/ProductCard';
import { Product } from '@/lib/types';

// Sample product data (expanded from Varieties section)
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
  },
  {
    id: 4,
    name: 'Organic Makhana',
    slug: 'organic-makhana',
    image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=800',
    category: 'Organic',
    sizes: ['250g', '500g', '1kg'],
    prices: [10.99, 19.99, 37.99],
    weight: ['250g', '500g', '1kg'],
    description: 'Certified organic foxnuts grown without pesticides or chemical fertilizers.',
  },
  {
    id: 5,
    name: 'Standard Makhana',
    slug: 'standard-makhana',
    image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=800',
    category: 'Standard',
    sizes: ['250g', '500g', '1kg'],
    prices: [6.99, 12.99, 24.99],
    weight: ['250g', '500g', '1kg'],
    description: 'High-quality standard foxnuts, perfect for everyday consumption.',
  },
  {
    id: 6,
    name: 'Chocolate Coated Makhana',
    slug: 'chocolate-coated-makhana',
    image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=800',
    category: 'Flavored',
    sizes: ['250g', '500g'],
    prices: [11.99, 21.99],
    weight: ['250g', '500g'],
    description: 'Delicious chocolate-coated foxnuts, a healthy alternative to chocolate snacks.',
  },
];

// Categories for filter
const categories = [
  'All',
  'Premium',
  'Standard',
  'Organic',
  'Flavored',
];

const Products = () => {
  const [activeCategory, setActiveCategory] = React.useState('All');
  const [filteredProducts, setFilteredProducts] = React.useState(products);

  const filterProducts = (category: string) => {
    setActiveCategory(category);
    if (category === 'All') {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(products.filter(product => product.category === category));
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-32">
        <section className="py-12 bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Our Products
              </h1>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Explore our wide range of premium quality foxnuts sourced directly from the best farms in Bihar, India.
              </p>
            </div>
            
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => filterProducts(category)}
                  className={`px-6 py-2 rounded-full transition-colors ${
                    activeCategory === category
                      ? 'bg-brand-500 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
            
            {/* Products Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
            
            {/* Empty State */}
            {filteredProducts.length === 0 && (
              <div className="text-center py-16">
                <h3 className="text-2xl font-semibold mb-4">No products found</h3>
                <p className="text-gray-600">
                  No products match your current filter. Please try a different category.
                </p>
              </div>
            )}
          </div>
        </section>
        
        {/* Bulk Order CTA */}
        <section className="py-16 bg-brand-500 text-white">
          <div className="container-custom text-center">
            <h2 className="text-3xl font-bold mb-6">
              Looking for Bulk Orders?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              We offer competitive prices for bulk orders and can customize packaging according to your requirements.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="tel:+919876543210" 
                className="inline-flex items-center bg-white text-brand-600 hover:bg-gray-100 transition-colors px-8 py-4 rounded-full font-semibold"
              >
                Call for Bulk Orders
              </a>
              <a 
                href="/contact" 
                className="inline-flex items-center bg-transparent border-2 border-white text-white hover:bg-white hover:text-brand-600 transition-colors px-8 py-4 rounded-full font-semibold"
              >
                Contact Us
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Products;
