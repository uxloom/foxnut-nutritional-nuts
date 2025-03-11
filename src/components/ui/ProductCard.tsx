
import React from 'react';
import { CheckCircle } from 'lucide-react';
import { Product } from '@/lib/types';
import { Link } from 'react-router-dom';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group animate-fade-in">
      <div className="relative">
        <div className="absolute top-3 left-3 z-10">
          <div className="bg-brand-500 text-white px-3 py-1 rounded-full text-sm font-medium">
            Popular
          </div>
        </div>
        
        <div className="overflow-hidden">
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-500" 
          />
        </div>
      </div>
      
      <div className="p-5">
        <h3 className="text-xl font-semibold mb-3 text-gray-800">
          {product.name}
        </h3>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {product.sizes.map((size, index) => (
            <div key={index} className="flex items-center gap-1">
              <span className="text-gray-700 font-medium">{size}</span>
              {index < product.sizes.length - 1 && <span className="text-gray-400">•</span>}
            </div>
          ))}
        </div>
        
        <div className="flex flex-wrap gap-4 mb-4">
          {product.prices.map((price, index) => (
            <div key={index} className="flex items-baseline gap-1">
              <span className="text-lg font-bold text-brand-500">${price}</span>
              <span className="text-sm text-gray-600">/ {product.weight[index]}</span>
            </div>
          ))}
        </div>
        
        <div className="mb-4">
          <div className="flex items-center gap-2 text-gray-600 mb-1">
            <CheckCircle size={16} className="text-brand-500" />
            <span>Premium quality</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600 mb-1">
            <CheckCircle size={16} className="text-brand-500" />
            <span>100% organic</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <CheckCircle size={16} className="text-brand-500" />
            <span>Free shipping available</span>
          </div>
        </div>
        
        <Link 
          to={`/products/${product.slug}`} 
          className="block text-center bg-brand-500 hover:bg-brand-600 text-white py-3 px-4 rounded-md font-medium transition-colors duration-300"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
