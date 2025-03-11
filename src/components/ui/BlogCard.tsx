
import React from 'react';
import { BlogPost } from '@/lib/types';
import { Calendar, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface BlogCardProps {
  post: BlogPost;
}

const BlogCard = ({ post }: BlogCardProps) => {
  return (
    <article className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group animate-fade-in">
      <Link to={`/blog/${post.slug}`} className="block">
        <div className="overflow-hidden h-56">
          <img 
            src={post.image} 
            alt={post.title} 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
          />
        </div>
      </Link>
      
      <div className="p-6">
        <div className="flex items-center text-gray-500 mb-3">
          <Calendar size={16} className="mr-2" />
          <span className="text-sm">{post.date}</span>
        </div>
        
        <Link to={`/blog/${post.slug}`} className="block">
          <h3 className="text-xl font-semibold mb-3 text-gray-800 group-hover:text-brand-500 transition-colors">
            {post.title}
          </h3>
        </Link>
        
        <p className="text-gray-600 mb-4 line-clamp-3">
          {post.excerpt}
        </p>
        
        <Link 
          to={`/blog/${post.slug}`} 
          className="inline-flex items-center font-medium text-brand-500 hover:text-brand-600 transition-colors"
        >
          Read More <ArrowRight size={16} className="ml-2" />
        </Link>
      </div>
    </article>
  );
};

export default BlogCard;
